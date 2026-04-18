import { useResume } from '../../context/ResumeContext'
import type { Experience } from '../../types/resume'
import { Plus, Trash2 } from 'lucide-react'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

const emptyExperience: Omit<Experience, 'id'> = {
  company: '',
  position: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
}

export default function StepExperience() {
  const { resume, dispatch } = useResume()
  const { experience } = resume

  const addExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: { ...emptyExperience, id: generateId() },
    })
  }

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    const exp = experience.find((e) => e.id === id)
    if (exp) {
      dispatch({
        type: 'UPDATE_EXPERIENCE',
        payload: { ...exp, [field]: value },
      })
    }
  }

  const removeExperience = (id: string) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', payload: id })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
          <p className="mt-1 text-gray-600">Add your work history.</p>
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="btn btn-outline btn-sm"
        >
          <Plus className="h-4 w-4" />
          Add Experience
        </button>
      </div>

      {experience.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">No experience added yet.</p>
          <button
            type="button"
            onClick={addExperience}
            className="btn btn-primary mt-4"
          >
            <Plus className="h-4 w-4" />
            Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-gray-700">
                  Experience #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeExperience(exp.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Company *</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, 'company', e.target.value)
                    }
                    className="input"
                    placeholder="Company name"
                    required
                  />
                </div>

                <div>
                  <label className="label">Position *</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, 'position', e.target.value)
                    }
                    className="input"
                    placeholder="Job title"
                    required
                  />
                </div>

                <div>
                  <label className="label">Location</label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) =>
                      updateExperience(exp.id, 'location', e.target.value)
                    }
                    className="input"
                    placeholder="San Francisco, CA"
                  />
                </div>

                <div className="flex items-center pt-6">
                  <input
                    type="checkbox"
                    id={`current-${exp.id}`}
                    checked={exp.current}
                    onChange={(e) =>
                      updateExperience(exp.id, 'current', e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor={`current-${exp.id}`} className="ml-2 text-sm text-gray-700">
                    I currently work here
                  </label>
                </div>

                <div>
                  <label className="label">Start Date</label>
                  <input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, 'startDate', e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">End Date</label>
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, 'endDate', e.target.value)
                    }
                    className="input"
                    disabled={exp.current}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="label">Description</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, 'description', e.target.value)
                    }
                    className="input min-h-[120px]"
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
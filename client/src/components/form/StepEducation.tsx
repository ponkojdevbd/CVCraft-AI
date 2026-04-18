import { useResume } from '../../context/ResumeContext'
import type { Education } from '../../types/resume'
import { Plus, Trash2 } from 'lucide-react'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

const emptyEducation: Omit<Education, 'id'> = {
  institution: '',
  degree: '',
  fieldOfStudy: '',
  startDate: '',
  endDate: '',
  gpa: '',
  description: '',
}

export default function StepEducation() {
  const { resume, dispatch } = useResume()
  const { education } = resume

  const addEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
      payload: { ...emptyEducation, id: generateId() },
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    const edu = education.find((e) => e.id === id)
    if (edu) {
      dispatch({
        type: 'UPDATE_EDUCATION',
        payload: { ...edu, [field]: value },
      })
    }
  }

  const removeEducation = (id: string) => {
    dispatch({ type: 'REMOVE_EDUCATION', payload: id })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          <p className="mt-1 text-gray-600">Add your educational background.</p>
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="btn btn-outline btn-sm"
        >
          <Plus className="h-4 w-4" />
          Add Education
        </button>
      </div>

      {education.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">No education added yet.</p>
          <button
            type="button"
            onClick={addEducation}
            className="btn btn-primary mt-4"
          >
            <Plus className="h-4 w-4" />
            Add Your First Education
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-gray-700">
                  Education #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeEducation(edu.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Institution *</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(edu.id, 'institution', e.target.value)
                    }
                    className="input"
                    placeholder="University name"
                    required
                  />
                </div>

                <div>
                  <label className="label">Degree *</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, 'degree', e.target.value)
                    }
                    className="input"
                    placeholder="Bachelor of Science"
                    required
                  />
                </div>

                <div>
                  <label className="label">Field of Study *</label>
                  <input
                    type="text"
                    value={edu.fieldOfStudy}
                    onChange={(e) =>
                      updateEducation(edu.id, 'fieldOfStudy', e.target.value)
                    }
                    className="input"
                    placeholder="Computer Science"
                    required
                  />
                </div>

                <div>
                  <label className="label">GPA</label>
                  <input
                    type="text"
                    value={edu.gpa || ''}
                    onChange={(e) =>
                      updateEducation(edu.id, 'gpa', e.target.value)
                    }
                    className="input"
                    placeholder="3.8 / 4.0"
                  />
                </div>

                <div>
                  <label className="label">Start Date</label>
                  <input
                    type="month"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, 'startDate', e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">End Date</label>
                  <input
                    type="month"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, 'endDate', e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="label">Description</label>
                  <textarea
                    value={edu.description || ''}
                    onChange={(e) =>
                      updateEducation(edu.id, 'description', e.target.value)
                    }
                    className="input min-h-[80px]"
                    placeholder="Relevant coursework, honors, achievements..."
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
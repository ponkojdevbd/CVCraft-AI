import { useResume } from '../../context/ResumeContext'
import type { Project } from '../../types/resume'
import { Plus, Trash2 } from 'lucide-react'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

const emptyProject: Omit<Project, 'id'> = {
  name: '',
  description: '',
  technologies: [],
  url: '',
  startDate: '',
  endDate: '',
}

export default function StepProjects() {
  const { resume, dispatch } = useResume()
  const { projects } = resume

  const addProject = () => {
    dispatch({
      type: 'ADD_PROJECT',
      payload: { ...emptyProject, id: generateId() },
    })
  }

  const updateProject = (id: string, field: string, value: string | string[]) => {
    const proj = projects.find((p) => p.id === id)
    if (proj) {
      dispatch({
        type: 'UPDATE_PROJECT',
        payload: { ...proj, [field]: value },
      })
    }
  }

  const removeProject = (id: string) => {
    dispatch({ type: 'REMOVE_PROJECT', payload: id })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="mt-1 text-gray-600">Showcase your notable projects.</p>
        </div>
        <button
          type="button"
          onClick={addProject}
          className="btn btn-outline btn-sm"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">No projects added yet.</p>
          <button
            type="button"
            onClick={addProject}
            className="btn btn-primary mt-4"
          >
            <Plus className="h-4 w-4" />
            Add Your First Project
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="relative rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-gray-700">
                  Project #{index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeProject(proj.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Project Name *</label>
                  <input
                    type="text"
                    value={proj.name}
                    onChange={(e) =>
                      updateProject(proj.id, 'name', e.target.value)
                    }
                    className="input"
                    placeholder="My Awesome Project"
                    required
                  />
                </div>

                <div>
                  <label className="label">Project URL</label>
                  <input
                    type="url"
                    value={proj.url || ''}
                    onChange={(e) =>
                      updateProject(proj.id, 'url', e.target.value)
                    }
                    className="input"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <label className="label">Start Date</label>
                  <input
                    type="month"
                    value={proj.startDate}
                    onChange={(e) =>
                      updateProject(proj.id, 'startDate', e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">End Date</label>
                  <input
                    type="month"
                    value={proj.endDate}
                    onChange={(e) =>
                      updateProject(proj.id, 'endDate', e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="label">Technologies Used</label>
                  <input
                    type="text"
                    value={proj.technologies.join(', ')}
                    onChange={(e) =>
                      updateProject(
                        proj.id,
                        'technologies',
                        e.target.value.split(',').map((t) => t.trim())
                      )
                    }
                    className="input"
                    placeholder="React, TypeScript, Node.js (comma separated)"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="label">Description</label>
                  <textarea
                    value={proj.description}
                    onChange={(e) =>
                      updateProject(proj.id, 'description', e.target.value)
                    }
                    className="input min-h-[120px]"
                    placeholder="Describe what you built and your key contributions..."
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
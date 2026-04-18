import { useResume } from '../../context/ResumeContext'
import type { Certification, Achievement } from '../../types/resume'
import { Plus, Trash2 } from 'lucide-react'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

const emptyCertification: Omit<Certification, 'id'> = {
  name: '',
  issuer: '',
  date: '',
  url: '',
}

const emptyAchievement: Omit<Achievement, 'id'> = {
  title: '',
  description: '',
  date: '',
}

export default function StepCertifications() {
  const { resume, dispatch } = useResume()
  const { certifications, achievements } = resume

  const addCertification = () => {
    dispatch({
      type: 'ADD_CERTIFICATION',
      payload: { ...emptyCertification, id: generateId() },
    })
  }

  const updateCertification = (id: string, field: string, value: string) => {
    const cert = certifications.find((c) => c.id === id)
    if (cert) {
      dispatch({
        type: 'UPDATE_CERTIFICATION',
        payload: { ...cert, [field]: value },
      })
    }
  }

  const removeCertification = (id: string) => {
    dispatch({ type: 'REMOVE_CERTIFICATION', payload: id })
  }

  const addAchievement = () => {
    dispatch({
      type: 'ADD_ACHIEVEMENT',
      payload: { ...emptyAchievement, id: generateId() },
    })
  }

  const updateAchievement = (id: string, field: string, value: string) => {
    const ach = achievements.find((a) => a.id === id)
    if (ach) {
      dispatch({
        type: 'UPDATE_ACHIEVEMENT',
        payload: { ...ach, [field]: value },
      })
    }
  }

  const removeAchievement = (id: string) => {
    dispatch({ type: 'REMOVE_ACHIEVEMENT', payload: id })
  }

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
            <p className="mt-1 text-gray-600">
              Add any certifications you have earned.
            </p>
          </div>
          <button
            type="button"
            onClick={addCertification}
            className="btn btn-outline btn-sm"
          >
            <Plus className="h-4 w-4" />
            Add Certification
          </button>
        </div>

        {certifications.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">No certifications added yet.</p>
            <button
              type="button"
              onClick={addCertification}
              className="btn btn-primary mt-4"
            >
              <Plus className="h-4 w-4" />
              Add Your First Certification
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="relative rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700">
                    Certification #{index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeCertification(cert.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label">Certification Name *</label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) =>
                        updateCertification(cert.id, 'name', e.target.value)
                      }
                      className="input"
                      placeholder="AWS Solutions Architect"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Issuing Organization *</label>
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) =>
                        updateCertification(cert.id, 'issuer', e.target.value)
                      }
                      className="input"
                      placeholder="Amazon Web Services"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Date Obtained</label>
                    <input
                      type="month"
                      value={cert.date}
                      onChange={(e) =>
                        updateCertification(cert.id, 'date', e.target.value)
                      }
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Credential URL</label>
                    <input
                      type="url"
                      value={cert.url || ''}
                      onChange={(e) =>
                        updateCertification(cert.id, 'url', e.target.value)
                      }
                      className="input"
                      placeholder="https://www.credential.net/..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
            <p className="mt-1 text-gray-600">
              Showcase your notable achievements.
            </p>
          </div>
          <button
            type="button"
            onClick={addAchievement}
            className="btn btn-outline btn-sm"
          >
            <Plus className="h-4 w-4" />
            Add Achievement
          </button>
        </div>

        {achievements.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">No achievements added yet.</p>
            <button
              type="button"
              onClick={addAchievement}
              className="btn btn-primary mt-4"
            >
              <Plus className="h-4 w-4" />
              Add Your First Achievement
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {achievements.map((ach, index) => (
              <div
                key={ach.id}
                className="relative rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700">
                    Achievement #{index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeAchievement(ach.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label">Title *</label>
                    <input
                      type="text"
                      value={ach.title}
                      onChange={(e) =>
                        updateAchievement(ach.id, 'title', e.target.value)
                      }
                      className="input"
                      placeholder="Winner of Hackathon 2024"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Date</label>
                    <input
                      type="month"
                      value={ach.date}
                      onChange={(e) =>
                        updateAchievement(ach.id, 'date', e.target.value)
                      }
                      className="input"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="label">Description</label>
                    <textarea
                      value={ach.description}
                      onChange={(e) =>
                        updateAchievement(ach.id, 'description', e.target.value)
                      }
                      className="input min-h-[80px]"
                      placeholder="Describe the achievement..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
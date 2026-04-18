import { useResume } from '../../context/ResumeContext'
import type { Skill } from '../../types/resume'
import { Plus, X } from 'lucide-react'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

interface SkillInputProps {
  skill: Skill
  onUpdate: (id: string, field: string, value: string) => void
  onRemove: (id: string) => void
}

function SkillItem({ skill, onUpdate, onRemove }: SkillInputProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-gray-200 bg-white p-3">
      <input
        type="text"
        value={skill.name}
        onChange={(e) => onUpdate(skill.id, 'name', e.target.value)}
        className="input flex-1 min-w-[120px]"
        placeholder="Skill name"
      />

      <select
        value={skill.level}
        onChange={(e) => onUpdate(skill.id, 'level', e.target.value)}
        className="input w-auto"
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="expert">Expert</option>
      </select>

      <select
        value={skill.category}
        onChange={(e) => onUpdate(skill.id, 'category', e.target.value)}
        className="input w-auto"
      >
        <option value="technical">Technical</option>
        <option value="soft">Soft Skill</option>
        <option value="language">Language</option>
        <option value="tool">Tool</option>
      </select>

      <button
        type="button"
        onClick={() => onRemove(skill.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}

export default function StepSkills() {
  const { resume, dispatch } = useResume()
  const { skills } = resume

  const addSkill = () => {
    dispatch({
      type: 'ADD_SKILL',
      payload: {
        id: generateId(),
        name: '',
        level: 'intermediate' as const,
        category: 'technical' as const,
      },
    })
  }

  const updateSkill = (id: string, field: string, value: string) => {
    const skill = skills.find((s) => s.id === id)
    if (skill) {
      dispatch({
        type: 'UPDATE_SKILL',
        payload: { ...skill, [field]: value },
      })
    }
  }

  const removeSkill = (id: string) => {
    dispatch({ type: 'REMOVE_SKILL', payload: id })
  }

  const technicalSkills = skills.filter((s) => s.category === 'technical')
  const softSkills = skills.filter((s) => s.category === 'soft')
  const languageSkills = skills.filter((s) => s.category === 'language')
  const toolSkills = skills.filter((s) => s.category === 'tool')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <p className="mt-1 text-gray-600">
          Add your skills and abilities.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { category: 'technical', label: 'Technical', color: 'primary' },
          { category: 'soft', label: 'Soft Skills', color: 'secondary' },
          { category: 'language', label: 'Languages', color: 'success' },
          { category: 'tool', label: 'Tools', color: 'warning' },
        ].map(({ category, label, color }) => (
          <button
            key={category}
            type="button"
            onClick={addSkill}
            className={`btn btn-outline btn-sm ${
              color === 'primary'
                ? 'border-primary-600 text-primary-600 hover:bg-primary-50'
                : color === 'secondary'
                  ? 'border-secondary-600 text-secondary-600 hover:bg-secondary-50'
                  : color === 'success'
                    ? 'border-green-600 text-green-600 hover:bg-green-50'
                    : 'border-orange-600 text-orange-600 hover:bg-orange-50'
            }`}
          >
            <Plus className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {skills.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">No skills added yet.</p>
          <button type="button" onClick={addSkill} className="btn btn-primary mt-4">
            <Plus className="h-4 w-4" />
            Add Your First Skill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {technicalSkills.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-700">
                Technical Skills ({technicalSkills.length})
              </h3>
              <div className="space-y-2">
                {technicalSkills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    skill={skill}
                    onUpdate={updateSkill}
                    onRemove={removeSkill}
                  />
                ))}
              </div>
            </div>
          )}

          {softSkills.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-700">
                Soft Skills ({softSkills.length})
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    skill={skill}
                    onUpdate={updateSkill}
                    onRemove={removeSkill}
                  />
                ))}
              </div>
            </div>
          )}

          {languageSkills.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-700">
                Languages ({languageSkills.length})
              </h3>
              <div className="space-y-2">
                {languageSkills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    skill={skill}
                    onUpdate={updateSkill}
                    onRemove={removeSkill}
                  />
                ))}
              </div>
            </div>
          )}

          {toolSkills.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-700">
                Tools ({toolSkills.length})
              </h3>
              <div className="space-y-2">
                {toolSkills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    skill={skill}
                    onUpdate={updateSkill}
                    onRemove={removeSkill}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
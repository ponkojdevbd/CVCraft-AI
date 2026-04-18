import { motion } from 'framer-motion'
import type { Skill } from '../../types/resume'

interface PortfolioSkillsProps {
  skills: Skill[]
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  technical: { bg: 'bg-primary-500/10', text: 'text-primary-400', border: 'border-primary-500/20' },
  soft: { bg: 'bg-secondary-500/10', text: 'text-secondary-400', border: 'border-secondary-500/20' },
  language: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  tool: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
}

export default function PortfolioSkills({ skills }: PortfolioSkillsProps) {
  if (skills.length === 0) return null

  const technicalSkills = skills.filter((s) => s.category === 'technical')
  const softSkills = skills.filter((s) => s.category === 'soft')
  const languageSkills = skills.filter((s) => s.category === 'language')
  const toolSkills = skills.filter((s) => s.category === 'tool')

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {technicalSkills.length > 0 && (
            <SkillCategory
              title="Technical"
              skills={technicalSkills}
              colors={categoryColors.technical}
            />
          )}
          {softSkills.length > 0 && (
            <SkillCategory
              title="Soft Skills"
              skills={softSkills}
              colors={categoryColors.soft}
            />
          )}
          {languageSkills.length > 0 && (
            <SkillCategory
              title="Languages"
              skills={languageSkills}
              colors={categoryColors.language}
            />
          )}
          {toolSkills.length > 0 && (
            <SkillCategory
              title="Tools"
              skills={toolSkills}
              colors={categoryColors.tool}
            />
          )}
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
  colors: { bg: string; text: string; border: string }
}

function SkillCategory({ title, skills, colors }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-gray-200 bg-white p-6"
    >
      <h3 className={`text-lg font-semibold ${colors.text} mb-4`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className={`rounded-full ${colors.bg} ${colors.text} ${colors.border} border px-3 py-1 text-sm`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
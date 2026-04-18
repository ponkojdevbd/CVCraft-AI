import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import type { Experience } from '../../types/resume'

interface PortfolioExperienceProps {
  experience: Experience[]
}

export default function PortfolioExperience({ experience }: PortfolioExperienceProps) {
  if (experience.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>

                <div className="ml-12 md:w-[45%] md:ml-0">
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-primary-600">{exp.company}</p>
                    {exp.location && (
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      {exp.startDate && exp.startDate.slice(0, 7)}
                      {exp.startDate && (exp.endDate || exp.current) ? ' - ' : ''}
                      {exp.current ? 'Present' : exp.endDate && exp.endDate.slice(0, 7)}
                    </p>
                    {exp.description && (
                      <p className="mt-3 text-gray-600">{exp.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
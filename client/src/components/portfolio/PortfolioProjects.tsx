import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types/resume'

interface PortfolioProjectsProps {
  projects: Project[]
}

export default function PortfolioProjects({ projects }: PortfolioProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {project.name}
              </h3>

              {project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.description && (
                <p className="mt-4 text-gray-600">{project.description}</p>
              )}

              {project.url && (
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
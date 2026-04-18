import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Code2, Briefcase } from 'lucide-react'
import type { ResumeData } from '../../types/resume'

interface PortfolioHeroProps {
  resume: ResumeData
}

export default function PortfolioHero({ resume }: PortfolioHeroProps) {
  const { personalInfo } = resume

  if (!personalInfo.firstName && !personalInfo.lastName) {
    return (
      <div className="flex h-96 items-center justify-center bg-gray-100">
        <p className="text-gray-500">No portfolio data available</p>
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gray-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-500/0.15)_0%,_transparent_50%)]" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {personalInfo.firstName || personalInfo.lastName ? (
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
            ) : null}

            {personalInfo.summary && (
              <p className="mt-6 text-lg text-gray-300">
                {personalInfo.summary}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span>{personalInfo.email}</span>
                </a>
              )}
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                >
                  <Briefcase className="h-5 w-5" />
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                >
                  <Code2 className="h-5 w-5" />
                  GitHub
                </a>
              )}
              {personalInfo.website && (
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                >
                  <Code2 className="h-5 w-5" />
                  Website
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
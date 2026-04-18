import { motion } from 'framer-motion'
import {
  FileText,
  LayoutTemplate,
  Download,
  Sparkles,
  Users,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Easy Form Input',
    description:
      'Just answer questions in plain English. No complex templates or confusing formats to worry about.',
    color: 'primary',
  },
  {
    icon: Sparkles,
    title: 'AI Enhancement',
    description:
      'Get intelligent suggestions to improve your content and make your resume stand out.',
    color: 'secondary',
  },
  {
    icon: LayoutTemplate,
    title: 'Professional Templates',
    description:
      'Choose from multiple professionally designed templates that catch recruiters attention.',
    color: 'primary',
  },
  {
    icon: Download,
    title: 'Instant PDF Export',
    description:
      'Download your ready-to-submit resume in PDF format with a single click.',
    color: 'secondary',
  },
  {
    icon: LayoutTemplate,
    title: 'Portfolio Page',
    description:
      'Automatically generate a beautiful portfolio website to showcase your work.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Applicant Tracking',
    description:
      'Our resumes are optimized to pass ATS systems and reach human recruiters.',
    color: 'secondary',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-500/10',
    text: 'text-primary-400',
    border: 'border-primary-500/20',
  },
  secondary: {
    bg: 'bg-secondary-500/10',
    text: 'text-secondary-400',
    border: 'border-secondary-500/20',
  },
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We have stripped away the complexity and given you the tools to create a resume
            that actually gets results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-gray-300"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.border} border`}
                >
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
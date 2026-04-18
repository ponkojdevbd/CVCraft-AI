import { motion } from 'framer-motion'
import { Check, Pencil, Wand2, FileOutput } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Pencil,
    title: 'Fill Out Simple Form',
    description:
      'Answer straightforward questions about your experience, education, and skills in plain English.',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'AI enhancement',
    description:
      'Our AI analyzes your content and suggests improvements to make it more impactful and professional.',
  },
  {
    number: '03',
    icon: FileOutput,
    title: 'Download & Share',
    description:
      'Choose a template, preview your resume, and download as PDF. Plus get a free portfolio page.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Three simple steps to your perfect resume
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-primary-500/50 to-transparent md:block" />
                )}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600">
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-primary-400 border border-primary-500/20">
            <Check className="h-5 w-5" />
            <span className="font-medium">Ready to get started?</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-500/0.15)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_right,_var(--color-secondary-500/0.1)_0%,_transparent_50%)] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-gray-950)_100%)] pointer-events-none" />

      <div className="container relative pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-400 border border-primary-500/20">
              <Sparkles className="h-4 w-4" />
              AI-Powered Resume Builder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build Your Professional{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Resume in Minutes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Fill out a simple form in plain English and let our AI transform it into a stunning,
            professional resume. Plus get a personal portfolio page to showcase your work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/builder"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="#features"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              See Features
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            No credit card required • Free to start • AI suggestions included
          </motion.p>
        </div>
      </div>
    </section>
  )
}
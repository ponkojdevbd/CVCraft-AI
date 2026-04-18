import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import type { PersonalInfo } from '../../types/resume'

interface PortfolioContactProps {
  personalInfo: PersonalInfo
}

export default function PortfolioContact({ personalInfo }: PortfolioContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const hasContactInfo = personalInfo.email || personalInfo.phone || personalInfo.location

  if (!hasContactInfo && !personalInfo.email) return null

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>

        <div className="mx-auto grid gap-12 md:grid-cols-2 lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary-400" />
                    {personalInfo.email}
                  </a>
                )}
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary-400" />
                    {personalInfo.phone}
                  </a>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-primary-400" />
                    {personalInfo.location}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input bg-gray-800 border-gray-700 text-white min-h-[120px]"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
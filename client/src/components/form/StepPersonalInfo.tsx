import { useState } from 'react'
import { useResume } from '../../context/ResumeContext'
import { AiSuggestionPanel } from '../resume'
import { Sparkles } from 'lucide-react'

export default function StepPersonalInfo() {
  const { resume, dispatch } = useResume()
  const { personalInfo } = resume
  const [showAISuggestions, setShowAISuggestions] = useState(false)

  const handleChange = (field: string, value: string) => {
    dispatch({ type: 'SET_PERSONAL_INFO', payload: { [field]: value } })
  }

  const handleApplySuggestion = (suggestion: string) => {
    handleChange('summary', suggestion)
    setShowAISuggestions(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
        <p className="mt-1 text-gray-600">Let employers know how to reach you.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="label">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            value={personalInfo.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="input"
            placeholder="John"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="label">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            value={personalInfo.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="input"
            placeholder="Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="label">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={personalInfo.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="input"
            placeholder="San Francisco, CA"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
            <label htmlFor="summary" className="label">
              Professional Summary
            </label>
            <button
              type="button"
              onClick={() => setShowAISuggestions(!showAISuggestions)}
              className="flex items-center gap-1 text-sm text-secondary-600 hover:text-secondary-700"
            >
              <Sparkles className="h-4 w-4" />
              AI Help
            </button>
          </div>
          <textarea
            id="summary"
            value={personalInfo.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            className="input min-h-[120px]"
            placeholder="A brief overview of your professional background, key skills, and career goals..."
          />
          {showAISuggestions && (
            <div className="mt-3">
              <AiSuggestionPanel
                text={personalInfo.summary}
                type="summary"
                onApply={handleApplySuggestion}
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="linkedin" className="label">
            LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedin"
            value={personalInfo.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="input"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>

        <div>
          <label htmlFor="github" className="label">
            GitHub URL
          </label>
          <input
            type="url"
            id="github"
            value={personalInfo.github || ''}
            onChange={(e) => handleChange('github', e.target.value)}
            className="input"
            placeholder="https://github.com/johndoe"
          />
        </div>

        <div>
          <label htmlFor="website" className="label">
            Personal Website
          </label>
          <input
            type="url"
            id="website"
            value={personalInfo.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            className="input"
            placeholder="https://johndoe.com"
          />
        </div>
      </div>
    </div>
  )
}
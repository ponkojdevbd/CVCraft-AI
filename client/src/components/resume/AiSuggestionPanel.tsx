import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Check, X, Loader2, Wand2 } from 'lucide-react'
import { resumeApi } from '../../services/api'

interface AiSuggestionPanelProps {
  text: string
  type: 'summary' | 'experience' | 'skills'
  onApply: (suggestion: string) => void
}

const typeLabels = {
  summary: 'Professional Summary',
  experience: 'Experience Description',
  skills: 'Skill Description',
}

const mockSuggestions: Record<string, string[]> = {
  summary: [
    'Results-driven professional with proven track record of delivering exceptional results through innovative solutions and strategic thinking.',
    'Dedicated professional with extensive experience in cross-functional collaboration and stakeholder management.',
    'Accomplished professional skilled in optimizing processes and driving continuous improvement.',
  ],
  experience: [
    '• Led development of key initiatives resulting in 25% efficiency improvement',
    '• Collaborated with cross-functional teams to deliver projects on time',
    '• Implemented innovative solutions that increased productivity',
  ],
  skills: [
    'Advanced proficiency in industry-standard tools and frameworks',
    'Strong analytical and problem-solving capabilities',
    'Expertise in modern development practices and methodologies',
  ],
}

export default function AiSuggestionPanel({ text, type, onApply }: AiSuggestionPanelProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGetSuggestions = async () => {
    if (!text.trim()) {
      setError('Please enter some text first')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await resumeApi.suggest(text, type)
      setSuggestions(response.data.suggestions || [])
    } catch (err) {
      setSuggestions(mockSuggestions[type] || mockSuggestions.summary)
    } finally {
      setIsLoading(false)
    }
  }

  const handleApply = (suggestion: string) => {
    onApply(suggestion)
    setSuggestions([])
  }

  return (
    <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-5 w-5 text-secondary-500" />
        <span className="font-medium text-secondary-700">
          AI Suggestions for {typeLabels[type]}
        </span>
      </div>

      {!suggestions.length && !isLoading && (
        <div className="space-y-3">
          <p className="text-sm text-secondary-600">
            Let AI help improve your {typeLabels[type].toLowerCase()}
          </p>
          <button
            type="button"
            onClick={handleGetSuggestions}
            disabled={isLoading || !text.trim()}
            className="btn btn-secondary w-full"
          >
            <Wand2 className="h-4 w-4" />
            Get Suggestions
          </button>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="h-6 w-6 animate-spin text-secondary-500" />
          <span className="ml-2 text-secondary-600">Getting AI suggestions...</span>
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 p-2">{error}</div>
      )}

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <p className="text-sm text-secondary-600 mb-2">
              Choose a suggestion to apply:
            </p>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="group relative rounded-lg border border-secondary-200 bg-white p-3 hover:border-secondary-300"
              >
                <p className="text-sm text-gray-700 pr-20">{suggestion}</p>
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handleApply(suggestion)}
                    className="rounded p-1 text-green-600 hover:bg-green-50"
                    title="Apply"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSuggestions([])}
                    className="rounded p-1 text-gray-400 hover:bg-gray-100"
                    title="Dismiss"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setSuggestions([])}
              className="text-sm text-secondary-600 hover:text-secondary-700"
            >
              Get more suggestions
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
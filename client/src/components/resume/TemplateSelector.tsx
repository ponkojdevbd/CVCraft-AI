import { motion } from 'framer-motion'
import { Check, Layout, Columns, Minimize2 } from 'lucide-react'
import type { ResumeTemplate } from '../../types/resume'

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate
  onSelect: (template: ResumeTemplate) => void
}

const templates = [
  {
    id: 'classic' as ResumeTemplate,
    name: 'Classic',
    description: 'Traditional single-column layout',
    icon: Layout,
  },
  {
    id: 'modern' as ResumeTemplate,
    name: 'Modern',
    description: 'Two-column with sidebar',
    icon: Columns,
  },
  {
    id: 'minimal' as ResumeTemplate,
    name: 'Minimal',
    description: 'Clean whitespace-heavy design',
    icon: Minimize2,
  },
]

export default function TemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose a Template</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {templates.map((template) => {
          const Icon = template.icon
          const isSelected = selectedTemplate === template.id

          return (
            <motion.button
              key={template.id}
              type="button"
              onClick={() => onSelect(template.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                isSelected
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {isSelected && (
                <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
              <Icon
                className={`mb-3 h-8 w-8 ${
                  isSelected ? 'text-primary-600' : 'text-gray-400'
                }`}
              />
              <h4
                className={`font-semibold ${
                  isSelected ? 'text-primary-700' : 'text-gray-900'
                }`}
              >
                {template.name}
              </h4>
              <p className="mt-1 text-sm text-gray-500">{template.description}</p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
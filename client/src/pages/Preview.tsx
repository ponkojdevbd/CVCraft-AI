import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Loader2 } from 'lucide-react'
import { ResumeProvider, useResume } from '../context/ResumeContext'
import {
  TemplateSelector,
  TemplateClassic,
  TemplateModern,
  TemplateMinimal,
  ResumeActions,
} from '../components/resume'
import { generatePDF } from '../utils/pdfGenerator'
import type { ResumeTemplate } from '../types/resume'

function PreviewContent() {
  const { resume } = useResume()
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>('classic')
  const [isGenerating, setIsGenerating] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!resumeRef.current) return

    setIsGenerating(true)
    try {
      const fullName = `${resume.personalInfo.firstName} ${resume.personalInfo.lastName}`
        .toLowerCase()
        .replace(/\s+/g, '-')
      await generatePDF(resumeRef.current, `${fullName || 'resume'}.pdf`)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    console.log('Save functionality - to be implemented with auth')
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'classic':
        return <TemplateClassic resume={resume} />
      case 'modern':
        return <TemplateModern resume={resume} />
      case 'minimal':
        return <TemplateMinimal resume={resume} />
      default:
        return <TemplateClassic resume={resume} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/builder"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Builder</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              disabled={isGenerating}
              className="btn btn-primary"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="mb-6">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>

        <div className="overflow-auto rounded-xl border border-gray-300 bg-white shadow-lg">
          <div ref={resumeRef} className="p-4">
            {renderTemplate()}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <ResumeActions onDownload={handleDownload} onSave={handleSave} />
        </div>
      </div>
    </div>
  )
}

export default function Preview() {
  return (
    <ResumeProvider>
      <PreviewContent />
    </ResumeProvider>
  )
}
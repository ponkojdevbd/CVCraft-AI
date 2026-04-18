import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Loader2, CheckCircle, Save } from 'lucide-react'
import { useResume } from '../context/ResumeContext'
import {
  TemplateSelector,
  TemplateClassic,
  TemplateModern,
  TemplateMinimal,
} from '../components/resume'
import { generatePDF } from '../utils/pdfGenerator'
import type { ResumeTemplate } from '../types/resume'

function PreviewContent() {
  const { resume } = useResume()
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>('classic')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
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
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/builder"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all font-medium"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Builder</span>
              </Link>
            </div>
            <button
              type="button"
              onClick={handleDownload}
              disabled={isGenerating}
              className="btn btn-primary px-6 py-3 text-base shadow-lg shadow-primary-500/30"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="mb-8">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>

        <div className="overflow-auto rounded-2xl border border-gray-200/60 bg-white shadow-2xl shadow-gray-300/30">
          <div ref={resumeRef} className="p-6">
            {renderTemplate()}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isGenerating}
            className="btn btn-primary px-8 py-4 text-lg shadow-xl shadow-primary-500/30"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="h-6 w-6" />
                <span>Download PDF</span>
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaved}
            className={`btn px-8 py-4 text-lg ${
              isSaved 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'btn-secondary shadow-lg'
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle className="h-6 w-6" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="h-6 w-6" />
                <span>Save Resume</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Preview() {
  return <PreviewContent />
}
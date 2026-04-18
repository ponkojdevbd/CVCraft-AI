import { Download, Save } from 'lucide-react'

interface ResumeActionsProps {
  onDownload: () => void
  onSave: () => void
}

export default function ResumeActions({ onDownload, onSave }: ResumeActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onDownload}
        className="btn btn-primary"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </button>
      <button
        type="button"
        onClick={onSave}
        className="btn btn-secondary"
      >
        <Save className="h-4 w-4" />
        Save Resume
      </button>
    </div>
  )
}
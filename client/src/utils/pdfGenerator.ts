// @ts-nocheck
import html2pdf from 'html2pdf.js'

export async function generatePDF(element: HTMLElement, fileName: string = 'resume.pdf'): Promise<void> {
  const options = {
    margin: 10,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }

  try {
    await html2pdf().set(options).from(element).save()
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
}

export async function generatePDFBlob(element: HTMLElement): Promise<Blob> {
  const options = {
    margin: 10,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }

  const pdf = html2pdf().set(options).from(element)
  return pdf.outputPdf('blob')
}
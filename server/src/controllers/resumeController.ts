import { Request, Response } from 'express'
import { Resume } from '../models/Resume'
import { getAISuggestions } from '../utils/aiSuggestion'

interface AuthRequest extends Request {
  userId?: string
}

export async function saveResume(req: AuthRequest, res: Response): Promise<void> {
  try {
    const userId = req.userId
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const resumeData = req.body
    const { template } = resumeData

    const existingResume = await Resume.findOne({ userId })

    let resume
    if (existingResume) {
      resume = await Resume.findByIdAndUpdate(
        existingResume._id,
        { ...resumeData, userId, template: template || 'classic' },
        { new: true, upsert: true }
      )
    } else {
      resume = new Resume({ ...resumeData, userId, template: template || 'classic' })
      await resume.save()
    }

    res.json(resume)
  } catch (error) {
    console.error('Save resume error:', error)
    res.status(500).json({ error: 'Failed to save resume' })
  }
}

export async function getResumes(req: AuthRequest, res: Response): Promise<void> {
  try {
    const userId = req.userId
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const resumes = await Resume.find({ userId }).sort({ updatedAt: -1 })

    res.json(resumes)
  } catch (error) {
    console.error('Get resumes error:', error)
    res.status(500).json({ error: 'Failed to get resumes' })
  }
}

export async function getResume(req: AuthRequest, res: Response): Promise<void> {
  try {
    const userId = req.userId
    const { id } = req.params

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const resume = await Resume.findOne({ _id: id, userId })
    if (!resume) {
      res.status(404).json({ error: 'Resume not found' })
      return
    }

    res.json(resume)
  } catch (error) {
    console.error('Get resume error:', error)
    res.status(500).json({ error: 'Failed to get resume' })
  }
}

export async function deleteResume(req: AuthRequest, res: Response): Promise<void> {
  try {
    const userId = req.userId
    const { id } = req.params

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const resume = await Resume.findOneAndDelete({ _id: id, userId })
    if (!resume) {
      res.status(404).json({ error: 'Resume not found' })
      return
    }

    res.json({ message: 'Resume deleted' })
  } catch (error) {
    console.error('Delete resume error:', error)
    res.status(500).json({ error: 'Failed to delete resume' })
  }
}

export async function suggest(req: AuthRequest, res: Response): Promise<void> {
  try {
    const userId = req.userId
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const { text, type } = req.body as { text: string; type: string }
    if (!text) {
      res.status(400).json({ error: 'Text is required' })
      return
    }

    const suggestions = await getAISuggestions(text, type)
    res.json({ suggestions })
  } catch (error) {
    console.error('AI suggestion error:', error)
    res.status(500).json({ error: 'Failed to get suggestions' })
  }
}
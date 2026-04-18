import mongoose, { Schema, Document } from 'mongoose'

export interface IResume extends Document {
  userId: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    summary: string
    photo?: string
    linkedin?: string
    github?: string
    website?: string
  }
  education: Array<{
    id: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: string
    endDate: string
    gpa?: string
    description?: string
  }>
  experience: Array<{
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
  }>
  skills: Array<{
    id: string
    name: string
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
    category: 'technical' | 'soft' | 'language' | 'tool'
  }>
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string[]
    url?: string
    startDate: string
    endDate: string
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
    url?: string
  }>
  achievements: Array<{
    id: string
    title: string
    description: string
    date: string
  }>
  template: 'classic' | 'modern' | 'minimal'
  createdAt: Date
  updatedAt: Date
}

const ResumeSchema = new Schema<IResume>(
  {
    userId: { type: String, required: true, index: true },
    personalInfo: {
      firstName: { type: String, default: '' },
      lastName: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      location: { type: String, default: '' },
      summary: { type: String, default: '' },
      photo: { type: String },
      linkedin: { type: String },
      github: { type: String },
      website: { type: String },
    },
    education: [
      {
        id: { type: String },
        institution: { type: String },
        degree: { type: String },
        fieldOfStudy: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        gpa: { type: String },
        description: { type: String },
      },
    ],
    experience: [
      {
        id: { type: String },
        company: { type: String },
        position: { type: String },
        location: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        current: { type: Boolean, default: false },
        description: { type: String },
      },
    ],
    skills: [
      {
        id: { type: String },
        name: { type: String },
        level: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
        category: { type: String, enum: ['technical', 'soft', 'language', 'tool'] },
      },
    ],
    projects: [
      {
        id: { type: String },
        name: { type: String },
        description: { type: String },
        technologies: [{ type: String }],
        url: { type: String },
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    certifications: [
      {
        id: { type: String },
        name: { type: String },
        issuer: { type: String },
        date: { type: String },
        url: { type: String },
      },
    ],
    achievements: [
      {
        id: { type: String },
        title: { type: String },
        description: { type: String },
        date: { type: String },
      },
    ],
    template: { type: String, enum: ['classic', 'modern', 'minimal'], default: 'classic' },
  },
  { timestamps: true }
)

ResumeSchema.index({ userId: 1, updatedAt: -1 })

export const Resume = mongoose.model<IResume>('Resume', ResumeSchema)
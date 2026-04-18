export interface PersonalInfo {
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

export interface Education {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export interface Skill {
  id: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'technical' | 'soft' | 'language' | 'tool'
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url?: string
  startDate: string
  endDate: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
  certifications: Certification[]
  achievements: Achievement[]
}

export type ResumeTemplate = 'classic' | 'modern' | 'minimal'

export interface FormStep {
  id: number
  title: string
  description: string
}

export const FORM_STEPS: FormStep[] = [
  { id: 0, title: 'Personal Info', description: 'Basic information' },
  { id: 1, title: 'Education', description: 'Your academic background' },
  { id: 2, title: 'Experience', description: 'Work history' },
  { id: 3, title: 'Skills', description: 'Your abilities' },
  { id: 4, title: 'Projects', description: 'Notable projects' },
  { id: 5, title: 'Certifications', description: 'Certifications & achievements' },
]

export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certifications: [],
  achievements: [],
}
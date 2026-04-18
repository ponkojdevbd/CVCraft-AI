import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from 'react'
import type { ResumeData, PersonalInfo, Education, Experience, Skill, Project, Certification, Achievement } from '../types/resume'
import { initialResumeData } from '../types/resume'

type ResumeAction =
  | { type: 'SET_PERSONAL_INFO'; payload: Partial<PersonalInfo> }
  | { type: 'ADD_EDUCATION'; payload: Education }
  | { type: 'UPDATE_EDUCATION'; payload: Education }
  | { type: 'REMOVE_EDUCATION'; payload: string }
  | { type: 'ADD_EXPERIENCE'; payload: Experience }
  | { type: 'UPDATE_EXPERIENCE'; payload: Experience }
  | { type: 'REMOVE_EXPERIENCE'; payload: string }
  | { type: 'ADD_SKILL'; payload: Skill }
  | { type: 'UPDATE_SKILL'; payload: Skill }
  | { type: 'REMOVE_SKILL'; payload: string }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'UPDATE_PROJECT'; payload: Project }
  | { type: 'REMOVE_PROJECT'; payload: string }
  | { type: 'ADD_CERTIFICATION'; payload: Certification }
  | { type: 'UPDATE_CERTIFICATION'; payload: Certification }
  | { type: 'REMOVE_CERTIFICATION'; payload: string }
  | { type: 'ADD_ACHIEVEMENT'; payload: Achievement }
  | { type: 'UPDATE_ACHIEVEMENT'; payload: Achievement }
  | { type: 'REMOVE_ACHIEVEMENT'; payload: string }
  | { type: 'SET_RESUME'; payload: ResumeData }
  | { type: 'RESET_RESUME' }

function resumeReducer(state: ResumeData, action: ResumeAction): ResumeData {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      }
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.payload],
      }
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((edu) =>
          edu.id === action.payload.id ? action.payload : edu
        ),
      }
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((edu) => edu.id !== action.payload),
      }
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload],
      }
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp
        ),
      }
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== action.payload),
      }
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.payload],
      }
    case 'UPDATE_SKILL':
      return {
        ...state,
        skills: state.skills.map((skill) =>
          skill.id === action.payload.id ? action.payload : skill
        ),
      }
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      }
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((proj) =>
          proj.id === action.payload.id ? action.payload : proj
        ),
      }
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((proj) => proj.id !== action.payload),
      }
    case 'ADD_CERTIFICATION':
      return {
        ...state,
        certifications: [...state.certifications, action.payload],
      }
    case 'UPDATE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.map((cert) =>
          cert.id === action.payload.id ? action.payload : cert
        ),
      }
    case 'REMOVE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.filter(
          (cert) => cert.id !== action.payload
        ),
      }
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, action.payload],
      }
    case 'UPDATE_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.map((ach) =>
          ach.id === action.payload.id ? action.payload : ach
        ),
      }
    case 'REMOVE_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.filter(
          (ach) => ach.id !== action.payload
        ),
      }
    case 'SET_RESUME':
      return action.payload
    case 'RESET_RESUME':
      return initialResumeData
    default:
      return state
  }
}

interface ResumeContextType {
  resume: ResumeData
  dispatch: React.Dispatch<ResumeAction>
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resume, dispatch] = useReducer(resumeReducer, initialResumeData)

  return (
    <ResumeContext.Provider value={{ resume, dispatch }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
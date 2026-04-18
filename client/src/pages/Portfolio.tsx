import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ResumeProvider, useResume } from '../context/ResumeContext'
import {
  PortfolioHero,
  PortfolioSkills,
  PortfolioProjects,
  PortfolioExperience,
  PortfolioContact,
} from '../components/portfolio'

function PortfolioContent() {
  const { resume } = useResume()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>
          <Link to="/builder" className="btn btn-primary btn-sm">
            Edit Resume
          </Link>
        </div>
      </header>

      <main>
        <PortfolioHero resume={resume} />
        <PortfolioSkills skills={resume.skills} />
        <PortfolioExperience experience={resume.experience} />
        <PortfolioProjects projects={resume.projects} />
        <PortfolioContact personalInfo={resume.personalInfo} />
      </main>

      <footer className="bg-gray-950 py-8">
        <div className="container text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return (
    <ResumeProvider>
      <PortfolioContent />
    </ResumeProvider>
  )
}
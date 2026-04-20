import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Eye, Save, Loader2, Menu, X, CheckCircle, LogIn, UserPlus } from 'lucide-react'
import { useResume } from '../context/ResumeContext'
import { useAuth } from '../context/AuthContext'
import { AuthModal } from '../components/auth'
import { useToast } from '../components/ui/Toast'
import ProfileDropdown from '../components/ui/ProfileDropdown'
import {
  ProgressStepper,
  StepPersonalInfo,
  StepEducation,
  StepExperience,
  StepSkills,
  StepProjects,
  StepCertifications,
} from '../components/form'
import { resumeApi } from '../services/api'
import { FORM_STEPS } from '../types/resume'
import { motion, AnimatePresence } from 'framer-motion'

function BuilderContent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { resume } = useResume()
  const { user } = useAuth()
  const { showToast } = useToast()

  const canProceed = currentStep < FORM_STEPS.length - 1
  const canGoBack = currentStep > 0

  const nextStep = () => {
    if (canProceed) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (canGoBack) setCurrentStep(currentStep - 1)
  }

  const handleSave = async () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    setIsSaving(true)
    try {
      await resumeApi.save(resume)
      setSaveSuccess(true)
      showToast('Your changes saved successfully', 'success')
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (error) {
      console.error('Save failed:', error)
      showToast('Failed to save changes', 'error')
    } finally {
      setIsSaving(false)
    }
  }

  const handleAuthSuccess = async () => {
    setIsSaving(true)
    try {
      await resumeApi.save(resume)
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (error) {
      console.error('Save failed:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepPersonalInfo />
      case 1:
        return <StepEducation />
      case 2:
        return <StepExperience />
      case 3:
        return <StepSkills />
      case 4:
        return <StepProjects />
      case 5:
        return <StepCertifications />
      default:
        return <StepPersonalInfo />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="container">
          {/* Mobile menu button */}
          <div className="flex h-16 items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <span className="font-semibold text-gray-900 truncate">
              {FORM_STEPS[currentStep].title}
            </span>
            <div className="w-10" />
          </div>

          {/* Desktop header */}
          <div className="hidden h-16 items-center justify-between lg:flex">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <span className="font-bold text-gray-900 text-lg">Resume Builder</span>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                to="/preview" 
                className="btn btn-outline btn-sm px-4 py-2.5"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </Link>
              {user ? (
                <>
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    className="btn btn-primary btn-sm px-5 py-2.5"
                  >
                    {isSaving ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : saveSuccess ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </>
                    )}
                  </button>
                  <ProfileDropdown resumePhotoUrl={resume.personalInfo.photo} />
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setShowAuthModal(true)}
                    className="btn btn-outline btn-sm px-4 py-2.5"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>LogIn</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAuthModal(true)}
                    className="btn btn-primary btn-sm px-4 py-2.5"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>SignUp</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 py-4 lg:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Link>
                <Link
                  to="/preview"
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </Link>
                {user ? (
                  <button
                    type="button"
                    onClick={() => {
                      handleSave()
                      setMobileMenuOpen(false)
                    }}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    <Save className="h-4 w-4" />
                    <span>{isSaving ? 'Saving...' : 'Save Resume'}</span>
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAuthModal(true)
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      <LogIn className="h-4 w-4" />
                      <span>LogIn</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAuthModal(true)
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>SignUp</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <div className="container py-6 lg:py-8">
        {/* Progress Stepper */}
        <div className="mb-6 lg:mb-8">
          <ProgressStepper
            currentStep={currentStep}
            onStepClick={(step) => setCurrentStep(step)}
          />
        </div>

        {/* Form Content */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-5 lg:p-8 shadow-xl shadow-gray-200/40 overflow-x-hidden"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
          <button
            type="button"
            onClick={prevStep}
            disabled={!canGoBack}
            className={`btn btn-secondary order-2 sm:order-1 px-5 py-3 text-base ${
              !canGoBack ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          {canProceed ? (
            <button 
              type="button" 
              onClick={nextStep} 
              className="btn btn-primary order-1 sm:order-2 px-6 py-3 text-base"
            >
              <span>Continue</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          ) : (
            <Link 
              to="/preview" 
              className="btn btn-primary order-1 sm:order-2 px-6 py-3 text-base"
            >
              <span>Review Resume</span>
              <Eye className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  )
}

export default function Builder() {
  return <BuilderContent />
}
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { FORM_STEPS } from '../../types/resume'
import { useState } from 'react'

interface ProgressStepperProps {
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function ProgressStepper({ currentStep, onStepClick }: ProgressStepperProps) {
  const [scrollPos, setScrollPos] = useState(0)

  const scrollLeft = () => {
    const newPos = Math.max(0, scrollPos - 1)
    setScrollPos(newPos)
  }

  const scrollRight = () => {
    const newPos = Math.min(FORM_STEPS.length - 1, scrollPos + 1)
    setScrollPos(newPos)
  }

  return (
    <nav aria-label="Progress" className="w-full">
      <div className="relative">
        {/* Navigation arrows for mobile */}
        <button
          type="button"
          onClick={scrollLeft}
          disabled={scrollPos === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 ${
            scrollPos === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          } md:hidden`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={scrollRight}
          disabled={scrollPos >= FORM_STEPS.length - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 ${
            scrollPos >= FORM_STEPS.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          } md:hidden`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Desktop view - full stepper */}
        <ol className="hidden md:flex items-center justify-between">
          {FORM_STEPS.map((step, index) => {
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id

            return (
              <li key={step.id} className="relative flex-1 last:flex-none">
                <button
                  type="button"
                  onClick={() => onStepClick?.(step.id)}
                  disabled={step.id > currentStep}
                  className={`group flex flex-col items-center w-full ${
                    step.id > currentStep ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all">
                    {isCompleted ? (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                          isCurrent
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        <span
                          className={`text-sm font-semibold ${
                            isCurrent ? 'text-primary-600' : 'text-gray-500'
                          }`}
                        >
                          {step.id + 1}
                        </span>
                      </div>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs lg:text-sm font-medium ${
                      isCurrent
                        ? 'text-primary-600'
                        : isCompleted
                          ? 'text-gray-900'
                          : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < FORM_STEPS.length - 1 && (
                    <div
                      className={`absolute left-[calc(50%+24px)] top-5 h-0.5 w-full transition-colors ${
                        isCompleted ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ol>

        {/* Mobile view - scrollable dots */}
        <div className="flex items-center gap-2 overflow-x-auto md:hidden py-2 px-8">
          {FORM_STEPS.map((step) => {
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onStepClick?.(step.id)}
                disabled={step.id > currentStep}
                className={`flex-shrink-0 flex flex-col items-center ${
                  step.id > currentStep ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`h-3 w-3 rounded-full transition-all ${
                    isCompleted
                      ? 'bg-primary-600'
                      : isCurrent
                        ? 'bg-primary-600 ring-2 ring-primary-300'
                        : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`mt-1 text-xs font-medium ${
                    isCurrent ? 'text-primary-600' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
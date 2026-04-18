import type { ResumeData } from '../../types/resume'

interface TemplateMinimalProps {
  resume: ResumeData
}

export default function TemplateMinimal({ resume }: TemplateMinimalProps) {
  const { personalInfo, education, experience, skills, projects, certifications, achievements } = resume

  if (!personalInfo.firstName && !personalInfo.lastName) {
    return (
      <div className="flex h-[800px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <p className="text-gray-500">No resume data to display</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-12 shadow-sm" style={{ minHeight: '800px' }}>
      {(personalInfo.firstName || personalInfo.lastName) && (
        <h1 className="text-4xl font-light text-gray-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
      )}
      <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
        {personalInfo.email && <span>{personalInfo.email}</span>}
        {personalInfo.phone && <span>{personalInfo.phone}</span>}
        {personalInfo.location && <span>{personalInfo.location}</span>}
      </div>

      {personalInfo.summary && (
        <div className="mt-12">
          <p className="max-w-2xl text-gray-600 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mt-6">
              <h3 className="text-lg text-gray-900">{exp.position}</h3>
              <p className="text-sm text-gray-500">
                {exp.company}
                {exp.location && ` · ${exp.location}`}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {exp.startDate?.slice(0, 7)} — {exp.current ? 'Present' : exp.endDate?.slice(0, 7)}
              </p>
              {exp.description && (
                <p className="mt-3 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mt-6">
              <h3 className="text-lg text-gray-900">{edu.institution}</h3>
              <p className="text-sm text-gray-500">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {edu.startDate?.slice(0, 7)} — {edu.endDate?.slice(0, 7)}
              </p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Skills</h2>
          <p className="mt-4 text-sm text-gray-600">
            {skills.map((s) => s.name).join(' · ')}
          </p>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mt-6">
              <h3 className="text-lg text-gray-900">{proj.name}</h3>
              {proj.technologies.length > 0 && (
                <p className="text-sm text-gray-500">{proj.technologies.join(', ')}</p>
              )}
              {proj.description && (
                <p className="mt-2 text-sm text-gray-600">{proj.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {(certifications.length > 0 || achievements.length > 0) && (
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Awards</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mt-4">
              <h3 className="text-gray-900">{cert.name}</h3>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </div>
          ))}
          {achievements.map((ach) => (
            <div key={ach.id} className="mt-4">
              <h3 className="text-gray-900">{ach.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
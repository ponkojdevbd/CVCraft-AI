import type { ResumeData } from '../../types/resume'

interface TemplateClassicProps {
  resume: ResumeData
}

export default function TemplateClassic({ resume }: TemplateClassicProps) {
  const { personalInfo, education, experience, skills, projects, certifications, achievements } = resume

  if (!personalInfo.firstName && !personalInfo.lastName) {
    return (
      <div className="flex h-[800px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <p className="text-gray-500">No resume data to display</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-8 shadow-sm" style={{ minHeight: '800px', fontFamily: 'Georgia, serif' }}>
      <div className="text-center border-b border-gray-300 pb-6">
        {(personalInfo.firstName || personalInfo.lastName) && (
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
        )}
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.location && <span>| {personalInfo.location}</span>}
        </div>
        {(personalInfo.linkedin || personalInfo.github || personalInfo.website) && (
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm text-primary-700">
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && <span>| {personalInfo.github}</span>}
            {personalInfo.website && <span>| {personalInfo.website}</span>}
          </div>
        )}
      </div>

      {personalInfo.summary && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-sm text-gray-600">
                  {exp.startDate && exp.startDate.slice(0, 7)}
                  {exp.startDate && (exp.endDate || exp.current ? ' - ' : '')}
                  {exp.current ? 'Present' : exp.endDate && exp.endDate.slice(0, 7)}
                </span>
              </div>
              <p className="text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</p>
              {exp.description && (
                <p className="mt-2 text-gray-700 text-sm whitespace-pre-wrap">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.fieldOfStudy}</h3>
                <span className="text-sm text-gray-600">
                  {edu.startDate && edu.startDate.slice(0, 7)}
                  {edu.startDate && edu.endDate ? ' - ' : ''}
                  {edu.endDate && edu.endDate.slice(0, 7)}
                </span>
              </div>
              <p className="text-gray-700">{edu.institution}</p>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mt-4">
              <h3 className="font-semibold text-gray-900">{proj.name}</h3>
              {proj.technologies.length > 0 && (
                <p className="text-sm text-gray-600">
                  {proj.technologies.join(', ')}
                </p>
              )}
              {proj.description && (
                <p className="mt-1 text-gray-700 text-sm">{proj.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {(certifications.length > 0 || achievements.length > 0) && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1">
            Certifications & Achievements
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mt-3">
              <h3 className="font-semibold text-gray-900">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
            </div>
          ))}
          {achievements.map((ach) => (
            <div key={ach.id} className="mt-3">
              <h3 className="font-semibold text-gray-900">{ach.title}</h3>
              {ach.description && (
                <p className="text-sm text-gray-600">{ach.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
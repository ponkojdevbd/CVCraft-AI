import type { ResumeData } from '../../types/resume'

interface TemplateModernProps {
  resume: ResumeData
}

export default function TemplateModern({ resume }: TemplateModernProps) {
  const { personalInfo, education, experience, skills, projects, certifications, achievements } = resume

  if (!personalInfo.firstName && !personalInfo.lastName) {
    return (
      <div className="flex h-[800px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <p className="text-gray-500">No resume data to display</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-sm" style={{ minHeight: '800px' }}>
      <div className="flex">
        <div className="w-1/3 bg-gray-900 p-6">
          {(personalInfo.firstName || personalInfo.lastName) && (
            <h1 className="text-2xl font-bold text-white">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
          )}
          
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            {personalInfo.email && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
                <p>{personalInfo.email}</p>
              </div>
            )}
            {personalInfo.phone && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Phone</p>
                <p>{personalInfo.phone}</p>
              </div>
            )}
            {personalInfo.location && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
                <p>{personalInfo.location}</p>
              </div>
            )}
          </div>

          {skills.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mt-3">
                  <p className="text-white font-medium">{edu.institution}</p>
                  <p className="text-xs text-gray-400">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-xs text-gray-500">
                    {edu.startDate?.slice(0, 7)} - {edu.endDate?.slice(0, 7) || 'Present'}
                  </p>
                </div>
              ))}
            </div>
          )}

          {(certifications.length > 0 || achievements.length > 0) && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Certifications</h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mt-2">
                  <p className="text-white text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              ))}
              {achievements.map((ach) => (
                <div key={ach.id} className="mt-2">
                  <p className="text-white text-sm">{ach.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-2/3 bg-white p-6">
          {personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">About Me</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">Experience</h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mt-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-500">
                      {exp.startDate?.slice(0, 7)} - {exp.current ? 'Present' : exp.endDate?.slice(0, 7)}
                    </span>
                  </div>
                  <p className="text-sm text-primary-600">{exp.company}</p>
                  {exp.description && (
                    <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">Projects</h2>
              {projects.map((proj) => (
                <div key={proj.id} className="mt-4">
                  <h3 className="font-semibold text-gray-900">{proj.name}</h3>
                  {proj.technologies.length > 0 && (
                    <p className="text-sm text-gray-500">
                      {proj.technologies.join(', ')}
                    </p>
                  )}
                  {proj.description && (
                    <p className="mt-1 text-sm text-gray-600">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
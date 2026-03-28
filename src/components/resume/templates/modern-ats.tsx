// Modern ATS Resume Template
'use client';

import type { ResumeData } from '@/lib/resume-data';

interface ModernATSTemplateProps {
  data: ResumeData;
  watermark?: string;
}

export function ModernATSTemplate({ data, watermark }: ModernATSTemplateProps) {
  const accentColor = data.accentColor || '#7C3AED';

  return (
    <div className="bg-white text-gray-900 p-10" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Header with accent line */}
      <div className="flex items-baseline gap-6 pb-6 mb-6" style={{ borderBottom: `3px solid ${accentColor}` }}>
        <div>
          <h1 className="text-3xl font-bold">{data.personal.fullName}</h1>
          <div className="text-sm text-gray-600 mt-2 gap-3 flex flex-wrap">
            <span>{data.personal.email}</span>
            <span>•</span>
            <span>{data.personal.phone}</span>
            <span>•</span>
            <span>{data.personal.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.enabledSections.includes('summary') && data.summary && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: accentColor }}>Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-800">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.enabledSections.includes('experience') && data.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: accentColor }}>Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                  <span className="text-xs text-gray-600">{exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{exp.company} | {exp.location}</p>
                <p className="text-xs text-gray-700 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.enabledSections.includes('education') && data.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: accentColor }}>Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm">{edu.degree}</h3>
                  <span className="text-xs text-gray-600">{edu.graduationDate}</span>
                </div>
                <p className="text-xs text-gray-600">{edu.institution} | {edu.location}</p>
                {edu.cgpa && <p className="text-xs text-gray-600">CGPA: {edu.cgpa}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.enabledSections.includes('skills') && data.skills.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: accentColor }}>Skills</h2>
          <p className="text-xs text-gray-800">{data.skills.join(' • ')}</p>
        </div>
      )}

      {/* Projects */}
      {data.enabledSections.includes('projects') && data.projects.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: accentColor }}>Projects</h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="font-semibold text-sm">{proj.title}</h3>
                <p className="text-xs text-gray-700 mb-1">{proj.description}</p>
                <p className="text-xs text-gray-600">Tech: {proj.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.enabledSections.includes('certifications') && data.certifications.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: accentColor }}>Certifications</h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-semibold text-sm">{cert.name}</h3>
                <p className="text-xs text-gray-600">{cert.issuer} | {cert.issueDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.enabledSections.includes('languages') && data.languages.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: accentColor }}>Languages</h2>
          <p className="text-xs text-gray-800">
            {data.languages.map((lang) => `${lang.language} (${lang.proficiency})`).join(' • ')}
          </p>
        </div>
      )}

      {/* Watermark */}
      {watermark && (
        <div className="text-center text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">
          {watermark}
        </div>
      )}
    </div>
  );
}

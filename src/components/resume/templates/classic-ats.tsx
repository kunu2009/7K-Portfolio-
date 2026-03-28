// Classic ATS Resume Template - Free
'use client';

import type { ResumeData } from '@/lib/resume-data';

interface ClassicATSTemplateProps {
  data: ResumeData;
  watermark?: string;
  accentColor?: string;
}

export function ClassicATSTemplate({ data, watermark }: ClassicATSTemplateProps) {
  return (
    <div className="bg-white text-black p-12 font-serif" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold">{data.personal.fullName}</h1>
        <div className="text-sm mt-2 flex justify-center gap-2">
          <span>{data.personal.email}</span>
          <span>|</span>
          <span>{data.personal.phone}</span>
          <span>|</span>
          <span>{data.personal.location}</span>
        </div>
        {data.personal.linkedin && (
          <div className="text-sm mt-1">
            <span>LinkedIn: {data.personal.linkedin}</span>
          </div>
        )}
      </div>

      {/* Professional Summary */}
      {data.enabledSections.includes('summary') && data.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.enabledSections.includes('experience') && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">EXPERIENCE</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="font-bold text-sm">{exp.jobTitle}</div>
                <div className="text-sm italic">{exp.company} | {exp.location}</div>
                <div className="text-xs text-gray-700">{exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}</div>
                <div className="text-sm mt-1 whitespace-pre-wrap">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.enabledSections.includes('education') && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">EDUCATION</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="font-bold text-sm">{edu.degree}</div>
                <div className="text-sm italic">{edu.institution} | {edu.location}</div>
                <div className="text-xs text-gray-700">
                  {edu.graduationDate}
                  {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.enabledSections.includes('skills') && data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">SKILLS</h2>
          <p className="text-sm">{data.skills.join(' • ')}</p>
        </div>
      )}

      {/* Projects */}
      {data.enabledSections.includes('projects') && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">PROJECTS</h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <div className="font-bold text-sm">{proj.title}</div>
                <div className="text-sm">{proj.description}</div>
                <div className="text-xs text-gray-700">Tech: {proj.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.enabledSections.includes('certifications') && data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">CERTIFICATIONS</h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id}>
                <div className="font-bold text-sm">{cert.name}</div>
                <div className="text-xs text-gray-700">{cert.issuer} | {cert.issueDate}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.enabledSections.includes('languages') && data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b border-black pb-1 mb-3">LANGUAGES</h2>
          <div className="text-sm">
            {data.languages.map((lang) => `${lang.language} (${lang.proficiency})`).join(' • ')}
          </div>
        </div>
      )}

      {/* Watermark */}
      {watermark && (
        <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200">
          {watermark}
        </div>
      )}
    </div>
  );
}

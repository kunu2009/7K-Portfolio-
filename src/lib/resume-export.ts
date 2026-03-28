// Resume export utilities for PDF and DOCX

import html2pdf from 'html2pdf.js';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, VerticalAlign, TextRun } from 'docx';
import type { ResumeData } from './resume-data';

/**
 * Export resume as PDF
 */
export async function exportResumePDF(
  htmlContent: HTMLElement,
  fileName: string,
  hasWatermark: boolean = true
): Promise<void> {
  const element = htmlContent.cloneNode(true) as HTMLElement;
  
  if (hasWatermark) {
    // Add watermark to PDF
    const watermark = document.createElement('div');
    watermark.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 80px;
      color: rgba(0, 0, 0, 0.1);
      font-weight: bold;
      white-space: nowrap;
      pointer-events: none;
      z-index: 0;
    `;
    watermark.textContent = 'Made with 7K Resume Maker';
    element.appendChild(watermark);
  }

  const options = {
    margin: [10, 10],
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  };

  html2pdf().set(options).from(element).save();
}

/**
 * Export resume as DOCX with optional watermark
 */
export async function exportResumeDOCX(
  resumeData: ResumeData,
  fileName: string,
  hasWatermark: boolean = true
): Promise<void> {
  const sections: Paragraph[] = [];

  // Header - Personal Info
  sections.push(
    new Paragraph({
      text: resumeData.personal.fullName,
      bold: true,
      size: 32,
      spacing: { after: 100 },
    })
  );

  // Contact Info
  const contactInfo = [
    resumeData.personal.email,
    resumeData.personal.phone,
    resumeData.personal.location,
    resumeData.personal.portfolio,
    resumeData.personal.linkedin,
    resumeData.personal.github,
  ]
    .filter(Boolean)
    .join(' | ');

  sections.push(
    new Paragraph({
      text: contactInfo,
      size: 20,
      spacing: { after: 200 },
    })
  );

  // Summary
  if (resumeData.enabledSections.includes('summary') && resumeData.summary) {
    sections.push(
      new Paragraph({
        text: 'PROFESSIONAL SUMMARY',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      }),
      new Paragraph({
        text: resumeData.summary,
        size: 22,
        spacing: { after: 200 },
      })
    );
  }

  // Experience
  if (resumeData.enabledSections.includes('experience') && resumeData.experience.length > 0) {
    sections.push(
      new Paragraph({
        text: 'EXPERIENCE',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      })
    );

    resumeData.experience.forEach((exp) => {
      sections.push(
        new Paragraph({
          text: exp.jobTitle,
          bold: true,
          size: 22,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `${exp.company} | ${exp.location}`,
          italic: true,
          size: 20,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `${exp.startDate} - ${exp.currentlyWorking ? 'Present' : exp.endDate}`,
          size: 20,
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: exp.description,
          size: 22,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Education
  if (resumeData.enabledSections.includes('education') && resumeData.education.length > 0) {
    sections.push(
      new Paragraph({
        text: 'EDUCATION',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      })
    );

    resumeData.education.forEach((edu) => {
      sections.push(
        new Paragraph({
          text: edu.degree,
          bold: true,
          size: 22,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `${edu.institution} | ${edu.location}`,
          italic: true,
          size: 20,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `Graduation: ${edu.graduationDate}${edu.cgpa ? ` | CGPA: ${edu.cgpa}` : ''}`,
          size: 20,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Skills
  if (resumeData.enabledSections.includes('skills') && resumeData.skills.length > 0) {
    sections.push(
      new Paragraph({
        text: 'SKILLS',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      }),
      new Paragraph({
        text: resumeData.skills.join(' • '),
        size: 22,
        spacing: { after: 200 },
      })
    );
  }

  // Projects
  if (resumeData.enabledSections.includes('projects') && resumeData.projects.length > 0) {
    sections.push(
      new Paragraph({
        text: 'PROJECTS',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      })
    );

    resumeData.projects.forEach((project) => {
      sections.push(
        new Paragraph({
          text: project.title,
          bold: true,
          size: 22,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: project.description,
          size: 22,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `Technologies: ${project.technologies.join(', ')}`,
          italic: true,
          size: 20,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Certifications
  if (resumeData.enabledSections.includes('certifications') && resumeData.certifications.length > 0) {
    sections.push(
      new Paragraph({
        text: 'CERTIFICATIONS',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      })
    );

    resumeData.certifications.forEach((cert) => {
      sections.push(
        new Paragraph({
          text: cert.name,
          bold: true,
          size: 22,
          spacing: { after: 50 },
        }),
        new Paragraph({
          text: `${cert.issuer} | ${cert.issueDate}${cert.expiryDate ? ` - ${cert.expiryDate}` : ''}`,
          size: 20,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Languages
  if (resumeData.enabledSections.includes('languages') && resumeData.languages.length > 0) {
    sections.push(
      new Paragraph({
        text: 'LANGUAGES',
        bold: true,
        size: 24,
        spacing: { before: 100, after: 100 },
      })
    );

    resumeData.languages.forEach((lang) => {
      sections.push(
        new Paragraph({
          text: `${lang.language} - ${lang.proficiency}`,
          size: 22,
          spacing: { after: 100 },
        })
      );
    });
  }

  // Add watermark if needed
  if (hasWatermark) {
    sections.push(
      new Paragraph({
        text: 'Made with 7K Resume Maker',
        italic: true,
        size: 16,
        spacing: { before: 300, after: 0 },
      })
    );
  }

  const doc = new Document({
    sections: [
      {
        children: sections,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.docx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generate access code for premium template
 */
export function generateAccessCode(): string {
  return `7K-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Get watermark text based on template access
 */
export function getWatermarkText(isPremium: boolean, hasAccess: boolean): string | null {
  if (!isPremium || hasAccess) return null;
  return 'Made with 7K Resume Maker';
}

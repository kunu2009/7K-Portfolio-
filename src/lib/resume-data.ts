// Resume data types and structures

export type ResumeTemplate = 'ats-classic' | 'ats-modern' | 'ats-minimal' | 'ats-elegant' | 'creative-bold' | 'creative-minimalist' | 'creative-colorful' | 'creative-geometric';

export type TemplateInfo = {
  id: ResumeTemplate;
  name: string;
  description: string;
  category: 'ATS-Friendly' | 'Modern/Creative';
  isPremium: boolean;
  preview: string;
};

export const RESUME_TEMPLATES: TemplateInfo[] = [
  // ATS-Friendly Templates
  {
    id: 'ats-classic',
    name: 'Classic Professional',
    description: 'Traditional black & white, perfectly optimized for ATS systems',
    category: 'ATS-Friendly',
    isPremium: false,
    preview: 'Simple, clean, professional'
  },
  {
    id: 'ats-modern',
    name: 'Modern ATS',
    description: 'Contemporary design with subtle accent color, ATS compatible',
    category: 'ATS-Friendly',
    isPremium: false,
    preview: 'Clean with accent color'
  },
  {
    id: 'ats-minimal',
    name: 'Minimal Pro',
    description: 'Ultra-minimal design, maximum ATS compatibility',
    category: 'ATS-Friendly',
    isPremium: false,
    preview: 'Minimal and sharp'
  },
  {
    id: 'ats-elegant',
    name: 'Elegant Serif',
    description: 'Sophisticated serif fonts, ATS-compatible elegance',
    category: 'ATS-Friendly',
    isPremium: true,
    preview: 'Refined and elegant'
  },
  // Modern/Creative Templates
  {
    id: 'creative-bold',
    name: 'Bold Impact',
    description: 'Eye-catching design with strong colors and typography',
    category: 'Modern/Creative',
    isPremium: true,
    preview: 'Bold and vibrant'
  },
  {
    id: 'creative-minimalist',
    name: 'Minimalist Zen',
    description: 'Modern minimalist with whitespace and hierarchy focus',
    category: 'Modern/Creative',
    isPremium: true,
    preview: 'Zen and spacious'
  },
  {
    id: 'creative-colorful',
    name: 'Colorful Wave',
    description: 'Creative gradient colors with modern layout',
    category: 'Modern/Creative',
    isPremium: true,
    preview: 'Colorful and modern'
  },
  {
    id: 'creative-geometric',
    name: 'Geometric Pro',
    description: 'Geometric shapes and modern design elements',
    category: 'Modern/Creative',
    isPremium: true,
    preview: 'Geometric and contemporary'
  }
];

export type ResumeSection = 
  | 'personal' 
  | 'summary' 
  | 'experience' 
  | 'education' 
  | 'skills' 
  | 'projects' 
  | 'certifications' 
  | 'languages';

export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  portfolio?: string;
  linkedin?: string;
  github?: string;
};

export type ExperienceItem = {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  cgpa?: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  url?: string;
  technologies: string[];
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  url?: string;
};

export type LanguageItem = {
  id: string;
  language: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Fluent';
};

export type ResumeData = {
  templateId: ResumeTemplate;
  personal: PersonalInfo;
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  enabledSections: ResumeSection[];
  accentColor?: string; // For templates that support custom colors
};

export const DEFAULT_RESUME_DATA: ResumeData = {
  templateId: 'ats-classic',
  personal: {
    fullName: 'Your Name',
    email: 'email@example.com',
    phone: '+91 XXXXX XXXXX',
    location: 'City, State',
    portfolio: '',
    linkedin: '',
    github: ''
  },
  summary: 'Brief professional summary highlighting your key skills and career objectives.',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  enabledSections: ['personal', 'summary', 'experience', 'education', 'skills'],
  accentColor: '#7C3AED' // Violet
};

// Premium template access tracking
export type TemplateAccess = {
  email: string;
  phone: string;
  template: ResumeTemplate;
  accessCode: string;
  paymentVerified: boolean;
  grantedAt: string;
  expiresAt?: string; // Optional expiry
};

// Helper function to get free templates
export function getFreeTemplates(): TemplateInfo[] {
  return RESUME_TEMPLATES.filter(t => !t.isPremium);
}

// Helper function to get premium templates
export function getPremiumTemplates(): TemplateInfo[] {
  return RESUME_TEMPLATES.filter(t => t.isPremium);
}

// Helper function to check if template is accessible
export function isTemplateAccessible(template: ResumeTemplate, accessList?: TemplateAccess[]): boolean {
  const templateInfo = RESUME_TEMPLATES.find(t => t.id === template);
  if (!templateInfo) return false;
  if (!templateInfo.isPremium) return true;
  if (!accessList) return false;
  
  return accessList.some(a => a.template === template && a.paymentVerified);
}

// LocalStorage keys
export const RESUME_STORAGE_KEYS = {
  RESUME_DATA: 'resume_data',
  TEMPLATE_ACCESS: 'template_access',
  DRAFT_SAVE_TIME: 'resume_draft_save_time',
} as const;

/**
 * Centralized Portfolio Showcase Data
 * Complete information about Kunal Chheda for use across all portfolio styles
 */

export const PORTFOLIO_INFO = {
  // Personal Information
  name: "Kunal Chheda",
  firstName: "Kunal",
  lastName: "Chheda",
  title: "Student Developer & Polyglot",
  role: "Full Stack Developer",
  tagline: "Building the 7K Ecosystem — One Idea at a Time",
  description: "I'm Kunal — a 12th-grade Arts student with a passion for building apps, learning languages, and playing chess (1300 rated rapid on Chess.com). I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort. My apps aren't just utilities—they're quiet companions for people who need them most.",
  shortBio: "12th-grade student developer building 20+ productivity apps. Polyglot, chess player, and future corporate lawyer.",
  location: "India",
  education: "12th Grade Arts Student",
  status: "Open for Opportunities",
  avatar: "/favicon.ico",
  
  // Contact & Social
  email: "7kmindbeatss@gmail.com",
  phone: "+918591247148",
  website: "https://7kc.me",
  
  social: {
    github: "https://github.com/kunu2009",
    githubHandle: "@kunu2009",
    linkedin: "https://www.linkedin.com/in/kunal-chheda-b36731388",
    linkedinHandle: "Kunal Chheda",
    instagram: "https://www.instagram.com/7kc_me/",
    instagramHandle: "@7kc_me",
    twitter: "https://twitter.com/kunal7k",
    twitterHandle: "@kunal7k",
  },
  
  // Skills with levels
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "shadcn/ui", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Firebase", level: 92 },
      { name: "Firestore", level: 88 },
      { name: "API Development", level: 85 },
    ],
    languages: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "SQL", level: 75 },
    ],
    tools: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "npm/pnpm",
      "Google AI (Gemini)",
      "Genkit",
    ],
  },
  
  // Featured Projects
  projects: [
    {
      id: "7k-life",
      title: "7K Life App",
      description: "Core application for holistic life management and productivity",
      longDescription: "The 7K Life App is the cornerstone of the ecosystem. It's designed to be a central hub for your entire life, integrating task management, goal setting, habit tracking, and personal knowledge management.",
      tags: ["Productivity", "Ecosystem", "React", "Firebase"],
      tech: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      link: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/",
      github: "https://github.com/kunu2009",
      image: "/images/7klife-logo.svg",
      status: "Live",
      year: "2024",
    },
    {
      id: "7k-lawprep",
      title: "7K LawPrep",
      description: "Web-based utilities and resources for law aspirants",
      longDescription: "A specialized suite of tools designed to help law aspirants prepare for competitive entrance exams like CLAT and MHCET. Features include mock tests, legal knowledge quizzes, and performance analytics.",
      tags: ["Education", "Tool", "React", "Interactive"],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://7kc.me",
      github: "https://github.com/kunu2009",
      image: "/images/lawprep-logo.svg",
      status: "In Progress",
      year: "2024",
    },
    {
      id: "7k-polyglot",
      title: "7K Polyglot",
      description: "Language learning companion with 20+ languages",
      longDescription: "An innovative language learning platform that helps users master multiple languages through interactive lessons, spaced repetition, and real-world context.",
      tags: ["Education", "Language", "Learning", "AI"],
      tech: ["React", "Next.js", "TypeScript", "AI Integration"],
      link: "https://7kc.me",
      github: "https://github.com/kunu2009",
      image: "/images/polyglot-logo.svg",
      status: "In Progress",
      year: "2024",
    },
    {
      id: "7k-portfolio",
      title: "7K Portfolio Showcase",
      description: "Personal portfolio with 20+ unique portfolio designs",
      longDescription: "A showcase of various portfolio design styles, each with unique aesthetics and interactions. Features multiple themes including arcade, terminal, mobile, story, and more.",
      tags: ["Portfolio", "Design", "Next.js", "Animation"],
      tech: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      link: "https://7kc.me",
      github: "https://github.com/kunu2009/7K-Portfolio-",
      image: "/images/portfolio-logo.svg",
      status: "Live",
      year: "2024",
    },
  ],
  
  // Achievements/Stats
  achievements: [
    {
      icon: "trophy",
      title: "20+ Apps Built",
      description: "Built and deployed 20+ productivity applications",
    },
    {
      icon: "star",
      title: "Full Stack Master",
      description: "Proficient in frontend, backend, and cloud technologies",
    },
    {
      icon: "zap",
      title: "Fast Developer",
      description: "Rapid prototyping and efficient development workflows",
    },
    {
      icon: "code",
      title: "Open Source",
      description: "Contributing to the developer community",
    },
  ],
  
  // Experience/Journey
  experience: [
    {
      year: "2024-Present",
      title: "7K Ecosystem",
      role: "Founder & Developer",
      description: "Building a suite of 20+ productivity apps focused on language learning, legal preparation, and personal development.",
    },
    {
      year: "2023-2024",
      title: "Student Developer",
      role: "Independent",
      description: "Started learning web development and building real-world applications. Mastered React, Next.js, and modern web technologies.",
    },
  ],
  
  // Interests
  interests: [
    { category: "Technical", items: ["App Development", "Software Design", "AI Integration", "Web Technologies"] },
    { category: "Strategic", items: ["Chess (1300 rapid)", "Problem Solving", "Critical Analysis"] },
    { category: "Personal", items: ["Language Learning", "Continuous Learning", "Self-Improvement", "Reading"] },
  ],
  
  // Meta
  traits: ["Developer", "Polyglot", "Chess Player", "Lifelong Learner"],
  dreamCareer: "Corporate Lawyer with Tech Skills",
} as const;

// Legacy exports for backward compatibility
export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  avatar?: string;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  metaDescription: string;
  analyticsEnabled: boolean;
  maintenanceMode: boolean;
  ogImage?: string;
}

export const portfolioData: PortfolioData = {
  name: PORTFOLIO_INFO.name,
  title: PORTFOLIO_INFO.title,
  bio: PORTFOLIO_INFO.description,
  email: PORTFOLIO_INFO.email,
  github: PORTFOLIO_INFO.social.githubHandle.replace('@', ''),
  linkedin: PORTFOLIO_INFO.social.linkedin.split('/in/')[1],
  twitter: PORTFOLIO_INFO.social.twitterHandle.replace('@', ''),
  location: PORTFOLIO_INFO.location,
  avatar: PORTFOLIO_INFO.avatar
};

export const siteSettings: SiteSettings = {
  siteName: "7K Ecosystem",
  siteUrl: PORTFOLIO_INFO.website,
  metaDescription: "20+ productivity apps built by Kunal Chheda, a 12th-grade student developer from India. Explore 7K Life, LawPrep, Polyglot & more Next.js applications.",
  analyticsEnabled: true,
  maintenanceMode: false,
  ogImage: "/og-image.png"
};

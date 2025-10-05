/**
 * Site-wide constants and configuration
 * Following the 7K Portfolio Master Plan
 */

export const SITE_CONFIG = {
  name: "7K Ecosystem",
  title: "7K Ecosystem | Kunal Chheda - Developer & Polyglot",
  description:
    "Discover the 7K ecosystem of apps built by Kunal, a 12th-grade student passionate about development, languages, music, and lifelong learning.",
  url: "https://7k-portfolio.com",
  ogImage: "/og-image.png",
  author: {
    name: "Kunal Chheda",
    email: "kunalchheda13@gmail.com",
    github: "https://github.com/kunu2009",
    linkedin: "https://linkedin.com/in/kunal-chheda",
    twitter: "https://twitter.com/kunal7k",
  },
  keywords: [
    "Kunal Chheda",
    "7K Ecosystem",
    "Developer Portfolio",
    "Student Developer",
    "App Development",
    "Language Learning",
    "Personal Brand",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
  ],
} as const;

export const PERSONAL_INFO = {
  name: "Kunal Chheda",
  role: "Student Developer & Polyglot",
  tagline: "Building the 7K Ecosystem — One Idea at a Time",
  bio: "I'm Kunal — a 12th-grade Arts student with a passion for building apps, learning languages, and making music. I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort. My apps aren't just utilities—they're quiet companions for people who need them most.",
  location: "India",
  education: "12th Grade Student",
  status: "Open for opportunities",
  traits: ["Developer", "Polyglot", "Musician", "Lifelong Learner"],
  
  languages: {
    programming: [
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML/CSS",
      "SQL",
    ],
  },
  
  exploring: [
    "Privacy-first app architecture",
    "SVG animation workflows",
    "Minimalist launcher UX",
    "Legal tech tools for advocacy",
  ],
  
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    backend: [
      "Node.js",
      "Express",
      "Firebase",
      "Firestore",
      "API Development",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "npm/pnpm",
    ],
    ai: [
      "Google AI (Gemini)",
      "Genkit",
      "AI Integration",
      "Chatbots",
    ],
    other: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Accessibility",
      "PWA Development",
    ],
  },
  
  interests: [
    {
      category: "Technical",
      items: ["Programming", "App Development", "Software Design", "Hardware"],
    },
    {
      category: "Creative",
      items: ["Flute", "Guitar", "Music Composition"],
    },
    {
      category: "Personal",
      items: ["Chess", "Handyman Skills", "Personal Growth", "Self-Improvement"],
    },
  ],
} as const;

export const PROJECTS = [
  {
    id: "7k-life",
    title: "7K Life App",
    shortDescription: "Core application for holistic life management and productivity.",
    longDescription: "The 7K Life App is the cornerstone of the ecosystem. It's designed to be a central hub for your entire life, integrating task management, goal setting, habit tracking, and personal knowledge management into one seamless experience.",
    status: "ongoing" as const,
    tags: ["Productivity", "Ecosystem", "React", "Firebase"],
    features: [
      "Holistic Task Management",
      "Integrated Goal & Habit Tracking",
      "Personal Knowledge Base",
      "Seamless Syncing",
    ],
    tech: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    links: {
      live: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/",
      github: "https://github.com/kunu2009",
    },
    image: "/images/7klife-logo.svg",
    color: "#B87333",
  },
  {
    id: "7k-lawprep",
    title: "7K LawPrep",
    shortDescription: "Web-based utilities and resources for law aspirants.",
    longDescription: "A specialized suite of tools designed to help law aspirants prepare for competitive entrance exams like CLAT and MHCET. Features include mock tests, legal knowledge quizzes, and performance analytics.",
    status: "ongoing" as const,
    tags: ["Education", "Tool", "React", "Interactive"],
    features: [
      "Mock Test Simulators",
      "Legal GK Quizzes",
      "Performance Analytics",
      "Resource Library",
    ],
    tech: ["React", "Next.js", "TypeScript", "Firebase"],
    links: {
      live: "https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/",
      github: "https://github.com/kunu2009",
    },
    image: "/images/lawprep-logo.svg",
    color: "#8B5A2B",
  },
  {
    id: "7k-polyglot",
    title: "7K Polyglot",
    shortDescription: "A fun and engaging way to expand your vocabulary in new languages.",
    longDescription: "7K Polyglot is a language-learning companion designed to make vocabulary acquisition easy and enjoyable. Use flashcards, quizzes, and spaced repetition to master new words.",
    status: "ongoing" as const,
    tags: ["Education", "Tool", "Language Learning"],
    features: [
      "Flashcard Decks",
      "Spaced Repetition System",
      "Interactive Quizzes",
      "Multiple Language Support",
    ],
    tech: ["React", "Next.js", "TypeScript", "AI Integration"],
    links: {
      live: "https://7-k-polyglot.vercel.app/",
      github: "https://github.com/kunu2009",
    },
    image: "/images/polyglot-placeholder.svg",
    color: "#14b8a6",
  },
  {
    id: "7k-itihaas",
    title: "7K Itihaas",
    shortDescription: "Explore the rich history of India through interactive timelines.",
    longDescription: "7K Itihaas brings Indian history to life with detailed and interactive timelines. Discover the events, rulers, and cultures that have shaped the subcontinent over millennia.",
    status: "ongoing" as const,
    tags: ["Education", "Interactive", "History"],
    features: [
      "Interactive Timelines",
      "Detailed Event Descriptions",
      "Dynasty and Era Guides",
      "Visual Historical Maps",
    ],
    tech: ["React", "Next.js", "TypeScript", "D3.js"],
    links: {
      live: "https://7-k-itihaas.vercel.app/",
      github: "https://github.com/kunu2009",
    },
    image: "/images/itihaas-placeholder.svg",
    color: "#a855f7",
  },
  {
    id: "stan-ai",
    title: "Stan: AI Assistant",
    shortDescription: "An AI running on Android to provide assistance on the go.",
    longDescription: "Stan is an intelligent AI assistant integrated across the ecosystem. It's designed to automate tasks, provide timely information, and offer assistance contextually within other 7K apps, starting with Android.",
    status: "ongoing" as const,
    tags: ["AI", "Ecosystem", "Productivity"],
    features: [
      "Context-Aware Assistance",
      "Task Automation",
      "Cross-App Integration",
      "Natural Language Interface",
    ],
    tech: ["React Native", "Google AI", "Genkit", "Firebase"],
    links: {
      github: "https://github.com/kunu2009",
    },
    image: "/images/stan-ai-placeholder.svg",
    color: "#D4A274",
  },
] as const;

export const FUTURE_PROJECTS = [
  {
    id: "custom-launcher",
    title: "Custom Launcher",
    shortDescription: "A minimal and productivity-focused Android launcher.",
    longDescription: "A minimalist Android launcher designed to reduce distractions and promote focus. It prioritizes essential apps and integrates with the 7K Life App to display your most important tasks and goals right on your home screen.",
    tags: ["Productivity", "Tool", "Android"],
    features: [
      "Minimalist Interface",
      "Focus Mode",
      "Task & Goal Integration",
      "Customizable Widgets",
    ],
  },
  {
    id: "ai-tools",
    title: "Standalone AI Tools",
    shortDescription: "A suite of small, powerful AI utilities for specific tasks.",
    longDescription: "A collection of small, sharp, and powerful AI-driven utilities. Each tool is designed to solve a specific problem efficiently, such as a smart content summarizer, an idea generator, or an AI-powered text editor.",
    tags: ["AI", "Tool", "Productivity"],
    features: [
      "Task-Specific AI",
      "Lightweight & Fast",
      "API-First Design",
      "Interoperability",
    ],
  },
  {
    id: "smart-journal",
    title: "Smart Journal App",
    shortDescription: "An intelligent journaling app with prompts and analysis.",
    longDescription: "An intelligent journaling app that goes beyond simple note-taking. It uses AI to provide insightful prompts, analyze your entries for patterns and sentiments, and help you reflect on your personal growth journey.",
    tags: ["AI", "Personal Growth"],
    features: [
      "AI-Powered Prompts",
      "Sentiment Analysis",
      "Goal-Oriented Journaling",
      "Secure & Private",
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/kunu2009",
    icon: "Github",
    handle: "@kunu2009",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kunal-chheda",
    icon: "Linkedin",
    handle: "Kunal Chheda",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/kunal7k",
    icon: "Twitter",
    handle: "@kunal7k",
  },
  {
    name: "Email",
    url: "mailto:kunalchheda13@gmail.com",
    icon: "Mail",
    handle: "kunalchheda13@gmail.com",
  },
] as const;

export const NAVIGATION = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Portfolio Showcase", href: "/#showcase" },
  { name: "Ecosystem", href: "/#ecosystem" },
  { name: "Projects", href: "/#projects" },
  { name: "Writing", href: "/#writing" },
  { name: "Contact", href: "/#contact" },
] as const;

export const TESTIMONIALS = [
  // Placeholder - to be filled with real testimonials
  {
    id: 1,
    name: "Coming Soon",
    role: "Testimonial",
    content: "Testimonials will be added here once available.",
    avatar: "/images/avatar-placeholder.svg",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    metric: "8+",
    label: "Projects in 7K Ecosystem",
  },
  {
    metric: "5+",
    label: "Programming Languages",
  },
  {
    metric: "2+",
    label: "Years Coding",
  },
  {
    metric: "100%",
    label: "Passion & Dedication",
  },
] as const;

export const FAQ = [
  {
    question: "What is the 7K Ecosystem?",
    answer: "The 7K Ecosystem is a collection of interconnected apps and tools designed to help with productivity, learning, and personal growth. Each app serves a specific purpose but works together seamlessly.",
  },
  {
    question: "Are you available for hire?",
    answer: "Yes! I'm open to internships, part-time opportunities, and collaborations. Feel free to reach out via the contact form or email.",
  },
  {
    question: "What technologies do you work with?",
    answer: "I primarily work with React, Next.js, TypeScript, and Firebase. I'm also exploring AI integration with Google's Gemini and mobile development with React Native.",
  },
  {
    question: "How can I try your apps?",
    answer: "Most of my apps are available online. Check out the Projects section for live demo links. Some projects are still in development and will be released soon!",
  },
  {
    question: "Do you contribute to open source?",
    answer: "Yes! I believe in learning and building in public. You can find my projects and contributions on GitHub.",
  },
] as const;

// Color palette from master plan
export const COLORS = {
  primary: {
    bronze: "#B87333",
    gold: "#D4A274",
    dark: "#8B5A2B",
    light: "#F5DEB3",
  },
  secondary: {
    teal: "#14b8a6",
    tealDark: "#0d9488",
    purple: "#a855f7",
    purpleDark: "#9333ea",
  },
  neutral: {
    bgDark: "#0a0a0a",
    bgSecondary: "#1a1a1a",
    bgCard: "#252525",
    textPrimary: "#ffffff",
    textSecondary: "#b0b0b0",
    border: "rgba(255,255,255,0.1)",
  },
} as const;

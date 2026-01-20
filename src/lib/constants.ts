/**
 * Site-wide constants and configuration
 * Following the 7K Portfolio Master Plan
 */

export const SITE_CONFIG = {
  name: "7K Ecosystem",
  title: "Best Productivity Apps, Fitness Tracker & Learning Tools | Free Web Apps 2025",
  description:
    "Discover 20+ free productivity apps, fitness trackers, language learning tools, finance managers, and educational apps. Built by student developer Kunal Chheda from India. Free habit tracker, task manager, CLAT preparation, chess tools & more.",
  url: "https://7kc.me",
  ogImage: "/og-image.png",
  author: {
    name: "Kunal Chheda",
    email: "7kmindbeatss@gmail.com",
    github: "https://github.com/kunu2009",
    linkedin: "https://www.linkedin.com/in/kunal-chheda-b36731388",
    twitter: "https://twitter.com/kunal7k",
  },
  keywords: [
    // Generic High-Traffic Keywords
    "productivity app",
    "fitness tracker app",
    "habit tracker free",
    "task manager online",
    "language learning app",
    "finance tracker app",
    "personal finance app",
    "budget tracker free",
    "study planner app",
    "goal tracker app",
    "life management app",
    "daily planner free",
    "note taking app",
    "free productivity tools",
    "best productivity apps 2025",
    
    // Education & Learning
    "CLAT preparation app",
    "law entrance exam app",
    "language learning platform",
    "vocabulary builder app",
    "history learning app",
    "political science app",
    "economics study app",
    "educational apps for students",
    "free study apps",
    "learning apps India",
    
    // Fitness & Health
    "fitness app free",
    "workout tracker app",
    "health tracking app",
    "exercise planner free",
    "fitness goals tracker",
    
    // Developer & Tech
    "web development tools",
    "developer portfolio",
    "React apps",
    "Next.js applications",
    "TypeScript projects",
    "Firebase apps",
    "free web apps",
    "online tools free",
    "productivity tools for developers",
    
    // Location-based
    "apps developed in India",
    "Indian student developer",
    "Mumbai app developer",
    "best Indian apps",
    
    // Specific Niches
    "chess training app",
    "AI productivity tools",
    "student productivity apps",
    "college student apps",
    "self improvement apps",
    "personal growth tools",
    
    // Brand & Creator - Personal Name Variations
    "Kunal",
    "Kunal Chheda",
    "Kunal Paresh Chheda",
    "Kunal Chheda developer",
    "Kunal Chheda apps",
    "Kunal Chheda portfolio",
    "Kunal developer India",
    "Kunal student developer",
    "Kunal Mumbai developer",
    "7K Ecosystem apps",
    "7K Life app",
    "7K Fitness",
    "7K LawPrep",
    "7K Polyglot",
    "student app developer",
    "teen developer portfolio",
    "12th grade developer",
  ],
} as const;

export const PERSONAL_INFO = {
  name: "Kunal Chheda",
  role: "Student Developer & Polyglot",
  tagline: "Building the 7K Ecosystem — One Idea at a Time",
  bio: "I'm Kunal — a 12th-grade Arts student with a passion for building apps, learning languages, and playing chess (1300 rated rapid on Chess.com). I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort. My apps aren't just utilities—they're quiet companions for people who need them most.",
  location: "India",
  education: "12th Grade Student",
  status: "Open for opportunities",
  traits: ["Developer", "Polyglot", "Chess Player", "Lifelong Learner"],
  
  languages: {
    programming: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Kotlin",
      "HTML/CSS",
      "SQL",
    ],
    human: [
      "English",
      "Hindi",
      "Marathi",
      "Spanish",
      "French",
      "German",
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
      category: "Strategic Thinking",
      items: ["Chess (1300 rapid)", "Problem Solving", "Critical Analysis"],
    },
    {
      category: "Personal",
      items: ["Handyman Skills", "Personal Growth", "Self-Improvement", "Continuous Learning"],
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

// 7K App Store - All available apps in the ecosystem
export const APP_STORE = [
  {
    id: "7k-life",
    name: "7K Life",
    description: "Core application for holistic life management and productivity",
    category: "Productivity",
    url: "https://life.7kc.me",
    icon: "📱",
    color: "#B87333",
    featured: true,
  },
  {
    id: "7k-lawprep",
    name: "7K LawPrep",
    description: "Web-based utilities and resources for law aspirants",
    category: "Education",
    url: "https://7klawprep.me",
    icon: "⚖️",
    color: "#8B5A2B",
    featured: true,
  },
  {
    id: "7k-itihaas",
    name: "7K Itihaas",
    description: "Explore the rich history of India through interactive timelines",
    category: "Education",
    url: "https://his.7kc.me",
    icon: "📜",
    color: "#a855f7",
    featured: true,
  },
  {
    id: "7k-political-science",
    name: "7K Political Science",
    description: "12th HSC Political Science teaching app with comprehensive lessons",
    category: "Education",
    url: "https://pol.7kc.me",
    icon: "�️",
    color: "#14b8a6",
    featured: true,
  },
  {
    id: "7k-economics",
    name: "7K Economics",
    description: "12th HSC Economics teaching app with comprehensive study materials",
    category: "Education",
    url: "https://eco.7kc.me",
    icon: "📊",
    color: "#3b82f6",
    featured: false,
  },
  {
    id: "7k-game",
    name: "7K Game",
    description: "Gaming platform and entertainment center",
    category: "Entertainment",
    url: "https://game.7kc.me",
    icon: "🎮",
    color: "#f59e0b",
    featured: false,
  },
  {
    id: "7k-money",
    name: "7K Money",
    description: "Personal finance and money management tool",
    category: "Finance",
    url: "https://7kmoney.7kc.me",
    icon: "💰",
    color: "#10b981",
    featured: false,
  },
  {
    id: "7k-money-alt",
    name: "7K Money Manager",
    description: "Alternative money management interface",
    category: "Finance",
    url: "https://money.7kc.me",
    icon: "💵",
    color: "#059669",
    featured: false,
  },
  {
    id: "7k-tools",
    name: "7K Tools",
    description: "Collection of utility tools for daily tasks",
    category: "Utilities",
    url: "https://tool.7kc.me",
    icon: "🔧",
    color: "#8b5cf6",
    featured: false,
  },
  {
    id: "7k-editor",
    name: "7K Editor",
    description: "Text and code editor with advanced features",
    category: "Development",
    url: "https://editor.7kc.me",
    icon: "✏️",
    color: "#6366f1",
    featured: false,
  },
  {
    id: "7k-english",
    name: "7K English",
    description: "English language learning and improvement",
    category: "Education",
    url: "https://english.7kc.me",
    icon: "📚",
    color: "#ec4899",
    featured: false,
  },
  {
    id: "7k-english-alt",
    name: "7K English Pro",
    description: "Advanced English learning platform",
    category: "Education",
    url: "https://eng.7kc.me",
    icon: "📖",
    color: "#db2777",
    featured: false,
  },
  {
    id: "7k-fitness",
    name: "7K Fitness",
    description: "Health and fitness tracking application",
    category: "Health",
    url: "https://fit.7kc.me",
    icon: "💪",
    color: "#ef4444",
    featured: false,
  },
  {
    id: "7k-fitness-alt",
    name: "7K Fitness Pro",
    description: "Advanced fitness and workout planner",
    category: "Health",
    url: "https://fitness.7kc.me",
    icon: "🏋️",
    color: "#dc2626",
    featured: false,
  },
  {
    id: "7k-student",
    name: "7K Student",
    description: "College student games and fun activities for academic life",
    category: "Games",
    url: "https://std.7kc.me",
    icon: "�",
    color: "#06b6d4",
    featured: false,
  },
  {
    id: "7k-group",
    name: "7K Group",
    description: "Group games and collaborative activities for college students",
    category: "Games",
    url: "https://group.7kc.me",
    icon: "🎲",
    color: "#8b5cf6",
    featured: false,
  },
  {
    id: "7k-kanban",
    name: "7K Kanban",
    description: "Visual project management with kanban boards",
    category: "Productivity",
    url: "https://kanban.7kc.me",
    icon: "📊",
    color: "#0ea5e9",
    featured: false,
  },
  {
    id: "7k-prompt",
    name: "7K Prompt",
    description: "AI prompt library and management system",
    category: "AI",
    url: "https://promt.7kc.me",
    icon: "🤖",
    color: "#a855f7",
    featured: false,
  },
  {
    id: "7k-pins",
    name: "7K Pins",
    description: "Quick notes and pinned information manager",
    category: "Productivity",
    url: "https://pins.7kc.me",
    icon: "📌",
    color: "#f59e0b",
    featured: false,
  },
  {
    id: "7k-shell",
    name: "7K Shell",
    description: "Command-line interface and terminal tools",
    category: "Development",
    url: "https://7kshell.7klawprep.me/",
    icon: "💻",
    color: "#22c55e",
    featured: false,
  },
  {
    id: "7k-polyglot-alt",
    name: "7K Polyglot Pro",
    description: "Advanced language learning features",
    category: "Education",
    url: "https://polyglot.7kc.me",
    icon: "🗣️",
    color: "#0d9488",
    featured: false,
  },
] as const;

export const APP_CATEGORIES = [
  { name: "All Apps", value: "all", icon: "🌐" },
  { name: "Productivity", value: "Productivity", icon: "📱" },
  { name: "Education", value: "Education", icon: "📚" },
  { name: "Finance", value: "Finance", icon: "💰" },
  { name: "Health", value: "Health", icon: "💪" },
  { name: "Development", value: "Development", icon: "💻" },
  { name: "Utilities", value: "Utilities", icon: "🔧" },
  { name: "AI", value: "AI", icon: "🤖" },
  { name: "Games", value: "Games", icon: "🎮" },
  { name: "Entertainment", value: "Entertainment", icon: "�" },
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
    url: "https://www.linkedin.com/in/kunal-chheda-b36731388",
    icon: "Linkedin",
    handle: "Kunal Chheda",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/7kc_me/",
    icon: "Instagram",
    handle: "@7kc_me",
  },
  {
    name: "Email",
    url: "mailto:7kmindbeatss@gmail.com",
    icon: "Mail",
    handle: "7kmindbeatss@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+918591247148",
    icon: "Phone",
    handle: "+91 8591247148",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918591247148",
    icon: "MessageCircle",
    handle: "+91 8591247148",
  },
] as const;

export const NAVIGATION = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Apps", href: "/#app-store" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "All Services", href: "/services" },
      { name: "Quick Menu", href: "/menu" },
      { name: "Cost Calculator", href: "/services/calculator" },
      { name: "Packages", href: "/services/packages" },
    ]
  },
  { 
    name: "Templates", 
    href: "/templates",
    dropdown: [
      { name: "Browse All Templates", href: "/templates" },
      { name: "7K Travel Resort", href: "/templates/travel-resort/preview-1" },
      { name: "7K Hoteler (Luxury)", href: "/templates/hotel-booking/preview-2" },
      { name: "7K Etech Education", href: "/templates/education/preview-1" },
      { name: "7K Mutmiz SaaS", href: "/templates/saas/preview-2" },
      { name: "7K Creatix Agency", href: "/templates/agency/preview-1" },
      { name: "7K Candles Shop", href: "/templates/ecommerce/preview-3" },
      { name: "Creative Portfolios", href: "/templates/portfolio/preview-2" },
    ]
  },
  { name: "Projects", href: "/#projects" },
  { 
    name: "Writing", 
    href: "/blog",
    dropdown: [
      { name: "Blog & Articles", href: "/blog" },
      { name: "My Books", href: "/books" },
    ]
  },
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
    metric: "20+",
    label: "Apps in 7K Ecosystem",
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
    metric: "1300",
    label: "Chess Rating (Rapid)",
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

/**
 * 7K Ecosystem Apps Data
 * Centralized configuration for all subdomain applications
 * Used for SEO, landing pages, and app directory
 */

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  url: string;
  category: string;
  features: string[];
  technologies: string[];
  keywords: string[];
  rating: number;
  reviews: number;
  launchDate: string;
  status: "live" | "beta" | "coming-soon";
  icon?: string;
  screenshots?: string[];
  pricing: "free" | "freemium" | "premium";
  targetAudience: string[];
}

export const appCategories = {
  productivity: "Productivity",
  learning: "Learning & Education",
  finance: "Finance & Money",
  health: "Health & Fitness",
  entertainment: "Entertainment",
  creative: "Creative Tools",
  social: "Social & Communication",
};

export const appsData: App[] = [
  {
    id: "life",
    name: "7K Life",
    tagline: "Your personal productivity companion",
    description: "All-in-one productivity app for organizing your life, managing tasks, tracking habits, and achieving your goals.",
    fullDescription: "7K Life is a comprehensive productivity application designed to help you organize every aspect of your daily life. Track your habits with streak counting, manage tasks with smart to-do lists, set and monitor goals, take notes, and visualize your personal growth over time. With built-in analytics and customizable dashboards, 7K Life helps you stay focused and productive every day.",
    url: "https://life.7kc.me",
    category: "productivity",
    features: [
      "Habit tracking with streaks and analytics",
      "Smart task management with priorities",
      "Goal setting and progress tracking",
      "Note-taking and journaling",
      "Personal productivity dashboard",
      "Daily reminders and notifications",
      "Analytics and insights",
      "Mobile-responsive interface"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["productivity app", "life management", "habit tracker", "task manager", "goal tracking", "personal organizer", "daily planner", "productivity dashboard"],
    rating: 4.8,
    reviews: 142,
    launchDate: "2024-03-15",
    status: "live",
    pricing: "free",
    targetAudience: ["students", "professionals", "productivity enthusiasts", "self-improvement seekers"]
  },
  {
    id: "kanban",
    name: "7K Kanban",
    tagline: "Visual project management made simple",
    description: "Powerful kanban board for agile project management with real-time collaboration and advanced workflow features.",
    fullDescription: "7K Kanban is a feature-rich kanban board application designed for teams and individuals who want visual project management. Create unlimited boards, customize workflows, add team members, track time, set deadlines, and integrate with your favorite tools. Perfect for agile development, content planning, and any project that benefits from visual organization.",
    url: "https://kanban.7kc.me",
    category: "productivity",
    features: [
      "Unlimited kanban boards",
      "Drag-and-drop task management",
      "Real-time collaboration",
      "Custom workflow columns",
      "Task labels and priorities",
      "Time tracking integration",
      "Deadline management",
      "Board templates",
      "Activity logs and history",
      "Export and backup features"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase Realtime DB", "DnD Kit"],
    keywords: ["kanban board", "project management", "agile", "task board", "workflow management", "team collaboration", "scrum board", "visual planning"],
    rating: 4.7,
    reviews: 98,
    launchDate: "2024-02-20",
    status: "live",
    pricing: "free",
    targetAudience: ["developers", "project managers", "agile teams", "content creators", "students"]
  },
  {
    id: "pins",
    name: "7K Pins",
    tagline: "Your personal Pinterest-style inspiration board",
    description: "Pinterest-inspired visual content platform for saving, organizing, and sharing your favorite images and ideas.",
    fullDescription: "7K Pins is a personal Pinterest-style website where you can curate your visual inspirations. Save images, create beautiful boards, organize by categories, and share your collections with others. Perfect for collecting design inspiration, recipes, fashion ideas, travel destinations, and any visual content you want to keep organized. Features drag-and-drop organization, search, and beautiful grid layouts.",
    url: "https://pins.7kc.me",
    category: "creative",
    features: [
      "Pinterest-style visual boards",
      "Save images and links",
      "Organize with collections",
      "Drag-and-drop interface",
      "Search and filter pins",
      "Share collections publicly",
      "Beautiful grid layouts",
      "Mobile-responsive design",
      "Quick pin from anywhere"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Image CDN"],
    keywords: ["pinterest alternative", "visual bookmarks", "image organizer", "inspiration board", "pin board", "visual collection", "image gallery", "mood board"],
    rating: 4.6,
    reviews: 76,
    launchDate: "2024-04-10",
    status: "live",
    pricing: "free",
    targetAudience: ["designers", "artists", "content curators", "students", "creative professionals"]
  },
  {
    id: "prompt",
    name: "7K Prompt Manager",
    tagline: "Manage your AI prompts like a pro",
    description: "Professional AI prompt manager for organizing, saving, and optimizing your ChatGPT and AI prompts.",
    fullDescription: "7K Prompt Manager is your personal AI prompt library and management tool. Save your best prompts, organize them by category, track which ones work best, and build a reusable collection of AI prompts. Features include prompt templates, variables, version history, performance tracking, and sharing capabilities. Perfect for anyone who uses AI tools regularly and wants to optimize their workflow.",
    url: "https://prompt.7kc.me",
    category: "productivity",
    features: [
      "Save and organize AI prompts",
      "Category-based organization",
      "Prompt templates with variables",
      "Version history tracking",
      "Performance analytics",
      "Quick copy-to-clipboard",
      "Share and export prompts",
      "Search by use case",
      "Tag-based organization"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase"],
    keywords: ["AI prompt manager", "ChatGPT prompts", "prompt organizer", "AI templates", "prompt library", "prompt engineering", "AI productivity tools", "prompt collection"],
    rating: 4.9,
    reviews: 203,
    launchDate: "2024-01-15",
    status: "live",
    pricing: "free",
    targetAudience: ["AI users", "content creators", "developers", "marketers", "students", "professionals"]
  },
  {
    id: "tools",
    name: "7K Dev Tools",
    tagline: "Security, web dev & tech awareness hub",
    description: "Comprehensive platform for web security, development tutorials, cybersecurity awareness, and developer education.",
    fullDescription: "7K Dev Tools is an all-in-one platform for web development learning, security awareness, and cybersecurity education. Learn about web vulnerabilities, secure coding practices, penetration testing basics, and development best practices. Features include interactive tutorials, security checklists, code examples, vulnerability demonstrations, and awareness campaigns. Perfect for developers who want to build secure applications and understand modern security threats.",
    url: "https://tools.7kc.me",
    category: "learning",
    features: [
      "Web security tutorials",
      "Cybersecurity awareness content",
      "Secure coding practices",
      "Vulnerability demonstrations",
      "Developer best practices",
      "Interactive security lessons",
      "Security checklists",
      "Penetration testing basics",
      "Code examples and guides",
      "Regular security updates"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Security Tools"],
    keywords: ["web security", "cybersecurity", "developer tools", "security awareness", "secure coding", "web development", "penetration testing", "security education", "coding best practices"],
    rating: 4.8,
    reviews: 156,
    launchDate: "2024-02-01",
    status: "live",
    pricing: "free",
    targetAudience: ["developers", "students", "web developers", "security enthusiasts", "IT professionals"]
  },
  {
    id: "pol",
    name: "7K Political Science",
    tagline: "Complete 12th HSC Political Science syllabus",
    description: "Comprehensive Political Science learning app covering full 12th grade HSC syllabus with interactive lessons.",
    fullDescription: "7K Political Science is a complete educational platform designed specifically for 12th grade HSC students. Covers the entire Political Science syllabus including Indian Constitution, Political Theory, Contemporary World Politics, and Politics in India. Features include chapter-wise notes, interactive quizzes, previous year questions, video explanations, and exam preparation tools. Everything you need to excel in your HSC Political Science exams.",
    url: "https://pol.7kc.me",
    category: "learning",
    features: [
      "Complete 12th HSC syllabus coverage",
      "Chapter-wise detailed notes",
      "Interactive quizzes and tests",
      "Previous year question papers",
      "Video explanations",
      "Concept maps and flowcharts",
      "Exam preparation tips",
      "Quick revision notes",
      "Practice questions with answers",
      "Mobile-accessible learning"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase"],
    keywords: ["12th political science", "HSC political science", "political science syllabus", "board exam preparation", "indian politics", "political theory", "civics education", "HSC study app"],
    rating: 4.5,
    reviews: 67,
    launchDate: "2024-05-20",
    status: "live",
    pricing: "free",
    targetAudience: ["12th grade students", "HSC students", "political science learners", "board exam students"]
  },
  {
    id: "eco",
    name: "7K Economics",
    tagline: "Complete 12th HSC Economics syllabus",
    description: "Comprehensive Economics learning app covering full 12th grade HSC Economics syllabus with interactive content.",
    fullDescription: "7K Economics is specifically designed for 12th grade HSC Economics students. Covers the complete syllabus including Microeconomics, Macroeconomics, Indian Economic Development, and Statistical Tools. Features chapter-wise notes, economic graphs and diagrams, numerical problem solutions, previous year papers, video lectures, and mock tests. Master economics concepts and ace your HSC exams with confidence.",
    url: "https://eco.7kc.me",
    category: "learning",
    features: [
      "Complete 12th HSC Economics syllabus",
      "Microeconomics and Macroeconomics",
      "Interactive graphs and diagrams",
      "Numerical problem solutions",
      "Chapter-wise detailed notes",
      "Previous year question papers",
      "Video lecture series",
      "Mock tests and quizzes",
      "Formula sheets and shortcuts"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Chart.js", "Firebase"],
    keywords: ["12th economics", "HSC economics", "economics syllabus", "microeconomics", "macroeconomics", "board exam economics", "economics study app", "HSC preparation"],
    rating: 4.7,
    reviews: 89,
    launchDate: "2024-03-25",
    status: "live",
    pricing: "free",
    targetAudience: ["12th grade students", "HSC students", "economics learners", "board exam students"]
  },
  {
    id: "his",
    name: "7K History",
    tagline: "Complete 12th HSC History syllabus",
    description: "Comprehensive History learning app covering full 12th grade HSC History syllabus with rich multimedia content.",
    fullDescription: "7K History is the ultimate study companion for 12th grade HSC History students. Covers complete syllabus including Indian History, World History, and Contemporary India. Features detailed chapter notes, interactive timelines, historical maps, important dates, previous year questions, and visual content. Everything organized to help you score maximum marks in your HSC History examination.",
    url: "https://his.7kc.me",
    category: "learning",
    features: [
      "Complete 12th HSC History syllabus",
      "Chapter-wise comprehensive notes",
      "Interactive historical timelines",
      "Important dates and events",
      "Historical maps and visuals",
      "Previous year question papers",
      "Quick revision notes",
      "Mock tests and practice questions",
      "Exam tips and strategies"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Timeline.js", "Firebase"],
    keywords: ["12th history", "HSC history", "history syllabus", "indian history", "world history", "board exam history", "history study app", "HSC preparation"],
    rating: 4.6,
    reviews: 94,
    launchDate: "2024-04-05",
    status: "live",
    pricing: "free",
    targetAudience: ["12th grade students", "HSC students", "history learners", "board exam students"]
  },
  {
    id: "english",
    name: "7K English",
    tagline: "Complete 12th HSC English syllabus",
    description: "Comprehensive English learning app covering full 12th grade HSC English syllabus with all sections.",
    fullDescription: "7K English is designed exclusively for 12th grade HSC English students. Covers complete English syllabus including Poetry, Prose, Grammar, Writing Skills, and Literature. Features chapter-wise summaries, line-by-line explanations, grammar rules, essay writing guides, letter formats, previous year papers, and sample answers. Master all sections of HSC English and score top marks.",
    url: "https://english.7kc.me",
    category: "learning",
    features: [
      "Complete 12th HSC English syllabus",
      "Poetry and prose explanations",
      "Line-by-line text analysis",
      "Grammar rules and exercises",
      "Essay and letter writing",
      "Previous year question papers",
      "Sample answers and formats",
      "Writing skills development",
      "Quick revision summaries"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase"],
    keywords: ["12th english", "HSC english", "english syllabus", "poetry prose", "english grammar", "essay writing", "board exam english", "HSC preparation"],
    rating: 4.8,
    reviews: 187,
    launchDate: "2024-01-20",
    status: "live",
    pricing: "free",
    targetAudience: ["12th grade students", "HSC students", "english learners", "board exam students"]
  },
  {
    id: "eng",
    name: "7K English Pro",
    tagline: "Advanced 12th HSC English preparation",
    description: "Premium English learning app for 12th HSC with advanced features, practice tests, and expert guidance.",
    fullDescription: "7K English Pro is the advanced version of HSC English preparation. Covers complete 12th grade English syllabus with in-depth analysis, advanced writing techniques, literature appreciation, and comprehensive practice materials. Features include detailed literary analysis, advanced grammar, creative writing workshops, speaking practice, mock exams with detailed feedback, and expert tips from top scorers.",
    url: "https://eng.7kc.me",
    category: "learning",
    features: [
      "Advanced 12th HSC English content",
      "In-depth literary analysis",
      "Advanced grammar concepts",
      "Creative writing workshops",
      "Speaking and presentation skills",
      "Comprehensive mock exams",
      "Detailed answer evaluation",
      "Expert tips from toppers",
      "One-on-one doubt clearing"
    ],
    technologies: ["Next.js", "React", "TypeScript", "AI/ML", "Firebase"],
    keywords: ["12th english advanced", "HSC english pro", "english literature", "advanced grammar", "creative writing", "board exam preparation", "english coaching", "HSC topper tips"],
    rating: 4.7,
    reviews: 112,
    launchDate: "2024-02-15",
    status: "live",
    pricing: "freemium",
    targetAudience: ["12th grade students", "HSC aspirants", "english enthusiasts", "high achievers"]
  },
  {
    id: "polyglot",
    name: "7K Polyglot",
    tagline: "Learn multiple languages simultaneously",
    description: "Revolutionary language learning platform for learning multiple languages with comparative lessons and AI tutoring.",
    fullDescription: "7K Polyglot is designed for ambitious language learners who want to learn multiple languages efficiently. Use comparative learning techniques to see similarities and differences across languages. Features include AI conversation practice, spaced repetition flashcards, grammar comparisons, pronunciation guides for 20+ languages, and progress tracking across all your languages.",
    url: "https://polyglot.7kc.me",
    category: "learning",
    features: [
      "20+ languages supported",
      "Comparative learning approach",
      "AI conversation practice",
      "Spaced repetition flashcards",
      "Grammar pattern recognition",
      "Pronunciation guides with audio",
      "Cultural context lessons",
      "Progress tracking per language",
      "Daily practice routines",
      "Community language exchange"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "AI/ML", "Web Speech API"],
    keywords: ["learn languages", "polyglot", "language learning", "multiple languages", "language lessons", "foreign languages", "language practice", "multilingual"],
    rating: 4.9,
    reviews: 234,
    launchDate: "2024-01-10",
    status: "live",
    pricing: "freemium",
    targetAudience: ["language learners", "polyglots", "students", "travelers", "language enthusiasts"]
  },
  {
    id: "money",
    name: "7K Money Manager",
    tagline: "Take control of your finances",
    description: "Personal finance management with expense tracking, budgeting, investment tracking, and financial insights.",
    fullDescription: "7K Money Manager is your complete personal finance solution. Track expenses automatically, create budgets, monitor investments, set financial goals, and get AI-powered insights. Features include bank account aggregation, bill reminders, spending analytics, investment portfolio tracking, and financial planning tools. Your data is encrypted and secure.",
    url: "https://money.7kc.me",
    category: "finance",
    features: [
      "Automatic expense tracking",
      "Budget creation and monitoring",
      "Investment portfolio tracking",
      "Financial goal setting",
      "Bill reminders",
      "Spending analytics and insights",
      "Multi-currency support",
      "Recurring transaction management",
      "Financial reports and charts",
      "Bank-level encryption"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Plaid API", "Chart.js"],
    keywords: ["personal finance", "expense tracker", "budget app", "money management", "finance tracker", "investment tracker", "budgeting tool", "financial planning"],
    rating: 4.8,
    reviews: 178,
    launchDate: "2024-01-25",
    status: "live",
    pricing: "freemium",
    targetAudience: ["individuals", "families", "freelancers", "investors", "budget-conscious users"]
  },
  {
    id: "7kmoney",
    name: "7K Money",
    tagline: "Flutter finance tracker app landing page",
    description: "Landing page for 7K Money - a comprehensive Flutter-based finance tracking mobile app for personal budget management.",
    fullDescription: "7K Money is a powerful Flutter mobile application for tracking your finances on the go. This landing page showcases the app's features including expense tracking, budget planning, income monitoring, financial reports, and smart savings goals. Download the app to take control of your money with beautiful charts, automatic categorization, receipt scanning, and multi-currency support. Your complete personal finance companion in your pocket.",
    url: "https://7kmoney.7kc.me",
    category: "finance",
    features: [
      "Flutter mobile app showcase",
      "Expense tracking features",
      "Budget management tools",
      "Financial reports and charts",
      "App download links",
      "Feature demonstrations",
      "Screenshots and previews",
      "User testimonials",
      "App update information"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Flutter (App)"],
    keywords: ["flutter finance app", "money tracker", "expense tracker app", "budget app", "finance mobile app", "money management app", "personal finance flutter", "expense manager"],
    rating: 4.7,
    reviews: 145,
    launchDate: "2024-02-28",
    status: "live",
    pricing: "free",
    targetAudience: ["mobile users", "budget-conscious individuals", "finance trackers", "flutter app users"]
  },
  {
    id: "fitness",
    name: "7K Fitness Pro",
    tagline: "Complete fitness tracking & workout guide",
    description: "All-in-one fitness app with exercise tutorials, calorie tracker, workout plans, and progress monitoring.",
    fullDescription: "7K Fitness Pro is your complete fitness companion. Get detailed exercise tutorials with video demonstrations, track your calories and nutrition, follow pre-made workout plans or create your own, monitor your progress with charts and statistics, and achieve your fitness goals. Features include a comprehensive exercise library, meal planning, water intake tracking, body measurements, workout reminders, and motivational achievements.",
    url: "https://fitness.7kc.me",
    category: "health",
    features: [
      "500+ exercise tutorials with videos",
      "Calorie and nutrition tracker",
      "Pre-built workout plans",
      "Custom workout creator",
      "Progress tracking with charts",
      "Body measurement logging",
      "Meal planning tools",
      "Water intake reminders",
      "Workout timer",
      "Achievement badges"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Video.js"],
    keywords: ["fitness app", "exercise tutorial", "calorie tracker", "workout plans", "fitness tracking", "nutrition tracker", "gym app", "personal trainer app"],
    rating: 4.8,
    reviews: 267,
    launchDate: "2024-01-05",
    status: "live",
    pricing: "free",
    targetAudience: ["fitness enthusiasts", "gym-goers", "health-conscious users", "beginners", "athletes"]
  },
  {
    id: "fit",
    name: "7K Fit",
    tagline: "Fitness made simple and fun",
    description: "Easy-to-use fitness app with exercise tutorials, calorie tracking, and everything you need to stay healthy.",
    fullDescription: "7K Fit makes fitness accessible for everyone. Simple and intuitive fitness app featuring exercise tutorial videos, calorie and macro tracking, quick workout routines, progress photos, and motivational tools. Perfect for beginners and busy people who want to stay fit without complexity. Track your workouts, log your meals, see your progress, and build healthy habits with an app designed for real people with real schedules.",
    url: "https://fit.7kc.me",
    category: "health",
    features: [
      "Easy exercise tutorials",
      "Simple calorie tracking",
      "Quick workout routines",
      "Progress photo diary",
      "Daily fitness reminders",
      "Basic nutrition logging",
      "Workout history",
      "Goal setting",
      "Motivational quotes",
      "Beginner-friendly interface"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase"],
    keywords: ["simple fitness app", "exercise guide", "calorie counter", "workout app", "fitness for beginners", "easy fitness tracker", "health app", "workout tracker"],
    rating: 4.6,
    reviews: 189,
    launchDate: "2024-03-10",
    status: "live",
    pricing: "free",
    targetAudience: ["fitness beginners", "busy professionals", "casual exercisers", "health-conscious users"]
  },
  {
    id: "game",
    name: "7K Games",
    tagline: "Your web gaming destination",
    description: "Collection of fun and addictive web-based games you can play directly in your browser.",
    fullDescription: "7K Games is your go-to destination for browser-based gaming fun. Play a variety of entertaining web games including puzzles, arcade classics, strategy games, and casual time-killers. All games run directly in your browser with no downloads needed. Features include high score tracking, multiple game genres, mobile-friendly controls, and new games added regularly. Perfect for quick gaming sessions or extended play.",
    url: "https://game.7kc.me",
    category: "entertainment",
    features: [
      "Variety of web games",
      "No downloads required",
      "Browser-based gaming",
      "High score leaderboards",
      "Puzzle and arcade games",
      "Regular new additions",
      "Save favorite games",
      "Instant play - no downloads"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Canvas API", "WebGL", "Firebase"],
    keywords: ["web games", "browser games", "online games free", "casual games", "arcade games online", "puzzle games", "play games online", "HTML5 games"],
    rating: 4.7,
    reviews: 312,
    launchDate: "2024-04-15",
    status: "live",
    pricing: "free",
    targetAudience: ["casual gamers", "students", "game enthusiasts", "time-killers"]
  },
  {
    id: "student",
    name: "7K Student Game Hub",
    tagline: "Party games for college students",
    description: "Fun and engaging party games designed for college students to play together in groups and social gatherings.",
    fullDescription: "7K Student Game Hub is the ultimate collection of party games for college students. Perfect for ice-breakers, dorm parties, study breaks, and group hangouts. Features multiplayer games, truth or dare, trivia challenges, word games, drawing games, and social challenges. All games are designed for group play and creating memorable moments with friends. No special equipment needed - just bring your friends and smartphones!",
    url: "https://student.7kc.me",
    category: "social",
    features: [
      "Multiplayer party games",
      "Ice-breaker activities",
      "Truth or dare challenges",
      "Group trivia games",
      "Word and guessing games",
      "Drawing and creativity games",
      "Team-based challenges",
      "Customizable game rooms",
      "Easy join with codes",
      "Mobile-friendly for groups"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase Realtime DB", "WebSockets"],
    keywords: ["college party games", "student games", "group games", "party games online", "multiplayer games", "ice breaker games", "social games", "college fun"],
    rating: 4.9,
    reviews: 421,
    launchDate: "2024-01-30",
    status: "live",
    pricing: "free",
    targetAudience: ["college students", "university students", "party organizers", "friend groups"]
  },
  {
    id: "group",
    name: "7K Group Game",
    tagline: "Epic group games for any occasion",
    description: "Interactive group games perfect for college students, parties, and social gatherings with friends.",
    fullDescription: "7K Group Game brings people together with fun, interactive party games designed for groups. Whether it's a dorm party, study break, or weekend hangout, play engaging multiplayer games that everyone can join from their phones. Features include classic party game modes, custom challenges, team competitions, real-time multiplayer, and games that scale from small groups to large parties. Create lasting memories with friends through laughter and friendly competition.",
    url: "https://group.7kc.me",
    category: "social",
    features: [
      "Real-time group games",
      "Easy room creation and joining",
      "Multiple game modes",
      "Team vs team competitions",
      "Custom challenges and rules",
      "Support for 4-20+ players",
      "Voice chat integration",
      "Scoring and leaderboards",
      "Screenshot and share moments",
      "Works on any device"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "WebRTC", "WebSockets"],
    keywords: ["group party games", "multiplayer party games", "college group games", "party game app", "social gaming", "friend games", "group activities", "party entertainment"],
    rating: 4.6,
    reviews: 198,
    launchDate: "2024-03-20",
    status: "live",
    pricing: "free",
    targetAudience: ["college students", "party enthusiasts", "friend groups", "social event organizers"]
  },
  {
    id: "editor",
    name: "7K Photo Editor",
    tagline: "Professional photo & video editing online",
    description: "Powerful online photo and video editor with professional tools, filters, and effects - all in your browser.",
    fullDescription: "7K Photo Editor is a comprehensive online editing suite for photos and videos. Edit images with professional-grade tools including cropping, filters, adjustments, layers, text overlays, and effects. Edit videos with trimming, transitions, filters, and audio editing. No software installation needed - everything runs in your browser with cloud saving. Perfect for social media content, quick edits, and creative projects.",
    url: "https://editor.7kc.me",
    category: "creative",
    features: [
      "Photo editing tools",
      "Video editing capabilities",
      "Filters and effects library",
      "Crop, resize, and rotate",
      "Text and sticker overlays",
      "Layer-based editing",
      "Video trimming and cutting",
      "Transitions and animations",
      "Export in multiple formats",
      "Cloud saving and sharing"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Canvas API", "FFmpeg.wasm", "Firebase"],
    keywords: ["photo editor online", "video editor", "image editing", "online photo editor", "video editing online", "picture editor", "edit photos free", "edit videos online"],
    rating: 4.8,
    reviews: 276,
    launchDate: "2024-02-10",
    status: "live",
    pricing: "freemium",
    targetAudience: ["content creators", "social media users", "photographers", "video creators", "designers"]
  },
];

// Helper functions
export function getAppById(id: string): App | undefined {
  return appsData.find((app) => app.id === id);
}

export function getAppsByCategory(category: string): App[] {
  return appsData.filter((app) => app.category === category);
}

export function getAllCategories(): string[] {
  return Object.keys(appCategories);
}

export function getAppCount(): number {
  return appsData.length;
}

export function getFeaturedApps(count: number = 6): App[] {
  return appsData
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, count);
}

export function searchApps(query: string): App[] {
  const lowerQuery = query.toLowerCase();
  return appsData.filter(
    (app) =>
      app.name.toLowerCase().includes(lowerQuery) ||
      app.description.toLowerCase().includes(lowerQuery) ||
      app.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
  );
}

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
    "id": "life",
    "name": "7K Life",
    "tagline": "Your personal productivity companion",
    "description": "All-in-one productivity app for organizing your life, managing tasks, tracking habits, and achieving your goals.",
    "fullDescription": "7K Life is a comprehensive productivity application designed to help you organize every aspect of your daily life. Track your habits with streak counting, manage tasks with smart to-do lists, set and monitor goals, take notes, and visualize your personal growth over time. With built-in analytics and customizable dashboards, 7K Life helps you stay focused and productive every day.",
    "url": "https://life.7kc.me",
    "category": "productivity",
    "screenshots": ["/images/appstore/life.7kc.me-1761144306899.png"],
    "features": [
      "Habit tracking with streaks and analytics",
      "Smart task management with priorities",
      "Goal setting and progress tracking",
      "Note-taking and journaling",
      "Personal productivity dashboard",
      "Daily reminders and notifications",
      "Analytics and insights",
      "Mobile-responsive interface"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS"
    ],
    "keywords": [
      // Generic productivity keywords
      "productivity app",
      "productivity app free",
      "best productivity app",
      "productivity tools",
      "productivity software",
      
      // Life management
      "life management",
      "life organizer app",
      "personal organizer",
      "daily planner",
      "daily planner app free",
      "life planner app",
      
      // Habit tracking
      "habit tracker",
      "habit tracker free",
      "habit tracking app",
      "daily habit tracker",
      "streak tracker app",
      "good habits app",
      
      // Task management
      "task manager",
      "task manager app",
      "to do list app",
      "task organizer",
      "task tracking app",
      "project task manager",
      
      // Goal tracking
      "goal tracking",
      "goal tracker app",
      "goal setting app",
      "personal goals app",
      "life goals tracker",
      
      // Dashboard & organization
      "productivity dashboard",
      "personal dashboard",
      "life dashboard app",
      "all in one organizer",
      
      // Target users
      "productivity app for students",
      "productivity tools India",
      "free productivity apps 2025"
    ],
    "rating": 4.8,
    "reviews": 142,
    "launchDate": "2024-03-15",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "students",
      "professionals",
      "productivity enthusiasts",
      "self-improvement seekers"
    ]
  },
  {
    "id": "7kmoney",
    "name": "7K Money",
    "tagline": "Flutter finance tracker app landing page",
    "description": "Landing page for 7K Money - a comprehensive Flutter-based finance tracking mobile app for personal budget management.",
    "fullDescription": "7K Money is a powerful Flutter mobile application for tracking your finances on the go. This landing page showcases the app's features including expense tracking, budget planning, income monitoring, financial reports, and smart savings goals. Download the app to take control of your money with beautiful charts, automatic categorization, receipt scanning, and multi-currency support. Your complete personal finance companion in your pocket.",
    "url": "https://7kmoney.7kc.me",
    "category": "finance",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Flutter (App)"
    ],
    "keywords": [
      "flutter finance app",
      "money tracker",
      "expense tracker app",
      "budget app",
      "finance mobile app",
      "money management app",
      "personal finance flutter",
      "expense manager"
    ],
    "rating": 4.7,
    "reviews": 145,
    "launchDate": "2024-02-28",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "mobile users",
      "budget-conscious individuals",
      "finance trackers",
      "flutter app users"
    ],
    "screenshots": ["/images/appstore/7kmoney.7kc.me-1764683332061.png"]
  },
  {
    "id": "pol",
    "name": "7K Political Science",
    "tagline": "Complete 12th HSC Political Science syllabus",
    "description": "Comprehensive Political Science learning app covering full 12th grade HSC syllabus with interactive lessons.",
    "fullDescription": "7K Political Science is a complete educational platform designed specifically for 12th grade HSC students. Covers the entire Political Science syllabus including Indian Constitution, Political Theory, Contemporary World Politics, and Politics in India. Features include chapter-wise notes, interactive quizzes, previous year questions, video explanations, and exam preparation tools. Everything you need to excel in your HSC Political Science exams.",
    "url": "https://pol.7kc.me",
    "category": "learning",
    "screenshots": ["/images/appstore/pol.7kc.me-1761146102106.png"],
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase"
    ],
    "keywords": [
      "12th political science",
      "HSC political science",
      "political science syllabus",
      "board exam preparation",
      "indian politics",
      "political theory",
      "civics education",
      "HSC study app"
    ],
    "rating": 4.5,
    "reviews": 67,
    "launchDate": "2024-05-20",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "12th grade students",
      "HSC students",
      "political science learners",
      "board exam students"
    ]
  },
  {
    "id": "eco",
    "name": "7K Economics",
    "tagline": "Complete 12th HSC Economics syllabus",
    "description": "Comprehensive Economics learning app covering full 12th grade HSC Economics syllabus with interactive content.",
    "fullDescription": "7K Economics is specifically designed for 12th grade HSC Economics students. Covers the complete syllabus including Microeconomics, Macroeconomics, Indian Economic Development, and Statistical Tools. Features chapter-wise notes, economic graphs and diagrams, numerical problem solutions, previous year papers, video lectures, and mock tests. Master economics concepts and ace your HSC exams with confidence.",
    "url": "https://eco.7kc.me",
    "category": "learning",
    "screenshots": ["/images/appstore/eco.7kc.me-1761146079181.png"],
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Chart.js",
      "Firebase"
    ],
    "keywords": [
      "12th economics",
      "HSC economics",
      "economics syllabus",
      "microeconomics",
      "macroeconomics",
      "board exam economics",
      "economics study app",
      "HSC preparation"
    ],
    "rating": 4.7,
    "reviews": 89,
    "launchDate": "2024-03-25",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "12th grade students",
      "HSC students",
      "economics learners",
      "board exam students"
    ]
  },
  {
    "id": "his",
    "name": "7K History",
    "tagline": "Complete 12th HSC History syllabus",
    "description": "Comprehensive History learning app covering full 12th grade HSC History syllabus with rich multimedia content.",
    "fullDescription": "7K History is the ultimate study companion for 12th grade HSC History students. Covers complete syllabus including Indian History, World History, and Contemporary India. Features detailed chapter notes, interactive timelines, historical maps, important dates, previous year questions, and visual content. Everything organized to help you score maximum marks in your HSC History examination.",
    "url": "https://his.7kc.me",
    "category": "learning",
    "screenshots": ["/images/appstore/his.7kc.me-1761146055113.png"],
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Timeline.js",
      "Firebase"
    ],
    "keywords": [
      "12th history",
      "HSC history",
      "history syllabus",
      "indian history",
      "world history",
      "board exam history",
      "history study app",
      "HSC preparation"
    ],
    "rating": 4.6,
    "reviews": 94,
    "launchDate": "2024-04-05",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "12th grade students",
      "HSC students",
      "history learners",
      "board exam students"
    ]
  },
  {
    "id": "kanban",
    "name": "7K Kanban",
    "tagline": "Visual project management made simple",
    "description": "Powerful kanban board for agile project management with real-time collaboration and advanced workflow features.",
    "fullDescription": "7K Kanban is a feature-rich kanban board application designed for teams and individuals who want visual project management. Create unlimited boards, customize workflows, add team members, track time, set deadlines, and integrate with your favorite tools. Perfect for agile development, content planning, and any project that benefits from visual organization.",
    "url": "https://kanban.7kc.me",
    "category": "productivity",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Realtime DB",
      "DnD Kit"
    ],
    "keywords": [
      "kanban board",
      "project management",
      "agile",
      "task board",
      "workflow management",
      "team collaboration",
      "scrum board",
      "visual planning"
    ],
    "rating": 4.7,
    "reviews": 98,
    "launchDate": "2024-02-20",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "developers",
      "project managers",
      "agile teams",
      "content creators",
      "students"
    ],
    "screenshots": ["/images/appstore/kanban.7kc.me-1764683384503.png"]
  },
  {
    "id": "pins",
    "name": "7K Pins",
    "tagline": "Your personal Pinterest-style inspiration board",
    "description": "Pinterest-inspired visual content platform for saving, organizing, and sharing your favorite images and ideas.",
    "fullDescription": "7K Pins is a personal Pinterest-style website where you can curate your visual inspirations. Save images, create beautiful boards, organize by categories, and share your collections with others. Perfect for collecting design inspiration, recipes, fashion ideas, travel destinations, and any visual content you want to keep organized. Features drag-and-drop organization, search, and beautiful grid layouts.",
    "url": "https://pins.7kc.me",
    "category": "creative",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Image CDN"
    ],
    "keywords": [
      "pinterest alternative",
      "visual bookmarks",
      "image organizer",
      "inspiration board",
      "pin board",
      "visual collection",
      "image gallery",
      "mood board"
    ],
    "rating": 4.6,
    "reviews": 76,
    "launchDate": "2024-04-10",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "designers",
      "artists",
      "content curators",
      "students",
      "creative professionals"
    ],
    "screenshots": ["/images/appstore/https___pins.7kc.me_-1764683542684.png"]
  },
  {
    "id": "prompt",
    "name": "7K Prompt Manager",
    "tagline": "Manage your AI prompts like a pro",
    "description": "Professional AI prompt manager for organizing, saving, and optimizing your ChatGPT and AI prompts.",
    "fullDescription": "7K Prompt Manager is your personal AI prompt library and management tool. Save your best prompts, organize them by category, track which ones work best, and build a reusable collection of AI prompts. Features include prompt templates, variables, version history, performance tracking, and sharing capabilities. Perfect for anyone who uses AI tools regularly and wants to optimize their workflow.",
    "url": "https://prompt.7kc.me",
    "category": "productivity",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase"
    ],
    "keywords": [
      "AI prompt manager",
      "ChatGPT prompts",
      "prompt organizer",
      "AI templates",
      "prompt library",
      "prompt engineering",
      "AI productivity tools",
      "prompt collection"
    ],
    "rating": 4.9,
    "reviews": 203,
    "launchDate": "2024-01-15",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "AI users",
      "content creators",
      "developers",
      "marketers",
      "students",
      "professionals"
    ],
    "screenshots": ["/images/appstore/https___promt.7kc.me_-1764683520120.png"]
  },
  {
    "id": "tools",
    "name": "7K Dev Tools",
    "tagline": "Security, web dev & tech awareness hub",
    "description": "Comprehensive platform for web security, development tutorials, cybersecurity awareness, and developer education.",
    "fullDescription": "7K Dev Tools is an all-in-one platform for web development learning, security awareness, and cybersecurity education. Learn about web vulnerabilities, secure coding practices, penetration testing basics, and development best practices. Features include interactive tutorials, security checklists, code examples, vulnerability demonstrations, and awareness campaigns. Perfect for developers who want to build secure applications and understand modern security threats.",
    "url": "https://tool.7kc.me",
    "category": "learning",
    "screenshots": ["/images/appstore/tool.7kc.me-1764683605440.png"],
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Security Tools"
    ],
    "keywords": [
      "web security",
      "cybersecurity",
      "developer tools",
      "security awareness",
      "secure coding",
      "web development",
      "penetration testing",
      "security education",
      "coding best practices"
    ],
    "rating": 4.8,
    "reviews": 156,
    "launchDate": "2024-02-01",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "developers",
      "students",
      "web developers",
      "security enthusiasts",
      "IT professionals"
    ]
  },
  {
    "id": "english",
    "name": "7K English",
    "tagline": "Complete 12th HSC English syllabus",
    "description": "Comprehensive English learning app covering full 12th grade HSC English syllabus with all sections.",
    "fullDescription": "7K English is designed exclusively for 12th grade HSC English students. Covers complete English syllabus including Poetry, Prose, Grammar, Writing Skills, and Literature. Features chapter-wise summaries, line-by-line explanations, grammar rules, essay writing guides, letter formats, previous year papers, and sample answers. Master all sections of HSC English and score top marks.",
    "url": "https://english.7kc.me",
    "category": "learning",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase"
    ],
    "keywords": [
      "12th english",
      "HSC english",
      "english syllabus",
      "poetry prose",
      "english grammar",
      "essay writing",
      "board exam english",
      "HSC preparation"
    ],
    "rating": 4.8,
    "reviews": 187,
    "launchDate": "2024-01-20",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "12th grade students",
      "HSC students",
      "english learners",
      "board exam students"
    ],
    "screenshots": ["/images/appstore/english.7kc.me-1764683672274.png"]
  },
  {
    "id": "eng",
    "name": "7K English Pro",
    "tagline": "Advanced 12th HSC English preparation",
    "description": "Premium English learning app for 12th HSC with advanced features, practice tests, and expert guidance.",
    "fullDescription": "7K English Pro is the advanced version of HSC English preparation. Covers complete 12th grade English syllabus with in-depth analysis, advanced writing techniques, literature appreciation, and comprehensive practice materials. Features include detailed literary analysis, advanced grammar, creative writing workshops, speaking practice, mock exams with detailed feedback, and expert tips from top scorers.",
    "url": "https://eng.7kc.me",
    "category": "learning",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "AI/ML",
      "Firebase"
    ],
    "keywords": [
      "12th english advanced",
      "HSC english pro",
      "english literature",
      "advanced grammar",
      "creative writing",
      "board exam preparation",
      "english coaching",
      "HSC topper tips"
    ],
    "rating": 4.7,
    "reviews": 112,
    "launchDate": "2024-02-15",
    "status": "live",
    "pricing": "freemium",
    "targetAudience": [
      "12th grade students",
      "HSC aspirants",
      "english enthusiasts",
      "high achievers"
    ],
    "screenshots": ["/images/appstore/eng.7kc.me-1764683689071.png"]
  },
  {
    "id": "polyglot",
    "name": "7K Polyglot",
    "tagline": "Learn multiple languages simultaneously",
    "description": "Revolutionary language learning platform for learning multiple languages with comparative lessons and AI tutoring.",
    "fullDescription": "7K Polyglot is designed for ambitious language learners who want to learn multiple languages efficiently. Use comparative learning techniques to see similarities and differences across languages. Features include AI conversation practice, spaced repetition flashcards, grammar comparisons, pronunciation guides for 20+ languages, and progress tracking across all your languages.",
    "url": "https://polyglot.7kc.me",
    "category": "learning",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "AI/ML",
      "Web Speech API"
    ],
    "keywords": [
      // Generic language learning
      "language learning app",
      "learn languages",
      "language learning app free",
      "best language learning app",
      "learn languages free",
      "language app",
      
      // Specific learning methods
      "vocabulary builder",
      "vocabulary app",
      "language practice app",
      "foreign languages",
      "language lessons",
      "language learning platform",
      
      // Polyglot specific
      "polyglot",
      "polyglot app",
      "multiple languages",
      "learn multiple languages",
      "multilingual app",
      "multilingual learning",
      
      // Features
      "flashcards app",
      "language flashcards",
      "spaced repetition app",
      "pronunciation practice",
      
      // Popular languages
      "learn spanish app",
      "learn french app",
      "learn german app",
      "learn japanese app",
      
      // Target audience
      "language learning for students",
      "language app India",
      "free language learning 2025"
    ],
    "rating": 4.9,
    "reviews": 234,
    "launchDate": "2024-01-10",
    "status": "live",
    "pricing": "freemium",
    "targetAudience": [
      "language learners",
      "polyglots",
      "students",
      "travelers",
      "language enthusiasts"
    ],
    "screenshots": ["/images/appstore/polyglot.7kc.me-1764683724096.png"]
  },
  {
    "id": "money",
    "name": "7K Money Manager",
    "tagline": "Take control of your finances",
    "description": "Personal finance management with expense tracking, budgeting, investment tracking, and financial insights.",
    "fullDescription": "7K Money Manager is your complete personal finance solution. Track expenses automatically, create budgets, monitor investments, set financial goals, and get AI-powered insights. Features include bank account aggregation, bill reminders, spending analytics, investment portfolio tracking, and financial planning tools. Your data is encrypted and secure.",
    "url": "https://money.7kc.me",
    "category": "finance",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Plaid API",
      "Chart.js"
    ],
    "keywords": [
      // Generic finance keywords
      "personal finance app",
      "finance app",
      "money app",
      "budget app",
      "budgeting app free",
      "best budget app",
      "finance tracker",
      "money tracker app",
      
      // Expense tracking
      "expense tracker",
      "expense tracker app",
      "expense manager",
      "spending tracker",
      "daily expense tracker",
      "expense tracking app free",
      
      // Budget management
      "money management",
      "money manager app",
      "budget planner",
      "budget calculator app",
      "monthly budget app",
      
      // Investment
      "investment tracker",
      "investment tracker app",
      "portfolio tracker",
      "stock tracker app",
      
      // Financial planning
      "financial planning",
      "financial planner app",
      "personal finance manager",
      "finance organizer",
      
      // Target audience
      "budget app for students",
      "finance app India",
      "money management app India",
      "expense tracker India"
    ],
    "rating": 4.8,
    "reviews": 178,
    "launchDate": "2024-01-25",
    "status": "live",
    "pricing": "freemium",
    "targetAudience": [
      "individuals",
      "families",
      "freelancers",
      "investors",
      "budget-conscious users"
    ],
    "screenshots": ["/images/appstore/money.7kc.me-1764683738430.png"]
  },
  {
    "id": "fitness",
    "name": "7K Fitness Pro",
    "tagline": "Complete fitness tracking & workout guide",
    "description": "All-in-one fitness app with exercise tutorials, calorie tracker, workout plans, and progress monitoring.",
    "fullDescription": "7K Fitness Pro is your complete fitness companion. Get detailed exercise tutorials with video demonstrations, track your calories and nutrition, follow pre-made workout plans or create your own, monitor your progress with charts and statistics, and achieve your fitness goals. Features include a comprehensive exercise library, meal planning, water intake tracking, body measurements, workout reminders, and motivational achievements.",
    "url": "https://fitness.7kc.me",
    "category": "health",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Video.js"
    ],
    "keywords": [
      // Generic high-traffic fitness keywords
      "fitness app",
      "fitness tracker",
      "workout app",
      "exercise app",
      "gym app",
      "health and fitness app",
      "fitness app free",
      "best fitness app",
      "fitness tracker free",
      
      // Specific features
      "exercise tutorial",
      "workout tutorial app",
      "exercise videos free",
      "calorie tracker",
      "calorie counter app",
      "nutrition tracker",
      "meal tracker app",
      "food diary app",
      
      // Workout related
      "workout plans",
      "workout planner app",
      "gym workout app",
      "home workout app",
      "personal trainer app",
      "fitness coach app",
      "workout routine app",
      
      // Progress tracking
      "fitness tracking",
      "fitness progress tracker",
      "weight loss tracker",
      "body measurement app",
      "fitness goals app",
      
      // Target audience
      "fitness app for beginners",
      "gym workout tracker",
      "fitness app India",
      "free workout app"
    ],
    "rating": 4.8,
    "reviews": 267,
    "launchDate": "2024-01-05",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "fitness enthusiasts",
      "gym-goers",
      "health-conscious users",
      "beginners",
      "athletes"
    ],
    "screenshots": ["/images/appstore/fitness.7kc.me-1764683756492.png"]
  },
  {
    "id": "fit",
    "name": "7K Fit",
    "tagline": "Fitness made simple and fun",
    "description": "Easy-to-use fitness app with exercise tutorials, calorie tracking, and everything you need to stay healthy.",
    "fullDescription": "7K Fit makes fitness accessible for everyone. Simple and intuitive fitness app featuring exercise tutorial videos, calorie and macro tracking, quick workout routines, progress photos, and motivational tools. Perfect for beginners and busy people who want to stay fit without complexity. Track your workouts, log your meals, see your progress, and build healthy habits with an app designed for real people with real schedules.",
    "url": "https://fit.7kc.me",
    "category": "health",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase"
    ],
    "keywords": [
      "simple fitness app",
      "exercise guide",
      "calorie counter",
      "workout app",
      "fitness for beginners",
      "easy fitness tracker",
      "health app",
      "workout tracker"
    ],
    "rating": 4.6,
    "reviews": 189,
    "launchDate": "2024-03-10",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "fitness beginners",
      "busy professionals",
      "casual exercisers",
      "health-conscious users"
    ],
    "screenshots": ["/images/appstore/fit.7kc.me-1764683772337.png"]
  },
  {
    "id": "game",
    "name": "7K Games",
    "tagline": "Your web gaming destination",
    "description": "Collection of fun and addictive web-based games you can play directly in your browser.",
    "fullDescription": "7K Games is your go-to destination for browser-based gaming fun. Play a variety of entertaining web games including puzzles, arcade classics, strategy games, and casual time-killers. All games run directly in your browser with no downloads needed. Features include high score tracking, multiple game genres, mobile-friendly controls, and new games added regularly. Perfect for quick gaming sessions or extended play.",
    "url": "https://game.7kc.me",
    "category": "entertainment",
    "features": [
      "Variety of web games",
      "No downloads required",
      "Browser-based gaming",
      "High score leaderboards",
      "Puzzle and arcade games",
      "Regular new additions",
      "Save favorite games",
      "Instant play - no downloads"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Canvas API",
      "WebGL",
      "Firebase"
    ],
    "keywords": [
      "web games",
      "browser games",
      "online games free",
      "casual games",
      "arcade games online",
      "puzzle games",
      "play games online",
      "HTML5 games"
    ],
    "rating": 4.7,
    "reviews": 312,
    "launchDate": "2024-04-15",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "casual gamers",
      "students",
      "game enthusiasts",
      "time-killers"
    ],
    "screenshots": ["/images/appstore/game.7kc.me-1764683793343.png"]
  },
  {
    "id": "student",
    "name": "7K Student Game Hub",
    "tagline": "Party games for college students",
    "description": "Fun and engaging party games designed for college students to play together in groups and social gatherings.",
    "fullDescription": "7K Student Game Hub is the ultimate collection of party games for college students. Perfect for ice-breakers, dorm parties, study breaks, and group hangouts. Features multiplayer games, truth or dare, trivia challenges, word games, drawing games, and social challenges. All games are designed for group play and creating memorable moments with friends. No special equipment needed - just bring your friends and smartphones!",
    "url": "https://std.7kc.me",
    "category": "social",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Realtime DB",
      "WebSockets"
    ],
    "keywords": [
      "college party games",
      "student games",
      "group games",
      "party games online",
      "multiplayer games",
      "ice breaker games",
      "social games",
      "college fun"
    ],
    "rating": 4.9,
    "reviews": 421,
    "launchDate": "2024-01-30",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "college students",
      "university students",
      "party organizers",
      "friend groups"
    ],
    "screenshots": ["/images/appstore/std.7kc.me-1761146742911.png"]
  },
  {
    "id": "group",
    "name": "7K Group Game",
    "tagline": "Epic group games for any occasion",
    "description": "Interactive group games perfect for college students, parties, and social gatherings with friends.",
    "fullDescription": "7K Group Game brings people together with fun, interactive party games designed for groups. Whether it's a dorm party, study break, or weekend hangout, play engaging multiplayer games that everyone can join from their phones. Features include classic party game modes, custom challenges, team competitions, real-time multiplayer, and games that scale from small groups to large parties. Create lasting memories with friends through laughter and friendly competition.",
    "url": "https://group.7kc.me",
    "category": "social",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "WebRTC",
      "WebSockets"
    ],
    "keywords": [
      "group party games",
      "multiplayer party games",
      "college group games",
      "party game app",
      "social gaming",
      "friend games",
      "group activities",
      "party entertainment"
    ],
    "rating": 4.6,
    "reviews": 198,
    "launchDate": "2024-03-20",
    "status": "live",
    "pricing": "free",
    "targetAudience": [
      "college students",
      "party enthusiasts",
      "friend groups",
      "social event organizers"
    ],
    "screenshots": ["/images/appstore/group.7kc.me-1764683831560.png"]
  },
  {
    "id": "editor",
    "name": "7K Photo Editor",
    "tagline": "Professional photo & video editing online",
    "description": "Powerful online photo and video editor with professional tools, filters, and effects - all in your browser.",
    "fullDescription": "7K Photo Editor is a comprehensive online editing suite for photos and videos. Edit images with professional-grade tools including cropping, filters, adjustments, layers, text overlays, and effects. Edit videos with trimming, transitions, filters, and audio editing. No software installation needed - everything runs in your browser with cloud saving. Perfect for social media content, quick edits, and creative projects.",
    "url": "https://editor.7kc.me",
    "category": "creative",
    "features": [
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
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Canvas API",
      "FFmpeg.wasm",
      "Firebase"
    ],
    "keywords": [
      "photo editor online",
      "video editor",
      "image editing",
      "online photo editor",
      "video editing online",
      "picture editor",
      "edit photos free",
      "edit videos online"
    ],
    "rating": 4.8,
    "reviews": 276,
    "launchDate": "2024-02-10",
    "status": "live",
    "pricing": "freemium",
    "targetAudience": [
      "content creators",
      "social media users",
      "photographers",
      "video creators",
      "designers"
    ],
    "screenshots": ["/images/appstore/editor.7kc.me-1764683852946.png"]
  },
  {
    id: "play",
    name: "7K Games",
    tagline: "Play. Compete. Create. — The 7K Way.",
    description: "Gaming hub with collection of fun, interactive games and challenges for entertainment and skill-building.",
    fullDescription: "7K Games is your ultimate gaming destination within the 7K Ecosystem. Featuring a curated collection of engaging games, challenges, and competitions designed to entertain while building cognitive skills, reflexes, and strategic thinking. From casual puzzle games to competitive multiplayer challenges, 7K Games offers something for everyone.",
    url: "https://play.7kc.me",
    category: "entertainment",
    features: [
      "Multiple game categories and genres",
      "Leaderboards and achievements",
      "Multiplayer challenges",
      "Progress tracking and statistics",
      "Regular game updates and additions",
      "Offline gameplay support",
      "Social sharing features",
      "Skill-building focused games"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Canvas API", "WebGL"],
    keywords: ["games", "gaming", "entertainment", "puzzles", "challenges", "multiplayer", "casual games", "brain games", "skill games", "7k games"],
    rating: 4.6,
    reviews: 87,
    launchDate: "2024-08-15",
    status: "live",
    pricing: "free",
    targetAudience: ["gamers", "students", "families", "casual players", "competitive players"],
    icon: "/icons/games-icon.png",
    screenshots: ["/images/appstore/https___play.7kc.me-1764685386102.png"]
  },
  {
    id: "insta",
    name: "7K Insta Hub",
    tagline: "AI-Powered Instagram Content Creation",
    description: "Complete Instagram content creation suite with AI-powered tools for posts, captions, hashtags, and more.",
    fullDescription: "7K Insta Hub is your all-in-one Instagram content assistant powered by AI. Generate creative post ideas, design eye-catching carousels, craft engaging captions, discover trending hashtags, optimize your bio, and create video scripts — all in one place. Perfect for content creators, social media managers, and businesses looking to boost their Instagram presence with smart automation.",
    url: "https://insta.7kc.me",
    category: "creative",
    features: [
      "AI Idea Generator for viral post concepts",
      "Carousel Post Generator with templates",
      "Caption Generator with multiple styles",
      "Hashtag Generator for maximum reach",
      "Bio Generator for profile optimization",
      "Script Generator for Reels and Stories",
      "Content calendar planning",
      "Trend analysis and recommendations"
    ],
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "React"],
    keywords: ["instagram", "social media", "content creation", "AI content", "captions", "hashtags", "instagram marketing", "social media marketing", "content generator", "instagram tools"],
    rating: 4.8,
    reviews: 156,
    launchDate: "2024-09-10",
    status: "live",
    pricing: "freemium",
    targetAudience: ["content creators", "influencers", "social media managers", "businesses", "marketers"],
    icon: "/icons/insta-icon.png",
    screenshots: ["/images/appstore/insta.7kc.me-1761146302895.png"]
  },
  {
    id: "relife",
    name: "7K ReLife",
    tagline: "Your Complete Life Management System",
    description: "Comprehensive life management app for habits, tasks, goals, subscriptions, journaling, and personal growth tracking.",
    fullDescription: "7K ReLife is an advanced life management application that helps you organize every aspect of your daily routine. Track habits with streak counters, manage focus tasks with priorities, set and monitor long-term goals, keep tabs on all your subscriptions, maintain a reflective journal with daily prompts, and track project progress — all in one beautifully designed interface. With daily quotes for motivation and comprehensive analytics, ReLife helps you build the life you want.",
    url: "https://relife.7kc.me",
    category: "productivity",
    features: [
      "Habit tracking with streaks and analytics",
      "Focus task management with priorities",
      "Goal setting and progress monitoring",
      "Subscription tracker and reminders",
      "Daily journaling with AI prompts",
      "Project progress tracking",
      "Daily motivational quotes",
      "Comprehensive dashboard overview",
      "Dark mode support",
      "Data visualization and insights"
    ],
    technologies: ["React", "TypeScript", "IndexedDB", "PWA", "Chart.js"],
    keywords: ["life management", "habit tracker", "productivity", "goal tracker", "task manager", "journal app", "subscription tracker", "personal growth", "life organizer", "daily planner"],
    rating: 4.9,
    reviews: 234,
    launchDate: "2024-07-20",
    status: "live",
    pricing: "free",
    targetAudience: ["productivity enthusiasts", "students", "professionals", "self-improvement seekers", "life hackers"],
    icon: "/icons/relife-icon.png",
    screenshots: ["/images/appstore/relife.7kc.me-1764683887275.png"]
  },
  {
    id: "upsc",
    name: "7K UPSC",
    tagline: "Your UPSC Preparation Companion",
    description: "Comprehensive UPSC exam preparation platform with daily current affairs, study materials, and exam resources.",
    fullDescription: "7K UPSC is a dedicated platform for UPSC Civil Services aspirants, providing daily updated current affairs from 2023 onwards, categorized by topics like Polity, Economy, Environment, Science & Tech, and more. Stay ahead with timely updates on important events, government initiatives, policy changes, and international developments. Features detailed explanations, relevance for Prelims and Mains, and easy navigation through monthly and yearly archives.",
    url: "https://upsc.7kc.me",
    category: "learning",
    features: [
      "Daily current affairs updates",
      "Category-wise organization (Polity, Economy, etc.)",
      "Prelims and Mains relevance markers",
      "Yearly and monthly archives",
      "Detailed event explanations",
      "Government scheme tracking",
      "International relations coverage",
      "Search and filter functionality",
      "Mobile-responsive design",
      "Bookmark important topics"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Markdown", "Tailwind CSS"],
    keywords: ["UPSC", "IAS", "civil services", "current affairs", "UPSC preparation", "IAS exam", "prelims", "mains", "government exams", "competitive exams"],
    rating: 4.7,
    reviews: 189,
    launchDate: "2024-06-01",
    status: "live",
    pricing: "free",
    targetAudience: ["UPSC aspirants", "IAS aspirants", "civil services students", "competitive exam students"],
    icon: "/icons/upsc-icon.png",
    screenshots: ["/images/appstore/upsc.7kc.me-1764683870129.png"]
  },
  {
    id: "music",
    name: "7K Music",
    tagline: "Stream Trending Music Videos",
    description: "Discover and stream trending music videos through the official YouTube player with organized categories and favorites.",
    fullDescription: "7K Music is a clean, modern music streaming interface that brings you trending music videos through the official YouTube IFrame Player API. Discover the hottest tracks, search for your favorite artists, organize music by categories, and build your personal favorites collection. All content is streamed ethically from YouTube with proper attribution, ensuring you enjoy music while respecting copyright and creators.",
    url: "https://music.7kc.me",
    category: "entertainment",
    screenshots: ["/images/appstore/music.7kc.me-1761146782033.png"],
    features: [
      "Trending music videos discovery",
      "Official YouTube API integration",
      "Advanced search functionality",
      "Category-based organization",
      "Personal favorites collection",
      "My Music library management",
      "Clean, distraction-free interface",
      "Mobile-responsive player",
      "Playlist creation",
      "Share functionality"
    ],
    technologies: ["Next.js", "YouTube IFrame API", "React", "TypeScript", "Tailwind CSS"],
    keywords: ["music", "music videos", "streaming", "YouTube music", "trending music", "music player", "online music", "video streaming", "music discovery"],
    rating: 4.5,
    reviews: 143,
    launchDate: "2024-10-05",
    status: "live",
    pricing: "free",
    targetAudience: ["music lovers", "students", "entertainment seekers", "youth", "casual listeners"],
    icon: "/icons/music-icon.png"
  },
  {
    id: "12arts",
    name: "7K 12th Arts",
    tagline: "Complete 12th Arts Stream Study Hub",
    description: "Comprehensive study platform for 12th Arts stream students covering all subjects with notes, quizzes, and exam prep.",
    fullDescription: "7K 12th Arts is the ultimate study companion for 12th grade Arts stream students. Access complete study materials for all Arts subjects including History, Political Science, Economics, Sociology, Psychology, and more. Features include chapter-wise notes, video explanations, previous year questions, mock tests, and quick revision materials. Designed to help Arts students excel in their board exams with organized, easy-to-understand content.",
    url: "https://12arts.7kc.me",
    category: "learning",
    features: [
      "Complete 12th Arts syllabus coverage",
      "All Arts subjects in one place",
      "Chapter-wise detailed notes",
      "Video explanations and tutorials",
      "Previous year question papers",
      "Mock tests and quizzes",
      "Quick revision notes",
      "Exam preparation tips",
      "Mobile-friendly access",
      "Progress tracking"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["12th arts", "arts stream", "HSC arts", "arts subjects", "12th class arts", "arts study material", "board exam arts", "arts notes", "12th humanities"],
    rating: 4.7,
    reviews: 156,
    launchDate: "2024-09-15",
    status: "live",
    pricing: "free",
    targetAudience: ["12th arts students", "HSC students", "arts stream students", "board exam aspirants"],
    screenshots: ["/images/appstore/12arts.7kc.me-1764684783228.png"]
  },
  {
    id: "12th",
    name: "7K 12th Study Hub",
    tagline: "All-in-One 12th Board Exam Preparation",
    description: "Complete 12th standard study platform for all streams with comprehensive notes, tests, and resources.",
    fullDescription: "7K 12th Study Hub is your comprehensive preparation platform for 12th board exams. Whether you're in Science, Commerce, or Arts stream, find everything you need in one place. Access subject-wise notes, video lectures, solved examples, previous year papers, and mock tests. With organized content, smart study tools, and exam-focused resources, 12th Study Hub helps you prepare efficiently and score high in your board exams.",
    url: "https://12th.7kc.me",
    category: "learning",
    features: [
      "All streams covered (Science, Commerce, Arts)",
      "Subject-wise organized content",
      "Video lectures and explanations",
      "Previous year question papers",
      "Chapter-wise notes and summaries",
      "Practice tests and quizzes",
      "Important questions compilation",
      "Exam tips and strategies",
      "Study planner and tracker",
      "Offline access support"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["12th class", "12th board exam", "HSC preparation", "12th study material", "board exam notes", "12th standard", "class 12", "12th exam prep"],
    rating: 4.8,
    reviews: 234,
    launchDate: "2024-08-20",
    status: "live",
    pricing: "free",
    targetAudience: ["12th class students", "HSC aspirants", "board exam students", "high school seniors"],
    screenshots: ["/images/appstore/12th.7kc.me-1764684764965.png"]
  },
  {
    id: "constitution",
    name: "7K Constitution",
    tagline: "Learn Indian Constitution Simplified",
    description: "Complete guide to Indian Constitution with articles, amendments, and fundamental rights explained simply.",
    fullDescription: "7K Constitution is your definitive guide to understanding the Indian Constitution. Learn about fundamental rights, directive principles, articles, amendments, and constitutional provisions in simple, easy-to-understand language. Perfect for students, UPSC aspirants, law students, and citizens who want to know their constitutional rights. Features include article-wise explanations, important case laws, amendments history, and practice questions.",
    url: "https://constitution.7kc.me",
    category: "learning",
    features: [
      "Complete Indian Constitution coverage",
      "Article-wise explanations",
      "Fundamental Rights simplified",
      "Directive Principles explained",
      "Important amendments history",
      "Landmark case laws",
      "Interactive quizzes",
      "Comparison tables",
      "Search by article number",
      "Exam-focused content"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["Indian Constitution", "constitution of India", "fundamental rights", "articles", "amendments", "constitutional law", "polity", "UPSC polity", "law studies"],
    rating: 4.9,
    reviews: 312,
    launchDate: "2024-07-10",
    status: "live",
    pricing: "free",
    targetAudience: ["law students", "UPSC aspirants", "political science students", "citizens", "competitive exam students"],
    screenshots: ["/images/appstore/constitution.7kc.me-1764685016174.png"]
  },
  {
    id: "vault",
    name: "7K Vault",
    tagline: "Secure Password & Secret Storage",
    description: "Secure digital vault for passwords, notes, and sensitive information with encryption and easy access.",
    fullDescription: "7K Vault is your secure digital safe for storing passwords, sensitive notes, and confidential information. With end-to-end encryption and secure authentication, keep your secrets safe while having easy access when you need them. Features include password generator, secure notes, encrypted file storage, auto-fill capabilities, and cross-device sync. Your data stays private with zero-knowledge encryption.",
    url: "https://vault.7kc.me",
    category: "productivity",
    features: [
      "Secure password storage",
      "Encrypted notes and secrets",
      "Strong password generator",
      "Secure authentication",
      "Cross-device sync",
      "Auto-fill for websites",
      "Secure sharing options",
      "Password strength analyzer",
      "Biometric unlock support",
      "Zero-knowledge encryption"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Web Crypto API", "Firebase"],
    keywords: ["password manager", "vault", "secure storage", "password vault", "secret keeper", "encrypted notes", "password generator", "security app"],
    rating: 4.8,
    reviews: 189,
    launchDate: "2024-10-01",
    status: "live",
    pricing: "free",
    targetAudience: ["security-conscious users", "professionals", "students", "anyone with passwords"],
    screenshots: ["/images/appstore/https___vault.7kc.me_-1764685176580.png"]
  },
  {
    id: "mc",
    name: "7K MC Hub",
    tagline: "Multiple Choice Question Practice Platform",
    description: "Practice MCQs across various subjects with instant feedback, explanations, and performance tracking.",
    fullDescription: "7K MC Hub is your go-to platform for practicing multiple choice questions across various subjects and competitive exams. Features thousands of MCQs with detailed explanations, instant feedback, and performance analytics. Perfect for board exams, entrance tests, and competitive exam preparation. Track your progress, identify weak areas, and improve with targeted practice sessions.",
    url: "https://mc.7kc.me",
    category: "learning",
    features: [
      "Thousands of MCQs across subjects",
      "Instant feedback and explanations",
      "Topic-wise practice tests",
      "Performance analytics dashboard",
      "Weak area identification",
      "Timed practice mode",
      "Previous year exam questions",
      "Difficulty level filters",
      "Bookmark important questions",
      "Progress tracking"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Chart.js"],
    keywords: ["MCQ practice", "multiple choice", "quiz app", "exam practice", "test preparation", "MCQ test", "objective questions", "practice questions"],
    rating: 4.7,
    reviews: 267,
    launchDate: "2024-09-01",
    status: "live",
    pricing: "free",
    targetAudience: ["students", "exam aspirants", "competitive exam students", "teachers"],
    screenshots: ["/images/appstore/mc.7kc.me-1764685243327.png"]
  },
  {
    id: "mhcet",
    name: "7K MH-CET Prep",
    tagline: "Complete MH-CET Exam Preparation",
    description: "Comprehensive preparation platform for MH-CET exam with practice tests, study materials, and mock exams.",
    fullDescription: "7K MH-CET Prep is designed specifically for Maharashtra Common Entrance Test aspirants. Access complete study materials, chapter-wise notes, previous year papers, mock tests, and detailed solutions. Covers all sections including Physics, Chemistry, Mathematics/Biology based on your stream. With performance analytics and targeted practice, boost your MH-CET score and secure admission to your dream college.",
    url: "https://mhcet.7kc.me",
    category: "learning",
    features: [
      "Complete MH-CET syllabus coverage",
      "Physics, Chemistry, Math/Bio sections",
      "Previous year question papers",
      "Full-length mock tests",
      "Chapter-wise practice tests",
      "Detailed solutions and explanations",
      "Performance analytics",
      "Time management practice",
      "Important formulas and shortcuts",
      "Exam day tips and strategies"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["MH-CET", "Maharashtra CET", "CET preparation", "MHT-CET", "engineering entrance", "medical entrance", "CET mock test", "CET practice"],
    rating: 4.8,
    reviews: 198,
    launchDate: "2024-06-15",
    status: "live",
    pricing: "free",
    targetAudience: ["MH-CET aspirants", "12th science students", "engineering aspirants", "medical aspirants", "Maharashtra students"],
    screenshots: ["/images/appstore/mhcet.7kc.me-1764685126996.png"]
  },
  {
    id: "snap",
    name: "7K Snap",
    tagline: "Quick Screenshot & Image Tools",
    description: "Fast screenshot capture, annotation, and sharing tool with editing features and cloud storage.",
    fullDescription: "7K Snap is your quick and powerful screenshot tool for capturing, editing, and sharing screen content. Capture full page, selected area, or window screenshots. Annotate with arrows, text, highlights, and shapes. Save to cloud, share instantly, or download locally. Perfect for tutorials, bug reports, documentation, and quick visual communication. Features include automatic clipboard copy, quick editing tools, and organized screenshot library.",
    url: "https://snap.7kc.me",
    category: "productivity",
    features: [
      "Quick screenshot capture",
      "Full page and area selection",
      "Annotation tools (arrows, text, shapes)",
      "Highlight and blur options",
      "Cloud storage for screenshots",
      "Instant sharing links",
      "Screenshot library management",
      "Automatic clipboard copy",
      "Multiple export formats",
      "Browser extension support"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Canvas API", "Firebase Storage"],
    keywords: ["screenshot tool", "screen capture", "screenshot editor", "annotation tool", "snipping tool", "screen grab", "image capture", "screenshot sharing"],
    rating: 4.6,
    reviews: 143,
    launchDate: "2024-10-20",
    status: "live",
    pricing: "free",
    targetAudience: ["developers", "designers", "content creators", "support teams", "educators"],
    screenshots: ["/images/appstore/snap.7kc.me-1764685281920.png"]
  },
  {
    id: "social",
    name: "7K Social Hub",
    tagline: "All Social Media in One Place",
    description: "Unified social media dashboard to manage and access all your social platforms from a single interface.",
    fullDescription: "7K Social Hub brings all your social media accounts together in one convenient dashboard. Access Twitter, Instagram, LinkedIn, Facebook, and more without switching between apps. View feeds, post updates, track engagement, and manage your social presence efficiently. Perfect for social media managers, influencers, and anyone who wants a streamlined social media experience with analytics and scheduling features.",
    url: "https://social.7kc.me",
    category: "social",
    features: [
      "Unified social media dashboard",
      "Multiple platform support",
      "Cross-platform posting",
      "Engagement analytics",
      "Post scheduling",
      "Feed aggregation",
      "Notification management",
      "Content calendar",
      "Performance insights",
      "Quick platform switching"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Social APIs", "Firebase"],
    keywords: ["social media manager", "social hub", "social media dashboard", "multi-platform", "social media tools", "social scheduling", "social analytics"],
    rating: 4.5,
    reviews: 112,
    launchDate: "2024-11-01",
    status: "live",
    pricing: "freemium",
    targetAudience: ["social media managers", "influencers", "marketers", "businesses", "content creators"],
    screenshots: ["/images/appstore/social.7kc.me-1764685317838.png"]
  },
  {
    id: "lawprep",
    name: "7K Law Prep",
    tagline: "Complete Law Entrance Exam Preparation",
    description: "Comprehensive preparation platform for CLAT, AILET, and other law entrance exams with study materials and mock tests.",
    fullDescription: "7K Law Prep is your complete preparation companion for law entrance exams including CLAT, AILET, LSAT, and other law school admissions tests. Access comprehensive study materials covering Legal Reasoning, Logical Reasoning, English, General Knowledge, and Quantitative Aptitude. Features include previous year papers, mock tests, detailed solutions, current affairs updates, and personalized study plans. Prepare smartly and crack your dream law school entrance.",
    url: "https://7klawprep.me",
    category: "learning",
    features: [
      "Complete CLAT/AILET syllabus",
      "Legal Reasoning practice",
      "Logical Reasoning modules",
      "English comprehension exercises",
      "Current affairs updates",
      "Previous year papers",
      "Full-length mock tests",
      "Section-wise practice",
      "Performance analytics",
      "Study plan generator"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    keywords: ["CLAT preparation", "law entrance", "AILET", "law school", "legal aptitude", "law exam", "CLAT mock test", "law entrance exam", "NLU admission"],
    rating: 4.8,
    reviews: 178,
    launchDate: "2024-05-01",
    status: "live",
    pricing: "freemium",
    targetAudience: ["law aspirants", "CLAT students", "12th students", "law entrance aspirants", "NLU aspirants"],
    screenshots: ["/images/appstore/7klawprep.me-1764683965141.png"]
  }
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

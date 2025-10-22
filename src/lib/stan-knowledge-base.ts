/**
 * Stan AI Knowledge Base
 * A comprehensive collection of preloaded Q&A about Kunal Chheda and his portfolio
 */

export type KnowledgeEntry = {
  keywords: string[]; // Keywords to match in user questions
  patterns: RegExp[]; // Regex patterns for more specific matching
  answer: string;
  category: string;
};

export const STAN_KNOWLEDGE: KnowledgeEntry[] = [
  // Personal Information
  {
    keywords: ["who", "name", "yourself", "introduce"],
    patterns: [/who (are you|is this|made this)/i, /tell me about (yourself|you|kunal)/i],
    answer: "I'm talking about Kunal Chheda! He's a 12th-standard Arts student with big dreams of becoming a corporate lawyer. But he's not just about law—he's deeply passionate about AI, productivity tools, technology, chess, and languages. He's building the 7K Ecosystem to organize life and amplify creativity!",
    category: "personal"
  },
  {
    keywords: ["age", "old", "born", "birthday"],
    patterns: [/how old/i, /what.*age/i, /when.*born/i],
    answer: "Kunal is currently in 12th standard, focused on his studies while building amazing tech projects on the side!",
    category: "personal"
  },
  {
    keywords: ["study", "studying", "school", "education", "class"],
    patterns: [/what.*study/i, /which (class|grade|standard)/i],
    answer: "Kunal is in 12th standard, taking Arts stream. He's preparing for his future career in law while simultaneously building tech products that showcase his diverse skills!",
    category: "personal"
  },
  {
    keywords: ["lawyer", "law", "career", "future", "corporate"],
    patterns: [/want to (be|become)/i, /career (goal|plan)/i, /what.*future/i],
    answer: "Kunal's dream is to become a corporate lawyer! He's passionate about law and sees it as a perfect blend of logic, strategy, and helping others. Meanwhile, he's building his tech skills to create tools that help law students and professionals.",
    category: "personal"
  },
  {
    keywords: ["passion", "interest", "hobby", "like", "love"],
    patterns: [/what.*interested/i, /what.*passionate/i, /hobbies/i],
    answer: "Kunal has diverse interests! He's passionate about AI and machine learning, productivity systems, chess (strategy is his thing!), learning new languages, and building tech that actually solves real problems. He believes in radical productivity and continuous growth!",
    category: "personal"
  },
  {
    keywords: ["contact", "email", "reach", "message", "connect"],
    patterns: [/how.*contact/i, /send.*message/i, /email/i],
    answer: "You can reach Kunal at 7kmindbeatss@gmail.com! He's also active on GitHub (@kunu2009) and LinkedIn. Feel free to connect—he loves talking about tech, productivity, and law!",
    category: "personal"
  },
  {
    keywords: ["location", "where", "from", "live", "based"],
    patterns: [/where.*from/i, /where.*live/i, /location/i],
    answer: "Kunal is based in India, building the 7K Ecosystem and preparing for his law career!",
    category: "personal"
  },

  // 7K Ecosystem
  {
    keywords: ["7k", "ecosystem", "what is", "about"],
    patterns: [/what.*7k/i, /tell me about.*ecosystem/i, /7k ecosystem/i],
    answer: "The 7K Ecosystem is Kunal's interconnected system of apps, tools, and habits designed for radical productivity, continuous growth, and creative freedom. It's built on the philosophy that the right tools can eliminate friction, amplify focus, and free up mental space for what truly matters—creativity and growth!",
    category: "ecosystem"
  },
  {
    keywords: ["philosophy", "principle", "core", "values"],
    patterns: [/philosophy/i, /principles/i, /what.*based on/i],
    answer: "The 7K Ecosystem is built on three core principles:\n\n1. **Radical Productivity**: Tools that amplify focus and eliminate friction\n2. **Continuous Growth**: Encouraging learning and self-improvement every day\n3. **Creative Freedom**: Organizing life to free up mental space for creativity and innovation",
    category: "ecosystem"
  },

  // Projects - 7K Life
  {
    keywords: ["7k life", "life app", "productivity app", "main app"],
    patterns: [/7k life/i, /life app/i, /main (app|project)/i],
    answer: "7K Life is the core application of the ecosystem! It's a holistic life management and productivity platform that helps you organize tasks, track habits, manage goals, and optimize your daily routine. Check it out at: https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/",
    category: "projects"
  },
  {
    keywords: ["lawprep", "law prep", "clat", "legal", "law student"],
    patterns: [/7k.*lawprep/i, /law.*prep/i, /clat/i],
    answer: "7KLawPrep is a web-based platform with utilities and resources specifically designed for law aspirants! It includes study materials, practice questions, and tools to help students prepare for exams like CLAT. Perfect for anyone on the law journey! Visit: https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/",
    category: "projects"
  },
  {
    keywords: ["itihaas", "history", "timeline", "indian history"],
    patterns: [/itihaas/i, /history.*app/i, /timeline/i],
    answer: "7K Itihaas is an interactive timeline explorer for Indian history! It makes learning history engaging and visual, helping students and history enthusiasts explore India's rich past in a more interactive way. Explore it at: https://7-k-itihaas.vercel.app/",
    category: "projects"
  },
  {
    keywords: ["polyglot", "language", "vocabulary", "learning languages"],
    patterns: [/polyglot/i, /language.*learn/i, /vocabulary/i],
    answer: "7K Polyglot is a language-learning companion that helps you build vocabulary across multiple languages! It's designed for anyone passionate about learning new languages (like Kunal himself!). Try it out: https://7-k-polyglot.vercel.app/",
    category: "projects"
  },
  {
    keywords: ["stan", "ai assistant", "android assistant"],
    patterns: [/stan/i, /ai assistant/i, /android.*ai/i],
    answer: "Stan (that's me!) is an AI assistant that Kunal is developing to run on Android! The vision is to provide context-aware automation and assistance integrated across the entire 7K ecosystem. Right now, I'm here helping you learn about Kunal and his work!",
    category: "projects"
  },
  {
    keywords: ["project", "apps", "built", "created", "made"],
    patterns: [/what.*built/i, /what.*projects/i, /what.*apps/i, /list.*projects/i],
    answer: "Kunal has built several awesome projects:\n\n• **7K Life**: Core productivity & life management app\n• **7KLawPrep**: Resources and tools for law students\n• **7K Itihaas**: Interactive Indian history timeline\n• **7K Polyglot**: Language learning companion\n• **Stan AI**: AI assistant (that's me!) for the ecosystem\n\nPlus this amazing portfolioverse you're exploring right now!",
    category: "projects"
  },

  // Skills & Technology
  {
    keywords: ["skills", "technology", "tech stack", "languages", "programming"],
    patterns: [/what.*skills/i, /tech stack/i, /technologies/i, /programming.*know/i],
    answer: "Kunal's tech stack is impressive! He works with:\n\n**Frontend**: React, Next.js, TypeScript, Tailwind CSS\n**Backend**: Node.js, Python, Firebase\n**Tools**: Git, Vercel, AI/ML frameworks\n**Design**: UI/UX design, Figma\n\nHe's always learning and expanding his skillset!",
    category: "skills"
  },
  {
    keywords: ["react", "nextjs", "next.js", "frontend"],
    patterns: [/react/i, /next\.?js/i, /frontend/i],
    answer: "Yes! Kunal is highly skilled in React and Next.js. Most of his projects, including this entire portfolioverse, are built with Next.js 15, using modern React patterns, server components, and TypeScript for type safety!",
    category: "skills"
  },
  {
    keywords: ["typescript", "javascript", "ts", "js"],
    patterns: [/typescript/i, /javascript/i],
    answer: "Absolutely! Kunal uses TypeScript extensively in his projects for better code quality, type safety, and developer experience. He believes in writing clean, maintainable code!",
    category: "skills"
  },
  {
    keywords: ["ai", "machine learning", "ml", "artificial intelligence"],
    patterns: [/ai/i, /machine learning/i, /artificial intelligence/i],
    answer: "AI is one of Kunal's biggest passions! He's building Stan (me!), exploring machine learning applications, and integrating AI capabilities into the 7K Ecosystem to make productivity tools smarter and more helpful!",
    category: "skills"
  },
  {
    keywords: ["design", "ui", "ux", "user interface"],
    patterns: [/ui.*ux/i, /design/i, /user interface/i],
    answer: "Kunal has a strong eye for design! He believes great UX is essential for productivity tools. All his apps feature thoughtful, clean interfaces designed to minimize friction and maximize focus. Just look at this beautiful portfolio!",
    category: "skills"
  },

  // Portfolio & Website
  {
    keywords: ["portfolio", "website", "portfolioverse", "showcase"],
    patterns: [/portfolioverse/i, /portfolio/i, /this website/i, /this site/i],
    answer: "You're exploring Kunal's Portfolioverse! It's not just one portfolio—it's multiple creative ways to experience his work:\n\n• **/story**: Classic narrative portfolio\n• **/terminal**: Interactive command-line interface\n• **/arcade**: Fun 2D game-based showcase\n• **/slider**: Animated visual slider\n• **/mobile**: Mobile app-style experience\n• **/galaksi**: Space-themed explorer\n• **/portfolio-card**: Professional card layout\n\nEach has 4 different styles! How cool is that?",
    category: "portfolio"
  },
  {
    keywords: ["arcade", "game", "bounce"],
    patterns: [/arcade/i, /game.*portfolio/i, /bounce/i],
    answer: "The Arcade portfolio is super fun! It's a playable 2D game where you click to place platforms and bounce a ball upward through Kunal's skills. It shows his projects and experience in a unique, interactive way. Try it at /arcade!",
    category: "portfolio"
  },
  {
    keywords: ["terminal", "command", "cli", "command line"],
    patterns: [/terminal/i, /command.*line/i, /cli/i],
    answer: "The Terminal portfolio is for the developers! It's an interactive command-line interface where you can type commands to explore Kunal's projects, skills, and experience. It feels like you're SSHing into his life! Check it out at /terminal!",
    category: "portfolio"
  },
  {
    keywords: ["slider", "animated", "slides"],
    patterns: [/slider/i, /animated.*portfolio/i],
    answer: "The Slider portfolio is a visually stunning, animated showcase! Projects slide in and out with smooth transitions, creating a cinematic experience. It's perfect for those who love beautiful animations! Visit /slider to see it!",
    category: "portfolio"
  },
  {
    keywords: ["mobile", "phone", "ios", "android"],
    patterns: [/mobile.*portfolio/i, /phone.*interface/i],
    answer: "The Mobile portfolio simulates a phone interface! It's a swipeable, app-like experience that feels native to mobile devices. Kunal designed it to showcase how his work translates to mobile platforms. Try /mobile!",
    category: "portfolio"
  },
  {
    keywords: ["galaksi", "galaxy", "space", "solar"],
    patterns: [/galaksi/i, /galaxy/i, /space.*portfolio/i, /solar system/i],
    answer: "The Galaksi portfolio is out of this world—literally! It's a space-themed explorer with animated stars, floating planets, and projects orbiting around. It's one of the most creative portfolio designs you'll see! Launch into /galaksi!",
    category: "portfolio"
  },
  {
    keywords: ["story", "narrative", "book"],
    patterns: [/story.*portfolio/i, /narrative/i, /book.*style/i],
    answer: "The Story portfolio is a classic, narrative-driven experience! It presents Kunal's journey like a story, with a book-like interface that's easy to read and engaging. Perfect for a traditional portfolio feel! Read it at /story!",
    category: "portfolio"
  },

  // Chess
  {
    keywords: ["chess", "play chess", "chess player"],
    patterns: [/chess/i, /play.*chess/i],
    answer: "Kunal loves chess! It's not just a hobby—it teaches him strategic thinking, patience, and planning ahead. Skills that translate perfectly into both coding and his future law career. Chess is all about seeing patterns and thinking several moves ahead!",
    category: "interests"
  },

  // Future Plans
  {
    keywords: ["future", "plans", "next", "upcoming", "working on"],
    patterns: [/what.*next/i, /future plans/i, /working on/i, /upcoming/i],
    answer: "Kunal has exciting plans ahead! He's:\n\n• Finishing his 12th standard and preparing for law entrance exams\n• Continuing to build and improve the 7K Ecosystem\n• Developing Stan AI into a full Android assistant\n• Creating more productivity tools for students and professionals\n• Building tools specifically for law students and aspirants\n\nHe's just getting started!",
    category: "future"
  },
  {
    keywords: ["launcher", "android launcher", "custom launcher"],
    patterns: [/launcher/i, /android.*launcher/i],
    answer: "A custom Android launcher is one of Kunal's upcoming projects! He wants to create a minimal, productivity-focused launcher that integrates with the 7K Ecosystem and helps users stay focused on what matters most!",
    category: "future"
  },
  {
    keywords: ["journal", "journaling", "diary"],
    patterns: [/journal/i, /journaling/i, /diary/i],
    answer: "Kunal is planning a Smart Journal App! It would feature AI-powered prompts, analysis of your entries, habit tracking, and insights to help you reflect and grow. Perfect for anyone into productivity and self-improvement!",
    category: "future"
  },

  // Specific Questions
  {
    keywords: ["why", "motivation", "inspired", "started"],
    patterns: [/why.*build/i, /what.*motivated/i, /why.*create/i, /what inspired/i],
    answer: "Kunal built the 7K Ecosystem out of a deep belief that the right tools can transform lives! He wanted to create systems that eliminate friction, amplify focus, and free up mental space for creativity. Plus, as someone juggling studies, tech, and law prep, he needed these tools himself!",
    category: "motivation"
  },
  {
    keywords: ["github", "code", "source", "repository"],
    patterns: [/github/i, /source code/i, /repository/i, /repo/i],
    answer: "Yes! You can find Kunal's work on GitHub at @kunu2009. He believes in open development and shares many of his projects. Check out the code, contribute, or just explore how things are built!",
    category: "links"
  },
  {
    keywords: ["linkedin", "professional"],
    patterns: [/linkedin/i, /professional.*profile/i],
    answer: "You can connect with Kunal on LinkedIn! He shares updates about his projects, law journey, and tech interests. Great place for professional networking!",
    category: "links"
  },
  {
    keywords: ["contribute", "collaborate", "help", "join"],
    patterns: [/how.*contribute/i, /can i help/i, /collaborate/i, /join/i],
    answer: "Kunal would love to collaborate! You can:\n\n• Star his projects on GitHub (@kunu2009)\n• Contribute code or ideas to open projects\n• Share feedback on his apps\n• Connect via email: 7kmindbeatss@gmail.com\n\nHe's always open to connecting with fellow builders and learners!",
    category: "collaboration"
  },
  {
    keywords: ["year", "experience", "how long", "coding since"],
    patterns: [/how (long|many years)/i, /coding.*since/i, /experience/i],
    answer: "Kunal has been building with code for over 2 years now, with 20+ apps and projects under his belt! And he's still in school! His portfolio spans full-stack development, UI/UX design, and AI integration. Quality over quantity, but he's got both!",
    category: "experience"
  },

  // Fun/Casual Questions
  {
    keywords: ["favorite", "favourite", "best"],
    patterns: [/favorite.*project/i, /best.*app/i, /proud of/i],
    answer: "While Kunal is proud of all his projects, 7K Life holds a special place—it's the heart of the ecosystem! But honestly, this Portfolioverse is pretty amazing too. I mean, how many people have 7 different portfolio styles? 😄",
    category: "fun"
  },
  {
    keywords: ["coffee", "tea", "drink"],
    patterns: [/coffee or tea/i, /favorite.*drink/i],
    answer: "I don't have that specific info, but I know Kunal is fueled by passion for building cool stuff! Whether it's chai, coffee, or pure determination, he keeps coding and creating! 😊",
    category: "fun"
  },
  {
    keywords: ["inspire", "inspiration", "role model"],
    patterns: [/who inspires/i, /role model/i, /look up to/i],
    answer: "Kunal is inspired by people who build things that matter! He admires innovators who combine multiple disciplines—just like he's combining law, tech, and productivity. He believes in being a builder, not just a consumer!",
    category: "inspiration"
  },
  {
    keywords: ["advice", "tip", "suggestion", "beginner"],
    patterns: [/advice/i, /tips for/i, /beginner/i, /getting started/i],
    answer: "Kunal would probably say: Start building today! Don't wait for perfect conditions. Pick a problem you face, build a solution, and learn along the way. Consistency beats intensity. And most importantly—organize your life to free up mental space for creativity! That's the 7K way! 🚀",
    category: "advice"
  },
];

export const FUN_FACTS = [
  "Kunal built over 20 apps while still being in school! Talk about productivity! 🚀",
  "The 7K Ecosystem started as personal tools Kunal needed himself—now they're helping others too!",
  "Kunal is balancing being a 12th grader, a developer, AND preparing to be a lawyer. Triple threat! ⚖️💻📚",
  "This entire Portfolioverse has 7 different portfolio types, each with 4 unique styles. That's 28 ways to explore Kunal's work!",
  "Kunal loves chess because it teaches strategic thinking—super useful for both coding and law!",
  "7K Life, the core app, integrates productivity, habits, goals, and life management all in one place!",
  "Kunal believes in 'Radical Productivity'—tools that amplify focus and eliminate friction!",
  "The Terminal portfolio actually works like a real CLI! You can type commands and explore interactively!",
  "Kunal taught himself React, Next.js, TypeScript, and more—all while studying for school exams!",
  "The Galaksi portfolio has animated stars and floating planets. It's literally out of this world! 🌌",
  "Kunal's building Stan AI (that's me!) to eventually run on Android and help with daily tasks!",
  "7KLawPrep was built because Kunal is passionate about law AND wants to help fellow aspirants!",
  "Every project in the 7K Ecosystem follows three principles: Radical Productivity, Continuous Growth, and Creative Freedom!",
  "Kunal is working on a custom Android launcher to make phones more productivity-focused!",
  "The Arcade portfolio is literally a playable game! How many portfolios can you actually play? 🎮",
];

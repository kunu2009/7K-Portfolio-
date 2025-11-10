/**
 * Structured Data Schemas for SEO
 * Schema.org markup for rich snippets
 */

import { SITE_CONFIG } from "./constants";

export const projectSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Life - Best Free Productivity & Habit Tracker App",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "Free all-in-one productivity app for life management. Track habits with streaks, manage tasks, set goals, take notes, and organize your life. Best habit tracker and task manager app for students and professionals in 2025.",
    "keywords": "productivity app, habit tracker, task manager, goal tracker, life organizer, daily planner, free productivity tools, best habit tracker app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": "Habit tracking with streaks, Smart task management, Goal setting and progress tracking, Note-taking and journaling, Personal productivity dashboard, Daily reminders, Analytics and insights",
    "screenshot": `${SITE_CONFIG.url}/images/7klife-screenshot.png`,
    "url": "https://life.7kc.me"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Fitness - Free Workout & Fitness Tracker App",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "Best free fitness tracker app with 500+ exercise tutorials, calorie tracker, workout plans, and progress monitoring. Complete fitness companion for gym workouts, home exercises, weight loss, and health tracking.",
    "keywords": "fitness app, fitness tracker, workout app, exercise app, gym app, calorie tracker, workout planner, health tracker app, free fitness app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "267",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": "500+ exercise tutorials with videos, Calorie and nutrition tracker, Pre-built workout plans, Custom workout creator, Progress tracking with charts, Meal planning tools, Body measurement logging, Water intake reminders",
    "screenshot": `${SITE_CONFIG.url}/images/7kfitness-screenshot.png`,
    "url": "https://fitness.7kc.me"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Money - Free Personal Finance & Budget Tracker",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "Best free personal finance app for expense tracking, budgeting, and money management. Track spending, create budgets, monitor investments, and achieve financial goals. Complete money manager for individuals and families.",
    "keywords": "finance app, expense tracker, budget app, money management app, personal finance, investment tracker, budgeting tool, money tracker",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "178",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": "Automatic expense tracking, Budget creation and monitoring, Investment portfolio tracking, Financial goal setting, Bill reminders, Spending analytics, Multi-currency support, Financial reports and charts",
    "screenshot": `${SITE_CONFIG.url}/images/7kmoney-screenshot.png`,
    "url": "https://money.7kc.me"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Polyglot - Free Language Learning App",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web, Android",
    "description": "Best free language learning app for learning multiple languages. Master vocabulary with flashcards, spaced repetition, pronunciation practice, and AI conversation. Learn Spanish, French, German, Japanese and more languages.",
    "keywords": "language learning app, learn languages free, vocabulary builder, language practice app, polyglot app, learn multiple languages, flashcards app, free language app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "234",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": "Multiple language support, Flashcard system, Spaced repetition learning, AI conversation practice, Pronunciation guides, Grammar lessons, Progress tracking, Daily practice routines",
    "screenshot": `${SITE_CONFIG.url}/images/7kpolyglot-screenshot.png`,
    "url": "https://polyglot.7kc.me"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LawPrep",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "Specialized suite of tools for law aspirants preparing for CLAT and MHCET. Features mock tests, legal quizzes, and performance analytics.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "85"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Polyglot",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web, Android",
    "description": "Language-learning companion for vocabulary acquisition. Features flashcards, quizzes, and spaced repetition.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Itihaas",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "Interactive Indian history timeline app bringing historical events to life.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    }
  }
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "7K Ecosystem",
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}/images/7klife-logo.svg`,
  "description": "Developer ecosystem creating productivity and educational applications",
  "founder": {
    "@type": "Person",
    "name": "Kunal Chheda",
    "jobTitle": "Student Developer",
    "url": SITE_CONFIG.url
  },
  "sameAs": [
    SITE_CONFIG.author.github,
    "https://www.linkedin.com/in/kunal-chheda-b36731388",
    "https://www.instagram.com/7kc_me/"
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_CONFIG.url
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": `${SITE_CONFIG.url}#projects`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "About",
      "item": `${SITE_CONFIG.url}#about`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": `${SITE_CONFIG.url}#contact`
    }
  ]
};

export const bookSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Ethos: Design Philosophy & Cultural Values",
    "author": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "7K Ecosystem"
    },
    "description": "A comprehensive exploration of design philosophy, cultural values, and the intersection of Eastern and Western thought in technology and leadership.",
    "genre": ["Philosophy", "Design", "Technology"],
    "inLanguage": "en",
    "numberOfPages": 156,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "42",
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": `${SITE_CONFIG.url}/images/lavender-skies-cover.jpg`,
    "url": `${SITE_CONFIG.url}/books/ethos`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "datePublished": "2024-06-15",
    "bookFormat": "https://schema.org/EBook",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Kunal Chheda"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "The Kup Games: Mystery in Kupam",
    "author": {
      "@type": "Person",
      "name": "Kunal Chheda",
      "url": SITE_CONFIG.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "7K Ecosystem"
    },
    "description": "A thrilling mystery unfolding in Kupam, where a seemingly ordinary student Rudra discovers dark secrets hidden beneath the surface of a quiet town.",
    "genre": ["Mystery", "Thriller", "Fiction"],
    "inLanguage": "en",
    "numberOfPages": 89,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "28",
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": `${SITE_CONFIG.url}/images/wolf-fox-cover.jpg`,
    "url": `${SITE_CONFIG.url}/books/kupgames`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "datePublished": "2024-08-20",
    "bookFormat": "https://schema.org/EBook",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Kunal Chheda"
    }
  }
];

/**
 * Structured Data Schemas for SEO
 * Schema.org markup for rich snippets
 */

import { SITE_CONFIG } from "./constants";

export const projectSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "7K Life",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "Core application for holistic life management and productivity. Integrates task management, goal setting, habit tracking, and personal knowledge management.",
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
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
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

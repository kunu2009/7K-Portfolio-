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

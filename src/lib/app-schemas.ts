/**
 * Schema.org Structured Data for Apps
 * Generates SoftwareApplication schemas for all 7K ecosystem apps
 */

import { App } from "./apps-data";

export function generateAppSchema(app: App) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: getCategoryType(app.category),
    operatingSystem: "Web Browser",
    url: app.url,
    description: app.fullDescription,
    offers: {
      "@type": "Offer",
      price: app.pricing === "free" ? "0" : app.pricing === "freemium" ? "0" : "9.99",
      priceCurrency: "USD",
      availability: app.status === "live" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: app.rating.toString(),
      reviewCount: app.reviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: "Kunal Chheda",
      url: "https://7kc.me",
      sameAs: [
        "https://github.com/kunu2009",
        "https://twitter.com/kunu2009",
      ],
    },
    creator: {
      "@type": "Person",
      name: "Kunal Chheda",
    },
    datePublished: app.launchDate,
    featureList: app.features,
    screenshot: `https://7kc.me/screenshots/${app.id}.png`,
    softwareVersion: "1.0",
    applicationSubCategory: app.tagline,
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    permissions: app.category === "finance" ? "Data storage" : "None",
    countriesSupported: "Worldwide",
    inLanguage: "en",
    isAccessibleForFree: app.pricing === "free",
    isFamilyFriendly: true,
  };
}

function getCategoryType(category: string): string {
  const categoryMap: Record<string, string> = {
    productivity: "BusinessApplication",
    learning: "EducationalApplication",
    finance: "FinanceApplication",
    health: "LifestyleApplication",
    entertainment: "GameApplication",
    creative: "DesignApplication",
    social: "SocialNetworkingApplication",
  };
  return categoryMap[category] || "WebApplication";
}

export function generateCollectionPageSchema(apps: App[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "7K App Ecosystem",
    description: "Collection of 19 powerful web applications for productivity, learning, finance, health, and more.",
    url: "https://7kc.me/apps",
    author: {
      "@type": "Person",
      name: "Kunal Chheda",
      url: "https://7kc.me",
    },
    numberOfItems: apps.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: apps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: app.name,
          url: `https://7kc.me/apps/${app.id}`,
          description: app.description,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: app.rating.toString(),
            reviewCount: app.reviews.toString(),
          },
        },
      })),
    },
  };
}

// Generate WebSite schema with search action for apps
export function generateAppSearchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "7K App Ecosystem",
    url: "https://7kc.me/apps",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://7kc.me/apps?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Generate BreadcrumbList for app pages
export function generateAppBreadcrumbSchema(appName: string, appSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://7kc.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Apps",
        item: "https://7kc.me/apps",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: appName,
        item: `https://7kc.me/apps/${appSlug}`,
      },
    ],
  };
}

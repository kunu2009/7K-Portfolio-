import AppsIndexClient from "./apps-index-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Apps Directory - 20+ Productivity, Fitness & Learning Tools | 7K Apps",
  description: "Browse 20+ best free apps: productivity tools (7K Life), fitness tracker (7K Fitness), finance manager (7K Money), language learning (7K Polyglot), educational apps, and more. All free, no subscriptions required.",
  openGraph: {
    title: "20+ Best Free Apps - Productivity, Fitness, Learning & More",
    description: "Explore complete collection of free apps: habit tracker, task manager, workout planner, expense tracker, language learning & education tools.",
    type: "website",
    url: "https://7kc.me/apps",
  },
  keywords: [
    // Generic app directory keywords
    "free apps",
    "best apps",
    "web apps free",
    "productivity apps",
    "fitness apps",
    "learning apps",
    "educational apps",
    "finance apps",
    
    // Specific app types
    "habit tracker app",
    "task manager app",
    "workout tracker app",
    "expense tracker app",
    "language learning app",
    "study apps",
    
    // Popular app names
    "7K Life app",
    "7K Fitness app",
    "7K Money app",
    "7K Polyglot app",
    "7K LawPrep",
    
    // Target audience
    "student apps",
    "productivity tools for students",
    "apps for professionals",
    "free apps India",
    "best Indian apps",
    
    // Ecosystem
    "7K apps",
    "7K Ecosystem",
    "Kunal Chheda apps",
  ],
  alternates: {
    canonical: "https://7kc.me/apps",
  },
};

export default function AppsPage() {
  return <AppsIndexClient />;
}

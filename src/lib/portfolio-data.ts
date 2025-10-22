/**
 * Portfolio Data
 * Personal information and settings
 */

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  avatar?: string;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  metaDescription: string;
  analyticsEnabled: boolean;
  maintenanceMode: boolean;
  ogImage?: string;
}

export const portfolioData: PortfolioData = {
  name: "Kunal Chheda",
  title: "Student Developer & Polyglot",
  bio: "I'm Kunal — a 12th-grade Arts student with a passion for building apps, learning languages, and playing chess. I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort.",
  email: "7kmindbeatss@gmail.com",
  github: "kunu2009",
  linkedin: "kunal-chheda-b36731388",
  twitter: "kunal7k",
  location: "India",
  avatar: "/images/profile.jpg"
};

export const siteSettings: SiteSettings = {
  siteName: "7K Ecosystem",
  siteUrl: "https://7kc.me",
  metaDescription: "20+ productivity apps built by Kunal Chheda, a 12th-grade student developer from India. Explore 7K Life, LawPrep, Polyglot & more Next.js applications.",
  analyticsEnabled: true,
  maintenanceMode: false,
  ogImage: "/og-image.png"
};

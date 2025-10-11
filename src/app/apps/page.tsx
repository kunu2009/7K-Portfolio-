import { Metadata } from "next";
import AppsIndexClient from "./apps-index-client";

export const metadata: Metadata = {
  title: "7K Apps - Ecosystem of Productivity, Learning & Lifestyle Apps | 7K",
  description: "Explore 19 powerful apps in the 7K ecosystem. From productivity tools to language learning, finance management to fitness tracking - discover apps that enhance your digital life.",
  keywords: [
    "7K apps",
    "productivity apps",
    "learning apps",
    "finance apps",
    "fitness apps",
    "developer tools",
    "Kunal Chheda apps",
    "web applications",
    "free online tools",
    "student apps",
    "language learning",
    "project management",
  ].join(", "),
  authors: [{ name: "Kunal Chheda", url: "https://7kc.me" }],
  creator: "Kunal Chheda",
  publisher: "7K Ecosystem",
  
  openGraph: {
    title: "7K Apps - 19 Powerful Apps for Productivity, Learning & More",
    description: "Discover the complete 7K ecosystem - productivity tools, learning platforms, finance managers, and creative apps. All free to use.",
    url: "https://7kc.me/apps",
    siteName: "7K Ecosystem",
    images: [
      {
        url: "https://7kc.me/og/apps.png",
        width: 1200,
        height: 630,
        alt: "7K Apps Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "7K Apps - 19 Powerful Apps for Every Need",
    description: "Productivity, learning, finance, fitness, and more. Explore the 7K ecosystem.",
    creator: "@kunu2009",
    images: ["https://7kc.me/og/apps.png"],
  },
  
  alternates: {
    canonical: "https://7kc.me/apps",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AppsPage() {
  return <AppsIndexClient />;
}

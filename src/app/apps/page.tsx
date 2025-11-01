import AppsIndexClient from "./apps-index-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7K App Store - All Applications",
  description: "Browse 20+ productivity applications in the 7K Ecosystem. Including 7K Life, LawPrep, Polyglot, Itihaas, Political Science, Economics, and more educational and productivity tools.",
  openGraph: {
    title: "7K App Store - 20+ Productivity & Educational Apps",
    description: "Explore the complete collection of apps built by Kunal Chheda - from productivity tools to educational platforms.",
    type: "website",
  },
  keywords: [
    "7K apps",
    "productivity apps",
    "educational apps",
    "student tools",
    "learning apps",
    "7K Life",
    "7K LawPrep",
    "7K Polyglot",
    "app ecosystem",
  ],
};

export default function AppsPage() {
  return <AppsIndexClient />;
}

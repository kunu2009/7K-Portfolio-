import type { Metadata } from "next";
import ShopClient from "./shop-client";

export const metadata: Metadata = {
  title: "Digital Product Shop - Prompt Packs, Templates & Starter Kits | 7K",
  description:
    "Buy modern digital products from 7K: prompt packs, student templates, Notion planners, and portfolio starter kits with instant delivery.",
  keywords: [
    "digital products India",
    "prompt packs",
    "student templates",
    "notion planner templates",
    "nextjs portfolio starter kit",
    "buy digital downloads",
    "developer prompt pack",
    "7K shop",
  ],
  openGraph: {
    title: "7K Digital Shop - Prompt Packs, Templates & Starter Kits",
    description:
      "Modern digital products built for students and developers. Instant downloads and practical outcomes.",
    type: "website",
    url: "https://7kc.me/shop",
  },
  alternates: {
    canonical: "https://7kc.me/shop",
  },
};

export default function ShopPage() {
  return <ShopClient />;
}

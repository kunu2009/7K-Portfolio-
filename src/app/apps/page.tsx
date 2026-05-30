import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  return (
    <>
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/7klaunchericon.png"
              alt="7K Launcher icon"
              width={72}
              height={72}
              className="h-18 w-18 rounded-2xl border border-border object-cover shadow-lg"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                New Android App
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">7K Launcher</h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                Minimal Android launcher for focus and speed. Download the APK or open the app card for full details.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/apps/launcher">Open app card</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/7klauncher.apk" download>
                Download APK
              </a>
            </Button>
          </div>
        </div>
      </section>
      <AppsIndexClient />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Bug, 
  Lightbulb, 
  Rocket,
  X,
  ChevronLeft,
  ChevronRight,
  Code,
  Zap,
  Coffee,
  Heart
} from "lucide-react";

// Journey milestones with screenshots
const journeyMilestones = [
  {
    id: 1,
    date: "September 2025",
    title: "The Beginning",
    description: "Started building the 7K Ecosystem. First Firebase integration attempts, lots of confusion but endless excitement.",
    screenshots: [
      "Screenshot 2025-09-18 215937.png",
      "Screenshot 2025-09-18 220739.png",
      "Screenshot 2025-09-28 232046.png",
      "Screenshot 2025-09-28 232129.png",
      "Screenshot 2025-09-30 004341.png",
    ],
    lesson: "Every expert was once a beginner. The key is to start. — Those first 13 screenshots represent the raw foundation. Yes, they're messy. Yes, there are UI bugs. But they're the proof that I committed to learning. I didn't wait for perfection; I started building. That's the lesson for job seekers: action beats preparation.",
    mood: "excited",
    icon: Rocket,
  },
  {
    id: 2,
    date: "October 2025",
    title: "The Struggle Phase",
    description: "App settings, configurations, and that one bug that took 3 days to fix. Late nights debugging became routine.",
    screenshots: [
      "Screenshot 2025-10-01 232136.png",
      "Screenshot 2025-10-01 234002.png",
      "Screenshot 2025-10-04 180641.png",
      "Screenshot 2025-10-04 180654.png",
      "Screenshot 2025-10-04 180723.png",
      "Screenshot 2025-10-04 183331.png",
      "Screenshot 2025-10-04 184414.png",
      "Screenshot 2025-10-04 190935.png",
      "Screenshot 2025-10-08 003511.png",
      "Screenshot 2025-10-08 003847.png",
      "Screenshot 2025-10-09 212259.png",
      "Screenshot 2025-10-10 180423.png",
      "Screenshot 2025-10-11 193952.png",
      "Screenshot 2025-10-13 230223.png",
      "Screenshot 2025-10-22 214821.png",
    ],
    lesson: "Bugs are not obstacles, they're lessons in disguise. — October was brutal. I logged 100+ bugs. But each one taught me something: Firebase tokens, React state management, async/await edge cases. The developers who grow fastest aren't those with fewer bugs — they're the ones who systematically learn from each one. That's how I debugged my way to better code.",
    mood: "struggling",
    icon: Bug,
  },
  {
    id: 3,
    date: "November 2025",
    title: "The Breakthrough",
    description: "Things started clicking! Multiple apps taking shape, features working, UI coming together beautifully.",
    screenshots: [
      "Screenshot 2025-11-11 211913.png",
      "Screenshot 2025-11-11 213033.png",
      "Screenshot 2025-11-11 213829.png",
      "Screenshot 2025-11-11 230347.png",
      "Screenshot 2025-11-11 230851.png",
      "Screenshot 2025-11-11 231541.png",
      "Screenshot 2025-11-11 231858.png",
      "Screenshot 2025-11-11 233039.png",
      "Screenshot 2025-11-12 004846.png",
      "Screenshot 2025-11-12 005124.png",
      "Screenshot 2025-11-17 225716.png",
      "Screenshot 2025-11-17 231527.png",
      "Screenshot 2025-11-18 004515.png",
      "Screenshot 2025-11-19 232428.png",
      "Screenshot 2025-11-23 001818.png",
      "Screenshot 2025-11-23 002421.png",
      "Screenshot 2025-11-24 232206.png",
      "Screenshot 2025-11-28 091627.png",
      "Screenshot 2025-11-28 214145.png",
      "Screenshot 2025-11-28 231917.png",
      "Screenshot 2025-11-30 221914.png",
      "Screenshot 2025-11-30 222745.png",
    ],
    lesson: "Persistence beats resistance. Keep pushing forward. — November 2025 was the inflection point. Multiple apps taking shape. Features working. The persistence from October's struggles paid off. This is when I realized that shipping 24 apps wasn't about being a genius — it was about showing up every day, fixing one more bug, adding one more feature. Momentum compounds.",
    mood: "hopeful",
    icon: Lightbulb,
  },
  {
    id: 4,
    date: "December 2025",
    title: "Polish & Perfection",
    description: "Refining the ecosystem, fixing edge cases, preparing for launch. The finish line was in sight!",
    screenshots: [
      "Screenshot 2025-12-01 205440.png",
      "Screenshot 2025-12-01 214658.png",
      "Screenshot 2025-12-01 215129.png",
      "Screenshot 2025-12-04 004002.png",
      "Screenshot 2025-12-04 004157.png",
      "Screenshot 2025-12-04 212510.png",
      "Screenshot 2025-12-04 212526.png",
      "Screenshot 2025-12-04 214838.png",
      "Screenshot 2025-12-04 215135.png",
      "Screenshot 2025-12-29 213633.png",
      "Screenshot 2025-12-31 001430.png",
      "Screenshot 2025-12-31 003227.png",
      "Screenshot 2025-12-31 003746.png",
      "Screenshot 2025-12-31 003844.png",
    ],
    lesson: "Excellence is in the details. Polish until it shines. — December was all about the 1% improvements. Better error messages. Smoother animations. Accessible forms. Better loading states. Users don't see 90% of this work — that's exactly the point. They just feel that the app is well-crafted. Polish is what separates amateur apps from professional ones.",
    mood: "confident",
    icon: Zap,
  },
  {
    id: 5,
    date: "2026 & Beyond",
    title: "The Journey Continues",
    description: "New features, new challenges, new learnings. The ecosystem keeps growing, and so do I.",
    screenshots: [
      "Screenshot 2026-01-19 233400.png",
      "Screenshot 2026-01-20 004602.png",
      "Screenshot 2026-01-20 004635.png",
      "Screenshot 2026-02-09 185235.png",
      "Screenshot 2026-02-09 194125.png",
      "Screenshot 2026-03-03 163748.png",
    ],
    lesson: "The journey never ends. Embrace continuous learning. — 2026 is not the finish line; it's a new chapter. I'm still learning. Every new framework, every user feedback, every failed deployment teaches me something. The best developers aren't the ones who stop learning — they're the ones who treat building software as a never-ending education. That's how you stay relevant.",
    mood: "inspired",
    icon: Heart,
  },
];

// Stats
const stats = [
  { label: "Screenshots", value: "76+", icon: Code },
  { label: "Bugs Fixed", value: "100+", icon: Bug },
  { label: "Late Nights", value: "∞", icon: Coffee },
  { label: "Apps Built", value: "24+", icon: Rocket },
];

export default function JourneyPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<typeof journeyMilestones[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen || !selectedMilestone) return;
      
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(prev => 
          prev > 0 ? prev - 1 : selectedMilestone.screenshots.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex(prev => 
          prev < selectedMilestone.screenshots.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, selectedMilestone]);

  const openLightbox = (milestone: typeof journeyMilestones[0], index: number = 0) => {
    setSelectedMilestone(milestone);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        {/* Floating decorations */}
        <div className="absolute top-16 right-8 opacity-15 animate-pulse hidden md:block">
          <img src="/images/decorations/kunal-cutout.png" alt="" width={110} height={110} />
        </div>
        <div className="absolute bottom-20 left-8 opacity-12 hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}>
          <img src="/images/decorations/fushiguro.png" alt="" width={100} height={100} />
        </div>
        <div className="absolute top-1/3 left-5 opacity-10 hidden xl:block">
          <img src="/images/decorations/anime-boy-star.png" alt="" width={90} height={90} />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-10 hidden lg:block">
          <img src="/images/decorations/abstract-shapes.jpeg" alt="" width={100} height={100} className="rounded-2xl" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Dev Journey</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              My Coding{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Struggles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A raw, unfiltered look at the errors, bugs, and late-night debugging sessions 
              that shaped the 7K Ecosystem. Because every success story has a struggle chapter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 pt-8"
            >
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border"
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

            <div className="space-y-16">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10">
                    <milestone.icon className="w-3 h-3 text-primary" />
                  </div>

                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {milestone.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground mb-4">{milestone.description}</p>
                    
                    <div className="inline-flex items-start gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-left">{milestone.lesson}</p>
                    </div>
                  </div>

                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {milestone.screenshots.slice(0, 6).map((screenshot, i) => (
                        <motion.div
                          key={screenshot}
                          whileHover={{ scale: 1.05, zIndex: 10 }}
                          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-colors shadow-lg"
                          onClick={() => openLightbox(milestone, i)}
                        >
                          <Image
                            src={`/images/journey/${screenshot}`}
                            alt={`${milestone.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 20vw"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs">View</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {milestone.screenshots.length > 6 && (
                      <button
                        onClick={() => openLightbox(milestone, 0)}
                        className="mt-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        +{milestone.screenshots.length - 6} more screenshots
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium italic"
          >
            &ldquo;The only way to learn programming is by programming. Every bug is a lesson, 
            every error is progress, and every late night is an investment in your future. Your 
            struggles today become your superpowers tomorrow.&rdquo;
          </motion.blockquote>
          <p className="mt-4 text-muted-foreground">— Kunal Chheda, after 6 months and 24+ apps</p>
          <p className="mt-2 text-sm text-muted-foreground opacity-80">
            Built through errors, debugged through persistence, shipped through commitment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Inspired by the Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Check out the apps that came from all these struggles, or explore my creative side.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-4 h-4" />
              Explore Apps
            </Link>
            <Link
              href="/creations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            >
              <Heart className="w-4 h-4" />
              View Creations
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(prev => 
                  prev > 0 ? prev - 1 : selectedMilestone.screenshots.length - 1
                );
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(prev => 
                  prev < selectedMilestone.screenshots.length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/journey/${selectedMilestone.screenshots[currentImageIndex]}`}
                alt={`Screenshot ${currentImageIndex + 1}`}
                width={1920}
                height={1080}
                className="rounded-lg object-contain max-h-[80vh] mx-auto"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-center">
                  {selectedMilestone.title} • Screenshot {currentImageIndex + 1} of {selectedMilestone.screenshots.length}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
              {selectedMilestone.screenshots.map((screenshot, i) => (
                <button
                  key={screenshot}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`flex-shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-colors ${
                    i === currentImageIndex ? "border-primary" : "border-transparent hover:border-white/50"
                  }`}
                >
                  <Image
                    src={`/images/journey/${screenshot}`}
                    alt={`Thumbnail ${i + 1}`}
                    width={64}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

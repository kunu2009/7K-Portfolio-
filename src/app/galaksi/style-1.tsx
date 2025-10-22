"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  ChevronDown,
  Star,
  Code2,
  Languages,
  Sparkles,
  ArrowRight,
  Grid3x3,
  Settings,
  Crown,
  Target,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PERSONAL_INFO, PROJECTS } from "@/lib/constants";

const aboutCards = [
  {
    title: "Who I Am",
    content: PERSONAL_INFO.bio,
    icon: "≡ƒæ¿ΓÇì≡ƒÆ╗"
  },
  {
    title: "My Mission",
    content: "Building the 7K Ecosystem ΓÇö a collection of apps designed to empower, educate, and comfort. Each tool is crafted with care to make life easier and more productive.",
    icon: "∩┐╜"
  },
  {
    title: "My Journey",
    content: "From a 12th-grade Arts student to a developer creating meaningful technology. I balance my dream of becoming a corporate lawyer with my passion for building tools that help people.",
    icon: "Γ£¿"
  }
];

const featuredProjects = [
  { 
    id: 1, 
    title: "7K Life App", 
    image: "∩┐╜", 
    gradient: "from-amber-600 to-orange-700",
    description: "Core application for holistic life management and productivity. Your central hub for tasks, goals, habits, and personal knowledge.",
    tags: ["Productivity", "Ecosystem"],
    link: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/"
  },
  { 
    id: 2, 
    title: "7K LawPrep", 
    image: "ΓÜû∩╕Å", 
    gradient: "from-blue-600 to-cyan-600",
    description: "Web-based utilities for law aspirants. Mock tests, quizzes, and performance analytics for CLAT and MHCET preparation.",
    tags: ["Education", "Legal Tech"],
    link: "https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/"
  },
  { 
    id: 3, 
    title: "7K Polyglot", 
    image: "≡ƒîì", 
    gradient: "from-teal-500 to-green-600",
    description: "Language-learning companion with flashcards, quizzes, and spaced repetition. Make vocabulary acquisition fun and effective.",
    tags: ["Education", "Languages"],
    link: "https://7-k-polyglot.vercel.app/"
  },
  { 
    id: 4, 
    title: "7K Itihaas", 
    image: "≡ƒô£", 
    gradient: "from-purple-600 to-violet-700",
    description: "Explore India's rich history through interactive timelines. Discover events, rulers, and cultures that shaped the subcontinent.",
    tags: ["Education", "History"],
    link: "https://7-k-itihaas.vercel.app/"
  },
  { 
    id: 5, 
    title: "Stan AI", 
    image: "≡ƒñû", 
    gradient: "from-pink-500 to-rose-600",
    description: "AI assistant running on Android. Context-aware automation and assistance integrated across the 7K ecosystem.",
    tags: ["AI", "Mobile"],
    link: "#"
  },
  { 
    id: 6, 
    title: "More Coming", 
    image: "≡ƒÜÇ", 
    gradient: "from-indigo-500 to-purple-600",
    description: "Custom launcher, AI tools, smart journal, and more. The 7K ecosystem is constantly growing with new ideas.",
    tags: ["Future", "Innovation"],
    link: "#"
  }
];

const navigationItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Grid3x3, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" }
];

export default function galaksiStyle1() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  // Generate random stars for background
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white overflow-hidden relative">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Astronaut */}
      <motion.div
        className="absolute top-20 right-10 text-6xl md:text-8xl z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ≡ƒºæΓÇì≡ƒÜÇ
      </motion.div>

      {/* Floating Planets */}
      <motion.div
        className="absolute top-40 left-10 text-4xl md:text-6xl"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ≡ƒ¬É
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header Search Bar */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="container mx-auto px-4 pt-8"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search my projects and skills..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
              />
              <Button
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/30"
              >
                <Sparkles className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Main Section */}
        <main className="flex-1 container mx-auto px-4 py-12">
          <AnimatePresence mode="wait">
            {activeSection === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Hero Card */}
                <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 md:p-12 rounded-3xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                      <div className="inline-block">
                        <Badge className="bg-violet-500/30 text-white border-violet-400/50 px-4 py-1">
                          DEVELOPER ΓÇó POLYGLOT ΓÇó CREATOR
                        </Badge>
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                        {PERSONAL_INFO.name}
                        <br />
                        <span className="italic font-light text-4xl md:text-5xl">Portfolio</span>
                      </h1>
                      <p className="text-lg text-white/80">{PERSONAL_INFO.tagline}</p>
                      <div className="flex gap-4 pt-4">
                        <Link href="/#projects">
                          <Button className="bg-white/20 hover:bg-white/30 rounded-full px-6">
                            View Projects
                          </Button>
                        </Link>
                        <Link href="/#contact">
                          <Button className="bg-white/20 hover:bg-white/30 rounded-full px-6">
                            Contact Me
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Card className="bg-purple-600/30 backdrop-blur-lg border-purple-400/30 p-6 rounded-3xl max-w-sm">
                        <h3 className="text-xl font-bold mb-3">QUICK INTRO</h3>
                        <p className="text-sm text-white/80 leading-relaxed mb-4">
                          {PERSONAL_INFO.bio.substring(0, 200)}...
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {PERSONAL_INFO.traits.map((trait, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link href="/#about">
                            <Button 
                              variant="ghost" 
                              className="text-white hover:bg-white/10 rounded-full"
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>

                {/* About Section */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">GET TO KNOW ME</h2>
                    <div className="flex items-center justify-center gap-2 text-white/60">
                      <ChevronDown className="h-5 w-5 animate-bounce" />
                      <span>SCROLL TO EXPLORE</span>
                      <ChevronDown className="h-5 w-5 animate-bounce" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {aboutCards.map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Card className="bg-purple-500/20 backdrop-blur-lg border-purple-400/30 p-6 rounded-3xl h-full hover:bg-purple-500/30 transition-all">
                          <div className="text-5xl mb-4">{card.icon}</div>
                          <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{card.content}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Projects Gallery */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-center">MY PROJECTS & APPS</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {featuredProjects.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedProject(item.id)}
                        className="cursor-pointer"
                      >
                        <Card className={`bg-gradient-to-br ${item.gradient} border-white/20 p-6 rounded-2xl aspect-square flex flex-col items-center justify-center relative overflow-hidden group`}>
                          <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
                            {item.image}
                          </div>
                          <p className="text-xs text-center font-medium">{item.title}</p>
                          <motion.div
                            className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <ArrowRight className="h-8 w-8" />
                          </motion.div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {selectedProject && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="max-w-2xl mx-auto"
                    >
                      <Card className="bg-gradient-to-br from-violet-600/40 to-purple-600/40 backdrop-blur-xl border-white/20 p-8 rounded-3xl">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">
                            {featuredProjects.find(i => i.id === selectedProject)?.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedProject(null)}
                            className="rounded-full hover:bg-white/10"
                          >
                            Γ£ò
                          </Button>
                        </div>
                        <div className="text-8xl text-center my-8">
                          {featuredProjects.find(i => i.id === selectedProject)?.image}
                        </div>
                        <p className="text-white/80 text-center mb-6">
                          {featuredProjects.find(i => i.id === selectedProject)?.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {featuredProjects.find(i => i.id === selectedProject)?.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {featuredProjects.find(i => i.id === selectedProject)?.link !== "#" && (
                          <div className="text-center">
                            <a 
                              href={featuredProjects.find(i => i.id === selectedProject)?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-white/20 hover:bg-white/30 rounded-full">
                                Visit Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  )}
                </div>

                {/* Back to Main Portfolio */}
                <div className="text-center py-12">
                  <Link href="/">
                    <Button className="bg-white/20 hover:bg-white/30 rounded-full px-8 py-6 text-lg">
                      <Home className="mr-2 h-5 w-5" />
                      Back to Main Portfolio
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Creator Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center py-8"
          >
            <p className="text-white/40 text-sm tracking-widest">
              CREATED BY {PERSONAL_INFO.name.toUpperCase()}
            </p>
          </motion.div>
        </main>

        {/* Bottom Navigation */}
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky bottom-0 pb-8"
        >
          <div className="container mx-auto px-4">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 rounded-full p-2 max-w-md mx-auto">
              <div className="flex items-center justify-around">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveSection(item.id)}
                    className={`rounded-full h-14 w-14 transition-all ${
                      activeSection === item.id 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </motion.nav>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-24 right-8 z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="rounded-full h-16 w-16 bg-gradient-to-r from-pink-500 to-violet-500 shadow-2xl shadow-violet-500/50"
        >
          <Rocket className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
}

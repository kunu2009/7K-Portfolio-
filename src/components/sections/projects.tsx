
"use client";

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  Bot, 
  Grid, 
  Sparkles, 
  BookMarked, 
  ExternalLink, 
  ListChecks, 
  Star, 
  Languages, 
  Landmark, 
  ChevronDown, 
  ChevronUp,
  Activity,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  Code2,
  DollarSign,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Heart,
  History,
  Image as ImageIcon,
  Instagram,
  Lightbulb,
  Music,
  PenTool,
  PieChart,
  Pin,
  Presentation,
  Scale,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Wand2
} from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { appsData } from '@/lib/apps-data';

// Icon mapping for different apps - each with distinct, relevant icon
const getAppIcon = (appId: string) => {
  const iconMap: { [key: string]: any } = {
    'life': Target,
    '7kmoney': Wallet,
    'pol': Landmark,
    'eco': TrendingUp,
    'his': History,
    'kanban': Briefcase,
    'pins': Pin,
    'prompt': Wand2,
    'tools': Code2,
    'english': BookOpen,
    'eng': Presentation,
    'polyglot': Languages,
    'money': DollarSign,
    'fitness': Dumbbell,
    'fit': Heart,
    'game': Gamepad2,
    'student': Users,
    'group': Users,
    'editor': ImageIcon,
    'insta': Instagram,
    'relife': Activity,
    'upsc': Scale,
    'music': Music,
    'learn': GraduationCap,
    'creative': Camera,
    'write': PenTool,
    'analytics': PieChart,
    'calendar': Calendar,
    'ai': Lightbulb,
  };
  return iconMap[appId] || Sparkles;
};

const LawPrepQuiz = dynamic(() => import('@/components/mini-demos/law-prep-quiz').then(mod => mod.LawPrepQuiz));

const SevenKLifeIcon = () => <Image src="/images/7klife-logo.svg" alt="7K Life Logo" width={32} height={32} />;
const LawPrepIcon = () => <Image src="/images/lawprep-logo.svg" alt="LawPrep Logo" width={32} height={32} />;

const allProjects = [
  {
    id: "life-app",
    icon: SevenKLifeIcon,
    title: "7K Life App",
    description: "Core application for holistic life management and productivity.",
    href: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/",
    image: "/images/7klife-logo.svg",
    imageHint: "abstract dashboard ui",
    longDescription: "The 7K Life App is the cornerstone of the ecosystem. It's designed to be a central hub for your entire life, integrating task management, goal setting, habit tracking, and personal knowledge management into one seamless experience.",
    features: ["Holistic Task Management", "Integrated Goal & Habit Tracking", "Personal Knowledge Base", "Seamless Syncing"],
    tags: ["Productivity", "Ecosystem"],
    status: "ongoing",
  },
  {
    id: "law-prep",
    icon: LawPrepIcon,
    title: "7KLawPrep",
    description: "Web-based utilities and resources for law aspirants.",
    href: "https://7klawprep.me",
    image: "/images/lawprep-logo.svg",
    imageHint: "legal books justice scale",
    longDescription: "A specialized suite of tools designed to help law aspirants prepare for competitive entrance exams like CLAT and MHCET. Features include mock tests, legal knowledge quizzes, and performance analytics.",
    features: ["Mock Test Simulators", "Legal GK Quizzes", "Performance Analytics", "Resource Library"],
    tags: ["Education", "Tool"],
    status: "ongoing",
  },
  {
    id: "itihaas",
    icon: Landmark,
    title: "7K Itihaas",
    description: "Explore the rich history of India through interactive timelines.",
    href: "https://7-k-itihaas.vercel.app/",
    image: "https://placehold.co/1200x800.png",
    imageHint: "ancient manuscripts scroll",
    longDescription: "7K Itihaas brings Indian history to life with detailed and interactive timelines. Discover the events, rulers, and cultures that have shaped the subcontinent over millennia.",
    features: ["Interactive Timelines", "Detailed Event Descriptions", "Dynasty and Era Guides", "Visual Historical Maps"],
    tags: ["Education", "Interactive"],
    status: "ongoing",
  },
  {
    id: "polyglot",
    icon: Languages,
    title: "7K Polyglot",
    description: "A fun and engaging way to expand your vocabulary in new languages.",
    href: "https://7-k-polyglot.vercel.app/",
    image: "https://placehold.co/1200x800.png",
    imageHint: "language learning flashcards",
    longDescription: "7K Polyglot is a language-learning companion designed to make vocabulary acquisition easy and enjoyable. Use flashcards, quizzes, and spaced repetition to master new words.",
    features: ["Flashcard Decks", "Spaced Repetition System", "Interactive Quizzes", "Multiple Language Support"],
    tags: ["Education", "Tool"],
    status: "ongoing",
  },
  {
    id: "stan-ai",
    icon: Bot,
    title: "Stan: AI Assistant",
    description: "An AI running on Android to provide assistance on the go.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "glowing circuit brain",
    longDescription: "Stan is an intelligent AI assistant integrated across the ecosystem. It's designed to automate tasks, provide timely information, and offer assistance contextually within other 7K apps, starting with Android.",
    features: ["Context-Aware Assistance", "Task Automation", "Cross-App Integration", "Natural Language Interface"],
    tags: ["AI", "Ecosystem", "Productivity"],
    status: "ongoing",
  },
  {
    id: "custom-launcher",
    icon: Grid,
    title: "Custom Launcher",
    description: "A minimal and productivity-focused Android launcher.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "minimalist phone homescreen",
    longDescription: "A minimalist Android launcher designed to reduce distractions and promote focus. It prioritizes essential apps and integrates with the 7K Life App to display your most important tasks and goals right on your home screen.",
    features: ["Minimalist Interface", "Focus Mode", "Task & Goal Integration", "Customizable Widgets"],
    tags: ["Productivity", "Tool"],
    status: "future",
  },
  {
    id: "ai-tools",
    icon: Sparkles,
    title: "Standalone AI Tools",
    description: "A suite of small, powerful AI utilities for specific tasks.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "collection small glowing tools",
    longDescription: "A collection of small, sharp, and powerful AI-driven utilities. Each tool is designed to solve a specific problem efficiently, such as a smart content summarizer, an idea generator, or an AI-powered text editor.",
    features: ["Task-Specific AI", "Lightweight & Fast", "API-First Design", "Interoperability"],
    tags: ["AI", "Tool", "Productivity"],
    status: "future",
  },
  {
    id: "smart-journal",
    icon: BookMarked,
    title: "Smart Journal App",
    description: "An intelligent journaling app with prompts and analysis.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "elegant digital journal",
    longDescription: "An intelligent journaling app that goes beyond simple note-taking. It uses AI to provide insightful prompts, analyze your entries for patterns and sentiments, and help you reflect on your personal growth journey.",
    features: ["AI-Powered Prompts", "Sentiment Analysis", "Goal-Oriented Journaling", "Secure & Private"],
    tags: ["AI", "Personal Growth"],
    status: "future",
  }
];

const allTags = ["All", ...Array.from(new Set(allProjects.flatMap(p => p.tags)))];

type Project = typeof allProjects[0];

const ProjectCard = ({ project }: { project: Project }) => {
    const { id, icon: Icon, title, description, href, image, imageHint, longDescription, features } = project;

    return (
        <Dialog>
            <DialogTrigger asChild>
                 <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-full"
                >
                    <Card className="h-full border shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary cursor-pointer">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <Icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                                <div>
                                    <CardTitle className="font-headline mb-1">{title}</CardTitle>
                                    <CardDescription>{description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6 bg-secondary flex items-center justify-center">
                        <Image src={image} alt={`${title} showcase`} width={200} height={200} objectFit="contain" data-ai-hint={imageHint} />
                    </div>
                    <DialogTitle className="font-headline text-3xl">{title}</DialogTitle>
                    <DialogDescription className="text-lg">
                        {longDescription}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2"><ListChecks className="text-primary"/> Key Features</h3>
                        <ul className="space-y-2">
                            {features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Star className="h-5 w-5 text-primary/80 mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        {id === 'law-prep' && (
                             <div>
                                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">Mini-Demo</h3>
                                <div className="p-4 border rounded-lg bg-background">
                                    <React.Suspense fallback={<div>Loading Demo...</div>}>
                                        <LawPrepQuiz />
                                    </React.Suspense>
                                </div>
                            </div>
                        )}
                       {href && (
                           <Button asChild className="w-full mt-auto">
                               <a href={href} target="_blank" rel="noopener noreferrer">
                                   Visit Site <ExternalLink className="ml-2" />
                               </a>
                           </Button>
                       )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [activeTag, setActiveTag] = useState('All');
  const [showAllApps, setShowAllApps] = useState(false);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
        const statusMatch = project.status === activeTab;
        const tagMatch = activeTag === 'All' || project.tags.includes(activeTag);
        return statusMatch && tagMatch;
    });
  }, [activeTab, activeTag]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up section-grid section-border-glow" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 section-header-glow">Explore the Ecosystem</h2>
          <p className="text-lg text-muted-foreground mb-12">
            A glimpse into what's currently being built and what the future holds. Filter by theme or click a card to learn more.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
            <div className="p-1 rounded-lg bg-muted flex items-center gap-1">
                 <Button 
                    variant={activeTab === 'ongoing' ? 'default' : 'ghost'} 
                    onClick={() => setActiveTab('ongoing')}
                    className="rounded-md"
                >
                    Ongoing
                </Button>
                <Button 
                    variant={activeTab === 'future' ? 'default' : 'ghost'} 
                    onClick={() => setActiveTab('future')}
                    className="rounded-md"
                >
                    Future Ideas
                </Button>
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map(tag => (
                <Button 
                    key={tag} 
                    variant={activeTag === tag ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTag(tag)}
                    className="rounded-full"
                >
                    {tag}
                </Button>
            ))}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map(proj => <ProjectCard key={proj.id} project={proj} />)}
            </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center py-16">
                <p className="text-muted-foreground">No projects match the current filter.</p>
            </div>
        )}
        
        {/* All Apps Collapsible Section */}
        <div className="mt-16">
          <Button
            variant="outline"
            size="lg"
            className="w-full flex items-center justify-center gap-2 text-lg"
            onClick={() => setShowAllApps(!showAllApps)}
          >
            {showAllApps ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            View All {appsData.length} Apps from the 7K Ecosystem
            {showAllApps ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
          
          <AnimatePresence>
            {showAllApps && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                  {appsData.map((app) => {
                    const IconComponent = getAppIcon(app.id);
                    return (
                    <Card key={app.id} className="group hover:shadow-lg transition-all">
                      <CardHeader className="pb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a href={app.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="w-full">
                            Visit <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

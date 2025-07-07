"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, Bot, GraduationCap, Grid, Sparkles, BookMarked, ExternalLink, ListChecks, Star } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ongoingProjects = [
  {
    icon: AppWindow,
    title: "7K Life App",
    description: "Core application for holistic life management and productivity.",
    href: "https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/",
    image: "https://placehold.co/1200x800.png",
    imageHint: "abstract dashboard ui",
    longDescription: "The 7K Life App is the cornerstone of the ecosystem. It's designed to be a central hub for your entire life, integrating task management, goal setting, habit tracking, and personal knowledge management into one seamless experience.",
    features: ["Holistic Task Management", "Integrated Goal & Habit Tracking", "Personal Knowledge Base", "Seamless Syncing"],
  },
  {
    icon: GraduationCap,
    title: "CLAT/MHCET Tools",
    description: "Web-based utilities and resources for law aspirants.",
    href: "https://7-klawprep.vercel.app/",
    image: "https://placehold.co/1200x800.png",
    imageHint: "legal books justice scale",
    longDescription: "A specialized suite of tools designed to help law aspirants prepare for competitive entrance exams like CLAT and MHCET. Features include mock tests, legal knowledge quizzes, and performance analytics.",
    features: ["Mock Test Simulators", "Legal GK Quizzes", "Performance Analytics", "Resource Library"],
  },
  {
    icon: Bot,
    title: "Stan: AI Assistant",
    description: "An AI running on Android to provide assistance on the go.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "glowing circuit brain",
    longDescription: "Stan is an intelligent AI assistant integrated across the ecosystem. It's designed to automate tasks, provide timely information, and offer assistance contextually within other 7K apps, starting with Android.",
    features: ["Context-Aware Assistance", "Task Automation", "Cross-App Integration", "Natural Language Interface"],
  },
];

const futureProjects = [
    {
        icon: Grid,
        title: "Custom Launcher",
        description: "A minimal and productivity-focused Android launcher.",
        image: "https://placehold.co/1200x800.png",
        imageHint: "minimalist phone homescreen",
        longDescription: "A minimalist Android launcher designed to reduce distractions and promote focus. It prioritizes essential apps and integrates with the 7K Life App to display your most important tasks and goals right on your home screen.",
        features: ["Minimalist Interface", "Focus Mode", "Task & Goal Integration", "Customizable Widgets"],
    },
    {
        icon: Sparkles,
        title: "Standalone AI Tools",
        description: "A suite of small, powerful AI utilities for specific tasks.",
        image: "https://placehold.co/1200x800.png",
        imageHint: "collection small glowing tools",
        longDescription: "A collection of small, sharp, and powerful AI-driven utilities. Each tool is designed to solve a specific problem efficiently, such as a smart content summarizer, an idea generator, or an AI-powered text editor.",
        features: ["Task-Specific AI", "Lightweight & Fast", "API-First Design", "Interoperability"],
    },
    {
        icon: BookMarked,
        title: "Smart Journal App",
        description: "An intelligent journaling app with prompts and analysis.",
        image: "https://placehold.co/1200x800.png",
        imageHint: "elegant digital journal",
        longDescription: "An intelligent journaling app that goes beyond simple note-taking. It uses AI to provide insightful prompts, analyze your entries for patterns and sentiments, and help you reflect on your personal growth journey.",
        features: ["AI-Powered Prompts", "Sentiment Analysis", "Goal-Oriented Journaling", "Secure & Private"],
    }
];

type Project = typeof ongoingProjects[0];

const ProjectCard = ({ project }: { project: Project }) => {
    const { icon: Icon, title, description, href, image, imageHint, longDescription, features } = project;

    return (
        <Dialog>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
                        <Image src={image} alt={`${title} showcase`} layout="fill" objectFit="cover" data-ai-hint={imageHint} />
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
                    <div className="flex flex-col justify-end">
                       {href && (
                           <Button asChild className="w-full">
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
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Prototypes & Ideas</h2>
          <p className="text-lg text-muted-foreground mb-12">
            A glimpse into what's currently being built and what the future holds for the 7K Ecosystem. Click a card to learn more.
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
            <TabsTrigger value="ongoing" className="text-md">Ongoing</TabsTrigger>
            <TabsTrigger value="future" className="text-md">Future Ideas</TabsTrigger>
          </TabsList>
          <TabsContent value="ongoing">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ongoingProjects.map(proj => <ProjectCard key={proj.title} project={proj} />)}
              </div>
          </TabsContent>
          <TabsContent value="future">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {futureProjects.map(proj => <ProjectCard key={proj.title} project={proj} />)}
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;

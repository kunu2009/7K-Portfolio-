
"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: "life-app",
    title: "7K Life App",
    description: "Core application for holistic life management and productivity. A central hub for tasks, goals, and personal knowledge.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "abstract dashboard ui",
    color: "hsl(217.2 91.2% 59.8%)",
  },
  {
    id: "law-prep",
    title: "7KLawPrep",
    description: "Web-based utilities and resources for law aspirants, featuring mock tests and performance analytics.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "legal books justice scale",
    color: "hsl(25 95% 53%)",
  },
  {
    id: "stan-ai",
    title: "Stan: AI Assistant",
    description: "An AI running on Android to provide assistance on the go, integrated across the 7K ecosystem.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "glowing circuit brain",
    color: "hsl(142.1 76.2% 47.1%)",
  },
  {
    id: "smart-journal",
    title: "Smart Journal App",
    description: "An intelligent journaling app with AI-powered prompts, sentiment analysis, and goal-oriented features.",
    image: "https://placehold.co/1200x800.png",
    imageHint: "elegant digital journal",
    color: "hsl(324.7 93.9% 65.9%)",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function SliderPage() {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIndex = ((page % projects.length) + projects.length) % projects.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[projectIndex];

  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentProject.color}40 0%, transparent 70%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        />
        <motion.div
          key={page + '_content'}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute flex flex-col md:flex-row items-center justify-center w-full h-full p-8 gap-8"
        >
            <div className="md:w-1/2 flex justify-center p-4">
                 <div className="relative w-full max-w-lg aspect-video rounded-xl shadow-2xl overflow-hidden">
                    <Image 
                        src={currentProject.image}
                        alt={currentProject.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={currentProject.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </div>
            <div className="md:w-1/2 max-w-lg text-center md:text-left">
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4" style={{ color: currentProject.color }}>
                    {currentProject.title}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    {currentProject.description}
                </p>
            </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-5 left-5 z-20">
        <Button asChild variant="secondary" className="rounded-full">
            <Link href="/">
                <ArrowLeft className="mr-2" /> Back to Selection
            </Link>
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-5 z-20">
        <Button size="icon" variant="secondary" className="rounded-full h-12 w-12" onClick={() => paginate(-1)}>
          <ChevronLeft />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 z-20">
        <Button size="icon" variant="secondary" className="rounded-full h-12 w-12" onClick={() => paginate(1)}>
          <ChevronRight />
        </Button>
      </div>
       <div className="absolute bottom-8 flex justify-center gap-3 z-20">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > projectIndex ? 1 : -1])}
            className={cn(
                "h-2 w-2 rounded-full cursor-pointer transition-all",
                i === projectIndex ? 'w-6 bg-white' : 'bg-neutral-600 hover:bg-neutral-400'
            )}
            style={{
                backgroundColor: i === projectIndex ? currentProject.color : undefined
            }}
          />
        ))}
      </div>
    </div>
  );
}

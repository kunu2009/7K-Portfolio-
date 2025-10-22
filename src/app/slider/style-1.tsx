"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    title: "Full Stack Developer",
    subtitle: "Building the 7K Ecosystem",
    description: "Creating innovative web and mobile applications with modern technologies",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    emoji: "💻"
  },
  {
    title: "7K Life",
    subtitle: "Productivity & Life Management",
    description: "All-in-one app for habits, tasks, goals, and personal growth tracking",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    emoji: "🌟"
  },
  {
    title: "7K Money",
    subtitle: "Finance Tracker",
    description: "Smart expense tracking and budget management for personal finance",
    gradient: "from-yellow-600 via-orange-600 to-red-600",
    emoji: "💰"
  },
  {
    title: "7K Games",
    subtitle: "Gaming & Entertainment",
    description: "Collection of fun and engaging games for all ages",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    emoji: "🎮"
  },
];

export default function SliderStyle1() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient}`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-9xl mb-8"
            >
              {slides[current].emoji}
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center max-w-4xl"
            >
              <p className="text-xl md:text-2xl text-white/80 mb-4 font-light tracking-wide">
                {slides[current].subtitle}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {slides[current].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-4"
            >
              <Link href="/#projects">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-lg">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-6 text-lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group"
            >
              <Circle
                className={`h-3 w-3 transition-all ${
                  i === current
                    ? "fill-white text-white scale-125"
                    : "fill-white/30 text-white/30 hover:fill-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-8 z-20 text-white font-mono text-xl">
        <span className="text-4xl font-bold">{(current + 1).toString().padStart(2, '0')}</span>
        <span className="text-white/50"> / {slides.length.toString().padStart(2, '0')}</span>
      </div>

      {/* Back Button */}
      <Link href="/" className="absolute top-8 left-8 z-20">
        <Button variant="ghost" className="text-white hover:bg-white/20">
          ← Back
        </Button>
      </Link>
    </div>
  );
}

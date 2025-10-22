"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Developer",
    subtitle: "Crafting Digital Experiences",
    text: "Building innovative solutions with modern web technologies",
    image: "🚀",
    theme: "from-purple-900 to-indigo-900"
  },
  {
    id: 2,
    title: "Creator",
    subtitle: "7K Ecosystem",
    text: "A suite of 8+ interconnected applications for productivity and lifestyle",
    image: "🌟",
    theme: "from-blue-900 to-cyan-900"
  },
  {
    id: 3,
    title: "Student",
    subtitle: "Learning & Growing",
    text: "12th grade student passionate about technology and innovation",
    image: "📚",
    theme: "from-green-900 to-emerald-900"
  },
  {
    id: 4,
    title: "Innovator",
    subtitle: "Building the Future",
    text: "Turning ideas into reality with code, creativity, and determination",
    image: "💡",
    theme: "from-orange-900 to-red-900"
  }
];

export default function SliderStyle3() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentSlide = slides[current];

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentSlide.theme}`}
        />
      </AnimatePresence>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="max-w-6xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              {/* Image/Emoji */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-9xl md:text-[12rem] mb-8 filter drop-shadow-2xl"
              >
                {currentSlide.image}
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-white/70 mb-4 tracking-[0.3em] uppercase font-light"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter"
                style={{
                  textShadow: "0 0 40px rgba(255,255,255,0.3)"
                }}
              >
                {currentSlide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                {currentSlide.text}
              </motion.p>

              {/* CTA - Only on last slide */}
              {current === slides.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 justify-center"
                >
                  <Link href="/#contact">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-10 py-7 text-lg">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/#projects">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-10 py-7 text-lg">
                      View Work
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-12 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
        >
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Number */}
      <div className="absolute top-12 right-12 z-20 text-white/50 font-mono text-sm">
        {(current + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}
      </div>

      {/* Home Link */}
      <Link href="/" className="absolute top-12 left-12 z-20">
        <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
          ← Back to Portfolio
        </Button>
      </Link>
    </div>
  );
}

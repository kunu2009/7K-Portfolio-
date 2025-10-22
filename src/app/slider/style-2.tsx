"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    title: "Kunal Chheda",
    role: "Full Stack Developer",
    description: "12th grade student building the 7K Ecosystem - a collection of 8+ innovative applications",
    skills: ["React", "Next.js", "TypeScript", "Python", "Firebase"],
    color: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    title: "Technical Skills",
    role: "Polyglot Developer",
    description: "Proficient in multiple programming languages and frameworks for web, mobile, and AI development",
    skills: ["Frontend", "Backend", "Mobile", "AI/ML", "DevOps"],
    color: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500"
  },
  {
    title: "7K Ecosystem",
    role: "Product Suite",
    description: "Building interconnected apps for productivity, finance, gaming, learning, and lifestyle",
    skills: ["7K Life", "7K Money", "7K Games", "7K English", "7K Law"],
    color: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500"
  },
  {
    title: "Let's Connect",
    role: "Open for Opportunities",
    description: "Available for freelance projects, collaborations, and exciting development opportunities",
    skills: ["Freelance", "Collaboration", "Innovation", "Growth", "Impact"],
    color: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"
  }
];

export default function SliderStyle2() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current + newDirection + slides.length) % slides.length);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <div className={`h-full w-full ${slides[current].color} flex items-center justify-center`}>
            <div className="max-w-5xl mx-auto px-8 text-white">
              {/* Slide Number */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-mono mb-4 text-white/70"
              >
                [{(current + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}]
              </motion.div>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-light mb-4 text-white/90"
              >
                {slides[current].role}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl font-black mb-8 leading-none"
              >
                {slides[current].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl mb-8 max-w-2xl text-white/90 leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {slides[current].skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              {current === slides.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4"
                >
                  <Link href="/#contact">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6">
                      Contact Me
                    </Button>
                  </Link>
                  <Link href="/#projects">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-6">
                      View Projects
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <ArrowLeft className="h-8 w-8" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <ArrowRight className="h-8 w-8" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Home Button */}
      <Link href="/" className="absolute top-8 left-8 z-20">
        <Button variant="ghost" className="text-white hover:bg-white/20">
          ← Home
        </Button>
      </Link>
    </div>
  );
}

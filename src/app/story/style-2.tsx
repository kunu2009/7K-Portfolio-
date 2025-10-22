"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoryStyle1() {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);

  const stories = [
    {
      bg: "from-purple-600 to-pink-600",
      emoji: "👋",
      title: "Hello!",
      text: "I'm Kunal Chheda",
      subtitle: "Full Stack Developer",
    },
    {
      bg: "from-blue-600 to-cyan-600",
      emoji: "💻",
      title: "Developer",
      text: "Building amazing web experiences",
      subtitle: "React • Next.js • TypeScript",
    },
    {
      bg: "from-green-600 to-emerald-600",
      emoji: "🚀",
      title: "Projects",
      text: "7K Ecosystem",
      subtitle: "Life • Money • Games • More",
    },
    {
      bg: "from-orange-600 to-red-600",
      emoji: "⚡",
      title: "Skills",
      text: "Full Stack Development",
      subtitle: "Frontend • Backend • Mobile",
    },
    {
      bg: "from-indigo-600 to-purple-600",
      emoji: "📧",
      title: "Let's Connect!",
      text: "7kmindbeatss@gmail.com",
      subtitle: "Available for opportunities",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStory((curr) => (curr + 1) % stories.length);
          return 0;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentStory((curr) => (curr + 1) % stories.length);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentStory((curr) => (curr - 1 + stories.length) % stories.length);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-md aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-4">
          {stories.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{
                  width: index < currentStory ? "100%" : index === currentStory ? `${progress}%` : "0%",
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          ))}
        </div>

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-br ${stories[currentStory].bg} flex flex-col items-center justify-center p-8`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-9xl mb-8"
            >
              {stories[currentStory].emoji}
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              {stories[currentStory].title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-2 text-center"
            >
              {stories[currentStory].text}
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-white/70 text-center"
            >
              {stories[currentStory].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-0 bottom-0 w-1/3 z-10 cursor-pointer"
          aria-label="Previous story"
        />
        <button
          onClick={goToNext}
          className="absolute right-0 top-0 bottom-0 w-2/3 z-10 cursor-pointer"
          aria-label="Next story"
        />

        {/* Story Counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentStory + 1} / {stories.length}
          </div>
        </div>
      </div>
    </div>
  );
}

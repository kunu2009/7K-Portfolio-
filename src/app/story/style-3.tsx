"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Book } from "lucide-react";

export default function StoryStyle2() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      number: "Chapter 1",
      title: "The Beginning",
      content: "Once upon a time, there was a curious mind fascinated by the world of technology. That's me - Chaitanya Hedaoo, a developer on a journey to create meaningful digital experiences.",
      image: "👨‍💻",
      color: "from-blue-600 to-purple-600",
    },
    {
      number: "Chapter 2",
      title: "The Skills",
      content: "Through countless hours of learning and building, I mastered the art of modern web development. React, Next.js, TypeScript, and a whole arsenal of tools became my weapons of choice.",
      image: "⚡",
      color: "from-purple-600 to-pink-600",
    },
    {
      number: "Chapter 3",
      title: "The Projects",
      content: "The 7K Ecosystem was born - a collection of applications designed to make life easier. From life management to finance tracking, from gaming communities to unified platforms.",
      image: "🚀",
      color: "from-pink-600 to-red-600",
    },
    {
      number: "Chapter 4",
      title: "The Journey Continues",
      content: "But this story isn't over. Every day brings new challenges, new learnings, and new opportunities to create something amazing. The best chapters are yet to be written.",
      image: "🌟",
      color: "from-orange-600 to-yellow-600",
    },
    {
      number: "Chapter 5",
      title: "Your Chapter",
      content: "And this is where you come in. Let's write the next chapter together. Whether it's a project, collaboration, or just a conversation - I'm excited to see where our story leads.",
      image: "🤝",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Book Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg mb-4">
            <Book className="h-6 w-6 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              The Developer's Tale
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">A story of code, creativity, and continuous learning</p>
        </motion.div>

        {/* Chapter Selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setCurrentChapter(index)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                currentChapter === index
                  ? "bg-amber-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {chapter.number}
            </button>
          ))}
        </div>

        {/* Chapter Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Book Page */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Page Header with Gradient */}
              <div className={`bg-gradient-to-r ${chapters[currentChapter].color} p-8 text-white`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-7xl mb-4 text-center"
                >
                  {chapters[currentChapter].image}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm opacity-80 mb-2"
                >
                  {chapters[currentChapter].number}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-bold"
                >
                  {chapters[currentChapter].title}
                </motion.h2>
              </div>

              {/* Page Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-8"
              >
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-serif">
                  {chapters[currentChapter].content}
                </p>

                {/* Special content for last chapter */}
                {currentChapter === chapters.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"
                  >
                    <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-white">Let's Connect</h3>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <div>📧 chaitanyahedaoo7@gmail.com</div>
                      <div>🌐 7kc.me</div>
                      <div>💻 github.com/chaitanyahedaoo</div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation hint */}
                <div className="mt-8 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Page {currentChapter + 1} of {chapters.length}</span>
                  {currentChapter < chapters.length - 1 && (
                    <button
                      onClick={() => setCurrentChapter(currentChapter + 1)}
                      className="flex items-center gap-1 hover:text-amber-600 transition-colors"
                    >
                      Next Chapter <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Page Number */}
            <div className="text-center mt-4 text-gray-400 dark:text-gray-600 text-sm font-serif">
              — {currentChapter + 1} —
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

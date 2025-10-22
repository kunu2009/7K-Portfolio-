"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function StoryStyle3() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    {
      id: "intro",
      title: "2020",
      subtitle: "The Spark",
      content: "It all started with a simple 'Hello World'. A fascination with code that would turn into a passion.",
      emoji: "✨",
      color: "from-blue-900 to-blue-700",
    },
    {
      id: "learning",
      title: "2021",
      subtitle: "The Learning",
      content: "Diving deep into web development. HTML, CSS, JavaScript - building blocks of the web became second nature.",
      emoji: "📚",
      color: "from-purple-900 to-purple-700",
    },
    {
      id: "growth",
      title: "2022",
      subtitle: "The Growth",
      content: "React, Next.js, TypeScript. The stack expanded, the projects got bigger, and the skills sharpened.",
      emoji: "🚀",
      color: "from-pink-900 to-pink-700",
    },
    {
      id: "creation",
      title: "2023",
      subtitle: "The Creation",
      content: "7K Ecosystem took shape. Multiple apps, thousands of users, real-world impact. Dreams becoming reality.",
      emoji: "⚡",
      color: "from-orange-900 to-orange-700",
    },
    {
      id: "present",
      title: "2024",
      subtitle: "The Present",
      content: "Mastering full-stack development. Building scalable systems. Creating experiences that matter.",
      emoji: "💎",
      color: "from-green-900 to-green-700",
    },
    {
      id: "future",
      title: "2025+",
      subtitle: "The Future",
      content: "The journey continues. New technologies. Bigger challenges. Endless possibilities. Let's build something amazing together.",
      emoji: "🌟",
      color: "from-indigo-900 to-indigo-700",
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Timeline Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="group relative flex items-center gap-3"
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all ${
              scrollProgress >= (index * 100) / sections.length && scrollProgress < ((index + 1) * 100) / sections.length
                ? "bg-white border-white scale-150"
                : "bg-transparent border-gray-600 hover:border-white"
            }`} />
            <span className="absolute left-6 whitespace-nowrap text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {section.title}
            </span>
          </button>
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center relative bg-gradient-to-br ${section.color}`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                 radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Emoji */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-9xl mb-8"
              >
                {section.emoji}
              </motion.div>

              {/* Year */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-6xl md:text-8xl font-bold mb-4"
              >
                {section.title}
              </motion.div>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
              >
                {section.subtitle}
              </motion.h2>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
              >
                {section.content}
              </motion.p>

              {/* Contact on last section */}
              {index === sections.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 flex flex-col gap-4"
                >
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="mailto:chaitanyahedaoo7@gmail.com"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white transition-all"
                    >
                      📧 Email Me
                    </a>
                    <a
                      href="https://7kc.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white transition-all"
                    >
                      🌐 Visit Portfolio
                    </a>
                    <a
                      href="https://github.com/chaitanyahedaoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white transition-all"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Scroll indicator */}
            {index < sections.length - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                onClick={() => scrollToSection(index + 1)}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
              >
                <ChevronDown className="h-8 w-8 animate-bounce" />
              </motion.button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

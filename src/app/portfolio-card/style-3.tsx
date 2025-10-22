"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioCardStyle2() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "About",
      emoji: "👋",
      gradient: "from-purple-500 to-pink-500",
      content: "Hi! I'm Chaitanya, a full-stack developer passionate about creating beautiful, functional web applications.",
    },
    {
      title: "Skills",
      emoji: "⚡",
      gradient: "from-blue-500 to-cyan-500",
      content: "React • Next.js • TypeScript • Node.js • Python • Firebase • Tailwind CSS • Modern Web Stack",
    },
    {
      title: "Projects",
      emoji: "🚀",
      gradient: "from-green-500 to-emerald-500",
      content: "7K Life, 7K Money, 7K Game Hub - Building the 7K Ecosystem of productivity apps",
    },
    {
      title: "Experience",
      emoji: "💼",
      gradient: "from-orange-500 to-red-500",
      content: "3+ years of development experience. Computer Science student. Available for opportunities.",
    },
    {
      title: "Contact",
      emoji: "📧",
      gradient: "from-indigo-500 to-purple-500",
      content: "chaitanyahedaoo7@gmail.com • 7kc.me • github.com/chaitanyahedaoo",
    },
    {
      title: "Passion",
      emoji: "❤️",
      gradient: "from-pink-500 to-rose-500",
      content: "Creating technology that makes a difference. Building tools that help people in their daily lives.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4">
            Chaitanya Hedaoo
          </h1>
          <p className="text-xl text-gray-400">Full Stack Developer • Creative Coder • Problem Solver</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${card.gradient} rounded-2xl p-1 h-full`}>
                <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col">
                  {/* Emoji */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.2 : 1,
                      rotate: hoveredCard === index ? 10 : 0,
                    }}
                    className="text-6xl mb-4"
                  >
                    {card.emoji}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>

                  {/* Content */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {card.content}
                  </p>

                  {/* Hover Effect Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 rounded-2xl`}
                    animate={{
                      opacity: hoveredCard === index ? 0.1 : 0,
                    }}
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl -z-10`}
                animate={{
                  opacity: hoveredCard === index ? 0.5 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex gap-4">
            <a
              href="mailto:chaitanyahedaoo7@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
            <a
              href="https://7kc.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all border border-white/20"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalaksiStyle2() {
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const planets = [
    {
      name: "Earth",
      subtitle: "Home Base",
      emoji: "🌍",
      gradient: "from-blue-600 via-green-500 to-blue-400",
      content: {
        title: "About Me",
        text: "Chaitanya Hedaoo - A Full Stack Developer navigating the cosmos of code. From web applications to mobile apps, exploring every corner of the digital universe.",
      },
    },
    {
      name: "Mercury",
      subtitle: "Speed & Agility",
      emoji: "☿️",
      gradient: "from-gray-600 via-gray-400 to-gray-500",
      content: {
        title: "Frontend Skills",
        text: "React ⚛️ • Next.js ▲ • TypeScript 📘 • Tailwind CSS 🎨 • Framer Motion 🎭 • Building fast, responsive, and beautiful interfaces",
      },
    },
    {
      name: "Mars",
      subtitle: "Backend Power",
      emoji: "🔴",
      gradient: "from-red-700 via-orange-600 to-red-500",
      content: {
        title: "Backend Skills",
        text: "Node.js 🟢 • Python 🐍 • Firebase 🔥 • PostgreSQL 🐘 • RESTful APIs • Database Design • Server Architecture",
      },
    },
    {
      name: "Jupiter",
      subtitle: "Giant Projects",
      emoji: "🪐",
      gradient: "from-orange-400 via-yellow-300 to-orange-500",
      content: {
        title: "7K Ecosystem",
        text: "7K Life 🌱 • 7K Money 💰 • 7K Game Hub 🎮 • 7K Ecosystem 🚀 - A constellation of applications serving thousands of users",
      },
    },
    {
      name: "Saturn",
      subtitle: "Rings of Skills",
      emoji: "🪐",
      gradient: "from-yellow-600 via-amber-400 to-yellow-500",
      content: {
        title: "Tools & Technologies",
        text: "Git & GitHub • Docker • VS Code • Figma • Vercel • AWS • CI/CD • Agile Development • Version Control",
      },
    },
    {
      name: "Neptune",
      subtitle: "Deep Connection",
      emoji: "🔵",
      gradient: "from-blue-800 via-blue-600 to-cyan-500",
      content: {
        title: "Let's Connect",
        text: "📧 chaitanyahedaoo7@gmail.com • 🌐 7kc.me • 💻 github.com/chaitanyahedaoo • Ready for new opportunities and collaborations!",
      },
    },
  ];

  const nextPlanet = () => setCurrentPlanet((prev) => (prev + 1) % planets.length);
  const prevPlanet = () => setCurrentPlanet((prev) => (prev - 1 + planets.length) % planets.length);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Starfield */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlanet}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Planet */}
            <motion.div
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${planets[currentPlanet].gradient} shadow-2xl mb-8 flex items-center justify-center text-9xl relative`}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {planets[currentPlanet].emoji}
              </motion.div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${planets[currentPlanet].gradient} opacity-50 blur-3xl -z-10 scale-110`} />
            </motion.div>

            {/* Planet Name */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 text-center">
              {planets[currentPlanet].name}
            </h2>
            <p className="text-xl text-white/60 mb-8">{planets[currentPlanet].subtitle}</p>

            {/* Content Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">{planets[currentPlanet].content.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed">{planets[currentPlanet].content.text}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevPlanet}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full text-white transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Planet Indicators */}
              <div className="flex gap-2">
                {planets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPlanet(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPlanet ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPlanet}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full text-white transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Planet Counter */}
            <div className="mt-6 text-white/40 text-sm">
              Planet {currentPlanet + 1} of {planets.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GalaksiStyle1() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  const planets = [
    {
      name: "About Me",
      icon: "🌍",
      color: "from-blue-600 to-cyan-500",
      size: "w-32 h-32",
      position: "top-1/4 left-1/4",
      content: "Full Stack Developer exploring the digital universe. Passionate about creating stellar web experiences.",
    },
    {
      name: "Skills",
      icon: "⚡",
      color: "from-purple-600 to-pink-500",
      size: "w-28 h-28",
      position: "top-1/3 right-1/4",
      content: "React • Next.js • TypeScript • Node.js • Python • Firebase • Tailwind CSS",
    },
    {
      name: "Projects",
      icon: "🚀",
      color: "from-orange-600 to-red-500",
      size: "w-36 h-36",
      position: "bottom-1/4 left-1/3",
      content: "7K Life • 7K Money • 7K Game Hub • 7K Ecosystem - A constellation of applications",
    },
    {
      name: "Contact",
      icon: "📡",
      color: "from-green-600 to-emerald-500",
      size: "w-24 h-24",
      position: "bottom-1/3 right-1/3",
      content: "📧 7kmindbeatss@gmail.com • 🌐 7kc.me • 💻 github.com/kunu2009",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Stars Background */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Center Sun (Portfolio Title) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl shadow-orange-500/50 flex items-center justify-center">
            <div className="text-center">
            <div className="text-5xl mb-2">☀️</div>
            <div className="text-white font-bold text-lg">Kunal Chheda</div>
            <div className="text-white/80 text-sm">Developer</div>
            </div>
          </div>
          {/* Sun Rays */}
          <div className="absolute inset-0 -z-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-t from-transparent to-yellow-400/50"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Planets (Content Sections) */}
      {planets.map((planet, index) => (
        <motion.div
          key={planet.name}
          className={`absolute ${planet.position} cursor-pointer`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setSelectedPlanet(selectedPlanet === index ? null : index)}
        >
          <div className={`${planet.size} rounded-full bg-gradient-to-br ${planet.color} shadow-2xl flex items-center justify-center text-6xl relative`}>
            {planet.icon}
            {/* Orbit Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110" />
          </div>
          <div className="text-center mt-2 text-white font-medium">{planet.name}</div>
        </motion.div>
      ))}

      {/* Planet Info Modal */}
      {selectedPlanet !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlanet(null)}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className={`bg-gradient-to-br ${planets[selectedPlanet].color} rounded-3xl p-8 max-w-lg w-full shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{planets[selectedPlanet].icon}</div>
              <h2 className="text-4xl font-bold text-white mb-4">{planets[selectedPlanet].name}</h2>
            </div>
            <p className="text-white/90 text-lg leading-relaxed text-center">
              {planets[selectedPlanet].content}
            </p>
            <button
              onClick={() => setSelectedPlanet(null)}
              className="mt-6 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 rounded-xl font-medium transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click on planets to explore 🪐
        </motion.div>
      </div>
    </div>
  );
}

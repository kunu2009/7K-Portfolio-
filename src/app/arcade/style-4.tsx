"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Swords, Shield, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArcadeStyle3() {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const characters = [
    {
      name: "FRONTEND WARRIOR",
      avatar: "⚔️",
      color: "from-blue-500 to-cyan-500",
      stats: { attack: 95, defense: 80, speed: 90 },
      special: "React Slash"
    },
    {
      name: "BACKEND MAGE",
      avatar: "🔮",
      color: "from-purple-500 to-pink-500",
      stats: { attack: 85, defense: 90, speed: 75 },
      special: "Node.js Fireball"
    },
    {
      name: "FULLSTACK HERO",
      avatar: "🛡️",
      color: "from-green-500 to-emerald-500",
      stats: { attack: 90, defense: 95, speed: 85 },
      special: "Ultimate Deploy"
    },
  ];

  const current = characters[selectedCharacter];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Battle Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 border-2 border-red-500 text-red-500 hover:bg-red-500/10">
            <ArrowLeft className="mr-2" />
            Retreat
          </Button>
        </Link>

        {/* Character Select Screen */}
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-6xl font-black text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            SELECT YOUR CLASS
          </motion.h1>

          {/* Characters */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {characters.map((char, i) => (
              <motion.button
                key={char.name}
                onClick={() => setSelectedCharacter(i)}
                className={`relative p-8 rounded-2xl border-4 transition-all ${
                  selectedCharacter === i
                    ? 'border-yellow-400 scale-105'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${char.color} opacity-20 rounded-2xl`} />
                
                <div className="relative">
                  <div className="text-8xl mb-4">{char.avatar}</div>
                  <h3 className="font-black text-white text-xl mb-4">{char.name}</h3>
                  
                  {/* Stats */}
                  <div className="space-y-2 text-left">
                    {Object.entries(char.stats).map(([stat, value]) => (
                      <div key={stat}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-400 uppercase">{stat}</span>
                          <span className="text-yellow-400 font-bold">{value}</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${char.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedCharacter === i && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                  >
                    SELECTED
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Character Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCharacter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`bg-gradient-to-br ${current.color} p-8 rounded-2xl border-4 border-white`}
            >
              <div className="flex items-center justify-between text-white">
                <div>
                  <h2 className="text-4xl font-black mb-2">{current.name}</h2>
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Flame className="h-5 w-5" />
                    <span className="font-bold">SPECIAL: {current.special}</span>
                  </div>
                </div>
                
                <div className="text-9xl">{current.avatar}</div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Link href="/#projects" className="flex-1">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-black text-xl py-6">
                    <Swords className="mr-2" />
                    ENTER BATTLE
                  </Button>
                </Link>
                <Link href="/#contact" className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/20 font-black text-xl py-6">
                    <Shield className="mr-2" />
                    RECRUIT ME
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Press Start */}
        <motion.div
          className="text-center mt-12 text-white font-mono text-xl"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ▼ PRESS START TO CONTINUE ▼
        </motion.div>
      </div>
    </div>
  );
}

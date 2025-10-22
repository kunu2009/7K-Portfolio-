"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Heart, Coins, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ArcadeStyle2() {
  const [lives, setLives] = useState(3);
  const [coins, setCoins] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);

  const projects = [
    { name: "7K Life App", emoji: "💎", difficulty: "Easy" },
    { name: "7K Money Tracker", emoji: "💰", difficulty: "Medium" },
    { name: "7K Game Hub", emoji: "🎮", difficulty: "Hard" },
    { name: "7K Ecosystem", emoji: "🌟", difficulty: "Boss" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Pixel Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, #1a1a1a 0px, #1a1a1a 20px, transparent 20px, transparent 40px),
          repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 20px, transparent 20px, transparent 40px)
        `
      }} />

      {/* Arcade Cabinet Frame */}
      <div className="relative z-10 max-w-4xl mx-auto py-8 px-4">
        <div className="bg-gradient-to-b from-red-600 via-red-700 to-red-900 p-8 rounded-3xl border-8 border-yellow-500 shadow-2xl">
          {/* Screen */}
          <div className="bg-black p-4 rounded-lg border-4 border-gray-700 shadow-inner mb-6">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-6 bg-blue-900 p-3 rounded font-mono text-yellow-400 border-2 border-blue-500">
              <div className="flex gap-2 items-center">
                <span className="text-white font-bold">LEVEL</span>
                <span className="text-2xl font-black">{currentLevel}</span>
              </div>
              
              <div className="flex gap-1">
                {[...Array(lives)].map((_, i) => (
                  <Heart key={i} className="h-6 w-6 fill-red-500 text-red-500" />
                ))}
              </div>
              
              <div className="flex gap-2 items-center">
                <Coins className="h-5 w-5 text-yellow-400" />
                <span className="text-2xl font-black">{coins}</span>
              </div>
            </div>

            {/* Main Character */}
            <motion.div
              className="text-center mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="text-9xl mb-4">🧑‍💻</div>
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 inline-block px-8 py-3 rounded-full border-4 border-white">
                <h1 className="text-3xl font-black text-white">KUNAL</h1>
              </div>
            </motion.div>

            {/* Level Select / Projects */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {projects.map((project, i) => (
                <motion.button
                  key={project.name}
                  onClick={() => setCoins(coins + 10)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl border-4 border-yellow-400 hover:border-green-400 transition-all"
                >
                  <div className="text-5xl mb-2">{project.emoji}</div>
                  <div className="font-bold text-white text-sm mb-1">{project.name}</div>
                  <div className="text-xs text-yellow-300 font-mono">{project.difficulty}</div>
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Link href="/#projects">
                <Button className="bg-green-500 hover:bg-green-600 text-white font-black text-xl px-8 py-6 rounded-full border-4 border-white shadow-lg">
                  START GAME
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="bg-red-500 hover:bg-red-600 text-white font-black text-xl px-8 py-6 rounded-full border-4 border-white">
                  <ArrowLeft className="mr-2" />
                  EXIT
                </Button>
              </Link>
            </div>
          </div>

          {/* Control Panel */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-yellow-500 h-16 rounded-full border-4 border-yellow-700 shadow-inner flex items-center justify-center">
              <Star className="h-8 w-8 text-yellow-900" />
            </div>
            <div className="bg-red-500 h-16 rounded-full border-4 border-red-700 shadow-inner" />
            <div className="bg-blue-500 h-16 rounded-full border-4 border-blue-700 shadow-inner" />
          </div>
        </div>

        {/* INSERT COIN Message */}
        <motion.div
          className="text-center mt-8 font-mono text-yellow-400 text-2xl font-bold"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ▼ INSERT SKILL ▼
        </motion.div>
      </div>
    </div>
  );
}

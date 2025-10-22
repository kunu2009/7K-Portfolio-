"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, Gamepad2, Star, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ArcadeStyle1() {
  const [score, setScore] = useState(0);
  const [powerUps, setPowerUps] = useState(3);

  const skills = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "TypeScript", level: 88, color: "from-blue-500 to-indigo-500" },
    { name: "Python", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Firebase", level: 82, color: "from-orange-500 to-red-500" },
  ];

  const achievements = [
    { icon: Trophy, name: "Code Master", desc: "Completed 50+ projects" },
    { icon: Star, name: "Full Stack Hero", desc: "Mastered both frontend & backend" },
    { icon: Zap, name: "Speed Coder", desc: "Built app in 24 hours" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white overflow-hidden relative">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.1)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Floating pixels */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400"
          initial={{ x: Math.random() * window.innerWidth, y: -20 }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Score */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
              <ArrowLeft className="h-4 w-4" />
              Exit Game
            </Button>
          </Link>
          
          <div className="flex gap-4 items-center">
            <div className="bg-black/50 border-2 border-yellow-400 px-6 py-2 font-mono text-2xl">
              SCORE: {score.toString().padStart(6, '0')}
            </div>
            <div className="flex gap-1">
              {[...Array(powerUps)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Player Card */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-4 border-cyan-400 p-8">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-6xl border-4 border-white animate-pulse">
                🎮
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-black text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}>
                    KUNAL CHHEDA
                  </h1>
                  <Badge className="bg-yellow-400 text-black text-lg px-3 py-1 font-bold">
                    LVL 99
                  </Badge>
                </div>
                <p className="text-cyan-300 text-xl font-bold mb-4">
                  ⚡ FULL STACK DEVELOPER • GAME CREATOR • CODE WIZARD
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/kunu2009" },
                    { icon: Linkedin, href: "https://linkedin.com/in/kunal-chheda" },
                    { icon: Mail, href: "mailto:7kmindbeatss@gmail.com" }
                  ].map((social, i) => (
                    <Link key={i} href={social.href} target="_blank">
                      <Button size="icon" className="bg-black/50 border-2 border-cyan-400 hover:bg-cyan-400/20">
                        <social.icon className="h-5 w-5 text-cyan-400" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills as Power Bars */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-4 text-yellow-400" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}>
            ⚡ SKILL STATS
          </h2>
          <div className="grid gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/50 border-2 border-cyan-400 p-4 rounded"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-cyan-400">{skill.name}</span>
                  <span className="font-mono text-yellow-400">{skill.level}%</span>
                </div>
                <div className="h-6 bg-gray-800 rounded overflow-hidden border-2 border-gray-600">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-black mb-4 text-yellow-400" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}>
            🏆 ACHIEVEMENTS UNLOCKED
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.name}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.2, type: "spring" }}
              >
                <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white p-6 text-black">
                  <achievement.icon className="h-12 w-12 mb-3 mx-auto" />
                  <h3 className="font-black text-lg mb-1 text-center">{achievement.name}</h3>
                  <p className="text-sm text-center font-semibold">{achievement.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

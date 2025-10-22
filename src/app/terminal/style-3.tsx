"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalStyle2() {
  const [activeTab, setActiveTab] = useState("about");
  const [glitchText, setGlitchText] = useState("INITIALIZING");

  useEffect(() => {
    const texts = ["LOADING...", "CONNECTING...", "READY"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setGlitchText(texts[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: "about", label: "ABOUT.exe", icon: "👤" },
    { id: "skills", label: "SKILLS.dll", icon: "⚡" },
    { id: "projects", label: "PROJECTS.bat", icon: "🚀" },
    { id: "contact", label: "CONTACT.sys", icon: "📡" },
  ];

  const content = {
    about: {
      title: "// USER PROFILE //",
      lines: [
        "> NAME: Chaitanya Hedaoo",
        "> ROLE: Full Stack Developer",
        "> LOCATION: India",
        "> EXPERIENCE: Building innovative web solutions",
        "> STATUS: ███████████ 100% AVAILABLE",
        "",
        "> SPECIALIZATION:",
        "  → Modern Web Applications",
        "  → API Development & Integration",
        "  → Database Architecture",
        "  → UI/UX Implementation",
      ],
    },
    skills: {
      title: "// LOADED MODULES //",
      lines: [
        "> FRONTEND.dll",
        "  ▓▓▓▓▓▓▓▓▓▓ React.js",
        "  ▓▓▓▓▓▓▓▓▓▓ Next.js",
        "  ▓▓▓▓▓▓▓▓▓░ TypeScript",
        "  ▓▓▓▓▓▓▓▓▓▓ Tailwind CSS",
        "",
        "> BACKEND.dll",
        "  ▓▓▓▓▓▓▓▓▓░ Node.js",
        "  ▓▓▓▓▓▓▓▓░░ Python",
        "  ▓▓▓▓▓▓▓▓▓░ Firebase",
        "  ▓▓▓▓▓▓▓▓░░ PostgreSQL",
        "",
        "> TOOLS.exe",
        "  ✓ Git & GitHub",
        "  ✓ Docker",
        "  ✓ VS Code",
        "  ✓ Figma",
      ],
    },
    projects: {
      title: "// RUNNING PROCESSES //",
      lines: [
        "> PID: 7001  7K-Life        [███████░░░] 70% Complete",
        "> PID: 7002  7K-Money       [█████████░] 90% Complete",
        "> PID: 7003  7K-GameHub     [████████░░] 80% Complete",
        "> PID: 7004  7K-Ecosystem   [██████████] 100% Complete",
        "",
        "> FEATURES:",
        "  • Real-time data synchronization",
        "  • Responsive design across devices",
        "  • Optimized performance metrics",
        "  • Secure authentication systems",
        "",
        "> TECHNOLOGIES:",
        "  Next.js | React | Firebase | Tailwind",
      ],
    },
    contact: {
      title: "// CONNECTION PORTS //",
      lines: [
        "> ESTABLISHING CONNECTIONS...",
        "",
        "> PORT 443  [SECURE] Email",
        "  → chaitanyahedaoo7@gmail.com",
        "",
        "> PORT 80   [HTTP]   Portfolio",
        "  → https://7kc.me",
        "",
        "> PORT 22   [SSH]    GitHub",
        "  → github.com/chaitanyahedaoo",
        "",
        "> PORT 3000 [LOCAL]  WhatsApp",
        "  → +91 XXXXXXXXXX",
        "",
        "> STATUS: ████ ALL PORTS OPEN ████",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-pink-950 p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Glitch Header */}
        <motion.div
          className="text-center mb-8"
          animate={{
            textShadow: [
              "0 0 10px #ff00ff, 0 0 20px #ff00ff",
              "0 0 20px #00ffff, 0 0 40px #00ffff",
              "0 0 10px #ff00ff, 0 0 20px #ff00ff",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-mono">
            {glitchText}
          </div>
        </motion.div>

        {/* Terminal Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-mono text-sm border-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-black/50 border-purple-500/30 text-purple-300 hover:border-purple-400"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="bg-black/80 backdrop-blur-xl border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b-2 border-cyan-500/50 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></div>
              </div>
              <span className="text-cyan-400 text-sm font-mono tracking-wider">
                CYBERSPACE://PORTFOLIO/v2.0
              </span>
            </div>
            <div className="text-pink-400 text-xs font-mono animate-pulse">
              ⚡ ONLINE
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[500px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title */}
              <div className="text-cyan-400 text-xl md:text-2xl mb-6 font-bold border-b-2 border-cyan-500/30 pb-2">
                {content[activeTab as keyof typeof content].title}
              </div>

              {/* Content Lines */}
              {content[activeTab as keyof typeof content].lines.map(
                (line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`${
                      line === ""
                        ? "h-4"
                        : line.startsWith(">")
                        ? "text-pink-400 mb-2"
                        : line.startsWith("  ")
                        ? "text-purple-300 ml-4"
                        : "text-cyan-300"
                    }`}
                  >
                    {line}
                  </motion.div>
                )
              )}

              {/* Blinking Cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-3 h-5 bg-cyan-400 mt-4 shadow-lg shadow-cyan-500/50"
              />
            </motion.div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-t-2 border-cyan-500/50 px-6 py-2 flex items-center justify-between text-xs font-mono">
            <div className="text-cyan-400">NEURAL_LINK_ACTIVE</div>
            <div className="text-purple-400">
              UPTIME: {new Date().toLocaleTimeString()}
            </div>
            <div className="text-pink-400">ENCRYPTION: AES-256</div>
          </div>
        </div>
      </div>
    </div>
  );
}

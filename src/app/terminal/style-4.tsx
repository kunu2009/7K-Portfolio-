"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalStyle3() {
  const [matrixChars, setMatrixChars] = useState<
    Array<{ char: string; y: number; speed: number; column: number }>
  >([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [displayCommands, setDisplayCommands] = useState<string[]>([]);

  // Matrix rain effect
  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
    const columns = Math.floor(window.innerWidth / 20);
    
    const initChars = Array.from({ length: 30 }, (_, i) => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      y: Math.random() * -100,
      speed: Math.random() * 2 + 1,
      column: Math.floor(Math.random() * columns),
    }));
    
    setMatrixChars(initChars);

    const interval = setInterval(() => {
      setMatrixChars((prev) =>
        prev.map((item) => ({
          ...item,
          y: item.y > 100 ? -10 : item.y + item.speed,
          char: Math.random() > 0.98 ? chars[Math.floor(Math.random() * chars.length)] : item.char,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const commands = [
    { cmd: "SYSTEM.WAKE()", output: "⚡ Neural interface activated..." },
    { cmd: "IDENTITY.LOAD()", output: ">> Kunal Chheda | Full Stack Developer" },
    { cmd: "", output: "" },
    { cmd: "SKILLS.QUERY('frontend')", output: "→ React, Next.js, TypeScript, Tailwind CSS" },
    { cmd: "SKILLS.QUERY('backend')", output: "→ Node.js, Python, Firebase, PostgreSQL" },
    { cmd: "SKILLS.QUERY('mobile')", output: "→ React Native, Flutter" },
    { cmd: "", output: "" },
    { cmd: "PROJECTS.LIST()", output: "📁 7K Life - Ecosystem Management" },
    { cmd: "", output: "📁 7K Money - Financial Platform" },
    { cmd: "", output: "📁 7K Game Hub - Gaming Community" },
    { cmd: "", output: "📁 7K Ecosystem - Unified Platform" },
    { cmd: "", output: "" },
    { cmd: "STATUS.CHECK()", output: "🟢 ONLINE | Available for projects" },
    { cmd: "CONTACT.RETRIEVE()", output: "📧 7kmindbeatss@gmail.com" },
    { cmd: "", output: "🌐 7kc.me" },
    { cmd: "", output: "💻 github.com/kunu2009" },
    { cmd: "", output: "" },
    { cmd: "SYSTEM.READY()", output: "✓ All systems operational" },
  ];

  // Auto-type commands
  useEffect(() => {
    if (commandIndex < commands.length) {
      const timer = setTimeout(() => {
        const current = commands[commandIndex];
        if (current.cmd) {
          setDisplayCommands((prev) => [...prev, `> ${current.cmd}`]);
        }
        if (current.output) {
          setDisplayCommands((prev) => [...prev, current.output]);
        } else if (current.cmd === "") {
          setDisplayCommands((prev) => [...prev, ""]);
        }
        setCommandIndex((prev) => prev + 1);
      }, current.cmd ? 400 : 200);

      return () => clearTimeout(timer);
    }
  }, [commandIndex]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 font-mono text-xl opacity-30"
            style={{
              left: `${item.column * 20}px`,
              top: `${item.y}%`,
            }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none" />

      {/* Main Terminal */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Glowing Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="text-5xl md:text-7xl font-bold text-green-500 font-mono mb-4"
            style={{
              textShadow: "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)",
            }}
          >
            THE MATRIX
          </div>
          <div className="text-green-400 text-sm md:text-base font-mono animate-pulse">
            Wake up, Neo... The portfolio has you...
          </div>
        </motion.div>

        {/* Terminal Window */}
        <div className="bg-black/90 border-2 border-green-500 rounded-lg shadow-2xl shadow-green-500/50 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-green-950/50 border-b-2 border-green-500 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-green-400 text-sm font-mono ml-4">
                matrix://portfolio/neo
              </span>
            </div>
            <div className="text-green-400 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              CONNECTED
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base min-h-[500px] max-h-[70vh] overflow-y-auto">
            {displayCommands.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${
                  line === ""
                    ? "h-4"
                    : line.startsWith(">")
                    ? "text-green-400 mb-1"
                    : "text-green-300/80 ml-4 mb-2"
                }`}
                style={{
                  textShadow: line.startsWith(">")
                    ? "0 0 10px rgba(34, 197, 94, 0.5)"
                    : "none",
                }}
              >
                {line}
              </motion.div>
            ))}

            {/* Cursor */}
            {commandIndex >= commands.length && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-flex items-center gap-1 text-green-500 mt-4"
              >
                <span>&gt;</span>
                <div className="w-2 h-5 bg-green-500" 
                  style={{
                    boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)",
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="bg-green-950/50 border-t-2 border-green-500 px-4 py-2 flex items-center justify-between text-xs font-mono">
            <div className="text-green-400">MATRIX v1.0</div>
            <div className="text-green-400">
              {new Date().toLocaleString()}
            </div>
            <div className="text-green-400">LEVEL: RED PILL</div>
          </div>
        </div>

        {/* Glowing Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-6 text-green-500 font-mono text-sm"
          style={{
            textShadow: "0 0 10px rgba(34, 197, 94, 0.6)",
          }}
        >
          "There is no spoon. Only code."
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalStyle1() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    { type: "command", text: "$ whoami" },
    { type: "output", text: "> Chaitanya Hedaoo | Full Stack Developer" },
    { type: "blank", text: "" },
    { type: "command", text: "$ cat skills.txt" },
    { type: "output", text: "> Frontend: React, Next.js, TypeScript, Tailwind CSS" },
    { type: "output", text: "> Backend: Node.js, Python, Firebase, PostgreSQL" },
    { type: "output", text: "> Mobile: React Native, Flutter" },
    { type: "output", text: "> Tools: Git, Docker, VS Code, Figma" },
    { type: "blank", text: "" },
    { type: "command", text: "$ ls projects/" },
    { type: "output", text: "> 7K-Life/          - Life management ecosystem" },
    { type: "output", text: "> 7K-Money/         - Finance tracking platform" },
    { type: "output", text: "> 7K-GameHub/       - Student gaming community" },
    { type: "output", text: "> 7K-Ecosystem/     - Unified app platform" },
    { type: "blank", text: "" },
    { type: "command", text: "$ cat contact.json" },
    { type: "output", text: '> { "email": "chaitanyahedaoo7@gmail.com",' },
    { type: "output", text: '>   "github": "chaitanyahedaoo",' },
    { type: "output", text: '>   "portfolio": "7kc.me" }' },
    { type: "blank", text: "" },
    { type: "command", text: "$ echo $STATUS" },
    { type: "output", text: "> 🟢 Available for opportunities" },
    { type: "blank", text: "" },
    { type: "prompt", text: "$ _" },
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => [...prev, terminalLines[currentLine].text]);
        setCurrentLine((prev) => prev + 1);
      }, terminalLines[currentLine].type === "blank" ? 100 : 300);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-t-lg border-2 border-green-500/30 shadow-2xl shadow-green-500/20">
          {/* Terminal Header */}
          <div className="bg-gray-800 border-b border-green-500/30 px-4 py-2 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-400 text-sm ml-4 font-mono">
                chaitanya@portfolio:~
              </span>
            </div>
            <div className="text-green-400 text-xs font-mono">
              bash v5.1.16
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base min-h-[500px] max-h-[70vh] overflow-y-auto">
            {displayedText.map((text, index) => {
              const line = terminalLines[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className={`${
                    line.type === "blank"
                      ? "h-4"
                      : line.type === "command"
                      ? "text-green-400"
                      : line.type === "prompt"
                      ? "text-green-400 animate-pulse"
                      : "text-green-300/80"
                  }`}
                >
                  {text}
                </motion.div>
              );
            })}

            {/* Blinking Cursor */}
            {!isTyping && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-green-400 ml-1"
              />
            )}
          </div>
        </div>

        {/* Terminal Info */}
        <div className="bg-gray-800 border-2 border-t-0 border-green-500/30 rounded-b-lg px-4 py-2 flex items-center justify-between text-xs font-mono">
          <div className="text-green-400">
            Session: {new Date().toLocaleTimeString()}
          </div>
          <div className="text-green-400">Lines: {displayedText.length}</div>
          <div className="text-green-400">UTF-8</div>
        </div>
      </div>
    </div>
  );
}

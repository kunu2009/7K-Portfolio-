"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronLeft, Battery, Wifi, Signal } from "lucide-react";
import Image from "next/image";

export default function MobileStyle1() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [time] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const apps = [
    { id: "about", name: "About", icon: "👤", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { id: "skills", name: "Skills", icon: "⚡", color: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { id: "projects", name: "Projects", icon: "🚀", color: "bg-gradient-to-br from-green-500 to-green-600" },
    { id: "contact", name: "Contact", icon: "📧", color: "bg-gradient-to-br from-red-500 to-red-600" },
  ];

  const screenContent = {
    about: {
      title: "About Me",
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <h3 className="text-xl font-bold">Chaitanya Hedaoo</h3>
            <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate developer building modern web and mobile applications. 
              Focused on creating seamless user experiences with cutting-edge technologies.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center gap-3 text-sm">
              <span>📍</span>
              <span>India</span>
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <span>🎓</span>
              <span>Computer Science Student</span>
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <span>💼</span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      ),
    },
    skills: {
      title: "Skills",
      content: (
        <div className="space-y-3">
          {[
            { name: "React & Next.js", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-cyan-500" },
            { name: "Node.js", level: 85, color: "bg-green-500" },
            { name: "Python", level: 80, color: "bg-yellow-500" },
            { name: "Firebase", level: 88, color: "bg-orange-500" },
            { name: "Tailwind CSS", level: 95, color: "bg-purple-500" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`${skill.color} h-2 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    projects: {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {[
            { name: "7K Life", desc: "Life management ecosystem", color: "from-green-500 to-emerald-600", emoji: "🌱" },
            { name: "7K Money", desc: "Finance tracking platform", color: "from-yellow-500 to-orange-600", emoji: "💰" },
            { name: "7K Game Hub", desc: "Student gaming community", color: "from-purple-500 to-pink-600", emoji: "🎮" },
            { name: "7K Ecosystem", desc: "Unified app platform", color: "from-blue-500 to-cyan-600", emoji: "🚀" },
          ].map((project) => (
            <div key={project.name} className={`bg-gradient-to-br ${project.color} rounded-2xl p-4 text-white`}>
              <div className="text-4xl mb-2">{project.emoji}</div>
              <h4 className="font-bold text-lg">{project.name}</h4>
              <p className="text-sm text-white/80">{project.desc}</p>
              <button className="mt-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-colors">
                View Project
              </button>
            </div>
          ))}
        </div>
      ),
    },
    contact: {
      title: "Contact",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">📧</div>
            <h4 className="font-bold mb-2">Email</h4>
            <p className="text-sm text-blue-100">chaitanyahedaoo7@gmail.com</p>
          </div>
          <div className="bg-purple-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">🌐</div>
            <h4 className="font-bold mb-2">Portfolio</h4>
            <p className="text-sm text-purple-100">7kc.me</p>
          </div>
          <div className="bg-gray-800 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">💻</div>
            <h4 className="font-bold mb-2">GitHub</h4>
            <p className="text-sm text-gray-300">github.com/chaitanyahedaoo</p>
          </div>
          <div className="bg-green-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">💬</div>
            <h4 className="font-bold mb-2">WhatsApp</h4>
            <p className="text-sm text-green-100">Let's connect!</p>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[60px] shadow-2xl p-3 relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

          {/* Screen */}
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[48px] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 px-8 flex items-center justify-between text-xs z-20">
              <span className="font-semibold">{time}</span>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3" />
                <Wifi className="h-3 w-3" />
                <Battery className="h-3 w-3" />
              </div>
            </div>

            {/* Content */}
            <div className="h-full pt-12 pb-20">
              <AnimatePresence mode="wait">
                {activeScreen === "home" ? (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full p-6"
                  >
                    {/* Home Screen */}
                    <div className="text-center mb-8 mt-8">
                      <h1 className="text-3xl font-bold mb-2">Chaitanya</h1>
                      <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    </div>

                    {/* App Icons */}
                    <div className="grid grid-cols-4 gap-6">
                      {apps.map((app) => (
                        <motion.button
                          key={app.id}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setActiveScreen(app.id)}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className={`${app.color} w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center text-3xl`}>
                            {app.icon}
                          </div>
                          <span className="text-xs font-medium">{app.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="h-full flex flex-col"
                  >
                    {/* App Header */}
                    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-4 py-3 flex items-center gap-3">
                      <button
                        onClick={() => setActiveScreen("home")}
                        className="text-blue-500 flex items-center gap-1"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        <span>Back</span>
                      </button>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                      <h2 className="text-2xl font-bold mb-4">
                        {screenContent[activeScreen as keyof typeof screenContent].title}
                      </h2>
                      {screenContent[activeScreen as keyof typeof screenContent].content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

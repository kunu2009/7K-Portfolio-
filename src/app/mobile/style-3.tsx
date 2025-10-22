"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, Search, MoreVertical } from "lucide-react";

export default function MobileStyle2() {
  const [activeScreen, setActiveScreen] = useState("home");

  const apps = [
    { id: "profile", name: "Profile", icon: "👤", color: "bg-blue-600" },
    { id: "skills", name: "Skills", icon: "⚡", color: "bg-green-600" },
    { id: "work", name: "Work", icon: "💼", color: "bg-purple-600" },
    { id: "contact", name: "Contact", icon: "📱", color: "bg-red-600" },
  ];

  const screenContent = {
    profile: {
      title: "Profile",
      content: (
        <div>
          <div className="bg-blue-600 p-6 -m-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <h3 className="text-white text-xl font-bold text-center">Kunal Chheda</h3>
            <p className="text-blue-100 text-center text-sm">Full Stack Developer</p>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">LOCATION</div>
              <div className="font-medium">India 🇮🇳</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">EDUCATION</div>
              <div className="font-medium">Computer Science</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">EXPERIENCE</div>
              <div className="font-medium">3+ Years Development</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">ABOUT</div>
              <div className="text-sm text-gray-700">
                Passionate about creating innovative web solutions. 
                Specialized in modern frameworks and full-stack development.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    skills: {
      title: "Skills",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h4 className="font-bold text-gray-700">Frontend Development</h4>
            </div>
            <div className="p-4 space-y-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                <div key={skill} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{skill}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? "bg-green-500" : "bg-gray-300"}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h4 className="font-bold text-gray-700">Backend Development</h4>
            </div>
            <div className="p-4 space-y-2">
              {["Node.js", "Python", "Firebase", "PostgreSQL"].map((skill) => (
                <div key={skill} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{skill}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? "bg-blue-500" : "bg-gray-300"}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h4 className="font-bold text-gray-700">Tools & Technologies</h4>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "VS Code", "Figma", "Vercel", "AWS"].map((tool) => (
                  <div key={tool} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    work: {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {[
            { name: "7K Life", desc: "Complete life management ecosystem", status: "Live", color: "bg-green-600" },
            { name: "7K Money", desc: "Finance tracking platform", status: "Beta", color: "bg-yellow-600" },
            { name: "7K Game Hub", desc: "Student gaming community", status: "Live", color: "bg-purple-600" },
            { name: "7K Ecosystem", desc: "Unified app platform", status: "Live", color: "bg-blue-600" },
          ].map((project) => (
            <div key={project.name} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-gray-800">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
                <span className={`${project.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {project.status}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                  View
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    contact: {
      title: "Contact",
      content: (
        <div className="space-y-4">
          {[
            { type: "Email", value: "7kmindbeatss@gmail.com", icon: "📧", color: "bg-red-500" },
            { type: "Portfolio", value: "7kc.me", icon: "🌐", color: "bg-blue-500" },
            { type: "GitHub", value: "kunu2009", icon: "💻", color: "bg-gray-800" },
            { type: "WhatsApp", value: "Message me", icon: "💬", color: "bg-green-500" },
          ].map((contact) => (
            <div key={contact.type} className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
              <div className={`${contact.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
                {contact.icon}
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">{contact.type}</div>
                <div className="font-medium text-gray-800">{contact.value}</div>
              </div>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        {/* Android Phone Frame */}
        <div className="w-[375px] h-[812px] bg-gray-900 rounded-[40px] shadow-2xl p-2">
          {/* Screen */}
          <div className="w-full h-full bg-gray-50 rounded-[32px] overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-white h-6 px-4 flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-2">
                <span>9:41</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-24px)]">
              <AnimatePresence mode="wait">
                {activeScreen === "home" ? (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 flex flex-col"
                  >
                    {/* Header */}
                    <div className="text-white mb-8">
                      <h1 className="text-3xl font-bold mb-1">Portfolio</h1>
                      <p className="text-blue-100">Kunal Chheda</p>
                    </div>

                    {/* Apps Grid */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      {apps.map((app, index) => (
                        <motion.button
                          key={app.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveScreen(app.id)}
                          className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-white flex flex-col items-center justify-center gap-3 hover:bg-white/30 transition-colors"
                        >
                          <div className="text-4xl">{app.icon}</div>
                          <span className="font-medium">{app.name}</span>
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
                    className="h-full flex flex-col bg-gray-50"
                  >
                    {/* App Bar */}
                    <div className="bg-white shadow-sm px-4 py-4 flex items-center gap-3">
                      <button
                        onClick={() => setActiveScreen("home")}
                        className="text-gray-700"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <h2 className="text-lg font-bold text-gray-800 flex-1">
                        {screenContent[activeScreen as keyof typeof screenContent].title}
                      </h2>
                      <button className="text-gray-700">
                        <Search className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                      {screenContent[activeScreen as keyof typeof screenContent].content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

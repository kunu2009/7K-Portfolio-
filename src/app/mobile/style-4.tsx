"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Maximize2 } from "lucide-react";

export default function MobileStyle3() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", name: "About", emoji: "👤" },
    { id: "skills", name: "Skills", emoji: "⚡" },
    { id: "projects", name: "Projects", emoji: "🚀" },
    { id: "contact", name: "Contact", emoji: "📧" },
  ];

  const content = {
    about: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-5xl shadow-lg">
            👨‍💻
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Kunal Chheda</h3>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-bold mb-2 text-gray-800">Bio</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Passionate developer with expertise in modern web technologies. 
            Building scalable applications and beautiful user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-3xl mb-2">🇮🇳</div>
            <div className="text-xs text-gray-500">Location</div>
            <div className="font-medium text-sm">India</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-3xl mb-2">🎓</div>
            <div className="text-xs text-gray-500">Education</div>
            <div className="font-medium text-sm">CS Student</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-xs text-gray-500">Experience</div>
            <div className="font-medium text-sm">3+ Years</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-xs text-gray-500">Status</div>
            <div className="font-medium text-sm">Available</div>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-bold mb-3 text-gray-800">Frontend</h4>
          <div className="space-y-2">
            {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-bold mb-3 text-gray-800">Backend</h4>
          <div className="space-y-2">
            {["Node.js", "Python", "Firebase", "PostgreSQL"].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-bold mb-3 text-gray-800">Tools</h4>
          <div className="flex flex-wrap gap-2">
            {["Git", "Docker", "VS Code", "Figma", "Vercel"].map((tool) => (
              <div key={tool} className="bg-gray-100 px-3 py-1.5 rounded-full text-xs text-gray-700">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-3">
        {[
          { name: "7K Life", emoji: "🌱", color: "from-green-400 to-emerald-500" },
          { name: "7K Money", emoji: "💰", color: "from-yellow-400 to-orange-500" },
          { name: "7K Game Hub", emoji: "🎮", color: "from-purple-400 to-pink-500" },
          { name: "7K Ecosystem", emoji: "🚀", color: "from-blue-400 to-cyan-500" },
        ].map((project) => (
          <div
            key={project.name}
            className={`bg-gradient-to-br ${project.color} rounded-xl p-4 text-white shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl">{project.emoji}</div>
              <div className="font-bold text-lg">{project.name}</div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="space-y-3">
        {[
          { label: "Email", value: "7kmindbeatss@gmail.com", emoji: "📧", color: "bg-red-500" },
          { label: "Website", value: "7kc.me", emoji: "🌐", color: "bg-blue-500" },
          { label: "GitHub", value: "kunu2009", emoji: "💻", color: "bg-gray-800" },
          { label: "WhatsApp", value: "Let's connect!", emoji: "💬", color: "bg-green-500" },
        ].map((contact) => (
          <div key={contact.label} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className={`${contact.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
              {contact.emoji}
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">{contact.label}</div>
              <div className="font-medium text-gray-800 text-sm">{contact.value}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        {/* Minimal Phone Frame */}
        <div className="w-[375px] h-[667px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Title Bar */}
          <div className="bg-gray-100 h-8 px-3 flex items-center justify-between border-b">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer"></div>
              </div>
            </div>
            <div className="text-xs font-medium text-gray-600">Portfolio</div>
            <div className="w-20"></div>
          </div>

          {/* Tab Bar */}
          <div className="bg-white border-b flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <span>{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="h-[calc(100%-8rem)] overflow-y-auto bg-gray-50 p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {content[activeTab as keyof typeof content]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

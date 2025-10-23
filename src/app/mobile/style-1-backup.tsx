"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Wifi, Signal, ChevronRight, Clock, Mail, MessageSquare, Phone, Camera, Music, Settings, User, Briefcase } from "lucide-react";
import Link from "next/link";

export default function MobileStyle1() {
  const [time, setTime] = useState(new Date());
  const [currentView, setCurrentView] = useState<"lock" | "home" | "app">("lock");
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: "profile", name: "Profile", icon: User, color: "from-blue-500 to-cyan-500", screen: "profile" },
    { id: "projects", name: "Projects", icon: Briefcase, color: "from-purple-500 to-pink-500", screen: "projects" },
    { id: "contact", name: "Contact", icon: Mail, color: "from-green-500 to-emerald-500", screen: "contact" },
    { id: "messages", name: "Messages", icon: MessageSquare, color: "from-yellow-500 to-orange-500", screen: "messages" },
  ];

  const lockScreen = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="text-white text-8xl font-light mb-2">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-white/80 text-xl">
            {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 mb-12"
        >
          {[MessageSquare, Mail, Phone, Camera].map((Icon, i) => (
            <div key={i} className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
              <Icon className="h-6 w-6 text-white" />
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => setCurrentView("home")}
          className="flex items-center gap-2 text-white text-lg font-medium"
        >
          <span>Swipe to unlock</span>
          <ChevronRight className="h-5 w-5 animate-pulse" />
        </motion.button>
      </div>
    </motion.div>
  );

  const homeScreen = (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="relative h-full p-8 flex flex-col">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-white text-4xl font-bold mb-2">Hello! 👋</h1>
          <p className="text-gray-400">Welcome to my portfolio</p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setSelectedApp(app.screen); setCurrentView("app"); }}
                className={`bg-gradient-to-br ${app.color} rounded-3xl p-6 flex flex-col items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-shadow`}
              >
                <Icon className="h-12 w-12 mb-4" />
                <span className="font-semibold">{app.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );

  const appScreens: Record<string, JSX.Element> = {
    profile: (
      <div className="p-8 space-y-6">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">👨‍💻</div>
          <h2 className="text-3xl font-bold text-white mb-2">Kunal Paresh Chheda</h2>
          <p className="text-gray-400">Full Stack Developer & Student</p>
        </div>
        <div className="space-y-4">
          {[
            { icon: "📍", label: "Location", value: "India" },
            { icon: "🎓", label: "Education", value: "12th Grade (Arts)" },
            { icon: "⚖️", label: "Goal", value: "Corporate Lawyer" },
            { icon: "💻", label: "Skills", value: "React, Next.js, TypeScript" },
          ].map((info) => (
            <div key={info.label} className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{info.icon}</span>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase">{info.label}</div>
                  <div className="text-white font-medium">{info.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    projects: (
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">My Projects</h2>
        {[
          { name: "7K Life", icon: "🌱", desc: "Life management ecosystem", color: "from-green-500 to-emerald-500" },
          { name: "7KLawPrep", icon: "⚖️", desc: "Law education platform", color: "from-blue-500 to-cyan-500" },
          { name: "7K Itihaas", icon: "📚", desc: "Interactive history", color: "from-orange-500 to-amber-500" },
          { name: "Stan AI", icon: "🤖", desc: "AI assistant", color: "from-purple-500 to-pink-500" },
        ].map((project) => (
          <div key={project.name} className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 text-white`}>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">{project.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-xl">{project.name}</h3>
                <p className="text-white/80 text-sm">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        {[
          { icon: "📧", title: "Email", value: "7kmindbeatss@gmail.com" },
          { icon: "🌐", title: "Website", value: "7kc.me" },
          { icon: "💻", title: "GitHub", value: "github.com/kunu2009" },
        ].map((contact) => (
          <div key={contact.title} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{contact.icon}</span>
              <div className="flex-1">
                <div className="text-xs text-gray-400 uppercase">{contact.title}</div>
                <div className="text-white font-medium">{contact.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    messages: (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Messages</h2>
        <div className="space-y-4">
          {[
            { from: "Recruiter", msg: "Your portfolio looks amazing!", time: "10:30 AM", emoji: "💼" },
            { from: "Stan AI", msg: "Ready to help you with anything!", time: "9:15 AM", emoji: "🤖" },
            { from: "Team", msg: "Great work on the projects!", time: "Yesterday", emoji: "🎉" },
          ].map((msg) => (
            <div key={msg.from} className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{msg.emoji}</span>
                <div className="flex-1">
                  <div className="font-bold text-white">{msg.from}</div>
                  <div className="text-sm text-gray-400">{msg.time}</div>
                </div>
              </div>
              <p className="text-white/80">{msg.msg}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-[375px] h-[812px] bg-black rounded-[60px] shadow-2xl p-3 relative border-[3px] border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-50"></div>

          {/* Screen */}
          <div className="w-full h-full rounded-[52px] overflow-hidden relative bg-black">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 px-8 flex items-center justify-between text-xs z-50 text-white">
              <span className="font-semibold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3" />
                <Wifi className="h-3 w-3" />
                <Battery className="h-3 w-3" />
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {currentView === "lock" && <div key="lock">{lockScreen}</div>}
              {currentView === "home" && <div key="home">{homeScreen}</div>}
              {currentView === "app" && selectedApp && (
                <motion.div
                  key="app"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="h-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-y-auto"
                >
                  <div className="pt-12">
                    <button
                      onClick={() => setCurrentView("home")}
                      className="px-6 py-3 text-white flex items-center gap-2"
                    >
                      <ChevronRight className="h-5 w-5 rotate-180" />
                      <span>Back</span>
                    </button>
                    {appScreens[selectedApp]}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50"></div>
          </div>
        </div>

        {/* Back to Main Menu */}
        <Link
          href="/"
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-3 bg-white rounded-full text-gray-900 font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Back to Main Menu
        </Link>
      </div>
    </div>
  );
}

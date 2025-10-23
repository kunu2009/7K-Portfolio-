"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Plus, Menu, Search, MoreVertical, ArrowLeft, Battery, Wifi, Signal } from "lucide-react";
import Link from "next/link";

export default function MobileStyle3() {
  const [activeTab, setActiveTab] = useState("home");
  const [time] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tabs = [
    { id: "home", name: "Home", icon: Home },
    { id: "profile", name: "Profile", icon: User },
    { id: "work", name: "Work", icon: Briefcase },
    { id: "contact", name: "Contact", icon: Mail },
  ];

  const content = {
    home: (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl">👨‍💻</div>
            <div><h2 className="text-2xl font-bold">Kunal Chheda</h2><p className="text-blue-100">Full Stack Developer</p></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center"><div className="text-2xl font-bold">50+</div><div className="text-xs text-blue-100">Projects</div></div>
            <div className="text-center"><div className="text-2xl font-bold">3+</div><div className="text-xs text-blue-100">Years</div></div>
            <div className="text-center"><div className="text-2xl font-bold">100%</div><div className="text-xs text-blue-100">Passion</div></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><span className="text-2xl">⚡</span>Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[{icon:"📧",label:"Email Me",color:"bg-blue-100 text-blue-600"},{icon:"💼",label:"Projects",color:"bg-green-100 text-green-600"},{icon:"🎯",label:"Skills",color:"bg-orange-100 text-orange-600"},{icon:"🌐",label:"Portfolio",color:"bg-purple-100 text-purple-600"}].map((action)=>(
              <button key={action.label} className={`${action.color} rounded-xl p-4 text-center font-medium transition-transform active:scale-95`}>
                <div className="text-3xl mb-2">{action.icon}</div>
                <div className="text-sm">{action.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="font-bold text-gray-800 mb-3">Recent Activity</h3>
          {[{icon:"✅",text:"Completed 7K Life v2.0",time:"2 hours ago"},{icon:"🚀",text:"Deployed Stan AI",time:"1 day ago"},{icon:"💡",text:"Started new project",time:"3 days ago"}].map((activity,i)=>(
            <div key={i} className="flex items-start gap-3 py-3 border-b last:border-0">
              <div className="text-2xl">{activity.icon}</div>
              <div className="flex-1"><p className="text-sm font-medium text-gray-800">{activity.text}</p><p className="text-xs text-gray-500">{activity.time}</p></div>
            </div>
          ))}
        </div>
      </div>
    ),
    profile: (
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="text-center mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-5xl">👨‍💻</div>
            <h2 className="text-2xl font-bold text-gray-800">Kunal Paresh Chheda</h2>
            <p className="text-gray-600">Full Stack Developer & Student</p>
          </div>
          <div className="space-y-3 mt-4">
            {[{icon:"📍",label:"Location",value:"India"},{icon:"🎓",label:"Education",value:"12th Grade (Arts)"},{icon:"⚖️",label:"Career Goal",value:"Corporate Lawyer"},{icon:"💼",label:"Status",value:"Available for projects"}].map((info)=>(
              <div key={info.label} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="text-3xl">{info.icon}</div>
                <div className="flex-1"><div className="text-xs text-gray-500 uppercase tracking-wide">{info.label}</div><div className="font-medium text-gray-800">{info.value}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">💻 Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React","Next.js","TypeScript","Node.js","Python","Firebase","Flutter","Tailwind","PostgreSQL","MongoDB"].map((tech)=>(
              <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    work: (
      <div className="space-y-4">
        {[
          {title:"7K Life",desc:"Complete ecosystem for daily life management",tech:"React • Firebase • Tailwind",status:"Active",color:"from-green-500 to-emerald-600",emoji:"🌱"},
          {title:"7KLawPrep",desc:"Law education platform for aspiring lawyers",tech:"Next.js • TypeScript • Supabase",status:"Active",color:"from-blue-500 to-cyan-600",emoji:"⚖️"},
          {title:"7K Itihaas",desc:"Interactive history learning experience",tech:"React • Three.js • Firebase",status:"Beta",color:"from-orange-500 to-amber-600",emoji:"📚"},
          {title:"Polyglot",desc:"Multi-language learning platform",tech:"Flutter • Node.js • MongoDB",status:"Planning",color:"from-purple-500 to-pink-600",emoji:"🌍"},
          {title:"Stan AI",desc:"Personal AI assistant for students",tech:"Python • OpenAI • FastAPI",status:"Complete",color:"from-indigo-500 to-violet-600",emoji:"🤖"}
        ].map((project)=>(
          <div key={project.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
              <div className="flex items-start justify-between mb-3">
                <div className="text-5xl">{project.emoji}</div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">{project.status}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-white/90">{project.desc}</p>
            </div>
            <div className="p-4"><p className="text-xs text-gray-600 font-mono">{project.tech}</p></div>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="space-y-4">
        {[
          {icon:"📧",title:"Email",value:"7kmindbeatss@gmail.com",color:"from-blue-500 to-cyan-600"},
          {icon:"🌐",title:"Portfolio",value:"7kc.me",color:"from-purple-500 to-pink-600"},
          {icon:"💻",title:"GitHub",value:"github.com/kunu2009",color:"from-gray-700 to-gray-900"},
          {icon:"💰",title:"Support Me",value:"8591247148@fam",color:"from-green-500 to-emerald-600"}
        ].map((contact)=>(
          <div key={contact.title} className={`bg-gradient-to-br ${contact.color} rounded-2xl p-6 text-white shadow-lg`}>
            <div className="text-5xl mb-4">{contact.icon}</div>
            <h3 className="font-bold text-xl mb-2">{contact.title}</h3>
            <p className="text-white/90 text-sm font-mono">{contact.value}</p>
            <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">Connect</button>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-[375px] h-[812px] bg-gray-900 rounded-[60px] shadow-2xl p-3 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
          <div className="w-full h-full bg-gray-50 rounded-[48px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-12 px-6 flex items-center justify-between text-xs z-20 bg-white shadow-sm">
              <span className="font-semibold text-gray-800">{time}</span>
              <div className="flex items-center gap-1 text-gray-800"><Signal className="h-3 w-3" /><Wifi className="h-3 w-3" /><Battery className="h-3 w-3" /></div>
            </div>

            <div className="absolute top-12 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 z-10 shadow-md">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Portfolio</h1>
                <div className="flex gap-3"><Search className="h-5 w-5" /><MoreVertical className="h-5 w-5" /></div>
              </div>
            </div>

            <div className="h-full pt-28 pb-20 overflow-y-auto">
              <div className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
                    {content[activeTab as keyof typeof content]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white border-t shadow-lg">
              <div className="flex items-center justify-around px-2 py-3">
                {tabs.map((tab)=>{const Icon=tab.icon;return(
                  <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`flex flex-col items-center gap-1 transition-colors ${activeTab===tab.id?'text-blue-600':'text-gray-400'}`}>
                    <Icon className="h-6 w-6" /><span className="text-xs font-medium">{tab.name}</span>
                  </button>
                )})}
              </div>
            </div>

            <motion.button whileTap={{scale:0.9}} className="absolute bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white z-20">
              <Link href="/"><ArrowLeft className="h-6 w-6" /></Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

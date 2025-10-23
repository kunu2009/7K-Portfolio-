"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Wifi, Signal, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function MobileStyle4() {
  const [activeCard, setActiveCard] = useState(0);
  const [time] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const cards = [
    {
      id: 0,
      title: "Welcome",
      emoji: "",
      gradient: "from-violet-500/40 via-purple-500/40 to-fuchsia-500/40",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <motion.div initial={{scale:0}} animate={{scale:1}} className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center text-7xl shadow-2xl">
              
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Kunal Paresh Chheda</h2>
            <p className="text-white/80 text-lg">Full Stack Developer & Student</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <p className="text-white/90 leading-relaxed">
              Building innovative web and mobile applications with modern technologies. 
              Passionate about creating beautiful user experiences.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[{label:"Projects",value:"50+"},{label:"Experience",value:"3+ yrs"},{label:"Passion",value:"100%"}].map((stat)=>(
              <div key={stat.label} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Skills",
      emoji: "",
      gradient: "from-cyan-500/40 via-blue-500/40 to-indigo-500/40",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Sparkles className="h-6 w-6" />Tech Stack</h3>
          {[
            {category:"Frontend",skills:["React","Next.js","TypeScript","Tailwind CSS"],icon:""},
            {category:"Backend",skills:["Node.js","Python","Firebase","PostgreSQL"],icon:""},
            {category:"Mobile",skills:["Flutter","React Native"],icon:""},
            {category:"Tools",skills:["Git","Docker","VS Code","Figma"],icon:""}
          ].map((group)=>(
            <div key={group.category} className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{group.icon}</span>
                <h4 className="font-bold text-white">{group.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill)=>(
                  <span key={skill} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: "Projects",
      emoji: "",
      gradient: "from-emerald-500/40 via-teal-500/40 to-cyan-500/40",
      content: (
        <div className="space-y-4">
          {[
            {name:"7K Life",desc:"Complete life management ecosystem",status:"Active",emoji:"",color:"from-green-400 to-emerald-500"},
            {name:"7KLawPrep",desc:"Law education platform",status:"Active",emoji:"",color:"from-blue-400 to-cyan-500"},
            {name:"7K Itihaas",desc:"Interactive history learning",status:"Beta",emoji:"",color:"from-orange-400 to-amber-500"},
            {name:"Stan AI",desc:"Personal AI assistant",status:"Complete",emoji:"",color:"from-purple-400 to-violet-500"}
          ].map((project)=>(
            <motion.div key={project.name} whileHover={{scale:1.02}} className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg`}>{project.emoji}</div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30">{project.status}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{project.name}</h4>
              <p className="text-sm text-white/70">{project.desc}</p>
              <button className="mt-3 flex items-center gap-2 text-sm text-white/90 font-medium hover:text-white transition-colors">
                View Project <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 3,
      title: "Contact",
      emoji: "",
      gradient: "from-pink-500/40 via-rose-500/40 to-red-500/40",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          {[
            {icon:"",label:"Email",value:"7kmindbeatss@gmail.com",color:"from-blue-400 to-cyan-500"},
            {icon:"",label:"Portfolio",value:"7kc.me",color:"from-purple-400 to-pink-500"},
            {icon:"",label:"GitHub",value:"github.com/kunu2009",color:"from-gray-400 to-slate-500"},
            {icon:"",label:"Support",value:"8591247148@fam",color:"from-green-400 to-emerald-500"}
          ].map((contact)=>(
            <motion.div key={contact.label} whileHover={{scale:1.02}} className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/20">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-2xl shadow-lg`}>{contact.icon}</div>
                <div className="flex-1">
                  <div className="text-xs text-white/60 uppercase tracking-wider">{contact.label}</div>
                  <div className="text-sm text-white font-mono">{contact.value}</div>
                </div>
                <ExternalLink className="h-5 w-5 text-white/50" />
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative">
        <div className="w-[375px] h-[812px] bg-black/30 backdrop-blur-sm rounded-[60px] shadow-2xl p-3 relative border border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black/50 rounded-b-3xl z-10 backdrop-blur-sm"></div>
          <div className="w-full h-full rounded-[48px] overflow-hidden relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-2xl">
            <div className="absolute top-0 left-0 right-0 h-12 px-8 flex items-center justify-between text-xs z-20">
              <span className="font-semibold text-white">{time}</span>
              <div className="flex items-center gap-1 text-white"><Signal className="h-3 w-3" /><Wifi className="h-3 w-3" /><Battery className="h-3 w-3" /></div>
            </div>

            <div className="h-full pt-16 pb-24 px-6">
              <AnimatePresence mode="wait">
                <motion.div key={activeCard} initial={{opacity:0,scale:0.9,rotateY:90}} animate={{opacity:1,scale:1,rotateY:0}} exit={{opacity:0,scale:0.9,rotateY:-90}} transition={{duration:0.4}} className={`h-full bg-gradient-to-br ${cards[activeCard].gradient} backdrop-blur-2xl rounded-[40px] p-6 border border-white/20 shadow-2xl overflow-y-auto`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{cards[activeCard].emoji}</div>
                      <h2 className="text-2xl font-bold text-white">{cards[activeCard].title}</h2>
                    </div>
                  </div>
                  {cards[activeCard].content}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10 p-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                {cards.map((card)=>(
                  <button key={card.id} onClick={()=>setActiveCard(card.id)} className={`transition-all ${activeCard===card.id?'w-8 h-3 bg-white':'w-3 h-3 bg-white/40'} rounded-full`}/>
                ))}
              </div>
              <div className="flex items-center justify-around">
                <button onClick={()=>setActiveCard((prev)=>(prev-1+cards.length)%cards.length)} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"></button>
                <Link href="/" className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/30 transition-colors">Back Home</Link>
                <button onClick={()=>setActiveCard((prev)=>(prev+1)%cards.length)} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

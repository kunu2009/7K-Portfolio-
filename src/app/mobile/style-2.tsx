"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Battery, Wifi, Signal, Heart, Send, Bookmark, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function MobileStyle2() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [time] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [storyProgress, setStoryProgress] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeStory !== null) {
      setStoryProgress(0);
      const interval = setInterval(() => {
        setStoryProgress((prev) => {
          if (prev >= 100) {
            setActiveStory(null);
            return 0;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [activeStory]);

  const stories = [
    {
      id: "about",
      icon: "",
      gradient: "from-purple-500 to-pink-500",
      title: "About Me",
      content: (
        <div className="h-full flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black/70">
          <h2 className="text-3xl font-bold text-white mb-2">Kunal Paresh Chheda</h2>
          <p className="text-white/90 text-lg mb-4">Full Stack Developer & Student</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white"><span></span><span>India</span></div>
            <div className="flex items-center gap-3 text-white"><span></span><span>12th Grade (Arts)</span></div>
            <div className="flex items-center gap-3 text-white"><span></span><span>Future Corporate Lawyer</span></div>
          </div>
        </div>
      ),
      bg: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
    },
    {
      id: "skills",
      icon: "",
      gradient: "from-orange-500 to-red-500",
      title: "Tech Stack",
      content: (
        <div className="h-full flex items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase", "Flutter", "Tailwind"].map((skill) => (
              <div key={skill} className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 text-center">
                <span className="text-white font-semibold text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      bg: "bg-gradient-to-br from-orange-600 to-red-700"
    },
    {
      id: "projects",
      icon: "",
      gradient: "from-green-500 to-teal-500",
      title: "Projects",
      content: (
        <div className="h-full flex flex-col justify-center p-6 space-y-4">
          {["7K Life", "7KLawPrep", "7K Itihaas", "Stan AI"].map((proj) => (
            <div key={proj} className="bg-white/20 backdrop-blur-xl rounded-3xl p-5">
              <h3 className="text-white font-bold text-xl mb-1">{proj}</h3>
              <p className="text-white/80 text-sm">Building innovative solutions</p>
            </div>
          ))}
        </div>
      ),
      bg: "bg-gradient-to-br from-green-600 to-teal-700"
    },
    {
      id: "contact",
      icon: "",
      gradient: "from-blue-500 to-purple-500",
      title: "Get in Touch",
      content: (
        <div className="h-full flex flex-col justify-center p-6 space-y-5">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 text-center">
            <div className="text-4xl mb-3"></div>
            <p className="text-white font-medium">7kmindbeatss@gmail.com</p>
          </div>
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 text-center">
            <div className="text-4xl mb-3"></div>
            <p className="text-white font-medium">7kc.me</p>
          </div>
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 text-center">
            <div className="text-4xl mb-3"></div>
            <p className="text-white font-medium">github.com/kunu2009</p>
          </div>
        </div>
      ),
      bg: "bg-gradient-to-br from-blue-600 to-purple-700"
    },
  ];

  const posts = [
    { id: "1", image: "bg-gradient-to-br from-blue-400 to-purple-600", emoji: "", caption: "Building amazing web apps with React & Next.js", likes: 245 },
    { id: "2", image: "bg-gradient-to-br from-green-400 to-teal-600", emoji: "", caption: "7K Life ecosystem is growing!", likes: 189 },
    { id: "3", image: "bg-gradient-to-br from-orange-400 to-red-600", emoji: "", caption: "Learning new technologies every day", likes: 312 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-[375px] h-[812px] bg-black rounded-[60px] shadow-2xl p-3 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
          <div className="w-full h-full bg-gradient-to-b from-purple-50 to-pink-50 rounded-[48px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-12 px-8 flex items-center justify-between text-xs z-20 bg-white/80 backdrop-blur-sm">
              <span className="font-semibold">{time}</span>
              <div className="flex items-center gap-1"><Signal className="h-3 w-3" /><Wifi className="h-3 w-3" /><Battery className="h-3 w-3" /></div>
            </div>

            <AnimatePresence mode="wait">
              {activeStory !== null ? (
                <motion.div key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30">
                  <div className={`h-full ${stories[activeStory].bg} relative`}>
                    <div className="absolute top-0 left-0 right-0 p-4 z-10">
                      <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-white" style={{ width: `${storyProgress}%` }} />
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-10 h-10 bg-gradient-to-br ${stories[activeStory].gradient} rounded-full flex items-center justify-center text-xl border-2 border-white`}>{stories[activeStory].icon}</div>
                          <span className="text-white font-semibold">{stories[activeStory].title}</span>
                        </div>
                        <button onClick={() => setActiveStory(null)} className="text-white text-2xl">&times;</button>
                      </div>
                    </div>
                    {stories[activeStory].content}
                  </div>
                </motion.div>
              ) : (
                <div className="h-full pt-12 overflow-y-auto">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</h1>
                      <div className="flex gap-4"><Heart className="h-6 w-6" /><Send className="h-6 w-6" /></div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
                      {stories.map((story, idx) => (
                        <button key={story.id} onClick={() => setActiveStory(idx)} className="flex-shrink-0">
                          <div className={`w-20 h-20 bg-gradient-to-br ${story.gradient} rounded-full p-1`}>
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">{story.icon}</div>
                          </div>
                          <p className="text-xs mt-2 text-center font-medium">{story.title}</p>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-6">
                      {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                          <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl"></div>
                              <div><p className="font-semibold text-sm">Kunal Chheda</p><p className="text-xs text-gray-500">Full Stack Developer</p></div>
                            </div>
                            <MoreHorizontal className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className={`aspect-square ${post.image} flex items-center justify-center text-9xl`}>{post.emoji}</div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex gap-4">
                                <button onClick={() => setLiked({...liked, [post.id]: !liked[post.id]})}><Heart className={`h-7 w-7 ${liked[post.id] ? 'fill-red-500 text-red-500' : ''}`} /></button>
                                <MessageCircle className="h-7 w-7" />
                                <Share2 className="h-7 w-7" />
                              </div>
                              <Bookmark className="h-7 w-7" />
                            </div>
                            <p className="font-semibold text-sm mb-1">{post.likes + (liked[post.id] ? 1 : 0)} likes</p>
                            <p className="text-sm"><span className="font-semibold">kunalchheda</span> {post.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around px-4">
              <button className="flex flex-col items-center"><Home className="h-6 w-6 mb-1" /><span className="text-xs">Home</span></button>
              <button className="flex flex-col items-center"><Heart className="h-6 w-6 mb-1" /><span className="text-xs">Activity</span></button>
              <Link href="/" className="flex flex-col items-center text-purple-600"><span className="text-2xl mb-1"></span><span className="text-xs font-semibold">Back</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

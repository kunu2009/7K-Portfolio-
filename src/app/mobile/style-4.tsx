"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Wifi, Signal, Camera, Flashlight, Calculator, MapPin, CloudRain, MessageSquare, Mail, Phone, Music, Image as ImageIcon, Settings, AppWindow, Home as HomeIcon, ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";

export default function MobileStyle4() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [homeScreen, setHomeScreen] = useState<"main" | "library">("main");
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(87);
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [calcInput, setCalcInput] = useState("");
  const [weatherData] = useState({ temp: 24, condition: "Partly Cloudy", high: 28, low: 18 });
  const [notesContent, setNotesContent] = useState("");
  const [gameScore, setGameScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [notifications, setNotifications] = useState(6);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [controlCenter, setControlCenter] = useState(false);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [brightness, setBrightness] = useState(70);
  const [isCharging, setIsCharging] = useState(false);
  const [cameraApp, setCameraApp] = useState<"camera" | null>(null);
  const [siriActive, setSiriActive] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate battery charging
    const batteryTimer = setInterval(() => {
      if (isCharging && batteryLevel < 100) {
        setBatteryLevel(prev => Math.min(prev + 1, 100));
      }
    }, 5000);
    return () => clearInterval(batteryTimer);
  }, [isCharging, batteryLevel]);

  const apps = [
    { id: "settings", name: "Settings", icon: Settings, color: "bg-gray-600", screen: "settings" },
    { id: "about", name: "About Me", icon: HomeIcon, color: "bg-gradient-to-br from-blue-500 to-purple-600", screen: "about" },
    { id: "calculator", name: "Calculator", icon: Calculator, color: "bg-gray-800", screen: "calculator" },
    { id: "weather", name: "Weather", icon: CloudRain, color: "bg-gradient-to-br from-blue-400 to-cyan-300", screen: "weather" },
    { id: "notes", name: "Notes", icon: MessageSquare, color: "bg-yellow-400", screen: "notes" },
    { id: "photos", name: "Photos", icon: ImageIcon, color: "bg-gradient-to-br from-red-500 via-yellow-500 to-green-500", screen: "photos" },
    { id: "messages", name: "Messages", icon: MessageSquare, color: "bg-green-500", screen: "messages" },
    { id: "mail", name: "Mail", icon: Mail, color: "bg-blue-500", screen: "mail" },
    { id: "phone", name: "Phone", icon: Phone, color: "bg-green-600", screen: "phone" },
    { id: "music", name: "Music", icon: Music, color: "bg-gradient-to-br from-red-500 to-pink-500", screen: "music" },
    { id: "appstore", name: "App Store", icon: AppWindow, color: "bg-gradient-to-br from-blue-500 to-cyan-400", screen: "appstore" },
    { id: "game", name: "Tap Game", icon: Camera, color: "bg-gradient-to-br from-purple-500 to-pink-500", screen: "game" },
    { id: "camera", name: "Camera", icon: Camera, color: "bg-gray-900", screen: "camera" },
  ];

  const handleCalc = (value: string) => {
    if (value === "C") {
      setCalcDisplay("0");
      setCalcInput("");
    } else if (value === "=") {
      try {
        const result = eval(calcInput || calcDisplay);
        setCalcDisplay(result.toString());
        setCalcInput("");
      } catch {
        setCalcDisplay("Error");
      }
    } else if (value === "⌫") {
      const newDisplay = calcDisplay.slice(0, -1) || "0";
      setCalcDisplay(newDisplay);
      setCalcInput(newDisplay);
    } else {
      const newValue = calcDisplay === "0" ? value : calcDisplay + value;
      setCalcDisplay(newValue);
      setCalcInput(newValue);
    }
  };

  const startGame = () => {
    setGameActive(true);
    setGameScore(0);
  };

  const handleTap = () => {
    if (gameActive) {
      setGameScore(prev => prev + 1);
    }
  };

  const goHome = () => {
    setCurrentScreen("home");
    setHomeScreen("main");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (currentScreen === "home" && touchStart - touchEnd > 75) {
      setHomeScreen("library");
    }
    if (currentScreen === "home" && touchEnd - touchStart > 75) {
      setHomeScreen("main");
    }
  };

  const toggleControlCenter = () => {
    setControlCenter(!controlCenter);
  };

  const screens = {
    home: (
      <motion.div 
        className="h-full relative overflow-hidden flex"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        animate={{ x: homeScreen === "library" ? -393 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main Home Screen */}
        <div className="w-full h-full flex-shrink-0 relative">
          {/* iOS Dynamic Wallpaper */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-32 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          </div>

        <div className="relative h-full flex flex-col">
          {/* Main Home Screen */}
          <div className="flex-1 p-6 pt-16">
            {/* Clock Widget */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="text-white text-5xl font-light mb-1">
                  {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-white/80 text-sm">
                  {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </motion.div>

            {/* Weather Widget */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-2xl rounded-3xl p-4 border border-white/20 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-white text-3xl font-light">{weatherData.temp}°</div>
                  <div className="text-white/80 text-xs">Mumbai</div>
                </div>
                <div className="text-white text-4xl">☀️</div>
              </div>
            </motion.div>

            {/* App Grid */}
            <div className="grid grid-cols-4 gap-4">
              {apps.map((app, index) => {
                const Icon = app.icon;
                return (
                  <motion.button
                    key={app.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => { setCurrentScreen(app.screen); setControlCenter(false); }}
                    className="flex flex-col items-center gap-2 relative"
                  >
                    <div className={`${app.color} w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white relative overflow-hidden`}>
                      <Icon className="h-7 w-7 relative z-10" />
                      {/* App badge for notifications */}
                      {app.id === "messages" && notifications > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold z-20">
                          {notifications}
                        </div>
                      )}
                      {app.id === "mail" && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold z-20">
                          2
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-white font-medium text-center drop-shadow-lg">{app.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              <div className={`w-2 h-2 rounded-full ${homeScreen === "main" ? "bg-white" : "bg-white/40"}`}></div>
              <div className={`w-2 h-2 rounded-full ${homeScreen === "library" ? "bg-white" : "bg-white/40"}`}></div>
            </div>
          </div>

          {/* Dock */}
          <div className="px-6 pb-8">
            <div className="bg-white/15 backdrop-blur-3xl rounded-3xl p-4 flex justify-around items-center border border-white/20 shadow-2xl">
              {[
                { Icon: Phone, screen: "phone" },
                { Icon: MessageSquare, screen: "messages" },
                { Icon: Mail, screen: "mail" },
                { Icon: Music, screen: "music" }
              ].map((item, i) => (
                <motion.button 
                  key={i} 
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => { setCurrentScreen(item.screen); setControlCenter(false); }}
                  className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                >
                  <item.Icon className="h-7 w-7 text-white" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* App Library (Swipeable) */}
        <div className="w-full h-full flex-shrink-0 bg-gradient-to-br from-gray-900 to-black p-6 pt-16 overflow-y-auto">
          {/* Search Bar */}
          <div className="bg-gray-800/50 rounded-2xl px-4 py-3 flex items-center gap-3 mb-6 backdrop-blur-xl">
            <Search className="h-5 w-5 text-gray-400" />
            <input 
              placeholder="Search" 
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            />
          </div>

          <h1 className="text-white text-3xl font-bold mb-8">App Library</h1>
          <div className="space-y-6 pb-20">
            {[
              { title: "Productivity", apps: ["Settings", "Notes", "Calculator", "Weather"], color: "from-blue-500 to-cyan-500", icon: "⚙️" },
              { title: "Social", apps: ["Messages", "Mail", "Phone"], color: "from-green-500 to-emerald-500", icon: "💬" },
              { title: "Entertainment", apps: ["Music", "Photos", "Game"], color: "from-pink-500 to-rose-500", icon: "🎵" },
              { title: "Utilities", apps: ["About Me", "App Store"], color: "from-purple-500 to-violet-500", icon: "🔧" },
            ].map((category) => (
              <motion.div 
                key={category.title} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.apps.map((appName, i) => (
                    <motion.div 
                      key={i} 
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-br ${category.color} rounded-2xl p-4 flex items-center justify-center text-white text-sm font-medium h-16 shadow-lg cursor-pointer hover:shadow-xl transition-shadow`}
                    >
                      {appName}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ),
    settings: (
      <div className="h-full bg-gray-50 overflow-y-auto">
        <div className="bg-white p-6 pb-8">
          <button onClick={goHome} className="text-blue-500 mb-4 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <div className="px-4 space-y-4">
          {[
            { title: "Wi-Fi", subtitle: "Home Network", icon: "📶" },
            { title: "Bluetooth", subtitle: "On", icon: "🔵" },
            { title: "Notifications", subtitle: "12 apps", icon: "🔔" },
            { title: "Sounds & Haptics", subtitle: "", icon: "🔊" },
            { title: "Display & Brightness", subtitle: "Light", icon: "☀️" },
            { title: "Battery", subtitle: `${batteryLevel}%`, icon: "🔋" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-4 flex items-center gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                {item.subtitle && <div className="text-sm text-gray-500">{item.subtitle}</div>}
              </div>
              <div className="text-gray-400">›</div>
            </div>
          ))}
        </div>
      </div>
    ),
    about: (
      <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 overflow-y-auto">
        <div className="p-6">
          <button onClick={goHome} className="text-white mb-4 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-6xl shadow-2xl">
              👨‍💻
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Kunal Paresh Chheda</h1>
            <p className="text-white/90 text-lg">Full Stack Developer & Student</p>
          </div>
          <div className="space-y-3">
            {[
              { icon: "📍", label: "Location", value: "India" },
              { icon: "🎓", label: "Education", value: "12th Grade (Arts)" },
              { icon: "💼", label: "Career Goal", value: "Corporate Lawyer" },
              { icon: "📧", label: "Email", value: "7kmindbeatss@gmail.com" },
              { icon: "🌐", label: "Portfolio", value: "7kc.me" },
              { icon: "💻", label: "GitHub", value: "github.com/kunu2009" },
            ].map((item) => (
              <div key={item.label} className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 border border-white/30">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="text-xs text-white/70 uppercase tracking-wide">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    calculator: (
      <div className="h-full bg-black flex flex-col">
        <button onClick={goHome} className="text-white p-4 self-start flex items-center gap-2">
          <ArrowLeft className="h-6 w-6" />
          <span>Home</span>
        </button>
        <div className="flex-1 flex items-end justify-end p-6">
          <div className="text-white text-6xl font-light">{calcDisplay}</div>
        </div>
        <div className="grid grid-cols-4 gap-3 p-4">
          {[
            ["C", "⌫", "%", "/"],
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "="],
          ].map((row, i) => (
            <div key={i} className="contents">
              {row.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalc(btn)}
                  className={`h-16 rounded-full font-semibold text-2xl ${
                    btn === "=" ? "col-span-2 bg-orange-500 text-white" :
                    ["C", "⌫", "%", "/", "*", "-", "+"].includes(btn) ? "bg-gray-700 text-white" :
                    "bg-gray-800 text-white"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    weather: (
      <div className="h-full bg-gradient-to-br from-blue-400 to-cyan-300 overflow-y-auto">
        <div className="p-6">
          <button onClick={goHome} className="text-white mb-8 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <div className="text-center text-white">
            <div className="text-xl mb-2">Mumbai, India</div>
            <div className="text-8xl font-light my-8">{weatherData.temp}°</div>
            <div className="text-2xl mb-12">{weatherData.condition}</div>
            <div className="flex justify-center gap-8 text-lg">
              <div>H: {weatherData.high}°</div>
              <div>L: {weatherData.low}°</div>
            </div>
          </div>
          <div className="mt-12 space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
              <div key={day} className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between">
                <div className="text-white">{day}</div>
                <div className="text-4xl">☀️</div>
                <div className="text-white">{weatherData.temp + i}° / {weatherData.low + i}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    notes: (
      <div className="h-full bg-yellow-50 flex flex-col">
        <div className="bg-yellow-100 p-4 flex items-center gap-4">
          <button onClick={goHome} className="text-yellow-800 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold text-yellow-800">Quick Note</h1>
        </div>
        <textarea
          value={notesContent}
          onChange={(e) => setNotesContent(e.target.value)}
          placeholder="Start typing..."
          className="flex-1 p-6 bg-yellow-50 text-gray-800 resize-none focus:outline-none text-lg"
        />
      </div>
    ),
    photos: (
      <div className="h-full bg-black overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <button onClick={goHome} className="text-white flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold text-white">Photos</h1>
          <div className="w-6"></div>
        </div>
        <div className="grid grid-cols-3 gap-1 p-1">
          {["🌅", "🏔️", "🌊", "🌃", "🌺", "🦋", "🌈", "🔥", "⭐"].map((emoji, i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-6xl">
              {emoji}
            </div>
          ))}
        </div>
      </div>
    ),
    messages: (
      <div className="h-full bg-white flex flex-col">
        <div className="bg-gray-100 p-4 flex items-center gap-4">
          <button onClick={goHome} className="text-blue-500 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold">Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {[
            { from: "Stan AI", text: "Hey! I'm Stan AI, your personal AI assistant. Connect with me at 7kc.me to unlock powerful features!", time: "9:15 AM", isMe: false, emoji: "🤖" },
            { from: "Me", text: "That sounds amazing! Can't wait to try it out.", time: "9:17 AM", isMe: true },
            { from: "Recruiter", text: "Your portfolio showcases impressive full-stack skills! I'd love to discuss opportunities.", time: "10:32 AM", isMe: false, emoji: "💼" },
            { from: "Me", text: "Thank you! I'm very interested. I'm passionate about corporate law and technology.", time: "10:35 AM", isMe: true },
            { from: "7K Life Team", text: "Welcome to the 7K ecosystem! Check out our life management platform 🌱", time: "Yesterday", isMe: false, emoji: "🌟" },
            { from: "Me", text: "Excited to be part of this! Love the concept.", time: "Yesterday", isMe: true },
          ].map((msg, i) => (
            <div key={i} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] ${msg.isMe ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                {!msg.isMe && (
                  <div className="flex items-center gap-2 px-2">
                    {msg.emoji && <span className="text-lg">{msg.emoji}</span>}
                    <span className="text-xs font-semibold text-gray-600">{msg.from}</span>
                  </div>
                )}
                <div className={`rounded-3xl px-4 py-2 ${msg.isMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                  <div>{msg.text}</div>
                  <div className={`text-xs mt-1 ${msg.isMe ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-white">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input 
              placeholder="iMessage" 
              className="flex-1 bg-transparent outline-none text-sm"
              disabled
            />
            <span className="text-blue-500 text-xl">📷</span>
          </div>
        </div>
      </div>
    ),
    mail: (
      <div className="h-full bg-white flex flex-col">
        <div className="bg-gray-100 p-4 flex items-center gap-4">
          <button onClick={goHome} className="text-blue-500 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold">Inbox</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[
            { from: "Stan AI 🤖", subject: "Your AI Assistant is Ready!", preview: "Connect with Stan AI at 7kc.me for personalized AI assistance and powerful features.", time: "9:00 AM", unread: true },
            { from: "7K Life Team 🌱", subject: "Welcome to 7K Ecosystem", preview: "Explore our life management platform: 7K Life, 7KLawPrep, 7K Itihaas, and more!", time: "Yesterday", unread: true },
            { from: "GitHub", subject: "New follower", preview: "Someone started following your repositories. Keep up the great work!", time: "Yesterday", unread: false },
            { from: "LinkedIn", subject: "Job Alert: Full Stack Developer", preview: "New opportunities match your profile at top tech companies and law firms.", time: "2 days ago", unread: false },
            { from: "Portfolio Analytics 📊", subject: "Weekly Report", preview: "Your portfolio received 247 visits this week. 15 recruiters viewed your projects.", time: "2 days ago", unread: false },
            { from: "7KLawPrep", subject: "New Course Available", preview: "Corporate Law Fundamentals course is now live! Start your journey today.", time: "3 days ago", unread: false },
          ].map((email, i) => (
            <div key={i} className={`border-b p-4 hover:bg-gray-50 ${email.unread ? 'bg-blue-50' : ''}`}>
              <div className="flex justify-between items-start mb-1">
                <div className={`font-semibold ${email.unread ? 'text-blue-600' : 'text-blue-500'}`}>
                  {email.from}
                </div>
                <div className="flex items-center gap-2">
                  {email.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  <div className="text-xs text-gray-500">{email.time}</div>
                </div>
              </div>
              <div className={`font-medium mb-1 ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>{email.subject}</div>
              <div className="text-sm text-gray-600">{email.preview}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    phone: (
      <div className="h-full bg-gray-900 flex flex-col">
        <div className="p-4 flex items-center justify-between">
          <button onClick={goHome} className="text-white flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold text-white">Phone</h1>
          <div className="w-6"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 flex items-center justify-center text-5xl">
            📞
          </div>
          <div className="text-2xl font-semibold text-white mb-2">Ready to Connect</div>
          <div className="text-gray-400 text-center mb-8">
            Call me to discuss projects and opportunities
          </div>
          <div className="text-white text-lg font-mono mb-8">+91 XXXX-XXXX</div>
          <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <Phone className="h-8 w-8" />
          </button>
        </div>
      </div>
    ),
    music: (
      <div className="h-full bg-gradient-to-br from-pink-500 to-purple-600 flex flex-col">
        <div className="p-4 flex items-center justify-between text-white">
          <button onClick={goHome} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold">Now Playing</h1>
          <div className="w-6"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-64 h-64 bg-white/20 backdrop-blur-xl rounded-3xl mb-8 flex items-center justify-center text-8xl border border-white/30">
            🎵
          </div>
          <div className="text-white text-center mb-8">
            <div className="text-2xl font-bold mb-2">Coding Vibes</div>
            <div className="text-white/80">Lo-Fi Beats</div>
          </div>
          <div className="flex items-center gap-8 text-white">
            <button className="text-4xl">⏮</button>
            <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-5xl backdrop-blur-sm">⏸</button>
            <button className="text-4xl">⏭</button>
          </div>
        </div>
      </div>
    ),
    appstore: (
      <div className="h-full bg-gray-50 overflow-y-auto">
        <div className="bg-white p-4 flex items-center gap-4">
          <button onClick={goHome} className="text-blue-500 flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <div className="flex-1 bg-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input placeholder="Search apps" className="bg-transparent flex-1 outline-none" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          {[
            { name: "7K Life", desc: "Life management ecosystem", rating: 4.8, icon: "🌱" },
            { name: "7KLawPrep", desc: "Law education platform", rating: 4.9, icon: "⚖️" },
            { name: "7K Itihaas", desc: "Interactive history", rating: 4.7, icon: "📚" },
            { name: "Stan AI", desc: "AI assistant", rating: 5.0, icon: "🤖" },
          ].map((app) => (
            <div key={app.name} className="bg-white rounded-2xl p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl">
                {app.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{app.name}</div>
                <div className="text-sm text-gray-500">{app.desc}</div>
                <div className="text-sm text-gray-600 mt-1">⭐ {app.rating}</div>
              </div>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold">GET</button>
            </div>
          ))}
        </div>
      </div>
    ),
    game: (
      <div className="h-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col">
        <div className="p-4 flex items-center justify-between text-white">
          <button onClick={goHome} className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <h1 className="text-xl font-bold">Tap Game</h1>
          <div className="w-6"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-white text-6xl font-bold mb-8">{gameScore}</div>
          <div className="text-white text-xl mb-8">{gameActive ? "Tap to score!" : "Start the game"}</div>
          {gameActive ? (
            <button
              onClick={handleTap}
              className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-8xl shadow-2xl active:scale-95 transition-transform"
            >
              🎯
            </button>
          ) : (
            <button
              onClick={startGame}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-xl shadow-2xl"
            >
              Start Game
            </button>
          )}
          {gameActive && (
            <button
              onClick={() => setGameActive(false)}
              className="mt-8 px-6 py-3 bg-white/20 text-white rounded-full backdrop-blur-sm"
            >
              End Game
            </button>
          )}
        </div>
      </div>
    ),
    camera: (
      <div className="h-full bg-black flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
          <button onClick={goHome} className="text-white flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <ArrowLeft className="h-6 w-6" />
            <span>Home</span>
          </button>
          <div className="flex gap-3">
            <button 
              onClick={() => setFlashlightOn(!flashlightOn)}
              className={`${flashlightOn ? 'bg-yellow-500' : 'bg-black/50'} backdrop-blur-sm rounded-full p-3`}
            >
              <Flashlight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        
        {/* Camera Viewfinder */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="text-center">
            <div className="text-8xl mb-4">📸</div>
            <div className="text-white text-xl font-semibold mb-2">Camera</div>
            <div className="text-gray-400 text-sm px-8">
              Point and shoot to capture moments
            </div>
            {flashlightOn && (
              <div className="mt-4 text-yellow-400 text-sm animate-pulse">
                ⚡ Flash is ON
              </div>
            )}
          </div>
        </div>

        {/* Camera Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12">
          <div className="flex items-center justify-center gap-12">
            <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-white" />
            </button>
            <button className="w-20 h-20 bg-white rounded-full border-4 border-gray-300 shadow-2xl active:scale-95 transition-transform">
              <div className="w-full h-full rounded-full bg-white"></div>
            </button>
            <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🔄</span>
            </button>
          </div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
      </div>
    ),
    siri: (
      <div className="h-full bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 relative overflow-hidden">
        {/* Animated Siri Orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl"
          />
        </div>

        {/* Siri Interface */}
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="text-6xl mb-4">👋</div>
            <h2 className="text-white text-3xl font-semibold mb-2">Hi, I'm Siri</h2>
            <p className="text-white/80 text-lg">How can I help you?</p>
          </motion.div>

          <div className="space-y-4 w-full max-w-sm">
            {[
              { emoji: "📱", text: "Tell me about this portfolio" },
              { emoji: "🚀", text: "Show me the projects" },
              { emoji: "👨‍💻", text: "Who created this?" },
              { emoji: "✉️", text: "How can I contact?" },
            ].map((suggestion, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-left hover:bg-white/20 transition-colors"
              >
                <span className="text-2xl mr-3">{suggestion.emoji}</span>
                <span>{suggestion.text}</span>
              </motion.button>
            ))}
          </div>

          <button
            onClick={goHome}
            className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold hover:bg-white/30 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-[393px] h-[852px] bg-black rounded-[60px] shadow-2xl p-2 relative border-[3px] border-gray-800">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-b-[32px] z-50 overflow-hidden">
            {/* Dynamic Island Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="flex items-center gap-2 text-white text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {flashlightOn && <Flashlight className="h-3 w-3 text-yellow-400" />}
                {notifications > 0 && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </motion.div>
            </div>
          </div>
          
          {/* Screen */}
          <div className="w-full h-full rounded-[52px] overflow-hidden relative bg-black">
            {/* Status Bar */}
            <div 
              className="absolute top-0 left-0 right-0 h-14 px-8 flex items-center justify-between text-xs z-40 text-white cursor-pointer"
              onClick={toggleControlCenter}
            >
              <span className="font-semibold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3" />
                <Wifi className={`h-3 w-3 ${wifiEnabled ? 'text-blue-400' : ''}`} />
                <Battery 
                  className={`h-3 w-3 ${isCharging ? 'text-green-400' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setIsCharging(!isCharging); }}
                />
                <span className="text-xs">{batteryLevel}%</span>
              </div>
            </div>

            {/* Control Center */}
            <AnimatePresence>
              {controlCenter && (
                <motion.div
                  initial={{ y: -400 }}
                  animate={{ y: 0 }}
                  exit={{ y: -400 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute top-0 left-0 right-0 z-[60] bg-gray-900/95 backdrop-blur-2xl rounded-b-3xl p-6 shadow-2xl"
                  onClick={toggleControlCenter}
                >
                  <div className="space-y-4">
                    {/* Quick Settings */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); setAirplaneMode(!airplaneMode); }}
                        className={`${airplaneMode ? 'bg-orange-500' : 'bg-gray-700'} rounded-2xl p-4 text-white transition-colors`}
                      >
                        <div className="text-2xl mb-2">✈️</div>
                        <div className="text-sm font-semibold">Airplane</div>
                        <div className="text-xs opacity-70">{airplaneMode ? 'On' : 'Off'}</div>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setWifiEnabled(!wifiEnabled); }}
                        className={`${wifiEnabled && !airplaneMode ? 'bg-blue-500' : 'bg-gray-700'} rounded-2xl p-4 text-white transition-colors`}
                      >
                        <Wifi className="h-6 w-6 mb-2" />
                        <div className="text-sm font-semibold">Wi-Fi</div>
                        <div className="text-xs opacity-70">{!airplaneMode && wifiEnabled ? 'Home' : 'Off'}</div>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setBluetoothEnabled(!bluetoothEnabled); }}
                        className={`${bluetoothEnabled && !airplaneMode ? 'bg-blue-500' : 'bg-gray-700'} rounded-2xl p-4 text-white transition-colors`}
                      >
                        <Signal className="h-6 w-6 mb-2" />
                        <div className="text-sm font-semibold">Bluetooth</div>
                        <div className="text-xs opacity-70">{!airplaneMode && bluetoothEnabled ? 'On' : 'Off'}</div>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFlashlightOn(!flashlightOn); }}
                        className={`${flashlightOn ? 'bg-yellow-500' : 'bg-gray-700'} rounded-2xl p-4 text-white transition-colors`}
                      >
                        <Flashlight className="h-6 w-6 mb-2" />
                        <div className="text-sm font-semibold">Flashlight</div>
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setCurrentScreen("camera"); 
                          setControlCenter(false); 
                        }}
                        className="bg-gray-700 rounded-2xl p-4 text-white hover:bg-gray-600 transition-colors"
                      >
                        <Camera className="h-6 w-6 mb-2" />
                        <div className="text-sm font-semibold">Camera</div>
                      </button>
                    </div>

                    {/* Brightness Control */}
                    <div className="bg-gray-800/50 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2 text-white">
                        <span className="text-sm">☀️ Brightness</span>
                        <span className="text-xs">{brightness}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={brightness}
                        onChange={(e) => { e.stopPropagation(); setBrightness(parseInt(e.target.value)); }}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${brightness}%, #374151 ${brightness}%, #374151 100%)`
                        }}
                      />
                    </div>

                    {/* Volume Control */}
                    <div className="bg-gray-800/50 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2 text-white">
                        <span className="text-sm">🔊 Volume</span>
                        <span className="text-xs">70%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 70%, #374151 70%, #374151 100%)`
                        }}
                      />
                    </div>

                    {/* Music Widget */}
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                          🎵
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Coding Vibes</div>
                          <div className="text-xs opacity-70">Lo-Fi Beats</div>
                        </div>
                        <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          ▶️
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* App Screens */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="h-full"
              >
                {screens[currentScreen as keyof typeof screens]}
              </motion.div>
            </AnimatePresence>

            {/* Home Indicator */}
            <button
              onClick={() => currentScreen === "home" ? setCurrentScreen("siri") : null}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50 hover:bg-white/50 transition-colors cursor-pointer"
              title="Tap for Siri"
            ></button>
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

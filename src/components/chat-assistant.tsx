"use client";

import { useState, useRef, useEffect, type FormEvent, useCallback, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send, Loader2, User, MessageCircle } from "lucide-react";
import { askChatAssistant, getGreeting } from "@/ai/stan-assistant";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MascotStore, MascotSelector, getSavedMascot, type MascotType, getMascotConfig } from "./mascot-store";
import { MascotBody } from "./mascot-bodies";
import { getDeviceCapabilities, getAnimationConfig, throttle } from "@/lib/performance";
import { 
  getTimeOfDay, 
  getTimeGreeting, 
  getMascotMoodForTime, 
  getProactiveTip, 
  incrementChatCount,
  trackSectionVisit,
  getVisitorProfile
} from "@/lib/visitor-memory";

type Message = {
  role: "user" | "assistant";
  content: string;
  followUpQuestions?: string[];
};

// Robot moods - now controls eyes and expression, not face emoji
const ROBOT_MOODS = {
  idle: { eyes: "normal", mouth: "smile" },
  happy: { eyes: "happy", mouth: "big-smile" },
  thinking: { eyes: "thinking", mouth: "hmm" },
  excited: { eyes: "stars", mouth: "open" },
  wave: { eyes: "wink", mouth: "smile" },
  sleeping: { eyes: "closed", mouth: "zzz" },
  wink: { eyes: "wink", mouth: "smile" },
  cool: { eyes: "sunglasses", mouth: "smirk" },
  love: { eyes: "hearts", mouth: "big-smile" },
  surprised: { eyes: "wide", mouth: "o" },
  star: { eyes: "stars", mouth: "big-smile" },
  fire: { eyes: "fire", mouth: "open" },
} as const;

type RobotMood = keyof typeof ROBOT_MOODS;

// Robot Eye Component
const RobotEyes = ({ mood, isHovered, isBlinking, eyeOffset }: { mood: RobotMood; isHovered: boolean; isBlinking: boolean; eyeOffset: { x: number; y: number } }) => {
  const expression = ROBOT_MOODS[mood];
  
  // If blinking, show closed eyes
  if (isBlinking && expression.eyes !== "closed") {
    return (
      <div className="flex gap-2 items-center justify-center">
        <motion.div className="w-2.5 h-0.5 bg-white rounded-full" />
        <motion.div className="w-2.5 h-0.5 bg-white rounded-full" />
      </div>
    );
  }
  
  const getEyeContent = () => {
    switch (expression.eyes) {
      case "happy":
        return (
          <>
            <div className="w-2 h-1 bg-white rounded-full" />
            <div className="w-2 h-1 bg-white rounded-full" />
          </>
        );
      case "stars":
        return (
          <>
            <span className="text-[10px]">G��</span>
            <span className="text-[10px]">G��</span>
          </>
        );
      case "hearts":
        return (
          <>
            <span className="text-[10px]">G��n+�</span>
            <span className="text-[10px]">G��n+�</span>
          </>
        );
      case "fire":
        return (
          <>
            <span className="text-[10px]">=���</span>
            <span className="text-[10px]">=���</span>
          </>
        );
      case "sunglasses":
        return (
          <div className="flex gap-0.5">
            <div className="w-3 h-2 bg-black rounded-sm" />
            <div className="w-1 h-0.5 bg-black mt-1" />
            <div className="w-3 h-2 bg-black rounded-sm" />
          </div>
        );
      case "wink":
        return (
          <>
            <motion.div 
              className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"
              animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
            >
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            </motion.div>
            <div className="w-2 h-0.5 bg-white rounded-full" />
          </>
        );
      case "closed":
        return (
          <>
            <div className="w-2.5 h-0.5 bg-white rounded-full" />
            <div className="w-2.5 h-0.5 bg-white rounded-full" />
          </>
        );
      case "wide":
        return (
          <>
            <motion.div 
              className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </motion.div>
            <motion.div 
              className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </motion.div>
          </>
        );
      case "thinking":
        return (
          <>
            <motion.div 
              className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            </motion.div>
            <motion.div 
              className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            </motion.div>
          </>
        );
      default: // normal - eyes follow cursor
        return (
          <>
            <motion.div 
              className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center overflow-hidden"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                animate={{ 
                  x: eyeOffset.x,
                  y: eyeOffset.y,
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </motion.div>
            <motion.div 
              className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center overflow-hidden"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                animate={{ 
                  x: eyeOffset.x,
                  y: eyeOffset.y,
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </motion.div>
          </>
        );
    }
  };
  
  return (
    <div className="flex gap-2 items-center justify-center">
      {getEyeContent()}
    </div>
  );
};

// Robot Mouth Component
const RobotMouth = ({ mood }: { mood: RobotMood }) => {
  const expression = ROBOT_MOODS[mood];
  
  switch (expression.mouth) {
    case "big-smile":
      return (
        <motion.div 
          className="w-5 h-2.5 border-b-2 border-l-2 border-r-2 border-white rounded-b-full"
          animate={{ scaleX: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      );
    case "open":
      return (
        <motion.div 
          className="w-4 h-3 bg-gray-900 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
      );
    case "o":
      return <div className="w-3 h-3 bg-gray-900 rounded-full border-2 border-white" />;
    case "hmm":
      return <div className="w-4 h-0.5 bg-white rounded-full transform -rotate-6" />;
    case "smirk":
      return <div className="w-4 h-1 border-b-2 border-white rounded-br-full" />;
    case "zzz":
      return <span className="text-[8px] text-white">=���</span>;
    default: // smile
      return <div className="w-4 h-2 border-b-2 border-white rounded-b-full" />;
  }
};

// Robot Hand Component
const RobotHand = ({ side, isWaving, isHovered }: { side: "left" | "right"; isWaving: boolean; isHovered: boolean }) => {
  const isRight = side === "right";
  
  return (
    <motion.div
      className={`absolute ${isRight ? "-right-4" : "-left-4"} top-1/2 -translate-y-1/2`}
      animate={isWaving && isRight ? {
        rotate: [0, -30, 30, -30, 30, 0],
        y: [0, -5, 5, -5, 5, 0],
      } : isHovered ? {
        y: [0, -3, 0],
        rotate: isRight ? [0, 10, 0] : [0, -10, 0],
      } : {}}
      transition={{ duration: isWaving ? 1 : 0.5, repeat: isWaving ? Infinity : 0 }}
      style={{ transformOrigin: isRight ? "left center" : "right center" }}
    >
      {/* Arm */}
      <div className={`w-3 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full ${isRight ? "" : "transform rotate-180"}`} />
      {/* Hand */}
      <motion.div 
        className={`absolute ${isRight ? "-right-2" : "-left-2"} top-1/2 -translate-y-1/2 text-sm`}
        animate={isWaving && isRight ? { rotate: [0, 20, -20, 20, 0] } : {}}
        transition={{ duration: 0.3, repeat: isWaving ? Infinity : 0 }}
      >
        =���
      </motion.div>
    </motion.div>
  );
};

const RobotBody = ({ mood, isHovered, isBlinking, eyeOffset, isWaving }: { mood: RobotMood; isHovered: boolean; isBlinking: boolean; eyeOffset: { x: number; y: number }; isWaving: boolean; }) => {
  return (
    <motion.div className="relative w-20 h-24">
      <motion.div
        className="relative mx-auto h-24 w-20"
        animate={isHovered ? { y: [0, -4, 0] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        <Image
          src="/portfolioredesginasssests/stan-mascot.avif"
          alt="Stan mascot"
          fill
          sizes="80px"
          className="object-contain drop-shadow-xl pointer-events-none select-none"
          draggable={false}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

// Section-specific messages with context
const SECTION_MESSAGES: Record<string, { messages: string[]; mood: RobotMood }> = {
  hero: {
    messages: [
      "Welcome to Kunal's portfolio! =���",
      "I'm Stan, your AI guide! =���",
      "Scroll down to explore! G��n+�",
      "Click me to learn more! =�Ƽ",
      "Kunal is a student developer! =��G��=��+",
    ],
    mood: "wave",
  },
  about: {
    messages: [
      "This is Kunal! A student dev =��G��=��+",
      "He builds amazing apps! =���",
      "Ask me about his skills! =�Ƭ",
      "He knows 7+ languages! =���",
      "Self-taught & passionate! =���",
    ],
    mood: "happy",
  },
  "app-store": {
    messages: [
      "Welcome to the App Store! =���",
      "24+ FREE apps to explore! =���",
      "Productivity, fitness & more! =���",
      "All made with G��n+� by Kunal!",
      "Click any app to try it! G��",
      "Filter by category! =��+n+�",
    ],
    mood: "excited",
  },
  services: {
    messages: [
      "Need a website? I can help! =��+",
      "Affordable prices for students! =�Ʀ",
      "Click to get a FREE quote! =���",
      "WhatsApp for quick chat! =�Ƽ",
      "Quality work guaranteed! G��",
    ],
    mood: "cool",
  },
  projects: {
    messages: [
      "Check out client projects! =���",
      "Real work, real results! =�Ŀ",
      "Quality designs here! G��",
      "Want something similar? =���",
      "Click to see details! =���",
    ],
    mood: "star",
  },
  writing: {
    messages: [
      "Kunal writes books too! =���",
      "Free to read online! =���",
      "Fiction & non-fiction! G��n+�",
      "Check out the stories! =��",
      "10+ books available! =���",
    ],
    mood: "thinking",
  },
  books: {
    messages: [
      "Welcome to the library! =���",
      "All books are FREE! =���",
      "Click any book to read! =���",
      "Kunal's literary world! G��",
      "Stories & insights! =��",
    ],
    mood: "happy",
  },
  journey: {
    messages: [
      "Kunal's journey timeline! =���",
      "From student to developer! =���",
      "An inspiring story! =�ƽ",
      "Started coding young! =��",
      "See his evolution! =���",
    ],
    mood: "star",
  },
  blog: {
    messages: [
      "Tech articles & tutorials! =���",
      "Web dev insights! =���",
      "Student life tips! =���",
      "Read and learn! =���",
      "Fresh content here! G��",
    ],
    mood: "thinking",
  },
  support: {
    messages: [
      "Support Kunal's work! G��n+�",
      "Every bit helps! =���",
      "UPI available! =�Ʀ",
      "Thank you for visiting! =�Ѧ",
      "Your support matters! =���",
    ],
    mood: "love",
  },
  testimonials: {
    messages: [
      "See what clients say! G��",
      "Real reviews here! =�Ƽ",
      "Happy customers! =���",
      "Quality work proven! =���",
      "Trusted by many! =���",
    ],
    mood: "happy",
  },
  ecosystem: {
    messages: [
      "The 7K Ecosystem! =���",
      "Apps, books & more! =���=���",
      "All connected platforms! =���",
      "Explore the universe! =��",
    ],
    mood: "excited",
  },
};

// Page-specific welcome messages - now with time awareness
const getPageWelcome = (path: string): { mood: RobotMood; message: string } => {
  const timeOfDay = getTimeOfDay();
  const timeMood = getMascotMoodForTime();
  const timeGreeting = getTimeGreeting();
  
  const baseWelcomes: Record<string, { mood: RobotMood; message: string }> = {
    "/": { mood: timeMood as RobotMood, message: `${timeGreeting} Welcome to Kunal's world! =��` },
    "/apps": { mood: "excited", message: "Welcome to the App Store! =��� 24+ FREE apps!" },
    "/books": { mood: "happy", message: "Welcome to the library! =��� Read for free!" },
    "/blog": { mood: "thinking", message: "Ready for some reading? =��� Check out the articles!" },
    "/services": { mood: "cool", message: "Let's build something awesome! =��+" },
    "/menu": { mood: "excited", message: "Check out our service menu! =��+n+�" },
    "/services/app-development": { mood: "fire", message: "App development services! =���=���" },
    "/services/web-development": { mood: "fire", message: "Web development services! =��+=���" },
  };
  
  // Late night special messages
  if (timeOfDay === "late-night") {
    if (path === "/") {
      return { mood: "sleeping", message: "Hey night owl! =��� Can't sleep? Let's explore!" };
    }
  }
  
  // Morning motivation
  if (timeOfDay === "morning") {
    if (path === "/apps") {
      return { mood: "excited", message: "Good morning! G��n+� Start your day with 24+ FREE apps!" };
    }
  }
  
  return baseWelcomes[path] || { mood: "wave", message: `${timeGreeting} =���` };
};

// Legacy constant for backwards compatibility
const PAGE_WELCOMES: Record<string, { mood: RobotMood; message: string }> = {
  "/": { mood: "wave", message: "Hey! Welcome to Kunal's world! =��" },
  "/apps": { mood: "excited", message: "Welcome to the App Store! =��� 24+ FREE apps!" },
  "/books": { mood: "happy", message: "Welcome to the library! =��� Read for free!" },
  "/blog": { mood: "thinking", message: "Ready for some reading? =��� Check out the articles!" },
  "/services": { mood: "cool", message: "Let's build something awesome! =��+" },
  "/menu": { mood: "excited", message: "Check out our service menu! =��+n+�" },
  "/services/app-development": { mood: "fire", message: "App development services! =���=���" },
  "/services/web-development": { mood: "fire", message: "Web development services! =��+=���" },
};

// First visit greeting sequence - time aware version
const getFirstVisitGreetings = () => {
  const timeOfDay = getTimeOfDay();
  const timeGreeting = getTimeGreeting();
  const profile = getVisitorProfile();
  
  // Personalized first message if we know their name
  const firstMessage = profile.name 
    ? `${timeGreeting} ${profile.name}! =���`
    : `${timeGreeting} First time? =���`;
  
  const greetings = [
    { message: firstMessage, mood: "wave" as RobotMood, delay: 1500 },
    { message: "I'm Stan, Kunal's AI buddy! =���", mood: "happy" as RobotMood, delay: 3000 },
    { message: "I'll help you explore! =���", mood: "excited" as RobotMood, delay: 3000 },
    { message: "Scroll down or click me! =�Ƽ", mood: "wink" as RobotMood, delay: 3000 },
  ];
  
  // Late night special
  if (timeOfDay === "late-night") {
    greetings[0] = { message: "Hey night owl! =��� Can't sleep?", mood: "sleeping" as RobotMood, delay: 1500 };
    greetings[2] = { message: "Let me keep you company! =���", mood: "happy" as RobotMood, delay: 3000 };
  }
  
  // Morning
  if (timeOfDay === "morning") {
    greetings[0] = { message: "Good morning! G��n+� Early bird!", mood: "excited" as RobotMood, delay: 1500 };
  }
  
  return greetings;
};

// Legacy constant for backwards compatibility
const FIRST_VISIT_GREETINGS = [
  { message: "Hey there! First time? =���", mood: "wave" as RobotMood, delay: 1500 },
  { message: "I'm Stan, Kunal's AI buddy! =���", mood: "happy" as RobotMood, delay: 3000 },
  { message: "I'll help you explore! =���", mood: "excited" as RobotMood, delay: 3000 },
  { message: "Scroll down or click me! =�Ƽ", mood: "wink" as RobotMood, delay: 3000 },
];

// Contact bar awareness messages
const CONTACT_PROMPTS = [
  "=��P Contact bar appeared!",
  "G��n+� Click below to WhatsApp!",
  "=�Ƽ Let's chat with Kunal!",
  "=��� Quick contact available!",
  "=��� Message him now!",
];

// Random idle thoughts - now includes proactive tips
const getIdleThought = () => {
  // 30% chance to show a proactive tip instead of random idle thought
  if (Math.random() < 0.3) {
    const tip = getProactiveTip();
    if (tip) {
      return `=��� ${tip.message}`;
    }
  }
  
  // Regular idle thoughts
  const thoughts = [
    "Hmm... =���",
    "What should I do? =���",
    "*beep boop* =���",
    "La la la~ =�Ħ",
    "Still here! =���",
    "Waiting patiently... GŦ",
    "You're awesome! =��",
    "*does a little dance* =���",
    "Exploring around! =���n+�",
    "*zoom zoom* =���",
    "Hello? Anyone there? =���",
    "*spins around* =���",
  ];
  
  return thoughts[Math.floor(Math.random() * thoughts.length)];
};

// Legacy constant for backwards compatibility
const IDLE_THOUGHTS = [
  "Hmm... =���",
  "What should I do? =���",
  "*beep boop* =���",
  "La la la~ =�Ħ",
  "Still here! =���",
  "Waiting patiently... GŦ",
  "You're awesome! =��",
  "*does a little dance* =���",
  "Exploring around! =���n+�",
  "*zoom zoom* =���",
  "Hello? Anyone there? =���",
  "*spins around* =���",
];

// Robot tricks/actions
const ROBOT_TRICKS = [
  { name: "spin", message: "*spins!* =���" },
  { name: "jump", message: "*boing!* =���" },
  { name: "dance", message: "*dancing!* =���" },
  { name: "wave", message: "*waves hello!* =���" },
  { name: "flip", message: "*backflip!* =��+" },
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  
  // Performance optimization - detect device capabilities once
  const deviceCaps = useMemo(() => getDeviceCapabilities(), []);
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const isLowEndDevice = deviceCaps.isLowEnd || deviceCaps.prefersReducedMotion;
  
  // Mascot state
  const [currentMascot, setCurrentMascot] = useState<MascotType>("robot");
  const [isMascotStoreOpen, setIsMascotStoreOpen] = useState(false);
  
  // Robot state - simplified on low-end devices
  const [robotMood, setRobotMood] = useState<RobotMood>("idle");
  const [robotMessage, setRobotMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isMobileCtaVisible, setIsMobileCtaVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [lastSection, setLastSection] = useState("hero");
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [isWaving, setIsWaving] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isDoingTrick, setIsDoingTrick] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [interactionTarget, setInteractionTarget] = useState<{ element: string; action: string } | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const robotRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);
  const lastClickTime = useRef(0);
  
  const robotControls = useAnimation();
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  const messageTimeoutRef = useRef<NodeJS.Timeout>();
  const wanderTimeoutRef = useRef<NodeJS.Timeout>();
  const sectionMessageRef = useRef<NodeJS.Timeout>();
  const greetingTimeoutRef = useRef<NodeJS.Timeout>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load saved mascot on mount
  useEffect(() => {
    const saved = getSavedMascot();
    setCurrentMascot(saved);
  }, []);
  
  // Handle mascot change
  const handleMascotChange = (mascot: MascotType) => {
    setCurrentMascot(mascot);
    setRobotMood("excited");
    setRobotMessage(`${getMascotConfig(mascot).emoji} New look!`);
    setShowMessage(true);
    
    // Skip animation on low-end devices
    if (!isLowEndDevice) {
      robotControls.start({
        rotate: [0, 360],
        scale: [1, 1.3, 1],
        transition: { duration: 0.6 }
      });
    }
    
    setTimeout(() => setShowMessage(false), 2000);
  };

  useEffect(() => {
    if (!isLowEndDevice) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [messages, isLowEndDevice]);

  // Check first visit on mount
  useEffect(() => {
    const visited = localStorage.getItem("stan-robot-visited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("stan-robot-visited", "true");
    } else {
      setHasGreeted(true);
    }
  }, []);

  // First visit greeting sequence
  useEffect(() => {
    if (!isFirstVisit || hasGreeted || isOpen) return;
    
    const greetings = getFirstVisitGreetings();
    
    const runGreeting = () => {
      if (greetingIndex < greetings.length) {
        const greeting = greetings[greetingIndex];
        setRobotMood(greeting.mood);
        setRobotMessage(greeting.message);
        setShowMessage(true);
        
        // Animate robot during greeting
        robotControls.start({
          scale: [1, 1.1, 1],
          rotate: greetingIndex === 0 ? [0, -10, 10, 0] : [0, 5, -5, 0],
          transition: { duration: 0.5 }
        });
        
        greetingTimeoutRef.current = setTimeout(() => {
          setShowMessage(false);
          setTimeout(() => {
            setGreetingIndex(prev => prev + 1);
          }, 500);
        }, greeting.delay);
      } else {
        setHasGreeted(true);
        setRobotMood("happy");
      }
    };
    
    if (greetingIndex === 0) {
      // Start first greeting after initial delay
      greetingTimeoutRef.current = setTimeout(runGreeting, 1500);
    } else {
      runGreeting();
    }
    
    return () => clearTimeout(greetingTimeoutRef.current);
  }, [isFirstVisit, hasGreeted, greetingIndex, isOpen, robotControls]);

  // Page change detection
  useEffect(() => {
    if (!hasGreeted || isOpen) return;
    
    // Track section visit
    const section = pathname.split('/')[1] || 'home';
    trackSectionVisit(section);
    
    // Use time-aware page welcome
    const welcome = getPageWelcome(pathname);
    if (welcome) {
      // Small delay to let page render
      setTimeout(() => {
        setRobotMood(welcome.mood);
        setRobotMessage(welcome.message);
        setShowMessage(true);
        
        robotControls.start({
          scale: [1, 1.15, 1],
          y: [0, -10, 0],
          transition: { duration: 0.6 }
        });
        
        setTimeout(() => setShowMessage(false), 4000);
      }, 800);
    }
  }, [pathname, hasGreeted, isOpen, robotControls]);

  // Section detection via Intersection Observer
  useEffect(() => {
    const sections = [
      "hero", "about", "app-store", "services", "projects", 
      "writing", "journey", "blog", "support", "testimonials", "ecosystem"
    ];
    
    const observers: IntersectionObserver[] = [];
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                setCurrentSection(sectionId);
              }
            });
          },
          { threshold: [0.3, 0.5] }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Section change - show contextual message
  useEffect(() => {
    if (!hasGreeted || isOpen || currentSection === lastSection) return;
    
    setLastSection(currentSection);
    
    const sectionData = SECTION_MESSAGES[currentSection];
    if (sectionData && Math.random() > 0.3) { // 70% chance to speak
      clearTimeout(sectionMessageRef.current);
      sectionMessageRef.current = setTimeout(() => {
        const randomMsg = sectionData.messages[Math.floor(Math.random() * sectionData.messages.length)];
        setRobotMood(sectionData.mood);
        setRobotMessage(randomMsg);
        setShowMessage(true);
        
        // Little hop animation
        robotControls.start({
          y: [0, -8, 0],
          transition: { duration: 0.4 }
        });
        
        setTimeout(() => setShowMessage(false), 3500);
      }, 1000);
    }
    
    return () => clearTimeout(sectionMessageRef.current);
  }, [currentSection, lastSection, hasGreeted, isOpen, robotControls]);

  // Mobile CTA bar detection - robot moves up and prompts contact
  useEffect(() => {
    const checkMobileCta = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 1024;
      
      // Detect scroll direction for robot reaction
      if (scrollY > lastScrollY.current + 50) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY.current - 50) {
        setScrollDirection("up");
      }
      lastScrollY.current = scrollY;
      
      // Mobile CTA typically shows after scrolling past hero
      const ctaVisible = isMobile && scrollY > windowHeight * 0.5;
      
      if (ctaVisible && !isMobileCtaVisible) {
        setIsMobileCtaVisible(true);
        // Show contact prompt
        if (hasGreeted && !isOpen) {
          const contactMsg = CONTACT_PROMPTS[Math.floor(Math.random() * CONTACT_PROMPTS.length)];
          setRobotMood("excited");
          setRobotMessage(contactMsg);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 3500);
        }
      } else if (!ctaVisible && isMobileCtaVisible) {
        setIsMobileCtaVisible(false);
      }
    };

    window.addEventListener("scroll", checkMobileCta, { passive: true });
    window.addEventListener("resize", checkMobileCta);
    checkMobileCta();
    
    return () => {
      window.removeEventListener("scroll", checkMobileCta);
      window.removeEventListener("resize", checkMobileCta);
    };
  }, [isMobileCtaVisible, hasGreeted, isOpen]);

  // Robot wanders around on its own - CALMER movement, more purposeful
  const wander = useCallback(() => {
    if (isDragging || isOpen || !hasGreeted) return;
    
    // Get viewport dimensions
    const vw = typeof window !== "undefined" ? window.innerWidth : 400;
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    
    // Stay mostly in bottom-right area, occasional exploration
    const exploreChance = Math.random();
    let newX = 0;
    let newY = 0;
    
    if (exploreChance > 0.8) {
      // Rare: explore around the page
      newX = -(Math.random() * (vw * 0.6));
      newY = -(Math.random() * (vh * 0.5));
    } else {
      // Usually: stay in bottom-right quadrant with small movements
      newX = -(Math.random() * 150);
      newY = -(Math.random() * 150);
    }
    
    setRobotPosition({ x: newX, y: newY });
    
    // Smooth animation
    robotControls.start({
      x: newX,
      y: newY,
      transition: { 
        duration: 3 + Math.random() * 2, 
        ease: "easeInOut",
      }
    });
    
    // Schedule next wander - much less frequent (15-25 seconds)
    wanderTimeoutRef.current = setTimeout(wander, 15000 + Math.random() * 10000);
  }, [isDragging, isOpen, isMobileCtaVisible, robotControls, hasGreeted]);
  
  // React to scroll with subtle movement
  useEffect(() => {
    if (!hasGreeted || isOpen || isDragging) return;
    
    let scrollTimeout: NodeJS.Timeout | undefined;
    let lastScrollTime = 0;
    
    const handleScroll = () => {
      const now = Date.now();
      // Throttle scroll reactions - only once per second
      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;
      
      // Subtle tilt when scrolling (no jump)
      if (!isJumping) {
        robotControls.start({
          rotate: scrollDirection === "down" ? 5 : -5,
          transition: { duration: 0.2 }
        }).then(() => {
          robotControls.start({
            rotate: 0,
            transition: { duration: 0.5 }
          });
        });
      }
      
      // Clear any pending timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [hasGreeted, isOpen, isDragging, robotControls, robotPosition.y, scrollDirection, isJumping, wander]);

  // Start wandering after greeting
  useEffect(() => {
    if (!hasGreeted) return;
    
    const initialDelay = setTimeout(() => {
      wander();
    }, 3000);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(wanderTimeoutRef.current);
    };
  }, [wander, hasGreeted]);

  // PAGE ELEMENT INTERACTIONS - Robot interacts with page content
  useEffect(() => {
    if (!hasGreeted || isOpen || isDragging) return;
    
    // Interaction targets on the page - with data attributes for better targeting
    const interactionTargets = [
      { selector: "[data-robot-interact='title'], h1", action: "read", message: "Ooh, big title! =���", mood: "excited" as RobotMood },
      { selector: "[data-name='kunal'], [data-name]", action: "wave", message: "Hey Kunal! =���", mood: "wave" as RobotMood },
      { selector: "[data-highlight='ecosystem']", action: "point", message: "7K Ecosystem! =��", mood: "star" as RobotMood },
      { selector: "[data-robot-interact='cta']", action: "point", message: "Click this! =���", mood: "happy" as RobotMood },
      { selector: "img[alt*='react'], img[alt*='React'], [data-tech='react']", action: "spin", message: "React goes brrr! Gܢn+�", mood: "excited" as RobotMood },
      { selector: ".tech-icon, [data-tech]", action: "poke", message: "Cool tech! =��+", mood: "cool" as RobotMood },
      { selector: "[data-app], .app-card", action: "examine", message: "Nice app! =���", mood: "star" as RobotMood },
      { selector: "a[href*='github']", action: "code", message: "GitHub! =���", mood: "cool" as RobotMood },
      { selector: ".book-card, [data-book]", action: "read", message: "A book! =���", mood: "thinking" as RobotMood },
    ];
    
    const interactWithElement = () => {
      if (isInteracting || isHovered || isDragging || isOpen) return;
      
      // Find a random visible element to interact with
      for (const target of interactionTargets.sort(() => Math.random() - 0.5)) {
        const element = document.querySelector(target.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Check if element is in viewport
          if (rect.top >= 0 && rect.bottom <= window.innerHeight &&
              rect.left >= 0 && rect.right <= window.innerWidth) {
            
            setIsInteracting(true);
            setInteractionTarget({ element: target.selector, action: target.action });
            
            // Calculate position to go to (near the element)
            const targetX = -(window.innerWidth - rect.right - 40);
            const targetY = -(window.innerHeight - rect.bottom - 10);
            
            // Move to the element
            setRobotMood(target.mood);
            setRobotMessage(target.message);
            setShowMessage(true);
            
            robotControls.start({
              x: targetX,
              y: targetY,
              transition: { duration: 1.5, ease: "easeInOut" }
            }).then(() => {
              // Do the interaction animation
              switch (target.action) {
                case "spin":
                  robotControls.start({
                    rotate: [0, 360],
                    transition: { duration: 0.6 }
                  });
                  break;
                case "wave":
                  setIsWaving(true);
                  setTimeout(() => setIsWaving(false), 1000);
                  break;
                case "poke":
                  robotControls.start({
                    x: [targetX, targetX + 10, targetX],
                    transition: { duration: 0.3 }
                  });
                  break;
                case "read":
                  // Eyes move as if reading
                  setEyeOffset({ x: -2, y: 0 });
                  setTimeout(() => setEyeOffset({ x: 2, y: 0 }), 300);
                  setTimeout(() => setEyeOffset({ x: -2, y: 0 }), 600);
                  setTimeout(() => setEyeOffset({ x: 0, y: 0 }), 900);
                  break;
                case "point":
                  setIsWaving(true);
                  setTimeout(() => setIsWaving(false), 800);
                  break;
              }
              
              // Return to normal position after a delay
              setTimeout(() => {
                setShowMessage(false);
                setIsInteracting(false);
                setInteractionTarget(null);
                // Move back towards home area
                robotControls.start({
                  x: -(Math.random() * 100),
                  y: -(Math.random() * 100),
                  transition: { duration: 2 }
                });
              }, 2500);
            });
            
            return; // Only interact with one element at a time
          }
        }
      }
    };
    
    // Run interactions every 20-40 seconds
    const interactionInterval = setInterval(() => {
      if (Math.random() > 0.6) { // 40% chance each interval
        interactWithElement();
      }
    }, 20000 + Math.random() * 20000);
    
    return () => clearInterval(interactionInterval);
  }, [hasGreeted, isOpen, isDragging, isHovered, isInteracting, robotControls]);

  // Mouse tracking for robot to look at cursor - eyes follow mouse
  // Disabled on low-end devices for performance
  useEffect(() => {
    // Skip mouse tracking on low-end devices
    if (isLowEndDevice) return;
    
    // Throttled mouse handler for performance
    const handleMouseMove = throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate eye offset based on mouse position relative to robot
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const robotCenterX = rect.left + rect.width / 2;
        const robotCenterY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - robotCenterX) / 50;
        const deltaY = (e.clientY - robotCenterY) / 50;
        
        // Clamp the offset
        const maxOffset = 3;
        setEyeOffset({
          x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
          y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
        });
      }
    }, 50); // Throttle to 20fps max for eye tracking
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isLowEndDevice]);
  
  // Random blinking
  useEffect(() => {
    if (!hasGreeted || robotMood === "sleeping") return;
    
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    
    return () => clearInterval(blinkInterval);
  }, [hasGreeted, robotMood]);
  
  // Reset click count after inactivity
  useEffect(() => {
    if (clickCount > 0) {
      const timeout = setTimeout(() => setClickCount(0), 5000);
      return () => clearTimeout(timeout);
    }
  }, [clickCount]);
  
  // Trigger wave animation periodically - much less frequent
  useEffect(() => {
    if (!hasGreeted || isOpen) return;
    
    const waveInterval = setInterval(() => {
      // Only 20% chance, not when interacting, and not when hovered/dragging
      if (Math.random() > 0.8 && !isHovered && !isDragging && !isInteracting) {
        setIsWaving(true);
        setRobotMood("wave");
        setRobotMessage("Hey! =���");
        setShowMessage(true);
        
        setTimeout(() => {
          setIsWaving(false);
          setShowMessage(false);
          setRobotMood("happy");
        }, 1500);
      }
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(waveInterval);
  }, [hasGreeted, isOpen, isHovered, isDragging]);

  // Random mood changes and idle thoughts - CALMER, less frequent
  useEffect(() => {
    if (!hasGreeted) return;
    
    const moodInterval = setInterval(() => {
      if (isOpen || isHovered || showMessage || isDragging || isInteracting) return;
      
      // Much lower chance to do anything (only 20%)
      if (Math.random() > 0.8) {
        // Random chance for a trick
        const trick = ROBOT_TRICKS[Math.floor(Math.random() * ROBOT_TRICKS.length)];
        setRobotMessage(trick.message);
        setShowMessage(true);
        
        // Perform the trick animation
        switch (trick.name) {
          case "spin":
            robotControls.start({
              rotate: [0, 360],
              transition: { duration: 0.6 }
            });
            break;
          case "jump":
            robotControls.start({
              y: [robotPosition.y, robotPosition.y - 60, robotPosition.y],
              transition: { duration: 0.5, times: [0, 0.4, 1] }
            });
            break;
          case "dance":
            robotControls.start({
              rotate: [0, -15, 15, -15, 15, 0],
              x: [robotPosition.x, robotPosition.x - 10, robotPosition.x + 10, robotPosition.x - 10, robotPosition.x + 10, robotPosition.x],
              transition: { duration: 0.8 }
            });
            break;
          case "wave":
            robotControls.start({
              rotate: [0, -20, 20, -20, 20, 0],
              scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
              transition: { duration: 0.6 }
            });
            break;
          case "flip":
            robotControls.start({
              rotateX: [0, 360],
              y: [robotPosition.y, robotPosition.y - 40, robotPosition.y],
              transition: { duration: 0.7 }
            });
            break;
        }
        
        setTimeout(() => setShowMessage(false), 2000);
        return;
      }
      
      // Sometimes show an idle thought (now with proactive tips)
      if (Math.random() > 0.7) {
        const thought = getIdleThought();
        setRobotMessage(thought);
        setShowMessage(true);
        messageTimeoutRef.current = setTimeout(() => setShowMessage(false), 2500);
      }
      
      // Random mood
      const moods: RobotMood[] = ["idle", "happy", "wink", "thinking", "cool", "star"];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setRobotMood(randomMood);
    }, 8000 + Math.random() * 6000); // 8-14 seconds between actions

    return () => {
      clearInterval(moodInterval);
      clearTimeout(messageTimeoutRef.current);
    };
  }, [isOpen, isHovered, showMessage, hasGreeted, isDragging, robotControls, robotPosition.x, robotPosition.y]);

  // Idle detection - robot falls asleep
  useEffect(() => {
    if (!hasGreeted) return;
    
    const resetIdleTimer = () => {
      clearTimeout(idleTimeoutRef.current);
      if (robotMood === "sleeping") {
        setRobotMood("surprised");
        setRobotMessage("Oh! You're back! =���");
        setShowMessage(true);
        
        robotControls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 0.3 }
        });
        
        setTimeout(() => {
          setShowMessage(false);
          setRobotMood("happy");
        }, 2000);
      }
      
      idleTimeoutRef.current = setTimeout(() => {
        if (!isOpen && !isHovered) {
          setRobotMood("sleeping");
          setRobotMessage("=��� zzz...");
          setShowMessage(true);
        }
      }, 60000); // Sleep after 60s idle
    };

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("touchstart", resetIdleTimer);
    window.addEventListener("keypress", resetIdleTimer);
    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("touchstart", resetIdleTimer);
      window.removeEventListener("keypress", resetIdleTimer);
      clearTimeout(idleTimeoutRef.current);
    };
  }, [isOpen, isHovered, robotMood, robotControls, hasGreeted]);

  // Hover reactions - context aware
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsWaving(true); // Start waving on hover
    clearTimeout(messageTimeoutRef.current);
    
    // Context-aware hover messages
    const contextMessages: Record<string, string> = {
      hero: "Ask me anything about Kunal! =���",
      about: "Want to know more about him? =�Ƽ",
      "app-store": "Need app recommendations? =���",
      services: "Get a FREE quote! Just ask! =�Ʀ",
      projects: "Like what you see? Let's talk! =�Ŀ",
      writing: "Want book suggestions? =���",
      books: "Looking for something to read? =���",
      journey: "Curious about Kunal's story? =���",
      blog: "Any questions about the posts? =���",
      support: "Want to support Kunal? G��n+�",
      testimonials: "Want to leave a review? G��",
      ecosystem: "Explore the 7K universe! =���",
    };
    
    setRobotMood("excited");
    setRobotMessage(contextMessages[currentSection] || "Click me to chat! =���");
    setShowMessage(true);
    
    // BIG excited animation
    robotControls.start({
      scale: [1, 1.3, 1.1],
      rotate: [0, -15, 15, -10, 10, 0],
      y: [robotPosition.y, robotPosition.y - 20, robotPosition.y],
      transition: { duration: 0.6 }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsWaving(false);
    messageTimeoutRef.current = setTimeout(() => setShowMessage(false), 400);
    setRobotMood("happy");
    robotControls.start({ 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.3 }
    });
  };

  const handleFollowUp = (question: string) => {
    setInput(question);
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    askChatAssistant(question).then((response) => {
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }).catch((error) => {
      console.error("Failed to get response from AI", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Track chat interaction for visitor memory
    incrementChatCount();

    try {
      const response = await askChatAssistant(input);
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to get response from AI", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setRobotMood("happy");
      getGreeting().then((greeting) => {
        setMessages([
          { role: "assistant", content: greeting }
        ]);
      });
    }
    
    if (isOpen) {
      clearTimeout(wanderTimeoutRef.current);
      clearTimeout(messageTimeoutRef.current);
      setShowMessage(false);
    } else if (hasGreeted) {
      wanderTimeoutRef.current = setTimeout(wander, 2000);
    }
  }, [isOpen, messages.length, wander, hasGreeted]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Robot is now separate from Sheet trigger */}
        <motion.div
          ref={robotRef as any}
          className="fixed bottom-6 right-6 z-50 cursor-grab select-none"
          initial={{ opacity: 0, scale: 0, y: 100, rotate: -180 }}
          animate={robotControls}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          drag
          dragConstraints={{ 
            left: -(typeof window !== "undefined" ? window.innerWidth - 100 : 300), 
            right: 50, 
            top: -(typeof window !== "undefined" ? window.innerHeight - 100 : 600), 
            bottom: 50 
          }}
          dragElastic={0.15}
          dragMomentum={true}
          onDragStart={() => {
            setIsDragging(true);
            setRobotMood("excited");
          }}
          onDrag={(_, info) => {
            setRobotPosition({ x: info.offset.x, y: info.offset.y });
          }}
          onDragEnd={(_, info) => {
            setIsDragging(false);
            setRobotPosition({ x: info.offset.x, y: info.offset.y });
            setRobotMood("happy");
            setRobotMessage("That was fun! =���");
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000);
          }}
          whileTap={{ scale: 0.95, cursor: "grabbing" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          onClick={(e) => {
            e.stopPropagation();
            // Just react to clicks with expressions, don't open chat
            setClickCount((prev) => {
              const newCount = prev + 1;
              if (newCount === 3) {
                setRobotMood("happy");
                setRobotMessage("Hehe! =���");
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 1500);
              } else if (newCount === 5) {
                setRobotMood("love");
                setRobotMessage("=���");
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 1500);
              } else if (newCount >= 8) {
                setRobotMood("surprised");
                setRobotMessage("=���");
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 1500);
                return 0; // Reset
              }
              return newCount;
            });
          }}
        >
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-primary/40 rounded-full blur-xl"
              animate={{
                scale: isHovered ? [1, 1.6, 1.3] : [1, 1.3, 1],
                opacity: robotMood === "sleeping" ? 0.15 : isHovered ? 0.9 : 0.6,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Trail particles when moving */}
            {isDragging && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full"
                    initial={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 0, 
                      scale: 0,
                      x: (Math.random() - 0.5) * 40,
                      y: (Math.random() - 0.5) * 40,
                    }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </>
            )}
            
            {/* CUSTOM STAN AI ROBOT or OTHER MASCOT */}
            <motion.div
              className="relative w-20 h-24"
              animate={{
                y: robotMood === "sleeping" ? [0, 5, 0] : isHovered ? [0, -8, 0] : [0, -4, 0],
                rotate: isDragging ? [0, -12, 12, 0] : isDoingTrick ? 0 : 0,
                scale: isHovered ? 1.15 : robotMood === "sleeping" ? [1, 1.02, 1] : 1,
              }}
              transition={{ 
                y: { duration: robotMood === "sleeping" ? 3 : 1.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.2, repeat: isDragging ? Infinity : 0 },
                scale: { duration: robotMood === "sleeping" ? 2 : 0.2, repeat: robotMood === "sleeping" ? Infinity : 0 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Mascot Store Button */}
              <MascotSelector 
                currentMascot={currentMascot} 
                onClick={() => setIsMascotStoreOpen(true)} 
              />
              
              {/* Render different mascot bodies based on selection */}
                {currentMascot === "robot" ? (
                  <RobotBody
                    mood={robotMood}
                    isHovered={isHovered}
                    isBlinking={isBlinking}
                    eyeOffset={eyeOffset}
                    isWaving={isWaving}
                  />
                ) : (
                  <MascotBody
                    mascotType={currentMascot}
                    mood={robotMood}
                    isHovered={isHovered}
                    isBlinking={isBlinking}
                    eyeOffset={eyeOffset}
                    isWaving={isWaving}
                    isDragging={isDragging}
                    isJumping={isJumping}
                  />
                )}
            </motion.div>
            
            {/* Speech bubble - ALWAYS visible above robot */}
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none z-[60]"
                  style={{ 
                    // Ensure bubble stays in viewport
                    maxWidth: "calc(100vw - 40px)",
                  }}
                  initial={{ opacity: 0, y: 15, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div 
                    className="bg-background/95 backdrop-blur-md border-2 border-primary/50 rounded-2xl px-4 py-2.5 text-sm shadow-2xl shadow-primary/30"
                    animate={{ 
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-foreground font-semibold whitespace-nowrap">{robotMessage}</span>
                  </motion.div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-background/95 border-r-2 border-b-2 border-primary/50 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Notification pulse when sleeping */}
            {robotMood === "sleeping" && (
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-background flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-[10px]">=���</span>
              </motion.div>
            )}
            
            {/* Section indicator - more visible */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary/90 rounded-full border border-white/30 text-[8px] text-white font-bold whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              {currentSection === "hero" ? "=��� Scroll!" : `=��� ${currentSection.replace("-", " ")}`}
            </motion.div>
            
            {/* Chat button - separate from robot */}
            <SheetTrigger asChild>
              <motion.button
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 cursor-pointer z-10"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                title="Open Chat"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </motion.button>
            </SheetTrigger>
          </motion.div>
        
        <SheetContent side="right" className="flex h-full w-full flex-col p-0 sm:max-w-md md:max-w-lg">
          <SheetHeader className="p-4 border-b shrink-0">
            <SheetTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Stan AI Assistant
            </SheetTitle>
            <p className="text-sm text-muted-foreground">Ask me anything about Kunal!</p>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="p-4 space-y-4 pb-6">
              {messages.map((message, index) => (
                  <div
                  key={index}
                  className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                  )}
                  >
                  {message.role === 'assistant' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                  )}
                  <div className="flex flex-col gap-2 max-w-[85%] sm:max-w-xs">
                    <div
                        className={cn(
                        "rounded-lg px-4 py-2 text-sm whitespace-pre-wrap break-words",
                        message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                    >
                        {message.content}
                    </div>
                    
                    {/* Follow-up questions */}
                    {message.role === "assistant" && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-1">
                        <p className="text-xs text-muted-foreground px-1">=��� You might also want to know:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {message.followUpQuestions.map((question, i) => (
                            <button
                              key={i}
                              onClick={() => handleFollowUp(question)}
                              disabled={isLoading}
                              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                   {message.role === 'user' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                  )}
                  </div>
              ))}
              {isLoading && (
                  <div className="flex items-start gap-3 justify-start">
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                      <div className="max-w-xs rounded-lg px-4 py-2 text-sm bg-secondary flex items-center gap-2">
                         <Loader2 className="h-4 w-4 animate-spin"/>
                         <span>Thinking...</span>
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
              </div>
          </div>
          <div className="p-4 border-t bg-background shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Kunal, his projects..."
                autoComplete="off"
                disabled={isLoading}
                className="text-base"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Mascot Store Modal */}
      <MascotStore
        isOpen={isMascotStoreOpen}
        onClose={() => setIsMascotStoreOpen(false)}
        currentMascot={currentMascot}
        onSelectMascot={handleMascotChange}
      />
    </>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Languages, 
  Target, 
  AppWindow, 
  Gamepad2, 
  Wrench, 
  Crown,
  GraduationCap,
  MapPin,
  Briefcase,
  CheckCircle2,
  Brain,
  ChevronDown,
  ChevronUp,
  Bot,
  Send,
  Loader2,
  User
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioSections } from "@/lib/sections-data";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { askChatAssistant, getGreeting } from "@/ai/stan-assistant";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ALL_STYLES, getStyleIcon } from "./stan-ai-styles";
import {
  getCurrentTime,
  getCurrentDate,
  getDayOfWeek,
  copyEmail,
  copyPhone,
  copyWhatsApp,
  searchGoogle,
  searchYouTube,
  searchGitHub,
  downloadCV,
  getPortfolioStats,
  getLatestProject,
  getMostPopularApp,
  getTechStack,
  getAchievements,
  getStanAIInfo,
  getVersion,
  explainCapabilities,
  resetChatMessage,
} from "@/lib/stan-utilities";
import { getEntertainment } from "@/lib/stan-entertainment";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: PERSONAL_INFO.skills.frontend,
    color: "from-blue-500 to-cyan-500",
    logos: {
      "React": "⚛️",
      "Next.js": "▲",
      "TypeScript": "🔷",
      "Tailwind CSS": "💨",
      "Framer Motion": "🎬",
      "shadcn/ui": "🎨"
    }
  },
  {
    title: "Backend",
    icon: AppWindow,
    skills: PERSONAL_INFO.skills.backend,
    color: "from-green-500 to-emerald-500",
    logos: {
      "Node.js": "💚",
      "Express": "🚂",
      "Firebase": "🔥",
      "Firestore": "📦",
      "API Development": "🔗"
    }
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: PERSONAL_INFO.skills.tools,
    color: "from-purple-500 to-pink-500",
    logos: {
      "Git": "🔀",
      "GitHub": "🐙",
      "VS Code": "💙",
      "Figma": "🎨",
      "Vercel": "▲",
      "npm/pnpm": "📦"
    }
  },
  {
    title: "AI/ML",
    icon: Target,
    skills: PERSONAL_INFO.skills.ai,
    color: "from-orange-500 to-red-500",
    logos: {
      "Google AI (Gemini)": "✨",
      "Genkit": "🧬",
      "AI Integration": "🤖",
      "Chatbots": "💬"
    }
  }
];

const interests = [
  { icon: Target, text: "AI", color: "text-blue-500" },
  { icon: AppWindow, text: "App Design", color: "text-purple-500" },
  { icon: Gamepad2, text: "Game Dev", color: "text-green-500" },
  { icon: Wrench, text: "Handyman Skills", color: "text-orange-500" },
  { icon: Crown, text: "Chess", color: "text-yellow-500" },
  { icon: Brain, text: "Problem Solving", color: "text-pink-500" },
  { icon: Target, text: "Money", color: "text-emerald-500" },
];

type Message = {
  role: "user" | "assistant";
  content: string;
  followUpQuestions?: string[];
};

const AboutSection = () => {
  const { about } = portfolioSections;
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(6); // Default to Soft Bubble (index 6 = Style 7)
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Get current style
  const currentStyle = ALL_STYLES[currentStyleIndex];

  // Don't render if disabled
  if (!about.enabled) return null;

  // Load greeting on mount (without triggering scroll)
  useEffect(() => {
    getGreeting().then((greeting) => {
      setMessages([
        { role: "assistant", content: greeting }
      ]);
    });
  }, []);

  // Check for navigation commands
  const executeCommand = (command: string): string | null => {
    const cmd = command.toLowerCase().trim();
    
    // Style change commands - NEW!
    if (cmd.includes('change style') || cmd.includes('switch style') || cmd.includes('theme') || cmd.startsWith('style ')) {
      // Check for number input first (style 1, style 2, etc.)
      const numberMatch = cmd.match(/style\s+(\d+)/);
      if (numberMatch) {
        const styleNum = parseInt(numberMatch[1]);
        if (styleNum >= 1 && styleNum <= 15) {
          setCurrentStyleIndex(styleNum - 1);
          const styleNames = ['Neon Glow ⚡', 'Glass Morphism ✨', 'Flat Minimal 📱', 'Retro Terminal 💻', 'Bold Gradient 🌈', 'Dark Neumorphic 🌙', 'Soft Bubble ⭕', 'Card Shadow 📦', 'Cyan Bubble 💠', 'Pink Bubble 💗', 'Orange Bubble 🔥', 'Violet Bubble 💜', 'Rainbow Bubble 🌈', 'Sunset Bubble 🌅', 'Ocean Rainbow 🌊'];
          return `🎨 Style changed to **${styleNames[styleNum - 1]}**!`;
        }
      }
      
      // Check for specific style names
      if (cmd.includes('neon')) {
        setCurrentStyleIndex(0);
        return "🎨 Style changed to **Neon Glow**! ⚡";
      }
      if (cmd.includes('glass')) {
        setCurrentStyleIndex(1);
        return "🎨 Style changed to **Glass Morphism**! ✨";
      }
      if (cmd.includes('flat') || cmd.includes('minimal')) {
        setCurrentStyleIndex(2);
        return "🎨 Style changed to **Flat Minimal**! 📱";
      }
      if (cmd.includes('terminal') || cmd.includes('retro')) {
        setCurrentStyleIndex(3);
        return "🎨 Style changed to **Retro Terminal**! 💻";
      }
      if (cmd.includes('bold gradient')) {
        setCurrentStyleIndex(4);
        return "🎨 Style changed to **Bold Gradient**! 🌈";
      }
      if (cmd.includes('dark') || cmd.includes('neumorphic')) {
        setCurrentStyleIndex(5);
        return "🎨 Style changed to **Dark Neumorphic**! 🌙";
      }
      if (cmd.includes('bubble') && !cmd.includes('cyan') && !cmd.includes('pink') && !cmd.includes('orange') && !cmd.includes('violet') && !cmd.includes('rainbow') && !cmd.includes('sunset') && !cmd.includes('ocean')) {
        setCurrentStyleIndex(6);
        return "🎨 Style changed to **Soft Bubble**! ⭕";
      }
      if (cmd.includes('card') || cmd.includes('shadow')) {
        setCurrentStyleIndex(7);
        return "🎨 Style changed to **Card Shadow**! 📦";
      }
      if (cmd.includes('cyan')) {
        setCurrentStyleIndex(8);
        return "🎨 Style changed to **Cyan Bubble**! 💠";
      }
      if (cmd.includes('pink')) {
        setCurrentStyleIndex(9);
        return "🎨 Style changed to **Pink Bubble**! 💗";
      }
      if (cmd.includes('orange')) {
        setCurrentStyleIndex(10);
        return "🎨 Style changed to **Orange Bubble**! 🔥";
      }
      if (cmd.includes('violet') || cmd.includes('purple')) {
        setCurrentStyleIndex(11);
        return "🎨 Style changed to **Violet Bubble**! 💜";
      }
      if (cmd.includes('rainbow')) {
        setCurrentStyleIndex(12);
        return "🎨 Style changed to **Rainbow Bubble**! 🌈";
      }
      if (cmd.includes('sunset')) {
        setCurrentStyleIndex(13);
        return "🎨 Style changed to **Sunset Bubble**! 🌅";
      }
      if (cmd.includes('ocean rainbow')) {
        setCurrentStyleIndex(14);
        return "🎨 Style changed to **Ocean Rainbow**! 🌊";
      }
      
      // Generic style change
      return `🎨 **Available Styles:**
1️⃣ Neon Glow ⚡
2️⃣ Glass Morphism ✨
3️⃣ Flat Minimal 📱
4️⃣ Retro Terminal 💻
5️⃣ Bold Gradient 🌈
6️⃣ Dark Neumorphic 🌙
7️⃣ Soft Bubble ⭕ (default)
8️⃣ Card Shadow 📦
9️⃣ Cyan Bubble 💠
🔟 Pink Bubble 💗
1️⃣1️⃣ Orange Bubble 🔥
1️⃣2️⃣ Violet Bubble 💜
1️⃣3️⃣ Rainbow Bubble 🌈
1️⃣4️⃣ Sunset Bubble 🌅
1️⃣5️⃣ Ocean Rainbow 🌊

Say "change style neon" or "style 1" to switch!`;
    }
    
    // Help command - list all available commands
    if (cmd === 'help' || cmd === 'commands' || cmd === 'what can you do') {
      return `✨ **Stan AI Enhanced Commands**

**🎨 Style Control:**
🖌️ "change style" - See all 15 styles
🎨 "style neon" - Switch to specific style
🔢 "style 1" to "style 15" - Quick switch

**Navigation:**
📝 "open blog" - View blog posts
🎯 "show apps" - 7K Ecosystem apps  
💼 "show projects" - Portfolio
🛠️ "open services" - Services & pricing
📧 "open contact" - Get in touch
🏠 "go to top" - Back to homepage

**External Links:**
💬 "whatsapp" - Message on WhatsApp
👨‍💻 "github" - Visit GitHub profile
💼 "linkedin" - Connect on LinkedIn
📱 "instagram" - Follow on Instagram

**Service Pages:**
📋 "menu" - View service menu
💰 "calculator" - Pricing calculator
📦 "packages" - Service packages

💡 Type naturally! I understand variations and questions too!`;
    }
    
    // External links commands
    if (cmd.includes('github') || cmd.includes('git hub') || cmd.includes('open github')) {
      window.open('https://github.com/kunu2009', '_blank');
      return "✅ Opening Kunal's GitHub profile... Check out his open-source projects!";
    }
    if (cmd.includes('linkedin') || cmd.includes('linked in') || cmd.includes('open linkedin')) {
      window.open('https://www.linkedin.com/in/kunal-chheda-b36731388', '_blank');
      return "✅ Opening LinkedIn profile... Connect with Kunal professionally!";
    }
    if (cmd.includes('instagram') || cmd.includes('insta') || cmd.includes('open instagram')) {
      window.open('https://www.instagram.com/7kc_me/', '_blank');
      return "✅ Opening Instagram... Follow @7kc_me for updates!";
    }
    if (cmd.includes('twitter') || cmd.includes('x.com') || cmd.includes('open twitter')) {
      window.open('https://twitter.com/kunal7k', '_blank');
      return "✅ Opening Twitter/X... Follow @kunal7k for tech updates!";
    }
    
    // Service-specific pages
    if (cmd.includes('menu') || cmd.includes('service menu') || cmd.includes('show menu')) {
      window.location.href = '/menu';
      return "✅ Opening service menu... Browse all available services!";
    }
    if (cmd.includes('calculator') || cmd.includes('pricing calculator') || cmd.includes('price calculator')) {
      window.location.href = '/calculator';
      return "✅ Opening pricing calculator... Get instant quotes!";
    }
    if (cmd.includes('packages') || cmd.includes('service packages') || cmd.includes('show packages')) {
      window.location.href = '/packages';
      return "✅ Opening service packages... Find the perfect plan!";
    }
    
    // Navigation commands
    if (cmd.includes('open blog') || cmd.includes('show blog') || cmd.includes('go to blog') || cmd.includes('read blog')) {
      window.location.href = '/blog';
      return "✅ Opening blog page... Explore tech articles & tutorials!";
    }
    if (cmd.includes('open apps') || cmd.includes('show apps') || cmd.includes('go to apps') || cmd.includes('7k apps')) {
      document.getElementById('app-store')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Apps section... Discover 24+ productivity apps!";
    }
    if (cmd.includes('open projects') || cmd.includes('show projects') || cmd.includes('go to projects') || cmd.includes('portfolio')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Projects section... Explore Kunal's work!";
    }
    if (cmd.includes('open services') || cmd.includes('show services') || cmd.includes('go to services') || cmd.includes('hire')) {
      window.location.href = '/services';
      return "✅ Opening services page... See pricing & packages!";
    }
    if (cmd.includes('open contact') || cmd.includes('show contact') || cmd.includes('contact kunal') || cmd.includes('get in touch')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Contact section... Let's connect!";
    }
    if (cmd.includes('go to top') || cmd.includes('scroll to top') || cmd.includes('go home') || cmd.includes('back to top')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return "✅ Scrolling to top... Back to the beginning!";
    }
    if (cmd.includes('whatsapp') || cmd.includes('message kunal') || cmd.includes('chat on whatsapp')) {
      window.open('https://wa.me/918591247148', '_blank');
      return "✅ Opening WhatsApp... Start a conversation with Kunal!";
    }
    
    // Email command
    if (cmd.includes('email') || cmd.includes('send email') || cmd.includes('mail kunal')) {
      window.location.href = 'mailto:7kmindbeatss@gmail.com';
      return "✅ Opening email client... Compose your message!";
    }
    
    // Quick Actions - Time & Date
    if (cmd.includes('time') || cmd.includes('what time')) {
      return getCurrentTime();
    }
    if (cmd.includes('date') || cmd.includes('what\'s the date') || cmd.includes('whats the date')) {
      return getCurrentDate();
    }
    if (cmd.includes('day') || cmd.includes('day of week')) {
      return getDayOfWeek();
    }
    
    // Quick Actions - Clipboard
    if (cmd.includes('copy email')) {
      copyEmail().then(msg => {
        setMessages(prev => [...prev, { role: 'assistant', content: msg }]);
      });
      return "Copying email to clipboard...";
    }
    if (cmd.includes('copy phone')) {
      copyPhone().then(msg => {
        setMessages(prev => [...prev, { role: 'assistant', content: msg }]);
      });
      return "Copying phone number to clipboard...";
    }
    if (cmd.includes('copy whatsapp')) {
      copyWhatsApp().then(msg => {
        setMessages(prev => [...prev, { role: 'assistant', content: msg }]);
      });
      return "Copying WhatsApp link to clipboard...";
    }
    
    // Quick Actions - Search
    if (cmd.includes('search google') || cmd.includes('google search')) {
      return searchGoogle(cmd);
    }
    if (cmd.includes('youtube') || cmd.includes('search youtube')) {
      return searchYouTube(cmd);
    }
    if (cmd.includes('search github') || cmd.includes('github search')) {
      return searchGitHub(cmd);
    }
    
    // Quick Actions - Download
    if (cmd.includes('download cv') || cmd.includes('download resume')) {
      return downloadCV();
    }
    
    // Portfolio Stats
    if (cmd.includes('show stats') || cmd.includes('portfolio stats') || cmd.includes('statistics')) {
      return getPortfolioStats();
    }
    if (cmd.includes('latest project') || cmd.includes('recent project')) {
      return getLatestProject();
    }
    if (cmd.includes('popular app') || cmd.includes('most popular')) {
      return getMostPopularApp();
    }
    if (cmd.includes('tech stack') || cmd.includes('technology stack') || cmd.includes('technologies')) {
      return getTechStack();
    }
    if (cmd.includes('achievements') || cmd.includes('awards') || cmd.includes('milestones')) {
      return getAchievements();
    }
    
    // Meta Commands
    if (cmd.includes('about stan') || cmd.includes('who are you')) {
      return getStanAIInfo();
    }
    if (cmd.includes('version') || cmd.includes('what version')) {
      return getVersion();
    }
    if (cmd.includes('capabilities') || cmd.includes('what can you do') || cmd.includes('your capabilities')) {
      return explainCapabilities();
    }
    if (cmd.includes('reset') || cmd.includes('clear chat') || cmd.includes('reset chat')) {
      setMessages([]);
      return resetChatMessage();
    }
    
    // Entertainment
    if (cmd.includes('joke') || cmd.includes('tell joke')) {
      return getEntertainment('joke');
    }
    if (cmd.includes('fun fact') || cmd.includes('fact')) {
      return getEntertainment('fact');
    }
    if (cmd.includes('motivate') || cmd.includes('motivation') || cmd.includes('quote')) {
      return getEntertainment('quote');
    }
    if (cmd.includes('ascii') || cmd.includes('ascii art')) {
      return getEntertainment('art');
    }
    if (cmd.includes('surprise')) {
      return getEntertainment('surprise');
    }
    
    return null; // No command found
  };

  const handleFollowUp = (question: string) => {
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Check for navigation commands
    const commandResult = executeCommand(question);
    
    if (commandResult) {
      const commandMessage: Message = { 
        role: "assistant", 
        content: commandResult,
        followUpQuestions: ["What else can you do?", "Show me your apps", "Tell me about your projects"]
      };
      setMessages((prev) => [...prev, commandMessage]);
      setIsLoading(false);
      inputRef.current?.focus();
      return;
    }

    // Regular AI response
    askChatAssistant(question).then((response) => {
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
      inputRef.current?.focus();
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
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      // Check for navigation commands first
      const commandResult = executeCommand(currentInput);
      
      if (commandResult) {
        // Command executed, show confirmation
        const commandMessage: Message = { 
          role: "assistant", 
          content: commandResult,
          followUpQuestions: ["What else can you do?", "Show me your apps", "Tell me about your projects"]
        };
        setMessages((prev) => [...prev, commandMessage]);
        setIsLoading(false);
        inputRef.current?.focus();
        return;
      }

      // Regular AI response
      const response = await askChatAssistant(currentInput);
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
      
      // Keep input focused (no auto-scroll to prevent page jump)
      inputRef.current?.focus();
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
  
  return (
    <section id="about" className="container py-16 md:py-24 lg:py-32 section-noise section-border-glow">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {about.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Column: Bio & Info */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {/* Bio Text */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {about.description}
              </p>

              {/* Collapsible More About Me */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="gap-2 w-full sm:w-auto"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      More About Kunal Chheda
                    </>
                  )}
                </Button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <Card className="mt-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                        <CardContent className="pt-6 space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">👤 Full Name</h4>
                            <p className="text-muted-foreground">Kunal Chheda</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">📍 Location</h4>
                            <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">🎓 Education</h4>
                            <p className="text-muted-foreground">{PERSONAL_INFO.education}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">💼 Current Status</h4>
                            <p className="text-muted-foreground">{PERSONAL_INFO.status}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">🎯 Career Goal</h4>
                            <p className="text-muted-foreground">Aspiring Corporate Lawyer with a passion for technology</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">🌐 Languages Learning</h4>
                            <div className="flex flex-wrap gap-2">
                              {(PERSONAL_INFO.languages as any).human?.map((lang: string) => (
                                <Badge key={lang} variant="secondary" className="text-xs">
                                  {lang}
                                </Badge>
                              )) || (
                                <p className="text-sm text-muted-foreground">English, Hindi, Marathi, Spanish, French, German</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♟️ Chess Rating</h4>
                            <p className="text-muted-foreground">1300+ on Chess.com</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">🔍 Currently Exploring</h4>
                            <ul className="space-y-2">
                              {PERSONAL_INFO.exploring.map((item) => (
                                <li 
                                  key={item}
                                  className="text-sm text-muted-foreground flex items-start space-x-2"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">📧 Contact</h4>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p>Email: 7kmindbeatss@gmail.com</p>
                              <p>WhatsApp: +91 8591247148</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quote */}
            <Card className="border-l-4 border-primary bg-primary/5">
              <CardContent className="pt-6">
                <blockquote className="italic text-base md:text-lg text-foreground">
                  {about.quote || "I didn't build a product. I built a place to not feel so alone and helpless while I'm incompetent. These apps aren't just tools—they're steady, reliable, and never fail me."}
                </blockquote>
              </CardContent>
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Education</p>
                      <p className="text-foreground">{PERSONAL_INFO.education}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Status</p>
                      <p className="text-foreground">{PERSONAL_INFO.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Role</p>
                      <p className="text-foreground">{PERSONAL_INFO.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Languages */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {/* Programming Languages */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <h3 className="font-headline text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {PERSONAL_INFO.languages.programming.map((lang) => {
                    // Language icon mapping with colors
                    const langConfig: Record<string, { icon: string; color: string; bg: string }> = {
                      TypeScript: { icon: "TS", color: "text-blue-400", bg: "bg-blue-500/10" },
                      JavaScript: { icon: "JS", color: "text-yellow-400", bg: "bg-yellow-500/10" },
                      Python: { icon: "Py", color: "text-blue-500", bg: "bg-blue-600/10" },
                      Java: { icon: "☕", color: "text-orange-500", bg: "bg-orange-500/10" },
                      Kotlin: { icon: "Kt", color: "text-purple-500", bg: "bg-purple-500/10" },
                      "HTML/CSS": { icon: "</>", color: "text-orange-400", bg: "bg-orange-400/10" },
                      SQL: { icon: "SQL", color: "text-cyan-500", bg: "bg-cyan-500/10" },
                    };
                    
                    const config = langConfig[lang] || { icon: lang.slice(0, 2), color: "text-primary", bg: "bg-primary/10" };
                    
                    return (
                      <div 
                        key={lang} 
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg ${config.bg} hover:scale-105 transition-transform cursor-default`}
                        title={lang}
                      >
                        <div className={`text-2xl font-bold ${config.color}`}>
                          {config.icon}
                        </div>
                        <span className="text-xs text-center text-muted-foreground">
                          {lang}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Stan AI Chatbox - DYNAMIC STYLES */}
            <Card className={currentStyle.cardWrapper}>
              {/* Animated gradient background */}
              <div className={currentStyle.animatedBg} />
              
              <CardContent className={currentStyle.contentPadding}>
                {/* Header with glow effect */}
                <div className={currentStyle.headerWrapper}>
                  <div className={currentStyle.headerGlow} />
                  <div className={currentStyle.headerFlex}>
                    <div className={currentStyle.iconWrapper}>
                      <Bot className={currentStyle.iconSize} />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className={currentStyle.title}>
                        {currentStyle.titleText}
                      </h3>
                      <p className={currentStyle.subtitle}>{currentStyle.subtitleText}</p>
                    </div>
                  </div>
                  <div className={currentStyle.badgesWrapper}>
                    <span className={currentStyle.badge1}>{currentStyle.badge1Text}</span>
                    <span className={currentStyle.badge2}>{currentStyle.badge2Text}</span>
                  </div>
                </div>

                <p className={currentStyle.hint}>
                  {currentStyle.hintText}
                </p>

                {/* Chat Messages - Dynamic styled */}
                <div className={currentStyle.chatContainer}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-2",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-7 w-7 border shrink-0">
                          <AvatarFallback className="bg-primary/10">
                            <Bot className="h-4 w-4 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex flex-col gap-2 max-w-[85%]">
                        <div
                          className={cn(
                            "px-3 py-2 text-sm whitespace-pre-wrap break-words",
                            message.role === "user"
                              ? currentStyle.userMessage
                              : currentStyle.assistantMessage
                          )}
                        >
                          {message.content}
                        </div>
                        
                        {/* Follow-up questions */}
                        {message.role === "assistant" && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                          <div className="flex flex-col gap-1.5">
                            <p className="text-xs text-muted-foreground">💡 You might also want to know:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {message.followUpQuestions.map((question, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleFollowUp(question)}
                                  className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-2 py-1 rounded-md transition-colors border border-primary/20"
                                  disabled={isLoading}
                                >
                                  {question}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {message.role === 'user' && (
                        <Avatar className="h-7 w-7 border shrink-0">
                          <AvatarFallback className="bg-accent/10">
                            <User className="h-4 w-4 text-accent" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Stan is thinking...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form - Dynamic styled */}
                <form onSubmit={handleSubmit} className={currentStyle.inputWrapper}>
                  <div className="flex-1 relative">
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={currentStyle.inputPlaceholder}
                      className={currentStyle.input}
                      disabled={isLoading}
                      autoComplete="off"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className={currentStyle.button}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 md:h-5 md:w-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
                        <span className="hidden md:inline">Send</span>
                      </>
                    )}
                  </Button>
                </form>
                
                {/* Footer - Dynamic styled */}
                <p className={currentStyle.footer}>
                  {currentStyle.footerText}
                </p>
              </CardContent>
            </Card>

            {/* Interests */}
            <div>
              <h3 className="font-headline text-xl font-semibold mb-4 flex items-center space-x-2">
                <Crown className="h-5 w-5 text-primary" />
                <span>My Interests</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge 
                    key={interest.text} 
                    variant="outline" 
                    className="text-sm py-2 px-4 gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default border-primary/20 hover:border-primary/40"
                  >
                    <interest.icon className={`h-4 w-4 ${interest.color}`} />
                    {interest.text}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid - Compact on Mobile */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:shadow-lg hover:shadow-primary/10 border-primary/10">
                  <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                      <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <category.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm md:text-lg">{category.title}</h4>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="text-xs md:text-sm text-muted-foreground flex items-center space-x-1.5 md:space-x-2"
                        >
                          <span className="text-sm md:text-base flex-shrink-0">{category.logos?.[skill] || '•'}</span>
                          <span className="truncate">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

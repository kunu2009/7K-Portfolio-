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
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend",
    icon: AppWindow,
    skills: PERSONAL_INFO.skills.backend,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: PERSONAL_INFO.skills.tools,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI/ML",
    icon: Target,
    skills: PERSONAL_INFO.skills.ai,
    color: "from-orange-500 to-red-500"
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    
    // Help command - list all available commands
    if (cmd === 'help' || cmd === 'commands' || cmd === 'what can you do') {
      return `✨ **Stan AI Commands**

Here's what I can do for you:

📝 **"open blog"** - View Kunal's blog posts
🎯 **"show apps"** - See the 7K Ecosystem apps  
💼 **"show projects"** - Browse the portfolio
🛠️ **"open services"** - Check services & pricing
📧 **"open contact"** - Get in touch
🏠 **"go to top"** - Back to top of page
💬 **"whatsapp"** - Message Kunal directly

💡 **Tip:** Just type naturally! I understand variations like "take me to blog" or "go to projects"

You can also ask me anything about Kunal's work, skills, or projects!`;
    }
    
    // Navigation commands
    if (cmd.includes('open blog') || cmd.includes('show blog') || cmd.includes('go to blog')) {
      window.location.href = '/blog';
      return "✅ Opening blog page...";
    }
    if (cmd.includes('open apps') || cmd.includes('show apps') || cmd.includes('go to apps')) {
      document.getElementById('app-store')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Apps section...";
    }
    if (cmd.includes('open projects') || cmd.includes('show projects') || cmd.includes('go to projects')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Projects section...";
    }
    if (cmd.includes('open services') || cmd.includes('show services') || cmd.includes('go to services')) {
      window.location.href = '/services';
      return "✅ Opening services page...";
    }
    if (cmd.includes('open contact') || cmd.includes('show contact') || cmd.includes('contact kunal')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Contact section...";
    }
    if (cmd.includes('open portfolio') || cmd.includes('show portfolio')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      return "✅ Scrolling to Portfolio section...";
    }
    if (cmd.includes('go to top') || cmd.includes('scroll to top') || cmd.includes('go home')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return "✅ Scrolling to top...";
    }
    if (cmd.includes('whatsapp') || cmd.includes('message kunal')) {
      window.open('https://wa.me/918591247148', '_blank');
      return "✅ Opening WhatsApp...";
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

            {/* Stan AI Chatbox */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                  <h3 className="font-headline text-xl font-semibold">Ask Stan AI About Me</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with my AI assistant to learn about my projects, skills, and experience!
                </p>

                {/* Chat Messages */}
                <div className="bg-background/50 rounded-lg border border-border/50 mb-3 max-h-[400px] overflow-y-auto overscroll-contain p-3 space-y-3 scroll-smooth">
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
                            "rounded-lg px-3 py-2 text-sm whitespace-pre-wrap break-words",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/80"
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

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-background/50"
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isLoading || !input.trim()}
                    className="shrink-0"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
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

        {/* Skills Grid */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:shadow-lg hover:shadow-primary/10 border-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="text-sm text-muted-foreground flex items-start space-x-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
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

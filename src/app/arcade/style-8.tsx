"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Sparkles, User, Bot, X, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

// Comprehensive knowledge base about the portfolio
const KNOWLEDGE_BASE = {
  owner: {
    name: "Kunal Chheda",
    username: "kunu2009",
    email: "kunal@7k.life",
    github: "github.com/kunu2009",
    location: "India",
    experience: "2+ years",
    status: "Available for opportunities",
    role: "Full-Stack Developer",
    passion: "Building innovative solutions that make a difference",
  },
  
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    backend: ["Node.js", "Python", "Firebase", "REST APIs", "Authentication"],
    ai: ["Google Gemini", "AI/Genkit", "Machine Learning", "Natural Language Processing"],
    tools: ["Git", "GitHub", "VS Code", "Vercel", "npm"],
    design: ["UI/UX Design", "Responsive Design", "Animation", "User Experience"],
    other: ["Problem Solving", "Algorithms", "Data Structures", "System Design"],
  },

  projects: {
    "7k life": {
      name: "7K Life",
      description: "Comprehensive life management platform",
      features: ["Task Management", "Goal Tracking", "Habit Building", "Life Analytics"],
      tech: ["Next.js", "React", "TypeScript", "Firebase"],
      status: "Active",
      version: "v2.0",
    },
    "stan ai": {
      name: "Stan AI",
      description: "Personal AI assistant with advanced capabilities",
      features: ["Natural Language Processing", "Knowledge Base", "Math Calculations", "Portfolio Expert"],
      tech: ["React", "TypeScript", "AI/NLP", "Gemini"],
      status: "Active",
      intelligence: "Can answer anything about portfolio, solve math, provide insights",
    },
    "7klawprep": {
      name: "7KLawPrep",
      description: "Legal education and exam preparation platform",
      features: ["Study Materials", "Mock Tests", "Progress Tracking", "Legal Resources"],
      tech: ["Next.js", "Firebase", "Authentication"],
      status: "Beta",
    },
    "7k itihaas": {
      name: "7K Itihaas",
      description: "Interactive history learning platform",
      features: ["Timeline Visualization", "Historical Events", "Interactive Learning"],
      tech: ["React", "Data Visualization", "Educational Content"],
      status: "Planning",
    },
    "polyglot": {
      name: "Polyglot",
      description: "Multi-language learning platform",
      features: ["Language Courses", "Practice Exercises", "Progress Tracking"],
      tech: ["Next.js", "Audio Processing", "Gamification"],
      status: "Planning",
    },
  },

  portfolio: {
    styles: {
      mobile: ["Shell (Original)", "iOS Style", "Android Material Design", "Minimal Design"],
      arcade: ["Bounce Game", "Retro Stats", "Cabinet", "Battle Select", "Snake", "Tetris", "Memory Match"],
      story: "Narrative-driven portfolio experience",
      terminal: "Interactive command-line interface",
      slider: "Animated CSS-based showcase",
      dashboard: "Data-driven resume visualization (coming soon)",
      canvas: "Creative art-based portfolio (coming soon)",
    },
    games: {
      snake: "Classic snake game with scoring, 20x20 grid, keyboard + mobile controls",
      tetris: "Full tetris with 7 pieces, line clearing, progressive difficulty",
      memory: "Card matching game with 3 difficulty levels (easy/medium/hard)",
      bounce: "Platform-based skill showcase game",
    },
  },

  contact: {
    email: "kunal@7k.life",
    website: "7k.life",
    github: "github.com/kunu2009",
    portfolio: "7k-portfolio.vercel.app",
    support: "Support via payment links available",
  },

  achievements: [
    "Built 7K Life ecosystem - comprehensive life management platform",
    "Deployed Stan AI - intelligent personal assistant",
    "Created 7KLawPrep - helping students prepare for legal exams",
    "Developed multiple portfolio styles showcasing versatility",
    "Built 3 fully functional arcade games (Snake, Tetris, Memory Match)",
    "Designed mobile-first responsive experiences",
    "Implemented advanced animations with Framer Motion",
  ],
};

// Advanced AI response system
class StanAI {
  private knowledge = KNOWLEDGE_BASE;

  // Math evaluation with safety
  private evaluateMath(expression: string): string {
    try {
      // Remove any potential harmful code
      const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, '');
      
      // Basic math operations
      const result = Function(`"use strict"; return (${sanitized})`)();
      
      if (isNaN(result) || !isFinite(result)) {
        return "Hmm, that doesn't seem to be a valid calculation. Try something like '2 + 2' or '15 * 8'!";
      }
      
      return `🧮 The answer is **${result}**! Need me to explain the calculation?`;
    } catch {
      return "I couldn't calculate that. Try a simpler expression like '5 + 3 * 2' or '(10 + 5) / 3'!";
    }
  }

  // Advanced math functions
  private advancedMath(query: string): string | null {
    const lowerQuery = query.toLowerCase();
    
    // Square root
    if (lowerQuery.includes('square root') || lowerQuery.includes('sqrt')) {
      const num = parseFloat(lowerQuery.match(/\d+\.?\d*/)?.[0] || '0');
      return `√${num} = **${Math.sqrt(num).toFixed(4)}**`;
    }
    
    // Power
    if (lowerQuery.includes('power') || lowerQuery.includes('^')) {
      const nums = lowerQuery.match(/\d+\.?\d*/g);
      if (nums && nums.length >= 2) {
        const base = parseFloat(nums[0]);
        const exp = parseFloat(nums[1]);
        return `${base}^${exp} = **${Math.pow(base, exp).toFixed(4)}**`;
      }
    }
    
    // Factorial
    if (lowerQuery.includes('factorial')) {
      const num = parseInt(lowerQuery.match(/\d+/)?.[0] || '0');
      if (num > 20) return "That's too large! Factorials grow super fast. Try a number under 20.";
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return `${num}! = **${result}**`;
    }
    
    // Percentage
    if (lowerQuery.includes('percent') || lowerQuery.includes('%')) {
      const nums = lowerQuery.match(/\d+\.?\d*/g);
      if (nums && nums.length >= 2) {
        const percent = parseFloat(nums[0]);
        const total = parseFloat(nums[1]);
        return `${percent}% of ${total} = **${(percent * total / 100).toFixed(2)}**`;
      }
    }
    
    return null;
  }

  // Pattern matching for questions
  private matchPattern(query: string): string | null {
    const q = query.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey|sup|greetings|yo)\b/i.test(q)) {
      const greetings = [
        "Hey! 👋 I'm Stan, here to help you explore Kunal's world of productivity, law, and tech! What can I tell you?",
        "Hello! 😊 I'm Stan—think of me as your friendly tour guide through everything Kunal's built. Where should we start?",
        "Hi there! I'm Stan, Kunal's AI buddy. Want to know about his projects, chat about tech, or just see what he's up to?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // About queries
    if (/who (is|are) you|what are you|your name/i.test(q)) {
      const responses = [
        "I'm Stan! Kunal's working on making me a full Android assistant, but right now I'm here helping people learn about his work. Pretty cool, right? 😊",
        "Hey, I'm Stan AI! I'm like Kunal's digital spokesperson—I know all about his projects, can do math, and love chatting. What's on your mind?",
        "Stan here! I'm an AI Kunal built to help people navigate his portfolio. I've got answers about projects, skills, and can even solve math problems. Try me!",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Owner info
    if (/who (is|made|created|built)|about (kunal|owner|developer|creator)/i.test(q)) {
      const responses = [
        "I'm talking about **Kunal Chheda**! He's a 12th-standard Arts student with big dreams of becoming a corporate lawyer. But he's not just about law—he's deeply passionate about AI, productivity tools, technology, chess, and languages. He's building the 7K Ecosystem to organize life and amplify creativity!",
        "That's **Kunal**! Student by day, builder by... also day 😄 He's studying Arts (future corporate lawyer!) but can't stop coding. He's creating the whole 7K ecosystem—apps for productivity, learning, and life management. Want to know about a specific project?",
        "Meet **Kunal Chheda**—he's juggling law school prep while building an entire ecosystem of apps! Based in India, he's all about making tools that actually help people be more productive and creative. Pretty ambitious for someone still in 12th grade, right?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Contact info
    if (/contact|email|reach|message|get in touch/i.test(q)) {
      return `Sure! You can reach Kunal at **${this.knowledge.contact.email}** or check out his work at **${this.knowledge.contact.website}**. He's also on GitHub (**${this.knowledge.contact.github}**) if you want to see his code. Feel free to reach out—he's always up for interesting conversations!`;
    }
    
    // Skills queries
    if (/skills|technologies|tech stack|what (can|does) (he|kunal) (know|use)/i.test(q)) {
      const skills = this.knowledge.skills;
      return `Oh, Kunal's got quite the toolkit! 🛠️ He works with **${skills.frontend.slice(0, 3).join(', ')}** on the frontend, handles backend with **${skills.backend.slice(0, 2).join(' and ')}**, and is diving deep into **AI/ML** stuff like Gemini and Genkit. He's basically a full-stack developer who loves making things look good AND work well!`;
    }
    
    // Projects overview
    if (/projects|what (has|did) (he|kunal) (build|built|make|made|create)/i.test(q)) {
      return `Kunal's building the **7K Ecosystem**—it's pretty ambitious! There's **7K Life** (life management), **7KLawPrep** (for law students), **7K Itihaas** (history learning), and **Polyglot** (language learning). Oh, and me—**Stan AI**! Each one is designed to solve real problems he's faced. Want to hear more about any of them?`;
    }
    
    // Why so many portfolios
    if (/why.*portfolio|many.*portfolio|different.*portfolio/i.test(q)) {
      return `You're exploring Kunal's Portfolioverse! It's not just one portfolio—it's multiple creative ways to experience his work:\n\n• **/story**: Classic narrative portfolio\n• **/terminal**: Interactive command-line interface\n• **/arcade**: Fun 2D game-based showcase\n• **/slider**: Animated visual slider\n• **/mobile**: Mobile app-style experience\n• **/galaksi**: Space-themed explorer\n• **/portfolio-card**: Professional card layout\n\nEach has 4 different styles! How cool is that?`;
    }
    
    // 7K Life / ecosystem
    if (/7k life|ecosystem|7k ecosystem/i.test(q)) {
      return `The **7K Ecosystem** is Kunal's interconnected system of apps, tools, and habits designed for radical productivity, continuous growth, and creative freedom. It's built on the philosophy that the right tools can eliminate friction, amplify focus, and free up mental space for what truly matters—creativity and growth!`;
    }
    
    // Stan AI
    if (/stan ai|stan|you|yourself/i.test(q) && !/who are you/.test(q)) {
      return `Stan (that's me!) is an AI assistant that Kunal is developing to run on Android! The vision is to provide context-aware automation and assistance integrated across the entire 7K ecosystem. Right now, I'm here helping you learn about Kunal and his work!`;
    }
    
    // Specific project queries
    for (const [key, project] of Object.entries(this.knowledge.projects)) {
      if (q.includes(key.replace(' ', '')) || q.includes(project.name.toLowerCase())) {
        const projectData = project as any;
        return `📱 **${project.name}**\n\n${project.description}\n\n**Features:** ${project.features.join(', ')}\n\n**Tech Stack:** ${project.tech.join(', ')}\n\n**Status:** ${project.status}\n\n${projectData.intelligence ? `🧠 ${projectData.intelligence}` : ''}`;
      }
    }
    
    // Games
    if (/games|arcade|play/i.test(q)) {
      return `Want to play? We've got some fun stuff! 🎮 There's **Snake** (classic arcade vibes), **Tetris** (you know this one!), **Memory Match** (test your brain), and **Bounce** (Kunal's skill showcase game). All work on mobile and desktop. Go check out the Arcade section!`;
    }
    
    // Portfolio styles
    if (/portfolio|styles|designs|interfaces/i.test(q)) {
      return `Kunal went all out with the portfolio designs! There's a mobile app version, arcade games, a story mode, a terminal CLI, animated sliders... basically, he wanted everyone to find a style they vibe with. My favorite? The arcade games are pretty fun! 😄`;
    }
    
    // Achievements
    if (/achievements|accomplishments|what (has|did) (he|kunal) (done|achieved)/i.test(q)) {
      return `Let me brag about Kunal for a sec! He's built the entire 7K Life ecosystem, created 7KLawPrep (helping law students everywhere!), made 3 fully working arcade games, and designed like 4+ different portfolio styles. Oh, and he built me! Pretty impressive for someone still in 12th grade, right? 🚀`;
    }
    
    // How queries
    if (/how (to|can|do)|help me/i.test(q)) {
      return "I'm here to help! 🤝 You can ask me stuff like:\n\n• What projects has Kunal built?\n• Tell me about 7K Life\n• Do some math (try '156 * 89'!)\n• What are his skills?\n• How can I contact him?\n\nJust chat naturally—I'll understand! 😊";
    }
    
    // Single word queries for context
    if (q === 'life' || q === 'portfolio' || q === 'projects') {
      const hints = [
        "Want to know about **7K Life**? It's Kunal's life management platform! Or did you mean something else?",
        "Hmm, can you be more specific? Are you asking about the **7K Life** project, his portfolio styles, or something else?",
        "I've got lots to share! Want to know about **7K Life**, his projects, or maybe his portfolio designs?",
      ];
      return hints[Math.floor(Math.random() * hints.length)];
    }
    
    return null;
  }

  public respond(query: string): string {
    const q = query.trim();
    
    if (!q) return "Ask me anything! I'm here to help. 😊";
    
    // Check for math expression
    if (/^[\d+\-*/().\s]+$/.test(q)) {
      return this.evaluateMath(q);
    }
    
    // Check for advanced math
    const mathResult = this.advancedMath(q);
    if (mathResult) return mathResult;
    
    // Check pattern matching
    const patternMatch = this.matchPattern(q);
    if (patternMatch) return patternMatch;
    
    // Keyword-based responses
    const lowerQuery = q.toLowerCase();
    
    // React to positive feedback
    if (/thank|thanks|awesome|cool|great|nice|good|excellent/i.test(lowerQuery)) {
      const responses = [
        "You're welcome! 😊 Anything else you want to know?",
        "Happy to help! Got more questions? Fire away!",
        "Glad I could help! What else are you curious about?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Experience
    if (/experience|years|work/i.test(lowerQuery)) {
      return `Kunal's been coding for over **2 years** now, building real-world apps that people actually use. He started with personal projects and kept going—now he's got a whole ecosystem! Pretty cool growth trajectory, right?`;
    }
    
    // Location
    if (/where|location|from|based/i.test(lowerQuery)) {
      return `Kunal's based in **India** 🇮🇳—building global solutions from home!`;
    }
    
    // Availability
    if (/available|hire|hiring|work|job|opportunity/i.test(lowerQuery)) {
      return `Yep! Kunal's **available for opportunities**. He's especially interested in projects involving AI, productivity tools, or legal tech. Want to reach out? His email is **${this.knowledge.contact.email}**. He's pretty responsive!`;
    }
    
    // Default intelligent response
    const suggestions = [
      "Hmm, I don't have specific information about that. But did you know? The 7K Ecosystem started as personal tools Kunal needed himself—now they're helping others too!\n\nFeel free to ask me about Kunal, his projects, skills, or the 7K Ecosystem!",
      "Not quite sure what you mean! 🤔 Try asking about:\n• Kunal's projects (7K Life, Stan AI, etc.)\n• His skills and tech stack\n• How to contact him\n• Or throw me a math problem!\n\nWhat interests you?",
      "I might not have that exact info, but I can chat about Kunal's work, do some calculations, or share his contact details! What would you like to explore?",
    ];
    
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  }
}

const SUGGESTED_QUESTIONS = [
  "Who is Kunal?",
  "Why so many portfolios?",
  "What's 7K Life?",
  "Tell me about Stan AI",
  "What are his skills?",
  "Calculate 156 * 89",
  "What projects has he built?",
  "How can I contact him?",
  "What games can I play?",
  "What is 25% of 200?",
];

export default function StanAIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 I'm **Stan**—Kunal's AI buddy!\n\nI'm here to chat about his projects, answer questions about the 7K Ecosystem, share his skills, or even help with some math if you need it! I know pretty much everything about what he's built and why.\n\nWhat are you curious about? 😊",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiEngine = useRef(new StanAI());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate thinking time for more natural feel
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

    const response = aiEngine.current.respond(text);

    const aiMessage: Message = {
      id: Date.now() + 1,
      text: response,
      sender: 'ai',
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleSuggestionClick = (question: string) => {
    handleSend(question);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hey there! 👋 I'm **Stan**—Kunal's AI buddy!\n\nI'm here to chat about his projects, answer questions about the 7K Ecosystem, share his skills, or even help with some math if you need it! I know pretty much everything about what he's built and why.\n\nWhat are you curious about? 😊",
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
    setShowSuggestions(true);
  };

  return (
    <div 
      className="flex min-h-dvh flex-col bg-background overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Stan AI</h1>
                <p className="text-sm text-white/80">Your Intelligent Assistant</p>
              </div>
            </div>
            <Button
              onClick={clearChat}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
                }`}>
                  <div className="whitespace-pre-wrap break-words">
                    {message.text.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="font-bold text-yellow-300">{part}</strong>
                    )}
                  </div>
                  <p className="text-xs opacity-50 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="flex gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <p className="text-sm text-white/70">Try asking:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.slice(0, 6).map((question, i) => (
                <Button
                  key={i}
                  onClick={() => handleSuggestionClick(question)}
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything... or try '25 * 17'"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

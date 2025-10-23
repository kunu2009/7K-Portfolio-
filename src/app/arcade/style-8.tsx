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
        "Hey there! 👋 I'm Stan AI, your personal guide to Kunal's portfolio. Ask me anything!",
        "Hello! 🌟 Ready to explore Kunal's work? I know everything about his projects!",
        "Hi! 😊 I'm Stan, and I'm here to help. Want to know about projects, skills, or just chat?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // About queries
    if (/who (is|are) you|what are you|your name/i.test(q)) {
      return "I'm **Stan AI**, Kunal's intelligent assistant! 🤖 I know everything about his portfolio, projects, skills, and I can even do math! I'm built with advanced NLP and a comprehensive knowledge base. What would you like to know?";
    }
    
    // Owner info
    if (/who (is|made|created|built)|about (kunal|owner|developer|creator)/i.test(q)) {
      return `This portfolio belongs to **${this.knowledge.owner.name}** (@${this.knowledge.owner.username}), a passionate ${this.knowledge.owner.role} from ${this.knowledge.owner.location} with ${this.knowledge.owner.experience} of experience. He's currently ${this.knowledge.owner.status.toLowerCase()}! Want to know about his projects or skills?`;
    }
    
    // Contact info
    if (/contact|email|reach|message|get in touch/i.test(q)) {
      return `📧 You can reach Kunal at:\n• Email: **${this.knowledge.contact.email}**\n• Website: **${this.knowledge.contact.website}**\n• GitHub: **${this.knowledge.contact.github}**\n\nFeel free to reach out for collaborations or opportunities!`;
    }
    
    // Skills queries
    if (/skills|technologies|tech stack|what (can|does) (he|kunal) (know|use)/i.test(q)) {
      const skills = this.knowledge.skills;
      return `💻 **Kunal's Tech Stack:**\n\n**Frontend:** ${skills.frontend.join(', ')}\n\n**Backend:** ${skills.backend.join(', ')}\n\n**AI/ML:** ${skills.ai.join(', ')}\n\n**Design:** ${skills.design.join(', ')}\n\nHe's a versatile full-stack developer with strong AI capabilities!`;
    }
    
    // Projects overview
    if (/projects|what (has|did) (he|kunal) (build|built|make|made|create)/i.test(q)) {
      return `🚀 **Kunal's Projects:**\n\n**7K Life** - Life management platform (v2.0, Active)\n**Stan AI** - That's me! Your intelligent assistant\n**7KLawPrep** - Legal education platform (Beta)\n**7K Itihaas** - History learning platform (Planning)\n**Polyglot** - Language learning app (Planning)\n\nWant details about any specific project?`;
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
      return `🎮 **Arcade Games Available:**\n\n🐍 **Snake** - Classic with scoring & smooth controls\n🎯 **Tetris** - Full implementation with 7 pieces\n🧠 **Memory Match** - Card game with 3 difficulties\n⚡ **Bounce** - Platform-based skill showcase\n\nAll games work on mobile & desktop! Try them out!`;
    }
    
    // Portfolio styles
    if (/portfolio|styles|designs|interfaces/i.test(q)) {
      return `🎨 **Portfolio Experiences:**\n\n📱 **Mobile:** ${this.knowledge.portfolio.styles.mobile.join(', ')}\n🎮 **Arcade:** ${this.knowledge.portfolio.styles.arcade.length} different games\n📖 **Story:** Narrative-driven experience\n💻 **Terminal:** Interactive CLI\n🎞️ **Slider:** Animated showcase\n\nEach style offers a unique way to explore Kunal's work!`;
    }
    
    // Achievements
    if (/achievements|accomplishments|what (has|did) (he|kunal) (done|achieved)/i.test(q)) {
      return `🏆 **Key Achievements:**\n\n${this.knowledge.achievements.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\nImpressive, right?`;
    }
    
    // How queries
    if (/how (to|can|do)|help me/i.test(q)) {
      return "I'm here to help! 🤝 Try asking me:\n\n• About Kunal's projects or skills\n• Math calculations (e.g., '25 * 17')\n• Square roots, powers, percentages\n• Contact information\n• Portfolio features\n• Anything else you're curious about!\n\nJust ask naturally!";
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
      return "You're welcome! 😊 Happy to help! Anything else you'd like to know?";
    }
    
    // Experience
    if (/experience|years|work/i.test(lowerQuery)) {
      return `Kunal has **${this.knowledge.owner.experience}** of professional development experience, building full-stack applications with modern technologies. He's constantly learning and growing!`;
    }
    
    // Location
    if (/where|location|from|based/i.test(lowerQuery)) {
      return `Kunal is based in **${this.knowledge.owner.location}** 🇮🇳`;
    }
    
    // Availability
    if (/available|hire|hiring|work|job|opportunity/i.test(lowerQuery)) {
      return `Yes! Kunal is **${this.knowledge.owner.status}**. Feel free to reach out at **${this.knowledge.contact.email}** for collaborations or opportunities!`;
    }
    
    // Default intelligent response
    const suggestions = [
      "Interesting question! While I might not have that specific info, I can tell you about Kunal's projects, skills, or calculate math for you!",
      "Hmm, I'm not sure about that one. Try asking about:\n• Projects (7K Life, Stan AI, etc.)\n• Skills and technologies\n• Contact information\n• Math calculations\n\nWhat interests you?",
      "I don't have that exact information, but I'm great at:\n🚀 Explaining projects\n💻 Listing skills\n🧮 Solving math\n📧 Sharing contacts\n\nWhat would you like to know?",
    ];
    
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  }
}

const SUGGESTED_QUESTIONS = [
  "Who is Kunal Chheda?",
  "What projects has he built?",
  "What are his skills?",
  "Tell me about 7K Life",
  "How can I contact him?",
  "Calculate 156 * 89",
  "What is square root of 144?",
  "Tell me about Stan AI",
  "What arcade games are available?",
  "What is 25% of 200?",
];

export default function StanAIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hey! I'm **Stan AI**, your intelligent guide to Kunal's portfolio!\n\n🧠 I know everything about his projects, skills, achievements, and more. Plus, I can do math, calculate percentages, solve equations, and answer questions naturally!\n\nWhat would you like to know?",
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
        text: "👋 Hey! I'm **Stan AI**, your intelligent guide to Kunal's portfolio!\n\n🧠 I know everything about his projects, skills, achievements, and more. Plus, I can do math, calculate percentages, solve equations, and answer questions naturally!\n\nWhat would you like to know?",
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

/**
 * Stan AI - Utility Functions
 * Helper functions for enhanced capabilities
 */

// ============================================
// TIME & DATE UTILITIES
// ============================================

export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  
  return `⏰ Current time: ${displayHours}:${minutes} ${ampm} IST`;
}

export function getCurrentDate(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dateString = now.toLocaleDateString('en-IN', options);
  
  return `📅 Today is: ${dateString}`;
}

export function getDayOfWeek(): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  
  const emojis: Record<string, string> = {
    'Monday': '💼',
    'Tuesday': '🚀',
    'Wednesday': '🐫',
    'Thursday': '⚡',
    'Friday': '🎉',
    'Saturday': '🌟',
    'Sunday': '☀️'
  };
  
  return `${emojis[today]} Today is ${today}!`;
}

// ============================================
// CLIPBOARD UTILITIES
// ============================================

export async function copyToClipboard(text: string, label: string): Promise<string> {
  try {
    await navigator.clipboard.writeText(text);
    return `✅ ${label} copied to clipboard!`;
  } catch (error) {
    return `❌ Failed to copy ${label}. Please try manually.`;
  }
}

export async function copyEmail(): Promise<string> {
  return copyToClipboard('7kmindbeatss@gmail.com', 'Email address');
}

export async function copyPhone(): Promise<string> {
  return copyToClipboard('+918591247148', 'Phone number');
}

export async function copyWhatsApp(): Promise<string> {
  return copyToClipboard('https://wa.me/918591247148', 'WhatsApp link');
}

// ============================================
// SEARCH UTILITIES
// ============================================

export function searchGoogle(query: string): string {
  const searchQuery = query.replace(/^search google\s*/i, '').trim();
  if (!searchQuery) {
    return "❌ Please provide a search query. Example: 'search google Next.js tutorial'";
  }
  
  const encodedQuery = encodeURIComponent(searchQuery);
  window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
  
  return `🔍 Opening Google search for "${searchQuery}"...`;
}

export function searchYouTube(query: string): string {
  const searchQuery = query.replace(/^(youtube|search youtube)\s*/i, '').trim();
  if (!searchQuery) {
    return "❌ Please provide a search query. Example: 'youtube react tutorial'";
  }
  
  const encodedQuery = encodeURIComponent(searchQuery);
  window.open(`https://www.youtube.com/results?search_query=${encodedQuery}`, '_blank');
  
  return `🎥 Opening YouTube search for "${searchQuery}"...`;
}

export function searchGitHub(query: string): string {
  const searchQuery = query.replace(/^search github\s*/i, '').trim();
  if (!searchQuery) {
    return "❌ Please provide a search query. Example: 'search github react hooks'";
  }
  
  const encodedQuery = encodeURIComponent(searchQuery);
  window.open(`https://github.com/search?q=${encodedQuery}`, '_blank');
  
  return `💻 Opening GitHub search for "${searchQuery}"...`;
}

// ============================================
// DOWNLOAD UTILITIES
// ============================================

export function downloadCV(): string {
  // Assuming CV is stored in public folder
  window.open('/resume.pdf', '_blank');
  return "📄 Opening CV/Resume... (Download will start automatically)";
}

// ============================================
// PORTFOLIO STATS
// ============================================

export function getPortfolioStats(): string {
  return `📊 **Portfolio Statistics:**

🎯 **Apps Built:** 24+ productivity & utility apps
🤖 **AI Answers:** 700+ preloaded Q&A pairs
💻 **Commands:** 60+ navigation & utility commands
⏱️ **Experience:** 2+ years of coding
👥 **Users Reached:** 100,000+ across 7K Ecosystem
🏆 **Projects:** 50+ completed successfully
⭐ **Rating:** 4.9/5 average client satisfaction

Pretty impressive, right? 🚀`;
}

export function getLatestProject(): string {
  return `🆕 **Latest Project:**

**7K Bookshelf** 📚
A comprehensive book management platform with:
• AI-powered recommendations
• Reading progress tracking
• Social reading features
• 10,000+ books catalog
• Built with Next.js 15 & TypeScript

**Status:** Live & Growing
**Tech:** Next.js, TypeScript, PostgreSQL, Tailwind

Want to see it? Just say "open apps"!`;
}

export function getMostPopularApp(): string {
  return `🌟 **Most Popular App:**

**7K Life** - Your Life, Organized
👥 50,000+ active users
⭐ 4.8/5 rating (2,000+ reviews)

Features:
• Task Management & To-Do Lists
• Habit Tracker with Streaks
• Goal Setting & Milestones
• Time Blocking Calendar
• Focus Timer (Pomodoro)
• Notes & Quick Capture
• Dark Mode & Themes

Why it's loved:
"Simple, powerful, and actually helps me get things done!" - Most common feedback

Try it: Say "show apps" to explore!`;
}

export function getTechStack(): string {
  return `🛠️ **Technology Stack:**

**Frontend:**
• Next.js 15 (App Router)
• React 19 & TypeScript
• Tailwind CSS
• Framer Motion
• Shadcn UI Components

**Backend:**
• Node.js & Express
• Firebase (Auth & Realtime)
• PostgreSQL
• Prisma ORM

**State Management:**
• Zustand
• React Query
• Context API

**Tools & DevOps:**
• Git & GitHub
• Vercel Deployment
• VS Code
• Figma (Design)

**Mobile:**
• PWA (Progressive Web Apps)
• Responsive Design
• Capacitor (Hybrid Apps)

All modern, all powerful! 💪`;
}

export function getAchievements(): string {
  return `🏆 **Achievements & Milestones:**

📱 **24+ Apps Launched** - Complete 7K Ecosystem
👥 **100K+ Users** - Across all platforms
⭐ **4.9/5 Rating** - Average user satisfaction
🚀 **50+ Projects** - Delivered successfully
💯 **Zero Downtime** - 99.9% uptime maintained
🎓 **Self-Taught** - From beginner to advanced in 2 years
🌍 **Global Reach** - Users in 50+ countries
💡 **700+ Q&A** - Built comprehensive AI assistant
🎨 **8 Portfolio Designs** - Showcasing creativity
📝 **Tech Blogger** - Sharing knowledge & tutorials

**Current Goal:** Build sustainable SaaS products & help 1M+ people be more productive!`;
}

// ============================================
// META INFORMATION
// ============================================

export function getStanAIInfo(): string {
  return `🤖 **About Stan AI**

I'm Stan, Kunal's intelligent AI assistant! Here's what makes me special:

**🧠 How I Work:**
• 700+ preloaded Q&A pairs
• Local pattern matching (no external APIs)
• Instant responses (<100ms)
• Works offline

**✨ Capabilities:**
• Answer 700+ questions about Kunal
• Navigate to any section (60+ commands)
• Quick utilities (time, search, copy)
• Entertainment (jokes, facts, quotes)
• 4 different UI themes

**🚀 Technology:**
• Built with TypeScript & React
• Zero dependencies on external AI
• Privacy-focused (no data sent out)
• Lightweight & fast

**🎯 Version:** 4.0 - Enhanced Edition
**📊 Knowledge:** 700+ Q&A across 15 categories
**💬 Commands:** 60+ navigation & utility commands

I'm here to help you explore Kunal's world! What would you like to know?`;
}

export function getVersion(): string {
  return `🔧 **Stan AI Version 4.0**

**Release:** Enhanced Edition
**Date:** November 2025
**Status:** ✅ Stable & Production-Ready

**What's New:**
• +40 new commands (60+ total)
• 4 UI themes (Neon, Glass, Zen, Terminal)
• Quick utilities (time, search, clipboard)
• Entertainment features (jokes, facts)
• Portfolio statistics
• Meta commands

**Performance:**
• Response time: <100ms
• Memory usage: ~50KB
• Zero runtime errors
• 100% TypeScript

**Previous Versions:**
• v3.0 - Knowledge expansion (700+ Q&A)
• v2.0 - Navigation commands
• v1.0 - Initial release

Built with ❤️ for an amazing portfolio experience!`;
}

export function explainCapabilities(): string {
  return `✨ **Stan AI Capabilities**

I can help you with:

**📱 Navigation (18 commands)**
Browse the portfolio easily with commands like:
• "open blog" • "show apps" • "go to top"

**🔗 External Links (6 platforms)**
Quick access to social profiles:
• "github" • "linkedin" • "instagram"

**🛠️ Service Tools (5 commands)**
Explore services & pricing:
• "menu" • "calculator" • "packages"

**⚡ Quick Actions (10 utilities)**
Handy tools at your fingertips:
• "time" • "copy email" • "search google [query]"

**📊 Portfolio Info (5 commands)**
Learn about the work:
• "show stats" • "tech stack" • "achievements"

**🎮 Entertainment (5 features)**
Make it fun:
• "tell joke" • "motivate me" • "fun fact"

**🤖 Meta Commands (5 options)**
About me:
• "about stan" • "version" • "reset chat"

**💬 Q&A Knowledge (700+)**
Ask anything about Kunal, projects, tech stack, pricing, etc.

**Total: 60+ commands + 700+ Q&A = Your ultimate assistant!**

Type 'help' anytime to see the full list!`;
}

// ============================================
// CHAT MANAGEMENT
// ============================================

export function resetChatMessage(): string {
  return `🔄 **Chat Reset**

Conversation history cleared! Starting fresh.

What would you like to know about Kunal and the 7K Ecosystem?

💡 **Quick Tips:**
• Type "help" to see all commands
• Ask about projects, skills, or apps
• Try "show stats" for portfolio overview
• Say "motivate me" for inspiration!

Let's chat! 🚀`;
}

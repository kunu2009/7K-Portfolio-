"use client";

/**
 * Visitor Memory System
 * Remembers visitor preferences, name, and behavior
 */

// ============================================
// TYPES
// ============================================

export interface VisitorProfile {
  name: string | null;
  firstVisit: string;
  lastVisit: string;
  visitCount: number;
  sectionsVisited: string[];
  mascotsUsed: string[];
  chatCount: number;
  themePreference: "light" | "dark" | "system";
  accentColor: string | null;
  achievements: string[];
  preferences: {
    reducedMotion: boolean;
    soundEnabled: boolean;
  };
}

const DEFAULT_PROFILE: VisitorProfile = {
  name: null,
  firstVisit: new Date().toISOString(),
  lastVisit: new Date().toISOString(),
  visitCount: 1,
  sectionsVisited: [],
  mascotsUsed: ["robot"],
  chatCount: 0,
  themePreference: "system",
  accentColor: null,
  achievements: [],
  preferences: {
    reducedMotion: false,
    soundEnabled: false,
  },
};

const STORAGE_KEY = "7k-visitor-profile";

// ============================================
// PROFILE MANAGEMENT
// ============================================

export function getVisitorProfile(): VisitorProfile {
  if (typeof window === "undefined") return DEFAULT_PROFILE;
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const profile = JSON.parse(saved) as VisitorProfile;
      return { ...DEFAULT_PROFILE, ...profile };
    }
  } catch {
    // Invalid data, reset
  }
  return DEFAULT_PROFILE;
}

export function saveVisitorProfile(profile: Partial<VisitorProfile>) {
  if (typeof window === "undefined") return;
  
  const current = getVisitorProfile();
  const updated = { ...current, ...profile, lastVisit: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function updateVisitorProfile(updater: (profile: VisitorProfile) => Partial<VisitorProfile>) {
  const current = getVisitorProfile();
  const updates = updater(current);
  saveVisitorProfile(updates);
}

// ============================================
// VISITOR NAME
// ============================================

export function setVisitorName(name: string) {
  saveVisitorProfile({ name: name.trim() });
}

export function getVisitorName(): string | null {
  return getVisitorProfile().name;
}

// ============================================
// SECTION TRACKING
// ============================================

export function trackSectionVisit(section: string) {
  updateVisitorProfile(profile => {
    if (!profile.sectionsVisited.includes(section)) {
      return { sectionsVisited: [...profile.sectionsVisited, section] };
    }
    return {};
  });
}

export function getVisitedSections(): string[] {
  return getVisitorProfile().sectionsVisited;
}

export function hasVisitedAllSections(allSections: string[]): boolean {
  const visited = getVisitedSections();
  return allSections.every(s => visited.includes(s));
}

// ============================================
// MASCOT TRACKING
// ============================================

export function trackMascotUsed(mascot: string) {
  updateVisitorProfile(profile => {
    if (!profile.mascotsUsed.includes(mascot)) {
      return { mascotsUsed: [...profile.mascotsUsed, mascot] };
    }
    return {};
  });
}

export function getMascotsUsed(): string[] {
  return getVisitorProfile().mascotsUsed;
}

// ============================================
// CHAT TRACKING
// ============================================

export function incrementChatCount() {
  updateVisitorProfile(profile => ({
    chatCount: profile.chatCount + 1
  }));
}

export function getChatCount(): number {
  return getVisitorProfile().chatCount;
}

// ============================================
// VISIT TRACKING
// ============================================

export function recordVisit() {
  updateVisitorProfile(profile => ({
    visitCount: profile.visitCount + 1
  }));
}

export function getVisitCount(): number {
  return getVisitorProfile().visitCount;
}

export function isReturningVisitor(): boolean {
  return getVisitCount() > 1;
}

export function getDaysSinceFirstVisit(): number {
  const profile = getVisitorProfile();
  const firstVisit = new Date(profile.firstVisit);
  const now = new Date();
  return Math.floor((now.getTime() - firstVisit.getTime()) / (1000 * 60 * 60 * 24));
}

// ============================================
// TIME AWARENESS
// ============================================

export type TimeOfDay = "morning" | "afternoon" | "evening" | "night" | "late-night";

export function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  if (hour >= 21 || hour < 2) return "night";
  return "late-night"; // 2 AM - 5 AM
}

export function getTimeGreeting(name?: string | null): string {
  const timeOfDay = getTimeOfDay();
  const displayName = name || getVisitorName();
  const nameStr = displayName ? `, ${displayName}` : "";
  
  switch (timeOfDay) {
    case "morning":
      return `Good morning${nameStr}! ☀️`;
    case "afternoon":
      return `Good afternoon${nameStr}! 🌤️`;
    case "evening":
      return `Good evening${nameStr}! 🌅`;
    case "night":
      return `Good night${nameStr}! 🌙`;
    case "late-night":
      return `Still up${nameStr}? 🦉`;
  }
}

export function getTimeAwareMessage(): string {
  const timeOfDay = getTimeOfDay();
  const isReturning = isReturningVisitor();
  const name = getVisitorName();
  
  if (timeOfDay === "late-night") {
    const messages = [
      "Burning the midnight oil? 🌙",
      "Can't sleep? Let me keep you company! 🦉",
      "A fellow night owl! 🌃",
      "The best ideas come at night... 💡",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  
  if (timeOfDay === "morning") {
    if (new Date().getHours() < 6) {
      return "You're up early! ☕ Here's to a productive day!";
    }
    const messages = [
      "Ready to build something amazing today? 🚀",
      "Fresh start, fresh code! ☕",
      "Morning! Let's make today awesome! 🌟",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  
  if (isReturning) {
    const messages = name
      ? [
          `Welcome back, ${name}! 👋`,
          `Great to see you again, ${name}! 🎉`,
          `${name}! You came back! 😊`,
        ]
      : [
          "Welcome back! Missed you! 👋",
          "Hey, you're back! 🎉",
          "Good to see you again! 😊",
        ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  
  const messages = [
    "Welcome to the 7K Ecosystem! 🌟",
    "Hey there! I'm Stan, your guide! 🤖",
    "Hi! Explore my creator's work! 🚀",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export function getMascotMoodForTime(): string {
  const timeOfDay = getTimeOfDay();
  
  switch (timeOfDay) {
    case "morning":
      return "excited";
    case "afternoon":
      return "happy";
    case "evening":
      return "idle";
    case "night":
      return "sleeping";
    case "late-night":
      return "sleeping";
  }
}

export function shouldMascotBeSleepy(): boolean {
  const hour = new Date().getHours();
  return hour >= 23 || hour < 6;
}

// ============================================
// PROACTIVE TIPS
// ============================================

export interface ProactiveTip {
  id: string;
  message: string;
  condition: () => boolean;
  priority: number;
  shown?: boolean;
}

const TIPS_STORAGE_KEY = "7k-shown-tips";

function getShownTips(): string[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(TIPS_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function markTipShown(tipId: string) {
  if (typeof window === "undefined") return;
  const shown = getShownTips();
  if (!shown.includes(tipId)) {
    shown.push(tipId);
    localStorage.setItem(TIPS_STORAGE_KEY, JSON.stringify(shown));
  }
}

export function getProactiveTip(): ProactiveTip | null {
  const profile = getVisitorProfile();
  const shownTips = getShownTips();
  
  const tips: ProactiveTip[] = [
    {
      id: "explore-apps",
      message: "Did you know I have 20+ free apps? Check out the App Store section! 📱",
      condition: () => !profile.sectionsVisited.includes("apps") && profile.visitCount > 1,
      priority: 10,
    },
    {
      id: "try-mascots",
      message: "You can change my look! Click the mascot store button on me! 🎭",
      condition: () => profile.mascotsUsed.length === 1 && profile.visitCount > 2,
      priority: 8,
    },
    {
      id: "dark-mode",
      message: "Try dark mode for easier reading at night! 🌙",
      condition: () => getTimeOfDay() === "night" && profile.themePreference === "light",
      priority: 7,
    },
    {
      id: "chat-with-me",
      message: "Have questions? Click my chat button! I know everything about Kunal! 💬",
      condition: () => profile.chatCount === 0 && profile.visitCount > 1,
      priority: 9,
    },
    {
      id: "portfolio-section",
      message: "Check out the portfolio section to see live projects! 🎨",
      condition: () => !profile.sectionsVisited.includes("portfolio") && profile.sectionsVisited.length > 3,
      priority: 6,
    },
    {
      id: "blog-section",
      message: "Kunal writes about tech and productivity! Check the blog! 📝",
      condition: () => !profile.sectionsVisited.includes("blog") && profile.visitCount > 3,
      priority: 5,
    },
    {
      id: "support-section",
      message: "If you like what you see, consider supporting! ❤️",
      condition: () => profile.visitCount > 5 && !profile.sectionsVisited.includes("support"),
      priority: 4,
    },
    {
      id: "easter-eggs-hint",
      message: "Psst... there are hidden secrets on this site! 🥚",
      condition: () => profile.visitCount > 10,
      priority: 3,
    },
  ];
  
  // Filter out shown tips and check conditions
  const availableTips = tips
    .filter(tip => !shownTips.includes(tip.id) && tip.condition())
    .sort((a, b) => b.priority - a.priority);
  
  if (availableTips.length > 0) {
    const tip = availableTips[0];
    markTipShown(tip.id);
    return tip;
  }
  
  return null;
}

// ============================================
// THEME PREFERENCES
// ============================================

export function setThemePreference(theme: "light" | "dark" | "system") {
  saveVisitorProfile({ themePreference: theme });
}

export function getThemePreference(): "light" | "dark" | "system" {
  return getVisitorProfile().themePreference;
}

export function setAccentColor(color: string | null) {
  saveVisitorProfile({ accentColor: color });
}

export function getAccentColor(): string | null {
  return getVisitorProfile().accentColor;
}

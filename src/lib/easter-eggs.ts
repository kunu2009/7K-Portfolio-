"use client";

/**
 * Easter Eggs System
 * Hidden interactions and fun surprises throughout the site
 */

// ============================================
// KONAMI CODE
// ============================================

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA"
];

let konamiIndex = 0;
let konamiCallbacks: (() => void)[] = [];

export function initKonamiCode(callback: () => void) {
  konamiCallbacks.push(callback);
  
  if (konamiCallbacks.length === 1) {
    document.addEventListener("keydown", handleKonamiKeydown);
  }
  
  return () => {
    konamiCallbacks = konamiCallbacks.filter(cb => cb !== callback);
    if (konamiCallbacks.length === 0) {
      document.removeEventListener("keydown", handleKonamiKeydown);
    }
  };
}

function handleKonamiKeydown(e: KeyboardEvent) {
  if (e.code === KONAMI_CODE[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === KONAMI_CODE.length) {
      konamiIndex = 0;
      konamiCallbacks.forEach(cb => cb());
    }
  } else {
    konamiIndex = 0;
  }
}

// ============================================
// SECRET CLICK PATTERNS
// ============================================

interface ClickPattern {
  elementSelector: string;
  clickCount: number;
  timeWindow: number; // ms
  callback: () => void;
}

const clickPatterns: Map<string, { count: number; timer: NodeJS.Timeout | null }> = new Map();

export function registerClickPattern(pattern: ClickPattern) {
  const handler = () => {
    const state = clickPatterns.get(pattern.elementSelector) || { count: 0, timer: null };
    
    if (state.timer) clearTimeout(state.timer);
    
    state.count++;
    
    if (state.count >= pattern.clickCount) {
      pattern.callback();
      state.count = 0;
    }
    
    state.timer = setTimeout(() => {
      state.count = 0;
    }, pattern.timeWindow);
    
    clickPatterns.set(pattern.elementSelector, state);
  };
  
  const element = document.querySelector(pattern.elementSelector);
  if (element) {
    element.addEventListener("click", handler);
    return () => element.removeEventListener("click", handler);
  }
  return () => {};
}

// ============================================
// EASTER EGG REGISTRY
// ============================================

export interface EasterEgg {
  id: string;
  name: string;
  description: string;
  discovered: boolean;
  rarity: "common" | "rare" | "legendary";
  icon: string;
}

const EASTER_EGGS: EasterEgg[] = [
  { id: "konami", name: "Old School Gamer", description: "Entered the Konami Code", discovered: false, rarity: "legendary", icon: "🎮" },
  { id: "logo-click", name: "Brand Lover", description: "Clicked the logo 7 times", discovered: false, rarity: "common", icon: "💖" },
  { id: "night-owl", name: "Night Owl", description: "Visited between 2-5 AM", discovered: false, rarity: "rare", icon: "🦉" },
  { id: "early-bird", name: "Early Bird", description: "Visited before 6 AM", discovered: false, rarity: "rare", icon: "🐦" },
  { id: "explorer", name: "Explorer", description: "Visited all sections", discovered: false, rarity: "common", icon: "🗺️" },
  { id: "mascot-master", name: "Mascot Master", description: "Tried all 10 mascots", discovered: false, rarity: "rare", icon: "🎭" },
  { id: "theme-switcher", name: "Theme Switcher", description: "Changed theme 5 times", discovered: false, rarity: "common", icon: "🎨" },
  { id: "speed-reader", name: "Speed Reader", description: "Scrolled through entire page in <30s", discovered: false, rarity: "rare", icon: "⚡" },
  { id: "stan-friend", name: "Stan's Best Friend", description: "Chatted with Stan 10 times", discovered: false, rarity: "common", icon: "🤖" },
  { id: "matrix", name: "The One", description: "Found the Matrix mode", discovered: false, rarity: "legendary", icon: "💊" },
  { id: "disco", name: "Disco Fever", description: "Activated disco mode", discovered: false, rarity: "legendary", icon: "🪩" },
  { id: "rainbow", name: "Rainbow Road", description: "Found the rainbow mode", discovered: false, rarity: "legendary", icon: "🌈" },
];

export function getEasterEggs(): EasterEgg[] {
  if (typeof window === "undefined") return EASTER_EGGS;
  
  const saved = localStorage.getItem("7k-easter-eggs");
  if (saved) {
    const discovered = JSON.parse(saved) as string[];
    return EASTER_EGGS.map(egg => ({
      ...egg,
      discovered: discovered.includes(egg.id)
    }));
  }
  return EASTER_EGGS;
}

export function discoverEasterEgg(id: string): EasterEgg | null {
  if (typeof window === "undefined") return null;
  
  const saved = localStorage.getItem("7k-easter-eggs");
  const discovered = saved ? JSON.parse(saved) as string[] : [];
  
  if (!discovered.includes(id)) {
    discovered.push(id);
    localStorage.setItem("7k-easter-eggs", JSON.stringify(discovered));
    
    const egg = EASTER_EGGS.find(e => e.id === id);
    if (egg) {
      // Dispatch custom event for UI to react
      window.dispatchEvent(new CustomEvent("easterEggDiscovered", { 
        detail: { ...egg, discovered: true } 
      }));
      return { ...egg, discovered: true };
    }
  }
  return null;
}

export function getDiscoveredCount(): number {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem("7k-easter-eggs");
  return saved ? JSON.parse(saved).length : 0;
}

export function getDiscoveredEggs(): string[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("7k-easter-eggs");
  return saved ? JSON.parse(saved) : [];
}

export function isEasterEggDiscovered(id: string): boolean {
  return getDiscoveredEggs().includes(id);
}

export function getTotalEasterEggs(): number {
  return EASTER_EGGS.length;
}

// ============================================
// SPECIAL EFFECTS
// ============================================

export function triggerMatrixEffect() {
  if (typeof document === "undefined") return;
  
  const canvas = document.createElement("canvas");
  canvas.id = "matrix-canvas";
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.8;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext("2d")!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = "7Kアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops: number[] = Array(Math.floor(columns)).fill(1);
  
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  const interval = setInterval(draw, 33);
  
  setTimeout(() => {
    clearInterval(interval);
    canvas.remove();
  }, 10000);
  
  discoverEasterEgg("matrix");
}

export function triggerDiscoMode() {
  if (typeof document === "undefined") return;
  
  const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
  let colorIndex = 0;
  
  const overlay = document.createElement("div");
  overlay.id = "disco-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9998;
    pointer-events: none;
    mix-blend-mode: overlay;
    opacity: 0.3;
  `;
  document.body.appendChild(overlay);
  
  const interval = setInterval(() => {
    overlay.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
  }, 200);
  
  setTimeout(() => {
    clearInterval(interval);
    overlay.remove();
  }, 8000);
  
  discoverEasterEgg("disco");
}

export function triggerRainbowMode() {
  if (typeof document === "undefined") return;
  
  document.body.style.transition = "filter 0.5s";
  
  let hue = 0;
  const interval = setInterval(() => {
    document.body.style.filter = `hue-rotate(${hue}deg)`;
    hue = (hue + 10) % 360;
  }, 100);
  
  setTimeout(() => {
    clearInterval(interval);
    document.body.style.filter = "";
  }, 10000);
  
  discoverEasterEgg("rainbow");
}

export function triggerConfetti() {
  if (typeof document === "undefined") return;
  
  const colors = ["#ff0", "#f0f", "#0ff", "#0f0", "#ff6b6b", "#4ecdc4"];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      z-index: 10000;
      pointer-events: none;
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
  
  // Add CSS animation if not exists
  if (!document.getElementById("confetti-style")) {
    const style = document.createElement("style");
    style.id = "confetti-style";
    style.textContent = `
      @keyframes confetti-fall {
        to {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// SECRET COMMANDS (type anywhere)
// ============================================

let secretBuffer = "";
const SECRET_COMMANDS: Record<string, () => void> = {
  "matrix": triggerMatrixEffect,
  "disco": triggerDiscoMode,
  "rainbow": triggerRainbowMode,
  "party": triggerConfetti,
  "7k": () => {
    triggerConfetti();
    discoverEasterEgg("logo-click");
  },
};

export function initSecretCommands() {
  const handler = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }
    
    secretBuffer += e.key.toLowerCase();
    if (secretBuffer.length > 20) {
      secretBuffer = secretBuffer.slice(-20);
    }
    
    for (const [command, callback] of Object.entries(SECRET_COMMANDS)) {
      if (secretBuffer.endsWith(command)) {
        callback();
        secretBuffer = "";
        break;
      }
    }
  };
  
  document.addEventListener("keypress", handler);
  return () => document.removeEventListener("keypress", handler);
}

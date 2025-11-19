/**
 * Stan AI - 4 Different UI Styles
 * Choose your favorite design!
 */

import { Bot, Send, Loader2, Sparkles, MessageCircle, Zap, Brain, Command, Palette, Crown, Waves, Leaf, Droplets, Heart, Flame, Sparkle, Rainbow, Sunrise, Ship } from "lucide-react";

// ============================================
// STYLE 1: NEON GLOW
// High contrast with neon glows and sharp edges
// ============================================
export const Style1_NeonGlow = {
  name: "Neon Glow",
  description: "High contrast design with neon glows and sharp edges",
  
  cardWrapper: "relative overflow-hidden bg-black/90 border-2 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-xl",
  
  animatedBg: "absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse",
  
  contentPadding: "relative pt-6 md:pt-8 pb-6 px-3 md:px-6",
  
  headerWrapper: "relative mb-4 md:mb-6",
  headerGlow: "absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center md:space-x-3 mb-3",
  
  iconWrapper: "p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] mb-2 md:mb-0 border border-cyan-400",
  iconSize: "h-6 w-6 md:h-7 md:w-7 text-black",
  
  title: "font-headline text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
  titleText: "◢ STAN AI ◣",
  
  subtitle: "text-xs md:text-sm text-cyan-300/80 mt-0.5 font-mono uppercase tracking-widest",
  subtitleText: "[SYSTEM ONLINE • 700+ PROTOCOLS]",
  
  badgesWrapper: "flex flex-col sm:flex-row items-center justify-center gap-2 mt-3",
  badge1: "text-xs px-2.5 md:px-3 py-1 rounded border-2 border-cyan-500/80 bg-cyan-500/10 text-cyan-300 font-mono uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.3)]",
  badge1Text: "▸ NAV.SYS",
  badge2: "text-xs px-2.5 md:px-3 py-1 rounded border-2 border-purple-500/80 bg-purple-500/10 text-purple-300 font-mono uppercase tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.3)]",
  badge2Text: "▸ AI.CORE",
  
  hint: "text-xs md:text-sm text-center text-gray-400 mb-4 md:mb-6 px-2 md:px-4 font-mono",
  hintText: "⟩ EXEC: 'help' | 'open blog' | 'github' ⟨",
  
  chatContainer: "bg-black/60 rounded-lg border-2 border-cyan-500/40 shadow-inner mb-3 md:mb-4 max-h-[400px] md:max-h-[500px] overflow-y-auto overscroll-contain p-3 md:p-4 space-y-3 md:space-y-4 scroll-smooth backdrop-blur-sm shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]",
  
  userMessage: "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/40 rounded-lg p-3 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
  assistantMessage: "bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-lg p-3 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
  
  inputWrapper: "flex gap-2 mt-3 md:mt-4",
  input: "h-11 md:h-12 bg-black/80 border-2 border-cyan-500/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 pr-3 md:pr-4 text-sm md:text-base text-cyan-100 placeholder:text-cyan-500/50 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]",
  inputPlaceholder: "[ENTER.COMMAND]",
  
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 border border-cyan-400",
  
  footer: "text-[10px] md:text-xs text-center text-cyan-400/60 mt-2 md:mt-3 font-mono uppercase tracking-wider",
  footerText: "⟨ SYS.V3 • 700+ NODES • TYPE 'help' ⟩",
};

// ============================================
// STYLE 2: GLASS MORPHISM 🫧
// Soft, translucent with blur effects
// ============================================
export const Style2_GlassMorphism = {
  name: "Glass Morphism",
  description: "Soft translucent design with frosted glass blur effects",
  
  cardWrapper: "relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-primary/10",
  
  animatedBg: "absolute inset-0 bg-gradient-to-br from-white/5 via-primary/5 to-accent/5 animate-pulse",
  
  contentPadding: "relative pt-6 md:pt-8 pb-6 px-3 md:px-6",
  
  headerWrapper: "relative mb-4 md:mb-6",
  headerGlow: "absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center md:space-x-3 mb-3",
  
  iconWrapper: "p-2.5 md:p-3 rounded-2xl bg-white/20 backdrop-blur-xl shadow-lg border border-white/30 mb-2 md:mb-0",
  iconSize: "h-6 w-6 md:h-7 md:w-7 text-primary",
  
  title: "font-headline text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
  titleText: "Chat with Stan AI ✨",
  
  subtitle: "text-xs md:text-sm text-muted-foreground/80 mt-0.5",
  subtitleText: "Your AI companion with 700+ answers",
  
  badgesWrapper: "flex flex-col sm:flex-row items-center justify-center gap-2 mt-3",
  badge1: "text-xs px-2.5 md:px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl text-primary font-medium border border-white/20",
  badge1Text: "🎯 Smart Navigation",
  badge2: "text-xs px-2.5 md:px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl text-accent font-medium border border-white/20",
  badge2Text: "💬 Intelligent Chat",
  
  hint: "text-xs md:text-sm text-center text-muted-foreground/70 mb-4 md:mb-6 px-2 md:px-4",
  hintText: "💡 Try: 'help', 'open blog', 'github' — or ask anything!",
  
  chatContainer: "bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-inner mb-3 md:mb-4 max-h-[400px] md:max-h-[500px] overflow-y-auto overscroll-contain p-3 md:p-4 space-y-3 md:space-y-4 scroll-smooth",
  
  userMessage: "bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-3 shadow-sm",
  assistantMessage: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-sm",
  
  inputWrapper: "flex gap-2 mt-3 md:mt-4",
  input: "h-11 md:h-12 bg-white/10 backdrop-blur-xl border border-white/20 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 pr-3 md:pr-4 text-sm md:text-base placeholder:text-muted-foreground/50",
  inputPlaceholder: "Type 'help' or ask...",
  
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-xl hover:from-primary hover:to-accent shadow-lg transition-all hover:scale-105 border border-white/20",
  
  footer: "text-[10px] md:text-xs text-center text-muted-foreground/50 mt-2 md:mt-3",
  footerText: "✨ 700+ Q&A • Type 'help' for all commands",
};

// ============================================
// STYLE 3: MINIMALIST ZEN 🎋
// Clean, spacious with subtle accents
// ============================================
export const Style3_FlatMinimal = {
  name: "Flat Minimal",
  description: "Clean spacious design with subtle accents and breathing room",
  
  cardWrapper: "relative overflow-hidden bg-background border shadow-sm",
  
  animatedBg: "absolute inset-0 bg-gradient-to-br from-muted/5 to-muted/10",
  
  contentPadding: "relative pt-8 md:pt-10 pb-6 px-4 md:px-8",
  
  headerWrapper: "relative mb-6 md:mb-8",
  headerGlow: "",
  
  headerFlex: "relative flex flex-col items-center justify-center mb-4",
  
  iconWrapper: "p-3 md:p-4 rounded-full bg-primary/5 mb-3 md:mb-4",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-primary",
  
  title: "font-headline text-2xl sm:text-3xl md:text-4xl font-light text-foreground tracking-tight",
  titleText: "Stan",
  
  subtitle: "text-sm md:text-base text-muted-foreground mt-2",
  subtitleText: "Your intelligent assistant",
  
  badgesWrapper: "flex items-center justify-center gap-3 mt-4",
  badge1: "text-xs px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground font-normal",
  badge1Text: "Navigation",
  badge2: "text-xs px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground font-normal",
  badge2Text: "700+ Answers",
  
  hint: "text-sm text-center text-muted-foreground/60 mb-6 md:mb-8 px-2",
  hintText: "Type 'help' to see what I can do",
  
  chatContainer: "bg-muted/10 rounded-lg border mb-4 md:mb-6 max-h-[400px] md:max-h-[500px] overflow-y-auto overscroll-contain p-4 md:p-6 space-y-4 md:space-y-6 scroll-smooth",
  
  userMessage: "bg-primary/5 border-l-2 border-primary rounded p-4",
  assistantMessage: "bg-muted/30 rounded p-4",
  
  inputWrapper: "flex gap-3 mt-4 md:mt-6",
  input: "h-12 md:h-14 bg-background border focus:border-primary focus:ring-1 focus:ring-primary pr-4 text-base placeholder:text-muted-foreground/40",
  inputPlaceholder: "Ask me anything...",
  
  button: "shrink-0 h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 transition-colors",
  
  footer: "text-xs text-center text-muted-foreground/40 mt-4",
  footerText: "Powered by local AI • Type 'help' for commands",
};

// ============================================
// STYLE 4: RETRO TERMINAL 🖥️
// Classic computer terminal aesthetic
// ============================================
export const Style4_RetroTerminal = {
  name: "Retro Terminal",
  description: "Classic computer terminal with monospace font and green phosphor glow",
  
  cardWrapper: "relative overflow-hidden bg-black border-2 border-green-500/60 shadow-[0_0_30px_rgba(34,197,94,0.3)]",
  
  animatedBg: "absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,0.05)_25%,rgba(34,197,94,0.05)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.05)_75%,rgba(34,197,94,0.05)_76%,transparent_77%,transparent)] bg-[length:4px_4px] animate-pulse opacity-20",
  
  contentPadding: "relative pt-6 md:pt-8 pb-6 px-3 md:px-6 font-mono",
  
  headerWrapper: "relative mb-4 md:mb-6 border-b border-green-500/30 pb-4",
  headerGlow: "absolute inset-0 bg-green-500/10 blur-xl",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center md:space-x-3 mb-2",
  
  iconWrapper: "p-2 md:p-2.5 rounded-none bg-green-500/20 border border-green-500/50 mb-2 md:mb-0",
  iconSize: "h-5 w-5 md:h-6 md:w-6 text-green-400",
  
  title: "font-mono text-lg sm:text-xl md:text-2xl font-bold text-green-400 uppercase tracking-widest",
  titleText: "> STAN_AI.EXE",
  
  subtitle: "text-xs md:text-sm text-green-400/70 mt-1 font-mono",
  subtitleText: "System v3.0 | Memory: 700+ records",
  
  badgesWrapper: "flex flex-col sm:flex-row items-center justify-center gap-2 mt-3",
  badge1: "text-xs px-3 py-1 bg-green-500/10 text-green-400 font-mono border border-green-500/40",
  badge1Text: "[NAV]",
  badge2: "text-xs px-3 py-1 bg-green-500/10 text-green-400 font-mono border border-green-500/40",
  badge2Text: "[AI]",
  
  hint: "text-xs md:text-sm text-center text-green-400/60 mb-4 md:mb-6 px-2 font-mono",
  hintText: "$ help | open blog | github",
  
  chatContainer: "bg-black/80 rounded-none border border-green-500/40 mb-3 md:mb-4 max-h-[400px] md:max-h-[500px] overflow-y-auto overscroll-contain p-3 md:p-4 space-y-3 md:space-y-4 scroll-smooth shadow-[inset_0_0_20px_rgba(34,197,94,0.1)]",
  
  userMessage: "bg-green-500/5 border-l-2 border-green-500 rounded-none p-3 font-mono text-green-300",
  assistantMessage: "bg-green-500/10 border-l-2 border-green-400/50 rounded-none p-3 font-mono text-green-400/90",
  
  inputWrapper: "flex gap-2 mt-3 md:mt-4",
  input: "h-11 md:h-12 bg-black/90 border border-green-500/60 focus:border-green-400 focus:ring-2 focus:ring-green-500/40 pr-3 md:pr-4 text-sm md:text-base text-green-400 placeholder:text-green-500/40 font-mono rounded-none",
  inputPlaceholder: "> _",
  
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-green-600/80 hover:bg-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all hover:scale-105 border border-green-500 rounded-none font-mono",
  
  footer: "text-[10px] md:text-xs text-center text-green-400/50 mt-2 md:mt-3 font-mono",
  footerText: "[SYS] 700+ records loaded | Type 'help'",
};

// ==========================================
// STYLE 5: BOLD GRADIENT
// Vibrant gradient backgrounds with neumorphic shadows
// ==========================================
export const Style5_BoldGradient = {
  name: "Bold Gradient",
  description: "Vibrant gradient backgrounds with neumorphic shadows",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 shadow-2xl shadow-purple-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse opacity-30",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-6",
  headerGlow: "absolute -inset-4 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3 mb-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/90 font-medium text-center md:text-left",
  subtitleText: "Smart AI Assistant with Bold Gradients",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold text-white",
  badge1Text: "GRADIENT",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold text-white",
  badge2Text: "700+ Q&A",
  
  hint: "text-xs md:text-sm text-white/80 mb-3 md:mb-4 text-center italic px-2",
  hintText: "Type 'help' to see all commands",
  
  chatContainer: "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-purple-600 rounded-2xl shadow-lg ml-auto max-w-[85%] font-medium p-3",
  assistantMessage: "bg-white/20 backdrop-blur-sm text-white rounded-2xl border border-white/30 mr-auto max-w-[85%] p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/30 text-sm md:text-base",
  inputPlaceholder: "Ask me anything... ✨",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-purple-600 hover:bg-white/90 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/70 text-center mt-2",
  footerText: "✨ Powered by 700+ Q&A pairs • Always learning",
};

// ==========================================
// STYLE 6: DARK NEUMORPHIC
// Dark mode with soft neumorphic shadows
// ==========================================
export const Style6_DarkNeumorphic = {
  name: "Dark Neumorphic",
  description: "Dark mode with soft neumorphic shadows",
  
  cardWrapper: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-500/30 shadow-2xl shadow-amber-500/20",
  
  animatedBg: "absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 animate-pulse",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-6 pb-3 md:pb-4 border-b border-amber-500/20",
  headerGlow: "absolute -inset-2 bg-amber-500/10 blur-2xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50",
  iconSize: "h-6 w-6 md:h-7 md:w-7 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent mb-1 text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-amber-200/80 font-light tracking-wide text-center md:text-left",
  subtitleText: "Neumorphic Dark Theme",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-xs font-semibold text-amber-200",
  badge1Text: "DARK MODE",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-xs font-semibold text-amber-200",
  badge2Text: "NEUMORPHIC",
  
  hint: "text-xs md:text-sm text-amber-200/60 mb-3 md:mb-4 text-center font-light px-2",
  hintText: "Soft shadows and smooth gradients | Type 'help'",
  
  chatContainer: "rounded-xl bg-slate-800/50 border border-amber-500/20 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3",
  
  userMessage: "bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl shadow-lg shadow-amber-500/30 ml-auto max-w-[85%] font-medium p-3",
  assistantMessage: "bg-slate-700/50 border border-amber-500/20 text-amber-100 rounded-xl mr-auto max-w-[85%] p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-slate-800/80 border-2 border-amber-500/30 text-amber-100 placeholder:text-amber-200/40 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/30 text-sm md:text-base",
  inputPlaceholder: "Your wish is my command...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 rounded-xl font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all",
  
  footer: "text-[10px] md:text-xs text-amber-200/50 text-center font-light mt-2",
  footerText: "Neumorphic design • 700+ Q&A pairs",
};

// ==========================================
// STYLE 7: SOFT BUBBLE
// Rounded bubbles with soft shadows and blur
// ==========================================
export const Style7_SoftBubble = {
  name: "Soft Bubble",
  description: "Rounded bubbles with soft shadows and blur",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 shadow-2xl shadow-cyan-500/40 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] animate-pulse",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-6",
  headerGlow: "absolute -inset-4 bg-cyan-300/30 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/40",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/90 font-medium text-center md:text-left",
  subtitleText: "Soft Bubble Interface",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "BUBBLE",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "ROUNDED",
  
  hint: "text-xs md:text-sm text-white/80 mb-3 md:mb-4 text-center px-2",
  hintText: "Smooth rounded design | Try 'help' or 'tell joke'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/30 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-cyan-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/40 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/60 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Dive in... ask anything 🌊",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-cyan-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/70 text-center mt-2",
  footerText: "Bubble UI design • Smooth rounded elements",
};

// ==========================================
// STYLE 8: CARD SHADOW
// Material design with elevated card shadows
// ==========================================
export const Style8_CardShadow = {
  name: "Card Shadow",
  description: "Material design with elevated card shadows",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 shadow-2xl shadow-green-900/60 border border-emerald-400/20",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] opacity-60",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-6",
  headerGlow: "absolute -inset-4 bg-emerald-300/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-400/20 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-emerald-300/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-emerald-100",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-emerald-50 mb-1 drop-shadow-md text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-emerald-100/90 font-medium text-center md:text-left",
  subtitleText: "Material Card Design",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-emerald-400/20 backdrop-blur-sm border border-emerald-300/40 text-xs font-bold text-emerald-100",
  badge1Text: "MATERIAL",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-emerald-400/20 backdrop-blur-sm border border-emerald-300/40 text-xs font-bold text-emerald-100",
  badge2Text: "ELEVATED",
  
  hint: "text-xs md:text-sm text-emerald-100/80 mb-3 md:mb-4 text-center px-2",
  hintText: "Elevated card shadows | Type 'help' to explore",
  
  chatContainer: "rounded-2xl bg-emerald-900/30 backdrop-blur-sm border border-emerald-400/20 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3",
  
  userMessage: "bg-emerald-400 text-emerald-900 rounded-2xl shadow-lg shadow-emerald-900/30 ml-auto max-w-[85%] font-medium p-3",
  assistantMessage: "bg-emerald-800/40 backdrop-blur-sm border border-emerald-400/20 text-emerald-50 rounded-2xl mr-auto max-w-[85%] p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-emerald-900/30 backdrop-blur-sm border-2 border-emerald-400/30 text-emerald-50 placeholder:text-emerald-200/60 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/30 text-sm md:text-base",
  inputPlaceholder: "Ask naturally... 🌲",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-emerald-400 text-emerald-900 hover:bg-emerald-300 rounded-2xl font-bold shadow-lg shadow-emerald-900/30 hover:shadow-xl transition-all",
  
  footer: "text-[10px] md:text-xs text-emerald-100/60 text-center mt-2",
  footerText: "Material Design • Layered shadows",
};

// ==========================================
// STYLE 9: CYAN BUBBLE 💠
// Cyan-teal gradient bubble (like Web Development card)
// ==========================================
export const Style9_CyanBubble = {
  name: "Cyan Bubble",
  description: "Cyan-teal gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-cyan-400 to-teal-500 shadow-2xl shadow-cyan-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "Modern websites that shine",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "RESPONSIVE",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "SEO READY",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "Fast loading responses | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-cyan-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-cyan-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "Bubble UI • Smooth & Modern",
};

// ==========================================
// STYLE 10: PINK BUBBLE 💗
// Pink-magenta gradient bubble (like App Development card)
// ==========================================
export const Style10_PinkBubble = {
  name: "Pink Bubble",
  description: "Pink-magenta gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 shadow-2xl shadow-pink-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "PWAs & Mobile Apps",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "CROSS-PLATFORM",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "OFFLINE READY",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "App store ready | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-pink-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-pink-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "Bubble UI • Vibrant & Modern",
};

// ==========================================
// STYLE 11: ORANGE BUBBLE 🔥
// Orange-amber gradient bubble (like UI/UX Design card)
// ==========================================
export const Style11_OrangeBubble = {
  name: "Orange Bubble",
  description: "Orange-amber gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 shadow-2xl shadow-orange-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "Beautiful & intuitive",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "WIREFRAMES",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "PROTOTYPES",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "User testing ready | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-orange-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-orange-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "Bubble UI • Warm & Creative",
};

// ==========================================
// STYLE 12: VIOLET BUBBLE 💜
// Violet-purple gradient bubble (like Tech Consulting card)
// ==========================================
export const Style12_VioletBubble = {
  name: "Violet Bubble",
  description: "Violet-purple gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 shadow-2xl shadow-violet-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "Stan AI",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "Expert guidance",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "TECH STACK",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "ARCHITECTURE",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "Code review ready | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-violet-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-violet-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "Bubble UI • Professional & Expert",
};

// ==========================================
// STYLE 13: RAINBOW BUBBLE 🌈
// Multi-colored rainbow gradient bubble
// ==========================================
export const Style13_RainbowBubble = {
  name: "Rainbow Bubble",
  description: "Multi-colored rainbow gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 shadow-2xl shadow-purple-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent)] opacity-70 animate-pulse",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-40 h-40 bg-white/30 blur-3xl rounded-full animate-pulse",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl border-2 border-white/40",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-center md:text-left",
  titleText: "🌈 Stan AI Rainbow",
  
  subtitle: "text-xs md:text-sm text-white font-semibold text-center md:text-left drop-shadow-lg",
  subtitleText: "All colors in one beautiful design",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-xs font-bold text-white shadow-lg",
  badge1Text: "🌈 RAINBOW",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-xs font-bold text-white shadow-lg",
  badge2Text: "MULTI-COLOR",
  
  hint: "text-xs md:text-sm text-white font-medium mb-3 md:mb-4 text-center px-2 drop-shadow-lg",
  hintText: "🎨 Colorful AI experience | Type 'help' for magic",
  
  chatContainer: "rounded-3xl bg-white/20 backdrop-blur-xl border-2 border-white/30 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-purple-900 rounded-2xl shadow-xl ml-auto max-w-[85%] font-bold p-3",
  assistantMessage: "bg-white/25 backdrop-blur-md text-white rounded-2xl border border-white/40 mr-auto max-w-[85%] shadow-xl p-3 font-medium",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/25 backdrop-blur-md border-2 border-white/40 text-white placeholder:text-white/80 font-medium rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/60 focus:ring-2 focus:ring-white/50 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask me anything... 🌈",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-purple-600 hover:bg-white/95 rounded-2xl font-bold shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white font-semibold text-center mt-2 drop-shadow-lg",
  footerText: "🌈 Rainbow Bubble • Full Spectrum AI",
};

// ==========================================
// STYLE 14: SUNSET BUBBLE 🌅
// Warm sunset gradient (red-orange-pink)
// ==========================================
export const Style14_SunsetBubble = {
  name: "Sunset Bubble",
  description: "Warm sunset gradient bubble design",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-orange-500 to-pink-500 shadow-2xl shadow-orange-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "🌅 Stan AI Sunset",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "Warm sunset colors",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "SUNSET",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "WARM",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "Warm sunset vibes | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-red-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-orange-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "🌅 Sunset Bubble • Warm & Cozy",
};

// ==========================================
// STYLE 15: OCEAN RAINBOW 🌊
// Multi-colored ocean gradient (blue-cyan-teal-green)
// ==========================================
export const Style15_OceanRainbow = {
  name: "Ocean Rainbow",
  description: "Multi-colored ocean gradient bubble",
  
  cardWrapper: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 via-teal-500 to-green-500 shadow-2xl shadow-cyan-500/50 border-0",
  
  animatedBg: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent)] opacity-70",
  
  contentPadding: "relative p-4 md:p-6",
  
  headerWrapper: "relative mb-4 md:mb-5",
  headerGlow: "absolute -top-10 -left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full",
  
  headerFlex: "relative flex flex-col md:flex-row items-center justify-center gap-3",
  
  iconWrapper: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-white/30",
  iconSize: "h-7 w-7 md:h-8 md:w-8 text-white",
  
  title: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg text-center md:text-left",
  titleText: "🌊 Stan AI Ocean",
  
  subtitle: "text-xs md:text-sm text-white/95 font-medium text-center md:text-left",
  subtitleText: "Ocean colors flow",
  
  badgesWrapper: "flex flex-wrap justify-center gap-2 mt-2",
  badge1: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge1Text: "OCEAN",
  badge2: "px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold text-white shadow-lg",
  badge2Text: "MULTI-BLUE",
  
  hint: "text-xs md:text-sm text-white/85 mb-3 md:mb-4 text-center px-2",
  hintText: "Ocean waves of color | Type 'help'",
  
  chatContainer: "rounded-3xl bg-white/15 backdrop-blur-lg border-2 border-white/25 p-3 md:p-4 mb-3 md:mb-4 max-h-[300px] md:max-h-[400px] overflow-y-auto space-y-2 md:space-y-3 shadow-inner",
  
  userMessage: "bg-white text-blue-900 rounded-2xl shadow-lg ml-auto max-w-[85%] font-semibold p-3",
  assistantMessage: "bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/35 mr-auto max-w-[85%] shadow-lg p-3",
  
  inputWrapper: "flex gap-2 mb-3 md:mb-4",
  input: "flex-1 h-11 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/35 text-white placeholder:text-white/70 rounded-2xl px-3 md:px-4 py-2 md:py-3 focus:border-white/50 focus:ring-2 focus:ring-white/40 shadow-inner text-sm md:text-base",
  inputPlaceholder: "Ask anything...",
  button: "shrink-0 h-11 md:h-12 px-4 md:px-6 bg-white text-cyan-600 hover:bg-white/95 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105",
  
  footer: "text-[10px] md:text-xs text-white/75 text-center mt-2",
  footerText: "🌊 Ocean Rainbow • Cool & Fresh",
};

// Export all styles as an array for easy selection
export const ALL_STYLES = [
  Style1_NeonGlow,
  Style2_GlassMorphism,
  Style3_FlatMinimal,
  Style4_RetroTerminal,
  Style5_BoldGradient,
  Style6_DarkNeumorphic,
  Style7_SoftBubble,
  Style8_CardShadow,
  Style9_CyanBubble,
  Style10_PinkBubble,
  Style11_OrangeBubble,
  Style12_VioletBubble,
  Style13_RainbowBubble,
  Style14_SunsetBubble,
  Style15_OceanRainbow,
];

// Helper to get icon component based on style
export function getStyleIcon(styleName: string) {
  switch (styleName) {
    case "Neon Glow": return Zap;
    case "Glass Morphism": return Sparkles;
    case "Flat Minimal": return MessageCircle;
    case "Retro Terminal": return Command;
    case "Bold Gradient": return Palette;
    case "Dark Neumorphic": return Crown;
    case "Soft Bubble": return Waves;
    case "Card Shadow": return Leaf;
    case "Cyan Bubble": return Droplets;
    case "Pink Bubble": return Heart;
    case "Orange Bubble": return Flame;
    case "Violet Bubble": return Sparkle;
    case "Rainbow Bubble": return Rainbow;
    case "Sunset Bubble": return Sunrise;
    case "Ocean Rainbow": return Ship;
    default: return Bot;
  }
}

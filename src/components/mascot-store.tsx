"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, Lock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mascot types available in the store
export type MascotType = 
  | "robot" 
  | "cat" 
  | "dog" 
  | "panda" 
  | "fox" 
  | "alien" 
  | "ghost" 
  | "bunny"
  | "owl"
  | "dragon";

export interface MascotConfig {
  id: MascotType;
  name: string;
  emoji: string;
  description: string;
  unlocked: boolean;
  premium?: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// All available mascots
export const MASCOTS: MascotConfig[] = [
  {
    id: "robot",
    name: "Stan Robot",
    emoji: "🤖",
    description: "The original AI assistant",
    unlocked: true,
    colors: { primary: "#8B5CF6", secondary: "#A855F7", accent: "#22D3EE" },
  },
  {
    id: "cat",
    name: "Whiskers",
    emoji: "🐱",
    description: "A curious and playful kitty",
    unlocked: true,
    colors: { primary: "#F97316", secondary: "#FB923C", accent: "#FCD34D" },
  },
  {
    id: "dog",
    name: "Buddy",
    emoji: "🐕",
    description: "Your loyal coding companion",
    unlocked: true,
    colors: { primary: "#92400E", secondary: "#B45309", accent: "#FCD34D" },
  },
  {
    id: "panda",
    name: "Bambo",
    emoji: "🐼",
    description: "Chill and zen helper",
    unlocked: true,
    colors: { primary: "#1F2937", secondary: "#4B5563", accent: "#10B981" },
  },
  {
    id: "fox",
    name: "Foxy",
    emoji: "🦊",
    description: "Clever and quick-witted",
    unlocked: true,
    colors: { primary: "#EA580C", secondary: "#F97316", accent: "#FBBF24" },
  },
  {
    id: "alien",
    name: "Zyx",
    emoji: "👽",
    description: "From a galaxy far away",
    unlocked: true,
    colors: { primary: "#22C55E", secondary: "#4ADE80", accent: "#A855F7" },
  },
  {
    id: "ghost",
    name: "Boo",
    emoji: "👻",
    description: "Friendly and floaty",
    unlocked: true,
    colors: { primary: "#E5E7EB", secondary: "#F3F4F6", accent: "#8B5CF6" },
  },
  {
    id: "bunny",
    name: "Hoppy",
    emoji: "🐰",
    description: "Bouncy and energetic",
    unlocked: true,
    colors: { primary: "#EC4899", secondary: "#F472B6", accent: "#FDF2F8" },
  },
  {
    id: "owl",
    name: "Hoot",
    emoji: "🦉",
    description: "Wise and knowledgeable",
    unlocked: true,
    colors: { primary: "#78350F", secondary: "#92400E", accent: "#FBBF24" },
  },
  {
    id: "dragon",
    name: "Ember",
    emoji: "🐉",
    description: "Legendary code guardian",
    unlocked: true,
    premium: true,
    colors: { primary: "#DC2626", secondary: "#EF4444", accent: "#FCD34D" },
  },
];

// Get saved mascot from localStorage
export const getSavedMascot = (): MascotType => {
  if (typeof window === "undefined") return "robot";
  return (localStorage.getItem("selected-mascot") as MascotType) || "robot";
};

// Save mascot to localStorage
export const saveMascot = (mascot: MascotType) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selected-mascot", mascot);
  }
};

// Get mascot config by ID
export const getMascotConfig = (id: MascotType): MascotConfig => {
  return MASCOTS.find(m => m.id === id) || MASCOTS[0];
};

interface MascotStoreProps {
  isOpen: boolean;
  onClose: () => void;
  currentMascot: MascotType;
  onSelectMascot: (mascot: MascotType) => void;
}

export function MascotStore({ isOpen, onClose, currentMascot, onSelectMascot }: MascotStoreProps) {
  const [selectedMascot, setSelectedMascot] = useState<MascotType>(currentMascot);
  const [hoveredMascot, setHoveredMascot] = useState<MascotType | null>(null);

  const handleSelect = (mascot: MascotConfig) => {
    if (!mascot.unlocked) return;
    setSelectedMascot(mascot.id);
  };

  const handleConfirm = () => {
    onSelectMascot(selectedMascot);
    saveMascot(selectedMascot);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-background border-2 border-primary/30 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold">Mascot Store</h2>
                  <p className="text-sm text-muted-foreground">Choose your AI companion</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Mascot Grid */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {MASCOTS.map((mascot) => {
                  const isSelected = selectedMascot === mascot.id;
                  const isCurrent = currentMascot === mascot.id;
                  const isHovered = hoveredMascot === mascot.id;
                  
                  return (
                    <motion.button
                      key={mascot.id}
                      className={`relative p-4 rounded-2xl border-2 transition-all ${
                        isSelected 
                          ? "border-primary bg-primary/10" 
                          : "border-border hover:border-primary/50 bg-card"
                      } ${!mascot.unlocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      onClick={() => handleSelect(mascot)}
                      onMouseEnter={() => setHoveredMascot(mascot.id)}
                      onMouseLeave={() => setHoveredMascot(null)}
                      whileHover={mascot.unlocked ? { scale: 1.05, y: -5 } : {}}
                      whileTap={mascot.unlocked ? { scale: 0.95 } : {}}
                    >
                      {/* Premium badge */}
                      {mascot.premium && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full p-1">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      )}
                      
                      {/* Lock icon */}
                      {!mascot.unlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-2xl">
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        </div>
                      )}
                      
                      {/* Current indicator */}
                      {isCurrent && (
                        <div className="absolute -top-2 -left-2 bg-green-500 rounded-full p-1">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                      
                      {/* Mascot preview */}
                      <motion.div
                        className="text-4xl mb-2"
                        animate={isHovered || isSelected ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, -10, 10, 0],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {mascot.emoji}
                      </motion.div>
                      
                      <div className="text-sm font-semibold truncate">{mascot.name}</div>
                      
                      {/* Color preview */}
                      <div className="flex gap-1 mt-2 justify-center">
                        <div 
                          className="w-3 h-3 rounded-full border border-white/20" 
                          style={{ backgroundColor: mascot.colors.primary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full border border-white/20" 
                          style={{ backgroundColor: mascot.colors.secondary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full border border-white/20" 
                          style={{ backgroundColor: mascot.colors.accent }}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            {/* Selected mascot info */}
            <div className="p-6 border-t border-border bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-5xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {getMascotConfig(selectedMascot).emoji}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg">{getMascotConfig(selectedMascot).name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getMascotConfig(selectedMascot).description}
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={handleConfirm}
                  disabled={selectedMascot === currentMascot}
                  className="gap-2"
                >
                  <Check className="w-4 h-4" />
                  {selectedMascot === currentMascot ? "Current" : "Select"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mini mascot selector button to trigger the store
interface MascotSelectorProps {
  currentMascot: MascotType;
  onClick: () => void;
}

export function MascotSelector({ currentMascot, onClick }: MascotSelectorProps) {
  const mascot = getMascotConfig(currentMascot);
  
  return (
    <motion.button
      className="absolute -top-2 -left-2 w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 cursor-pointer z-10"
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      title="Change Mascot"
    >
      <span className="text-xs">{mascot.emoji}</span>
    </motion.button>
  );
}

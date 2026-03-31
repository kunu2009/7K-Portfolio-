"use client";

/**
 * Theme Customizer
 * Allows users to customize accent colors and theme preferences
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check, RotateCcw, Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { getAccentColor, setAccentColor as saveAccentColor } from "@/lib/visitor-memory";
import { discoverEasterEgg } from "@/lib/easter-eggs";

// Preset accent colors
const ACCENT_COLORS = [
  { name: "Bronze", value: "#cd7f32", hsl: "30 80% 50%" },
  { name: "Gold", value: "#ffd700", hsl: "51 100% 50%" },
  { name: "Rose", value: "#e11d48", hsl: "347 77% 50%" },
  { name: "Purple", value: "#8b5cf6", hsl: "258 90% 66%" },
  { name: "Blue", value: "#3b82f6", hsl: "217 91% 60%" },
  { name: "Cyan", value: "#06b6d4", hsl: "189 94% 43%" },
  { name: "Green", value: "#10b981", hsl: "160 84% 39%" },
  { name: "Orange", value: "#f97316", hsl: "25 95% 53%" },
  { name: "Pink", value: "#ec4899", hsl: "330 81% 60%" },
  { name: "Indigo", value: "#6366f1", hsl: "239 84% 67%" },
];

// Theme change counter for easter egg
let themeChangeCount = 0;

interface ThemeCustomizerProps {
  className?: string;
}

export function ThemeCustomizer({ className }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved accent color
    const saved = getAccentColor();
    if (saved) {
      setSelectedColor(saved);
      applyAccentColor(saved);
    }
  }, []);

  const applyAccentColor = (colorValue: string | null) => {
    if (typeof document === "undefined") return;
    
    if (colorValue) {
      const color = ACCENT_COLORS.find(c => c.value === colorValue);
      if (color) {
        document.documentElement.style.setProperty("--primary", color.hsl);
        document.documentElement.style.setProperty("--accent", color.hsl);
      }
    } else {
      // Reset to default
      document.documentElement.style.removeProperty("--primary");
      document.documentElement.style.removeProperty("--accent");
    }
  };

  const handleColorSelect = (color: typeof ACCENT_COLORS[0]) => {
    setSelectedColor(color.value);
    saveAccentColor(color.value);
    applyAccentColor(color.value);
    
    // Track theme changes for easter egg
    themeChangeCount++;
    if (themeChangeCount >= 5) {
      discoverEasterEgg("theme-switcher");
    }
  };

  const handleReset = () => {
    setSelectedColor(null);
    saveAccentColor(null);
    applyAccentColor(null);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    themeChangeCount++;
    if (themeChangeCount >= 5) {
      discoverEasterEgg("theme-switcher");
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-4 z-40 w-12 h-12 rounded-full",
          "bg-gradient-to-br from-primary to-accent",
          "flex items-center justify-center shadow-lg",
          "border-2 border-white/20 hover:border-white/40",
          "transition-all hover:scale-110",
          className
        )}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        title="Customize Theme"
      >
        <Palette className="w-5 h-5 text-white" />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-4 bottom-24 z-50 w-72 bg-background border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-muted/50">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Customize Theme</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-4 space-y-6">
                {/* Theme Mode */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-muted-foreground">
                    Theme Mode
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      size="sm"
                      className="flex-1"
                      onClick={() => handleThemeChange("light")}
                    >
                      <Sun className="w-4 h-4 mr-1" />
                      Light
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      size="sm"
                      className="flex-1"
                      onClick={() => handleThemeChange("dark")}
                    >
                      <Moon className="w-4 h-4 mr-1" />
                      Dark
                    </Button>
                    <Button
                      variant={theme === "system" ? "default" : "outline"}
                      size="sm"
                      className="flex-1"
                      onClick={() => handleThemeChange("system")}
                    >
                      <Monitor className="w-4 h-4 mr-1" />
                      Auto
                    </Button>
                  </div>
                </div>

                {/* Accent Colors */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-muted-foreground">
                      Accent Color
                    </label>
                    {selectedColor && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={handleReset}
                      >
                        <RotateCcw className="w-3 h-3 mr-1" />
                        Reset
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {ACCENT_COLORS.map((color) => (
                      <motion.button
                        key={color.value}
                        onClick={() => handleColorSelect(color)}
                        className={cn(
                          "w-10 h-10 rounded-full relative",
                          "ring-2 ring-offset-2 ring-offset-background transition-all",
                          selectedColor === color.value
                            ? "ring-primary scale-110"
                            : "ring-transparent hover:ring-muted-foreground/30"
                        )}
                        style={{ backgroundColor: color.value }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={color.name}
                      >
                        {selectedColor === color.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Check className="w-5 h-5 text-white drop-shadow-lg" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Preview
                  </label>
                  <div className="p-3 rounded-lg bg-muted/50 space-y-2">
                    <div className="flex gap-2">
                      <Button size="sm">Primary</Button>
                      <Button size="sm" variant="outline">Outline</Button>
                    </div>
                    <div className="h-2 rounded-full bg-primary/30">
                      <div className="h-full w-2/3 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * ThemeCustomizerButton - Just the button for use in other places
 */
export function ThemeCustomizerButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} title="Customize Theme">
      <Palette className="w-5 h-5" />
    </Button>
  );
}

export default ThemeCustomizer;

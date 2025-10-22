"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleStyleSwitcherProps {
  currentStyle: number;
  onStyleChange: (style: number) => void;
  totalStyles: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function CollapsibleStyleSwitcher({
  currentStyle,
  onStyleChange,
  totalStyles,
  position = "top-right",
}: CollapsibleStyleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: position.includes("top") ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position.includes("top") ? -10 : 10 }}
            className="mb-2 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-2"
          >
            <div className="text-xs text-muted-foreground mb-2 px-2">
              Choose Style
            </div>
            <div className="flex gap-2">
              {Array.from({ length: totalStyles }, (_, i) => i + 1).map((style) => (
                <Button
                  key={style}
                  variant={currentStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    onStyleChange(style);
                    setIsOpen(false);
                  }}
                  className="min-w-[40px]"
                >
                  {style}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="sm"
        variant="outline"
        className="bg-background/95 backdrop-blur-sm shadow-lg gap-2"
      >
        <span className="text-xs font-medium">Style {currentStyle}</span>
        {isOpen ? (
          <ChevronUp className="h-3 w-3" />
        ) : (
          <ChevronDown className="h-3 w-3" />
        )}
      </Button>
    </div>
  );
}

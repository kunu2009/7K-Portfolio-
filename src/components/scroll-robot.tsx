"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const lastScrollY = useRef(0);
  
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for horizontal position
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Robot moves from left to right as you scroll
  const xPos = useTransform(smoothProgress, [0, 1], ["5%", "85%"]);
  
  // Slight bounce as it moves
  const yBounce = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, -8, 0, -8, 0, -8, 0, -8, 0, -8, 0]
  );

  useEffect(() => {
    // Show robot after initial load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Detect scrolling for running animation
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolling = Math.abs(currentScrollY - lastScrollY.current) > 2;
      setIsRunning(isScrolling);
      lastScrollY.current = currentScrollY;
    };
    
    // Debounced scroll end detection
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsRunning(false), 150);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollEnd, { passive: true });
    
    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-6 z-50 pointer-events-none hidden md:block"
      style={{ 
        x: xPos,
        y: yBounce,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      {/* Robot Container */}
      <motion.div
        className="relative"
        animate={{
          scaleX: isRunning ? 1 : 1,
          rotate: isRunning ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{
          rotate: { duration: 0.3, repeat: isRunning ? Infinity : 0 },
        }}
      >
        {/* Robot Body */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
          
          {/* Robot emoji with running effect */}
          <motion.span 
            className="text-3xl relative z-10 drop-shadow-lg"
            animate={{
              y: isRunning ? [0, -4, 0] : 0,
            }}
            transition={{
              duration: 0.2,
              repeat: isRunning ? Infinity : 0,
            }}
          >
            🤖
          </motion.span>
          
          {/* Running dust particles */}
          {isRunning && (
            <>
              <motion.span
                className="absolute -left-2 bottom-0 text-xs opacity-60"
                initial={{ opacity: 0.8, x: 0 }}
                animate={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, repeat: Infinity }}
              >
                💨
              </motion.span>
              <motion.span
                className="absolute -left-4 bottom-1 text-xs opacity-40"
                initial={{ opacity: 0.6, x: 0 }}
                animate={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
              >
                ✨
              </motion.span>
            </>
          )}
        </div>
        
        {/* Speech bubble - shows when not scrolling */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ 
            opacity: isRunning ? 0 : 1, 
            y: isRunning ? 5 : 0 
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-2 py-1 text-xs shadow-lg">
            <span className="text-muted-foreground">Scroll me! 👆</span>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-background/90 border-r border-b border-border rotate-45" />
        </motion.div>
      </motion.div>
      
      {/* Track line showing path */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 w-screen -translate-x-1/2" />
    </motion.div>
  );
}

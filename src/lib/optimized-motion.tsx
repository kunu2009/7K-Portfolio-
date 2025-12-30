"use client";

/**
 * Optimized Motion Components
 * Provides performance-optimized Framer Motion wrappers that:
 * - Disable animations on low-end devices
 * - Respect prefers-reduced-motion
 * - Use simplified animations on slow connections
 */

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { forwardRef, useMemo, type ComponentProps, type ReactNode } from "react";
import { getDeviceCapabilities, getAnimationConfig, type AnimationConfig } from "./performance";

// ============================================
// HOOKS
// ============================================

export function useOptimizedAnimation(): AnimationConfig & { shouldAnimate: boolean } {
  return useMemo(() => {
    const config = getAnimationConfig();
    return {
      ...config,
      shouldAnimate: config.enabled,
    };
  }, []);
}

// ============================================
// OPTIMIZED VARIANTS
// ============================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2 }
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2 }
  },
};

// ============================================
// OPTIMIZED MOTION COMPONENTS
// ============================================

type OptimizedMotionDivProps = ComponentProps<typeof motion.div> & {
  enableOnLowEnd?: boolean;
};

/**
 * OptimizedMotionDiv - A motion.div that respects device capabilities
 */
export const OptimizedMotionDiv = forwardRef<HTMLDivElement, OptimizedMotionDivProps>(
  ({ enableOnLowEnd = false, animate, transition, ...props }, ref) => {
    const caps = getDeviceCapabilities();
    const config = getAnimationConfig();
    
    // Disable animations on low-end devices unless explicitly enabled
    if (!config.enabled && !enableOnLowEnd) {
      const { variants, initial, whileHover, whileTap, whileInView, ...rest } = props;
      return <div ref={ref} {...(rest as React.HTMLAttributes<HTMLDivElement>)} />;
    }
    
    // Use simplified transitions on low-end devices
    const optimizedTransition = caps.isLowEnd 
      ? { duration: 0.1, ease: "linear" as const }
      : transition;
    
    return (
      <motion.div
        ref={ref}
        animate={animate}
        transition={optimizedTransition}
        {...props}
      />
    );
  }
);
OptimizedMotionDiv.displayName = "OptimizedMotionDiv";

/**
 * LazyMotionSection - Lazy-loaded section with optimized entrance animation
 */
interface LazyMotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function LazyMotionSection({ children, className, delay = 0 }: LazyMotionSectionProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <section className={className}>{children}</section>;
  }
  
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: config.duration,
        delay: delay * 0.1,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
}

/**
 * FadeIn - Simple fade-in wrapper
 */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, className, delay = 0, duration }: FadeInProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: duration ?? config.duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeInUp - Fade in from below
 */
export function FadeInUp({ children, className, delay = 0, duration }: FadeInProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: duration ?? config.duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container for staggered children animations
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className, staggerDelay = 0.05 }: StaggerContainerProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Item inside a StaggerContainer
 */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.2, ease: "easeOut" }
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverScale - Scale on hover (disabled on touch/low-end)
 */
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({ children, className, scale = 1.02 }: HoverScaleProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * OptimizedAnimatePresence - AnimatePresence with optimizations
 */
interface OptimizedAnimatePresenceProps {
  children: ReactNode;
  mode?: "sync" | "wait" | "popLayout";
}

export function OptimizedAnimatePresence({ children, mode = "sync" }: OptimizedAnimatePresenceProps) {
  const config = getAnimationConfig();
  
  if (!config.enabled) {
    return <>{children}</>;
  }
  
  return <AnimatePresence mode={mode}>{children}</AnimatePresence>;
}

// Re-export framer-motion for convenience
export { motion, AnimatePresence };
export type { Variants };

/**
 * Performance Optimization Utilities







































































































































































































































































































































































export type { MotionProps, Variants };export { AnimatePresence, motion, useScroll, useTransform, useSpring };// ============================================// EXPORTS// ============================================}  };    scrollYProgress: config.enabled ? smoothScrollYProgress : scrollYProgress,    scrollY: config.enabled ? smoothScrollY : scrollY,  return {    const smoothScrollYProgress = useSpring(scrollYProgress, springConfig);  const smoothScrollY = useSpring(scrollY, springConfig);      : { stiffness: 1000, damping: 1000 }; // Instant for low-end    ? { stiffness: 100, damping: 30, restDelta: 0.001 }  const springConfig = config.enabled  // Use smoother spring on capable devices    const config = getAnimationConfig();  const { scrollY, scrollYProgress } = useScroll();export function useOptimizedScroll(): { scrollY: MotionValue<number>; scrollYProgress: MotionValue<number> } {import { useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";// ============================================// SCROLL PROGRESS (Optimized)// ============================================}  return <AnimatePresence mode={mode}>{children}</AnimatePresence>;    }    return <>{children}</>;  if (!config.enabled) {    const config = getAnimationConfig();export function OptimizedAnimatePresence({ children, mode = "sync" }: OptimizedAnimatePresenceProps) {}  mode?: "sync" | "wait" | "popLayout";  children: ReactNode;interface OptimizedAnimatePresenceProps { */ * OptimizedAnimatePresence - AnimatePresence with optimizations/**}  );    </motion.div>      {children}    >      transition={{ duration: 0.15 }}      whileTap={{ scale: 0.98 }}      whileHover={{ scale }}      className={className}    <motion.div  return (    }    return <div className={className}>{children}</div>;  if (!config.enabled) {    const config = getAnimationConfig();export function HoverScale({ children, className, scale = 1.02 }: HoverScaleProps) {}  scale?: number;  className?: string;  children: ReactNode;interface HoverScaleProps { */ * HoverScale - Scale on hover (disabled on touch/low-end)/**}  );    </motion.div>      {children}    >      }}        },          transition: { duration: 0.2, ease: "easeOut" }          y: 0,          opacity: 1,         visible: {         hidden: { opacity: 0, y: 10 },      variants={{      className={className}    <motion.div  return (    }    return <div className={className}>{children}</div>;  if (!config.enabled) {    const config = getAnimationConfig();export function StaggerItem({ children, className }: StaggerItemProps) {}  className?: string;  children: ReactNode;interface StaggerItemProps { */ * StaggerItem - Item inside a StaggerContainer/**}  );    </motion.div>      {children}    >      }}        },          transition: { staggerChildren: staggerDelay },          opacity: 1,        visible: {        hidden: { opacity: 0 },      variants={{      viewport={{ once: true, margin: "-30px" }}      whileInView="visible"      initial="hidden"      className={className}    <motion.div  return (    }    return <div className={className}>{children}</div>;  if (!config.enabled) {    const config = getAnimationConfig();export function StaggerContainer({ children, className, staggerDelay = 0.05 }: StaggerContainerProps) {}  staggerDelay?: number;  className?: string;  children: ReactNode;interface StaggerContainerProps { */ * StaggerContainer - Container for staggered children animations/**}  );    </motion.div>      {children}    >      }}        ease: "easeOut"        delay,        duration: duration ?? config.duration,      transition={{       viewport={{ once: true, margin: "-30px" }}      whileInView={{ opacity: 1, y: 0 }}      initial={{ opacity: 0, y: 20 }}      className={className}    <motion.div  return (    }    return <div className={className}>{children}</div>;  if (!config.enabled) {    const config = getAnimationConfig();export function FadeInUp({ children, className, delay = 0, duration }: FadeInProps) { */ * FadeInUp - Fade in from below/**}  );    </motion.div>      {children}    >      }}        ease: "easeOut"        delay,        duration: duration ?? config.duration,      transition={{       viewport={{ once: true }}      whileInView={{ opacity: 1 }}      initial={{ opacity: 0 }}      className={className}    <motion.div  return (    }    return <div className={className}>{children}</div>;  if (!config.enabled) {    const config = getAnimationConfig();export function FadeIn({ children, className, delay = 0, duration }: FadeInProps) {}  duration?: number;  delay?: number;  className?: string;  children: ReactNode;interface FadeInProps { */ * FadeIn - Simple fade-in wrapper/**}  );    </motion.section>      {children}    >      }}        ease: "easeOut"        delay: delay * 0.1,        duration: config.duration,      transition={{       viewport={{ once: true, margin: "-50px" }}      whileInView={{ opacity: 1, y: 0 }}      initial={{ opacity: 0, y: 15 }}      className={className}    <motion.section  return (    }    return <section className={className}>{children}</section>;  if (!config.enabled) {    const config = getAnimationConfig();export function LazyMotionSection({ children, className, delay = 0 }: LazyMotionSectionProps) {}  delay?: number;  className?: string;  children: ReactNode;interface LazyMotionSectionProps { */ * LazyMotionSection - Lazy-loaded section with optimized entrance animation/**OptimizedMotionDiv.displayName = "OptimizedMotionDiv";);  }    );      />        {...props}        transition={optimizedTransition}        animate={animate}        ref={ref}      <motion.div    return (          : transition;      ? { duration: 0.1, ease: "linear" }    const optimizedTransition = caps.isLowEnd     // Use simplified transitions on low-end devices        }      return <div ref={ref} {...(rest as any)} />;      const { variants, initial, whileHover, whileTap, whileInView, ...rest } = props;    if (!config.enabled && !enableOnLowEnd) {    // Disable animations on low-end devices unless explicitly enabled        const config = getAnimationConfig();    const caps = getDeviceCapabilities();  ({ enableOnLowEnd = false, animate, transition, ...props }, ref) => {export const OptimizedMotionDiv = forwardRef<HTMLDivElement, OptimizedMotionDivProps>( */ * OptimizedMotionDiv - A motion.div that respects device capabilities/**};  enableOnLowEnd?: boolean;type OptimizedMotionDivProps = ComponentProps<typeof motion.div> & {// ============================================// OPTIMIZED MOTION COMPONENTS// ============================================};  visible: { opacity: 1, transition: { duration: 0 } },  hidden: { opacity: 0 },export const reducedMotionVariants: Variants = {// Reduced motion variants (instant transitions)};  },    transition: { duration: 0.2 }    y: 0,    opacity: 1,   visible: {   hidden: { opacity: 0, y: 10 },export const staggerItemVariants: Variants = {};  },    },      delayChildren: 0.1,      staggerChildren: 0.05,    transition: {    opacity: 1,  visible: {  hidden: { opacity: 0 },export const staggerContainerVariants: Variants = {};  },    transition: { duration: 0.2 }    scale: 1,    opacity: 1,   visible: {   hidden: { opacity: 0, scale: 0.95 },export const scaleInVariants: Variants = {};  },    transition: { duration: 0.3, ease: "easeOut" }    y: 0,    opacity: 1,   visible: {   hidden: { opacity: 0, y: 20 },export const fadeInUpVariants: Variants = {};  },    transition: { duration: 0.3 }    opacity: 1,  visible: {   hidden: { opacity: 0 },export const fadeInVariants: Variants = {// ============================================// OPTIMIZED VARIANTS// ============================================}  }, []);    };      shouldAnimate: config.enabled,      ...config,    return {    const config = getAnimationConfig();  return useMemo(() => {export function useOptimizedAnimation(): AnimationConfig & { shouldAnimate: boolean } {// ============================================// HOOKS// ============================================import { getDeviceCapabilities, getAnimationConfig, type AnimationConfig } from "./performance";import { forwardRef, useMemo, type ComponentProps, type ReactNode } from "react";import { motion, type MotionProps, type Variants, AnimatePresence } from "framer-motion"; */ * - Use simplified animations on slow connections * - Respect prefers-reduced-motion * - Disable animations on low-end devices * Provides performance-optimized Framer Motion wrappers that: * Optimized Motion Components/** * Improves loading speed and runtime performance for low-end devices
 */

// ============================================
// DEVICE CAPABILITY DETECTION
// ============================================

export interface DeviceCapabilities {
  isLowEnd: boolean;
  isSlowNetwork: boolean;
  prefersReducedMotion: boolean;
  hasLowMemory: boolean;
  connectionType: string;
  deviceMemory: number;
  hardwareConcurrency: number;
  saveData: boolean;
}

let cachedCapabilities: DeviceCapabilities | null = null;

export const getDeviceCapabilities = (): DeviceCapabilities => {
  if (cachedCapabilities) return cachedCapabilities;
  
  if (typeof window === 'undefined') {
    return {
      isLowEnd: false,
      isSlowNetwork: false,
      prefersReducedMotion: false,
      hasLowMemory: false,
      connectionType: '4g',
      deviceMemory: 8,
      hardwareConcurrency: 4,
      saveData: false,
    };
  }

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const deviceMemory = (navigator as any).deviceMemory || 4;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const connectionType = connection?.effectiveType || '4g';
  const saveData = connection?.saveData || false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const isLowEnd = deviceMemory <= 2 || hardwareConcurrency <= 2 || prefersReducedMotion || saveData;
  const isSlowNetwork = ['slow-2g', '2g', '3g'].includes(connectionType) || saveData;
  const hasLowMemory = deviceMemory <= 2;

  cachedCapabilities = {
    isLowEnd,
    isSlowNetwork,
    prefersReducedMotion,
    hasLowMemory,
    connectionType,
    deviceMemory,
    hardwareConcurrency,
    saveData,
  };

  return cachedCapabilities;
};

// Reset cache when connection changes
if (typeof window !== 'undefined') {
  const connection = (navigator as any).connection;
  if (connection) {
    connection.addEventListener('change', () => {
      cachedCapabilities = null;
    });
  }
}

// ============================================
// ANIMATION OPTIMIZATION
// ============================================

export interface AnimationConfig {
  duration: number;
  stiffness: number;
  damping: number;
  bounce: number;
  enabled: boolean;
}

export const getAnimationConfig = (): AnimationConfig => {
  const caps = getDeviceCapabilities();
  
  if (caps.prefersReducedMotion) {
    return { duration: 0, stiffness: 1000, damping: 1000, bounce: 0, enabled: false };
  }
  
  if (caps.isLowEnd) {
    return { duration: 0.1, stiffness: 400, damping: 40, bounce: 0, enabled: true };
  }
  
  return { duration: 0.3, stiffness: 200, damping: 20, bounce: 0.2, enabled: true };
};

// Optimize animations for low-end devices
export const shouldReduceAnimations = (): boolean => {
  const caps = getDeviceCapabilities();
  return caps.prefersReducedMotion || caps.isLowEnd;
};

// Check if device prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ============================================
// IMAGE OPTIMIZATION
// ============================================

export const getOptimalImageQuality = (): number => {
  const caps = getDeviceCapabilities();
  if (caps.isSlowNetwork || caps.saveData) return 50;
  if (caps.isLowEnd) return 65;
  return 85;
};

export const getImageSizes = (isHero: boolean = false): string => {
  if (isHero) {
    return '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';
  }
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

// ============================================
// NETWORK & CONNECTION
// ============================================

export const isSlowConnection = (): boolean => {
  const caps = getDeviceCapabilities();
  return caps.isSlowNetwork;
};

// Preconnect to external domains
export const preconnectDomains = (domains: string[]) => {
  if (typeof document === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    
    const dnsLink = document.createElement('link');
    dnsLink.rel = 'dns-prefetch';
    dnsLink.href = domain;
    document.head.appendChild(dnsLink);
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  
  const fonts = ['/fonts/inter-var.woff2', '/fonts/playfair-display.woff2'];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
};

// ============================================
// EVENT THROTTLING & DEBOUNCING
// ============================================

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// ============================================
// LAZY LOADING & OBSERVERS
// ============================================

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '100px',
    threshold: 0.01,
    ...options,
  });
};

// Request idle callback wrapper
export const requestIdleCallback = (callback: () => void, timeout = 2000) => {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
};

// ============================================
// WEB VITALS & METRICS
// ============================================

export interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${metric.name}: ${metric.value}`);
  }
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// ============================================
// MEMORY MANAGEMENT
// ============================================

export const cleanupMemory = () => {
  if (typeof window === 'undefined') return;
  
  // Clear any cached data that's no longer needed
  if ('gc' in window) {
    (window as any).gc();
  }
};

// Chunk large arrays for memory-efficient processing
export function* chunkArray<T>(array: T[], chunkSize: number): Generator<T[]> {
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}

// ============================================
// CSS CONTAINMENT HELPER
// ============================================

export const getContainmentStyle = (type: 'strict' | 'content' | 'layout' | 'paint' = 'content') => {
  return { contain: type };
};


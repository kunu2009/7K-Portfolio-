import { useReducedMotion } from 'framer-motion';
import { useOptimizedAnimation } from '@/hooks/use-performance';

type Variant = Record<string, any>;

/** Shared motion helpers with reduced-motion awareness */
export function useMotionPresets() {
  const { shouldReduceAnimations } = useOptimizedAnimation();
  const framerPrefersReduced = useReducedMotion();
  const reduce = shouldReduceAnimations || framerPrefersReduced;

  const transitionBase = {
    duration: reduce ? 0.001 : 0.28,
    ease: [0.22, 0.61, 0.36, 1],
  } as const;

  const fadeInUp: Variant = {
    hidden: { opacity: 0, y: reduce ? 0 : 16, scale: 1 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ...transitionBase },
    },
  };

  const fadeIn: Variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ...transitionBase } },
  };

  const popIn: Variant = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { ...transitionBase, duration: reduce ? 0.001 : 0.22 },
    },
  };

  const riseIn: Variant = {
    hidden: { opacity: 0, y: reduce ? 0 : 24, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { ...transitionBase, duration: reduce ? 0.001 : 0.32 },
    },
  };

  const stagger = (delay = 0.04) => ({
    show: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: delay, delayChildren: delay },
    },
  });

  const whileInView = {
    once: true,
    margin: '-80px',
    amount: 0.2,
  } as const;

  return {
    reduce,
    transitionBase,
    fadeInUp,
    fadeIn,
    popIn,
    riseIn,
    stagger,
    whileInView,
  } as const;
}

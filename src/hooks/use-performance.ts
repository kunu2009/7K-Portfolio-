"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isSlowConnection: boolean;
  prefersReducedMotion: boolean;
  deviceMemory?: number;
  hardwareConcurrency?: number;
  effectiveConnectionType?: string;
}

export function usePerformance(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isSlowConnection: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Get connection info
    const connection = (navigator as any).connection || 
                      (navigator as any).mozConnection || 
                      (navigator as any).webkitConnection;
    
    // Get device capabilities
    const deviceMemory = (navigator as any).deviceMemory;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    
    const isSlowConnection = connection ? 
      (connection.effectiveType === 'slow-2g' || 
       connection.effectiveType === '2g' || 
       connection.saveData === true) : false;
    
    setMetrics({
      isSlowConnection,
      prefersReducedMotion: reducedMotionQuery.matches,
      deviceMemory,
      hardwareConcurrency,
      effectiveConnectionType: connection?.effectiveType,
    });
    
    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setMetrics(prev => ({ ...prev, prefersReducedMotion: e.matches }));
    };
    
    reducedMotionQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return metrics;
}

// Hook for optimized animations
export function useOptimizedAnimation() {
  const { prefersReducedMotion, isSlowConnection, deviceMemory, hardwareConcurrency } = usePerformance();
  
  // Determine if we should reduce animations
  const shouldReduceAnimations = 
    prefersReducedMotion || 
    isSlowConnection ||
    (deviceMemory && deviceMemory < 4) ||
    (hardwareConcurrency && hardwareConcurrency < 4);
  
  return {
    shouldReduceAnimations,
    animationDuration: shouldReduceAnimations ? 0 : 300,
    animationEasing: shouldReduceAnimations ? 'linear' : 'cubic-bezier(0.4, 0, 0.2, 1)',
  };
}

// Hook for viewport detection
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Debounce resize events
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return viewport;
}

// Hook for intersection observer (lazy loading)
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

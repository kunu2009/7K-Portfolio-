/**
 * Performance Optimization Utilities
 * Improves loading speed and runtime performance
 */

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  
  // Preload fonts
  const fonts = [
    '/fonts/inter-var.woff2',
    '/fonts/playfair-display.woff2',
  ];
  
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

// Debounce function for scroll and resize events
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

// Throttle function for frequent events
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

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  });
};

// Check if device prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimal image quality based on connection
export const getOptimalImageQuality = (): number => {
  if (typeof navigator === 'undefined') return 85;
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 85;
  
  const effectiveType = connection.effectiveType;
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 50;
    case '3g':
      return 70;
    case '4g':
      return 85;
    default:
      return 90;
  }
};

// Check if user is on slow connection
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.saveData === true;
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
    
    // Also add dns-prefetch as fallback
    const dnsLink = document.createElement('link');
    dnsLink.rel = 'dns-prefetch';
    dnsLink.href = domain;
    document.head.appendChild(dnsLink);
  });
};

// Measure and report Web Vitals
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Optimize animations for low-end devices
export const shouldReduceAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for reduced motion preference
  if (prefersReducedMotion()) return true;
  
  // Check for low-end device indicators
  const isLowEndDevice = 
    (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4 ||
    (navigator as any).hardwareConcurrency && (navigator as any).hardwareConcurrency < 4;
  
  return isLowEndDevice;
};

// Request idle callback wrapper
export const requestIdleCallback = (callback: () => void) => {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

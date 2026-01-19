/**
 * Performance Optimization Utilities
 * Improves loading speed and runtime performance
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

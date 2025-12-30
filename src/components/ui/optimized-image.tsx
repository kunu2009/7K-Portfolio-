"use client";

/**
 * Optimized Image Component
 * Performance-focused image loading with:
 * - Blur placeholder support
 * - Lazy loading with IntersectionObserver
 * - Responsive sizes
 * - Network-aware quality
 * - Low-end device optimizations
 */

import Image, { ImageProps } from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { getDeviceCapabilities, getOptimalImageQuality } from '@/lib/performance';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
  blurDataURL?: string;
  /** Show loading skeleton */
  showSkeleton?: boolean;
  /** Disable lazy loading */
  eager?: boolean;
  /** Custom aspect ratio (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
  /** Fade in animation */
  fadeIn?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder.svg',
  blurDataURL,
  priority = false,
  showSkeleton = true,
  eager = false,
  aspectRatio,
  fadeIn = true,
  quality,
  sizes,
  fill,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(eager || priority || false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get device capabilities for optimizations
  const caps = getDeviceCapabilities();
  const optimizedQuality = quality ?? getOptimalImageQuality();
  const shouldAnimate = fadeIn && !caps.prefersReducedMotion;

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (eager || priority || isInView) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [eager, priority, isInView]);

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes ?? (fill
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    : undefined);

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {isInView && (
        <Image
          {...props}
          src={hasError ? fallback : imgSrc}
          alt={alt}
          fill={fill}
          sizes={responsiveSizes}
          quality={optimizedQuality}
          className={cn(
            shouldAnimate && 'transition-all duration-300',
            shouldAnimate && isLoading && 'blur-sm scale-105',
            shouldAnimate && !isLoading && 'blur-0 scale-100',
            fill && 'object-cover'
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
            setImgSrc(fallback);
          }}
          priority={priority}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          loading={priority || eager ? 'eager' : 'lazy'}
        />
      )}
      {showSkeleton && isLoading && !hasError && (
        <div 
          className="absolute inset-0 bg-muted/50 animate-pulse"
          style={{ animationDuration: caps.isLowEnd ? '2s' : '1.5s' }}
        />
      )}
    </div>
  );
}

/**
 * BackgroundImage - Optimized background image wrapper
 */
interface BackgroundImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
  priority?: boolean;
}

export function BackgroundImage({
  src,
  alt,
  children,
  className,
  overlay = false,
  overlayClassName,
  priority = false,
}: BackgroundImageProps) {
  const quality = getOptimalImageQuality();

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
      />
      {overlay && (
        <div className={cn('absolute inset-0 bg-black/50', overlayClassName)} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * IconImage - Small icon images with fixed dimensions
 */
interface IconImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function IconImage({ src, alt, size = 24, className }: IconImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      quality={90}
    />
  );
}

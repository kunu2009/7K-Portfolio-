"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder.svg',
  blurDataURL,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        {...props}
        src={hasError ? fallback : imgSrc}
        alt={alt}
        className={cn(
          'transition-all duration-300',
          isLoading && 'blur-sm scale-105',
          !isLoading && 'blur-0 scale-100',
          className
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
        loading={priority ? 'eager' : 'lazy'}
      />
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse" />
      )}
    </div>
  );
}

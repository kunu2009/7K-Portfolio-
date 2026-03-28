import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background relative overflow-hidden">
      {/* Floating decorative images while loading */}
      <div className="absolute top-10 right-10 opacity-20 animate-bounce hidden md:block" style={{ animationDuration: '2s' }}>
        <Image src="/images/decorations/buff-cat.png" alt="" width={80} height={80} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15 animate-pulse hidden md:block">
        <Image src="/images/decorations/duck-character.png" alt="" width={60} height={60} />
      </div>
      <div className="absolute top-1/3 left-5 opacity-10 animate-spin hidden lg:block" style={{ animationDuration: '10s' }}>
        <Image src="/images/decorations/geometric-circles.jpeg" alt="" width={100} height={100} className="rounded-full" />
      </div>
      
      {/* Header Skeleton - Optimized for mobile */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex h-14 md:h-16 items-center justify-between px-3 md:px-4">
          <Skeleton className="h-6 w-24 md:h-8 md:w-32" />
          <div className="hidden md:flex space-x-3">
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-9 w-16" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-9 w-20 rounded-full hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton with cute mascot */}
      <div className="flex-1 flex items-center justify-center py-12 md:py-20">
        <div className="container flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 px-4">
          {/* Loading mascot */}
          <div className="relative">
            <Image 
              src="/images/decorations/cat-headphones.png" 
              alt="Loading..." 
              width={100} 
              height={100}
              className="animate-bounce"
              style={{ animationDuration: '1.5s' }}
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground animate-pulse">
              Loading...
            </div>
          </div>
          <Skeleton className="h-10 md:h-14 w-72 max-w-full" />
          <Skeleton className="h-6 md:h-7 w-80 max-w-full" />
          <Skeleton className="h-5 md:h-6 w-64 max-w-full" />
          <div className="flex gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Content Skeleton - Simplified for mobile */}
      <div className="container py-8 md:py-12 space-y-8 md:space-y-12 px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Skeleton className="h-8 md:h-10 w-36 md:w-48" />
            <Skeleton className="h-4 md:h-5 w-full" />
            <Skeleton className="h-4 md:h-5 w-full" />
            <Skeleton className="h-4 md:h-5 w-3/4" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>

        <div className="space-y-8">
          <Skeleton className="h-12 w-64 mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

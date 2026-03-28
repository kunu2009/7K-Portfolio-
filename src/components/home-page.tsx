"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from "@/components/header-enhanced";
import HeroSection from "@/components/sections/hero-enhanced";
import Footer from "@/components/footer-enhanced";
import { GeometricDivider, MarqueeBannerStrip } from "@/components/ui/floating-decorations";

// Skeleton loaders for better UX
const SkeletonLoader = ({ height = 400 }: { height?: number }) => (
  <div className={`min-h-[${height}px] animate-pulse bg-gradient-to-br from-muted/20 to-muted/5`} />
);

// Lazy load all sections below the fold with optimized loading states
const AboutSection = dynamic(() => import('@/components/sections/about-enhanced'), {
  loading: () => <SkeletonLoader height={400} />
});
const PhilosophySection = dynamic(() => import('@/components/sections/philosophy'), {
  loading: () => <SkeletonLoader height={300} />
});
const ServicesMenuCard = dynamic(() => import('@/components/sections/services-menu-card'), {
  loading: () => <SkeletonLoader height={600} />
});
const PortfolioShowcaseSection = dynamic(() => import('@/components/sections/portfolio-showcase'), {
  loading: () => <SkeletonLoader height={400} />
});
const AppStoreSection = dynamic(() => import('@/components/sections/app-store'), {
  loading: () => <SkeletonLoader height={400} />
});
const ProjectsSection = dynamic(() => import('@/components/sections/projects'), {
  loading: () => <SkeletonLoader height={400} />
});
const WritingSection = dynamic(() => import('@/components/sections/writing'), {
  loading: () => <SkeletonLoader height={300} />
});
const JourneySection = dynamic(() => import('@/components/sections/journey'), {
  loading: () => <SkeletonLoader height={400} />
});
const SupportSection = dynamic(() => import('@/components/sections/support-section').then(mod => ({ default: mod.SupportSection })), {
  loading: () => <SkeletonLoader height={300} />
});
const BlogSection = dynamic(() => import('@/components/blog-section'), {
  loading: () => <SkeletonLoader height={400} />
});
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'), {
  loading: () => <SkeletonLoader height={300} />
});

// Image collections for marquee strips
const vibeImages = [
  "/images/decorations/some_creations/Aesthetic Minimalist Wallpaper.png",
  "/images/decorations/some_creations/Monochromatic Floating Castle Phone Wallpaper.png",
  "/images/decorations/some_creations/Monochrome Phone Wallpaper 9_16.png",
  "/images/decorations/some_creations/Monochromatic Floating Castle Phone Wallpaper (3).png",
  "/images/decorations/some_creations/Minimalist Phone Wallpaper.png",
  "/images/decorations/some_creations/Monochrome Phone Wallpaper 9_16 (1).png",
  "/images/decorations/some_creations/profile-pic.png",
  "/images/decorations/some_creations/Picsart_24-10-31_22-21-52-153.png",
  "/images/decorations/some_creations/Picsart_24-10-20_17-07-36-935.png",
  "/images/decorations/some_creations/Picsart_24-11-20_21-39-10-226.png",
];

const hustleImages = [
  "/images/decorations/struggles/Screenshot 2025-10-01 232136.png",
  "/images/decorations/struggles/Screenshot 2025-10-04 183331.png",
  "/images/decorations/struggles/Screenshot 2025-11-11 213033.png",
  "/images/decorations/struggles/Screenshot 2025-11-12 010535.png",
  "/images/decorations/struggles/Screenshot 2025-11-17 235153.png",
  "/images/decorations/struggles/Screenshot 2025-11-23 001818.png",
  "/images/decorations/struggles/Screenshot 2025-12-04 212510.png",
  "/images/decorations/struggles/Screenshot 2025-12-31 003844.png",
  "/images/decorations/struggles/Screenshot 2026-03-03 163748.png",
];

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        
        {/* Scrolling image strip - adds visual interest */}
        <MarqueeBannerStrip images={vibeImages} speed={40} opacity={0.35} />
        
        <AppStoreSection />
        <ServicesMenuCard />
        <TestimonialsSection limit={3} />
        <GeometricDivider />
        <PortfolioShowcaseSection />
        
        {/* Hustle/Struggles marquee representing the journey */}
        <MarqueeBannerStrip images={hustleImages} speed={50} height="h-20 md:h-32" opacity={0.3} />
        
        <ProjectsSection />
        <WritingSection />
        <GeometricDivider />
        <JourneySection />
        <PhilosophySection />
        <BlogSection variant="grid" limit={3} showCategories={false} />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

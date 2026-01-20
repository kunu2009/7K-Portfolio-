"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from "@/components/header-enhanced";
import HeroSection from "@/components/sections/hero-enhanced";
import Footer from "@/components/footer-enhanced";

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

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AppStoreSection />
        <ServicesMenuCard />
        <TestimonialsSection limit={3} />
        <PortfolioShowcaseSection />
        <ProjectsSection />
        <WritingSection />
        <JourneySection />
        <PhilosophySection />
        <BlogSection variant="grid" limit={3} showCategories={false} />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

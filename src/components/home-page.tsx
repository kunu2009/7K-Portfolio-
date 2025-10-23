"use client";

import dynamic from 'next/dynamic';
import Header from "@/components/header-enhanced";
import HeroSection from "@/components/sections/hero-enhanced";
import Footer from "@/components/footer-enhanced";

// Lazy load all sections below the fold with loading states
const AboutSection = dynamic(() => import('@/components/sections/about-enhanced'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const PhilosophySection = dynamic(() => import('@/components/sections/philosophy'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-muted/20" />
});
const ServicesMenuCard = dynamic(() => import('@/components/sections/services-menu-card'), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-muted/20" />
});
const PortfolioShowcaseSection = dynamic(() => import('@/components/sections/portfolio-showcase'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const AppStoreSection = dynamic(() => import('@/components/sections/app-store'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const ProjectsSection = dynamic(() => import('@/components/sections/projects'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const WritingSection = dynamic(() => import('@/components/sections/writing'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-muted/20" />
});
const JourneySection = dynamic(() => import('@/components/sections/journey'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const SupportSection = dynamic(() => import('@/components/sections/support-section').then(mod => ({ default: mod.SupportSection })), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-muted/20" />
});

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesMenuCard />
        <PortfolioShowcaseSection />
        <AppStoreSection />
        <ProjectsSection />
        <WritingSection />
        <JourneySection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

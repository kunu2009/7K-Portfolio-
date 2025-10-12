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
const ServicesPromo = dynamic(() => import('@/components/sections/services-promo'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-muted/20" />
});
const PortfolioShowcaseSection = dynamic(() => import('@/components/sections/portfolio-showcase'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const AppStoreSection = dynamic(() => import('@/components/sections/app-store'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const EcosystemSection = dynamic(() => import('@/components/sections/ecosystem'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
});
const RecommendationsSection = dynamic(() => import('@/components/sections/recommendations'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-muted/20" />
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
    <div 
      className="flex min-h-dvh flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesPromo />
        <PortfolioShowcaseSection />
        <AppStoreSection />
        <EcosystemSection />
        <RecommendationsSection />
        <ProjectsSection />
        <WritingSection />
        <JourneySection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

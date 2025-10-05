"use client";

import dynamic from 'next/dynamic';
import Header from "@/components/header-enhanced";
import HeroSection from "@/components/sections/hero-enhanced";
import Footer from "@/components/footer-enhanced";

const AboutSection = dynamic(() => import('@/components/sections/about-enhanced'));
const PhilosophySection = dynamic(() => import('@/components/sections/philosophy'));
const PortfolioShowcaseSection = dynamic(() => import('@/components/sections/portfolio-showcase'));
const EcosystemSection = dynamic(() => import('@/components/sections/ecosystem'));
const RecommendationsSection = dynamic(() => import('@/components/sections/recommendations'));
const ProjectsSection = dynamic(() => import('@/components/sections/projects'));
const WritingSection = dynamic(() => import('@/components/sections/writing'));
const JourneySection = dynamic(() => import('@/components/sections/journey'));

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
        <PortfolioShowcaseSection />
        <EcosystemSection />
        <RecommendationsSection />
        <ProjectsSection />
        <WritingSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}

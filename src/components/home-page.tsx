
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import PhilosophySection from "@/components/sections/philosophy";
import EcosystemSection from "@/components/sections/ecosystem";
import RecommendationsSection from "@/components/sections/recommendations";
import ProjectsSection from "@/components/sections/projects";
import WritingSection from "@/components/sections/writing";
import JourneySection from "@/components/sections/journey";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
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

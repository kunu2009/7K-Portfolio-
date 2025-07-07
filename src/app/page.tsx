import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import EcosystemSection from "@/components/sections/ecosystem";
import ProjectsSection from "@/components/sections/projects";
import WritingSection from "@/components/sections/writing";
import JourneySection from "@/components/sections/journey";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <ProjectsSection />
        <WritingSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-dvh min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container flex flex-col items-center justify-center text-center z-10 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]" data-robot-interact="title">
          Hi, I'm <span data-name="kunal" className="text-primary">Kunal</span>.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium" data-robot-interact="subtitle">
          I build the <span data-highlight="ecosystem" className="text-accent">7K Ecosystem</span> — one idea at a time.
        </p>
        <Button asChild size="lg" className="rounded-full shadow-2xl bg-primary hover:bg-primary/90 backdrop-blur-sm" data-robot-interact="cta">
          <Link href="#about">
            See what I've made <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

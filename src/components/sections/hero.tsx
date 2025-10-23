
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-dvh min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Kunal Chheda - Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Additional vignette effect */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      </div>

      <div className="container flex flex-col items-center justify-center text-center z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl">
          Hi, I'm Kunal.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 drop-shadow-lg">
          I build the 7K Ecosystem — one idea at a time.
        </p>
        <Button asChild size="lg" className="rounded-full shadow-xl">
          <Link href="#about">
            See what I've made <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const particles = Array.from({ length: 50 });

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-dvh min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        <div className="absolute inset-0 z-0 h-full w-full">
            {particles.map((_, i) => {
                const isLeft = Math.random() > 0.5;
                const xDist = `${Math.random() * (isLeft ? -20 : 20)}vw`;
                const delay = `${-(Math.random() * 20)}s`;
                const duration = `${15 + Math.random() * 15}s`;

                return (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-primary/30 animate-move-particles" 
                        style={{
                            // @ts-ignore
                            '--x-dist': xDist,
                            '--delay': delay,
                            '--duration': duration,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${1 + Math.random()}px`,
                            height: `${1 + Math.random()}px`,
                        }}
                    />
                )
            })}
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center text-center z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <Avatar className="h-36 w-36 mb-8 border-4 border-primary">
          <AvatarImage src="https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png" alt="Kunal" data-ai-hint="portrait" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          Hi, I’m Kunal.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          I build the 7K Ecosystem — one idea at a time.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="#about">
            See what I've made <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

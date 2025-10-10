
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

const particles = Array.from({ length: 50 });

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-dvh min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/banner.png" 
            alt="7K Ecosystem Background Banner"
            fill
            priority
            className="object-cover opacity-20"
            quality={100}
          />
        </div>
        
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        
        {/* Particle Animation */}
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

      {/* Hero Content */}
      <div className="container flex flex-col items-center justify-center text-center z-10 px-4">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <Avatar className="h-36 w-36 mb-8 border-4 border-primary shadow-2xl shadow-primary/20">
            <AvatarImage 
              src="/favicon.ico" 
              alt="7K Brand Logo - Kunal Chheda's 7K Ecosystem" 
              data-ai-hint="7K brand logo"
              fetchPriority="high"
              className="object-cover scale-150"
            />
            <AvatarFallback className="text-3xl font-bold">7K</AvatarFallback>
          </Avatar>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent">
            Building the 7K Ecosystem
          </h1>
          <p className="font-headline text-2xl sm:text-3xl md:text-4xl text-muted-foreground/80 mb-2">
            One Idea at a Time.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            I'm <span className="text-primary font-semibold">Kunal</span> — a 12th-grade Arts student with a passion for building apps, learning languages, and playing chess. I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/70 mb-8">
            <span className="inline-block">Developer</span>
            <span className="mx-2">•</span>
            <span className="inline-block">Polyglot</span>
            <span className="mx-2">•</span>
            <span className="inline-block">Chess Player</span>
            <span className="mx-2">•</span>
            <span className="inline-block">Lifelong Learner</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row gap-4 mb-8" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
            <Link href="#projects">
              Explore My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="#contact">
              Get In Touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="opacity-0 animate-fade-in-up flex gap-4" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {SOCIAL_LINKS.map((link) => (
            <Button 
              key={link.name}
              asChild 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-primary/10"
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.name}
              >
                {link.name === "GitHub" && <Github className="h-5 w-5" />}
                {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                {link.name === "Instagram" && <Instagram className="h-5 w-5" />}
                {link.name === "Email" && <Mail className="h-5 w-5" />}
                {link.name === "Phone" && <Phone className="h-5 w-5" />}
                {link.name === "WhatsApp" && <MessageCircle className="h-5 w-5" />}
              </a>
            </Button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

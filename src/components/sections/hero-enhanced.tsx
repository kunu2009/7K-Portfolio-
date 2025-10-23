"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { portfolioSections } from "@/lib/sections-data";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { hero } = portfolioSections;
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Don't render if disabled
  if (!hero.enabled) return null;
  
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-20 sm:py-0">
      {/* Background Image with Enhanced Quality */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.05) saturate(1.0) brightness(0.9)'
          }}
        />
        {/* Very Subtle Vignette - Only at Far Edges */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.25) 100%)'
             }}
        />
      </div>

      {/* Hero Content with Individual Glass Cards */}
      <div className="container relative flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        
        {/* Avatar with Individual Glass */}
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="inline-block rounded-full p-2 mb-6 sm:mb-8"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(8px)',
                 WebkitBackdropFilter: 'blur(8px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
               }}>
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 border-4 border-primary shadow-2xl shadow-primary/20">
              <AvatarImage 
                src="/favicon.ico" 
                alt="7K Brand Logo" 
                fetchPriority="high"
                className="object-cover scale-150"
              />
              <AvatarFallback className="text-2xl sm:text-3xl font-bold">7K</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Title and Subtitle with Individual Glass */}
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="inline-block rounded-2xl px-6 sm:px-8 py-4 sm:py-6 mb-4"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(8px)',
                 WebkitBackdropFilter: 'blur(8px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
               }}>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {hero.title}
            </h1>
            <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 px-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
              {hero.subtitle}
            </p>
          </div>
        </div>
        </div>

        {/* CTA Buttons with Individual Glass */}
        <div 
          className={`transition-all duration-700 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow w-full sm:w-auto">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links with Individual Glass Container */}
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="inline-flex flex-wrap gap-2 sm:gap-3 justify-center rounded-full px-4 py-3"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(8px)',
                 WebkitBackdropFilter: 'blur(8px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
               }}>
          {SOCIAL_LINKS.map((link) => (
            <Button 
              key={link.name}
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-primary/10 transition-colors" 
              asChild
            >
              <Link 
                href={link.url} 
                target={link.name === 'Email' || link.name === 'Phone' ? '_self' : '_blank'}
                rel="noopener noreferrer" 
                aria-label={link.name}
              >
                {link.name === "GitHub" && <Github className="h-5 w-5" />}
                {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                {link.name === "Instagram" && <Instagram className="h-5 w-5" />}
                {link.name === "Email" && <Mail className="h-5 w-5" />}
                {link.name === "Phone" && <Phone className="h-5 w-5" />}
                {link.name === "WhatsApp" && <MessageCircle className="h-5 w-5" />}
              </Link>
            </Button>
          ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`transition-all duration-700 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs sm:text-sm drop-shadow-lg">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

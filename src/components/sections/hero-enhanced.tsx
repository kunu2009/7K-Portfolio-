"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";
import { portfolioSections } from "@/lib/sections-data";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 30 }); // Reduced for performance

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
      {/* Background Image - No Overlays */}
      <img
        src="/bg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Hero Content */}
      <div className="container relative flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 mb-6 sm:mb-8 border-4 border-primary shadow-2xl shadow-primary/20">
            <AvatarImage 
              src="/favicon.ico" 
              alt="7K Brand Logo" 
              fetchPriority="high"
              className="object-cover scale-150"
            />
            <AvatarFallback className="text-2xl sm:text-3xl font-bold">7K</AvatarFallback>
          </Avatar>
        </div>

        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent px-2">
            {hero.title}
          </h1>
          <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground/80 mb-3 sm:mb-4 px-4">
            {hero.subtitle}
          </p>
        </div>

        <div 
          className={`transition-all duration-700 max-w-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
            {hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
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

        {/* Social Links */}
        <div 
          className={`transition-all duration-700 flex flex-wrap gap-2 sm:gap-3 mb-16 sm:mb-12 justify-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
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
      
      {/* Scroll Indicator - Moved outside content div to prevent cutoff */}
      <div 
        className={`transition-all duration-700 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

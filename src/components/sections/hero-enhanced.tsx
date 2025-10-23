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
            filter: 'contrast(1.05) saturate(0.95) brightness(0.85)'
          }}
        />
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.5) 100%)'
             }}
        />
      </div>

      {/* Hero Content with Glassmorphism */}
      <div className="container relative flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Glass Container */}
        <div 
          className="relative rounded-3xl p-8 sm:p-12 md:p-16"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 mb-6 sm:mb-8 border-4 border-white/30 shadow-2xl shadow-black/40 ring-2 ring-white/20">
            <AvatarImage 
              src="/favicon.ico" 
              alt="7K Brand Logo" 
              fetchPriority="high"
              className="object-cover scale-150"
            />
            <AvatarFallback className="text-2xl sm:text-3xl font-bold bg-white/10">7K</AvatarFallback>
          </Avatar>
        </div>

        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 px-2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {hero.title}
          </h1>
          <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4 px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {hero.subtitle}
          </p>
        </div>

        <div 
          className={`transition-all duration-700 max-w-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed px-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            {hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`transition-all duration-700 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button asChild size="lg" className="shadow-lg shadow-black/30 hover:shadow-black/50 transition-all w-full sm:w-auto backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border border-white/30">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all w-full sm:w-auto backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div 
          className={`transition-all duration-700 flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          {SOCIAL_LINKS.map((link) => (
            <Button 
              key={link.name}
              variant="ghost" 
              size="icon" 
              className="rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all text-white border border-white/20" 
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
      
      {/* Scroll Indicator - Moved outside content div to prevent cutoff */}
      <div 
        className={`transition-all duration-700 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/20">
          <span className="text-xs sm:text-sm drop-shadow-lg">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

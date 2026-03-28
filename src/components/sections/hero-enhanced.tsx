"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { portfolioSections } from "@/lib/sections-data";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      {/* Background System - Responsive Approach */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background: Static aesthetic wallpaper, perfectly scaled for phones */}
        <div className="absolute inset-0 sm:hidden">
          <img
            src="/images/decorations/some_creations/Monochrome Phone Wallpaper 9_16.png"
            alt="Mobile Aesthetic Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.5) contrast(1.1)' // Darkened so text pops
            }}
          />
        </div>

        {/* Desktop Background: Standard dark background */}
        <div className="absolute inset-0 hidden sm:block">
          <img
            src="/bg.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.05) saturate(1.0) brightness(0.9)'
            }}
          />
        </div>

        {/* Global Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90 sm:from-transparent sm:to-transparent" />
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.25) 100%)'
             }}
        />
      </div>

      {/* Floating decorative elements - STRICTLY DESKTOP ONLY */}
      {/* Left side floaters */}
      <div className="absolute top-10 left-10 z-[5] opacity-[0.15] animate-pulse hidden lg:block">
        <Image src="/images/decorations/fdf49172c58ba7ab095d9cd52fe09893.jpg" alt="" width={150} height={150} className="drop-shadow-2xl rounded-lg object-cover blur-[2px] transition-opacity hover:opacity-100" />
      </div>
      <div className="absolute top-1/3 left-16 z-[5] opacity-[0.12] hidden 2xl:block animate-bounce" style={{ animationDuration: '7s' }}>
        <Image src="/images/decorations/7d599f8c17f5795a8ec334a04e2e61a6.jpg" alt="" width={120} height={180} className="drop-shadow-xl rounded-md object-cover blur-[3px]" />
      </div>
      <div className="absolute bottom-1/4 left-12 z-[5] opacity-[0.18] hidden xl:block">
        <Image src="/images/decorations/d117329dcfe1538dbff91926a43cefc1.jpg" alt="" width={180} height={180} className="drop-shadow-2xl animate-pulse rounded-lg object-cover blur-[2px]" />
      </div>

      {/* Right side floaters */}
      <div className="absolute top-1/4 right-16 z-[5] opacity-[0.15] hidden xl:block">
        <Image src="/images/decorations/b90d34e66701ad1004f5d65736be86d1.jpg" alt="" width={220} height={220} className="drop-shadow-2xl rounded-full object-cover blur-[3px]" />
      </div>
      <div className="absolute bottom-1/3 right-12 z-[5] opacity-[0.12] hidden 2xl:block">
        <Image src="/images/decorations/eb1b9e309828b128fcbfeca321b53057.jpg" alt="" width={130} height={130} className="drop-shadow-xl animate-pulse rounded-3xl object-cover blur-[2px]" />
      </div>
      <div className="absolute bottom-20 right-20 z-[5] opacity-[0.2] animate-bounce hidden lg:block" style={{ animationDuration: '6s' }}>
        <Image src="/images/decorations/a855a311201b7435a4ef20f8369dd73a.jpg" alt="" width={180} height={120} className="drop-shadow-2xl rounded-xl object-cover blur-[1.5px] transition-opacity hover:opacity-100" />
      </div>

      {/* Hero Content with HEAVY FROSTED GLASS for perfect legibility across all devices */}
      <div className="container relative flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        
        {/* Avatar with Individual Glass */}
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="inline-block rounded-full p-1.5 mb-6 sm:mb-8"
               style={{
                 background: 'rgba(0, 0, 0, 0.4)',
                 backdropFilter: 'blur(16px)',
                 WebkitBackdropFilter: 'blur(16px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
               }}>
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 border-4 border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]">
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

        {/* Title and Subtitle with Inline Blur */}
        <div 
          className={`transition-all duration-700 mb-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-3 sm:mb-4 max-w-5xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
              <span className="bg-gradient-to-br from-white via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {hero.title}
              </span>
            </span>
          </h1>
          <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-snug max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-lg"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                  }}>
              {hero.subtitle}
            </span>
          </p>
        </div>

        {/* Description with Inline Blur */}
        <div 
          className={`transition-all duration-700 max-w-3xl mb-6 sm:mb-8 px-4 sm:px-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="inline-block px-6 py-4 rounded-2xl w-full"
               style={{
                 background: 'rgba(0, 0, 0, 0.5)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
               }}>
            <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-md">
              {hero.description}
            </p>
          </div>
        </div>

        {/* Quick Action Chips (Carnegie: Let them talk - give them choices) */}
        <div 
          className={`transition-all duration-700 flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '350ms' }}
        >
          <Button asChild variant="secondary" size="sm" className="rounded-full text-xs sm:text-sm bg-background/80 backdrop-blur-md border border-white/10 hover:bg-background shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
            <Link href="/services">I need a web app</Link>
          </Button>
          <Button asChild variant="secondary" size="sm" className="rounded-full text-xs sm:text-sm bg-background/80 backdrop-blur-md border border-white/10 hover:bg-background shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
            <Link href="/portfolio">Show me your work</Link>
          </Button>
          <Button asChild variant="secondary" size="sm" className="rounded-full text-xs sm:text-sm bg-background/80 backdrop-blur-md border border-white/10 hover:bg-background shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
            <a href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'd%20like%20to%20discuss%20my%20project%20idea" target="_blank" rel="noopener noreferrer">
              Let's chat about my idea
            </a>
          </Button>
        </div>

        {/* CTA Buttons with Individual Glass */}
        <div 
          className={`transition-all duration-700 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto px-6 sm:px-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button asChild size="lg" className="shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] transition-shadow w-full sm:w-auto text-base">
            <Link href={hero.ctaLink}>{hero.ctaText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base bg-black/40 backdrop-blur-md border-white/20 hover:bg-black/60 text-white">
            <a href={hero.secondaryCtaLink} target="_blank" rel="noopener noreferrer">{hero.secondaryCtaText}</a>
          </Button>
        </div>

        {/* Social Links with Individual Glass Container */}
        <div 
          className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="inline-flex flex-wrap gap-2 sm:gap-3 justify-center rounded-full px-4 py-2"
               style={{
                 background: 'rgba(0, 0, 0, 0.5)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
               }}>
          {SOCIAL_LINKS.map((link) => (
            <Button 
              key={link.name}
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-primary/40 transition-colors text-white hover:text-primary-foreground h-10 w-10 sm:h-12 sm:w-12" 
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
    </section>
  );
};

export default HeroSection;

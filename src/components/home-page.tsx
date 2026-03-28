"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from "@/components/header-enhanced";
import HeroSection from "@/components/sections/hero-enhanced";
import Footer from "@/components/footer-enhanced";
import { MarqueeBannerStrip } from "@/components/ui/floating-decorations";

// Skeleton loaders for better UX
const SkeletonLoader = ({ height = 400 }: { height?: number }) => (
  <div className={`min-h-[${height}px] animate-pulse bg-gradient-to-br from-muted/20 to-muted/5`} />
);

// Lazy load all sections below the fold with optimized loading states
const AboutSection = dynamic(() => import('@/components/sections/about-enhanced'), {
  loading: () => <SkeletonLoader height={400} />
});
const ServicesMenuCard = dynamic(() => import('@/components/sections/services-menu-card'), {
  loading: () => <SkeletonLoader height={600} />
});
const AppStoreSection = dynamic(() => import('@/components/sections/app-store'), {
  loading: () => <SkeletonLoader height={400} />
});
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'), {
  loading: () => <SkeletonLoader height={300} />
});

// Image collections for marquee strips
const vibeImages = [
  "/images/decorations/some_creations/Aesthetic Minimalist Wallpaper.png",
  "/images/decorations/some_creations/Monochromatic Floating Castle Phone Wallpaper.png",
  "/images/decorations/some_creations/Monochrome Phone Wallpaper 9_16.png",
  "/images/decorations/some_creations/Monochromatic Floating Castle Phone Wallpaper (3).png",
  "/images/decorations/some_creations/Minimalist Phone Wallpaper.png",
  "/images/decorations/some_creations/Monochrome Phone Wallpaper 9_16 (1).png",
  "/images/decorations/some_creations/profile-pic.png",
  "/images/decorations/some_creations/Picsart_24-10-31_22-21-52-153.png",
  "/images/decorations/some_creations/Picsart_24-10-20_17-07-36-935.png",
  "/images/decorations/some_creations/Picsart_24-11-20_21-39-10-226.png",
];

const hustleImages = [
  "/images/decorations/struggles/Screenshot 2025-10-01 232136.png",
  "/images/decorations/struggles/Screenshot 2025-10-04 183331.png",
  "/images/decorations/struggles/Screenshot 2025-11-11 213033.png",
  "/images/decorations/struggles/Screenshot 2025-11-12 010535.png",
  "/images/decorations/struggles/Screenshot 2025-11-17 235153.png",
  "/images/decorations/struggles/Screenshot 2025-11-23 001818.png",
  "/images/decorations/struggles/Screenshot 2025-12-04 212510.png",
  "/images/decorations/struggles/Screenshot 2025-12-31 003844.png",
  "/images/decorations/struggles/Screenshot 2026-03-03 163748.png",
];

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        
        {/* Visual strip */}
        <MarqueeBannerStrip images={vibeImages} speed={40} opacity={0.35} />
        
        <AppStoreSection />
        <ServicesMenuCard />
        <TestimonialsSection limit={3} />

        {/* Conversion-focused CTA + internal links */}
        <section id="quick-links" className="container mx-auto px-4 py-12">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Want to go deeper?</h2>
            <p className="text-muted-foreground mb-6">
              Explore dedicated pages for apps, books, templates, services, and content.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {[
                { name: 'View all apps', href: '/apps' },
                { name: 'View services', href: '/services' },
                { name: 'Browse templates', href: '/templates' },
                { name: 'Open shop', href: '/shop' },
                { name: 'Read books', href: '/books' },
                { name: 'Read blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Book a call
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Get a custom quote
              </Link>
            </div>
          </div>
        </section>

        {/* Hustle/Struggles strip kept only once near footer */}
        <MarqueeBannerStrip images={hustleImages} speed={50} height="h-20 md:h-32" opacity={0.3} />
      </main>
      <Footer />
    </div>
  );
}

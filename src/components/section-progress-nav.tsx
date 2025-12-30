"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useOptimizedAnimation } from "@/hooks/use-performance";
import { useMotionPresets } from "@/lib/motion-presets";

type SectionLink = {
  id: string;
  label: string;
};

const SECTION_LINKS: SectionLink[] = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "app-store", label: "Apps" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "journey", label: "Journey" },
  { id: "blog", label: "Blog" },
  { id: "support", label: "Support" },
];

const activeVariants = {
  inactive: { opacity: 0, scale: 0.95 },
  active: { opacity: 1, scale: 1 },
};

export function SectionProgressNav() {
  const { reduce } = useMotionPresets();
  const { shouldReduceAnimations } = useOptimizedAnimation();
  const [activeId, setActiveId] = useState<string>("hero");
  const [availableSections, setAvailableSections] = useState<SectionLink[]>([]);

  useEffect(() => {
    const existing = SECTION_LINKS.filter(({ id }) => document.getElementById(id));
    setAvailableSections(existing);
  }, []);

  useEffect(() => {
    const sections = availableSections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [availableSections]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce || shouldReduceAnimations ? "auto" : "smooth", block: "start" });
  };

  const navItems = useMemo(() => availableSections, [availableSections]);

  if (navItems.length === 0) return null;

  return (
    <>
      {/* Desktop vertical rail */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-2 bg-background/70 backdrop-blur-md border border-border/60 rounded-2xl shadow-lg p-2">
          {navItems.map(({ id, label }) => {
            const isActive = id === activeId;
            return (
              <motion.button
                key={id}
                type="button"
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-muted/30 text-muted-foreground border-border hover:text-foreground"
                }`}
                onClick={() => handleScroll(id)}
                aria-label={`Jump to ${label}`}
                variants={activeVariants}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
              >
                {label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Mobile bottom pills */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-center gap-2 overflow-x-auto rounded-2xl bg-background/80 backdrop-blur-md border border-border/60 px-3 py-2 shadow-lg">
          {navItems.map(({ id, label }) => {
            const isActive = id === activeId;
            return (
              <button
                key={id}
                type="button"
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow"
                    : "bg-muted/40 text-muted-foreground border-border hover:text-foreground"
                }`}
                onClick={() => handleScroll(id)}
                aria-label={`Jump to ${label}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

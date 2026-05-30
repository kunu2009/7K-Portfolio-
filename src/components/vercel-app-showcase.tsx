"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Activity, RefreshCw } from "lucide-react";
import { appsData, type App } from "@/lib/apps-data";

interface VercelProject {
  id: string;
  name: string;
  framework: string;
  url: string | null;
  aliases: string[];
  description: string;
  updatedAt: number;
  status: string;
}

export default function VercelAppShowcase() {
  const [projects, setProjects] = useState<VercelProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchVercelProjects() {
      try {
        const res = await fetch("/api/vercel-projects");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (isMounted && data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);
          setLoading(false);
        } else {
          throw new Error("Invalid response");
        }
      } catch (err) {
        console.error("Error fetching Vercel projects:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }
    fetchVercelProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  // Format framework names for display
  const formatFramework = (fw: string) => {
    if (!fw) return "Web App";
    if (fw.toLowerCase() === "nextjs") return "Next.js";
    if (fw.toLowerCase() === "react") return "React";
    if (fw.toLowerCase() === "vue") return "Vue.js";
    if (fw.toLowerCase() === "svelte") return "Svelte";
    if (fw.toLowerCase() === "vite") return "Vite";
    if (fw.toLowerCase() === "nuxtjs") return "Nuxt.js";
    return fw.charAt(0).toUpperCase() + fw.slice(1);
  };

  // Helper to generate a reliable favicon/avatar URL or fallback SVG icon
  const getProjectIconUrl = (url: string | null, name: string) => {
    if (url) {
      try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
      } catch {
        // Fallback
      }
    }
    return `https://avatar.vercel.sh/${name}`;
  };

  // Pinned favorites for the first slide:
  // - 7K Launcher, Life, LawPrep, Music, MHCET, CommandCenter, Studio
  const carouselSlides = useMemo(() => {
    // 1. Get all available apps from Vercel + Fallbacks from appsData
    let allApps: VercelProject[] = [];
    if (projects.length > 0) {
      allApps = [...projects];
    } else {
      allApps = appsData.map((app) => ({
        id: app.id,
        name: app.name,
        framework: app.technologies[0] || "nextjs",
        url: app.url,
        aliases: [],
        description: app.description,
        updatedAt: Date.now(),
        status: "READY",
      }));
    }

    // 2. Identify the pinned apps (case insensitive matches)
    const findAndRemove = (queries: string[]) => {
      for (const q of queries) {
        const idx = allApps.findIndex(p => {
          const name = p.name.toLowerCase();
          return name.includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase());
        });
        if (idx !== -1) {
          const app = allApps[idx];
          allApps.splice(idx, 1);
          return app;
        }
      }
      return null;
    };

    const pinnedLauncher = findAndRemove(["launcher", "7klauncher"]) || {
      id: "7k-launcher",
      name: "7K Launcher",
      framework: "react",
      url: "/apps/launcher",
      aliases: [],
      description: "A minimal, productivity-focused Android launcher to reduce distractions.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedLife = findAndRemove(["7klife", "life", "relife"]) || {
      id: "7k-life",
      name: "7K Life",
      framework: "nextjs",
      url: "https://life.7kc.me",
      aliases: [],
      description: "Central life management system tracking habits, tasks, lists and daily progress.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedLawprep = findAndRemove(["7klawprep", "lawprep"]) || {
      id: "7k-lawprep",
      name: "7K LawPrep",
      framework: "nextjs",
      url: "https://7klawprep.me",
      aliases: [],
      description: "Comprehensive law entrance exam prep (CLAT/MHCET) tools and resources.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedMusic = findAndRemove(["7k-music", "music", "7kmusic"]) || {
      id: "7k-music",
      name: "7K Music",
      framework: "nextjs",
      url: "https://music.7kc.me",
      aliases: [],
      description: "Stream trending music videos with a clean, focused interface.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedMhcet = findAndRemove(["mhcet", "7kmhcet"]) || {
      id: "7k-mhcet",
      name: "7K MH-CET",
      framework: "nextjs",
      url: "https://mhcet.7kc.me",
      aliases: [],
      description: "Dedicated exam preparation platform for MH-CET entrance exams.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedCommand = findAndRemove(["commandcenter", "7kcommandcenter"]) || {
      id: "7k-command",
      name: "7K Command",
      framework: "nextjs",
      url: "https://command.7kc.me",
      aliases: [],
      description: "Central dashboard for managing your digital 7K infrastructure.",
      updatedAt: Date.now(),
      status: "READY"
    };

    const pinnedStudio = findAndRemove(["studio", "7kstudio"]) || {
      id: "7k-studio",
      name: "7K Studio",
      framework: "nextjs",
      url: "https://studio.7kc.me",
      aliases: [],
      description: "Creative workspace for content creation and management.",
      updatedAt: Date.now(),
      status: "READY"
    };

    // First slide contains the primary pinned apps
    const slide1 = [pinnedLauncher, pinnedLife, pinnedLawprep, pinnedMusic];
    const slide2 = [pinnedMhcet, pinnedCommand, pinnedStudio];

    // Distribute remaining apps in chunks of 4
    const slides: VercelProject[][] = [slide1];
    
    // Add slide2 if it has items, padding to 4 if necessary
    if (slide2.length > 0) {
      while (slide2.length < 4) {
        const nextApp = allApps.shift();
        if (nextApp) slide2.push(nextApp);
        else break;
      }
      slides.push(slide2);
    }
    
    for (let i = 0; i < allApps.length; i += 4) {
      const chunk = allApps.slice(i, i + 4);
      if (chunk.length > 0) {
        // Pad the chunk if it's less than 4 items to keep the 2x2 grid neat
        while (chunk.length < 4) {
          chunk.push({
            id: `placeholder-${chunk.length}`,
            name: "7K Microapp",
            framework: "nextjs",
            url: null,
            aliases: [],
            description: "Part of the ever-expanding 7K productivity and utility suite.",
            updatedAt: Date.now(),
            status: "READY"
          });
        }
        slides.push(chunk);
      }
    }

    return slides;
  }, [projects]);

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Projects list for the marquee/infinite scroll rows
  const marqueeProjects = useMemo(() => {
    if (projects.length > 0) {
      return projects;
    }
    // Fallback: Map all static apps
    return appsData.map((app) => ({
      id: app.id,
      name: app.name,
      framework: app.technologies[0] || "nextjs",
      url: app.url,
      aliases: [],
      description: app.description,
      updatedAt: Date.now(),
      status: "READY",
    }));
  }, [projects]);

  // Partition marquee items into two rows for dynamic look (left & right scrolling)
  const [firstRow, secondRow] = useMemo(() => {
    const half = Math.ceil(marqueeProjects.length / 2);
    return [
      marqueeProjects.slice(0, half),
      marqueeProjects.slice(half)
    ];
  }, [marqueeProjects]);

  return (
    <section id="appstore" className="container mt-10 md:mt-14">
      <div className="rounded-3xl border border-black/10 bg-[#EAE8E4] p-6 md:p-8 overflow-hidden relative">
        {/* Header section */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Live App Store</span>
            {loading && <RefreshCw className="h-3 w-3 animate-spin text-black/40" />}
            {!loading && !error && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Connected to Vercel
              </span>
            )}
          </div>
          <Link href="/apps" className="text-xs font-semibold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
            View all apps
          </Link>
        </div>

        <h2 className="mt-3 font-headline text-3xl md:text-4xl">Utility Suite & Deployments</h2>
        <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
          Real-time, live-tracked software deployments fetched straight from Vercel. Continuous delivery in action.
        </p>

        {/* 2x2 Showcase Grid Carousel */}
        <div className="mt-8 relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black/50">Featured Highlights</h3>
            {carouselSlides.length > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  className="rounded-full bg-white/60 p-1.5 text-black hover:bg-white border border-black/5 transition"
                  aria-label="Previous slide"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span className="text-[10px] font-bold font-mono text-black/60 bg-white/40 px-2 py-0.5 rounded-full">
                  {activeSlide + 1} / {carouselSlides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/60 p-1.5 text-black hover:bg-white border border-black/5 transition"
                  aria-label="Next slide"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
          
          {loading ? (
            // Skeleton Loading State for Grid
            <div className="grid gap-4 sm:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-2xl border border-black/5 bg-white/40 p-5 animate-pulse h-[130px] flex flex-col justify-between">
                  <div>
                    <div className="h-4 bg-black/10 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-black/5 rounded w-1/4 mb-4"></div>
                    <div className="h-3 bg-black/5 rounded w-2/3"></div>
                  </div>
                  <div className="h-3 bg-black/10 rounded w-1/6 self-end"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {carouselSlides.map((slide, slideIdx) => (
                  <div key={slideIdx} className="w-full flex-shrink-0 grid gap-4 sm:grid-cols-2">
                    {slide.map((project) => (
                      <div
                        key={project.id}
                        className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white/80 p-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-black/5 bg-[#F6F2EC] p-1.5 flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={getProjectIconUrl(project.url, project.name)}
                                  alt=""
                                  className="h-full w-full object-contain rounded-md"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none';
                                  }}
                                />
                                <Globe className="absolute h-4 w-4 text-black/40" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-black group-hover:text-black/80">
                                  {project.name.replace(/^(7k-|7k)/i, "7K ").replace(/-/g, " ")}
                                </h4>
                                <p className="text-[10px] font-medium uppercase tracking-wider text-black/40 mt-0.5 flex items-center gap-1.5">
                                  <Layers className="h-3 w-3 text-black/30" />
                                  {formatFramework(project.framework)}
                                </p>
                              </div>
                            </div>

                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#F6F2EC] p-2 text-black/50 hover:bg-black hover:text-white transition-all duration-300"
                                title="Open Live Website"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            )}
                          </div>

                          <p className="mt-3 text-xs leading-relaxed text-black/60 line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5 text-black/40 font-medium">
                            <Activity className="h-3 w-3 text-emerald-500" />
                            Status: <span className="text-black/60 capitalize font-semibold">{project.status.toLowerCase()}</span>
                          </div>
                          {project.url && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-black/60 hover:text-black font-semibold underline flex items-center gap-0.5"
                            >
                              Visit Link <ArrowUpRight className="h-2.5 w-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              {carouselSlides.length > 1 && (
                <div className="flex justify-center gap-1.5 mt-5">
                  {carouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${activeSlide === idx ? "w-6 bg-black" : "w-1.5 bg-black/25"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Infinite Scroll Conveyor Marquee */}
        <div className="mt-10 pt-6 border-t border-black/5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-5">Continuous Delivery Stream</h3>
          
          <div className="relative flex flex-col gap-4 overflow-hidden py-2 marquee-container">
            {/* Row 1: Left to Right Marquee */}
            <div className="flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused] transition-all duration-300">
              {/* Loop twice for seamless scrolling */}
              {[...firstRow, ...firstRow].map((project, idx) => (
                <div
                  key={`${project.id}-row1-${idx}`}
                  className="flex items-center gap-3 w-[260px] rounded-xl border border-black/5 bg-white/60 p-3 hover:bg-white transition-all duration-300 hover:shadow-md cursor-default group"
                >
                  <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-black/5 bg-[#F6F2EC] p-1 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getProjectIconUrl(project.url, project.name)}
                      alt=""
                      className="h-full w-full object-contain rounded"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <Globe className="absolute h-3 w-3 text-black/30" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-bold text-black truncate group-hover:text-black/80">
                      {project.name.replace(/^(7k-|7k)/i, "7K ").replace(/-/g, " ")}
                    </h5>
                    <p className="text-[9px] text-black/40 truncate">
                      {project.url ? new URL(project.url).hostname : formatFramework(project.framework)}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 hover:text-black p-1 transition-colors"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Right to Left Marquee */}
            <div className="flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused] transition-all duration-300">
              {/* Loop twice for seamless scrolling */}
              {[...secondRow, ...secondRow].map((project, idx) => (
                <div
                  key={`${project.id}-row2-${idx}`}
                  className="flex items-center gap-3 w-[260px] rounded-xl border border-black/5 bg-white/60 p-3 hover:bg-white transition-all duration-300 hover:shadow-md cursor-default group"
                >
                  <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-black/5 bg-[#F6F2EC] p-1 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getProjectIconUrl(project.url, project.name)}
                      alt=""
                      className="h-full w-full object-contain rounded"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <Globe className="absolute h-3 w-3 text-black/30" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-bold text-black truncate group-hover:text-black/80">
                      {project.name.replace(/^(7k-|7k)/i, "7K ").replace(/-/g, " ")}
                    </h5>
                    <p className="text-[9px] text-black/40 truncate">
                      {project.url ? new URL(project.url).hostname : formatFramework(project.framework)}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 hover:text-black p-1 transition-colors"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Custom CSS Keyframes */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(calc(-50% - 0.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 60px;
          background: linear-gradient(to right, #EAE8E4 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }
        .marquee-container::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 60px;
          background: linear-gradient(to left, #EAE8E4 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }
      `}</style>
    </section>
  );
}

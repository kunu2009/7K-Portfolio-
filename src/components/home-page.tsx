"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Phone, RefreshCcw } from "lucide-react";
import Header from "@/components/header-enhanced";
import Footer from "@/components/footer-enhanced";
import { SupportSection as SupportSectionBlock } from "@/components/sections/support-section";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { appsData, type App } from "@/lib/apps-data";
import { bookData } from "@/lib/book-content";
import { portfolioSections } from "@/lib/sections-data";

const truncateText = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
};

const services = portfolioSections.services.services;

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Email: Mail,
  Phone: Phone,
  WhatsApp: MessageCircle,
} as const;

const templates = [
  {
    title: "Templates Library",
    description: "All templates in one clean catalog.",
    href: "/templates",
  },
  {
    title: "Resume Builder",
    description: "Generate a structured resume fast.",
    href: "/resume-builder",
  },
  {
    title: "Portfolio Card",
    description: "A single-page intro card.",
    href: "/portfolio-card",
  },
];

const resolveBookCover = (coverPath: string) => {
  const fileName = coverPath.split("/").pop();
  if (!fileName) return coverPath;
  return `/portfolioredesginasssests/books/${fileName}`;
};

const bookCatalog = Object.entries(bookData).map(([id, book]) => ({
  id,
  ...book,
}));

const normalizeText = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const resolveAppCover = (app: App) => {
  if (app.icon?.startsWith("/")) return app.icon;
  const screenshot = app.screenshots?.[0];
  if (screenshot) return screenshot;

  const id = normalizeText(app.id);
  const name = normalizeText(app.name);

  if (id.includes("lawprep") || name.includes("lawprep")) return "/images/appstore/7klawprep.me-1764683965141.png";
  if (id.includes("life") || name.includes("life")) return "/images/appstore/relife.7kc.me-1764683887275.png";
  if (id.includes("upsc") || name.includes("upsc")) return "/images/appstore/upsc.7kc.me-1764683870129.png";
  if (id.includes("music") || name.includes("music")) return "/images/appstore/music.7kc.me-1761146782033.png";

  return "/portfolioredesginasssests/7kbanner.png";
};

const sortFeaturedApps = (inputApps: App[]) => {
  const priorityIds = ["launcher", "lawprep", "life", "music", "upsc"];
  const prioritized = priorityIds
    .map((id) => inputApps.find((app) => normalizeText(app.id).includes(id) || normalizeText(app.name).includes(id)))
    .filter((app): app is App => Boolean(app));
  const rest = inputApps.filter((app) => !prioritized.some((picked) => picked.id === app.id));
  return [...prioritized, ...rest];
};

const splitForMarquee = <T,>(items: T[]) => {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)] as const;
};

const otherSections = [
  {
    title: "Portfolio",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Creations", href: "/creations" },
      { label: "Journey", href: "/journey" },
      { label: "Story", href: "/story" },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Books", href: "/books" },
      { label: "Apps", href: "/apps" },
      { label: "Store", href: "/store" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services", href: "/services" },
      { label: "Packages", href: "/services/packages" },
      { label: "Calculator", href: "/services/calculator" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Terminal", href: "/terminal" },
      { label: "Settings", href: "/settings" },
      { label: "Menu", href: "/menu" },
      { label: "Mobile", href: "/mobile" },
    ],
  },
  {
    title: "Extra",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Essentials", href: "/essentials" },
      { label: "Stan Demo", href: "/stan-demo" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Donations", href: "#support" },
    ],
  },
];

export default function HomePage() {
  const [apps, setApps] = useState<App[]>(appsData);
  const [appsLoading, setAppsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadApps = async () => {
      try {
        const response = await fetch("/api/apps");
        if (!response.ok) return;
        const data = await response.json();
        if (isMounted && Array.isArray(data?.apps)) {
          setApps(data.apps);
        }
      } catch {
        // Keep local fallback when API is unavailable.
      } finally {
        if (isMounted) {
          setAppsLoading(false);
        }
      }
    };

    loadApps();
    return () => {
      isMounted = false;
    };
  }, []);

  const appMarqueeApps = useMemo(() => sortFeaturedApps(apps), [apps]);
  const [appFirstRow, appSecondRow] = useMemo(() => splitForMarquee(appMarqueeApps), [appMarqueeApps]);
  const [bookFirstRow, bookSecondRow] = useMemo(() => splitForMarquee(bookCatalog), []);

  return (
    <div className="flex min-h-dvh flex-col bg-[#FDFCFB] text-[#121212]">
      <Header />
      <main className="flex-1">
        <section id="hero" className="container pt-10 md:pt-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#F6F2EC]">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "url(/portfolioredesginasssests/bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/60">
                  Portfolio Home
                </span>
                <h1 className="font-headline text-4xl leading-[0.95] tracking-tight md:text-6xl">
                  Hi, I am
                  <br />
                  <span className="italic">Kunal Chheda</span>
                </h1>
                <p className="text-sm text-black/70 md:text-base">{PERSONAL_INFO.tagline}</p>
                <p className="max-w-lg text-sm leading-relaxed text-black/70 md:text-base">
                  {PERSONAL_INFO.bio}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {SOCIAL_LINKS.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      asChild
                      className="h-9 rounded-full border-black/10 bg-white/80 px-3 text-xs font-semibold text-black/70 hover:bg-white hover:text-black"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        {(() => {
                          const Icon = socialIconMap[link.name as keyof typeof socialIconMap];
                          return Icon ? <Icon className="mr-2 h-4 w-4" /> : null;
                        })()}
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full border border-black/10 bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-black/90"
                  >
                    <Link href="/portfolio">View portfolio</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-black/20 px-5 py-2 text-xs font-bold uppercase tracking-widest"
                  >
                    <Link href="/services">Work with me</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
                  <span className="rounded-full border border-black/10 bg-white px-3 py-2">7K apps</span>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-2">books and templates</span>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-2">clean systems</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                  <span>Scroll to explore</span>
                  <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white">
                  <Image
                    src="/portfolioredesginasssests/7kbanner.png"
                    alt="7K banner"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <Image
                      src="/portfolioredesginasssests/1765705266715.jpg"
                      alt="7K artwork"
                      fill
                      sizes="(max-width: 768px) 45vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <Image
                      src="/portfolioredesginasssests/photo_2026-05-29_00-48-58.jpg"
                      alt="7K splash artwork"
                      fill
                      sizes="(max-width: 768px) 45vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appstore" className="container mt-10 md:mt-14">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#EAE8E4] p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">App Store</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50">
                  {appsLoading ? <RefreshCcw className="h-3 w-3 animate-spin" /> : null}
                  Live data
                </span>
              </div>
              <Link href="/apps" className="text-xs font-semibold uppercase tracking-widest text-black/60 hover:text-black">
                Open apps
              </Link>
            </div>
            <h2 className="mt-3 font-headline text-3xl md:text-4xl">My 7K ecosystem apps</h2>
            <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
              Check out the full store here to browse the real app catalog, with the featured products shown first.
            </p>

            <div className="mt-7 space-y-4">
              {[appFirstRow, appSecondRow].map((row, rowIndex) => (
                <div key={rowIndex} className="app-marquee relative overflow-hidden rounded-2xl border border-black/5 bg-white/55 py-3">
                  <div className={`flex w-max gap-3 px-3 ${rowIndex === 1 ? "app-marquee-reverse" : "app-marquee-forward"}`}>
                    {[...row, ...row].map((app, index) => (
                      <Link
                        key={`${app.id}-${rowIndex}-${index}`}
                        href={`/apps/${app.id}`}
                        className="group flex w-[270px] shrink-0 gap-3 rounded-2xl border border-black/10 bg-[#FDFCFB] p-3 transition-transform hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white">
                          <Image
                            src={resolveAppCover(app)}
                            alt={app.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-black/40">
                                {app.category}
                              </span>
                              <h3 className="mt-1 truncate text-sm font-semibold text-black">{app.name}</h3>
                            </div>
                            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/60" />
                          </div>
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-black/60">
                            {truncateText(app.description, 18)}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {(app.technologies || []).slice(0, 2).map((tech) => (
                              <span key={tech} className="rounded-full border border-black/10 bg-white px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <style jsx global>{`
              @keyframes app-marquee-left {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }

              @keyframes app-marquee-right {
                from {
                  transform: translateX(-50%);
                }
                to {
                  transform: translateX(0);
                }
              }

              .app-marquee-forward {
                animation: app-marquee-left 28s linear infinite;
              }

              .app-marquee-reverse {
                animation: app-marquee-right 28s linear infinite;
              }

              .app-marquee:hover .app-marquee-forward,
              .app-marquee:hover .app-marquee-reverse,
              .books-marquee:hover .books-marquee-forward,
              .books-marquee:hover .books-marquee-reverse {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </section>

        <section id="services" className="container mt-10 md:mt-14">
          <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Services</span>
              <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-black/60 hover:text-black">
                View services
              </Link>
            </div>
            <h2 className="mt-3 font-headline text-3xl md:text-4xl">Services</h2>
            <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
              Clear, modular services for web, app, UX, and performance work.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group rounded-2xl border border-black/10 bg-[#FDFCFB] px-4 py-4 transition-all hover:bg-white hover:shadow-md block"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-black/90 group-hover:text-black">{service.title}</div>
                    <ArrowUpRight className="h-4 w-4 text-black/30 group-hover:text-black/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-1.5 text-xs text-black/60 leading-relaxed">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="books" className="container mt-10 md:mt-14">
          <div className="books-marquee relative overflow-hidden rounded-3xl border border-black/10 bg-[#1A1A1A] p-6 text-white md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Bookstore</span>
              <Link href="/books" className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white">
                Read books
              </Link>
            </div>
            <h2 className="mt-3 font-headline text-3xl md:text-4xl">Books</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
              A looped showcase of the books I’ve made, with covers displayed continuously so visitors can browse them easily.
            </p>
            <div className="mt-8 space-y-4">
              {[bookFirstRow, bookSecondRow].map((row, rowIndex) => (
                <div key={rowIndex} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-3">
                  <div className={`flex w-max gap-4 px-3 ${rowIndex === 1 ? "books-marquee-reverse" : "books-marquee-forward"}`}>
                    {[...row, ...row].map((book, index) => (
                      <Link
                        key={`${book.id}-${rowIndex}-${index}`}
                        href={`/books/${book.id}`}
                        className="group flex w-[180px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/5 bg-black/40 shadow-inner">
                          <Image
                            src={resolveBookCover(book.coverImage)}
                            alt={book.title}
                            fill
                            sizes="180px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-3 flex flex-1 flex-col justify-between">
                          <div>
                            <span className="block text-[9px] font-bold uppercase tracking-widest text-white/40">Book</span>
                            <h3 className="mt-1 line-clamp-1 text-xs font-bold text-white group-hover:text-white/90">
                              {book.title}
                            </h3>
                          </div>
                          <span className="mt-2 flex items-center gap-0.5 text-[10px] font-semibold text-white/60 group-hover:text-white">
                            Open book <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <style jsx global>{`
              @keyframes books-marquee-left {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }

              @keyframes books-marquee-right {
                from {
                  transform: translateX(-50%);
                }
                to {
                  transform: translateX(0);
                }
              }

              .books-marquee-forward {
                animation: books-marquee-left 34s linear infinite;
              }

              .books-marquee-reverse {
                animation: books-marquee-right 34s linear infinite;
              }
            `}</style>
          </div>
        </section>

        <section id="templates" className="container mt-10 md:mt-14">
          <div className="rounded-3xl border border-black/10 bg-[#F6F2EC] p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Templates</span>
              <Link href="/templates" className="text-xs font-semibold uppercase tracking-widest text-black/60 hover:text-black">
                Open templates
              </Link>
            </div>
            <h2 className="mt-3 font-headline text-3xl md:text-4xl">Templates</h2>
            <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
              Small assets and layouts that keep the portfolio consistent.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {templates.map((template) => (
                <Link
                  key={template.title}
                  href={template.href}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm transition-colors hover:bg-white/90"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-black">{template.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-black/40" />
                  </div>
                  <p className="mt-2 text-sm text-black/60">{template.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="others" className="container mt-10 pb-12 md:mt-14">
          <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">More from the site</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-black/40">All sections</span>
            </div>
            <h2 className="mt-3 font-headline text-3xl md:text-4xl">Explore the rest</h2>
            <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
              Every remaining section and tool, grouped so visitors can move through the rest of the site easily. The support section below includes the donation flow and QR details.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherSections.map((group) => (
                <div key={group.title} className="rounded-2xl border border-black/10 bg-[#FDFCFB] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-black/60">{group.title}</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/70 hover:text-black"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 text-black/30" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SupportSectionBlock />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Smartphone, 
  Gamepad2, 
  ImageIcon, 
  BookOpen,
  ExternalLink,
  Code2,
  Sparkles,
  Loader2,
  Layers,
  Boxes,
  Globe,
  Camera,
  Zap,
  Music,
  Layout,
  Film,
  Newspaper,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const portfolioVariations = [
  {
    id: "terminal",
    title: "Terminal Portfolio",
    description: "Retro command-line interface experience. Type commands to explore my work.",
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
    tags: ["CLI", "Retro", "Interactive"],
    url: "/terminal",
    image: "🖥️",
    features: ["Command-line navigation", "ASCII art", "Retro terminal feel"],
    status: "live"
  },
  {
    id: "mobile-shell",
    title: "Mobile Shell",
    description: "iOS-inspired mobile interface with swipeable screens and app-like navigation.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    tags: ["Mobile", "iOS-style", "Swipe"],
    url: "/mobile",
    image: "📱",
    features: ["Swipe gestures", "App shell design", "Mobile-first"],
    status: "live"
  },
  {
    id: "arcade",
    title: "Arcade Mode",
    description: "Gamified portfolio experience with pixel art and interactive elements.",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-500",
    tags: ["Gaming", "Pixel Art", "Fun"],
    url: "/arcade",
    image: "🎮",
    features: ["Pixel art graphics", "Game-like UI", "Easter eggs"],
    status: "live"
  },
  {
    id: "slider",
    title: "Slider Portfolio",
    description: "Elegant full-screen slides with smooth transitions and modern design.",
    icon: ImageIcon,
    color: "from-orange-500 to-red-500",
    tags: ["Modern", "Slides", "Elegant"],
    url: "/slider",
    image: "🎨",
    features: ["Full-screen slides", "Smooth animations", "Presentation style"],
    status: "live"
  },
  {
    id: "story",
    title: "Story Mode",
    description: "Narrative-driven journey through my experiences and projects.",
    icon: BookOpen,
    color: "from-indigo-500 to-violet-500",
    tags: ["Storytelling", "Narrative", "Journey"],
    url: "/story",
    image: "📖",
    features: ["Story-based navigation", "Timeline view", "Rich narratives"],
    status: "live"
  },
  {
    id: "galaksi",
    title: "Galaksi Explorer",
    description: "Immersive portfolio experience with cosmic aesthetics. Explore my projects, skills, and journey in a beautifully animated interface.",
    icon: Rocket,
    color: "from-purple-600 via-violet-500 to-indigo-500",
    tags: ["Creative", "Animated", "Unique"],
    url: "/galaksi",
    image: "🚀",
    features: ["Cosmic animations", "Project showcase", "Interactive UI"],
    status: "live"
  },
  {
    id: "designer-card",
    title: "Designer Card Portfolio",
    description: "Modern card-based portfolio with elegant design, showcasing founder profile with professional presentation.",
    icon: Camera,
    color: "from-teal-600 via-emerald-500 to-green-500",
    tags: ["Designer", "Modern", "Professional"],
    url: "/portfolio-card",
    image: "/images/porfolio desgin image.png",
    features: ["Professional card design", "Founder profile", "Elegant layout"],
    status: "live"
  },
  {
    id: "3d-experience",
    title: "3D Experience",
    description: "Immersive 3D world with interactive objects and spatial navigation.",
    icon: Boxes,
    color: "from-cyan-500 to-blue-500",
    tags: ["3D", "WebGL", "Immersive"],
    url: "#",
    image: "🎲",
    features: ["3D navigation", "Interactive objects", "Spatial design"],
    status: "coming-soon"
  },
  {
    id: "parallax-scroll",
    title: "Parallax Scroll",
    description: "Depth-driven scrolling experience with layered animations and visual storytelling.",
    icon: Layers,
    color: "from-teal-500 to-green-500",
    tags: ["Parallax", "Scroll", "Depth"],
    url: "#",
    image: "🌊",
    features: ["Multi-layer depth", "Scroll animations", "Visual storytelling"],
    status: "coming-soon"
  },
  {
    id: "globe-explorer",
    title: "Globe Explorer",
    description: "Interactive 3D globe showcasing projects and locations around the world.",
    icon: Globe,
    color: "from-sky-500 to-indigo-500",
    tags: ["3D Globe", "Interactive", "Geographic"],
    url: "#",
    image: "🌍",
    features: ["3D globe rotation", "Location markers", "Project mapping"],
    status: "coming-soon"
  },
  {
    id: "bento-grid",
    title: "Bento Grid",
    description: "Modern masonry layout with dynamic cards and smooth hover interactions.",
    icon: Layout,
    color: "from-pink-500 to-rose-500",
    tags: ["Grid", "Modern", "Cards"],
    url: "#",
    image: "🍱",
    features: ["Masonry layout", "Dynamic cards", "Smooth interactions"],
    status: "coming-soon"
  },
  {
    id: "cinematic",
    title: "Cinematic View",
    description: "Movie-like experience with video backgrounds and dramatic transitions.",
    icon: Film,
    color: "from-amber-500 to-orange-500",
    tags: ["Cinematic", "Video", "Dramatic"],
    url: "#",
    image: "🎬",
    features: ["Video backgrounds", "Dramatic transitions", "Movie-style"],
    status: "coming-soon"
  },
  {
    id: "newspaper",
    title: "Digital Magazine",
    description: "Editorial-style layout inspired by modern digital publications and magazines.",
    icon: Newspaper,
    color: "from-slate-500 to-gray-500",
    tags: ["Editorial", "Magazine", "Typography"],
    url: "#",
    image: "📰",
    features: ["Magazine layout", "Rich typography", "Article-style"],
    status: "coming-soon"
  },
  {
    id: "minimal-zen",
    title: "Minimal Zen",
    description: "Ultra-minimalist design focusing on whitespace, typography, and subtle animations.",
    icon: Zap,
    color: "from-neutral-400 to-stone-500",
    tags: ["Minimal", "Typography", "Clean"],
    url: "#",
    image: "⚡",
    features: ["Whitespace focus", "Clean typography", "Subtle animations"],
    status: "coming-soon"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PortfolioShowcaseSection = () => {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleNavigate = (url: string, id: string) => {
    setLoadingId(id);
    // Pre-fetch the route for faster navigation
    router.prefetch(url);
    // Navigate after a brief moment to show loading state
    setTimeout(() => {
      router.push(url);
    }, 300);
  };

  return (
    <section id="showcase" className="container py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <Badge variant="outline" className="text-sm border-primary/20">
              Multiple Experiences
            </Badge>
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </div>
          
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Portfolio Showcase
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience my portfolio in different creative formats — from retro terminal vibes to modern mobile apps. 
            Each variation offers a unique way to explore my work!
          </p>
        </motion.div>

        {/* Portfolio Grid - Featured 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioVariations
            .filter(p => ['mobile-shell', 'terminal', 'galaksi'].includes(p.id))
            .map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border-primary/10 hover:border-primary/30 overflow-hidden">
                {/* Card Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${portfolio.color}`} />
                
                <CardHeader className="relative">
                  {/* Icon with gradient background */}
                  <div className="mb-4 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${portfolio.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>
                      {portfolio.image}
                    </div>
                  </div>

                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <portfolio.icon className="h-5 w-5 text-primary" />
                    {portfolio.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {portfolio.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {portfolio.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {portfolio.status === "coming-soon" && (
                      <Badge 
                        variant="outline"
                        className="text-xs border-amber-500/50 text-amber-500"
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {portfolio.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Code2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  {portfolio.status === "live" ? (
                    <Button 
                      onClick={() => handleNavigate(portfolio.url, portfolio.id)}
                      disabled={loadingId === portfolio.id}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all disabled:opacity-50"
                    >
                      {loadingId === portfolio.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        <>
                          Explore This Version
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full rounded-full bg-gradient-to-r from-amber-500/50 to-orange-500/50 cursor-not-allowed"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* See More Portfolios Button */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Link href="/portfolio">
            <Button 
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Layers className="mr-2 h-5 w-5" />
              See More Portfolios
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Explore all {portfolioVariations.length} unique portfolio experiences
          </p>
        </motion.div>

        {/* Info Box */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 md:mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Why Multiple Portfolios?</h3>
                  <p className="text-muted-foreground">
                    Each version showcases different skills — from terminal command-line interfaces to modern 
                    mobile app designs. It demonstrates my versatility in creating unique user experiences. 
                    Feel free to explore all variations and see which one resonates with you!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Can't decide? Try all the live versions! Each one is a unique experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioVariations.filter(p => p.status === "live").map((portfolio) => (
              <Button
                key={portfolio.id}
                variant="outline"
                size="sm"
                onClick={() => handleNavigate(portfolio.url, portfolio.id)}
                disabled={loadingId === portfolio.id}
                className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10 disabled:opacity-50"
              >
                {loadingId === portfolio.id ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <portfolio.icon className="mr-2 h-4 w-4" />
                )}
                {portfolio.title.split(' ')[0]}
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioShowcaseSection;

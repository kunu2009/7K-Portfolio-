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
  Rocket,
  ArrowLeft,
  Filter
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

export default function PortfolioPage() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | "live" | "coming-soon">("all");

  const handleNavigate = (url: string, id: string) => {
    if (url === "#") return;
    setLoadingId(id);
    router.prefetch(url);
    setTimeout(() => {
      router.push(url);
    }, 300);
  };

  const filteredPortfolios = portfolioVariations.filter(p => 
    filterStatus === "all" ? true : p.status === filterStatus
  );

  const liveCount = portfolioVariations.filter(p => p.status === "live").length;
  const comingSoonCount = portfolioVariations.filter(p => p.status === "coming-soon").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        
        <div className="container relative z-10">
          {/* Back Button */}
          <Link href="/#showcase">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm border-primary/20">
                {portfolioVariations.length} Unique Experiences
              </Badge>
              <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                All Portfolio Variations
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Explore all my portfolio experiences — from retro terminals to modern mobile apps, 
              each showcasing different skills and design approaches. Find the style that resonates with you!
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-4 px-6 pb-4">
                  <div className="text-3xl font-bold text-primary">{liveCount}</div>
                  <div className="text-sm text-muted-foreground">Live Now</div>
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-4 px-6 pb-4">
                  <div className="text-3xl font-bold text-accent">{comingSoonCount}</div>
                  <div className="text-sm text-muted-foreground">Coming Soon</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-4 px-6 pb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {portfolioVariations.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Variations</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3"
            >
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => setFilterStatus("all")}
                className="rounded-full"
              >
                <Filter className="mr-2 h-4 w-4" />
                All ({portfolioVariations.length})
              </Button>
              <Button
                variant={filterStatus === "live" ? "default" : "outline"}
                onClick={() => setFilterStatus("live")}
                className="rounded-full"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Live ({liveCount})
              </Button>
              <Button
                variant={filterStatus === "coming-soon" ? "default" : "outline"}
                onClick={() => setFilterStatus("coming-soon")}
                className="rounded-full"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Coming Soon ({comingSoonCount})
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="container py-12 md:py-16 lg:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolios.map((portfolio, index) => (
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

          {/* Empty State */}
          {filteredPortfolios.length === 0 && (
            <motion.div variants={fadeInUp} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No portfolios found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filter to see more options
              </p>
              <Button onClick={() => setFilterStatus("all")} variant="outline">
                Show All Portfolios
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <div className="text-center max-w-2xl mx-auto">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Can't Decide Which One to Try?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Each portfolio variation demonstrates different technical skills and design philosophies. 
                  The Terminal shows CLI mastery, Mobile Shell demonstrates app design, and Galaksi 
                  showcases creative animations. Try them all to experience the full range!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {portfolioVariations.filter(p => p.status === "live").slice(0, 3).map((portfolio) => (
                    <Button
                      key={portfolio.id}
                      variant="outline"
                      onClick={() => handleNavigate(portfolio.url, portfolio.id)}
                      disabled={loadingId === portfolio.id}
                      className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                    >
                      {loadingId === portfolio.id ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <portfolio.icon className="mr-2 h-4 w-4" />
                      )}
                      Try {portfolio.title}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

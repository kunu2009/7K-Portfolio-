"use client";

import { useState } from "react";
import { appsData, appCategories, getAllCategories } from "@/lib/apps-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Star, 
  ExternalLink,
  Filter,
  Sparkles,
  Settings,
  ArrowLeft,
  Activity,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  Code2,
  DollarSign,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Heart,
  History,
  Image as ImageIcon,
  Instagram,
  Landmark,
  Languages,
  Lightbulb,
  Music,
  PenTool,
  PieChart,
  Pin,
  Presentation,
  Scale,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Wand2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon mapping for different apps - each with distinct, relevant icon
const getAppIcon = (appId: string) => {
  const iconMap: { [key: string]: any } = {
    'life': Target,                    // 7K Life - Goals/productivity
    '7kmoney': Wallet,                 // 7K Money - Finance tracking
    'pol': Landmark,                   // Political Science - Government
    'eco': TrendingUp,                 // Economics - Growth/trends
    'his': History,                    // History - Historical
    'kanban': Briefcase,               // Kanban - Project management
    'pins': Pin,                       // Pins - Bookmarks
    'prompt': Wand2,                   // Prompt Library - AI/Magic
    'tools': Code2,                    // Dev Tools - Development
    'english': BookOpen,               // English - Learning
    'eng': Presentation,               // English Pro - Advanced learning
    'polyglot': Languages,             // Polyglot - Multiple languages
    'money': DollarSign,               // Money Manager - Finance
    'fitness': Dumbbell,               // Fitness Pro - Exercise
    'fit': Heart,                      // 7K Fit - Health
    'game': Gamepad2,                  // Games - Gaming
    'student': Users,                  // Student Game Hub - Groups
    'group': Users,                    // Group Game - Party games
    'editor': ImageIcon,               // Photo Editor - Images
    'insta': Instagram,                // Insta Hub - Social
    'relife': Activity,                // ReLife - Life management
    'upsc': Scale,                     // UPSC - Law/exam prep
    'music': Music,                    // Music - Streaming
    'learn': GraduationCap,            // Learning platform
    'creative': Camera,                // Creative tools
    'write': PenTool,                  // Writing tools
    'analytics': PieChart,             // Analytics
    'calendar': Calendar,              // Calendar
    'ai': Lightbulb,                   // AI tools
  };
  return iconMap[appId] || Sparkles;
};

export default function AppsIndexClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const totalAppsCount = appsData.length;

  // Filter apps based on search and category
  const filteredApps = appsData.filter((app) => {
    const matchesSearch =
      searchQuery === "" ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      !selectedCategory || app.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = getAllCategories();

  const categoryIcons: Record<string, string> = {
    productivity: "🚀",
    learning: "📚",
    finance: "💰",
    health: "💪",
    entertainment: "🎮",
    creative: "🎨",
    social: "💬",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-24">
          {/* Back to Portfolio Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{totalAppsCount} Powerful Apps</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              7K App Ecosystem
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover a suite of powerful applications designed to enhance your productivity, 
              learning, health, and creativity. All built with modern technologies and 
              user-centric design.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search apps... (e.g., 'kanban', 'fitness', 'language')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Apps ({appsData.length})
            </Button>
            {categories.map((category) => {
              const count = appsData.filter((app) => app.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full capitalize gap-2"
                >
                  <span>{categoryIcons[category]}</span>
                  {appCategories[category as keyof typeof appCategories]} ({count})
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Results Count */}
        {(searchQuery || selectedCategory) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-muted-foreground"
          >
            Showing {filteredApps.length} {filteredApps.length === 1 ? "app" : "apps"}
            {searchQuery && ` matching "${searchQuery}"`}
            {selectedCategory && ` in ${appCategories[selectedCategory as keyof typeof appCategories]}`}
          </motion.div>
        )}

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredApps.map((app, index) => {
            const IconComponent = getAppIcon(app.id);
            return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/apps/${app.id}`}>
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  {/* App Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* App Name */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {app.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {app.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {/* Rating & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-semibold">{app.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({app.reviews})
                      </span>
                    </div>
                    <Badge
                      variant={app.status === "live" ? "default" : "secondary"}
                      className="text-xs capitalize"
                    >
                      {app.status.replace("-", " ")}
                    </Badge>
                  </div>

                  {/* Category & Pricing */}
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {app.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs capitalize">
                      {app.pricing}
                    </Badge>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                    <span className="font-medium text-primary group-hover:underline">
                      View Details
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              </Link>
            </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredApps.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No apps found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters
            </p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}>
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm constantly building new apps and improving existing ones. 
              Have a suggestion or want to collaborate?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="mailto:7kmindbeatss@gmail.com">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/kunu2009" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            {/* Settings Link */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <Link href="/settings">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors opacity-50 hover:opacity-100">
                  <Settings className="h-4 w-4" />
                  <span>Manage Apps</span>
                </button>
              </Link>
            </div>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}

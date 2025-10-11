"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ExternalLink, 
  Search, 
  Sparkles,
  Grid3x3,
  Filter
} from "lucide-react";
import { APP_STORE, APP_CATEGORIES } from "@/lib/constants";

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

const AppStoreSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = APP_STORE.filter(app => {
    const matchesCategory = selectedCategory === "all" || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredApps = APP_STORE.filter(app => app.featured);

  return (
    <section id="app-store" className="container py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
            <Grid3x3 className="h-6 w-6 text-primary animate-pulse" />
            <Badge variant="outline" className="text-sm border-primary/20">
              {APP_STORE.length} Apps Available
            </Badge>
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </div>
          
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              7K App Store
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the complete 7K Ecosystem — a collection of apps designed for productivity, 
            education, health, and more. All built with passion and purpose.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div className="max-w-4xl mx-auto mb-12" variants={fadeInUp}>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter Info */}
            <Button variant="outline" className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              {selectedCategory === "all" ? "All Categories" : selectedCategory}
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {APP_CATEGORIES.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="rounded-full"
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Apps */}
        {selectedCategory === "all" && !searchQuery && (
          <motion.div className="mb-16" variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Featured Apps
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
                    <div className="h-2 bg-gradient-to-r from-primary to-accent" style={{ background: `linear-gradient(to right, ${app.color}, ${app.color}dd)` }} />
                    
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-5xl group-hover:scale-110 transition-transform">
                          {app.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {app.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{app.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {app.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                          Open App
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Apps Grid */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {searchQuery ? `Search Results (${filteredApps.length})` : 'All Apps'}
          </h3>
          
          {filteredApps.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No apps found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {app.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {app.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-1">{app.name}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {app.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                        >
                          Launch
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info Box */}
        <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">The 7K Ecosystem Vision</h3>
                  <p className="text-muted-foreground">
                    Every app in the 7K Ecosystem is designed with a purpose — to empower, educate, 
                    and support users in their daily lives. From productivity tools to educational platforms, 
                    each app is a quiet companion for people who need it most. The ecosystem continues to 
                    grow with new ideas and innovations!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppStoreSection;

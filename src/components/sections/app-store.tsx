"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  ExternalLink, 
  Sparkles,
  Grid3x3,
  ArrowRight
} from "lucide-react";
import { APP_STORE } from "@/lib/constants";

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
  // Show only these 4 featured apps on the homepage
  const featuredAppIds = ["7k-life", "7k-lawprep", "7k-itihaas", "7k-money"];
  const featuredApps = APP_STORE.filter(app => featuredAppIds.includes(app.id));

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
            Explore the 7K Ecosystem — a collection of apps designed for productivity, 
            education, health, and more. All built with passion and purpose.
          </p>
        </motion.div>

        {/* Featured Apps Grid */}
        <motion.div className="mb-12" variants={fadeInUp}>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
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

        {/* View All Apps Button */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <Link href="/apps">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all group"
            >
              View All {APP_STORE.length} Apps
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Info Box */}
        <motion.div variants={fadeInUp}>
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

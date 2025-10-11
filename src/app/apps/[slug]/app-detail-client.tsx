"use client";

import { App } from "@/lib/apps-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ExternalLink, 
  Star, 
  Users, 
  Calendar, 
  Tag,
  CheckCircle2,
  Code,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AppDetailClientProps {
  app: App;
}

export default function AppDetailClient({ app }: AppDetailClientProps) {
  const statusColors = {
    live: "bg-green-500/20 text-green-400 border-green-500/30",
    beta: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "coming-soon": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  const categoryColors = {
    productivity: "bg-purple-500/20 text-purple-400",
    learning: "bg-blue-500/20 text-blue-400",
    finance: "bg-green-500/20 text-green-400",
    health: "bg-red-500/20 text-red-400",
    entertainment: "bg-pink-500/20 text-pink-400",
    creative: "bg-orange-500/20 text-orange-400",
    social: "bg-cyan-500/20 text-cyan-400",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/apps" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Apps
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              {/* Status & Category Badges */}
              <div className="flex gap-2 mb-4">
                <Badge className={statusColors[app.status]}>
                  {app.status === "live" && "🟢"} 
                  {app.status === "beta" && "🔵"} 
                  {app.status === "coming-soon" && "🟡"} 
                  {app.status.replace("-", " ").toUpperCase()}
                </Badge>
                <Badge className={categoryColors[app.category as keyof typeof categoryColors]}>
                  {app.category}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {app.pricing}
                </Badge>
              </div>

              {/* App Name & Tagline */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {app.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {app.tagline}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(app.rating)
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{app.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>{app.reviews.toLocaleString()} reviews</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="gap-2 group" asChild>
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  Launch {app.name}
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* App Icon/Screenshot Placeholder */}
            <div className="w-full md:w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-6xl">
                {app.category === "productivity" && "🚀"}
                {app.category === "learning" && "📚"}
                {app.category === "finance" && "💰"}
                {app.category === "health" && "💪"}
                {app.category === "entertainment" && "🎮"}
                {app.category === "creative" && "🎨"}
                {app.category === "social" && "💬"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">About {app.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {app.fullDescription}
            </p>
          </Card>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {app.features.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Code className="h-8 w-8" />
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            {app.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-8 w-8" />
            Perfect For
          </h2>
          <div className="flex flex-wrap gap-3">
            {app.targetAudience.map((audience, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm capitalize">
                {audience}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Metadata */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Launched</p>
                  <p className="font-semibold">
                    {new Date(app.launchDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold capitalize">{app.category}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Pricing</p>
                  <p className="font-semibold capitalize">{app.pricing}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already using {app.name} to {app.tagline.toLowerCase()}.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                Launch {app.name} Now
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}

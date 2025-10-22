"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Search,
  Palette,
  Zap,
  Users,
  ArrowLeft,
  Sparkles,
  Star,
  Layers,
} from "lucide-react";

// Import all 5 different card styles
import { MenuCardStyle1 } from "@/components/menu-cards/style-1-classic";
import { MenuCardStyle2 } from "@/components/menu-cards/style-2-glass";
import { MenuCardStyle3 } from "@/components/menu-cards/style-3-gradient";
import { MenuCardStyle4 } from "@/components/menu-cards/style-4-minimal";
import { MenuCardStyle5 } from "@/components/menu-cards/style-5-neon";

// SEO Metadata would go here if this was a server component
// For now, we'll add it via the layout or convert to server component with client wrapper

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Modern websites that shine",
    price: "₹3k - ₹20k",
    features: ["Responsive", "SEO Ready", "Fast Loading"],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in Web Development services. I'd like to discuss building a modern website/web application. Can we talk about the requirements and pricing?"
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    tagline: "PWAs & Mobile Apps",
    price: "₹3k - ₹15k",
    features: ["Cross-Platform", "Offline Ready", "App Store"],
    color: "from-purple-500 via-pink-500 to-rose-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in App Development services. I'd like to discuss creating a Progressive Web App or mobile application. Can we discuss the project details?"
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO & Marketing",
    tagline: "Get discovered online",
    price: "₹1k - ₹5k",
    features: ["Keywords", "Rankings", "Traffic"],
    color: "from-green-500 via-emerald-500 to-teal-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in SEO & Marketing services. I'd like to improve my website's search rankings and online visibility. Can we discuss an SEO strategy?"
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Beautiful & intuitive",
    price: "₹2k - ₹7k",
    features: ["Wireframes", "Prototypes", "User Testing"],
    color: "from-orange-500 via-amber-500 to-yellow-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in UI/UX Design services. I'd like to create a beautiful and user-friendly interface for my project. Can we discuss the design requirements?"
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Boost",
    tagline: "Lightning fast sites",
    price: "₹1.5k - ₹6k",
    features: ["Speed Analysis", "Optimization", "CDN Setup"],
    color: "from-yellow-500 via-orange-500 to-red-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in Performance Optimization services. I'd like to speed up my website and improve loading times. Can we discuss optimization strategies?"
  },
  {
    id: "consulting",
    icon: Users,
    title: "Tech Consulting",
    tagline: "Expert guidance",
    price: "₹2k - ₹8k",
    features: ["Tech Stack", "Architecture", "Code Review"],
    color: "from-indigo-500 via-violet-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    whatsappMessage: "Hi Kunal! I'm interested in Tech Consulting services. I'd like expert guidance on technology decisions and architecture for my project. Can we schedule a consultation?"
  }
];

const cardStyles = [
  { id: 1, name: "Classic", component: MenuCardStyle1 },
  { id: 2, name: "Glass", component: MenuCardStyle2 },
  { id: 3, name: "Gradient", component: MenuCardStyle3 },
  { id: 4, name: "Minimal", component: MenuCardStyle4 },
  { id: 5, name: "Neon", component: MenuCardStyle5 },
];

export default function MenuPage() {
  const [activeStyle, setActiveStyle] = useState(3);
  
  const CardComponent = cardStyles.find(s => s.id === activeStyle)?.component || MenuCardStyle3;
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">Services Menu</span>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm">
                Home
              </Button>
            </Link>
          </div>
          
          {/* Style Switcher */}
          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mr-2">
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Card Style:</span>
            </div>
            {cardStyles.map((style) => (
              <Button
                key={style.id}
                variant={activeStyle === style.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveStyle(style.id)}
                className={`text-xs transition-all ${
                  activeStyle === style.id 
                    ? "shadow-lg shadow-primary/30" 
                    : "hover:border-primary/50"
                }`}
              >
                {style.name}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge variant="outline" className="mb-3 px-3 py-1.5">
            <Star className="h-3 w-3 mr-1.5 inline fill-primary text-primary" />
            Professional Services
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Choose Your Service
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Tap any service to send a WhatsApp message and get started with your project
          </p>
        </motion.div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto pb-8">
          {services.map((service, index) => (
            <CardComponent key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pb-8"
        >
          <Card className="max-w-md mx-auto bg-primary/5 border-primary/20">
            <CardContent className="py-4 px-5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-semibold text-sm">Quick Response Guarantee</span>
              </div>
              <p className="text-xs text-muted-foreground">
                I typically respond within 1 hour during business hours (9 AM - 9 PM IST)
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

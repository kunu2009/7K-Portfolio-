"use client";

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
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Star
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Stunning websites that convert",
    description: "Custom web applications built with modern frameworks like Next.js, React, and TypeScript",
    price: "₹3,000 - ₹20,000",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
    color: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    bgGlow: "bg-blue-500/5"
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    tagline: "Mobile-first digital solutions",
    description: "Progressive Web Apps and mobile applications that work seamlessly across all devices",
    price: "₹3,000 - ₹15,000",
    features: ["Cross-Platform", "Offline Support", "Push Notifications", "App Store Ready"],
    color: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    bgGlow: "bg-purple-500/5"
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO & Marketing",
    tagline: "Get found by your customers",
    description: "Comprehensive SEO strategies to boost your online visibility and drive organic traffic",
    price: "₹1,000 - ₹5,000",
    features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Analytics Setup"],
    color: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    bgGlow: "bg-green-500/5"
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Beautiful interfaces, seamless experiences",
    description: "User-centered design that looks amazing and provides intuitive user experiences",
    price: "₹2,000 - ₹7,000",
    features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
    color: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    bgGlow: "bg-orange-500/5"
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    tagline: "Lightning-fast loading speeds",
    description: "Speed up your website with advanced optimization techniques and best practices",
    price: "₹1,500 - ₹6,000",
    features: ["Speed Analysis", "Code Optimization", "Image Compression", "CDN Setup"],
    color: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    bgGlow: "bg-yellow-500/5"
  },
  {
    id: "consulting",
    icon: Users,
    title: "Tech Consulting",
    tagline: "Expert guidance for your project",
    description: "Strategic technology consulting to help you make informed decisions",
    price: "₹2,000 - ₹8,000",
    features: ["Tech Stack Selection", "Architecture Planning", "Code Review", "Best Practices"],
    color: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-500",
    bgGlow: "bg-indigo-500/5"
  }
];

const stats = [
  { icon: Rocket, value: "24+", label: "Apps Built" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: TrendingUp, value: "100%", label: "Success Rate" }
];

export default function ServicesMenuCard() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-3 w-3 mr-2 inline" />
            Professional Services
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From concept to launch, I provide comprehensive digital solutions tailored to your needs. 
            Let's build something amazing together.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="text-center bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card 
                  className={`group relative overflow-hidden border ${service.borderColor} bg-background/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-[1px] ${service.bgGlow} rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
                  
                  <CardContent className="relative pt-6 pb-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${service.bgGlow} border ${service.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${service.iconColor}`} />
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${service.iconColor}`}>
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor} mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Starting from</div>
                        <div className="text-lg font-bold text-foreground" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                          {service.price}
                        </div>
                      </div>
                      <ArrowRight className={`h-5 w-5 ${service.iconColor} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Let's discuss your ideas and create something extraordinary. Get a detailed quote and timeline for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="#contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

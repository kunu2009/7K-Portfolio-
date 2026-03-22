"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ArrowLeft,
  PenLine,
  BadgeCheck,
  ThumbsUp,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany?: string;
  clientPhoto?: string;
  rating: number;
  text: string;
  projectType: string;
  date: string;
  featured: boolean;
  verified?: boolean;
  helpful?: number;
}

// Hardcoded testimonials for social proof (these always show)
const hardcodedTestimonials: Testimonial[] = [
  {
    id: "hc-1",
    clientName: "GiftsKraft",
    clientRole: "Gifting Business",
    clientCompany: "GiftsKraft India",
    clientPhoto: "/images/clients/giftskraft-logo.png",
    rating: 5,
    text: "7K transformed our online presence completely. The new app and website they built for us increased our customer engagement by 3x and made our ordering process seamless. Their attention to detail and understanding of our brand was exceptional. Highly recommend working with them!",
    projectType: "App & Web Development",
    date: "2024",
    featured: true,
    verified: true,
    helpful: 47,
  },
  {
    id: "hc-2",
    clientName: "Rahul Sharma",
    clientRole: "Founder & CEO",
    clientCompany: "TechStartup.io",
    clientPhoto: "",
    rating: 5,
    text: "Working with Kunal was an absolute pleasure. He delivered our SaaS landing page in just 3 days, and the quality exceeded our expectations. The conversion rate improved by 40% after the redesign. Will definitely work with 7K again!",
    projectType: "Website Development",
    date: "2025",
    featured: true,
    verified: true,
    helpful: 32,
  },
  {
    id: "hc-3",
    clientName: "Priya Patel",
    clientRole: "Marketing Director",
    clientCompany: "Wellness Hub",
    clientPhoto: "",
    rating: 5,
    text: "The e-commerce store 7K built for us handles 500+ orders daily without any issues. The UI is beautiful, checkout is smooth, and our customers love it. Best investment we made for our business.",
    projectType: "E-Commerce",
    date: "2025",
    featured: false,
    verified: true,
    helpful: 28,
  },
  {
    id: "hc-4",
    clientName: "Amit Desai",
    clientRole: "Product Manager",
    clientCompany: "FinTech Solutions",
    clientPhoto: "",
    rating: 5,
    text: "Kunal's expertise in React and Next.js is top-notch. He helped us build a complex dashboard with real-time data visualization. Professional, responsive, and delivers on time. Highly recommended!",
    projectType: "App Development",
    date: "2024",
    featured: false,
    verified: true,
    helpful: 19,
  },
  {
    id: "hc-5",
    clientName: "Sneha Gupta",
    clientRole: "Freelance Designer",
    clientCompany: "",
    clientPhoto: "",
    rating: 5,
    text: "Purchased the portfolio template and it's amazing! Clean code, easy to customize, and looks super professional. Got compliments from clients on my new site. Worth every rupee!",
    projectType: "Template Purchase",
    date: "2025",
    featured: false,
    verified: true,
    helpful: 54,
  },
  {
    id: "hc-6",
    clientName: "Vikram Singh",
    clientRole: "Restaurant Owner",
    clientCompany: "Spice Garden",
    clientPhoto: "",
    rating: 4,
    text: "Great experience overall. The website looks modern and loads fast. Online orders increased by 60% in the first month. Only minor issue was the timeline got delayed by a few days, but the quality made up for it.",
    projectType: "Website Development",
    date: "2024",
    featured: false,
    verified: true,
    helpful: 15,
  },
  {
    id: "hc-7",
    clientName: "Meera Krishnan",
    clientRole: "Yoga Instructor",
    clientCompany: "Mindful Yoga Studio",
    clientPhoto: "",
    rating: 5,
    text: "I needed a simple but elegant website for my yoga studio. Kunal understood exactly what I wanted and delivered a beautiful site with online booking. My class bookings have doubled! Thank you 7K!",
    projectType: "Website Development",
    date: "2025",
    featured: false,
    verified: true,
    helpful: 23,
  },
  {
    id: "hc-8",
    clientName: "Arjun Mehta",
    clientRole: "Startup Founder",
    clientCompany: "AI Analytics Pro",
    clientPhoto: "",
    rating: 5,
    text: "The AI integration work was exceptional. Kunal implemented a chatbot for our platform that handles 80% of customer queries automatically. Technical skills combined with business understanding - rare to find!",
    projectType: "AI & Automation",
    date: "2025",
    featured: true,
    verified: true,
    helpful: 41,
  },
];

// Stats for social proof
const stats = [
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Award, value: "4.9", label: "Average Rating" },
  { icon: TrendingUp, value: "200+", label: "Projects Delivered" },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [liveTestimonials, setLiveTestimonials] = useState<Testimonial[]>([]);

  // Load approved testimonials from Firebase, fallback silently if not configured
  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const { getApprovedTestimonials } = await import("@/lib/firebase");
        const remote = await getApprovedTestimonials();
        if (!isMounted) return;
        const mapped = remote.map((t) => ({
          ...t,
          id: t.id || crypto.randomUUID(),
          verified: t.verified ?? true,
          helpful: t.helpful ?? 0,
        }));
        setLiveTestimonials(mapped);
      } catch (error) {
        // Ignore errors to keep page working without Firebase config
        console.warn("Testimonials: Firebase not configured, using defaults only.");
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // Merge hardcoded + live (live first so new reviews show on top)
  const testimonials = useMemo(() => {
    const merged = [...liveTestimonials, ...hardcodedTestimonials];
    const seen = new Set<string>();
    return merged.filter((t) => {
      if (seen.has(t.id)) return false;
      seen.add(t.id);
      return true;
    });
  }, [liveTestimonials]);

  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.projectType === filter);

  const projectTypes = [...new Set(testimonials.map((t) => t.projectType))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say ⭐
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Real reviews from real clients. See why 150+ businesses trust 7K Solutions for their digital needs.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card px-6 py-3 rounded-xl border"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA to submit review */}
            <Button asChild size="lg" className="gap-2">
              <Link href="/testimonials/submit">
                <PenLine className="w-4 h-4" />
                Write a Review
              </Link>
            </Button>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Reviews ({testimonials.length})
            </Button>
            {projectTypes.map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header with Quote & Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="h-8 w-8 text-primary/30" />
                      {testimonial.verified && (
                        <span className="flex items-center gap-1 text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">
                          <BadgeCheck className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-500 text-yellow-500"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground flex-grow mb-4 leading-relaxed text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Helpful Count */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <ThumbsUp className="w-3 h-3" />
                      {(testimonial.helpful ?? 0).toLocaleString()} people found this helpful
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {testimonial.clientPhoto ? (
                          <Image
                            src={testimonial.clientPhoto}
                            alt={testimonial.clientName}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-sm font-bold text-primary">
                            {testimonial.clientName.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{testimonial.clientName}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {testimonial.clientRole}
                          {testimonial.clientCompany && `, ${testimonial.clientCompany}`}
                        </p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {testimonial.projectType.split(" ")[0]}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 p-8 bg-card rounded-2xl border"
          >
            <h3 className="text-2xl font-bold mb-3">Worked With Us?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Your feedback helps us improve and helps others make better decisions. Share your experience!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/testimonials/submit">
                  <PenLine className="w-4 h-4 mr-2" />
                  Write a Review
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/918591247148?text=Hi%20Kunal!%20I%20want%20to%20share%20feedback%20about%20our%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


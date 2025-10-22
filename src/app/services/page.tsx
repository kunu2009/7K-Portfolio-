'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Smartphone, Search, Palette, ShoppingCart, Bot,
  ArrowRight, Check, Mail, Phone, MessageCircle,
  Rocket, ChevronLeft, Sparkles, Target, Zap,
  Image as ImageIcon, Settings, Globe, TrendingUp,
  Package, IndianRupee
} from 'lucide-react';

const mainServices = [
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technology for optimal performance and SEO.',
    color: 'from-blue-500 to-cyan-500',
    tiers: [
      {
        name: 'Static Website',
        price: '₹3,000 - ₹5,000',
        features: [
          '5-7 pages',
          'Responsive design',
          'Basic SEO setup',
          'Contact form',
          '1 month support'
        ]
      },
      {
        name: 'Dynamic Website',
        price: '₹8,000 - ₹12,000',
        features: [
          '10-15 pages',
          'CMS integration',
          'Admin panel',
          'Advanced SEO',
          'API integration',
          '2 months support'
        ]
      },
      {
        name: 'Web Application',
        price: '₹15,000 - ₹20,000',
        features: [
          'Custom features',
          'User authentication',
          'Database design',
          'Real-time updates',
          'Advanced animations',
          '3 months support'
        ]
      }
    ]
  },
  {
    id: 'app-dev',
    icon: Smartphone,
    title: 'App Development',
    description: 'Interactive prototypes and Progressive Web Apps (PWA) that work seamlessly across all devices.',
    color: 'from-purple-500 to-pink-500',
    tiers: [
      {
        name: 'App Prototype',
        price: '₹3,000 - ₹6,000',
        features: [
          'Interactive mockups',
          'User flow design',
          'Clickable prototype',
          'Design handoff',
          'Unlimited revisions'
        ]
      },
      {
        name: 'Full PWA',
        price: '₹10,000 - ₹15,000',
        features: [
          'Offline functionality',
          'Push notifications',
          'App-like experience',
          'Installable',
          'Cross-platform',
          '2 months support'
        ]
      }
    ]
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to boost your online visibility and drive organic traffic.',
    color: 'from-green-500 to-emerald-500',
    tiers: [
      {
        name: 'Basic SEO',
        price: '₹1,000 - ₹2,000',
        features: [
          'Keyword research',
          'On-page optimization',
          'Meta tags setup',
          'Sitemap creation',
          'Performance report'
        ]
      },
      {
        name: 'Full SEO + Analytics',
        price: '₹3,000 - ₹5,000',
        features: [
          'Everything in Basic',
          'Google Analytics setup',
          'Monthly reporting',
          'Competitor analysis',
          'Content strategy',
          '3 months tracking'
        ]
      }
    ]
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging, intuitive experiences and drive conversions.',
    color: 'from-orange-500 to-red-500',
    tiers: [
      {
        name: 'App/Web UI Design',
        price: '₹2,000 - ₹4,000',
        features: [
          'User research',
          'Wireframing',
          'Visual design',
          'Responsive layouts',
          '3 revision rounds'
        ]
      },
      {
        name: 'Logo + Brand Kit',
        price: '₹5,000 - ₹7,000',
        features: [
          'Logo design (5 concepts)',
          'Color palette',
          'Typography guide',
          'Brand guidelines',
          'Social media kit',
          'Source files included'
        ]
      }
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store setup with payment gateway integration and inventory management.',
    color: 'from-indigo-500 to-violet-500',
    tiers: [
      {
        name: 'E-Commerce Store',
        price: '₹8,000 - ₹15,000',
        features: [
          'Product catalog',
          'Shopping cart',
          'Payment gateway',
          'Order management',
          'Customer accounts',
          'Admin dashboard',
          '3 months support'
        ]
      }
    ]
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI & Automation',
    description: 'Smart automation solutions and AI-powered features to streamline your business processes.',
    color: 'from-teal-500 to-cyan-500',
    tiers: [
      {
        name: 'Basic Automation',
        price: '₹2,000 - ₹4,000',
        features: [
          'Chatbot integration',
          'Form automation',
          'Email sequences',
          'API connections',
          'Custom scripts'
        ]
      },
      {
        name: 'Advanced AI Features',
        price: '₹5,000 - ₹8,000',
        features: [
          'AI content generation',
          'Smart recommendations',
          'Data analytics',
          'Custom ML models',
          'Voice/chat interfaces',
          'Ongoing optimization'
        ]
      }
    ]
  }
];

const addOnServices = [
  {
    icon: ImageIcon,
    title: 'Graphics & Assets',
    price: '₹500 - ₹3,000',
    description: 'Custom graphics, icons, illustrations, and visual assets for your project.'
  },
  {
    icon: Settings,
    title: 'Maintenance & Updates',
    price: '₹1,000 - ₹3,000/month',
    description: 'Regular updates, bug fixes, content changes, and technical support.'
  },
  {
    icon: Globe,
    title: 'Hosting & Domain',
    price: '₹500 - ₹1,000/year',
    description: 'Domain registration, hosting setup, SSL certificate, and email configuration.'
  },
  {
    icon: Package,
    title: 'Content Writing',
    price: '₹500 - ₹2,000/page',
    description: 'SEO-optimized content, copywriting, and professional page content creation.'
  }
];

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: Rocket },
  { number: '25+', label: 'Happy Clients', icon: Target },
  { number: '100%', label: 'Satisfaction Rate', icon: Sparkles },
  { number: '₹3K', label: 'Starting Price', icon: IndianRupee }
];

const whyChooseUs = [
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description: 'Clear, competitive prices with no hidden costs. 50% advance, 50% on completion.'
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Most projects delivered within 1-3 weeks depending on complexity.'
  },
  {
    icon: TrendingUp,
    title: 'Portfolio-Driven',
    description: 'Check our extensive portfolio to see the quality of work before hiring.'
  },
  {
    icon: Zap,
    title: 'Modern Tech Stack',
    description: 'Built with Next.js, React, TypeScript, and other cutting-edge technologies.'
  }
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

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <Link href="/#contact">
            <Button className="rounded-full bg-gradient-to-r from-primary to-accent">
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="outline" className="text-sm border-primary/20">
                <IndianRupee className="mr-1 h-3 w-3" />
                Affordable & Quality Services
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Professional Development Services
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Transform your ideas into reality with budget-friendly web & app development. 
              <span className="text-primary font-semibold"> Starting from just ₹1,000</span> with 
              50% advance payment. Quality work, competitive prices.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/#contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full">
                  <Rocket className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 text-center">
                <CardContent className="pt-6 pb-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Expertise
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Services That Drive Results
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Comprehensive digital solutions designed to accelerate your business growth with cutting-edge technology and proven strategies.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service: any, index: number) => {
              const Icon = service.icon;
              const firstTier = service.tiers?.[0];
              return (
                <div
                  key={service.id || index}
                  className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur p-8 transition-all hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 border-border/50"
                >
                  
                  <div className="mb-6">
                    <div className="inline-flex rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6 space-y-2">
                    {service.tiers && service.tiers.map((tier: any, idx: number) => (
                      <div key={idx} className="text-sm">
                        <strong className="text-primary">{tier.name}:</strong> {tier.price}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/#contact">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Get to know us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              7K Studios is a digital-first creative studio founded with the mission to empower 
              businesses across India and globally through innovative technology solutions. We 
              specialize in creating beautiful, functional digital experiences that drive real results and 
              business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-card/30 backdrop-blur p-6 hover:bg-card/50 hover:border-primary/30 transition-all"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 ring-1 ring-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-muted-foreground">Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <a 
                href="mailto:7kmindbeatss@gmail.com"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-8 hover:bg-card hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground mb-1">Email Us</div>
                  <div className="text-sm text-muted-foreground">7kmindbeatss@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+918591247148"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-8 hover:bg-card hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground mb-1">Call Us</div>
                  <div className="text-sm text-muted-foreground">+91 8591247148</div>
                </div>
              </a>

              <a 
                href="https://wa.me/918591247148"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-8 hover:bg-card hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Chat with us</div>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <Link href="#services">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20 py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/services/logo.png" 
                alt="7K Studios" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-foreground">7K Studios</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 7K Studios. All rights reserved.
            </p>
            <Link href="/" className="text-sm text-primary hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

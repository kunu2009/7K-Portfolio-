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
  Package, IndianRupee, ChevronDown, ChevronUp,
  Clock, Users, FileText, Cpu, CheckCircle
} from 'lucide-react';

const mainServices = [
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technology for optimal performance and SEO.',
    color: 'from-blue-500 to-cyan-500',
    whatsappMessage: 'Hi Kunal! I\'m interested in Web Development services. I\'d like to discuss building a modern website/web application. Can we talk about the requirements and pricing?',
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
    whatsappMessage: 'Hi Kunal! I\'m interested in App Development services. I\'d like to discuss creating a Progressive Web App or mobile application. Can we discuss the project details?',
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
    whatsappMessage: 'Hi Kunal! I\'m interested in SEO & Marketing services. I\'d like to improve my website\'s search rankings and online visibility. Can we discuss an SEO strategy?',
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
    whatsappMessage: 'Hi Kunal! I\'m interested in UI/UX Design services. I\'d like to create a beautiful and user-friendly interface for my project. Can we discuss the design requirements?',
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
    whatsappMessage: 'Hi Kunal! I\'m interested in E-Commerce Solutions. I\'d like to set up an online store with payment integration. Can we discuss the requirements?',
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
    whatsappMessage: 'Hi Kunal! I\'m interested in AI & Automation services. I\'d like to implement smart automation or AI features in my project. Can we discuss the possibilities?',
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

const processTimeline = [
  {
    step: '01',
    icon: Phone,
    title: 'Discovery Call',
    description: 'Free 15-30 minute consultation to understand your needs and goals',
    duration: 'Free',
    details: ['Discuss requirements', 'Share examples', 'Ask questions', 'Get expert advice']
  },
  {
    step: '02',
    icon: FileText,
    title: 'Proposal & Quote',
    description: 'Detailed project proposal with timeline, deliverables, and pricing',
    duration: '24 hours',
    details: ['Scope breakdown', 'Clear pricing', 'Timeline estimate', 'Feature list']
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Kickoff & Payment',
    description: 'Project kickoff after 50% advance payment and agreement',
    duration: 'Same day',
    details: ['Sign agreement', '50% payment', 'Access credentials', 'Set milestones']
  },
  {
    step: '04',
    icon: Cpu,
    title: 'Development',
    description: 'Active development with regular updates and preview links',
    duration: '1-3 weeks',
    details: ['Build features', 'Daily updates', 'Preview links', 'Your feedback']
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Delivery & Support',
    description: 'Final testing, launch, and 50% payment with free support period',
    duration: '1-2 days',
    details: ['Quality testing', 'Launch live', '50% payment', '1-3 month support']
  }
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects are completed within 1-3 weeks. Static websites take 3-7 days, dynamic sites 1-2 weeks, and web applications 2-4 weeks. Timeline depends on project complexity, features, and how quickly you provide feedback and content.'
  },
  {
    question: 'What\'s included in the price?',
    answer: 'All prices include design, development, responsive layouts for mobile/tablet/desktop, basic SEO setup, contact forms, and post-launch support (1-3 months depending on package). Domain, hosting, and premium plugins/services are separate.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! Standard plan is 50% advance and 50% on completion. For larger projects (above Rs. 20,000), we can arrange milestone-based payments. All payments are secure and invoiced.'
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely! Check our portfolio section showcasing 28+ design variations, 24+ live apps, and case studies from past clients. We\'re proud to show our work upfront so you know exactly what quality to expect.'
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'All packages include 1-3 months of free support for bug fixes and minor tweaks. After that, you can opt for our maintenance plan (Rs. 1,000-3,000/month) or pay per change. We never leave you stranded!'
  },
  {
    question: 'How do I get started?',
    answer: 'Simple! Click "Send Message" on any service above to WhatsApp us, or call +91 8591247148. We\'ll schedule a free 15-30 minute discovery call to discuss your needs and provide a custom quote within 24 hours.'
  },
  {
    question: 'What\'s the payment process?',
    answer: 'After agreeing on the project scope and price: (1) You pay 50% advance, (2) We start work and send regular updates, (3) You pay remaining 50% after final delivery and approval. All payments via UPI, bank transfer, or Razorpay.'
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes! Every project includes free support: Static sites get 1 month, dynamic sites get 2 months, and web apps get 3 months. Support covers bug fixes, content updates, and technical questions. Extended plans available.'
  },
  {
    question: 'Can you help with content and images?',
    answer: 'We can guide you on what content is needed and recommend royalty-free images. Professional content writing is available as an add-on (Rs. 500-2,000/page). Custom graphics and illustrations also available (Rs. 500-3,000).'
  },
  {
    question: 'What about hosting and domain?',
    answer: 'We offer hosting setup as an add-on (Rs. 500-1,000/year) which includes domain registration, hosting configuration, SSL certificate, and email setup. Or we can deploy to your existing hosting. Recommended: Vercel (free) or Hostinger (paid).'
  },
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes! We work with clients globally. Communication via WhatsApp, email, and video calls. Pricing for international clients in USD with similar terms. Time zone differences managed with async updates and scheduled calls.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard tech: Next.js 15 + React for web apps, TypeScript for reliability, Tailwind CSS for design, Framer Motion for animations, and various APIs for functionality. All projects are SEO-optimized and performant.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We can redesign your existing site with modern design, better performance, and new features. We\'ll analyze your current site, migrate content, improve SEO, and ensure zero downtime during the switch. Pricing similar to new builds.'
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes! After delivery, we provide a walkthrough video showing how to update content, add blog posts, manage products, etc. We also offer paid 1-on-1 training sessions if you need hands-on help (Rs. 1,000/hour).'
  },
  {
    question: 'What if I\'m not happy with the result?',
    answer: 'We work iteratively with regular previews and feedback loops to ensure you\'re happy. Unlimited revisions during development. If somehow you\'re still not satisfied, we\'ll refund based on work completed. Your satisfaction is our priority.'
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                7K
              </div>
              <span className="font-semibold text-lg hidden sm:inline">7K Studios</span>
            </div>
          </div>
          <a 
            href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-gradient-to-r from-primary to-accent">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </a>
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
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Simple Process
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              From Idea to Launch in 5 Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined workflow ensures your project stays on track with clear milestones and transparent communication
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector line - hidden on mobile */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 relative">
              {processTimeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:bg-card hover:border-primary/30 transition-all group">
                      <CardContent className="pt-6 pb-6">
                        {/* Step number badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-background">
                          {step.step}
                        </div>

                        {/* Icon */}
                        <div className="mt-8 mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        {/* Title & Duration */}
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                        {/* Details list */}
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Check className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Mobile connector line */}
                    {index < processTimeline.length - 1 && (
                      <div className="lg:hidden flex justify-center py-4">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ready to get started?</p>
            <a href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'd%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Free Consultation
              </Button>
            </a>
          </div>
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
                      <div key={idx} className="text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        <strong className="text-primary">{tier.name}:</strong> {tier.price}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </a>
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Got Questions?
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with us. Can't find your answer? 
              <a href="https://wa.me/918591247148" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                Message us on WhatsApp
              </a>
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 text-muted-foreground leading-relaxed"
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                      </div>
                    </button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="https://wa.me/918591247148?text=Hi%20Kunal!%20I%20have%20some%20questions%20about%20your%20services" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat with Us
              </Button>
            </a>
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

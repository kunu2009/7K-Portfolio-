'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Code, Smartphone, Search, Palette, PaintBucket, 
  ArrowRight, Check, Mail, Phone, MessageCircle,
  Rocket, ChevronLeft, Sparkles, Target, Zap
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance, SEO, and user experience.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Stack'],
    priceMin: '5,000',
    priceMax: '15,000',
    period: 'per project',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'App Prototyping / PWA',
    description: 'Interactive prototypes and Progressive Web App (PWA) setup to bring your app ideas to life quickly and efficiently.',
    features: ['Interactive Prototypes', 'PWA Development', 'User Testing', 'App Store Ready'],
    priceMin: '2,000',
    priceMax: '10,000',
    period: 'per project',
    featured: false,
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with comprehensive SEO strategies, keyword research, and technical optimization.',
    features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics Setup'],
    priceMin: '1,000',
    priceMax: '3,000',
    period: 'per site',
    featured: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging, intuitive, and conversion-focused digital experiences.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping'],
    priceMin: '1,000',
    priceMax: '5,000',
    period: 'per project',
    featured: false,
  },
  {
    icon: PaintBucket,
    title: 'Basic Branding',
    description: 'Complete basic branding package including logo design, color palette, and brand guidelines.',
    features: ['Logo Design', 'Color Palette', 'Brand Guidelines', 'Landing Page'],
    priceMin: null,
    priceMax: null,
    period: 'custom quote',
    featured: false,
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '25+', label: 'Happy Clients' },
  { number: '100%', label: 'Satisfaction Rate' },
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: 'Fast & Reliable Delivery',
    description: 'We deliver quality work on time, every time.',
  },
  {
    icon: Sparkles,
    title: 'Creative Design Solutions',
    description: 'Innovative designs that stand out and engage users.',
  },
  {
    icon: Target,
    title: 'Cutting-edge Technology',
    description: 'Using the latest tech stack for modern solutions.',
  },
  {
    icon: Zap,
    title: 'Dedicated Support Team',
    description: 'Always here to help you succeed with ongoing support.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image 
              src="/images/services/logo.png" 
              alt="7K Studios Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">7K Studios</h2>
          </div>
          <Link href="#contact">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0">
            <Image 
              src="/images/banner.png" 
              alt="Background"
              fill
              priority
              className="object-cover opacity-10"
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.08) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Building the Future</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              We Build Smart Tools &{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="mb-12 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Transform your business with cutting-edge digital solutions. From stunning websites to innovative apps, 
              we craft experiences that drive growth and engage users across India and globally.
            </p>
            
            {/* Stats */}
            <div className="mb-10 grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 hover:bg-card/80 transition-colors">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground md:text-base mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                  View Services
                </Button>
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              Trusted by startups and established businesses
            </p>
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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur p-8 transition-all hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 ${
                    service.featured ? 'ring-2 ring-primary/50 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : 'border-border/50'
                  }`}
                >
                  {service.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="inline-flex rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-foreground">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6 border-t border-border/50 pt-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {service.priceMin && service.priceMax ? (
                        <>
                          <span style={{ fontFamily: 'Arial, sans-serif' }}>₹</span>{service.priceMin} - <span style={{ fontFamily: 'Arial, sans-serif' }}>₹</span>{service.priceMax}
                        </>
                      ) : (
                        'Contact for pricing'
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{service.period}</div>
                  </div>
                  
                  <Link href="#contact">
                    <Button 
                      className={`w-full ${service.featured ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : 'bg-primary/10 text-primary hover:bg-primary/20'} transition-all`}
                    >
                      {service.featured ? 'Get Started' : 'Learn More'}
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Code, Smartphone, Search, Palette, PaintBucket, 
  ArrowRight, Check, ExternalLink, Mail, Phone, MessageCircle,
  Rocket, Users, Cog, Star, ChevronLeft
} from 'lucide-react';
import './services.css';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance, SEO, and user experience.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Stack'],
    price: '₹5,000 – ₹15,000',
    period: 'per project',
    featured: true,
    color: 'primary',
  },
  {
    icon: Smartphone,
    title: 'App Prototyping / PWA',
    description: 'Interactive prototypes and Progressive Web App (PWA) setup to bring your app ideas to life quickly and efficiently.',
    features: ['Interactive Prototypes', 'PWA Development', 'User Testing', 'App Store Ready'],
    price: '₹2,000 – ₹10,000',
    period: 'per project',
    color: 'secondary',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with comprehensive SEO strategies, keyword research, and technical optimization.',
    features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics Setup'],
    price: '₹1,000 – ₹3,000',
    period: 'per site',
    color: 'accent',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging, intuitive, and conversion-focused digital experiences.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping'],
    price: '₹1,000 – ₹5,000',
    period: 'per project',
    color: 'success',
  },
  {
    icon: PaintBucket,
    title: 'Basic Branding',
    description: 'Complete basic branding package including logo design, color palette, and brand guidelines.',
    features: ['Logo Design', 'Color Palette', 'Brand Guidelines', 'Landing Page'],
    price: 'Contact for pricing',
    period: 'custom quote',
    color: 'warning',
  },
];

const portfolio = [
  {
    title: 'GiftsKraft Website',
    description: 'E-commerce platform for personalized gifts with custom product configurator and payment integration.',
    tags: ['E-commerce', 'React', 'Node.js'],
    image: 'https://via.placeholder.com/400x250/366e8d/ffffff?text=GiftsKraft',
  },
  {
    title: 'TaskFlow App',
    description: 'Productivity app prototype with team collaboration features and real-time updates.',
    tags: ['Mobile App', 'Prototype', 'UI/UX'],
    image: 'https://via.placeholder.com/400x250/17557b/ffffff?text=TaskFlow+App',
  },
  {
    title: 'Digital Agency Rebrand',
    description: 'Complete brand identity and website redesign for a growing digital marketing agency.',
    tags: ['Branding', 'Web Design', 'Marketing'],
    image: 'https://via.placeholder.com/400x250/13262f/ffffff?text=Digital+Agency',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with data visualization and user management for SaaS platform.',
    tags: ['Dashboard', 'Analytics', 'SaaS'],
    image: 'https://via.placeholder.com/400x250/d3d0cb/13262f?text=SaaS+Dashboard',
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '25+', label: 'Happy Clients' },
  { number: '100%', label: 'Satisfaction Rate' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/images/services/logo.png" alt="7K Studios Logo" width={40} height={40} />
            <h2 className="text-xl font-bold">7K Studios</h2>
          </div>
          <Link href="#contact">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Building the Future</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              We Build Smart Tools &{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Transform your business with cutting-edge digital solutions. From stunning websites to innovative apps, 
              we craft experiences that drive growth and engage users across India and globally.
            </p>
            
            {/* Stats */}
            <div className="mb-10 grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border bg-card p-4">
                  <div className="text-2xl font-bold text-primary md:text-3xl">{stat.number}</div>
                  <div className="text-xs text-muted-foreground md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Our Work
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
      <section id="services" className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Our Expertise
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Services That Drive Results
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive digital solutions designed to accelerate your business growth with cutting-edge technology and proven strategies.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-xl ${
                    service.featured ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-lg bg-${service.color}/10 p-3`}>
                      <Icon className={`h-6 w-6 text-${service.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                  
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4 border-t pt-4">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">{service.period}</div>
                  </div>
                  
                  <Link href="#contact">
                    <Button className="w-full" variant={service.featured ? 'default' : 'outline'}>
                      {service.featured ? 'Get Started' : 'Learn More'}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Portfolio</h2>
            <p className="text-muted-foreground">
              Recent projects that showcase our expertise and creativity
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <div className="rounded-full bg-white p-3">
                        <ExternalLink className="h-5 w-5 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">{project.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-sm font-medium text-primary">Get to know us</span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">About 7K Studios</h2>
              <p className="mb-8 text-muted-foreground">
                7K Studios is a digital-first creative studio founded with the mission to empower 
                businesses across India and globally through innovative technology solutions. We specialize in creating 
                beautiful, functional digital experiences that drive real results and business growth.
              </p>
              
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Rocket, text: 'Fast & Reliable Delivery' },
                  { icon: Palette, text: 'Creative Design Solutions' },
                  { icon: Cog, text: 'Cutting-edge Technology' },
                  { icon: Users, text: 'Dedicated Support Team' },
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border bg-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="rounded-lg border bg-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
                <div className="rounded-lg border bg-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl border bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
            <p className="text-muted-foreground">
              Ready to start your next project? Let's discuss how we can help you succeed.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { icon: Mail, title: 'Email Us', desc: 'Get in touch via email', link: 'mailto:hello@7kstudios.com', text: 'hello@7kstudios.com' },
              { icon: Phone, title: 'Call Us', desc: 'Speak directly with our team', link: 'tel:+918591247148', text: '+91 8591247148' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Chat with us instantly', link: 'https://wa.me/918591247148', text: 'Start Chat' },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{contact.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{contact.desc}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">{contact.text}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/images/services/logo.png" alt="7K Studios" width={32} height={32} />
              <div>
                <h3 className="font-semibold">7K Studios</h3>
                <p className="text-xs text-muted-foreground">Building smart tools & digital experiences</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2025 7K Studios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

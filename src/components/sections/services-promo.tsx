'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Search, Palette, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    name: 'Web Development',
    desc: 'Modern websites & web apps',
    price: '₹5k-₹15k',
  },
  {
    icon: Smartphone,
    name: 'App Development',
    desc: 'Prototypes & PWAs',
    price: '₹2k-₹10k',
  },
  {
    icon: Search,
    name: 'SEO Optimization',
    desc: 'Boost your visibility',
    price: '₹1k-₹3k',
  },
  {
    icon: Palette,
    name: 'UI/UX Design',
    desc: 'Beautiful interfaces',
    price: '₹1k-₹5k',
  },
];

export default function ServicesPromo() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Need a <span className="text-primary">Website</span> or <span className="text-primary">App</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            7K Studios offers affordable digital services to bring your ideas to life. 
            From stunning websites to powerful apps, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                <div className="text-lg font-bold text-primary">{service.price}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="gap-2 rounded-full">
              View All Services & Portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            50+ projects delivered • 25+ happy clients • 100% satisfaction
          </p>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import { Check, X, ArrowRight, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Packages - Professional Web Development',
  description: 'Choose the perfect package for your project. Transparent pricing, no hidden fees. From ₹5,000 to ₹25,000.',
  openGraph: {
    title: 'Service Packages - Professional Web Development',
    description: 'Choose the perfect package for your project. Transparent pricing, no hidden fees.',
    type: 'website',
  },
};

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Star,
    price: '5,000',
    duration: '1 week',
    description: 'Perfect for small businesses and personal projects',
    popular: false,
    features: [
      { name: '3-5 responsive pages', included: true },
      { name: 'Mobile-first design', included: true },
      { name: 'Contact form', included: true },
      { name: 'Basic SEO setup', included: true },
      { name: 'Google Analytics', included: true },
      { name: '1 month support', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Blog system', included: false },
      { name: 'Image gallery', included: false },
      { name: 'Advanced SEO', included: false },
      { name: 'Payment gateway', included: false },
      { name: 'Admin panel', included: false },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    icon: Zap,
    price: '12,000',
    duration: '2 weeks',
    description: 'Most popular for growing businesses',
    popular: true,
    features: [
      { name: '7-10 responsive pages', included: true },
      { name: 'Mobile-first design', included: true },
      { name: 'Contact form', included: true },
      { name: 'Blog system (MDX)', included: true },
      { name: 'Image gallery/portfolio', included: true },
      { name: 'Advanced SEO setup', included: true },
      { name: 'Google Analytics', included: true },
      { name: '3 months support', included: true },
      { name: '2 rounds of revisions', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Payment gateway', included: false },
      { name: 'Admin panel', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Crown,
    price: '25,000',
    duration: '3-4 weeks',
    description: 'Complete solution for established businesses',
    popular: false,
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Custom design (Figma)', included: true },
      { name: 'Mobile-first design', included: true },
      { name: 'Contact form', included: true },
      { name: 'Blog system (MDX)', included: true },
      { name: 'Image gallery/portfolio', included: true },
      { name: 'Advanced SEO setup', included: true },
      { name: 'Google Analytics', included: true },
      { name: 'Payment gateway integration', included: true },
      { name: 'Custom admin panel', included: true },
      { name: 'Performance optimization', included: true },
      { name: '6 months support', included: true },
      { name: 'Unlimited revisions', included: true },
    ],
  },
];

const addOns = [
  { name: 'Extra page', price: '500' },
  { name: 'Blog setup', price: '2,000' },
  { name: 'E-commerce (up to 50 products)', price: '5,000' },
  { name: 'Payment gateway', price: '2,000' },
  { name: 'Booking system', price: '3,000' },
  { name: 'Custom admin panel', price: '5,000' },
  { name: 'Mobile app', price: '15,000' },
  { name: 'Monthly maintenance', price: '2,000/month' },
];

const faqs = [
  {
    question: 'Which package is right for me?',
    answer: 'Starter is great for simple websites with basic information. Business suits growing companies needing blog and portfolio. Premium is for established businesses requiring custom features and integrations.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely! You can start with any package and upgrade as your business grows. I\'ll credit your initial investment towards the upgrade.',
  },
  {
    question: 'What\'s included in support?',
    answer: 'Support includes bug fixes, minor content updates, and technical assistance. Major feature additions are quoted separately.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes! If none of these fit your needs, contact me for a custom quote tailored to your specific requirements.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'I accept UPI, bank transfer, and online payments. Payment terms: 50% to start, 50% on completion.',
  },
  {
    question: 'How long does it take?',
    answer: 'Starter: 1 week, Business: 2 weeks, Premium: 3-4 weeks. Rush delivery available for an additional fee.',
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent{' '}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your project. No hidden fees, no surprises.
              All packages include responsive design and modern tech stack.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl border-2 p-8 transition-all hover:scale-105 ${
                    pkg.popular
                      ? 'border-primary bg-primary/5 shadow-xl'
                      : 'border-border bg-card'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold">₹{pkg.price}</span>
                      <span className="text-muted-foreground">/project</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Delivery: {pkg.duration}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={
                            feature.included ? '' : 'text-muted-foreground'
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Add-ons Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Add-ons & Extensions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {addOns.map((addon, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary transition-colors"
                >
                  <p className="font-semibold mb-1">{addon.name}</p>
                  <p className="text-primary font-bold">₹{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Not sure which package fits?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and I'll recommend the best solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="/services/calculator"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
              >
                Calculate Your Cost
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

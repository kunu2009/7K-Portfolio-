'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Hotel, Zap, Briefcase, Download, Eye, Sparkles } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  variants: number;
  icon: React.ReactNode;
  features: string[];
  previewUrl: string;
  preview: string;
  bestseller?: boolean;
  discount?: number;
}

const templates: Template[] = [
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Platform',
    description: 'Professional hotel and accommodation booking website with search, filters, and payment integration.',
    category: 'Hotel & Travel',
    price: 8000,
    variants: 3,
    icon: <Hotel className="w-6 h-6" />,
    features: [
      'Advanced search & filters',
      'Real-time availability',
      'Booking system',
      'Payment integration',
      'Guest reviews & ratings',
      'Admin dashboard',
      'Responsive design',
      'SEO optimized'
    ],
    previewUrl: '/templates/hotel-booking/preview-1',
    preview: '🏨',
    bestseller: true,
    discount: 15
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    description: 'Full-featured online store with product catalog, cart, checkout, and inventory management.',
    category: 'Retail & Shopping',
    price: 12000,
    variants: 3,
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      'Product catalog',
      'Shopping cart',
      'Checkout system',
      'Payment gateway',
      'Inventory management',
      'Order tracking',
      'Customer reviews',
      'Analytics dashboard'
    ],
    previewUrl: '/templates/ecommerce/preview-1',
    preview: '🛒',
    bestseller: true,
    discount: 20
  },
  {
    id: 'plant-store',
    title: 'Plant Store - Plantz Avenue',
    description: 'Beautiful e-commerce website for plant shops with nature-inspired design, product catalog, and care guides.',
    category: 'Retail & Shopping',
    price: 8000,
    variants: 2,
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      'Nature-inspired design',
      'Product catalog',
      'Category filters',
      'Plant care guides',
      'Shopping cart',
      'Newsletter signup',
      'Instagram integration',
      'Mobile responsive'
    ],
    previewUrl: '/templates/ecommerce/preview-2',
    preview: '🌿',
    bestseller: false
  },
  {
    id: 'creative-agency',
    title: '7K Creatix - Creative Agency',
    description: 'Modern creative agency website with bold design, neon accents, and professional service showcase.',
    category: 'Agency & Business',
    price: 10000,
    variants: 2,
    icon: <Sparkles className="w-6 h-6" />,
    features: [
      'Bold modern design',
      'Service showcase',
      'Team profiles',
      'Project portfolio',
      'Contact forms',
      'Neon green theme',
      'Animated sections',
      'Fully responsive'
    ],
    previewUrl: '/templates/agency/preview-1',
    preview: '✨',
    bestseller: true
  },
  {
    id: 'saas-landing',
    title: 'SaaS Landing Page',
    description: 'Modern landing page for software-as-a-service products with pricing, features, and sign-up forms.',
    category: 'SaaS & Software',
    price: 5000,
    variants: 3,
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Hero section',
      'Features showcase',
      'Pricing table',
      'Testimonials',
      'FAQ section',
      'Email signup',
      'CTA buttons',
      'Fast loading'
    ],
    previewUrl: '/templates/saas/preview-1',
    preview: '⚡',
  },
  {
    id: 'portfolio-site',
    title: 'Professional Portfolio',
    description: 'Stunning portfolio website for freelancers and creative professionals to showcase work.',
    category: 'Portfolio & Creative',
    price: 6000,
    variants: 3,
    icon: <Briefcase className="w-6 h-6" />,
    features: [
      'Project showcase',
      'About section',
      'Skills display',
      'Testimonials',
      'Contact form',
      'Blog section',
      'Light/dark mode',
      'Social links'
    ],
    previewUrl: '/templates/portfolio/preview-1',
    preview: '💼',
  },
];

const categories = ['All', 'Hotel & Travel', 'Retail & Shopping', 'SaaS & Software', 'Portfolio & Creative', 'Agency & Business'];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Website Templates
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Professional, ready-to-use website templates for every business type. Customize and launch in hours, not months.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-slate-800 transition-all border border-slate-700 hover:border-blue-500/50"
            >
              {/* Bestseller Badge */}
              {template.bestseller && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ Bestseller
                </div>
              )}

              {/* Discount Badge */}
              {template.discount && (
                <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{template.discount}%
                </div>
              )}

              {/* Preview Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {template.preview}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Link
                    href={template.previewUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-blue-400">{template.icon}</div>
                  <span className="text-xs text-slate-400 uppercase font-bold">{template.category}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">{template.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                    {template.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  {template.features.length > 4 && (
                    <p className="text-xs text-slate-400 mt-2">+ {template.features.length - 4} more features</p>
                  )}
                </div>

                {/* Variants */}
                <div className="mb-6 p-3 bg-slate-700/30 rounded-lg border border-slate-600">
                  <p className="text-sm text-slate-300">
                    <span className="font-bold text-white">{template.variants} Variants</span> included in this template
                  </p>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Starting at</p>
                    <div className="flex items-baseline gap-2">
                      {template.discount && (
                        <span className="text-sm line-through text-slate-400">
                          ₹{(template.price + template.discount).toLocaleString('en-IN')}
                        </span>
                      )}
                      <p className="text-3xl font-bold text-blue-400">
                        ₹{template.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-bold transition-all flex items-center gap-2 group/btn">
                    <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Get Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Template?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Can't find what you're looking for? I create custom templates for your specific business needs.
          </p>
          <a
            href="https://wa.me/918591247148?text=Hi%20Kunal%2C%20I%20need%20a%20custom%20website%20template%20for..."
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            {
              q: "Can I modify the templates?",
              a: "Yes! All templates come with full source code. You can customize colors, text, images, and functionality to match your brand."
            },
            {
              q: "Do you provide setup and deployment help?",
              a: "For templates ₹6000+, I offer free 30-min setup consultation via WhatsApp. Premium support available for ₹500/hour."
            },
            {
              q: "What's included in the price?",
              a: "Full source code, all variants, documentation, responsive design, and 30 days of email support."
            },
            {
              q: "Are these templates mobile-responsive?",
              a: "100% responsive. All templates work perfectly on mobile, tablet, and desktop devices."
            },
            {
              q: "Can I resell these templates?",
              a: "Personal use only. For white-label licensing, contact me for enterprise pricing."
            },
            {
              q: "What technology stack is used?",
              a: "Next.js 15, React, TypeScript, Tailwind CSS, and modern APIs. Built with production-grade code."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-lg font-bold mb-2 text-blue-400">{item.q}</h3>
              <p className="text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

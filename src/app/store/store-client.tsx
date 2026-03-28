'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  defaultGithubPortfolioData,
  type GithubPortfolioData,
  type GithubRepo,
} from '@/lib/github-portfolio-data';
import { appsData, type App } from '@/lib/apps-data';
import { 
  Search, 
  ChevronLeft,
  ChevronRight,
  Github,
  Star,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Smartphone,
  Layers,
  Code,
  Briefcase,
  FileText,
  Layout,
  X
} from 'lucide-react';

// ============================================
// SVG ILLUSTRATIONS
// ============================================

const HeroIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1"/>
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#EC4899"/>
      </linearGradient>
    </defs>
    {/* Background shapes */}
    <circle cx="320" cy="80" r="60" fill="url(#grad1)"/>
    <circle cx="80" cy="220" r="40" fill="url(#grad1)"/>
    {/* Floating cards */}
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="120" height="80" rx="12" fill="white" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"/>
      <rect x="10" y="10" width="100" height="40" rx="6" fill="#F3F4F6"/>
      <circle cx="25" cy="65" r="8" fill="#8B5CF6"/>
      <rect x="40" y="60" width="50" height="6" rx="3" fill="#E5E7EB"/>
    </g>
    <g transform="translate(200, 100)">
      <rect x="0" y="0" width="140" height="90" rx="12" fill="white" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"/>
      <rect x="10" y="10" width="120" height="50" rx="6" fill="url(#grad1)"/>
      <circle cx="25" cy="75" r="8" fill="#EC4899"/>
      <rect x="40" y="70" width="60" height="6" rx="3" fill="#E5E7EB"/>
    </g>
    <g transform="translate(100, 160)">
      <rect x="0" y="0" width="100" height="70" rx="12" fill="white" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"/>
      <rect x="10" y="10" width="80" height="35" rx="6" fill="#DBEAFE"/>
      <circle cx="20" cy="55" r="6" fill="#3B82F6"/>
      <rect x="32" y="52" width="40" height="5" rx="2" fill="#E5E7EB"/>
    </g>
    {/* Decorative dots */}
    <circle cx="350" cy="200" r="4" fill="#8B5CF6"/>
    <circle cx="30" cy="100" r="3" fill="#EC4899"/>
    <circle cx="280" cy="50" r="3" fill="#3B82F6"/>
  </svg>
);

const EmptyStateIllustration = () => (
  <svg viewBox="0 0 200 150" className="w-48 h-36" fill="none">
    <defs>
      <linearGradient id="emptyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="75" r="50" fill="url(#emptyGrad)"/>
    <rect x="70" y="50" width="60" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
    <path d="M85 75 L95 85 L115 65" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="60" cy="40" r="8" fill="#FEE2E2"/>
    <circle cx="140" cy="110" r="6" fill="#DBEAFE"/>
  </svg>
);

// ============================================
// DATA
// ============================================

const categories = [
  { id: 'all', name: 'All', icon: Layers, emoji: '✨' },
  { id: 'apps', name: 'Apps', icon: Smartphone, emoji: '📱' },
  { id: 'templates', name: 'Templates', icon: Layout, emoji: '🎨' },
  { id: 'books', name: 'Books', icon: BookOpen, emoji: '📚' },
  { id: 'services', name: 'Services', icon: Briefcase, emoji: '💼' },
  { id: 'articles', name: 'Articles', icon: FileText, emoji: '📝' },
];

// Apps
const apps = [
  { id: 'life', name: '7K Life', desc: 'Productivity hub', category: 'apps', price: 0, rating: 4.9, reviews: 142, image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop', tags: ['Habits', 'Tasks'], hot: true, link: '/apps/7k-life' },
  { id: 'fitness', name: '7K Fitness', desc: 'Workout tracker', category: 'apps', price: 0, rating: 4.8, reviews: 89, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop', tags: ['Health', 'Fitness'], hot: true, link: '/apps/7k-fitness' },
  { id: 'money', name: '7K Money', desc: 'Finance tracker', category: 'apps', price: 0, rating: 4.7, reviews: 67, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', tags: ['Budget', 'Finance'], link: '/apps/7k-money' },
  { id: 'polyglot', name: '7K Polyglot', desc: 'Learn languages', category: 'apps', price: 0, rating: 4.8, reviews: 45, image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop', tags: ['Languages'], new: true, link: '/apps/7k-polyglot' },
  { id: 'kanban', name: '7K Kanban', desc: 'Project boards', category: 'apps', price: 0, rating: 4.6, reviews: 34, image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop', tags: ['Projects'], link: '/apps/kanban' },
  { id: 'prompt', name: '7K Prompt', desc: 'AI prompts library', category: 'apps', price: 0, rating: 4.9, reviews: 56, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop', tags: ['AI', 'ChatGPT'], hot: true, new: true, link: '/apps/prompt' },
  { id: 'student', name: '7K Student', desc: 'Study planner', category: 'apps', price: 0, rating: 4.7, reviews: 78, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop', tags: ['Study'], link: '/apps/student' },
  { id: 'tools', name: '7K Tools', desc: 'Dev utilities', category: 'apps', price: 0, rating: 4.5, reviews: 23, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop', tags: ['Developer'], link: '/apps/tools' },
];

// Templates
const templates = [
  { id: 'saas', name: 'SaaS Starter', desc: 'Complete SaaS kit', category: 'templates', price: 12000, oldPrice: 15000, rating: 4.9, reviews: 24, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', tags: ['Next.js', 'Auth'], hot: true, link: '/templates/saas/preview-1' },
  { id: 'ecom', name: 'E-Commerce Pro', desc: 'Full shop template', category: 'templates', price: 10000, oldPrice: 12000, rating: 4.8, reviews: 18, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', tags: ['Shop', 'Cart'], hot: true, link: '/templates/ecommerce/preview-1' },
  { id: 'portfolio', name: 'Portfolio Pro', desc: 'Creative portfolio', category: 'templates', price: 8000, rating: 4.9, reviews: 32, image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', tags: ['Portfolio'], link: '/templates/portfolio/preview-1' },
  { id: 'hotel', name: 'Hotel Booking', desc: 'Resort template', category: 'templates', price: 15000, rating: 4.7, reviews: 12, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', tags: ['Booking'], new: true, link: '/templates/hotel-booking/preview-1' },
  { id: 'edu', name: 'Education LMS', desc: 'Course platform', category: 'templates', price: 12000, rating: 4.8, reviews: 15, image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop', tags: ['LMS'], link: '/templates/education/preview-1' },
  { id: 'agency', name: 'Agency Studio', desc: 'Agency website', category: 'templates', price: 9000, rating: 4.9, reviews: 21, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', tags: ['Agency'], link: '/templates/agency/preview-1' },
];

// Books
const books = [
  { id: 'ethos', name: 'Ethos', desc: 'Design philosophy', category: 'books', price: 499, rating: 4.9, reviews: 45, image: '/images/books/ethos-cover.png', tags: ['Design'], hot: true, link: '/books/ethos' },
  { id: 'kup', name: 'The Kup Games', desc: 'Mystery thriller', category: 'books', price: 599, rating: 4.8, reviews: 38, image: '/images/books/the kupgames-cover.png', tags: ['Fiction'], link: '/books/kup-games' },
  { id: 'somaiya', name: 'Somaiya Manual', desc: 'College guide', category: 'books', price: 299, rating: 5.0, reviews: 12, image: '/images/books/The Somaiya Survival Manual-cover.png', tags: ['Guide'], new: true, link: '/books/somaiya-manual' },
];

// Services
const services = [
  { id: 'web', name: 'Web Development', desc: 'Business websites & landing pages', category: 'services', price: 15000, priceNote: 'from', rating: 5.0, reviews: 28, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop', tags: ['Next.js'], hot: true, link: '/services' },
  { id: 'app', name: 'App Development', desc: 'PWA & product builds', category: 'services', price: 35000, priceNote: 'from', rating: 4.9, reviews: 15, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', tags: ['Mobile'], link: '/services' },
  { id: 'ui', name: 'UI/UX Design', desc: 'Conversion-focused interfaces', category: 'services', price: 12000, priceNote: 'from', rating: 5.0, reviews: 22, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', tags: ['Figma'], link: '/services' },
  { id: 'seo', name: 'SEO Optimization', desc: 'Rank higher on Google', category: 'services', price: 8000, priceNote: 'from', rating: 4.8, reviews: 19, image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop', tags: ['Growth'], new: true, link: '/services' },
  { id: 'instagram', name: 'Instagram Design Pack', desc: '10/20 post creatives', category: 'services', price: 2000, priceNote: 'from', rating: 4.9, reviews: 18, image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop', tags: ['Social'], link: '/services' },
  { id: 'reels', name: 'Reel Editing', desc: 'Short-form video edits', category: 'services', price: 2500, priceNote: 'from', rating: 4.8, reviews: 14, image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop', tags: ['Video'], link: '/services' },
  { id: 'branding', name: 'Logo + Branding Kit', desc: 'Brand identity starter kit', category: 'services', price: 15000, priceNote: 'from', rating: 4.9, reviews: 16, image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop', tags: ['Branding'], link: '/services' },
  { id: 'wa-setup', name: 'WhatsApp Business Setup', desc: 'Catalog + automation setup', category: 'services', price: 8000, priceNote: 'from', rating: 4.8, reviews: 13, image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop', tags: ['WhatsApp'], link: '/services' },
  { id: 'gmb', name: 'Google Business Profile', desc: 'Local SEO optimization', category: 'services', price: 12000, priceNote: 'from', rating: 4.8, reviews: 11, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', tags: ['Local SEO'], link: '/services' },
  { id: 'notion', name: 'Notion Setup', desc: 'Student/business dashboards', category: 'services', price: 8000, priceNote: 'from', rating: 4.9, reviews: 12, image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop', tags: ['Notion'], link: '/services' },
  { id: 'ai-content', name: 'AI Content Writing', desc: 'SEO + conversion copy', category: 'services', price: 10000, priceNote: 'from', rating: 4.8, reviews: 10, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop', tags: ['Content'], link: '/services' },
  { id: 'college-support', name: 'College Project Support', desc: 'Build + deploy complete support', category: 'services', price: 25000, priceNote: 'from', rating: 4.9, reviews: 21, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop', tags: ['Students'], link: '/services' },
  { id: 'shopify-wix', name: 'Shopify / Wix Setup', desc: 'Launch-ready online store', category: 'services', price: 30000, priceNote: 'from', rating: 4.8, reviews: 9, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', tags: ['Ecommerce'], link: '/services' },
  { id: 'starter-growth-pack', name: 'Starter Growth Pack', desc: 'Branding + creatives + WhatsApp setup', category: 'services', price: 24999, rating: 4.9, reviews: 8, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', tags: ['Bundle'], hot: true, link: '/services' },
  { id: 'business-launch-pack', name: 'Business Launch Pack', desc: 'Website + SEO + GMB optimization', category: 'services', price: 54999, rating: 5.0, reviews: 6, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', tags: ['Launch Pack'], hot: true, link: '/services' },
  { id: 'creator-career-pack', name: 'Creator Career Pack', desc: 'Portfolio + resume + Notion setup', category: 'services', price: 14999, rating: 4.8, reviews: 11, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', tags: ['Career Pack'], new: true, link: '/services' },
];

// Articles
const articles = [
  { id: 'nextjs', name: 'Next.js 15 Guide', desc: 'Complete tutorial', category: 'articles', price: 0, rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop', tags: ['Tutorial'], hot: true, link: '/blog/getting-started-nextjs-15' },
  { id: 'earn', name: 'Student Earning', desc: 'Make money online', category: 'articles', price: 0, rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', tags: ['Career'], hot: true, link: '/blog/how-students-earn-money-skills-no-investment' },
  { id: 'design', name: 'Design Trends 2026', desc: 'What\'s hot', category: 'articles', price: 0, rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', tags: ['Design'], new: true, link: '/blog/web-design-trends-2026' },
  { id: 'ai', name: 'AI Tools for Devs', desc: 'Boost productivity', category: 'articles', price: 0, rating: 4.9, reviews: 178, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop', tags: ['AI'], new: true, link: '/blog/best-ai-tools-developers' },
];

const allProducts = [...apps, ...templates, ...books, ...services, ...articles];

const sellableCollections = [
  {
    title: 'Services',
    emoji: '💼',
    description: 'Book professional services and growth bundles',
    countLabel: `${services.length} offerings`,
    startPrice: 'from ₹2,000',
    href: '/services',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Templates',
    emoji: '🎨',
    description: 'Ready-to-use premium website templates',
    countLabel: `${templates.length} templates`,
    startPrice: 'from ₹8,000',
    href: '/templates',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Books',
    emoji: '📚',
    description: 'Digital books and practical guides',
    countLabel: `${books.length} books`,
    startPrice: 'from ₹299',
    href: '/books',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Apps',
    emoji: '📱',
    description: 'Free productivity apps to get started instantly',
    countLabel: `${apps.length} apps`,
    startPrice: 'free',
    href: '/apps',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const trustSignals = [
  { title: 'Fast Support', subtitle: 'Quick WhatsApp response', emoji: '⚡' },
  { title: 'Secure Payments', subtitle: 'UPI-friendly checkout', emoji: '🔒' },
  { title: 'Proven Delivery', subtitle: '50+ projects shipped', emoji: '✅' },
];

// ============================================
// COMPONENTS
// ============================================

// Product Card - Clean and minimal
function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const isFree = product.price === 0;
  const oldPrice = 'oldPrice' in product && typeof product.oldPrice === 'number' ? product.oldPrice : null;
  const hasDiscount = oldPrice !== null;
  const discount = hasDiscount ? Math.round((1 - product.price / oldPrice) * 100) : 0;

  return (
    <Link href={product.link} className="group block">
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.new && (
              <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                New
              </span>
            )}
            {product.hot && !product.new && (
              <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                Popular
              </span>
            )}
            {hasDiscount && (
              <span className="px-2 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Free badge */}
          {isFree && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase">
                Free
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex gap-1.5 mb-2">
            {product.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[10px] font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Desc */}
          <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-0.5">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
            {product.desc}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{product.rating}</span>
              <span className="text-xs text-zinc-400">({product.reviews})</span>
            </div>
            <div className="text-right">
              {'priceNote' in product && <span className="text-[10px] text-zinc-400 mr-1">{(product as any).priceNote}</span>}
              <span className={`font-bold ${isFree ? 'text-emerald-600' : 'text-zinc-900 dark:text-white'}`}>
                {isFree ? 'Free' : `₹${product.price.toLocaleString()}`}
              </span>
              {hasDiscount && (
                <span className="text-xs text-zinc-400 line-through ml-1">₹{oldPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Section with horizontal scroll
function ProductSection({ title, emoji, products, viewAllLink }: { 
  title: string; 
  emoji: string;
  products: typeof allProducts;
  viewAllLink: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <span className="text-2xl">{emoji}</span> {title}
        </h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
            <ChevronLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
            <ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          </button>
          <Link href={viewAllLink} className="ml-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 flex items-center gap-1">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((p) => (
          <div key={p.id} className="flex-shrink-0 w-64 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

// Category Pill
function CategoryPill({ cat, isActive, onClick }: { 
  cat: typeof categories[0]; 
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
        isActive 
          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
          : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700'
      }`}
    >
      <span className="text-base">{cat.emoji}</span>
      {cat.name}
    </button>
  );
}

function GithubRepoCard({ repo }: { repo: GithubRepo }) {
  const languageClassMap: Record<GithubRepo['language'], string> = {
    TypeScript: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
    JavaScript: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
    HTML: 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300',
    Dart: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
    Kotlin: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
    Python: 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300',
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 h-full">
      <div className="mb-2 flex items-center gap-2">
        {repo.badge && (
          <span className="inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[11px] font-semibold text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
            {repo.badge}
          </span>
        )}
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${languageClassMap[repo.language]}`}>
          {repo.language}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{repo.name}</h3>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">{repo.description}</p>

      <div className="flex flex-wrap gap-2">
        <a
          href={repo.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-violet-300 dark:hover:border-violet-700"
        >
          <Github className="h-3.5 w-3.5" />
          Repo
        </a>
        {repo.liveUrl && (
          <a
            href={repo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-violet-700"
          >
            Live
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

// ============================================
// MAIN
// ============================================

type StoreClientProps = {
  githubPortfolio?: GithubPortfolioData;
};

export default function StoreClient({ githubPortfolio }: StoreClientProps) {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const githubPortfolioData = githubPortfolio ?? defaultGithubPortfolioData;
  const githubRepoStat = githubPortfolioData.stats.find((stat) => stat.label === 'Public Repos')?.value ?? defaultGithubPortfolioData.stats[0].value;

  const filtered = useMemo(() => {
    let result = allProducts;
    if (category !== 'all') result = result.filter(p => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [category, search]);

  const hotProducts = allProducts.filter(p => p.hot).slice(0, 8);
  const newProducts = allProducts.filter(p => p.new).slice(0, 8);
  const freeProducts = allProducts.filter(p => p.price === 0).slice(0, 8);
  const serviceProducts = allProducts.filter((p) => p.category === 'services').slice(0, 10);
  const templateProducts = allProducts.filter((p) => p.category === 'templates').slice(0, 8);
  const bookProducts = allProducts.filter((p) => p.category === 'books').slice(0, 8);
  const appProducts = allProducts.filter((p) => p.category === 'apps').slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/25">
                7K
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-zinc-900 dark:text-white">Shop</div>
                <div className="text-[10px] text-zinc-500 -mt-0.5">by 7K Solutions</div>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search apps, templates, books, services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-100/80 dark:bg-zinc-800/80 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 border-0 focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-zinc-400 hover:text-zinc-600" />
                  </button>
                )}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 right-5 opacity-10 animate-pulse hidden lg:block">
          <img src="/images/decorations/7k-unity-logo.png" alt="" width={100} height={100} />
        </div>
        <div className="absolute bottom-1/4 left-0 opacity-8 hidden xl:block animate-bounce" style={{ animationDuration: '5s' }}>
          <img src="/images/decorations/digital-cityscape.jpeg" alt="" width={140} height={140} className="rounded-2xl" />
        </div>
        <div className="absolute top-1/3 right-0 opacity-10 hidden lg:block">
          <img src="/images/decorations/ironman-cat.png" alt="" width={90} height={90} />
        </div>
        
        {/* Banner Hero */}
        <section className="relative w-full overflow-hidden rounded-3xl mb-10 shadow-lg isolate">
          <div className="relative w-full" style={{ paddingBottom: '42.857%' }}>
            <img 
              src="/7kshopbannerfinalish.png" 
              alt="7K Digital Shop" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Interactive Overlay Links */}
            <div className="absolute inset-0 z-10 grid grid-cols-2">
              {/* Left side maps to Explore Apps */}
              <Link 
                href="/apps" 
                className="w-full h-full flex items-center justify-center group"
                aria-label="Explore Apps"
              >
                <span className="sr-only">Explore Apps</span>
              </Link>
              {/* Right side maps to Browse Templates */}
              <Link 
                href="/templates" 
                className="w-full h-full flex items-center justify-center group"
                aria-label="Browse Templates"
              >
                <span className="sr-only">Browse Templates</span>
              </Link>
            </div>
          </div>
        </section>

        {/* GitHub App Universe - RIGHT AFTER BANNER */}
        <section className="mb-10 rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-4 sm:p-5 backdrop-blur">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-violet-500" />
                My GitHub Universe
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">Built from 30+ projects: education apps, productivity tools, games & AI systems</p>
            </div>
            <a
              href="https://github.com/kunu2009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-2 text-xs sm:text-sm font-semibold text-white dark:bg-white dark:text-zinc-900 whitespace-nowrap"
            >
              GitHub <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {githubPortfolioData.stats.map((stat) => (
              <div key={stat.label} className="flex-shrink-0 min-w-[120px] sm:min-w-[140px] rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 sm:p-4">
                <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-xs text-zinc-500 mt-3">Featuring ${githubPortfolioData.featuredRepos.length} coolest projects</div>
        </section>

        {/* Trust Signals */}
        <section className="grid gap-4 sm:grid-cols-3 mb-10">
          {trustSignals.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 p-4 backdrop-blur">
              <div className="text-xl mb-2">{item.emoji}</div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-zinc-500 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </section>

        {/* What You Can Buy / Book */}
        <section className="mb-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Everything You Can Buy in 7K Shop</h2>
              <p className="text-sm text-zinc-500 mt-1">Browse collections by what you want: services, templates, books, or apps.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sellableCollections.map((collection) => (
              <Link key={collection.title} href={collection.href} className="group">
                <div className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${collection.gradient} p-5 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}>
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
                  <div className="relative">
                    <div className="mb-2 text-3xl">{collection.emoji}</div>
                    <h3 className="text-lg font-semibold">{collection.title}</h3>
                    <p className="mt-1 text-xs text-white/85">{collection.description}</p>
                    <div className="mt-4 text-xs text-white/90">{collection.countLabel}</div>
                    <div className="mt-1 text-sm font-semibold">{collection.startPrice}</div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                      Open collection <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="sticky top-4 right-4 float-right z-10 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 sm:p-8">
                {/* Product Image */}
                {selectedProduct.image && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Badges & Rating */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProduct.new && (
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">NEW</span>
                  )}
                  {selectedProduct.hot && !selectedProduct.new && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-bold rounded-full">POPULAR</span>
                  )}
                  {selectedProduct.price === 0 && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">FREE</span>
                  )}
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{selectedProduct.rating}</span>
                    <span className="text-xs text-zinc-500">({selectedProduct.reviews} reviews)</span>
                  </div>
                </div>

                {/* Product Name & Price */}
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">{selectedProduct.name}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">{selectedProduct.desc}</p>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white">
                      {selectedProduct.price === 0 ? 'FREE' : `₹${selectedProduct.price.toLocaleString()}`}
                    </span>
                    {'oldPrice' in selectedProduct && selectedProduct.oldPrice && (
                      <span className="text-lg text-zinc-500 line-through">₹{selectedProduct.oldPrice}</span>
                    )}
                  </div>
                </div>

                {/* Key Benefits/Features */}
                {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wide">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {(selectedProduct.tags as string[])?.map((tag: string) => (
                        <span key={tag} className="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trust Signals */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">✓ Instant Access</div>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">🔒 Secure</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {selectedProduct.price === 0 ? (
                    <Link
                      href={selectedProduct.link}
                      className="w-full py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors text-center"
                    >
                      Access Now
                    </Link>
                  ) : (
                    <>
                      <button className="w-full py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors">
                        Add to Cart
                      </button>
                      <a
                        href="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20your%20products"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-center"
                      >
                        Ask Questions
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Apps Catalog */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <Smartphone className="w-8 h-8 text-blue-500" />
              Free Apps from 7K Ecosystem
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">30+ powerful tools for productivity, learning, fitness, and more</p>
          </div>
          {/* Row 1 */}
          <div className="mb-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {appsData.slice(0, Math.ceil(appsData.length / 2)).map((app) => (
              <motion.button
                key={app.id}
                onClick={() => setSelectedProduct({ ...app, category: 'apps', link: app.url, image: app.screenshots?.[0] || '', rating: app.rating, reviews: app.reviews, tags: app.features.slice(0, 3), price: 0, hot: false, new: false } as any)}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-48 group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-left"
              >
                {/* App Screenshot/Image */}
                {app.screenshots && app.screenshots[0] && (
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                    <img
                      src={app.screenshots[0]}
                      alt={app.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex-1">{app.name}</h3>
                    <span className="px-2 py-1 text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full whitespace-nowrap">FREE</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{app.description}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">{app.rating}</span>
                    <span className="text-[10px] text-zinc-500">({app.reviews})</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          {/* Row 2 */}
          {appsData.length > Math.ceil(appsData.length / 2) && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {appsData.slice(Math.ceil(appsData.length / 2)).map((app) => (
                <motion.button
                  key={app.id}
                  onClick={() => setSelectedProduct({ ...app, category: 'apps', link: app.url, image: app.screenshots?.[0] || '', rating: app.rating, reviews: app.reviews, tags: app.features.slice(0, 3), price: 0, hot: false, new: false } as any)}
                  whileHover={{ y: -4 }}
                  className="flex-shrink-0 w-48 group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-left"
                >
                  {/* App Screenshot/Image */}
                  {app.screenshots && app.screenshots[0] && (
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                      <img
                        src={app.screenshots[0]}
                        alt={app.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex-1">{app.name}</h3>
                      <span className="px-2 py-1 text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full whitespace-nowrap">FREE</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{app.description}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">{app.rating}</span>
                      <span className="text-[10px] text-zinc-500">({app.reviews})</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </section>

        {/* Templates Section */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <Layout className="w-8 h-8 text-violet-500" />
              Premium Website Templates
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Professional designs ready to launch. Save 40-60% building from scratch.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {templateProducts.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-56 group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 overflow-hidden hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 text-left"
              >
                {/* Template Image */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.hot && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-bold rounded-full">POPULAR</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{product.name}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{product.desc}</p>
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">₹{product.price.toLocaleString()}</span>
                      {'oldPrice' in product && product.oldPrice && (
                        <span className="text-xs text-zinc-500 line-through">₹{product.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-amber-500" />
              Books & Digital Guides
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Knowledge assets. Instant download. Learn at your own pace.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {bookProducts.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-48 group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-amber-200 dark:hover:border-amber-800 overflow-hidden hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-left"
              >
                {/* Book Cover */}
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.new && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full">NEW</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{product.name}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{product.desc}</p>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">₹{product.price}</span>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-pink-500" />
              Professional Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">From ₹2,000 quick services to ₹55,000 complete packages. Book calls via WhatsApp.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {serviceProducts.slice(0, 9).map((product) => (
              <motion.button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-56 group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-pink-200 dark:hover:border-pink-800 overflow-hidden hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 text-left"
              >
                {/* Service Image */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.hot && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-bold rounded-full">POPULAR</div>
                  )}
                  {product.new && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full">NEW</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{product.name}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">{product.desc}</p>
                  <div className="flex items-center gap-2 justify-between">
                    <div>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">₹{product.price.toLocaleString()}</span>
                      {('priceNote' in product && product.priceNote) && (
                        <span className="text-[10px] text-zinc-500 ml-1">{(product as any).priceNote}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA  */}
        <section className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 p-8 sm:p-10 text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to grow?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">Book a free 15-min call to discover which service is perfect for you</p>
          <a
            href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'd%20like%20to%20discuss%20my%20project%20needs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            WhatsApp Now →
          </a>
        </section>

        {/* GitHub App Universe */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
              <Github className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              GitHub App Universe
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">30+ open-source apps, tools, and integrations. Free. Audited. Production-ready.</p>
          </div>

          {/* GitHub Header Stats */}
          <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { label: 'Public Repos', value: githubRepoStat, icon: Code },
              { label: 'Total Stars', value: githubStarStat, icon: Star },
              { label: 'Active Segment', value: githubSegmentStat, icon: Layers },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-zinc-900 rounded-xl p-4 text-center border border-zinc-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Repos */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Featured Repositories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {githubPortfolioData.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{repo.name}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{repo.language}</p>
                    </div>
                    <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">{repo.description}</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* View All GitHub Button */}
          <div className="text-center">
            <a
              href="https://github.com/kunu2009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              View All on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {[
            { value: githubRepoStat, label: 'GitHub Repos', icon: Github },
            { value: `${apps.length}+`, label: 'Store Apps', icon: Smartphone },
            { value: `${templates.length}+`, label: 'Templates', icon: Layout },
            { value: `${services.length}+`, label: 'Services', icon: Briefcase },
            { value: '4.9', label: 'Avg Rating', icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-zinc-900 rounded-2xl p-5 text-center border border-zinc-100 dark:border-zinc-800">
              <stat.icon className="w-6 h-6 text-violet-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                7K
              </div>
              <span className="text-sm text-zinc-500">Premium digital products by Kunal Chheda</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
              <Link href="/apps" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Apps</Link>
              <Link href="/templates" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Templates</Link>
              <Link href="/books" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Books</Link>
              <Link href="/services" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Services</Link>
            </nav>
          </div>
          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400">
            © 2026 7K Solutions. Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
}

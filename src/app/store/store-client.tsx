'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code,
  BookOpen,
  Smartphone,
  Layers,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Dumbbell,
  Wallet,
  Languages,
  FileText,
  Layout,
  Zap,
  Users,
  X,
  ChevronDown
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
  { id: 'web', name: 'Web Development', desc: 'Custom websites', category: 'services', price: 3000, priceNote: 'from', rating: 5.0, reviews: 28, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop', tags: ['Next.js'], hot: true, link: '/services' },
  { id: 'app', name: 'App Development', desc: 'PWA & mobile', category: 'services', price: 10000, priceNote: 'from', rating: 4.9, reviews: 15, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', tags: ['Mobile'], link: '/services' },
  { id: 'ui', name: 'UI/UX Design', desc: 'Beautiful interfaces', category: 'services', price: 5000, priceNote: 'from', rating: 5.0, reviews: 22, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', tags: ['Figma'], link: '/services' },
  { id: 'seo', name: 'SEO Optimization', desc: 'Rank on Google', category: 'services', price: 2000, priceNote: 'from', rating: 4.8, reviews: 19, image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop', tags: ['Growth'], new: true, link: '/services' },
];

// Articles
const articles = [
  { id: 'nextjs', name: 'Next.js 15 Guide', desc: 'Complete tutorial', category: 'articles', price: 0, rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop', tags: ['Tutorial'], hot: true, link: '/blog/getting-started-nextjs-15' },
  { id: 'earn', name: 'Student Earning', desc: 'Make money online', category: 'articles', price: 0, rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', tags: ['Career'], hot: true, link: '/blog/how-students-earn-money-skills-no-investment' },
  { id: 'design', name: 'Design Trends 2026', desc: 'What\'s hot', category: 'articles', price: 0, rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', tags: ['Design'], new: true, link: '/blog/web-design-trends-2026' },
  { id: 'ai', name: 'AI Tools for Devs', desc: 'Boost productivity', category: 'articles', price: 0, rating: 4.9, reviews: 178, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop', tags: ['AI'], new: true, link: '/blog/best-ai-tools-developers' },
];

const allProducts = [...apps, ...templates, ...books, ...services, ...articles];

// ============================================
// COMPONENTS
// ============================================

// Product Card - Clean and minimal
function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const isFree = product.price === 0;
  const hasDiscount = 'oldPrice' in product && product.oldPrice;
  const discount = hasDiscount ? Math.round((1 - product.price / (product as any).oldPrice) * 100) : 0;

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
                <span className="text-xs text-zinc-400 line-through ml-1">₹{(product as any).oldPrice.toLocaleString()}</span>
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

// ============================================
// MAIN
// ============================================

export default function StoreClient() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

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
                <div className="font-bold text-zinc-900 dark:text-white">Store</div>
                <div className="text-[10px] text-zinc-500 -mt-0.5">by 7K Solutions</div>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search apps, templates, books..."
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-8 sm:p-12 mb-10">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-white/90 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Premium Digital Products
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Everything you need<br />to build & grow
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-md mx-auto lg:mx-0">
                Apps, templates, books & services — all crafted with care
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/apps" className="px-5 py-2.5 bg-white text-violet-700 font-semibold rounded-xl hover:bg-white/90 transition-colors">
                  Explore Apps
                </Link>
                <Link href="/templates" className="px-5 py-2.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  Browse Templates
                </Link>
              </div>
            </div>
            <div className="w-64 lg:w-80 flex-shrink-0">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <CategoryPill
                key={cat.id}
                cat={cat}
                isActive={category === cat.id}
                onClick={() => setCategory(cat.id)}
              />
            ))}
          </div>
        </section>

        {/* Dynamic Content */}
        {(category !== 'all' || search) ? (
          // Filtered Grid
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                {search ? `Results for "${search}"` : categories.find(c => c.id === category)?.name}
              </h2>
              <span className="text-sm text-zinc-500">{filtered.length} items</span>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <EmptyStateIllustration />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4 mb-2">No results found</h3>
                <p className="text-zinc-500 mb-4">Try a different search or category</p>
                <button
                  onClick={() => { setCategory('all'); setSearch(''); }}
                  className="px-5 py-2 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        ) : (
          // Default Sections
          <>
            <ProductSection title="Popular" emoji="🔥" products={hotProducts} viewAllLink="/store?filter=popular" />
            <ProductSection title="New Arrivals" emoji="✨" products={newProducts} viewAllLink="/store?filter=new" />
            <ProductSection title="Free Resources" emoji="🎁" products={freeProducts} viewAllLink="/apps" />
          </>
        )}

        {/* Quick Links */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { title: 'Free Apps', desc: '20+ tools', href: '/apps', gradient: 'from-blue-500 to-cyan-500', emoji: '📱' },
            { title: 'Templates', desc: 'Premium designs', href: '/templates', gradient: 'from-violet-500 to-purple-500', emoji: '🎨' },
            { title: 'Books', desc: 'Learn & grow', href: '/books', gradient: 'from-orange-500 to-amber-500', emoji: '📚' },
            { title: 'Services', desc: 'Get built', href: '/services', gradient: 'from-pink-500 to-rose-500', emoji: '💼' },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-6 h-full`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <span className="text-3xl mb-2 block">{item.emoji}</span>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
                <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </section>

        {/* CTA Banner */}
        <section className="rounded-2xl bg-zinc-900 dark:bg-zinc-800 p-8 sm:p-10 text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Need something custom?</h2>
          <p className="text-zinc-400 mb-6 max-w-md mx-auto">Get personalized websites, apps, and designs built just for you</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services" className="px-6 py-3 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-colors">
              View Services
            </Link>
            <a 
              href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-800 dark:bg-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: '20+', label: 'Free Apps', icon: Smartphone },
            { value: '50+', label: 'Templates', icon: Layout },
            { value: '10K+', label: 'Users', icon: Users },
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

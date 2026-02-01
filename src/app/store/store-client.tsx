'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  Sparkles,
  Code,
  BookOpen,
  Smartphone,
  Palette,
  Layers,
  TrendingUp,
  Award,
  Clock,
  Download,
  ExternalLink,
  Heart,
  ShoppingBag,
  Zap,
  Users,
  Globe,
  Briefcase,
  GraduationCap,
  Dumbbell,
  Wallet,
  Languages,
  FileText,
  Layout,
  PenTool,
  BarChart3,
  Gift,
  Percent,
  Flame,
  X,
  Menu,
  Home
} from 'lucide-react';

// ============================================
// DATA - All Products in the 7K Ecosystem
// ============================================

// Categories with icons
const categories = [
  { id: 'all', name: 'All', icon: Layers, color: 'from-violet-500 to-purple-500' },
  { id: 'apps', name: 'Apps', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
  { id: 'templates', name: 'Templates', icon: Layout, color: 'from-emerald-500 to-teal-500' },
  { id: 'books', name: 'Books', icon: BookOpen, color: 'from-orange-500 to-amber-500' },
  { id: 'services', name: 'Services', icon: Briefcase, color: 'from-pink-500 to-rose-500' },
  { id: 'blog', name: 'Articles', icon: FileText, color: 'from-indigo-500 to-blue-500' },
];

// Quick filter tags
const quickTags = [
  { id: 'new', label: '🆕 New', color: 'bg-emerald-500' },
  { id: 'popular', label: '🔥 Popular', color: 'bg-orange-500' },
  { id: 'free', label: '🎁 Free', color: 'bg-blue-500' },
  { id: 'discount', label: '💰 Deals', color: 'bg-pink-500' },
];

// Apps Data
const apps = [
  {
    id: 'life',
    name: '7K Life',
    description: 'All-in-one productivity hub',
    category: 'apps',
    subcategory: 'Productivity',
    price: 0,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    icon: Zap,
    tags: ['Habits', 'Tasks', 'Goals'],
    popular: true,
    new: false,
    link: '/apps/7k-life',
  },
  {
    id: 'fitness',
    name: '7K Fitness',
    description: 'Track workouts & health',
    category: 'apps',
    subcategory: 'Health',
    price: 0,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    icon: Dumbbell,
    tags: ['Workout', 'Health'],
    popular: true,
    new: false,
    link: '/apps/7k-fitness',
  },
  {
    id: 'money',
    name: '7K Money',
    description: 'Smart expense tracking',
    category: 'apps',
    subcategory: 'Finance',
    price: 0,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    icon: Wallet,
    tags: ['Budget', 'Finance'],
    popular: false,
    new: false,
    link: '/apps/7k-money',
  },
  {
    id: 'polyglot',
    name: '7K Polyglot',
    description: 'Learn languages fast',
    category: 'apps',
    subcategory: 'Learning',
    price: 0,
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    icon: Languages,
    tags: ['Languages', 'Education'],
    popular: false,
    new: true,
    link: '/apps/7k-polyglot',
  },
  {
    id: 'kanban',
    name: '7K Kanban',
    description: 'Visual project boards',
    category: 'apps',
    subcategory: 'Productivity',
    price: 0,
    rating: 4.6,
    reviews: 34,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    icon: Layout,
    tags: ['Projects', 'Tasks'],
    popular: false,
    new: false,
    link: '/apps/kanban',
  },
  {
    id: 'prompt',
    name: '7K Prompt',
    description: 'AI prompt library',
    category: 'apps',
    subcategory: 'AI Tools',
    price: 0,
    rating: 4.9,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    icon: Sparkles,
    tags: ['AI', 'ChatGPT'],
    popular: true,
    new: true,
    link: '/apps/prompt',
  },
  {
    id: 'student',
    name: '7K Student',
    description: 'Study planner & notes',
    category: 'apps',
    subcategory: 'Education',
    price: 0,
    rating: 4.7,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    icon: GraduationCap,
    tags: ['Study', 'Notes'],
    popular: false,
    new: false,
    link: '/apps/student',
  },
  {
    id: 'tools',
    name: '7K Tools',
    description: 'Developer utilities',
    category: 'apps',
    subcategory: 'Developer',
    price: 0,
    rating: 4.5,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    icon: Code,
    tags: ['Dev', 'Utilities'],
    popular: false,
    new: false,
    link: '/apps/tools',
  },
];

// Templates Data
const templates = [
  {
    id: 'saas-starter',
    name: 'SaaS Starter Pro',
    description: 'Complete SaaS kit with auth & billing',
    category: 'templates',
    subcategory: 'SaaS',
    price: 12000,
    originalPrice: 15000,
    rating: 4.9,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['Next.js', 'Auth', 'Stripe'],
    popular: true,
    new: false,
    link: '/templates/saas/preview-1',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Pro',
    description: 'Full shopping cart & checkout',
    category: 'templates',
    subcategory: 'E-Commerce',
    price: 10000,
    originalPrice: 12000,
    rating: 4.8,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    tags: ['Shop', 'Cart', 'Payments'],
    popular: true,
    new: false,
    link: '/templates/ecommerce/preview-1',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Creative',
    description: 'Stunning designer portfolio',
    category: 'templates',
    subcategory: 'Portfolio',
    price: 8000,
    rating: 4.9,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    tags: ['Portfolio', 'Creative'],
    popular: true,
    new: false,
    link: '/templates/portfolio/preview-1',
  },
  {
    id: 'hotel',
    name: 'Hotel Booking',
    description: 'Resort & hotel reservation',
    category: 'templates',
    subcategory: 'Booking',
    price: 15000,
    rating: 4.7,
    reviews: 12,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    tags: ['Booking', 'Calendar'],
    popular: false,
    new: true,
    link: '/templates/hotel-booking/preview-1',
  },
  {
    id: 'education',
    name: 'Education LMS',
    description: 'Online course platform',
    category: 'templates',
    subcategory: 'Education',
    price: 12000,
    rating: 4.8,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
    tags: ['Courses', 'LMS'],
    popular: false,
    new: false,
    link: '/templates/education/preview-1',
  },
  {
    id: 'agency',
    name: 'Agency Studio',
    description: 'Creative agency website',
    category: 'templates',
    subcategory: 'Agency',
    price: 9000,
    rating: 4.9,
    reviews: 21,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    tags: ['Agency', 'Team'],
    popular: false,
    new: false,
    link: '/templates/agency/preview-1',
  },
];

// Books Data
const books = [
  {
    id: 'ethos',
    name: 'Ethos',
    description: 'Design philosophy & culture',
    category: 'books',
    subcategory: 'Design',
    price: 499,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/ethos-cover.png',
    tags: ['Design', 'Philosophy'],
    popular: true,
    new: false,
    link: '/books/ethos',
  },
  {
    id: 'kupgames',
    name: 'The Kup Games',
    description: 'Mystery thriller novel',
    category: 'books',
    subcategory: 'Fiction',
    price: 599,
    rating: 4.8,
    reviews: 38,
    image: '/images/books/the kupgames-cover.png',
    tags: ['Mystery', 'Thriller'],
    popular: true,
    new: false,
    link: '/books/kup-games',
  },
  {
    id: 'somaiya',
    name: 'Somaiya Manual',
    description: 'College survival guide',
    category: 'books',
    subcategory: 'Guide',
    price: 299,
    rating: 5.0,
    reviews: 12,
    image: '/images/books/The Somaiya Survival Manual-cover.png',
    tags: ['College', 'Guide'],
    popular: false,
    new: true,
    link: '/books/somaiya-manual',
  },
];

// Services Data
const services = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Custom websites & web apps',
    category: 'services',
    subcategory: 'Development',
    price: 3000,
    priceLabel: 'From',
    rating: 5.0,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ['Next.js', 'React'],
    popular: true,
    new: false,
    link: '/services',
  },
  {
    id: 'app-dev',
    name: 'App Development',
    description: 'PWA & mobile apps',
    category: 'services',
    subcategory: 'Development',
    price: 10000,
    priceLabel: 'From',
    rating: 4.9,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    tags: ['PWA', 'Mobile'],
    popular: false,
    new: false,
    link: '/services',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    description: 'Beautiful interfaces',
    category: 'services',
    subcategory: 'Design',
    price: 5000,
    priceLabel: 'From',
    rating: 5.0,
    reviews: 22,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    tags: ['Figma', 'Design'],
    popular: true,
    new: false,
    link: '/services',
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    description: 'Rank higher on Google',
    category: 'services',
    subcategory: 'Marketing',
    price: 2000,
    priceLabel: 'From',
    rating: 4.8,
    reviews: 19,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
    tags: ['SEO', 'Growth'],
    popular: false,
    new: true,
    link: '/services',
  },
];

// Blog Articles Data
const articles = [
  {
    id: 'nextjs-15',
    name: 'Getting Started with Next.js 15',
    description: 'Complete beginner guide',
    category: 'blog',
    subcategory: 'Tutorial',
    price: 0,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    tags: ['Next.js', 'React'],
    popular: true,
    new: false,
    link: '/blog/getting-started-nextjs-15',
  },
  {
    id: 'student-money',
    name: 'How Students Can Earn Money',
    description: 'No investment required',
    category: 'blog',
    subcategory: 'Career',
    price: 0,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    tags: ['Career', 'Students'],
    popular: true,
    new: false,
    link: '/blog/how-students-earn-money-skills-no-investment',
  },
  {
    id: 'design-trends',
    name: 'Web Design Trends 2026',
    description: 'What\'s hot this year',
    category: 'blog',
    subcategory: 'Design',
    price: 0,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    tags: ['Design', 'Trends'],
    popular: false,
    new: true,
    link: '/blog/web-design-trends-2026',
  },
  {
    id: 'ai-tools',
    name: 'Best AI Tools for Developers',
    description: 'Boost your productivity',
    category: 'blog',
    subcategory: 'AI',
    price: 0,
    rating: 4.9,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    tags: ['AI', 'Tools'],
    popular: true,
    new: true,
    link: '/blog/best-ai-tools-developers',
  },
];

// Combine all products
const allProducts = [...apps, ...templates, ...books, ...services, ...articles];

// Stats
const stats = [
  { icon: Smartphone, value: '20+', label: 'Free Apps' },
  { icon: Users, value: '10K+', label: 'Happy Users' },
  { icon: Layout, value: '50+', label: 'Templates' },
  { icon: Star, value: '4.9', label: 'Avg Rating' },
];

// ============================================
// COMPONENTS
// ============================================

// Horizontal Scroll Section
function HorizontalScrollSection({ 
  title, 
  products, 
  icon: Icon,
  viewAllLink,
  bgColor = 'bg-white dark:bg-zinc-900'
}: { 
  title: string; 
  products: typeof allProducts;
  icon?: React.ElementType;
  viewAllLink?: string;
  bgColor?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            </button>
            {viewAllLink && (
              <Link 
                href={viewAllLink}
                className="ml-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Scrollable Products */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card
function ProductCard({ product, compact = false }: { product: typeof allProducts[0]; compact?: boolean }) {
  const isFree = product.price === 0;
  const hasDiscount = 'originalPrice' in product && product.originalPrice;
  const discount = hasDiscount ? Math.round((1 - product.price / (product as any).originalPrice) * 100) : 0;

  return (
    <Link href={product.link} className={`group ${compact ? 'flex-shrink-0 w-72 snap-start' : ''}`}>
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
            {product.new && (
              <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                New
              </span>
            )}
            {product.popular && (
              <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <Flame className="w-3 h-3" /> Hot
              </span>
            )}
            {hasDiscount && (
              <span className="px-2 py-0.5 bg-pink-500 text-white text-xs font-semibold rounded-full">
                -{discount}%
              </span>
            )}
            {isFree && (
              <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
                Free
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full capitalize">
              {product.subcategory}
            </span>
          </div>

          {/* Wishlist */}
          <button 
            className="absolute bottom-2 right-2 p-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-50 dark:hover:bg-pink-900/50"
            onClick={(e) => { e.preventDefault(); }}
          >
            <Heart className="w-4 h-4 text-zinc-500 hover:text-pink-500 transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.slice(0, 2).map((tag, i) => (
              <span 
                key={i}
                className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 line-clamp-1">
            {product.description}
          </p>

          {/* Rating & Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-zinc-900 dark:text-white">{product.rating}</span>
              <span className="text-xs text-zinc-400">({product.reviews})</span>
            </div>

            <div className="text-right">
              {'priceLabel' in product && (
                <span className="text-xs text-zinc-400 mr-1">{(product as any).priceLabel}</span>
              )}
              <span className={`font-bold ${isFree ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-white'}`}>
                {isFree ? 'Free' : `₹${product.price.toLocaleString('en-IN')}`}
              </span>
              {hasDiscount && (
                <span className="text-xs text-zinc-400 line-through ml-1">
                  ₹{(product as any).originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Category Icon Button
function CategoryIcon({ category, isActive, onClick }: { 
  category: typeof categories[0]; 
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all min-w-[100px] ${
        isActive 
          ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg' 
          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        isActive ? 'bg-white/20' : 'bg-white dark:bg-zinc-900'
      }`}>
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : ''}`} />
      </div>
      <span className="text-sm font-medium">{category.name}</span>
    </button>
  );
}

// Banner Component
function PromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-8 md:p-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Premium Digital Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Innovative Marketplace 🚀
          </h2>
          <p className="text-white/80 text-lg max-w-md">
            Templates, Apps, Books & Services — Everything you need to build & grow
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/templates"
            className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2"
          >
            Browse Templates <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/apps"
            className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
          >
            Explore Apps
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
    </div>
  );
}

// Small Promo Cards
function PromoCard({ title, subtitle, color, link }: { title: string; subtitle: string; color: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className={`relative overflow-hidden rounded-2xl ${color} p-6 h-full hover:scale-[1.02] transition-transform`}>
        <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
        <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-white/60" />
      </div>
    </Link>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function StoreClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Tag filter
    if (activeTag === 'new') {
      filtered = filtered.filter(p => p.new);
    } else if (activeTag === 'popular') {
      filtered = filtered.filter(p => p.popular);
    } else if (activeTag === 'free') {
      filtered = filtered.filter(p => p.price === 0);
    } else if (activeTag === 'discount') {
      filtered = filtered.filter(p => 'originalPrice' in p);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, activeTag, searchQuery]);

  // Section-specific products
  const hotOffers = allProducts.filter(p => p.popular).slice(0, 8);
  const newArrivals = allProducts.filter(p => p.new).slice(0, 8);
  const freeProducts = allProducts.filter(p => p.price === 0).slice(0, 8);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Top Promo Bar */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4" /> TOP-1 Marketplace
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:flex items-center gap-2">
            <Percent className="w-4 h-4" /> 20% off first order
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:flex items-center gap-2">
            <Gift className="w-4 h-4" /> Get rewards for referrals
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                7K
              </div>
              <span className="font-bold text-xl text-zinc-900 dark:text-white hidden sm:inline">Store</span>
            </Link>

            {/* Catalog Button - Desktop */}
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors">
              <Menu className="w-4 h-4" />
              Catalog
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search products, apps, templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-0 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-violet-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-zinc-400 hover:text-zinc-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link href="/" className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex items-center gap-2 pb-3 overflow-x-auto scrollbar-hide">
            {quickTags.map(tag => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTag === tag.id 
                    ? `${tag.color} text-white` 
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {tag.label}
              </button>
            ))}
            <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
            {['Productivity', 'Design', 'Finance', 'Education', 'Health'].map(cat => (
              <button
                key={cat}
                className="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white whitespace-nowrap transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Banner */}
            <div className="lg:col-span-2">
              <PromoBanner />
            </div>
            
            {/* Side Cards */}
            <div className="flex flex-col gap-4">
              <PromoCard 
                title="Free Apps" 
                subtitle="20+ productivity tools" 
                color="bg-gradient-to-br from-blue-500 to-cyan-500" 
                link="/apps"
              />
              <PromoCard 
                title="Premium Templates" 
                subtitle="Save 20% this week" 
                color="bg-gradient-to-br from-pink-500 to-rose-500" 
                link="/templates"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-6 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map(category => (
              <CategoryIcon
                key={category.id}
                category={category}
                isActive={selectedCategory === category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setActiveTag(null);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Offers Section */}
      <HorizontalScrollSection 
        title="🔥 Hot Offers" 
        products={hotOffers}
        icon={TrendingUp}
        viewAllLink="/store?filter=popular"
      />

      {/* Mid Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">💼 Need Custom Development?</h3>
              <p className="text-white/80 mb-4">Get personalized websites, apps & design services</p>
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <HorizontalScrollSection 
        title="🆕 New Arrivals" 
        products={newArrivals}
        icon={Sparkles}
        viewAllLink="/store?filter=new"
        bgColor="bg-zinc-50 dark:bg-zinc-950"
      />

      {/* Free Products */}
      <HorizontalScrollSection 
        title="🎁 Free Products" 
        products={freeProducts}
        icon={Gift}
        viewAllLink="/apps"
      />

      {/* All Products Grid (When filtered) */}
      {(selectedCategory !== 'all' || activeTag || searchQuery) && (
        <section className="py-8 px-4 bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                {searchQuery ? `Search results for "${searchQuery}"` : 
                 activeTag ? `${quickTags.find(t => t.id === activeTag)?.label} Products` :
                 categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-sm text-zinc-500">{filteredProducts.length} products</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">No products found</h3>
                <p className="text-zinc-500 mb-4">Try different filters or search terms</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setActiveTag(null);
                    setSearchQuery('');
                  }}
                  className="px-6 py-2 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">7K Store — Your Digital Product Hub</h2>
            <p className="text-white/70">Trusted by thousands of creators & developers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-12 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Main Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/apps" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Smartphone className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white font-bold text-lg">Free Apps</h3>
                  <p className="text-white/70 text-sm">20+ productivity tools</p>
                </div>
              </div>
            </Link>
            <Link href="/templates" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500 to-purple-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Layout className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white font-bold text-lg">Templates</h3>
                  <p className="text-white/70 text-sm">Premium web templates</p>
                </div>
              </div>
            </Link>
            <Link href="/books" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-amber-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <BookOpen className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white font-bold text-lg">eBooks</h3>
                  <p className="text-white/70 text-sm">Design & fiction books</p>
                </div>
              </div>
            </Link>
            <Link href="/blog" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 to-rose-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <FileText className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white font-bold text-lg">Articles</h3>
                  <p className="text-white/70 text-sm">Tutorials & guides</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center font-bold">
                  7K
                </div>
                <span className="font-bold text-xl">Store</span>
              </div>
              <p className="text-zinc-400 text-sm">Premium digital products by Kunal Chheda. Made in India 🇮🇳</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/apps" className="hover:text-white transition-colors">Apps</Link></li>
                <li><Link href="/templates" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="/books" className="hover:text-white transition-colors">Books</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="https://wa.me/918591247148" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:7kmindbeatss@gmail.com" className="hover:text-white transition-colors">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            © 2026 7K Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

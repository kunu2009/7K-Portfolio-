'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter,
  Grid3X3,
  LayoutList,
  Star,
  ArrowRight,
  Sparkles,
  Code,
  BookOpen,
  Smartphone,
  Palette,
  Layers,
  CheckCircle,
  TrendingUp,
  Award,
  Shield,
  Clock,
  Download,
  ExternalLink,
  Package,
  ChevronLeft,
  X,
  SlidersHorizontal,
  Heart
} from 'lucide-react';

// Product categories
const categories = [
  { id: 'all', name: 'All Products', icon: Layers, count: 17 },
  { id: 'templates', name: 'Templates', icon: Code, count: 6 },
  { id: 'books', name: 'eBooks', icon: BookOpen, count: 3 },
  { id: 'apps', name: 'Apps', icon: Smartphone, count: 4 },
  { id: 'services', name: 'Services', icon: Palette, count: 4 },
];

// Price ranges
const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'free', label: 'Free', min: 0, max: 0 },
  { id: 'under5k', label: 'Under ₹5,000', min: 1, max: 4999 },
  { id: '5k-10k', label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { id: 'above10k', label: 'Above ₹10,000', min: 10001, max: Infinity },
];

// Products data
const products = [
  // Templates
  {
    id: 't1',
    name: 'SaaS Starter Kit',
    category: 'templates',
    type: 'Template',
    price: 12000,
    originalPrice: 15000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 24,
    tags: ['Next.js', 'React', 'Tailwind'],
    featured: true,
    bestseller: true,
    description: 'Complete SaaS template with auth, dashboard & billing',
    link: '/templates/saas/preview-1',
  },
  {
    id: 't2',
    name: 'E-Commerce Pro',
    category: 'templates',
    type: 'Template',
    price: 10000,
    originalPrice: 12000,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 18,
    tags: ['Shopping', 'Stripe', 'Cart'],
    featured: true,
    description: 'Full-featured e-commerce with product management',
    link: '/templates/ecommerce/preview-1',
  },
  {
    id: 't3',
    name: 'Portfolio Creative',
    category: 'templates',
    type: 'Template',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 32,
    tags: ['Portfolio', 'Animations'],
    bestseller: true,
    description: 'Stunning portfolio for designers & developers',
    link: '/templates/portfolio/preview-1',
  },
  {
    id: 't4',
    name: 'Hotel Booking',
    category: 'templates',
    type: 'Template',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 12,
    tags: ['Booking', 'Calendar'],
    featured: true,
    description: 'Complete hotel/resort booking with availability',
    link: '/templates/hotel-booking/preview-1',
  },
  {
    id: 't5',
    name: 'Education Platform',
    category: 'templates',
    type: 'Template',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 15,
    tags: ['LMS', 'Courses'],
    description: 'Online learning platform with courses',
    link: '/templates/education/preview-1',
  },
  {
    id: 't6',
    name: 'Agency Template',
    category: 'templates',
    type: 'Template',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 21,
    tags: ['Agency', 'Modern'],
    description: 'Professional agency/studio website',
    link: '/templates/agency/preview-1',
  },
  
  // eBooks
  {
    id: 'b1',
    name: 'Ethos',
    category: 'books',
    type: 'eBook',
    price: 499,
    image: '/images/books/ethos-cover.png',
    rating: 4.9,
    reviews: 45,
    tags: ['Design', 'Philosophy'],
    featured: true,
    bestseller: true,
    description: 'Design philosophy and cultural aesthetics',
    link: '/books/ethos',
  },
  {
    id: 'b2',
    name: 'The Kup Games',
    category: 'books',
    type: 'eBook',
    price: 599,
    image: '/images/books/the kupgames-cover.png',
    rating: 4.8,
    reviews: 38,
    tags: ['Mystery', 'Thriller'],
    bestseller: true,
    description: 'A thrilling mystery novel',
    link: '/books/kup-games',
  },
  {
    id: 'b3',
    name: 'Somaiya Manual',
    category: 'books',
    type: 'eBook',
    price: 299,
    image: '/images/books/The Somaiya Survival Manual-cover.png',
    rating: 5.0,
    reviews: 12,
    tags: ['Guide', 'College'],
    featured: true,
    description: 'The ultimate college survival guide',
    link: '/books/somaiya-manual',
  },
  
  // Apps
  {
    id: 'a1',
    name: '7K Life',
    category: 'apps',
    type: 'App',
    price: 0,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 156,
    tags: ['Productivity', 'Habits'],
    featured: true,
    bestseller: true,
    description: 'All-in-one productivity for habits & goals',
    link: '/apps/7k-life',
  },
  {
    id: 'a2',
    name: '7K Fitness',
    category: 'apps',
    type: 'App',
    price: 0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 89,
    tags: ['Fitness', 'Health'],
    bestseller: true,
    description: 'Track workouts & achieve fitness goals',
    link: '/apps/7k-fitness',
  },
  {
    id: 'a3',
    name: '7K Money',
    category: 'apps',
    type: 'App',
    price: 0,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 67,
    tags: ['Finance', 'Budget'],
    description: 'Track expenses & manage budgets',
    link: '/apps/7k-money',
  },
  {
    id: 'a4',
    name: '7K Polyglot',
    category: 'apps',
    type: 'App',
    price: 0,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 45,
    tags: ['Languages', 'Learning'],
    description: 'Learn new languages interactively',
    link: '/apps/7k-polyglot',
  },
  
  // Services
  {
    id: 's1',
    name: 'Web Development',
    category: 'services',
    type: 'Service',
    price: 3000,
    priceLabel: 'From',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    rating: 5.0,
    reviews: 28,
    tags: ['Next.js', 'Full-Stack'],
    featured: true,
    description: 'Custom website with modern tech',
    link: '/services',
  },
  {
    id: 's2',
    name: 'App Development',
    category: 'services',
    type: 'Service',
    price: 10000,
    priceLabel: 'From',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 15,
    tags: ['PWA', 'Mobile'],
    description: 'Progressive Web Apps & mobile apps',
    link: '/services',
  },
  {
    id: 's3',
    name: 'UI/UX Design',
    category: 'services',
    type: 'Service',
    price: 5000,
    priceLabel: 'From',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    rating: 5.0,
    reviews: 22,
    tags: ['Figma', 'Design'],
    description: 'Beautiful UI & smooth UX design',
    link: '/services',
  },
  {
    id: 's4',
    name: 'SEO Optimization',
    category: 'services',
    type: 'Service',
    price: 2000,
    priceLabel: 'From',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 19,
    tags: ['SEO', 'Analytics'],
    description: 'Improve rankings & performance',
    link: '/services',
  },
];

// Trust badges
const trustBadges = [
  { icon: Shield, text: 'Secure Payments' },
  { icon: Download, text: 'Instant Access' },
  { icon: Clock, text: 'Lifetime Updates' },
  { icon: Award, text: 'Premium Quality' },
];

// Product Card Component
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group"
    >
      <Link href={product.link}>
        <div className="relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {product.bestseller && (
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
                  <TrendingUp className="w-3 h-3" />
                  Best
                </span>
              )}
              {product.featured && !product.bestseller && (
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
              {product.price === 0 && (
                <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
                  Free
                </span>
              )}
            </div>

            {/* Type Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full shadow">
                {product.type}
              </span>
            </div>

            {/* Quick View Button */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-1.5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                View
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {product.tags.slice(0, 2).map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 line-clamp-1">
              {product.description}
            </p>

            {/* Rating & Price Row */}
            <div className="flex items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium text-zinc-900 dark:text-white">{product.rating}</span>
                <span className="text-xs text-zinc-400">({product.reviews})</span>
              </div>

              {/* Price */}
              <div className="text-right">
                {product.priceLabel && (
                  <span className="text-xs text-zinc-400 mr-1">{product.priceLabel}</span>
                )}
                <span className={`font-bold ${product.price === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-white'}`}>
                  {product.price === 0 ? 'Free' : `₹${product.price.toLocaleString('en-IN')}`}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-zinc-400 line-through ml-1.5">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function StoreClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Memoized filter function for performance
  const filteredProducts = useMemo(() => {
    const priceRange = priceRanges.find(p => p.id === selectedPriceRange) || priceRanges[0];
    
    return products
      .filter(p => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        
        // Price filter
        if (selectedPriceRange === 'free' && p.price !== 0) return false;
        if (selectedPriceRange !== 'all' && selectedPriceRange !== 'free') {
          if (p.price < priceRange.min || p.price > priceRange.max) return false;
        }
        
        // Search filter
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.tags.some(t => t.toLowerCase().includes(query)) ||
            p.type.toLowerCase().includes(query)
          );
        }
        
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-low': return a.price - b.price;
          case 'price-high': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          case 'popular': return b.reviews - a.reviews;
          default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
      });
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy]);

  const clearFilters = useCallback(() => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
    setSortBy('featured');
  }, []);

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || searchQuery;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back & Logo */}
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
              <Link href="/store" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  7K
                </div>
                <span className="font-semibold text-zinc-900 dark:text-white">Store</span>
              </Link>
            </div>

            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-0 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search - Mobile */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 border-0 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-zinc-900 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg text-zinc-900 dark:text-white">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5 text-zinc-500" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const IconComponent = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-primary text-white'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4" />
                            {cat.name}
                          </span>
                          <span className="text-xs opacity-70">{cat.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRange(range.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
                          selectedPriceRange === range.id
                            ? 'bg-primary text-white'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Digital Products
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Everything you need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                build & grow
              </span>
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Templates, apps, eBooks & services — all in one place
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {trustBadges.map((badge, i) => {
                const IconComponent = badge.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <IconComponent className="w-4 h-4 text-violet-500" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Categories
                  </h3>
                  <div className="space-y-1.5">
                    {categories.map((cat) => {
                      const IconComponent = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-primary text-white shadow-lg shadow-primary/25'
                              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <IconComponent className="w-4 h-4" />
                            {cat.name}
                          </span>
                          <span className={`text-xs ${selectedCategory === cat.id ? 'text-white/70' : 'text-zinc-400'}`}>
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Price Range</h3>
                  <div className="space-y-1.5">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRange(range.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all ${
                          selectedPriceRange === range.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/25'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white">
                  <h3 className="font-semibold mb-2">Need Custom Work?</h3>
                  <p className="text-sm text-white/80 mb-4">Let's build something amazing together</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white text-violet-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    View Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white">{filteredProducts.length}</span> products
                  </p>
                  
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      <X className="w-3 h-3" />
                      Clear filters
                    </button>
                  )}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 focus:ring-2 focus:ring-primary/50"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <Package className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                    Try adjusting your filters or search
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Something Custom?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Can't find what you're looking for? Let's create something perfect for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Browse Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/918591247148?text=Hi%20Kunal!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                7K
              </div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Premium digital products by Kunal Chheda
              </span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/templates" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Templates
              </Link>
              <Link href="/apps" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Apps
              </Link>
              <Link href="/books" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Books
              </Link>
            </nav>
          </div>
          
          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
            © 2026 7K Solutions. Made in India with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}

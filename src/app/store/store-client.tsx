'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter,
  Grid3X3,
  List,
  ShoppingCart,
  Star,
  Heart,
  Eye,
  Download,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Code,
  BookOpen,
  Smartphone,
  Palette,
  Layers,
  Zap,
  CheckCircle,
  Tag,
  TrendingUp,
  Award,
  Shield,
  Clock,
  IndianRupee,
  ExternalLink,
  Package,
  ChevronLeft
} from 'lucide-react';

// Product categories
const categories = [
  { id: 'all', name: 'All Products', icon: Grid3X3, count: 30 },
  { id: 'templates', name: 'Web Templates', icon: Code, count: 12 },
  { id: 'books', name: 'eBooks', icon: BookOpen, count: 5 },
  { id: 'apps', name: 'Apps & Tools', icon: Smartphone, count: 8 },
  { id: 'services', name: 'Services', icon: Palette, count: 5 },
];

// Featured products data
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
    description: 'Complete SaaS template with auth, dashboard, billing & more',
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
    tags: ['Next.js', 'Shopping Cart', 'Stripe'],
    featured: true,
    description: 'Full-featured e-commerce template with product management',
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
    tags: ['Portfolio', 'Animations', 'Modern'],
    bestseller: true,
    description: 'Stunning portfolio template for designers & developers',
    link: '/templates/portfolio/preview-1',
  },
  {
    id: 't4',
    name: 'Hotel Booking System',
    category: 'templates',
    type: 'Template',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 12,
    tags: ['Booking', 'Calendar', 'Payments'],
    featured: true,
    description: 'Complete hotel/resort booking template with availability',
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
    tags: ['LMS', 'Courses', 'Dashboard'],
    description: 'Online learning platform with course management',
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
    tags: ['Agency', 'Services', 'Team'],
    description: 'Professional agency/studio website template',
    link: '/templates/agency/preview-1',
  },
  
  // eBooks
  {
    id: 'b1',
    name: 'Ethos - Design Philosophy',
    category: 'books',
    type: 'eBook',
    price: 499,
    image: '/images/portfolios/lavender-skies-cover.jpg',
    rating: 4.9,
    reviews: 45,
    tags: ['Design', 'Philosophy', 'Culture'],
    featured: true,
    bestseller: true,
    description: 'A deep dive into design philosophy and cultural aesthetics',
    link: '/books',
  },
  {
    id: 'b2',
    name: 'The Kup Games',
    category: 'books',
    type: 'eBook',
    price: 599,
    image: '/images/portfolios/lavender-skies-cover.jpg',
    rating: 4.8,
    reviews: 38,
    tags: ['Mystery', 'Thriller', 'Fiction'],
    bestseller: true,
    description: 'A thrilling mystery novel that keeps you guessing',
    link: '/books',
  },
  {
    id: 'b3',
    name: 'The 7K Framework',
    category: 'books',
    type: 'eBook',
    price: 799,
    image: '/images/portfolios/lavender-skies-cover.jpg',
    rating: 5.0,
    reviews: 12,
    tags: ['Business', 'Web Dev', 'Guide'],
    featured: true,
    comingSoon: true,
    description: 'Build premium websites that sell - coming soon!',
    link: '/books',
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
    tags: ['Productivity', 'Habits', 'Goals'],
    featured: true,
    bestseller: true,
    description: 'All-in-one productivity app for habits, tasks & goals',
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
    tags: ['Fitness', 'Workout', 'Health'],
    bestseller: true,
    description: 'Track workouts, plan exercises & achieve fitness goals',
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
    tags: ['Finance', 'Budget', 'Expense'],
    description: 'Track expenses, manage budgets & reach financial goals',
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
    tags: ['Languages', 'Learning', 'Education'],
    description: 'Learn new languages with interactive lessons',
    link: '/apps/7k-polyglot',
  },
  
  // Services
  {
    id: 's1',
    name: 'Web Development',
    category: 'services',
    type: 'Service',
    price: 3000,
    priceLabel: 'Starting from',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    rating: 5.0,
    reviews: 28,
    tags: ['Next.js', 'React', 'Full-Stack'],
    featured: true,
    description: 'Custom website development with modern technologies',
    link: '/services',
  },
  {
    id: 's2',
    name: 'App Development',
    category: 'services',
    type: 'Service',
    price: 10000,
    priceLabel: 'Starting from',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 15,
    tags: ['PWA', 'Mobile', 'Cross-Platform'],
    description: 'Progressive Web Apps & mobile app development',
    link: '/services',
  },
  {
    id: 's3',
    name: 'UI/UX Design',
    category: 'services',
    type: 'Service',
    price: 5000,
    priceLabel: 'Starting from',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    rating: 5.0,
    reviews: 22,
    tags: ['Figma', 'Design System', 'Prototyping'],
    description: 'User interface & experience design for web & mobile',
    link: '/services',
  },
  {
    id: 's4',
    name: 'SEO Optimization',
    category: 'services',
    type: 'Service',
    price: 2000,
    priceLabel: 'Starting from',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 19,
    tags: ['SEO', 'Analytics', 'Performance'],
    description: 'Improve search rankings & website performance',
    link: '/services',
  },
];

// Trust badges
const trustBadges = [
  { icon: Shield, text: 'Secure Payments', subtext: 'UPI, Cards, Net Banking' },
  { icon: Download, text: 'Instant Access', subtext: 'Download immediately' },
  { icon: Clock, text: 'Lifetime Updates', subtext: 'Free updates forever' },
  { icon: Award, text: 'Premium Quality', subtext: 'Handcrafted with care' },
];

export default function StoreClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  // Filter products
  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.reviews - a.reviews;
      return 0;
    });

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Digital Products
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Welcome to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                7K Store
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Discover premium templates, apps, eBooks & professional services. 
              Everything you need to build your digital presence.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates, apps, books, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
              />
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{badge.text}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{badge.subtext}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <cat.icon className="w-5 h-5" />
                        {cat.name}
                      </span>
                      <span className={`text-sm ${
                        selectedCategory === cat.id ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Price Range */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Price Range
                  </h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setPriceRange([0, 20000])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${priceRange[0] === 0 && priceRange[1] === 20000 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      All Prices
                    </button>
                    <button 
                      onClick={() => setPriceRange([0, 0])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${priceRange[0] === 0 && priceRange[1] === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      Free
                    </button>
                    <button 
                      onClick={() => setPriceRange([1, 5000])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${priceRange[0] === 1 && priceRange[1] === 5000 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      Under ₹5,000
                    </button>
                    <button 
                      onClick={() => setPriceRange([5000, 10000])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${priceRange[0] === 5000 && priceRange[1] === 10000 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      ₹5,000 - ₹10,000
                    </button>
                    <button 
                      onClick={() => setPriceRange([10000, 20000])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${priceRange[0] === 10000 && priceRange[1] === 20000 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      ₹10,000+
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                      <div className="text-2xl font-bold text-blue-600">30+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Products</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Happy Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="text-gray-600 dark:text-gray-300">
                  Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredProducts.length}</span> products
                </div>
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  
                  {/* View Mode */}
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={product.link}>
                        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden ${
                          viewMode === 'list' ? 'flex flex-row' : ''
                        }`}>
                          {/* Image */}
                          <div className={`relative overflow-hidden ${
                            viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-[4/3]'
                          }`}>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                              {product.bestseller && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                  <TrendingUp className="w-3 h-3" /> Bestseller
                                </span>
                              )}
                              {product.featured && !product.bestseller && (
                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                  <Sparkles className="w-3 h-3" /> Featured
                                </span>
                              )}
                              {product.comingSoon && (
                                <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                            {/* Type Badge */}
                            <div className="absolute top-3 right-3">
                              <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-700 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded-full">
                                {product.type}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className={`p-5 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.tags.slice(0, 3).map((tag, i) => (
                                <span 
                                  key={i}
                                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                              {product.description}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-gray-900 dark:text-white">{product.rating}</span>
                              </div>
                              <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                            </div>

                            {/* Price & CTA */}
                            <div className="flex items-center justify-between">
                              <div>
                                {product.priceLabel && (
                                  <span className="text-xs text-gray-500 dark:text-gray-400 block">{product.priceLabel}</span>
                                )}
                                <div className="flex items-center gap-2">
                                  <span className={`text-xl font-bold ${product.price === 0 ? 'text-green-600' : 'text-gray-900 dark:text-white'}`}>
                                    {product.price === 0 ? 'Free' : `₹${product.price.toLocaleString()}`}
                                  </span>
                                  {product.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through">
                                      ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                                View <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your filters or search query</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      setPriceRange([0, 20000]);
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Can't find what you're looking for? Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/918591247148?text=Hi%20Kunal!%20I%20need%20a%20custom%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Contact on WhatsApp
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-lg">
              7K
            </div>
            <span className="text-xl font-bold">Store</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Premium digital products by Kunal Chheda | Made in India with ❤️
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/templates" className="hover:text-white transition">Templates</Link>
            <Link href="/apps" className="hover:text-white transition">Apps</Link>
            <Link href="/books" className="hover:text-white transition">Books</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500">
            © 2026 7K Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

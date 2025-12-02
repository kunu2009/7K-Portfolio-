'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Tag, TrendingUp, BookOpen, Sparkles } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime?: number;
  published: boolean;
  content: string;
}

interface BlogSectionProps {
  featured?: boolean;
  limit?: number;
  showCategories?: boolean;
  variant?: 'default' | 'grid' | 'minimal';
  posts?: BlogPost[];
}

// Fallback posts with diverse categories and gradient placeholders
const fallbackPosts: BlogPost[] = [
  {
    slug: 'getting-started-nextjs-15',
    title: 'Getting Started with Next.js 15: Complete Guide',
    description: 'Learn everything you need to know about Next.js 15, including the new features, breaking changes, and migration tips.',
    date: '2025-01-15',
    author: 'Kunal Chheda',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Tutorial'],
    image: '/images/blog/nextjs-15.jpg',
    readingTime: 8,
    published: true,
    content: ''
  },
  {
    slug: 'how-students-earn-money-skills-no-investment',
    title: 'How Students Can Earn Money with Skills (No Investment)',
    description: 'Practical ways for college students to start earning money using skills they already have or can learn quickly.',
    date: '2025-01-12',
    author: 'Kunal Chheda',
    category: 'Student Life',
    tags: ['Money', 'Skills', 'Students'],
    image: '/images/blog/student-money.jpg',
    readingTime: 7,
    published: true,
    content: ''
  },
  {
    slug: 'web-design-trends-2025',
    title: 'Top Web Design Trends for 2025',
    description: 'Explore the latest web design trends that are shaping the digital landscape in 2025.',
    date: '2025-01-10',
    author: 'Kunal Chheda',
    category: 'Design',
    tags: ['Design', 'Trends', 'UI/UX'],
    image: '/images/blog/design-trends.jpg',
    readingTime: 6,
    published: true,
    content: ''
  }
];

// Category color mapping for gradient placeholders
const categoryColors: Record<string, string> = {
  'Web Development': 'from-blue-500/30 to-cyan-500/20',
  'Design': 'from-purple-500/30 to-pink-500/20',
  'Student Life': 'from-green-500/30 to-emerald-500/20',
  'Technology': 'from-orange-500/30 to-red-500/20',
  'College': 'from-yellow-500/30 to-amber-500/20',
  'default': 'from-[#C5B8A5]/20 to-zinc-900'
};

export default function BlogSection({ 
  featured = false, 
  limit = 3,
  showCategories = true,
  variant = 'default',
  posts: propPosts
}: BlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use posts from props if provided, otherwise use fallback
    const postsToUse = propPosts || fallbackPosts;
    
    // Ensure diverse categories - pick one from each category if possible
    const categorizedPosts: Record<string, BlogPost[]> = {};
    postsToUse.forEach(post => {
      if (!categorizedPosts[post.category]) {
        categorizedPosts[post.category] = [];
      }
      categorizedPosts[post.category].push(post);
    });

    // Pick posts from different categories for diversity
    const diversePosts: BlogPost[] = [];
    const categoryList = Object.keys(categorizedPosts);
    let categoryIndex = 0;
    
    while (diversePosts.length < limit && categoryIndex < categoryList.length * limit) {
      const category = categoryList[categoryIndex % categoryList.length];
      const categoryPosts = categorizedPosts[category];
      const postIndex = Math.floor(categoryIndex / categoryList.length);
      
      if (categoryPosts && categoryPosts[postIndex] && !diversePosts.includes(categoryPosts[postIndex])) {
        diversePosts.push(categoryPosts[postIndex]);
      }
      categoryIndex++;
    }

    // If we don't have enough diverse posts, fill with remaining
    if (diversePosts.length < limit) {
      postsToUse.forEach(post => {
        if (diversePosts.length < limit && !diversePosts.includes(post)) {
          diversePosts.push(post);
        }
      });
    }

    const allCategories = ['all', ...Array.from(new Set(postsToUse.map(p => p.category)))];
    setCategories(allCategories);
    setPosts(diversePosts.slice(0, limit));
    setLoading(false);
  }, [limit, propPosts]);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content?.trim().split(/\s+/).length || 0;
    return Math.max(Math.ceil(words / wordsPerMinute), 3);
  };

  const getCategoryGradient = (category: string) => {
    return categoryColors[category] || categoryColors['default'];
  };

  if (variant === 'minimal') {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-[#C5B8A5]" />
                <span className="text-sm font-medium text-[#C5B8A5]">Latest Insights</span>
              </div>
              <h2 className="text-4xl font-bold text-white">From the Blog</h2>
            </div>
            <Link 
              href="/blog"
              className="flex items-center gap-2 text-[#C5B8A5] hover:text-white transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Minimal Post List */}
          <div className="space-y-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-24 bg-zinc-800/50 rounded-lg"></div>
                </div>
              ))
            ) : (
              filteredPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-[#C5B8A5]/30 transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-[#C5B8A5]">{post.category}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs text-zinc-400">{formatDate(post.date)}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs text-zinc-400">{post.readingTime || getReadingTime(post.content)} min read</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#C5B8A5] transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-zinc-400 text-sm line-clamp-2">{post.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#C5B8A5] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'grid') {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#C5B8A5]" />
              <span className="text-sm font-medium text-[#C5B8A5] uppercase tracking-wider">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Insights on web development, design trends, and building better digital experiences
            </p>
          </div>

          {/* Category Filter */}
          {showCategories && categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#C5B8A5] text-black'
                      : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: limit }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-zinc-800 rounded-lg mb-4"></div>
                  <div className="h-4 bg-zinc-800 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-zinc-800 rounded w-1/2"></div>
                </div>
              ))
            ) : (
              filteredPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-[#C5B8A5]/30 transition-all">
                    {/* Image or Gradient Placeholder */}
                    <div className="relative aspect-video overflow-hidden bg-zinc-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-[#C5B8A5] text-black text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      {/* Category-based gradient placeholder */}
                      <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(post.category)} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                        <BookOpen className="w-12 h-12 text-white/20" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#C5B8A5] transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                        {post.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-[#C5B8A5] text-sm font-medium">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5B8A5] text-black font-semibold rounded-lg hover:bg-white transition-all"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default variant - Featured layout
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-[#C5B8A5]" />
              <span className="text-sm font-medium text-[#C5B8A5] uppercase tracking-wider">
                {featured ? 'Featured Posts' : 'Latest Insights'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              From the Blog
            </h2>
            <p className="text-zinc-400 mt-2">
              Thoughts on web development, design, and technology
            </p>
          </div>
          <Link 
            href="/blog"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-[#C5B8A5] hover:text-black transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4"></div>
                <div className="h-4 bg-zinc-800 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-zinc-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className={`h-full bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-[#C5B8A5]/50 transition-all ${
                  index === 0 && featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-zinc-800 ${
                    index === 0 && featured ? 'aspect-video' : 'aspect-video'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#C5B8A5] text-black text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Gradient placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-[#C5B8A5]/20 to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>

                    {/* Overlay Content for Featured */}
                    {index === 0 && featured && (
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <h3 className="text-3xl font-bold text-white group-hover:text-[#C5B8A5] transition-colors mb-3">
                          {post.title}
                        </h3>
                        <p className="text-zinc-300 mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} min read
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content (for non-featured cards) */}
                  {!(index === 0 && featured) && (
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#C5B8A5] transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#C5B8A5] text-sm font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="text-center mt-12 md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-[#C5B8A5] hover:text-black transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

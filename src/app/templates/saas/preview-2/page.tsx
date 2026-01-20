'use client';

import { useState } from 'react';
import { DraggableCTA } from '@/components/draggable-cta';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Users, 
  Briefcase, 
  Database, 
  Share2, 
  FileText, 
  Zap, 
  Shield, 
  Clock, 
  BarChart3,
  Play,
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';

export default function SaaSProductivityApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState('workflow');

  const stats = [
    { label: 'Enrolled Users', value: '29M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Verified Companies', value: '100M+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Projects Managed', value: '500M+', icon: <BarChart3 className="w-6 h-6" /> },
    { label: 'Customer Rating', value: '4.8★', icon: <Star className="w-6 h-6" /> }
  ];

  const features = [
    {
      id: 'workflow',
      title: 'Custom Workflow',
      description: 'Create custom workflows tailored to your team\'s needs with our intuitive drag-and-drop interface.',
      icon: <Zap className="w-12 h-12 text-[#7C5CFF]" />
    },
    {
      id: 'projects',
      title: 'Multi-team Projects',
      description: 'Collaborate seamlessly across multiple teams with real-time updates and shared resources.',
      icon: <Users className="w-12 h-12 text-[#7C5CFF]" />
    },
    {
      id: 'sync',
      title: 'Data Sync and Backup',
      description: 'Your data is automatically synced and backed up securely across all your devices.',
      icon: <Database className="w-12 h-12 text-[#7C5CFF]" />
    },
    {
      id: 'attachments',
      title: 'Task Attachments',
      description: 'Attach files, images, and documents to tasks with unlimited storage capacity.',
      icon: <FileText className="w-12 h-12 text-[#7C5CFF]" />
    },
    {
      id: 'collaboration',
      title: 'Task Collaboration',
      description: 'Work together in real-time with your team members on shared tasks and projects.',
      icon: <Share2 className="w-12 h-12 text-[#7C5CFF]" />
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to keep your data safe.',
      icon: <Shield className="w-12 h-12 text-[#7C5CFF]" />
    }
  ];

  const testimonials = [
    {
      name: 'Kunal',
      role: 'Founder, 7K Solutions',
      rating: 5.0,
      text: '7K Mutmiz revolutionizes how teams work together. Built with years of experience managing complex projects, this platform captures everything we learned about productivity and collaboration.'
    },
    {
      name: 'Aditya Patel',
      role: 'Product Manager, TechCorp',
      rating: 5.0,
      text: 'Kunal\'s 7K Mutmiz has transformed our team collaboration. The intuitive interface and powerful features have increased our productivity by 60% in just three months.'
    },
    {
      name: 'Neha Gupta',
      role: 'CEO, StartupHub',
      rating: 4.9,
      text: 'Outstanding platform with exceptional customer support from Kunal\'s team. 7K Mutmiz is now essential to our daily operations and our team loves using it.'
    }
  ];

  const blogPosts = [
    {
      title: 'Latest Released Interesting Features in 2026!',
      category: 'Product Update',
      date: 'Jan 15, 2026',
      image: '📱'
    },
    {
      title: 'Improve Your Project Management Interface',
      category: 'Best Practices',
      date: 'Jan 10, 2026',
      image: '🎯'
    },
    {
      title: 'Quick News & Updates Subscribe Now',
      category: 'Newsletter',
      date: 'Jan 5, 2026',
      image: '📰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F5F3FF] to-white">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹12,000"
        title="7K SaaS Template"
        whatsappLink="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20the%207K%20Mutmiz%20SaaS%20template%20(₹12,000)"
        color="purple"
      />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                7K
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Mutmiz</div>
                <div className="text-xs text-[#7C5CFF] font-semibold">by Kunal 7K</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-gray-700 hover:text-[#7C5CFF] transition font-medium">
                Services
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-[#7C5CFF] transition font-medium">
                How it works
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#7C5CFF] transition font-medium">
                About us
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-[#7C5CFF] transition font-medium">
                Blog
              </Link>
              <button className="bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition font-semibold">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <Link href="#services" className="text-gray-700 hover:text-[#7C5CFF] transition">
                  Services
                </Link>
                <Link href="#how-it-works" className="text-gray-700 hover:text-[#7C5CFF] transition">
                  How it works
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-[#7C5CFF] transition">
                  About us
                </Link>
                <Link href="#blog" className="text-gray-700 hover:text-[#7C5CFF] transition">
                  Blog
                </Link>
                <button className="bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white px-6 py-2.5 rounded-full">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Maximize Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF]">
                  Productivity
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conquer Your Tasks and Stay Organized with Our Task Manager App
              </p>
              <button className="bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center gap-2 group">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              {/* Team Avatars */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                    +9
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Worldwide More than</div>
                  <div className="text-[#7C5CFF] font-bold">29M+ Users 💜</div>
                </div>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 -rotate-3">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Hello,</div>
                      <div className="text-xl font-bold text-gray-900">Khairul Ahmed 👋</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  </div>

                  <div className="bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] text-white rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm opacity-90">Monthly Reports</div>
                        <div className="text-xs opacity-75">Start</div>
                      </div>
                      <div className="bg-white/20 rounded-full px-3 py-1 text-xs">
                        Progress
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-2">85%</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Trustpilot</div>
                        <div className="text-xs text-gray-500">4.8 ⭐</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Database className="w-5 h-5 text-[#7C5CFF]" />
                      <div className="flex-1 text-sm">Reports Deliver</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-[#7C5CFF]" />
                      <div className="flex-1 text-sm">Team Server</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-5 h-5 text-[#7C5CFF]" />
                      <div className="flex-1 text-sm">Apps Package</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-xl p-4 w-48">
                <div className="text-sm font-semibold mb-2">Project Overview</div>
                <div className="text-xs text-gray-600 mb-3">
                  Design a modern web app for PQR Corporation
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#7C5CFF] font-semibold">50M+</span>
                  <span className="text-gray-500">On Time For</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] rounded-full mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#7C5CFF]">Feature Set</span>
            </h2>
            <p className="text-xl text-gray-600">
              of a Task Manager App
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
                  activeFeature === feature.id ? 'border-[#7C5CFF]' : 'border-transparent'
                }`}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-[#7C5CFF] font-semibold text-sm">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase with Phone Mockup */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Notch */}
                  <div className="bg-gray-900 h-6 rounded-b-2xl w-32 mx-auto"></div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm font-semibold">Task Manager</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-[#7C5CFF]"></div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-semibold">Project Planning</div>
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">High</span>
                        </div>
                        <div className="text-xs opacity-90 mb-3">Due: Today, 5:00 PM</div>
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-white/30 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-white/30 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-white/30 border-2 border-white"></div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-semibold text-gray-900">Design Review</div>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Medium</span>
                        </div>
                        <div className="text-xs text-gray-500">Due: Tomorrow</div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-semibold text-gray-900">Code Testing</div>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Low</span>
                        </div>
                        <div className="text-xs text-gray-500">Due: Jan 25</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white py-3 rounded-xl font-semibold">
                      Add New Task
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready? Let's Start with{' '}
                <span className="text-[#7C5CFF]">Mutmiz</span>
                <br />
                and Get Awesome Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Some Large and medium sized companies use our applications, join with the happy clients to manage their tasks with excellent quality and stunning experience using best task manager app.
              </p>
              <button className="bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#7C5CFF]">Clients Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Trustpilot Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF]"></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
                  <Award className="w-4 h-4 text-[#7C5CFF]" />
                  Trustpilot Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights from <span className="text-[#7C5CFF]">Our Blog</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with tips, trends, and product updates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F3FF] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#7C5CFF] text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7C5CFF] transition">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-[#7C5CFF] font-semibold text-sm">
                    Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready? Let's Start with Mutmiz
            <br />
            and Get Awesome Experience
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join thousands of teams already using 7K Mutmiz to streamline their workflow and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7C5CFF] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#7C5CFF] transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7C5CFF] to-[#9D7CFF] rounded-lg flex items-center justify-center font-bold text-lg">
                  7K
                </div>
                <div>
                  <div className="text-xl font-bold">Mutmiz</div>
                  <div className="text-xs text-[#7C5CFF]">by 7K Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering teams worldwide with powerful task management solutions since 2020.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Features</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Integrations</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">API</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">About</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#7C5CFF] transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#7C5CFF]" />
                  hello@7kmutmiz.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#7C5CFF]" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#7C5CFF]" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 7K Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-[#7C5CFF] transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#7C5CFF] transition">Terms of Service</Link>
              <Link href="#" className="hover:text-[#7C5CFF] transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

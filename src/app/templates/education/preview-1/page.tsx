'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search,
  Play,
  Star,
  Users,
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Video,
  FileText,
  Lightbulb,
  Target,
  Globe,
  Zap,
  Heart,
  Share2,
  Download,
  Menu,
  X,
  Calendar,
  BarChart3,
  MessageCircle,
  ThumbsUp,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Code,
  Palette,
  Camera,
  Music,
  Laptop,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

export default function EducationPlatform() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'business', name: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'photography', name: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'music', name: 'Music', icon: <Music className="w-5 h-5" /> },
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Online Degrees',
      description: 'Get accredited degrees from world-class universities and enhance your professional credentials.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Short Courses',
      description: 'Master new skills quickly with our intensive short courses designed by industry experts.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Training From Experts',
      description: 'Learn directly from seasoned professionals with years of real-world experience.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: '1.5k+ Video Courses',
      description: 'Access our extensive library of high-quality video courses covering diverse topics.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Programs',
      description: 'Earn recognized certifications that boost your career prospects and credibility.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Learn Anywhere',
      description: 'Study at your own pace from anywhere in the world with our mobile-friendly platform.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Web Design & Development Pro',
      category: 'development',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 1247,
      lessons: 42,
      duration: '8 weeks',
      price: 3499,
      originalPrice: 5999,
      image: '💻',
      level: 'Advanced',
      bestseller: true
    },
    {
      id: 2,
      title: 'Wireframing & Prototyping',
      category: 'design',
      instructor: 'Michael Chen',
      rating: 4.8,
      students: 892,
      lessons: 28,
      duration: '5 weeks',
      price: 2499,
      originalPrice: 4499,
      image: '🎨',
      level: 'Intermediate',
      bestseller: false
    },
    {
      id: 3,
      title: 'Python For Data Science',
      category: 'development',
      instructor: 'Dr. Priya Sharma',
      rating: 5.0,
      students: 2156,
      lessons: 56,
      duration: '12 weeks',
      price: 4999,
      originalPrice: 8999,
      image: '🐍',
      level: 'Advanced',
      bestseller: true
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      category: 'business',
      instructor: 'Alex Rodriguez',
      rating: 4.7,
      students: 1543,
      lessons: 38,
      duration: '6 weeks',
      price: 2999,
      originalPrice: 5499,
      image: '📱',
      level: 'Beginner',
      bestseller: false
    },
    {
      id: 5,
      title: 'UI/UX Design Complete',
      category: 'design',
      instructor: 'Emma Watson',
      rating: 4.9,
      students: 1876,
      lessons: 45,
      duration: '10 weeks',
      price: 3999,
      originalPrice: 6999,
      image: '✨',
      level: 'Intermediate',
      bestseller: true
    },
    {
      id: 6,
      title: 'Photography Fundamentals',
      category: 'photography',
      instructor: 'David Kim',
      rating: 4.8,
      students: 967,
      lessons: 32,
      duration: '7 weeks',
      price: 2799,
      originalPrice: 4999,
      image: '📸',
      level: 'Beginner',
      bestseller: false
    }
  ];

  const instructors = [
    {
      name: 'Dr. Sarah Martinez',
      title: 'AI & Machine Learning Expert',
      students: '50K+',
      courses: 24,
      rating: 4.9,
      image: '👩‍🏫'
    },
    {
      name: 'Prof. James Anderson',
      title: 'Full Stack Developer',
      students: '45K+',
      courses: 18,
      rating: 4.8,
      image: '👨‍💼'
    },
    {
      name: 'Emily Chen',
      title: 'UX/UI Design Lead',
      students: '38K+',
      courses: 15,
      rating: 5.0,
      image: '👩‍🎨'
    },
    {
      name: 'Michael Roberts',
      title: 'Digital Marketing Guru',
      students: '42K+',
      courses: 21,
      rating: 4.9,
      image: '👨‍💻'
    }
  ];

  const testimonials = [
    {
      name: 'Ananya Patel',
      role: 'Software Engineer at Google',
      text: 'The quality of courses on 7K Etech is outstanding. I landed my dream job at Google thanks to the comprehensive web development course. The instructors are world-class!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Rahul Sharma',
      role: 'Freelance Designer',
      text: 'Best investment I\'ve made in my career! The UI/UX design course transformed my portfolio and tripled my client base. Highly recommend to anyone serious about design.',
      rating: 5,
      image: '👨‍🎨'
    },
    {
      name: 'Priya Desai',
      role: 'Data Scientist at Microsoft',
      text: 'The Python for Data Science course was incredibly thorough. Real-world projects, expert guidance, and a supportive community made learning enjoyable and effective.',
      rating: 5,
      image: '👩‍🔬'
    }
  ];

  const stats = [
    { label: 'Active Students', value: '2.5M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Expert Instructors', value: '5,000+', icon: <Award className="w-6 h-6" /> },
    { label: 'Video Courses', value: '15,000+', icon: <Video className="w-6 h-6" /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const partnerLogos = ['Duolingo', 'Microsoft', 'Codecov', 'Google', 'Amazon', 'Meta'];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Demo Badge */}
      <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border-2 border-white/20">
        <Sparkles className="w-5 h-5" />
        <div>
          <div className="text-xs font-semibold">7K Etech Pro Template</div>
          <div className="text-xs opacity-90">₹15,000 Only</div>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20the%207K%20Etech%20Education%20Platform%20template%20(₹15,000)"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 bg-white text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition"
        >
          Buy Now
        </a>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                7K
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Etech
                </div>
                <div className="text-xs text-purple-600 font-semibold">by 7K Education</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-purple-600 transition font-medium flex items-center gap-1">
                  Courses
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
              </div>
              <Link href="#teachers" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Teachers
              </Link>
              <Link href="#offers" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Offers
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Contact
              </Link>
              <button className="text-purple-600 hover:text-purple-700 transition font-semibold">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl transition font-semibold">
                Free Trial
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-purple-100">
              <nav className="flex flex-col gap-4">
                <Link href="#courses" className="text-gray-700 hover:text-purple-600 transition">
                  Courses
                </Link>
                <Link href="#teachers" className="text-gray-700 hover:text-purple-600 transition">
                  Teachers
                </Link>
                <Link href="#offers" className="text-gray-700 hover:text-purple-600 transition">
                  Offers
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition">
                  Contact
                </Link>
                <button className="text-purple-600 font-semibold text-left">Sign In</button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full">
                  Free Trial
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Partner Logos Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="text-white/90 font-semibold text-sm md:text-base flex items-center gap-2">
                <Award className="w-5 h-5" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎓 Online Learning Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Develop your skills in a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  new and unique way
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore a transformative approach to skill development and self-paced learning platform. Discover a wealth of learning experiences with a diverse range of courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center justify-center gap-2 group">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Intro
                </button>
              </div>

              {/* Stats in Hero */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-purple-600">2.5M+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">15K+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Success</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Welcome back,</div>
                      <div className="text-xl font-bold text-gray-900">Online Courses! 👋</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl p-5 mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm opacity-90 mb-1">Your Progress</div>
                        <div className="text-2xl font-bold">Python Course</div>
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        75% Complete
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>5 weeks • 42 lessons</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                      <div className="bg-white rounded-full h-2" style={{ width: '75%' }}></div>
                    </div>
                    <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                      Continue Learning
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Web Development</div>
                        <div className="text-xs text-gray-500">12 lessons remaining</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">UI/UX Design</div>
                        <div className="text-xs text-gray-500">8 lessons remaining</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 w-56 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">New Achievement!</div>
                    <div className="text-xs text-gray-500">Course Completed</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 w-48 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-900">Live Students</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">12,847</div>
                <div className="text-xs text-gray-500">Learning right now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Search <span className="text-purple-600">Courses</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for over 10+ courses"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-32 rounded-full border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-900 placeholder-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-2.5 rounded-full font-semibold hover:shadow-lg transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl transform hover:scale-105 transition">
                    👩‍🎓
                  </div>
                  <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center text-6xl transform hover:scale-105 transition">
                    👨‍💼
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-6xl transform hover:scale-105 transition">
                    👩‍💻
                  </div>
                  <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-6xl transform hover:scale-105 transition">
                    👨‍🎨
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-purple-600">Benefits</span> From Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Online Learning
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover the advantages of learning with 7K Etech and transform your career.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition group cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Popular Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most-loved courses trusted by thousands of students worldwide
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group border-2 border-purple-100 hover:border-purple-300"
              >
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-7xl">
                  {course.image}
                  {course.bestseller && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-700">
                    {course.level}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons} Lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{course.instructor}</div>
                      <div className="text-xs text-gray-500">{course.students.toLocaleString()} students</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">₹{course.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</div>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition flex items-center gap-2">
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition">
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="teachers" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              If You Are A Certified Teacher
              <br />
              Then <span className="underline decoration-4 decoration-yellow-400">Become An Instructor</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Unlock the opportunity to inspire and educate by joining our team of expert instructors. Share your knowledge, build your brand, and earn while you teach.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Enjoy Many Perks</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Stable Income</div>
                    <div className="text-sm opacity-90">Earn competitive rates for your expertise</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Creative Freedom</div>
                    <div className="text-sm opacity-90">Design courses your way</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Flexible Schedule</div>
                    <div className="text-sm opacity-90">Teach on your own time</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Monetize Your Expertise</div>
                    <div className="text-sm opacity-90">Turn knowledge into income</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Exclusive Teaching Tools</div>
                    <div className="text-sm opacity-90">Access premium resources</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Progressive Teaching</div>
                    <div className="text-sm opacity-90">Stay updated with latest methods</div>
                  </div>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition">
                Become an Instructor
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4">👩‍🏫</div>
                  <div className="text-2xl font-bold mb-2">Join Our Expert Team</div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-semibold">4.8</span>
                  </div>
                  <div className="text-sm opacity-90">Rated by 50,000+ students</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">5K+</div>
                    <div className="text-sm opacity-90">Active Teachers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">₹2.5L</div>
                    <div className="text-sm opacity-90">Avg. Monthly Earning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Student's</span> Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our incredible students have shared about their transformative learning journey with 7K Etech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-200 flex items-center gap-2 text-sm text-purple-600">
                  <Award className="w-4 h-4" />
                  Verified Graduate
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition">
              ←
            </button>
            <div className="flex gap-2">
              <button className="w-3 h-3 rounded-full bg-purple-600"></button>
              <button className="w-3 h-3 rounded-full bg-purple-200"></button>
              <button className="w-3 h-3 rounded-full bg-purple-200"></button>
            </div>
            <button className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition">
              →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join 2.5 million students already learning on 7K Etech. Start your journey today with a 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Browse Courses
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-90 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              7-day free trial
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center font-bold text-xl">
                  7K
                </div>
                <div>
                  <div className="text-xl font-bold">Etech</div>
                  <div className="text-xs text-purple-400">by 7K Education</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering learners worldwide with quality education and expert-led courses since 2020.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition">
                  <ThumbsUp className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-purple-400 transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">All Courses</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">Become Instructor</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-purple-400 transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">FAQs</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  Mon - Fri: 9AM - 6PM
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  support@7ketech.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  +91 98765 43210
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 7K Education Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-purple-400 transition">Privacy</Link>
              <Link href="#" className="hover:text-purple-400 transition">Terms</Link>
              <Link href="#" className="hover:text-purple-400 transition">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

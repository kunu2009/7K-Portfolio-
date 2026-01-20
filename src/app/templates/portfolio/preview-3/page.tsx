'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';import { DraggableCTA } from '@/components/draggable-cta';import { 
  Mail,
  Instagram,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
  Award,
  Sparkles,
  Zap,
  BookOpen,
  Palette,
  Pencil,
  Users,
  Briefcase,
  Heart,
  MessageCircle
} from 'lucide-react';

export default function IllustrationPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const softwares = [
    { name: 'Procreate', color: 'from-orange-400 to-pink-500', icon: '🎨' },
    { name: 'Adobe InDesign', color: 'from-pink-600 to-red-600', icon: '🖼️' },
    { name: 'Photoshop', color: 'from-blue-600 to-cyan-400', icon: '📸' },
    { name: 'Premiere Pro', color: 'from-purple-600 to-indigo-600', icon: '🎬' },
    { name: 'Illustrator', color: 'from-yellow-500 to-orange-500', icon: '✏️' },
    { name: 'Figma', color: 'from-purple-400 to-pink-400', icon: '⚙️' }
  ];

  const skills = [
    { name: 'Digital Illustration', level: 95 },
    { name: 'Character Design', level: 92 },
    { name: 'Children\'s Illustration', level: 90 },
    { name: 'Comic & Manga', level: 88 },
    { name: 'Magazine Layout', level: 85 },
    { name: 'Animation Design', level: 83 }
  ];

  const projects = [
    {
      title: 'Children\'s Book Series',
      category: 'Illustration',
      description: 'Complete character and scene illustrations for a bestselling children\'s series',
      color: 'from-pink-400 to-purple-500',
      icon: '📚'
    },
    {
      title: 'Character Design Pack',
      category: 'Character Design',
      description: 'Full character design collection with multiple expressions and poses',
      color: 'from-blue-400 to-cyan-500',
      icon: '👥'
    },
    {
      title: 'Magazine Editorial',
      category: 'Layout & Design',
      description: 'Monthly magazine layout with custom illustrations and typography',
      color: 'from-orange-400 to-pink-500',
      icon: '📖'
    },
    {
      title: 'Comic Series',
      category: 'Comic Art',
      description: 'Original comic series with unique visual storytelling',
      color: 'from-purple-400 to-indigo-500',
      icon: '💭'
    },
    {
      title: 'Sticker Collection',
      category: 'Digital Art',
      description: 'Licensed sticker pack with playful character designs',
      color: 'from-yellow-400 to-orange-500',
      icon: '🎯'
    },
    {
      title: 'Brand Mascot',
      category: 'Character Design',
      description: 'Complete mascot design system with brand guidelines',
      color: 'from-green-400 to-blue-500',
      icon: '🦸'
    }
  ];

  const testimonials = [
    {
      name: 'Aditya Patel',
      role: 'Publishing Director',
      text: 'Kunal\'s illustrations brought our book to life. Highly professional and creative—delivered right on time!',
      avatar: '👨‍💼'
    },
    {
      name: 'Neha Gupta',
      role: 'Creative Director',
      text: 'Outstanding character designs with attention to detail. The brand mascot system was perfect for our campaign.',
      avatar: '👩‍💼'
    },
    {
      name: 'Vipul Singh',
      role: 'Brand Manager',
      text: 'The mascot design captured our brand essence. Seamless collaboration and exceptional quality—highly recommended!',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹9,000"
        title="7K Illustration Portfolio"
        whatsappLink="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20the%207K%20Illustration%20Portfolio%20template%20(₹9,000)"
        color="cyan"
      />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-blue-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition">
                7K
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span className="text-blue-600">PORT</span>
                  <span className="text-cyan-500">FOLIO</span>
                </div>
                <div className="text-xs text-blue-600 font-semibold">Illustration</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-cyan-500 transition font-medium">
                About Me
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Portfolio
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-cyan-500 transition font-medium">
                Contact
              </Link>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition font-semibold">
                Hire Me
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
            <div className="md:hidden py-4 border-t border-blue-100">
              <nav className="flex flex-col gap-4">
                <Link href="#home" className="text-gray-700 hover:text-cyan-500 transition">
                  Home
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-cyan-500 transition">
                  About Me
                </Link>
                <Link href="#portfolio" className="text-gray-700 hover:text-cyan-500 transition">
                  Portfolio
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-cyan-500 transition">
                  Contact
                </Link>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full">
                  Hire Me
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            {/* Sky clouds */}
            <path d="M 100 100 Q 150 80 200 100" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M 400 120 Q 450 100 500 120" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M 800 90 Q 850 70 900 90" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M 100 200 Q 150 180 200 200" stroke="#e0f2fe" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                👋 Welcome to my creative world
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-blue-600">PORT</span>
                <span className="text-cyan-500">FOLIO</span>
                <br />
                <span className="text-gray-800 text-4xl md:text-5xl lg:text-6xl">Illustration</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hi! I'm an illustrator with a love for storytelling and playful ideas. My work moves between digital drawing, children's illustration, character design, comics, and magazine layout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center justify-center gap-2 group">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="bg-white text-cyan-600 border-2 border-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white hover:shadow-lg transition group">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white hover:shadow-lg transition group">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white hover:shadow-lg transition group">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Illustration - Boat Scene */}
            <div className="relative h-96 md:h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-3xl shadow-2xl overflow-hidden">
                {/* Water waves */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-400 to-blue-200">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d="M 0 100 Q 50 80 100 100 T 200 100 T 300 100 T 400 100" stroke="#1e40af" strokeWidth="3" fill="none" />
                    <path d="M 0 120 Q 50 100 100 120 T 200 120 T 300 120 T 400 120" stroke="#1e3a8a" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                {/* Boat */}
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-32">
                  <div className="relative w-full h-full">
                    {/* Boat hull */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-yellow-600 rounded-b-full opacity-90"></div>
                    {/* Sail */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-40 bg-yellow-400 clip-polygon shadow-lg"></div>
                    {/* Character */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-6xl">
                      🧒
                    </div>
                  </div>
                </div>

                {/* Clouds */}
                <div className="absolute top-8 left-8 text-5xl opacity-70">☁️</div>
                <div className="absolute top-20 right-12 text-6xl opacity-60">☁️</div>
                <div className="absolute top-12 left-1/3 text-4xl opacity-50">☁️</div>
              </div>

              {/* Year Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gray-900">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Me!</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="relative flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl bg-gradient-to-br from-orange-300 via-red-300 to-brown-400">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  🧑‍🎨
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                KUNAL
                <br />
                7K SOLUTIONS
              </h3>
              <p className="text-sm text-gray-500 font-semibold mb-6">Full-Stack Designer & Developer</p>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hi! I'm an illustrator with a love for storytelling and playful ideas. My work moves between digital drawing, children's illustration, character design, comics, and magazine layout.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm always eager to learn, grow, and push my creativity further—because every project is a new chance to bring ideas to life.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
                <div className="space-y-4">
                  <a href="https://instagram.com" className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="font-semibold">kunal.designs</span>
                  </a>
                  <a href="mailto:email@example.com" className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">kunalchheda13@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-cyan-500" />
                Education
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Multimedia & Digital Design</h4>
                    <p className="text-sm text-gray-600">Bachelor's Degree</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Technological Institute of the Americas (ITIA)</h4>
                    <p className="text-sm text-gray-600">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-cyan-500" />
                Skills
              </h3>
              <div className="space-y-3">
                {['Digital Illustration', 'Children\'s Illustration', 'Character Design', 'Comics', 'Magazine Layout'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Pencil className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gray-900">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Softwares</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softwares.map((software, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${software.color} rounded-2xl p-6 h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform group-hover:scale-110`}>
                  <span className="text-5xl">{software.icon}</span>
                </div>
                <p className="text-center font-semibold text-gray-700 mt-3 text-sm group-hover:text-cyan-600 transition">
                  {software.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Proficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gray-900">Proficiency </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Levels</span>
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-cyan-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gray-900">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="text-sm text-cyan-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <button className="text-cyan-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gray-900">What Clients </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-cyan-200 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's collaborate and bring your ideas to life with creative illustrations and designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition">
              Get In Touch
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              View More Work
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                7K
              </div>
              <div>
                <div className="font-bold">7K Portfolio</div>
                <div className="text-xs text-gray-400">Illustration</div>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-2">
                <Github className="w-5 h-5" />
                Portfolio
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 7K Design Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-cyan-400 transition">Privacy</Link>
              <Link href="#" className="hover:text-cyan-400 transition">Terms</Link>
              <Link href="#" className="hover:text-cyan-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

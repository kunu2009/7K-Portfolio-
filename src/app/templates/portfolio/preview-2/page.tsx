'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DraggableCTA } from '@/components/draggable-cta';
import { 
  Home,
  User,
  Zap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  Figma,
  Smartphone,
  Globe,
  Database,
  Award,
  Sparkles,
  Download,
  Send,
  ArrowRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function CreativePortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'UI/UX Design', icon: 'Figma', level: 95, color: 'from-orange-400 to-yellow-400' },
    { name: 'Web Development', icon: 'Code', level: 90, color: 'from-orange-400 to-yellow-400' },
    { name: 'Graphic Design', icon: 'Palette', level: 88, color: 'from-orange-400 to-yellow-400' },
    { name: 'Mobile Apps', icon: 'Smartphone', level: 85, color: 'from-orange-400 to-yellow-400' },
    { name: 'Animation', icon: 'Sparkles', level: 80, color: 'from-orange-400 to-yellow-400' },
    { name: 'Branding', icon: 'Award', level: 92, color: 'from-orange-400 to-yellow-400' }
  ];

  const tools = [
    { name: 'Figma', abbr: 'Fi', level: 95 },
    { name: 'Adobe XD', abbr: 'Xd', level: 90 },
    { name: 'Photoshop', abbr: 'Ps', level: 88 },
    { name: 'Illustrator', abbr: 'Ai', level: 85 },
    { name: 'After Effects', abbr: 'Ae', level: 80 },
    { name: 'Premiere Pro', abbr: 'Pr', level: 75 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Design',
      description: 'Modern shopping experience with seamless checkout',
      color: 'from-orange-500 to-red-500',
      icon: '🛍️'
    },
    {
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      description: 'Intuitive financial management interface',
      color: 'from-yellow-500 to-orange-500',
      icon: '💳'
    },
    {
      title: 'Brand Identity',
      category: 'Graphic Design',
      description: 'Complete visual identity for tech startup',
      color: 'from-orange-600 to-yellow-500',
      icon: '🎨'
    },
    {
      title: 'Dashboard Analytics',
      category: 'UI Design',
      description: 'Data visualization and reporting tool',
      color: 'from-amber-500 to-orange-600',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2332] text-white relative overflow-x-hidden">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹8,000"
        title="7K Creative Portfolio"
        whatsappLink="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20the%207K%20Creative%20Portfolio%20template%20(₹8,000)"
        color="orange"
      />

      {/* Decorative Characters - Left */}
      <div className="fixed left-0 bottom-0 w-80 h-96 pointer-events-none z-10 hidden lg:block">
        <div className="relative w-full h-full">
          {/* Character silhouette */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-0 left-8 w-64 h-80 bg-gradient-to-b from-[#5a6b4a] to-[#4a5b3a] rounded-t-full opacity-20"></div>
            {/* Hair */}
            <div className="absolute bottom-40 left-12 w-56 h-64 bg-gradient-to-b from-[#6b7c5b] to-[#5a6b4a] rounded-t-full opacity-30"></div>
            {/* Face area */}
            <div className="absolute bottom-32 left-20 w-40 h-48 bg-gradient-to-b from-[#fff4e6]/10 to-transparent rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Decorative Characters - Right */}
      <div className="fixed right-0 bottom-0 w-80 h-96 pointer-events-none z-10 hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 right-0 w-full h-full">
            <div className="absolute bottom-0 right-8 w-64 h-80 bg-gradient-to-b from-[#5a6b4a] to-[#4a5b3a] rounded-t-full opacity-20"></div>
            <div className="absolute bottom-40 right-12 w-56 h-64 bg-gradient-to-b from-[#6b7c5b] to-[#5a6b4a] rounded-t-full opacity-30"></div>
            <div className="absolute bottom-32 right-20 w-40 h-48 bg-gradient-to-b from-[#fff4e6]/10 to-transparent rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2332]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
                7K
              </div>
              <div className="text-xl font-bold tracking-wider">
                <span className="text-white">PORT</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">FOLIO</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#home" 
                className="text-orange-400 hover:text-yellow-400 transition font-medium tracking-wide"
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-orange-400 hover:text-yellow-400 transition font-medium tracking-wide"
                onClick={() => setActiveSection('about')}
              >
                About Me
              </a>
              <a 
                href="#skills" 
                className="text-orange-400 hover:text-yellow-400 transition font-medium tracking-wide"
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-orange-400 hover:text-yellow-400 transition font-medium tracking-wide"
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          {/* Character Avatar */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition"></div>
              
              {/* Character Circle */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Face Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fff4e6] to-[#ffe4c4] rounded-full"></div>
                
                {/* Hair */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-48 bg-gradient-to-b from-[#6b7c5b] to-[#5a6b4a] rounded-t-full rounded-b-3xl"></div>
                
                {/* Face features */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Eyes */}
                  <div className="flex gap-8 mb-4 mt-8">
                    <div className="w-4 h-5 bg-[#2d3748] rounded-full"></div>
                    <div className="w-4 h-5 bg-[#2d3748] rounded-full"></div>
                  </div>
                  {/* Cheeks */}
                  <div className="flex gap-16 mb-4">
                    <div className="w-8 h-6 bg-[#ffb6b9] rounded-full opacity-60"></div>
                    <div className="w-8 h-6 bg-[#ffb6b9] rounded-full opacity-60"></div>
                  </div>
                  {/* Mouth */}
                  <div className="w-6 h-3 border-2 border-[#2d3748] rounded-full border-t-0"></div>
                </div>

                {/* Hair strands */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-32">
                  <div className="absolute left-8 top-0 w-12 h-20 bg-gradient-to-b from-[#7a8b6a] to-transparent rounded-full transform -rotate-12"></div>
                  <div className="absolute right-8 top-0 w-12 h-20 bg-gradient-to-b from-[#7a8b6a] to-transparent rounded-full transform rotate-12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-24 bg-gradient-to-b from-[#7a8b6a] to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              I am a multimedia designer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I like all the things of design!
          </p>

          <div className="mb-12">
            <p className="text-lg text-gray-400">
              Click here to know{' '}
              <a 
                href="#about" 
                className="text-orange-400 hover:text-yellow-400 underline transition font-semibold"
              >
                About Me
              </a>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center justify-center gap-2 group"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <button className="bg-transparent border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400/10 transition flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-[#2d3748] flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition group">
              <Github className="w-5 h-5 text-orange-400 group-hover:text-white transition" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#2d3748] flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition group">
              <Linkedin className="w-5 h-5 text-orange-400 group-hover:text-white transition" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#2d3748] flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition group">
              <Twitter className="w-5 h-5 text-orange-400 group-hover:text-white transition" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">About Me</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> ...</span>
          </h2>

          <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/20 shadow-2xl">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Hi, my name is <span className="text-orange-400 font-semibold">Kunal</span> a full-stack designer & developer.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              I love everything of design and this is how
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              I look in 2d animation hahahaha.
            </p>

            <p className="text-lg text-gray-400">
              Let's click{' '}
              <a 
                href="#skills" 
                className="text-orange-400 hover:text-yellow-400 underline transition font-semibold"
              >
                Skills
              </a>
              {' '}to see what skills that I have!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                5+
              </div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                100+
              </div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>
            <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                50+
              </div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                15+
              </div>
              <div className="text-sm text-gray-400">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">What My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Design Skills</span>
            <span className="text-white"> Included</span>
          </h2>

          {/* Design Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/50 transition"
              >
                <div className="flex items-center gap-6">
                  {/* Tool Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">{tool.abbr}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{tool.name}</span>
                      <span className="text-orange-400 font-bold">{tool.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-[#1a2332] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/50 transition text-center group hover:scale-105 transition-transform"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition`}>
                  {skill.icon === 'Figma' && <Figma className="w-8 h-8 text-white" />}
                  {skill.icon === 'Code' && <Code className="w-8 h-8 text-white" />}
                  {skill.icon === 'Palette' && <Palette className="w-8 h-8 text-white" />}
                  {skill.icon === 'Smartphone' && <Smartphone className="w-8 h-8 text-white" />}
                  {skill.icon === 'Sparkles' && <Sparkles className="w-8 h-8 text-white" />}
                  {skill.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <div className="text-orange-400 font-bold text-xl">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#2d3748]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-400/20 hover:border-orange-400/50 transition group hover:scale-105 transition-transform"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl`}>
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-400 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <button className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              CONTACT ME
            </span>
          </h2>

          <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/20 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-400 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2332] border border-orange-400/30 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-orange-400 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2332] border border-orange-400/30 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-orange-400 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a2332] border border-orange-400/30 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-orange-400 font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-[#1a2332] border border-orange-400/30 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-orange-400/20">
              <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>kunal@7k.design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <span>www.7k.design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1419] py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center font-bold text-lg">
                7K
              </div>
              <div className="text-gray-400 text-sm">
                © 2026 7K Design. All rights reserved.
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { DraggableCTA } from "@/components/draggable-cta";
import { ArrowRight, Menu, X, Sparkles, Users, Award, TrendingUp, Code, Palette, Layers, Video, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { AgencyIllustration } from "@/components/svg-illustrations";

export default function CreativeAgencyTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const stats = [
    { value: "2000+", label: "Clients" },
    { value: "10+", label: "Years Exp" },
    { value: "800+", label: "Hours of Digital" },
    { value: "150M+", label: "Reach" }
  ];

  const services = [
    { id: "01", title: "UI/UX Design", icon: <Palette className="w-6 h-6" /> },
    { id: "02", title: "Web Development", icon: <Code className="w-6 h-6" /> },
    { id: "03", title: "3D Designs", icon: <Layers className="w-6 h-6" /> },
    { id: "04", title: "Motion Graphics", icon: <Video className="w-6 h-6" /> }
  ];

  const team = [
    { name: "Kunal", role: "Founder & Creative Director", specialty: "Brand Strategy & Visual Identity" },
    { name: "Aditya Patel", role: "Lead Developer", specialty: "Full-Stack Development & Cloud" },
    { name: "Priya Sharma", role: "UX/UI Designer", specialty: "User Research & Interaction Design" },
    { name: "Vipul Singh", role: "3D Artist", specialty: "Motion Graphics & 3D Modeling" },
    { name: "Neha Gupta", role: "Content Strategist", specialty: "SEO & Content Marketing" },
    { name: "Rahul Sharma", role: "Project Manager", specialty: "Agile Methodology & Client Relations" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹10,000"
        title="7K Creatix Agency"
        whatsappLink="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20the%207K%20Creatix%20agency%20template%20(%E2%82%B910,000)"
        color="green"
      />
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-[#BFFF00]" />
              <span className="text-2xl font-bold">
                7K <span className="text-[#BFFF00]">Creatix</span>
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#BFFF00] transition">About Us</a>
              <a href="#services" className="hover:text-[#BFFF00] transition">Services</a>
              <a href="#team" className="hover:text-[#BFFF00] transition">Our Team</a>
              <a href="#portfolio" className="hover:text-[#BFFF00] transition">Portfolio</a>
              <a href="#contact" className="hover:text-[#BFFF00] transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-[#BFFF00] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#A8E600] transition">
                Get Started
              </button>
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 hover:text-[#BFFF00]">About Us</a>
              <a href="#services" className="block py-2 hover:text-[#BFFF00]">Services</a>
              <a href="#team" className="block py-2 hover:text-[#BFFF00]">Our Team</a>
              <a href="#portfolio" className="block py-2 hover:text-[#BFFF00]">Portfolio</a>
              <a href="#contact" className="block py-2 hover:text-[#BFFF00]">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <Sparkles className="w-12 h-12 text-[#BFFF00] animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Empowering Brands<br />
                Through Creative<br />
                Solutions <span className="text-[#BFFF00]">🍃</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                We are a full-service creative agency that delivers disruptive strategies that elevate your brand and amplify growth. Let's create something extraordinary together and make your vision a stunning reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#BFFF00] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#A8E600] transition">
                  Hire Us Now
                </button>
                <button className="border-2 border-white/20 px-8 py-4 rounded-full font-semibold hover:border-[#BFFF00] hover:text-[#BFFF00] transition">
                  Get a Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#BFFF00]/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
                <div className="aspect-[4/3]">
                  <AgencyIllustration />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#BFFF00] text-black px-6 py-3 rounded-2xl font-bold shadow-2xl">
                  <div className="text-3xl">10 Years</div>
                  <div className="text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#BFFF00] mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#BFFF00]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#BFFF00] font-semibold">ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Turning Ideas Into<br />Masterpieces
              </h2>
              <p className="text-gray-400 mb-6">
                We take an all-company team-led approach with a multitude of cross-functional leaders working as one unified team. This unified team delivers not only solutions but unrivaled brand experiences that connect meaningfully with customers.
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#BFFF00]/50 transition">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BFFF00] to-green-400 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      ✨
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">A CREATIVE DESIGN AGENCY</h3>
                      <p className="text-gray-400 text-sm">Crafting unique visual identities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"].map((src, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 aspect-square relative">
                  <Image src={src} alt="Agency team" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-32">
              <div className="inline-block bg-[#BFFF00] text-black px-4 py-2 rounded-full font-bold mb-6">
                OUR SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#BFFF00]">creative services</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We offer a range of creative and digital services that help you drive sustainable growth and maximize brand value at every touch point.
              </p>
              <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 overflow-hidden">
                <div className="text-8xl mb-4">🎯</div>
                <div className="absolute top-4 right-4 text-[#BFFF00] opacity-20">
                  <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">See how<br />we work</h3>
                <button className="bg-[#BFFF00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#A8E600] transition inline-flex items-center space-x-2">
                  <span>Meet our expert</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-black border border-white/10 rounded-2xl p-6 hover:border-[#BFFF00]/50 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#BFFF00] group-hover:bg-[#BFFF00] group-hover:text-black transition">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm mb-1">{service.id}</div>
                        <div className="font-bold text-lg">{service.title}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-[#BFFF00] transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl font-bold">
            <span>innovate</span>
            <span className="text-[#BFFF00]">+</span>
            <span>inspire</span>
            <span className="text-[#BFFF00]">+</span>
            <span>create</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#BFFF00] text-black px-4 py-2 rounded-full font-bold mb-6">
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet <span className="text-[#BFFF00]">our experts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-2xl p-6 hover:border-[#BFFF00]/50 transition group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#BFFF00] to-green-400 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    👤
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-[#BFFF00] text-sm mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-white/5 rounded-3xl p-12 border border-white/10 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Get in Touch Today!</h2>
                <p className="text-gray-400 mb-8">
                  Have a project in mind? Let's discuss how we can help bring your vision to life.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#BFFF00] transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#BFFF00] transition"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#BFFF00] transition resize-none"
                  ></textarea>
                  <button className="bg-[#BFFF00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#A8E600] transition w-full">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFFF00]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-8xl flex items-center justify-center">
              ✌️
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#BFFF00] text-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8" />
                <span className="text-2xl font-bold">7K Creatix</span>
              </div>
              <p className="text-black/70 mb-4">
                Empowering brands through creative solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
                <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
                <Instagram className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-black/70">
                <li><a href="#" className="hover:text-black transition">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-black transition">Web Development</a></li>
                <li><a href="#" className="hover:text-black transition">3D Designs</a></li>
                <li><a href="#" className="hover:text-black transition">Motion Graphics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-black/70">
                <li><a href="#" className="hover:text-black transition">About Us</a></li>
                <li><a href="#" className="hover:text-black transition">Our Team</a></li>
                <li><a href="#" className="hover:text-black transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-black transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kunalchheda13@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/10 pt-8 text-center text-black/70">
            <p>© 2025 7K Creatix | Powered by 7K Creative Solutions | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Demo Badge */}
      <div className="fixed bottom-4 right-4 bg-black rounded-lg shadow-2xl p-4 max-w-xs z-50 border-2 border-[#BFFF00]">
        <p className="text-sm font-semibold text-[#BFFF00] mb-2">✨ Creative Agency Template</p>
        <p className="text-xs text-gray-400 mb-3">
          Modern agency website with stunning design. Perfect for creative studios and digital agencies!
        </p>
        <a
          href="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20the%20Creative%20Agency%20template%20(₹10,000).%20Can%20you%20provide%20more%20details?"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#BFFF00] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#A8E600] transition"
        >
          Buy Template - ₹10,000
        </a>
        <Link
          href="/templates"
          className="block text-center mt-2 text-[#BFFF00] text-xs hover:underline"
        >
          ← Back to Templates
        </Link>
      </div>
    </div>
  );
}

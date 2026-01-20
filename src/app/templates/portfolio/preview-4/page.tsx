"use client";

import Link from "next/link";
import { useState } from "react";
import { DraggableCTA } from "@/components/draggable-cta";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  Star,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Palette,
  Cpu,
  Languages,
  Heart,
  Sparkles
} from "lucide-react";

export default function ResumePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const education = [
    { year: "2023-2025", school: "Digital Campus, Montpellier", note: "Digital Web & Project Management" },
    { year: "2021-2022", school: "IUT de Béziers", note: "Commercialisation Technique" },
    { year: "2017-2020", school: "Economics University, Danang", note: "International Business" }
  ];

  const experience = [
    { year: "2025", role: "Founder, 7K Solutions", desc: "Built and shipped premium templates, product design, full‑stack apps" },
    { year: "2024", role: "Freelance Designer", desc: "Consulted clients, led brand identity, web UI, and marketing" },
    { year: "2023", role: "Creative Developer", desc: "Designed promotional materials and interactive portfolios" }
  ];

  const softwareSkills = ["Figma", "Illustrator", "Photoshop", "After Effects", "Premiere", "InDesign"];
  const codingSkills = ["HTML", "CSS", "TypeScript", "React", "Next.js", "TailwindCSS"];
  const tags = ["Packaging", "Visual design", "UI/UX design", "User research"];
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Intermediate" },
    { name: "Hindi", level: "Native" }
  ];
  const hobbies = [
    { icon: "🎻", name: "Classical Music" },
    { icon: "🧶", name: "Crochet" },
    { icon: "🖥️", name: "Digital Art" },
    { icon: "🐈", name: "Cats" }
  ];

  return (
    <div className="min-h-screen bg-[#2F4A3A] text-[#161513]">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹9,000"
        title="7K Resume Portfolio"
        whatsappLink="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20the%207K%20Resume%20Portfolio%20template%20(₹9,000)"
        color="yellow"
      />

      {/* Header */}
      <header className="bg-[#2F4A3A]/90 backdrop-blur-md border-b border-black/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F2C17B] rounded-lg flex items-center justify-center text-[#2F4A3A] font-bold">7K</div>
              <div>
                <div className="text-2xl font-extrabold text-[#F7E9D6] tracking-wide">PORTFOLIO</div>
                <div className="text-xs text-[#F2C17B] font-semibold">by Kunal 7K</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-[#F7E9D6]">
              <a href="#about" className="hover:text-[#F2C17B] transition">About me</a>
              <a href="#resume" className="hover:text-[#F2C17B] transition">Resume</a>
              <a href="#work" className="hover:text-[#F2C17B] transition">Work</a>
              <a href="#contact" className="bg-[#F2C17B] text-[#2F4A3A] px-4 py-2 rounded-full font-semibold hover:bg-[#E9B461] transition">Get in touch!</a>
            </nav>

            <button className="md:hidden text-[#F7E9D6]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 text-[#F7E9D6]">
              <a href="#about" className="block py-2">About me</a>
              <a href="#resume" className="block py-2">Resume</a>
              <a href="#work" className="block py-2">Work</a>
              <a href="#contact" className="block py-2">Get in touch!</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#F7E9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-[#2F4A3A] mb-6">Hello,<br/>I'm Kunal!</h1>
              <p className="text-[#4A4A4A] max-w-xl">
                I am a self‑taught Creative Designer & Full‑stack Developer with strong product thinking.
                I approach problems rationally and craft simple, highly functional solutions.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="https://linkedin.com/in/kunal" className="inline-flex items-center gap-2 bg-[#2F4A3A] text-[#F7E9D6] px-4 py-2 rounded-full hover:bg-[#233A2E] transition">
                  <Linkedin className="w-4 h-4" /> linkedin.com/in/kunal
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-[#E6974A] rounded-2xl shadow-xl flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-[#2F4A3A] opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#F2C17B] text-[#2F4A3A] px-5 py-2 rounded-full font-semibold shadow">2nd August 1999</div>
              <div className="absolute bottom-6 right-6 bg-[#2F4A3A] text-[#F7E9D6] px-4 py-2 rounded-full">Indian</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section id="contact" className="bg-[#2F4A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-black/20 rounded-2xl p-6 text-[#F7E9D6] grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="font-extrabold text-2xl">Contact</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Pune, India</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> kunalchheda13@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +91 8591 247 148</div>
            </div>
            <div>
              <div className="font-bold mb-2">Social</div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#233A2E] hover:bg-[#1d3026]"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#233A2E] hover:bg-[#1d3026]"><Github className="w-4 h-4"/> GitHub</a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://wa.me/918591247148?text=Hi!%20I'd%20like%20to%20hire%20Kunal" className="inline-flex items-center gap-2 bg-[#F2C17B] text-[#2F4A3A] px-5 py-3 rounded-full font-semibold hover:bg-[#E9B461] transition">
                Hire Me <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="bg-[#1B2E24] text-[#F7E9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education timeline */}
            <div>
              <div className="text-3xl font-black mb-6">Education</div>
              <div className="space-y-6">
                {education.map((e, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <GraduationCap className="w-5 h-5 text-[#F2C17B] mt-1"/>
                    <div>
                      <div className="font-bold">{e.year}</div>
                      <div>{e.school}</div>
                      <div className="text-sm opacity-80">{e.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <div className="text-3xl font-black mb-6">Experience</div>
              <div className="space-y-6">
                {experience.map((x, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Briefcase className="w-5 h-5 text-[#F2C17B] mt-1"/>
                    <div>
                      <div className="font-bold">{x.year}</div>
                      <div>{x.role}</div>
                      <div className="text-sm opacity-80">{x.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="text-3xl font-black mb-4">Technical skills</div>
              <div className="grid grid-cols-3 gap-3">
                {softwareSkills.map((s) => (
                  <div key={s} className="px-3 py-2 rounded bg-[#233A2E] text-center">{s}</div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {tags.map((t) => (
                  <div key={t} className="px-3 py-2 rounded bg-[#233A2E] text-center">{t}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black mb-4">Coding skills</div>
              <div className="grid grid-cols-3 gap-3">
                {codingSkills.map((s) => (
                  <div key={s} className="px-3 py-2 rounded bg-[#233A2E] text-center">{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Hobbies */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="text-3xl font-black mb-4">Language</div>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center gap-3">
                    <Languages className="w-4 h-4 text-[#F2C17B]"/>
                    <span className="font-semibold">{l.name}</span>
                    <span className="text-sm opacity-80">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-3xl font-black mb-4">Hobbies & Interests</div>
              <div className="grid grid-cols-4 gap-4">
                {hobbies.map((h) => (
                  <div key={h.name} className="bg-[#233A2E] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{h.icon}</div>
                    <div className="text-sm">{h.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F4A3A] text-[#F7E9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-sm opacity-80">© 2026 Kunal's 7K Solutions. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

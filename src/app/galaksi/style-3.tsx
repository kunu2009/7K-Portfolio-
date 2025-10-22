"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GalaksiStyle3() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  // Animated galaxy background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const colors = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981", "#F59E0B"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      title: "Welcome to the Cosmos",
      subtitle: "Developer's Universe",
      emoji: "🌌",
      content: "I'm Chaitanya Hedaoo, navigating through the infinite possibilities of web development.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend Galaxy",
      subtitle: "User Interface Stars",
      emoji: "⭐",
      content: "React, Next.js, TypeScript, Tailwind CSS - Creating beautiful constellations of components",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Nebula",
      subtitle: "Server-side Systems",
      emoji: "🌠",
      content: "Node.js, Python, Firebase, PostgreSQL - Building powerful backend architectures",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Project Constellation",
      subtitle: "7K Ecosystem",
      emoji: "✨",
      content: "A connected universe of applications - Life, Money, Games, and more",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Connect Across Space",
      subtitle: "Let's Collaborate",
      emoji: "🚀",
      content: "📧 chaitanyahedaoo7@gmail.com • 🌐 7kc.me • 💻 GitHub",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrolled / windowHeight);
      setActiveSection(Math.min(section, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
      />

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className="relative min-h-screen flex items-center justify-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-8 text-center"
          >
            {/* Emoji with Glow */}
            <motion.div
              className="relative inline-block mb-8"
              animate={{
                scale: activeSection === index ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="text-9xl">{section.emoji}</div>
              <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-50 blur-3xl -z-10 scale-150`} />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-4`}
            >
              {section.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-white/60 mb-8"
            >
              {section.subtitle}
            </motion.p>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto"
            >
              <p className="text-xl text-white/80 leading-relaxed">
                {section.content}
              </p>

              {/* CTA for last section */}
              {index === sections.length - 1 && (
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:chaitanyahedaoo7@gmail.com"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-purple-500/50"
                  >
                    Send Message
                  </a>
                  <a
                    href="https://7kc.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all border border-white/20"
                  >
                    View Portfolio
                  </a>
                </div>
              )}
            </motion.div>

            {/* Floating particles around card */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${section.color}`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </section>
      ))}

      {/* Scroll Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: "smooth" })}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === index
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

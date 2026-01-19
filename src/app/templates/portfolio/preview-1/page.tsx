'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function PortfolioPreview1() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce platform with payment integration',
      tech: ['Next.js', 'TypeScript', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      desc: 'Real-time collaborative task management solution',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      desc: 'Beautiful data visualization and analytics platform',
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alex Developer
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-slate-300 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
          <div className="text-6xl mb-6">👨‍💻</div>
          <h2 className="text-6xl font-bold mb-4 leading-tight">
            Creative Developer &
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Problem Solver
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            I build beautiful, functional web applications that solve real problems. Specializing in Next.js, React, and modern web technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all">
              View My Work
            </button>
            <button className="px-8 py-3 border border-slate-600 rounded-lg font-bold hover:border-blue-500 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-700">
        <h3 className="text-4xl font-bold mb-16">Featured Work</h3>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all"
            >
              {/* Project Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {idx === 0 ? '🛒' : idx === 1 ? '✅' : '📊'}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-2 border border-slate-600 hover:border-blue-500 rounded-lg font-bold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-700">
        <h3 className="text-4xl font-bold mb-8">About Me</h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-300 mb-6">
              I'm a full-stack developer passionate about creating beautiful, functional web experiences. With 5+ years of experience, I've worked with startups and enterprises to build products that users love.
            </p>
            <p className="text-lg text-slate-300">
              When I'm not coding, I'm learning new technologies, contributing to open source, or writing about web development on my blog.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Skills & Technologies</h4>
            <div className="space-y-3">
              {[
                { title: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind' },
                { title: 'Backend', skills: 'Node.js, Python, PostgreSQL, Firebase' },
                { title: 'Tools', skills: 'Git, Docker, Vercel, AWS' },
                { title: 'Design', skills: 'Figma, UI/UX, Responsive Design' }
              ].map((cat, idx) => (
                <div key={idx}>
                  <p className="font-bold text-blue-400 mb-1">{cat.title}</p>
                  <p className="text-slate-400">{cat.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-700">
        <h3 className="text-4xl font-bold text-center mb-8">Get In Touch</h3>
        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <form className="max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 py-12 px-4 text-center text-slate-400">
        <p>© 2026 Alex Developer. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Get Template CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 text-center">
        <p className="text-sm text-blue-100 mb-4">
          Love this portfolio template? Get your own customized version today!
        </p>
        <a
          href="https://wa.me/918591247148?text=Hi%20Kunal%2C%20I'm%20interested%20in%20the%20portfolio%20template"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          💬 Get This Template
        </a>
      </div>
    </div>
  );
}

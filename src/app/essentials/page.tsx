'use client';

import { useState, useEffect } from 'react';

export default function EssentialsPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState('legal-skills');

  const textArray = ["Future Corporate Lawyer.", "Tech & Hardware Enthusiast."];
  const currentText = textArray[Math.floor(textIndex / (textArray.join('').length + 10))];

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!currentText) return;
    
    const timer = setTimeout(() => {
      const fullText = currentText;
      if (typedText.length < fullText.length) {
        setTypedText(typedText + fullText[typedText.length]);
      } else {
        setTypedText('');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, currentText]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <style>{`
        :root {
          --bg-color: #f0f2f5;
          --text-color: #0a192f;
          --nav-bg: #ffffff;
          --brand: #64ffda;
          --slate: #8892b0;
          --light-slate: #a8b2d1;
          --lightest-slate: #ccd6f6;
        }
        
        :root.dark {
          --bg-color: #0a192f;
          --text-color: #8892b0;
          --nav-bg: #0a192f;
          --brand: #64ffda;
          --slate: #8892b0;
          --light-slate: #a8b2d1;
          --lightest-slate: #ccd6f6;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background-color 0.3s, color 0.3s;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .header-shadow {
          box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
        }

        .hamburger-line {
          transition: all 0.3s ease-in-out;
        }

        .hamburger.active .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .skills-tab.active {
          color: var(--brand);
          border-left-color: var(--brand);
          background-color: #112240;
        }

        .dark .skills-tab.active {
          background-color: #112240;
        }

        .light .skills-tab.active {
          background-color: #e6f7ff;
        }

        .transition-colors {
          transition: color 0.3s;
        }

        .transition-all {
          transition: all 0.3s;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <a href="#home" className="z-50">
            <svg className="w-10 h-10" style={{ color: 'var(--brand)' }} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 2.00003L52 14.5V40L27 52.5L2 40V14.5L27 2.00003Z" stroke="currentColor" strokeWidth="3"/>
              <path d="M27 23.5L2 14.5" stroke="currentColor" strokeWidth="2"/>
              <path d="M27 23.5L52 14.5" stroke="currentColor" strokeWidth="2"/>
              <path d="M27 52.5V23.5" stroke="currentColor" strokeWidth="2"/>
              <text x="20" y="35" fontFamily="Space Mono, monospace" fontSize="16" fill="currentColor">7K</text>
            </svg>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ol className="flex items-center space-x-8 text-sm">
              <li><a href="#about" style={{ color: 'var(--lightest-slate)' }} className="hover:text-brand transition-colors"><span style={{ color: 'var(--brand)' }}>01.</span> About</a></li>
              <li><a href="#skills" style={{ color: 'var(--lightest-slate)' }} className="hover:text-brand transition-colors"><span style={{ color: 'var(--brand)' }}>02.</span> Skills</a></li>
              <li><a href="#projects" style={{ color: 'var(--lightest-slate)' }} className="hover:text-brand transition-colors"><span style={{ color: 'var(--brand)' }}>03.</span> Projects</a></li>
              <li><a href="#contact" style={{ color: 'var(--lightest-slate)' }} className="hover:text-brand transition-colors"><span style={{ color: 'var(--brand)' }}>04.</span> Contact</a></li>
            </ol>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate/10 transition-colors">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <a href="/Kunal-Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', borderColor: 'var(--brand)' }} className="border rounded-md px-4 py-2 text-sm hover:opacity-80 transition-all">Resume</a>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden z-50 hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="space-y-2">
              <span className="block w-8 h-0.5 hamburger-line" style={{ backgroundColor: 'var(--text-color)' }}></span>
              <span className="block w-8 h-0.5 hamburger-line" style={{ backgroundColor: 'var(--text-color)' }}></span>
              <span className="block w-8 h-0.5 hamburger-line" style={{ backgroundColor: 'var(--text-color)' }}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-0 right-0 h-screen w-3/4 bg-light-navy shadow-lg md:hidden">
            <nav className="mt-24">
              <ol className="flex flex-col items-center space-y-8 text-lg text-center" style={{ color: 'var(--lightest-slate)' }}>
                <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:text-brand"><span style={{ color: 'var(--brand)' }} className="block mb-1">01.</span> About</a></li>
                <li><a href="#skills" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:text-brand"><span style={{ color: 'var(--brand)' }} className="block mb-1">02.</span> Skills</a></li>
                <li><a href="#projects" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:text-brand"><span style={{ color: 'var(--brand)' }} className="block mb-1">03.</span> Projects</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:text-brand"><span style={{ color: 'var(--brand)' }} className="block mb-1">04.</span> Contact</a></li>
                <li>
                  <a href="/Kunal-Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', borderColor: 'var(--brand)' }} className="mt-8 inline-block border rounded-md px-8 py-4 text-lg hover:opacity-80 transition-all">Resume</a>
                </li>
              </ol>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingLeft: 'clamp(1.5rem, 2vw, 12rem)', paddingRight: 'clamp(1.5rem, 2vw, 12rem)' }}>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto">
          <p className="fade-in-up" style={{ color: 'var(--brand)', fontSize: '1rem', marginBottom: '1rem' }}>Hi, my name is</p>
          <h1 className="fade-in-up text-6xl md:text-7xl font-extrabold" style={{ color: 'var(--lightest-slate)', transitionDelay: '200ms' }}>Kunal.</h1>
          <h2 className="fade-in-up text-5xl md:text-6xl font-extrabold" style={{ color: 'var(--slate)', transitionDelay: '300ms', minHeight: '1.5em' }}>
            {typedText}
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg fade-in-up" style={{ transitionDelay: '400ms' }}>
            I'm a detail-oriented 12th-grade student from Maharashtra, India, with a passion for law and technology. I am diligently preparing for the MH-CET Law exam to pursue a career as a corporate lawyer, while simultaneously exploring my interests in coding and hardware to build innovative solutions.
          </p>
          <div className="mt-12 fade-in-up" style={{ transitionDelay: '500ms' }}>
            <a href="#contact" style={{ color: 'var(--brand)', borderColor: 'var(--brand)' }} className="inline-block border rounded-md px-8 py-4 text-lg hover:opacity-80 transition-all">
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 max-w-4xl mx-auto fade-in-up">
          <h2 className="flex items-center text-3xl font-bold mb-8" style={{ color: 'var(--lightest-slate)' }}>
            <span style={{ color: 'var(--brand)' }} className="font-mono text-2xl mr-4">01.</span> About Me
            <span className="flex-grow h-px ml-4" style={{ backgroundColor: 'rgba(136, 146, 176, 0.3)' }}></span>
          </h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 text-base md:text-lg space-y-4" style={{ color: 'var(--text-color)' }}>
              <p>Hello! My name is Kunal. Ever since I was young, I've been captivated by the logic of legal arguments and the strategic depth of puzzles. This dual interest naturally led me to the path of corporate law, where complex problems require analytical and creative solutions. To me, legal cases are like intricate puzzles waiting to be solved, a challenge I eagerly embrace.</p>
              <p>But my curiosity doesn't stop at the law. I see technology as a powerful tool for change and efficiency. I spend my spare time coding simple applications and tinkering with hardware, not just as a hobby, but to build tools that can streamline processes—perhaps even legal research one day. This blend of disciplines allows me to approach challenges with a unique, multi-faceted perspective.</p>
              <p>I approach every challenge, whether it's a debate, a chess match, or a coding bug, with a mindset focused on strategy and relentless problem-solving.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-4xl mx-auto fade-in-up">
          <h2 className="flex items-center text-3xl font-bold mb-8" style={{ color: 'var(--lightest-slate)' }}>
            <span style={{ color: 'var(--brand)' }} className="font-mono text-2xl mr-4">02.</span> My Skillset
            <span className="flex-grow h-px ml-4" style={{ backgroundColor: 'rgba(136, 146, 176, 0.3)' }}></span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <ul className="font-mono text-sm space-y-1">
                {['legal-skills', 'tech-skills', 'soft-skills'].map((tabId) => (
                  <li key={tabId}>
                    <button
                      onClick={() => setActiveSkillTab(tabId)}
                      className={`skills-tab w-full text-left p-3 border-l-2 transition-all duration-300 ${activeSkillTab === tabId ? 'active' : ''}`}
                      style={{
                        borderLeftColor: activeSkillTab === tabId ? 'var(--brand)' : 'rgba(136, 146, 176, 0.3)',
                        color: activeSkillTab === tabId ? 'var(--brand)' : 'inherit',
                        backgroundColor: activeSkillTab === tabId ? '#112240' : 'transparent'
                      }}
                    >
                      {tabId === 'legal-skills' && 'Legal & Analytical'}
                      {tabId === 'tech-skills' && 'Technical'}
                      {tabId === 'soft-skills' && 'Soft Skills'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-2/3">
              {activeSkillTab === 'legal-skills' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--lightest-slate)' }}>Legal & Analytical Skills</h3>
                  <p>My analytical abilities are at the core of my ambition to become a lawyer. I excel at deconstructing complex problems and developing logical, evidence-based arguments.</p>
                  <ul className="space-y-2 font-mono text-sm">
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Legal Research:</strong> Proficient in researching case law and statutory provisions.</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Analytical Reasoning:</strong> Consistently score high on analytical reasoning sections.</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Mock Trials:</strong> Actively participated in school-level mock trials.</span></li>
                  </ul>
                </div>
              )}
              {activeSkillTab === 'tech-skills' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--lightest-slate)' }}>Technical Skills</h3>
                  <p>I build practical tools and websites to sharpen my technical knowledge. Each project is a learning opportunity.</p>
                  <ul className="space-y-2 font-mono text-sm">
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Web Development:</strong> HTML, CSS, Tailwind, JavaScript</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Hardware:</strong> Arduino, circuits, sensor integration</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Certifications:</strong> Basic Python for Everybody (Coursera)</span></li>
                  </ul>
                </div>
              )}
              {activeSkillTab === 'soft-skills' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--lightest-slate)' }}>Soft Skills</h3>
                  <p>Beyond technical abilities, I pride myself on interpersonal and cognitive skills.</p>
                  <ul className="space-y-2 font-mono text-sm">
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Strategic Planning:</strong> Developed through competitive chess</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Communication:</strong> Fluent in English and Hindi</span></li>
                    <li className="flex items-start"><span style={{ color: 'var(--brand)' }} className="mr-2 mt-1">▹</span><span><strong style={{ color: 'var(--light-slate)' }}>Problem-Solving:</strong> Logic puzzles and strategic thinking</span></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 max-w-5xl mx-auto fade-in-up">
          <h2 className="flex items-center text-3xl font-bold mb-12" style={{ color: 'var(--lightest-slate)' }}>
            <span style={{ color: 'var(--brand)' }} className="font-mono text-2xl mr-4">03.</span> Things I've Built
            <span className="flex-grow h-px ml-4" style={{ backgroundColor: 'rgba(136, 146, 176, 0.3)' }}></span>
          </h2>
          <div className="space-y-16">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-6 rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x360/0a192f/64ffda?text=7K+Law+Prep" alt="7K Law Prep" className="w-full grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
              <div className="col-span-12 md:col-span-6 md:text-right z-20">
                <p style={{ color: 'var(--brand)' }} className="font-mono text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--lightest-slate)' }}>7K Law Prep</h3>
                <div style={{ backgroundColor: 'white', color: '#0a192f' }} className="shadow-lg rounded-md p-6 dark:bg-light-navy dark:text-inherit">
                  <p>A curated study hub I built to organize my notes for the MH-CET Law exam. The goal was to consolidate key statutes, case law summaries, and practice quizzes into one accessible location.</p>
                </div>
                <ul className="flex justify-end space-x-4 font-mono text-sm mt-4" style={{ color: 'var(--slate)' }}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto fade-in-up">
          <h2 style={{ color: 'var(--brand)' }} className="font-mono text-lg">04. What's Next?</h2>
          <h3 className="font-bold text-5xl" style={{ color: 'var(--lightest-slate)', marginTop: '1rem', marginBottom: '1.5rem' }}>Get In Touch</h3>
          <p style={{ marginBottom: '2.5rem' }}>
            My inbox is always open. Whether you have a question, a potential opportunity, or just want to connect, feel free to reach out!
          </p>
          <form className="text-left space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--slate)' }}>Name</label>
                <input type="text" id="name" name="name" required style={{ backgroundColor: 'rgba(136, 146, 176, 0.1)' }} className="w-full p-3 rounded-md border border-slate/30 focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--slate)' }}>Email</label>
                <input type="email" id="email" name="email" required style={{ backgroundColor: 'rgba(136, 146, 176, 0.1)' }} className="w-full p-3 rounded-md border border-slate/30 focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--slate)' }}>Message</label>
              <textarea id="message" name="message" rows={4} required style={{ backgroundColor: 'rgba(136, 146, 176, 0.1)' }} className="w-full p-3 rounded-md border border-slate/30 focus:outline-none focus:ring-2 focus:ring-brand"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" style={{ color: 'var(--brand)', borderColor: 'var(--brand)' }} className="border rounded-md px-8 py-4 text-lg hover:opacity-80 transition-all mt-4">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center" style={{ color: 'var(--slate)', fontSize: '0.75rem' }}>
        <p className="font-mono">
          Designed & Built by Kunal & Gemini. Current as of June 2025.
        </p>
      </footer>

      <script>{`
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });

        const elementsToAnimate = document.querySelectorAll('.fade-in-up');
        elementsToAnimate.forEach(el => observer.observe(el));
      `}</script>
    </div>
  );
}

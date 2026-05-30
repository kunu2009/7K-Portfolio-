import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'App Store', href: '#apps' },
  { name: 'Books', href: '#books' },
  { name: 'Services', href: '#services' },
  { name: 'Templates', href: '#templates' },
  { name: 'Others', href: '#others' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-end mb-12 border-b border-black/10 pb-6 w-full"
    >
      <div>
        <a href="#" className="block group">
          <h1 className="text-4xl font-serif italic tracking-tight text-[#121212] group-hover:text-amber-700 transition-colors">7KC.me</h1>
          <p className="text-[10px] uppercase tracking-widest text-black/50 mt-1 font-semibold hidden sm:block">Kunal Chheda / Portfolio</p>
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-[#121212]">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="hover:text-amber-700 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden p-2 text-black/60 hover:text-black transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white border border-black/10 px-6 py-4 flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#121212] hover:text-amber-700 py-2 border-b border-black/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

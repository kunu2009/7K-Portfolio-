import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';

interface ThemeSwitcherProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
}

export default function ThemeSwitcher({ currentTheme, setTheme }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // New graphic-focused unique themes
  const themes = [
    { id: 'collage', label: 'Graphic Collage' },
    { id: 'zine', label: 'Punk Zine' },
    { id: 'manga', label: 'Manga / Comic Panel' },
    { id: 'ethereal', label: 'Ethereal Shadows' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[99999]">
      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Menu Panel */}
      <div className={`relative z-50 transition-all origin-bottom-right absolute bottom-16 right-0 mb-4 bg-white/95 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/10 w-[260px] ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
         <div className="flex justify-between items-center mb-4 px-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#121212]">Graphic Interfaces</span>
            <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black bg-black/5 p-1.5 rounded-full transition-colors"><X size={14} /></button>
         </div>
         <div className="flex flex-col gap-2">
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setIsOpen(false); }}
                className={`text-left px-4 py-3 rounded-2xl transition-all text-sm font-bold ${
                  currentTheme === t.id 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-transparent text-black/70 hover:bg-black/5'
                }`}
              >
                {t.label}
              </button>
            ))}
         </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all relative z-50 border-2 border-white/10"
      >
        {isOpen ? <X size={24} /> : <Palette size={24} />}
      </button>
    </div>
  );
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Manifesto block mimicking a torn or stylized zine page edge.
 */
export const ZineManifesto = ({ title, text, icon }: { title: string, text: string, icon?: React.ReactNode }) => (
  <div className="bg-[#D5FF00] p-6 border-4 border-black rounded-tl-3xl rounded-br-3xl shadow-[8px_8px_0_0_#000]">
    <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
      <h2 className="font-black text-2xl uppercase">{title}</h2>
      {icon}
    </div>
    <p className="font-bold text-lg leading-snug">{text}</p>
  </div>
);

/**
 * Rotated list mimicking a taped or rotated paper clipping.
 */
export const ZineListBlock = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-black text-white p-6 border-4 border-black transform rotate-2 hover:-rotate-1 transition-transform">
    <h2 className="font-mono text-sm tracking-[0.3em] uppercase mb-6 text-[#D5FF00]">{title}</h2>
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-center justify-between font-bold text-lg border-b border-white/20 pb-2">
          <span className="uppercase">{item}</span>
          <ArrowUpRight size={20} className="text-[#D5FF00]" />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A highly graphic card mimicking a cutout sticker or zine element.
 */
export const ZineCard = ({ title, description, icon, isRotated = false }: { title: string, description: string, icon: React.ReactNode, isRotated?: boolean }) => (
  <div className={`p-6 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[12px_12px_0_0_#D5FF00] transition-all hover:-translate-y-1 group relative ${isRotated ? 'rotate-2 md:mt-4' : '-rotate-1'}`}>
    <div className="w-12 h-12 bg-black text-[#D5FF00] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-black text-2xl uppercase mb-2 group-hover:text-black">{title}</h3>
    <p className="font-medium text-black/70 leading-relaxed">{description}</p>
    
    {/* Decorative tape */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-black/20 rotate-3 backdrop-blur-sm"></div>
  </div>
);

/**
 * Massive overlapping hero header text.
 */
export const ZineHeader = ({ firstName, lastName, badgeText }: { firstName: string, lastName: string, badgeText: React.ReactNode }) => (
  <div className="relative mb-20">
    <h1 className="text-[120px] md:text-[200px] font-black uppercase leading-[0.75] tracking-tighter mix-blend-difference text-[#D5FF00] relative z-20">
      {firstName}
    </h1>
    <h1 className="text-[100px] md:text-[140px] font-serif italic font-black uppercase leading-[0.8] text-black -mt-6 md:-mt-20 ml-10 md:ml-32 relative z-10 border-4 border-black inline-block bg-white p-2 md:p-4 -rotate-3 hover:rotate-0 transition-transform">
      {lastName}
    </h1>
    <div className="absolute top-10 flex right-10 md:top-20 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full text-white items-center justify-center text-center font-bold uppercase tracking-widest text-[9px] md:text-xs p-4 animate-[spin_10s_linear_infinite]">
      {badgeText}
    </div>
  </div>
);

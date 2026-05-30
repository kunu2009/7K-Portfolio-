import React from 'react';

export const EtherealHero = ({ name, subtitle }: { name: string, subtitle: string }) => (
  <header className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
    <div>
      <h1 className="text-6xl md:text-[100px] font-normal tracking-wide text-[#FFFFFF] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] leading-none mb-4">
        {name.split(' ').map((t, i) => <React.Fragment key={i}>{t}<br/></React.Fragment>)}
      </h1>
      <p className="text-xl md:text-2xl text-[#8E9DBE] italic tracking-wider font-light">
        {subtitle}
      </p>
    </div>
    <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center opacity-50 shrink-0 mx-auto md:mx-0">
       <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
    </div>
  </header>
);

export const EtherealSectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center gap-6 mb-12">
    <h2 className="text-xs uppercase tracking-[0.4em] text-[#8E9DBE] whitespace-nowrap">{title}</h2>
    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
  </div>
);

export const EtherealCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-transparent border-t border-l border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-[20px_20px_50px_rgba(0,0,0,0.4),_inset_1px_1px_0px_rgba(255,255,255,0.05)] hover:-translate-y-3 hover:shadow-[30px_30px_60px_rgba(0,0,0,0.5),_inset_1px_1px_0px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer group">
    <div className="text-white/30 group-hover:text-white group-hover:drop-shadow-[0_0_10px_white] transition-all duration-500 mb-8 inline-block transform origin-left scale-150">
      {icon}
    </div>
    <h3 className="text-2xl font-light tracking-wide mb-3 text-white/90">{title}</h3>
    <p className="text-sm text-white/50 leading-loose font-sans font-light tracking-wide">{description}</p>
  </div>
);

export const EtherealTag = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-4 rounded-full bg-[#1B273A]/80 backdrop-blur-sm text-[#8E9DBE] font-sans font-light text-sm tracking-widest border border-white/5 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:text-white transition-colors cursor-pointer">
    {children}
  </div>
);

export const EtherealListItem = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="border-b border-white/10 pb-8 group cursor-pointer">
    <h3 className="text-xl md:text-2xl font-light text-white/70 group-hover:text-white mb-3 transition-colors tracking-wide">{title}</h3>
    <p className="text-sm text-white/40 italic leading-relaxed">{subtitle}</p>
  </div>
);

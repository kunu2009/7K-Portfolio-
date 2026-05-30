import React from 'react';

export const MangaCover = ({ title, subtitle, episode }: { title: string, subtitle: string, episode: string }) => (
  <div className="border-[6px] border-black bg-white p-6 md:p-14 shadow-[12px_12px_0_0_#000] relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
    
    <div className="bg-black text-white inline-block px-4 py-2 font-black uppercase tracking-widest text-xs md:text-sm skew-x-[-15deg] mb-6 shadow-[4px_4px_0_0_#E60000]">
      <div className="skew-x-[15deg]">{episode}</div>
    </div>
    
    <h1 className="text-[80px] md:text-[140px] font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
      {title.split(' ').map((t, i) => <React.Fragment key={i}>{t}<br/></React.Fragment>)}
    </h1>
    
    <div className="bg-white border-[4px] border-black p-4 inline-block shadow-[6px_6px_0_0_#000] rotate-2 max-w-lg">
      <p className="font-bold text-lg md:text-xl leading-tight">
        {subtitle}
      </p>
    </div>
  </div>
);

export const MangaPanelList = ({ title, items }: { title: string, items: string[] }) => (
  <div className="border-[6px] border-black bg-white p-6 md:p-8 shadow-[12px_12px_0_0_#000] flex flex-col justify-center h-full">
    <h2 className="font-black text-3xl uppercase italic mb-8 border-b-4 border-black pb-2 inline-block w-fit">{title}</h2>
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="font-black text-xl uppercase border-[3px] border-black p-3 bg-white hover:bg-black hover:text-white transition-colors cursor-crosshair transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#E60000]">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export const MangaActionCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="border-[4px] border-white p-5 hover:bg-white hover:text-black transition-colors cursor-pointer group bg-black relative">
    {/* Speed lines effect inside card on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
    
    <div className="text-red-500 mb-4 scale-150 transform origin-left">{icon}</div>
    <h3 className="font-black text-2xl uppercase mb-2 tracking-tight leading-none">{title}</h3>
    <p className="font-bold text-sm opacity-80">{description}</p>
  </div>
);

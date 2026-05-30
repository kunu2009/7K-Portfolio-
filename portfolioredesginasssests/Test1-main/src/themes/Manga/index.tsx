import React from 'react';
import { appsData, booksData, servicesData } from '../../data';
import { MangaCover, MangaPanelList, MangaActionCard } from './components';

export default function MangaTheme() {
  return (
    <div className="bg-white min-h-[100dvh] text-black font-sans pb-32 relative overflow-hidden selection:bg-red-600 selection:text-white">
      
      {/* Halftone / Screentone Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '8px 8px' }}>
      </div>

      <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-4 relative z-10 mt-8">
        
        {/* Main Cover Panel */}
        <MangaCover 
          title="KUNAL CHHEDA" 
          subtitle="Executing raw, uncut digital utility! Building systems that strike with precision and zero hesitation!"
          episode="Episode 01: The Architect"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Side Panel: Services */}
          <div className="md:col-span-4">
            <MangaPanelList 
              title="Combat Skills" 
              items={servicesData.map(s => s.title)} 
            />
          </div>

          {/* Action Panels: Apps */}
          <div className="md:col-span-8 border-[6px] border-black bg-black text-white p-6 md:p-8 shadow-[12px_12px_0_0_#E60000] overflow-hidden">
             <h2 className="font-black text-4xl uppercase italic mb-8 text-white tracking-tighter">
               Arsenal Modules!
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
               {appsData.map((app, i) => (
                 <MangaActionCard 
                   key={i} 
                   title={app.title} 
                   description={app.description}
                   icon={React.cloneElement(app.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                 />
               ))}
             </div>
          </div>

        </div>

        {/* Footer Panel: Books & Templates */}
        <div className="border-[6px] border-black bg-white p-6 md:p-10 shadow-[12px_12px_0_0_#000] relative overflow-hidden mt-4 pb-16">
          <div className="absolute bottom-0 right-0 w-32 h-64 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#000_4px,#000_8px)] opacity-30 skew-x-[45deg]"></div>
          
          <h2 className="font-black text-4xl uppercase italic mb-8 inline-block bg-black text-white px-4 py-2 skew-x-[-10deg]">
            <div className="skew-x-[10deg]">Sacred Tomes // Assets</div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {booksData.map((book, i) => (
              <div key={i} className="border-[4px] border-black p-5 bg-white shadow-[6px_6px_0_0_#000]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-xl uppercase leading-tight line-clamp-2">{book.title}</h3>
                </div>
                <p className="text-sm font-bold opacity-80 mb-4">{book.description}</p>
                <div className="inline-block bg-red-600 text-white font-black px-2 py-1 text-xs">
                  RELEASE: {book.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

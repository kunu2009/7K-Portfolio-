import React from 'react';
import { appsData, servicesData, templatesData } from '../../data';
import { Flame, Asterisk } from 'lucide-react';
import { ZineHeader, ZineManifesto, ZineListBlock, ZineCard } from './components';

export default function ZineTheme() {
  return (
    <div className="min-h-[100dvh] bg-[#E5E5E5] text-black font-sans selection:bg-[#D5FF00] selection:text-black pb-32 relative overflow-hidden">
      {/* Background Texture mock */}
      <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1200px] mx-auto p-4 md:p-8 relative z-10">
        
        {/* Massive overlapping intro */}
        <ZineHeader 
          firstName="KUNAL" 
          lastName="CHHEDA" 
          badgeText={<>Graphic <br/> Utility <br/> Engine</>} 
        />

        {/* Masonry/Collage layout */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <ZineManifesto 
              title="Manifesto" 
              text="Building intense, high-utility digital ecosystems. Zero friction. Total clarity. Post-modern architecture."
              icon={<Asterisk size={32} className="animate-spin-slow" />}
            />

            <ZineListBlock 
              title="Capabilities" 
              items={servicesData.map(s => s.title)} 
            />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            
            {/* Apps Grid - Collage Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute -inset-4 border-4 border-black border-dashed pointer-events-none opacity-20 hidden md:block"></div>
              {appsData.map((app, i) => (
                <ZineCard 
                  key={i} 
                  title={app.title} 
                  description={app.description} 
                  icon={app.icon} 
                  isRotated={i % 2 !== 0} 
                />
              ))}
            </div>

            {/* Assets/Templates */}
            <div className="bg-[#FF00FF] p-6 border-4 border-black text-white shadow-[8px_8px_0_0_#000] relative overflow-hidden mt-0 md:mt-8">
               <h2 className="font-black text-3xl md:text-4xl uppercase mb-8 relative z-10">Digital Assets</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                 {templatesData.map((tpl, i) => (
                   <div key={i} className="bg-white text-black p-4 border-2 border-black flex flex-col justify-between hover:bg-black hover:text-[#D5FF00] transition-colors cursor-crosshair h-32">
                     <h3 className="font-bold uppercase text-lg leading-tight">{tpl.name}</h3>
                     <div className="flex justify-between items-end font-mono text-[10px] uppercase font-bold">
                       <span>{tpl.platform}</span>
                       <span className="bg-[#D5FF00] text-black px-1 border border-black">{tpl.price}</span>
                     </div>
                   </div>
                 ))}
               </div>
               {/* Large background decorative */}
               <Flame size={200} className="absolute -bottom-10 -right-10 text-black/10 pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

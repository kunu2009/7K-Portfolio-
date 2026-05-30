import React from 'react';
import { appsData, booksData, servicesData } from '../../data';
import { Sparkles, Hexagon, Zap } from 'lucide-react';
import { CollageHero, CollageAccentBox, CollageCard, CollageTag } from './components';

export default function CollageTheme() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f0] font-sans p-2 md:p-6 overflow-x-hidden selection:bg-red-600 selection:text-white pb-32">
       
       {/* Background Noise/Grid */}
       <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

       <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] gap-3 md:gap-5 relative z-10 pt-4 md:pt-10">
         
         {/* Hero Block - Spans massive space */}
         <div className="col-span-2 row-span-3 md:col-span-4 md:row-span-3">
           <CollageHero 
             name="Kunal Chheda" 
             subtitle="Crafting radical clarity through intense digital utility." 
           />
         </div>

         {/* Graphic Vibe Block 1 */}
         <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-2">
           <CollageAccentBox 
             icon={<Zap size={60} className="text-white fill-white animate-pulse" />} 
             text="Think Faster" 
           />
         </div>

         {/* Icon Block */}
         <div className="col-span-1 row-span-1 bg-[#151515] rounded-2xl flex items-center justify-center border border-[#333] group hover:border-[#666] transition-colors">
            <Hexagon size={50} className="text-[#444] group-hover:text-red-500 transition-colors" />
         </div>

         {/* Apps Dynamic Layout */}
         {appsData.map((app, i) => (
           <div key={i} className={i === 0 ? 'col-span-2 row-span-2' : 'col-span-2 row-span-1'}>
             <CollageCard 
               title={app.title}
               description={app.description}
               icon={app.icon}
               stepLabel={`File 0${i+1}`}
               isFeatured={i === 0}
             />
           </div>
         ))}

         {/* Text/Quote Block */}
         <div className="col-span-2 row-span-1 bg-white text-black rounded-2xl p-6 flex items-center justify-between border-4 border-[#333]">
           <span className="font-black italic text-2xl md:text-3xl uppercase tracking-tighter">Reaper</span>
           <Sparkles size={32} className="text-red-600 fill-red-600" />
         </div>

         {/* Services Block */}
         <div className="col-span-2 md:col-span-4 row-span-2 bg-[#141414] rounded-2xl p-6 md:p-10 flex flex-col justify-center border border-[#222]">
           <h3 className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
             <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> Capabilities //
           </h3>
           <div className="flex flex-wrap gap-2 md:gap-3">
             {servicesData.map((svc, i) => (
               <CollageTag key={i}>{svc.title}</CollageTag>
             ))}
           </div>
         </div>

         {/* Books / Stack */}
         <div className="col-span-2 row-span-3 bg-[#111] rounded-2xl p-6 md:p-8 flex flex-col border-r-4 border-b-4 border-red-600 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
             <Hexagon size={120} />
           </div>
           <h3 className="font-black text-2xl md:text-4xl uppercase mb-8 tracking-tighter text-white">Archives</h3>
           <div className="space-y-6 flex-1">
             {booksData.map((book, i) => (
               <div key={i} className="group cursor-pointer">
                 <span className="text-[10px] text-red-500 font-bold mb-1 block uppercase tracking-widest">{book.year}</span>
                 <h4 className="font-bold text-lg md:text-xl leading-tight group-hover:text-red-400 transition-colors">{book.title}</h4>
               </div>
             ))}
           </div>
         </div>

       </div>
    </div>
  );
}

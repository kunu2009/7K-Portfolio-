import React from 'react';
import { appsData, booksData, servicesData } from '../../data';
import { EtherealHero, EtherealSectionTitle, EtherealCard, EtherealTag, EtherealListItem } from './components';

export default function EtherealTheme() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0D14] text-[#E0E6ED] font-serif overflow-hidden relative pb-32 selection:bg-white/20 selection:text-white">
      
      {/* Layered landscape abstract shapes - creates depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-20%] w-[140%] h-[120%] bg-[#0F1622] rounded-[100%] blur-[2px] shadow-[0_-50px_100px_rgba(0,0,0,0.8)]"></div>
        <div className="absolute top-[35%] left-[-10%] w-[120%] h-[100%] bg-[#151E2E] rounded-[100%] blur-[2px] shadow-[0_-30px_80px_rgba(0,0,0,0.9)]"></div>
        <div className="absolute top-[60%] left-[-15%] w-[130%] h-[100%] bg-[#1B273A] rounded-[100%] blur-[2px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"></div>
        
        {/* Distant moon / light source */}
        <div className="absolute top-[15%] right-[15%] w-32 h-32 bg-[#E0E6ED] rounded-full blur-[8px] opacity-40 shadow-[0_0_150px_rgba(224,230,237,0.8)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto relative z-10 px-6 pt-32 pb-12 flex flex-col gap-32">
        
        <EtherealHero 
          name="Kunal Chheda" 
          subtitle="Echoes of utility in the void." 
        />

        {/* Modules as floating ethereal constructs */}
        <section>
          <EtherealSectionTitle title="Constructs" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {appsData.map((app, i) => (
              <EtherealCard 
                key={i}
                title={app.title}
                description={app.description}
                icon={React.cloneElement(app.icon as React.ReactElement, { strokeWidth: 1 })}
              />
            ))}
          </div>
        </section>

        {/* Services & Reading */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
           <div>
              <EtherealSectionTitle title="Manifestations" />
              <div className="flex gap-4 flex-wrap">
                {servicesData.map((svc, i) => (
                  <EtherealTag key={i}>{svc.title}</EtherealTag>
                ))}
              </div>
           </div>
           
           <div>
              <EtherealSectionTitle title="Tomes" />
              <div className="flex flex-col gap-8">
                {booksData.map((book, i) => (
                   <EtherealListItem 
                     key={i}
                     title={book.title}
                     subtitle={book.description}
                   />
                ))}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}

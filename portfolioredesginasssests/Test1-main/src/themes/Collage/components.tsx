import React from 'react';

/**
 * Hero component for Collage theme. It has bold red accents and a brutalist typography layout.
 */
export const CollageHero = ({
  name,
  subtitle,
  watermark = 'KX',
  statusBadge = 'System Initiated',
}: {
  name: string;
  subtitle: string;
  watermark?: string;
  statusBadge?: string;
}) => {
  return (
    <div className="bg-[#e6e4d9] text-[#111] p-6 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between group shadow-2xl h-full">
      <div className="absolute -right-10 -bottom-10 text-[180px] md:text-[250px] text-red-600/10 font-serif italic font-black group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none">
        {watermark}
      </div>
      <div>
        <div className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4 shadow-[4px_4px_0_0_#000]">
          {statusBadge}
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mix-blend-multiply">
          {name.split(' ').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </h1>
      </div>
      <div className="mt-8 relative z-10">
        <p className="font-bold text-lg md:text-2xl leading-tight border-l-4 border-red-600 pl-4 max-w-md bg-white/50 backdrop-blur-sm p-3 rounded">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

/**
 * Reusable card for items like apps/projects.
 */
export const CollageCard = ({
  title,
  description,
  icon,
  stepLabel,
  isFeatured = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  stepLabel?: string;
  isFeatured?: boolean;
}) => (
  <div className={`rounded-2xl p-5 md:p-6 flex flex-col justify-between border-2 border-[#1a1a1a] bg-[#111] hover:border-red-600 hover:bg-[#1a1a1a] transition-colors cursor-pointer group h-full`}>
    <div className="flex justify-between items-start text-[#555] group-hover:text-red-500 transition-colors">
      {icon}
      {stepLabel && <span className="text-[10px] font-bold tracking-widest uppercase">{stepLabel}</span>}
    </div>
    <div>
      <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight mb-1 text-white">{title}</h3>
      {isFeatured ? (
        <p className="text-sm text-[#888] font-medium leading-relaxed mt-2">{description}</p>
      ) : (
        <p className="text-xs text-[#666] font-medium mt-1 line-clamp-2">{description}</p>
      )}
    </div>
  </div>
);

/**
 * Pill component for capabilities/tags.
 */
export const CollageTag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 md:px-5 py-2 md:py-3 border-2 border-[#333] rounded-xl text-xs md:text-sm font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer">
    {children}
  </span>
);

/**
 * Red accent box with a centered icon and text.
 */
export const CollageAccentBox = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="bg-red-600 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group h-full">
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
    <div className="mb-2">{icon}</div>
    <div className="text-white font-black uppercase text-2xl md:text-4xl text-center leading-[0.9]">
      {text.split(' ').map((part, i) => (
        <React.Fragment key={i}>
          {part}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);

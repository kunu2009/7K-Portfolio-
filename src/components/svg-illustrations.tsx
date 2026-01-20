// Eye-catching SVG graphics for templates
import React from 'react';

export const HotelIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B8942C" />
      </linearGradient>
    </defs>
    {/* Building */}
    <rect x="80" y="50" width="240" height="200" fill="url(#hotelGrad)" rx="8"/>
    <rect x="90" y="60" width="220" height="180" fill="#1A1410" opacity="0.2"/>
    {/* Windows */}
    {[...Array(3)].map((_, row) => (
      [...Array(4)].map((_, col) => (
        <rect
          key={`${row}-${col}`}
          x={110 + col * 50}
          y={80 + row * 50}
          width="30"
          height="35"
          fill="#FFF4E6"
          opacity="0.9"
          rx="2"
        />
      ))
    ))}
    {/* Entrance */}
    <rect x="165" y="200" width="70" height="50" fill="#8B4513" rx="4"/>
    <circle cx="200" cy="225" r="25" fill="#D4AF37" opacity="0.3"/>
    {/* Crown decoration */}
    <path d="M 200 30 L 210 45 L 220 30 L 230 45 L 240 30 L 230 50 L 200 50 Z" fill="#D4AF37"/>
  </svg>
);

export const TravelIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="travelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D4FF" />
        <stop offset="100%" stopColor="#0096FF" />
      </linearGradient>
    </defs>
    {/* Airplane */}
    <path d="M 150 150 L 250 130 L 270 135 L 260 145 L 250 155 L 240 160 L 180 170 Z" fill="url(#travelGrad)"/>
    <ellipse cx="270" cy="135" rx="20" ry="8" fill="#00D4FF"/>
    <rect x="200" y="140" width="40" height="15" fill="#FFF" opacity="0.8" rx="2"/>
    {/* Clouds */}
    <circle cx="100" cy="80" r="20" fill="#FFF" opacity="0.6"/>
    <circle cx="120" cy="75" r="25" fill="#FFF" opacity="0.6"/>
    <circle cx="140" cy="80" r="20" fill="#FFF" opacity="0.6"/>
    <circle cx="320" cy="200" r="18" fill="#FFF" opacity="0.5"/>
    <circle cx="335" cy="195" r="22" fill="#FFF" opacity="0.5"/>
    {/* Globe */}
    <circle cx="200" cy="220" r="50" fill="none" stroke="#00D4FF" strokeWidth="3"/>
    <ellipse cx="200" cy="220" rx="50" ry="20" fill="none" stroke="#00D4FF" strokeWidth="2"/>
    <ellipse cx="200" cy="220" rx="20" ry="50" fill="none" stroke="#00D4FF" strokeWidth="2"/>
  </svg>
);

export const SaaSIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="saasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C5CFF" />
        <stop offset="100%" stopColor="#5C3FFF" />
      </linearGradient>
    </defs>
    {/* Dashboard */}
    <rect x="60" y="60" width="280" height="180" fill="url(#saasGrad)" rx="12"/>
    <rect x="70" y="70" width="260" height="30" fill="#FFF" opacity="0.1" rx="6"/>
    {/* Cards */}
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={80 + i * 90}
        y="120"
        width="70"
        height="90"
        fill="#FFF"
        opacity="0.15"
        rx="8"
      />
    ))}
    {/* Charts */}
    <path d="M 80 180 L 110 160 L 140 170 L 170 150 L 200 155" stroke="#FFF" strokeWidth="3" opacity="0.8"/>
    {/* Notification badge */}
    <circle cx="320" cy="75" r="12" fill="#FF6B6B"/>
    <text x="320" y="80" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold">3</text>
  </svg>
);

export const EcommerceIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    {/* Shopping bag */}
    <path d="M 120 100 L 280 100 L 300 260 L 100 260 Z" fill="url(#ecomGrad)" opacity="0.9"/>
    <path d="M 140 100 L 140 90 Q 140 60 170 60 L 230 60 Q 260 60 260 90 L 260 100" 
      stroke="#FFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
    {/* Products inside */}
    <rect x="130" y="130" width="50" height="50" fill="#FFF" opacity="0.3" rx="4"/>
    <rect x="190" y="130" width="50" height="50" fill="#FFF" opacity="0.3" rx="4"/>
    <rect x="250" y="130" width="30" height="50" fill="#FFF" opacity="0.3" rx="4"/>
    {/* Price tag */}
    <circle cx="320" cy="120" r="35" fill="#FFD93D"/>
    <text x="320" y="130" textAnchor="middle" fill="#FF6B6B" fontSize="24" fontWeight="bold">%</text>
  </svg>
);

export const AgencyIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="agencyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BFFF00" />
        <stop offset="100%" stopColor="#A8E600" />
      </linearGradient>
    </defs>
    {/* Lightbulb */}
    <circle cx="200" cy="120" r="50" fill="url(#agencyGrad)" opacity="0.9"/>
    <rect x="185" y="165" width="30" height="40" fill="#FFF" opacity="0.3" rx="4"/>
    <rect x="175" y="205" width="50" height="8" fill="#333" rx="4"/>
    {/* Rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 200 + Math.cos(rad) * 60;
      const y1 = 120 + Math.sin(rad) * 60;
      const x2 = 200 + Math.cos(rad) * 85;
      const y2 = 120 + Math.sin(rad) * 85;
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#BFFF00" strokeWidth="4" opacity="0.6"/>;
    })}
    {/* Sparkles */}
    <circle cx="280" cy="80" r="4" fill="#BFFF00"/>
    <circle cx="120" cy="90" r="3" fill="#BFFF00"/>
    <circle cx="150" cy="200" r="4" fill="#BFFF00"/>
  </svg>
);

export const PortfolioIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="portfolioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8C42" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>
    {/* Browser window */}
    <rect x="60" y="50" width="280" height="200" fill="url(#portfolioGrad)" rx="8"/>
    <rect x="60" y="50" width="280" height="30" fill="#333" rx="8"/>
    <circle cx="80" cy="65" r="5" fill="#FF5F56"/>
    <circle cx="100" cy="65" r="5" fill="#FFBD2E"/>
    <circle cx="120" cy="65" r="5" fill="#27C93F"/>
    {/* Content */}
    <circle cx="200" cy="140" r="40" fill="#FFF" opacity="0.2"/>
    <rect x="140" y="190" width="120" height="8" fill="#FFF" opacity="0.3" rx="4"/>
    <rect x="160" y="205" width="80" height="6" fill="#FFF" opacity="0.3" rx="3"/>
    {/* Code brackets */}
    <text x="80" y="120" fill="#FFF" fontSize="40" opacity="0.4" fontFamily="monospace">{'<'}</text>
    <text x="300" y="180" fill="#FFF" fontSize="40" opacity="0.4" fontFamily="monospace">{'>'}</text>
  </svg>
);

export const EducationIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="eduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C5CFF" />
        <stop offset="100%" stopColor="#9D7FFF" />
      </linearGradient>
    </defs>
    {/* Graduation cap */}
    <polygon points="200,80 280,110 200,140 120,110" fill="url(#eduGrad)"/>
    <rect x="190" y="140" width="20" height="80" fill="#7C5CFF"/>
    <circle cx="200" cy="220" r="8" fill="#FFD93D"/>
    {/* Book */}
    <rect x="140" y="180" width="120" height="80" fill="#FFF" opacity="0.2" rx="4"/>
    <line x1="200" y1="180" x2="200" y2="260" stroke="#7C5CFF" strokeWidth="3"/>
    <line x1="150" y1="200" x2="190" y2="200" stroke="#7C5CFF" strokeWidth="2" opacity="0.6"/>
    <line x1="150" y1="215" x2="190" y2="215" stroke="#7C5CFF" strokeWidth="2" opacity="0.6"/>
    <line x1="210" y1="200" x2="250" y2="200" stroke="#7C5CFF" strokeWidth="2" opacity="0.6"/>
    <line x1="210" y1="215" x2="250" y2="215" stroke="#7C5CFF" strokeWidth="2" opacity="0.6"/>
    {/* Stars */}
    {[{x: 100, y: 100}, {x: 300, y: 120}, {x: 280, y: 220}].map((star, i) => (
      <circle key={i} cx={star.x} cy={star.y} r="3" fill="#FFD93D"/>
    ))}
  </svg>
);

export const CandleIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="candleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF8C42" />
        <stop offset="50%" stopColor="#FFB84D" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
      <radialGradient id="flameGrad">
        <stop offset="0%" stopColor="#FFD93D" />
        <stop offset="50%" stopColor="#FF8C42" />
        <stop offset="100%" stopColor="#FF6B35" />
      </radialGradient>
    </defs>
    {/* Candle */}
    <rect x="150" y="120" width="100" height="140" fill="url(#candleGrad)" rx="8"/>
    <ellipse cx="200" cy="120" rx="50" ry="12" fill="#FFB84D"/>
    {/* Wick */}
    <rect x="198" y="100" width="4" height="20" fill="#333"/>
    {/* Flame */}
    <ellipse cx="200" cy="90" rx="18" ry="28" fill="url(#flameGrad)"/>
    <ellipse cx="200" cy="95" rx="10" ry="18" fill="#FFE66D"/>
    {/* Glow */}
    <circle cx="200" cy="90" r="45" fill="#FFD93D" opacity="0.2"/>
    {/* Drips */}
    <path d="M 155 160 Q 150 180 155 200" stroke="#FFB84D" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M 245 170 Q 250 190 245 210" stroke="#FFB84D" strokeWidth="2" fill="none" opacity="0.6"/>
  </svg>
);

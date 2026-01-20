'use client';

import { useState, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

interface DraggableCTAProps {
  price: string;
  discount?: string;
  title: string;
  whatsappLink: string;
  color?: 'purple' | 'blue' | 'cyan' | 'orange' | 'yellow' | 'green';
}

const colorMap = {
  purple: 'from-purple-600 to-pink-600',
  blue: 'from-blue-500 to-cyan-500',
  cyan: 'from-cyan-500 to-blue-600',
  orange: 'from-orange-500 to-yellow-500',
  yellow: 'from-yellow-500 to-orange-600',
  green: 'from-green-500 to-blue-600'
};

export function DraggableCTA({
  price,
  discount,
  title,
  whatsappLink,
  color = 'purple'
}: DraggableCTAProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  if (isDismissed) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't drag if clicking the close button or link
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed z-40 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{
        right: 'auto',
        top: 'auto',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(0, 0)'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={`bg-gradient-to-r ${colorMap[color]} text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 border border-white/20 hover:shadow-2xl transition-shadow select-none`}
           onMouseDown={handleMouseDown}
      >
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold line-clamp-1">{title}</div>
          <div className="text-xs opacity-90">{price} {discount && `(${discount}% OFF)`}</div>
        </div>
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-bold hover:bg-opacity-90 transition whitespace-nowrap"
        >
          Buy
        </a>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="p-0.5 hover:bg-white/20 rounded transition"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

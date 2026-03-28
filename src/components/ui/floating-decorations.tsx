"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Decorative images that float/animate subtly in the background
interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  mobileSize?: number;
  opacity?: number;
  delay?: number;
  animation?: "float" | "pulse" | "rotate" | "none";
  rounded?: boolean;
}

export function FloatingImage({ 
  src, 
  alt, 
  className = "", 
  size = 120,
  mobileSize,
  opacity = 0.15,
  delay = 0,
  animation = "float",
  rounded = false
}: FloatingImageProps) {
  const animationVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0]
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [opacity, opacity * 1.2, opacity]
    },
    rotate: {
      rotate: [0, 360]
    },
    none: {}
  };

  const transitionConfig = {
    float: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    pulse: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
    none: {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <motion.div
        animate={animationVariants[animation]}
        transition={transitionConfig[animation]}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={`object-contain ${rounded ? 'rounded-full' : 'rounded-lg'}`}
          loading="lazy"
          style={{ 
            width: mobileSize ? `clamp(${mobileSize}px, 10vw, ${size}px)` : size,
            height: 'auto'
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Pre-configured decoration sets for different sections - MORE VISIBLE VERSION
export const decorationSets = {
  // For About section - personal touches with mobile support
  about: [
    { src: "/images/decorations/kunal-cutout.png", position: "top-4 right-4 md:top-10 md:right-4 lg:-right-10", size: 200, mobileSize: 80, opacity: 0.25, animation: "float" as const },
    { src: "/images/decorations/cat-sketch-1.jpg", position: "bottom-10 left-2 md:bottom-20 md:left-4", size: 120, mobileSize: 60, opacity: 0.2, rounded: true, animation: "pulse" as const },
    { src: "/images/decorations/anime-eye-7k.jpg", position: "top-1/3 right-4 md:-right-8", size: 100, mobileSize: 50, opacity: 0.18, rounded: true },
    { src: "/images/decorations/kuggy-pig-1.jpg", position: "bottom-1/4 left-4 md:-left-4", size: 80, mobileSize: 45, opacity: 0.15, rounded: true, animation: "pulse" as const },
  ],
  
  // For Projects section - tech/creative vibes
  projects: [
    { src: "/images/decorations/logic-anime.png", position: "top-10 left-2 md:top-20 md:left-4", size: 160, mobileSize: 70, opacity: 0.22, animation: "float" as const },
    { src: "/images/decorations/digital-cityscape.jpeg", position: "bottom-4 right-2 md:bottom-10 md:right-4", size: 180, mobileSize: 80, opacity: 0.15, rounded: true },
    { src: "/images/decorations/math-cat.jpeg", position: "top-1/3 right-4 md:right-8", size: 100, mobileSize: 55, opacity: 0.18, rounded: true, animation: "pulse" as const },
    { src: "/images/decorations/7k-deer-logo.png", position: "bottom-1/3 left-4", size: 120, mobileSize: 50, opacity: 0.15 },
  ],
  
  // For Philosophy/Writing - artistic & dreamy
  philosophy: [
    { src: "/images/decorations/space-whale.jpeg", position: "top-4 right-2 md:top-10 md:right-4", size: 170, mobileSize: 80, opacity: 0.18, rounded: true, animation: "float" as const },
    { src: "/images/decorations/deadpool-glass.jpeg", position: "bottom-10 left-2 md:bottom-20 md:left-4", size: 130, mobileSize: 65, opacity: 0.15, rounded: true },
    { src: "/images/decorations/anime-orange.jpg", position: "top-1/2 right-4", size: 100, mobileSize: 50, opacity: 0.18, rounded: true, animation: "pulse" as const },
  ],
  
  // For Services - professional with subtle branding
  services: [
    { src: "/images/decorations/7k-deer-logo.png", position: "top-2 right-2 md:top-4 md:right-8", size: 140, mobileSize: 60, opacity: 0.2 },
    { src: "/images/decorations/modern-geo.jpg", position: "bottom-4 left-2 md:bottom-10 md:left-4", size: 150, mobileSize: 70, opacity: 0.15, rounded: true },
    { src: "/images/decorations/geometric-circles.jpeg", position: "top-1/2 right-4", size: 120, mobileSize: 50, opacity: 0.12, rounded: true, animation: "rotate" as const },
  ],
  
  // For fun sections - playful characters
  fun: [
    { src: "/images/decorations/buff-cat.png", position: "top-4 right-2 md:top-10 md:right-4", size: 110, mobileSize: 60, opacity: 0.25, animation: "float" as const },
    { src: "/images/decorations/duck-character.png", position: "bottom-10 left-2 md:bottom-20 md:left-4", size: 90, mobileSize: 50, opacity: 0.2, animation: "pulse" as const },
    { src: "/images/decorations/cat-headphones.png", position: "top-1/2 right-4", size: 100, mobileSize: 50, opacity: 0.18 },
    { src: "/images/decorations/ironman-cat.png", position: "bottom-1/4 right-1/4", size: 80, mobileSize: 45, opacity: 0.15 },
  ],
  
  // For contact/support - warm & inviting
  contact: [
    { src: "/images/decorations/cute-cat.jpg", position: "top-4 right-2 md:top-20 md:right-4", size: 110, mobileSize: 55, opacity: 0.2, rounded: true, animation: "pulse" as const },
    { src: "/images/decorations/anime-couple.png", position: "bottom-10 left-2 md:bottom-10 md:left-4", size: 130, mobileSize: 60, opacity: 0.18 },
    { src: "/images/decorations/fushiguro.png", position: "top-1/3 left-4", size: 100, mobileSize: 50, opacity: 0.15 },
  ],
  
  // For Writing section - creative & literary
  writing: [
    { src: "/images/decorations/sketch-portrait.png", position: "top-4 right-2 md:top-10 md:right-4", size: 140, mobileSize: 65, opacity: 0.2, animation: "float" as const },
    { src: "/images/decorations/anime-girl-sketch.jpg", position: "bottom-10 left-2 md:bottom-20 md:left-4", size: 120, mobileSize: 55, opacity: 0.15, rounded: true },
    { src: "/images/decorations/cat-sketch-2.jpg", position: "top-1/2 right-4", size: 100, mobileSize: 50, opacity: 0.15, rounded: true, animation: "pulse" as const },
  ],
  
  // For App Store section
  appStore: [
    { src: "/images/decorations/7k-unity-logo.png", position: "top-4 left-2 md:top-10 md:left-4", size: 130, mobileSize: 60, opacity: 0.2, animation: "pulse" as const },
    { src: "/images/decorations/mountain-landscape.jpg", position: "bottom-10 right-2 md:bottom-20 md:right-4", size: 160, mobileSize: 70, opacity: 0.12, rounded: true },
  ],
  
  // For Testimonials section
  testimonials: [
    { src: "/images/decorations/kunal-moon.jpg", position: "top-4 right-2 md:top-10 md:right-4", size: 120, mobileSize: 60, opacity: 0.18, rounded: true, animation: "float" as const },
    { src: "/images/decorations/anime-boy-star.png", position: "bottom-10 left-2 md:bottom-10 md:left-4", size: 110, mobileSize: 55, opacity: 0.15 },
    { src: "/images/decorations/stan-full.png", position: "top-1/2 left-4", size: 100, mobileSize: 50, opacity: 0.12, animation: "pulse" as const },
  ],
};

// Component to render a set of decorations
interface DecorationSetProps {
  set: keyof typeof decorationSets;
  showOnMobile?: boolean;
}

export function DecorationSet({ set, showOnMobile = true }: DecorationSetProps) {
  const decorations = decorationSets[set];
  
  return (
    <>
      {decorations.map((dec, index) => (
        <FloatingImage
          key={`${set}-${index}`}
          src={dec.src}
          alt=""
          className={`${dec.position} ${!showOnMobile && !dec.position.includes('md:') ? 'hidden md:block' : ''}`}
          size={dec.size}
          mobileSize={dec.mobileSize}
          opacity={dec.opacity}
          delay={index * 0.15}
          animation={dec.animation || "float"}
          rounded={dec.rounded}
        />
      ))}
    </>
  );
}

// Scrolling background strip with multiple images
export function ScrollingImageStrip({ images, speed = 30 }: { images: string[], speed?: number }) {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 overflow-hidden opacity-5 pointer-events-none">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt=""
            width={120}
            height={120}
            className="rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

// Corner accent decoration
export function CornerAccent({ position = "top-right", image }: { position?: "top-right" | "top-left" | "bottom-right" | "bottom-left", image: string }) {
  const positionClasses = {
    "top-right": "top-0 right-0 rounded-bl-3xl",
    "top-left": "top-0 left-0 rounded-br-3xl",
    "bottom-right": "bottom-0 right-0 rounded-tl-3xl",
    "bottom-left": "bottom-0 left-0 rounded-tr-3xl",
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-24 h-24 md:w-40 md:h-40 overflow-hidden opacity-10 pointer-events-none`}>
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );
}

// Section divider with geometric pattern
export function GeometricDivider() {
  return (
    <div className="relative h-16 md:h-24 overflow-hidden opacity-20">
      <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8">
        <Image
          src="/images/decorations/geometric-circles.jpeg"
          alt=""
          width={150}
          height={60}
          className="object-cover rounded-full opacity-30 w-20 md:w-auto"
        />
        <Image
          src="/images/decorations/abstract-shapes.jpeg"
          alt=""
          width={150}
          height={60}
          className="object-cover rounded-full opacity-30 w-20 md:w-auto"
        />
        <Image
          src="/images/decorations/minimal-geometric.jpg"
          alt=""
          width={150}
          height={60}
          className="object-cover rounded-full opacity-30 hidden sm:block"
        />
      </div>
    </div>
  );
}

// Marquee banner strip - visible and impactful
export function MarqueeBannerStrip({ 
  images, 
  speed = 40,
  height = "h-20 md:h-28",
  opacity = 0.3
}: { 
  images: string[], 
  speed?: number,
  height?: string,
  opacity?: number
}) {
  return (
    <div className={`relative w-full ${height} overflow-hidden bg-gradient-to-r from-primary/5 via-transparent to-accent/5`} style={{ opacity }}>
      <motion.div
        className="flex gap-6 md:gap-10 whitespace-nowrap absolute top-1/2 -translate-y-1/2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 h-16 md:h-24 w-24 md:w-36 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Image mosaic grid for visual interest
export function ImageMosaic({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 p-4 opacity-20">
      {images.slice(0, 6).map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="aspect-square rounded-lg overflow-hidden"
        >
          <Image
            src={img}
            alt=""
            width={100}
            height={100}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}

// Floating character mascot - appears in corner with speech bubble vibe
export function FloatingMascot({ 
  image, 
  position = "bottom-right",
  message
}: { 
  image: string, 
  position?: "bottom-right" | "bottom-left",
  message?: string 
}) {
  const posClasses = position === "bottom-right" 
    ? "bottom-4 right-4 md:bottom-8 md:right-8" 
    : "bottom-4 left-4 md:bottom-8 md:left-8";
    
  return (
    <motion.div 
      className={`fixed ${posClasses} z-40 pointer-events-none`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {message && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur px-3 py-1.5 rounded-full text-xs border shadow-lg whitespace-nowrap">
            {message}
          </div>
        )}
        <Image
          src={image}
          alt="Mascot"
          width={60}
          height={60}
          className="rounded-full shadow-xl opacity-80 md:w-20 md:h-20"
        />
      </motion.div>
    </motion.div>
  );
}

// Parallax background image layer
export function ParallaxBgLayer({ image, opacity = 0.08 }: { image: string, opacity?: number }) {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0 scale-110"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover blur-sm"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

// Image stack - overlapping images for depth
export function ImageStack({ images }: { images: string[] }) {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {images.slice(0, 3).map((img, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl overflow-hidden shadow-lg"
          style={{
            width: `${80 - i * 15}%`,
            height: `${80 - i * 15}%`,
            top: `${i * 15}%`,
            left: `${i * 15}%`,
            zIndex: 3 - i,
          }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.9 - i * 0.2, x: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <Image src={img} alt="" fill className="object-cover" loading="lazy" />
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap, Star } from "lucide-react";

interface Service {
  id: string;
  icon: any;
  title: string;
  tagline: string;
  price: string;
  features: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  whatsappMessage: string;
}

interface Props {
  service: Service;
  index: number;
}

/**
 * Style 5: Neon Card
 * - Cyberpunk/neon aesthetic
 * - Glowing borders and effects
 * - Bold and futuristic
 */
export function MenuCardStyle5({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.08 * index,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.03 }}
    >
      <a
        href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="group relative h-full">
          {/* Neon glow effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500`} />
          
          {/* Main card */}
          <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-6 h-full flex flex-col overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
              <div className={`absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l ${service.color}`} />
              <div className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b ${service.color}`} />
            </div>
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              {/* Icon with neon effect */}
              <motion.div 
                className="relative"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-lg opacity-50`} />
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
              </motion.div>
              
              {/* Popularity badge */}
              <Badge className="bg-primary/10 text-primary border border-primary/30 backdrop-blur-sm">
                <Star className="h-3 w-3 mr-1 fill-primary" />
                Popular
              </Badge>
            </div>

            {/* Title & Tagline */}
            <div className="mb-4 flex-1">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.tagline}
              </p>
            </div>

            {/* Features with neon dots */}
            <div className="space-y-2.5 mb-5">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-sm opacity-60`} />
                    <Zap className={`relative h-3.5 w-3.5 text-primary`} />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider with gradient */}
            <div className={`h-px bg-gradient-to-r ${service.color} opacity-30 mb-4`} />

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  From
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-sans`}>
                  {service.price}
                </div>
              </div>
              
              <motion.button 
                className={`relative px-5 py-2.5 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold text-sm overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book Now</span>
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0.3 }}
                  whileHover={{ 
                    x: "100%",
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                />
              </motion.button>
            </div>

            {/* Scan line effect */}
            <motion.div 
              className={`absolute inset-x-0 h-px bg-gradient-to-r ${service.color} opacity-20`}
              animate={{
                y: [0, 300],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

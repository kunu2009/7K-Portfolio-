"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Check } from "lucide-react";

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
 * Style 3: Gradient Card with Neumorphism
 * - Bold gradient backgrounds
 * - Neumorphic shadows
 * - Eye-catching and vibrant
 */
export function MenuCardStyle3({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * index,
        type: "spring",
        stiffness: 100
      }}
    >
      <a
        href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div 
          className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
          
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
          
          {/* Content Container */}
          <div className="relative p-6 h-full flex flex-col text-white">
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="h-7 w-7 text-white" />
              </motion.div>
              
              {/* Sparkle Badge */}
              <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-1 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-white/80">
                {service.tagline}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 mb-4 flex-1">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center text-sm text-white/90"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* Price & CTA Section */}
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wide mb-1">
                    Starting from
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {service.price}
                  </div>
                </div>
                
                <motion.div 
                  className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-xl"
                  whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hover Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

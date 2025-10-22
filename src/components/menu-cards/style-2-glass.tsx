"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

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
 * Style 2: Modern Glassmorphism
 * - Glass effect with blur
 * - Floating elements
 * - Premium modern look
 */
export function MenuCardStyle2({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8 }}
    >
      <a
        href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="group relative overflow-hidden bg-background/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 h-full">
          {/* Animated Gradient Orb */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-700 group-hover:scale-150`} />
          
          {/* Content */}
          <div className="relative p-6 space-y-4">
            {/* Icon with floating animation */}
            <motion.div 
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>

            {/* Title */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.tagline}
              </p>
            </div>

            {/* Price Badge */}
            <Badge 
              variant="outline" 
              className={`bg-gradient-to-r ${service.color} text-white border-0 px-4 py-1.5 font-semibold`}
            >
              {service.price}
            </Badge>

            {/* Features */}
            <div className="space-y-2 pt-2">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <div className="flex items-center justify-between text-sm font-medium text-primary group-hover:text-accent transition-colors">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Bottom Gradient Line */}
          <div className={`h-1 bg-gradient-to-r ${service.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
        </Card>
      </a>
    </motion.div>
  );
}

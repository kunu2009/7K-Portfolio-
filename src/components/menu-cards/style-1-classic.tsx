"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";

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
 * Style 1: Classic Card Design
 * - Clean, professional look
 * - Subtle hover effects
 * - Traditional card layout
 */
export function MenuCardStyle1({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
    >
      <a
        href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card 
          className={`group relative overflow-hidden border-2 ${service.borderColor} ${service.bgColor} hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer h-full`}
        >
          {/* Animated Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Glow Effect */}
          <div className={`absolute -inset-[2px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
          
          <CardContent className="relative p-5">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
              <Icon className="h-6 w-6 text-white" />
            </div>

            {/* Title & Tagline */}
            <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              {service.tagline}
            </p>

            {/* Features */}
            <div className="space-y-1.5 mb-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-primary mr-1.5" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div>
                <div className="text-[10px] text-muted-foreground uppercase mb-0.5">From</div>
                <div className="text-base font-bold text-foreground">
                  {service.price}
                </div>
              </div>
              <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

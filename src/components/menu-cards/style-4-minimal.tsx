"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Check } from "lucide-react";

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
 * Style 4: Minimal & Elegant
 * - Clean minimal design
 * - Subtle animations
 * - Professional and modern
 */
export function MenuCardStyle4({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <a
        href={`https://wa.me/918591247148?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 h-full bg-card hover:shadow-xl">
          {/* Hover background effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <div className="relative p-6 space-y-4">
            {/* Icon & Price Row */}
            <div className="flex items-start justify-between">
              <motion.div 
                className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="h-6 w-6 text-white" />
              </motion.div>
              
              <div className="text-right">
                <div className="text-xs text-muted-foreground mb-1">Starting at</div>
                <div className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-sans`}>
                  {service.price}
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-40 transition-opacity`} />

            {/* Features */}
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className={`h-4 w-4 text-primary flex-shrink-0`} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <div className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                <span className="text-sm font-medium text-foreground">
                  Let&apos;s Talk
                </span>
                <ArrowUpRight className="h-5 w-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}

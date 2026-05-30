import React from 'react';
import { motion } from 'motion/react';
import { Code2, PenTool, Layout, Rocket, LineChart, Globe } from 'lucide-react';

const services = [
  { title: "Web Development", icon: <Globe size={24} /> },
  { title: "App Development", icon: <Code2 size={24} /> },
  { title: "SEO & Marketing", icon: <LineChart size={24} /> },
  { title: "UI/UX Design", icon: <PenTool size={24} /> },
  { title: "Performance Optimization", icon: <Rocket size={24} /> },
  { title: "Tech Consulting", icon: <Layout size={24} /> },
];

export default function Services() {
  return (
    <section id="services" className="relative border border-black/10 bg-white rounded-sm flex flex-col p-6 h-full min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-amber-100 text-amber-900 px-2 py-1 text-[9px] font-bold uppercase tracking-tighter">Services</span>
        <span className="text-[10px] opacity-40">03</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 hide-scrollbar">
        <ul className="text-xs space-y-3">
          {services.map((service, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex justify-between items-center border-b border-black/5 pb-2 group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-amber-900/50 group-hover:text-amber-900 transition-colors">
                  {React.cloneElement(service.icon, { size: 14 })}
                </span>
                <span className="font-medium text-[#121212] group-hover:pl-1 transition-all">{service.title}</span>
              </div>
              <span className="italic opacity-40 text-[9px]">Expert</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-black/5">
        <h3 className="text-2xl font-serif leading-tight">Solutions</h3>
      </div>
    </section>
  );
}

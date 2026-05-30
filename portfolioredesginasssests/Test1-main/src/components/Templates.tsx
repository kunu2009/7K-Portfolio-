import { motion } from 'motion/react';
import { Copy } from 'lucide-react';

const templates = [
  { name: "Second Brain Builder", platform: "Notion", price: "Free" },
  { name: "SaaS Starter Kit", platform: "React + Tailwind", price: "Free" },
  { name: "Freelance Tracker", platform: "Sheets / Airtable", price: "Free" }
];

export default function Templates() {
  return (
    <section id="templates" className="relative bg-[#F2EDE7] rounded-sm overflow-hidden flex flex-col p-6 h-full min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-black text-white px-2 py-1 text-[9px] font-bold uppercase tracking-tighter">Templates</span>
        <span className="text-[10px] opacity-40">04</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 hide-scrollbar">
        <div className="flex flex-col gap-3">
          {templates.map((tpl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col gap-1 p-3 bg-white/40 border border-black/5 hover:border-black/20 hover:bg-white transition-all cursor-pointer rounded-sm"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-[#121212] group-hover:text-amber-900 transition-colors">{tpl.name}</h3>
                <span className="text-[9px] px-1.5 py-0.5 bg-black/5 rounded-sm">{tpl.price}</span>
              </div>
              <div className="text-[9px] font-mono text-black/50 uppercase tracking-wider">{tpl.platform}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-black/5">
        <h3 className="text-2xl font-serif leading-tight mb-2 text-amber-900">Ready Assets</h3>
        <p className="text-xs text-black/60 mb-4">React, Tailwind, and Notion templates built for high-performance apps.</p>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-black/10"></div>
          <div className="w-4 h-4 rounded-full bg-black/10"></div>
          <div className="w-4 h-4 rounded-full bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}

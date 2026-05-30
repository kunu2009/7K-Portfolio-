import { motion } from 'motion/react';
import { Bot, MessageSquare, Link, ArrowRight } from 'lucide-react';

export default function Others() {
  return (
    <section id="others" className="bg-black text-white p-6 rounded-sm flex flex-col justify-between w-full relative overflow-hidden mt-auto">
      <div className="flex justify-between items-start mb-8">
        <span className="text-[10px] uppercase tracking-widest opacity-60">The Archives</span>
        <ArrowRight size={16} className="opacity-60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 mt-6 pb-6 relative z-10">
        {/* Stan AI / Ecosystem */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-white/60" size={16} />
            <h3 className="text-2xl font-serif italic">Stan AI & Projects</h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 border border-white/20 rounded-sm mb-6"
          >
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Explore the capabilities of Stan AI, our technical intelligence platform designed 
              for seamless ecosystem integration.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white hover:text-amber-500 transition-colors">
              Interact <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Testimonials snippet */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-white/60" size={16} />
              <h3 className="text-lg font-serif">Client Words</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-4 border-l border-white/20 relative"
            >
              <div className="text-3xl font-serif absolute -top-2 -left-3 opacity-20">"</div>
              <p className="text-xs text-white/70 italic relative z-10 mb-3 leading-relaxed">
                Kunal's ability to turn complex requirements into beautiful, functional apps is unmatched.
              </p>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest">Sarah Jenkins</p>
                <p className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Startup Founder</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link className="text-white/60" size={16} />
              <h3 className="text-lg font-serif">Quick Links</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Github", "Twitter", "LinkedIn", "Resume", "Blog", "Contact"].map((link, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="px-2 py-1 border border-white/20 text-[9px] uppercase tracking-widest text-white/70 hover:text-white hover:border-white transition-all rounded-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowDown, Mail, Github, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col justify-between pt-2 pb-6 flex-1">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="https://placehold.co/120x120/111111/FFFFFF/png?text=7K"
            alt="Kunal Chheda" 
            className="w-16 h-16 rounded-sm border border-black/10 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-serif leading-[0.9] tracking-tighter text-[#121212]">
            Hi, I'm <br />
            <span className="italic ml-6">Kunal 👋</span>
          </h1>
          <p className="text-2xl font-serif italic text-black/70 mt-4 leading-tight">
            I build tools that change lives.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm text-black/70 leading-relaxed font-light max-w-[280px]"
        >
          Creator of the 7K Ecosystem. I specialize in crafting beautiful digital experiences, 
          from productivity apps to fitness trackers & learning tools—completely free, with no subscriptions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <a href="#services" className="px-5 py-2.5 bg-transparent border border-amber-900 text-amber-900 text-[10px] uppercase tracking-widest font-bold hover:bg-amber-900 hover:text-white transition-colors">
            Work with me
          </a>
          <div className="flex items-center gap-4 px-2">
            <a href="#" className="text-black/40 hover:text-amber-900 transition-colors"><Mail size={18} /></a>
            <a href="#" className="text-black/40 hover:text-amber-900 transition-colors"><Github size={18} /></a>
            <a href="#" className="text-black/40 hover:text-amber-900 transition-colors"><Twitter size={18} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-12"
      >
        <a href="#apps" className="flex items-center gap-2 text-black/40 hover:text-amber-900 transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

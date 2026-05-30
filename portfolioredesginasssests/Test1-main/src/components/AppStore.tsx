import { motion } from 'motion/react';
import { Smartphone, Activity, CheckCircle, Languages, ArrowRight } from 'lucide-react';

const apps = [
  {
    title: "FocusMate",
    description: "Deep work timer & task manager.",
    category: "Productivity",
    icon: <CheckCircle className="text-[#121212]" size={16} />,
    color: "bg-black/5"
  },
  {
    title: "FitTrack Pro",
    description: "Advanced workout & nutrition tracking.",
    category: "Fitness",
    icon: <Activity className="text-[#121212]" size={16} />,
    color: "bg-black/5"
  },
  {
    title: "LingoLearn",
    description: "Bite-sized daily language lessons.",
    category: "Learning",
    icon: <Languages className="text-[#121212]" size={16} />,
    color: "bg-black/5"
  },
  {
    title: "HabitForge",
    description: "Build lasting routines effortlessly.",
    category: "Lifestyle",
    icon: <Smartphone className="text-[#121212]" size={16} />,
    color: "bg-black/5"
  }
];

export default function AppStore() {
  return (
    <section id="apps" className="group relative bg-[#EAE8E4] rounded-sm overflow-hidden border border-black/5 flex flex-col p-6 h-full min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-black text-white px-2 py-1 text-[9px] font-bold uppercase tracking-tighter">App Store</span>
        <span className="text-[10px] opacity-40">01</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 hide-scrollbar relative z-10">
        <div className="flex flex-col gap-3">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between p-3 bg-white/50 border border-black/5 rounded-sm hover:bg-white transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${app.color.replace('text-white', 'text-black')}`}>
                  {app.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#121212]">{app.title}</h4>
                  <p className="text-[9px] uppercase tracking-widest text-black/50">{app.category}</p>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-black/5 relative z-10 w-full bg-[#EAE8E4]">
        <h3 className="text-2xl font-serif leading-tight mb-2">Utility Suite</h3>
        <p className="text-xs text-black/60">Handcrafted mobile applications focused on seamless productivity and minimalist design.</p>
      </div>

      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black/5 rounded-full rotate-12 pointer-events-none hidden md:block group-hover:border-black/10 transition-colors"></div>
    </section>
  );
}

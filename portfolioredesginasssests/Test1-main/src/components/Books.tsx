import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const books = [
  {
    title: "The Indie Builder's Playbook",
    description: "A complete guide to launching side projects and building a comprehensive digital ecosystem.",
    year: "2024",
    status: "Bestseller"
  },
  {
    title: "Mastering Zero-Cost Tech",
    description: "How to leverage open-source and free tiers to run a profitable digital business.",
    year: "2023",
    status: "Available"
  }
];

export default function Books() {
  return (
    <section id="books" className="relative bg-[#1A1A1A] text-white rounded-sm overflow-hidden flex flex-col p-6 h-full min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <span className="border border-white/30 px-2 py-1 text-[9px] font-bold uppercase tracking-tighter">Books</span>
        <span className="text-[10px] opacity-40">02</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 hide-scrollbar relative z-10">
        <div className="flex flex-col gap-3">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-1 p-3 border-l-2 border-white/10 hover:border-white/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-white group-hover:text-amber-500 transition-colors">{book.title}</h4>
                <span className="text-[9px] px-1.5 py-0.5 bg-white/10 rounded-sm font-mono text-gray-300">{book.year}</span>
              </div>
              <p className="text-[10px] text-white/50 line-clamp-1">{book.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-white/10 relative z-10 bg-[#1A1A1A]">
        <h3 className="text-2xl font-serif italic leading-tight mb-2">Literary Works</h3>
        <p className="text-xs text-white/60">Thought-leadership and design narratives curated for the modern creative professional.</p>
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-1 bg-amber-600"></div>
    </section>
  );
}

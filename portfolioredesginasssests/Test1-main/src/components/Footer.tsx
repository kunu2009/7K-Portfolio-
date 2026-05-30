export default function Footer() {
  return (
    <footer className="mt-8 flex justify-between items-center border-t border-black/10 pt-4 pb-4">
      <p className="text-[9px] uppercase tracking-widest text-black/40 font-medium">
        © Seven Kings Collective / Designed for Optimal Clarity
      </p>
      <div className="flex gap-4">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-black/20"></div>
        <div className="w-2 h-2 rounded-full bg-black/10"></div>
      </div>
    </footer>
  );
}

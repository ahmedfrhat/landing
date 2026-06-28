import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between glass-panel border-b border-white/5 bg-[#050816]/60">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
          <Code2 className="text-white w-6 h-6" />
        </div>
        <div className="font-bold text-xl tracking-wide hidden sm:block">Academy</div>
      </div>
      
      <a 
        href="https://wa.me/201010752614?text=أريد%20الاشتراك%20في%20الأكاديمية" 
        target="_blank" 
        rel="noreferrer"
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
        <button className="relative px-6 py-2.5 bg-black rounded-full text-sm md:text-base font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer" dir="rtl">
          احجز الآن
        </button>
      </a>
    </header>
  );
}
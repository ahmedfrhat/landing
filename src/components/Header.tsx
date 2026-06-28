import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
      <nav className="max-w-5xl mx-auto flex justify-between items-center glass-panel px-6 py-2.5 rounded-full border-white/10 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Programmer</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">المنصة</a>
            <a href="#" className="hover:text-white transition-colors">المنهج</a>
            <a href="#" className="hover:text-white transition-colors">عن الأكاديمية</a>
          </div>
          <a 
            href="https://wa.me/201010752614?text=أريد%20الاشتراك%20في%20الأكاديمية" 
            target="_blank" 
            rel="noreferrer" 
            className="group"
          >
            <button className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer">
              احجز الآن
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
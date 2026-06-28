import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Award, BarChart3, Users } from 'lucide-react';

export function PlatformMockup() {
  const chartHeights = useMemo(() => Array.from({length: 20}).map(() => Math.random() * 80 + 20), []);

  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 md:mb-20 z-10 px-4" dir="rtl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">منصة <span className="text-gradient">الطالب</span></h2>
        <p className="text-gray-400 text-lg md:text-xl">بيئة عالمية مصممة للتركيز والتطور.</p>
      </div>

      <motion.div 
        initial={{ rotateX: 20, y: 100, opacity: 0 }}
        whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
        style={{ perspective: 1000 }}
        className="w-full max-w-6xl px-4"
      >
        <div className="glass-panel rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden aspect-auto md:aspect-[16/10] flex flex-col glow-blue">
          {/* Header */}
          <div className="h-12 md:h-14 border-b border-white/10 flex items-center px-4 md:px-6 gap-4 bg-white/5 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center font-mono text-xs md:text-sm text-gray-400 hidden md:block">academy.app</div>
          </div>
          
          {/* Body */}
          <div className="flex-1 flex p-4 md:p-6 gap-6 bg-[#0B1120]">
            {/* Sidebar */}
            <div className="w-48 hidden lg:flex flex-col gap-4 border-l border-white/5 pl-6 shrink-0" dir="rtl">
              {[
                { icon: LayoutDashboard, label: 'لوحة التحكم', active: true },
                { icon: BookOpen, label: 'الواجبات' },
                { icon: Award, label: 'الشهادات' },
                { icon: Users, label: 'المتصدرين' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${item.active ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  <item.icon size={20} className="shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-6 w-full overflow-hidden" dir="rtl">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 truncate">مرحباً بعودتك، أحمد</h3>
                  <p className="text-gray-400 text-sm md:text-base">لقد أكملت 80% من أساسيات C++.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { label: 'أيام متتالية', value: '14 يوم', icon: BarChart3, color: 'text-orange-400' },
                  { label: 'مشاريع مكتملة', value: '12', icon: BookOpen, color: 'text-blue-400' },
                  { label: 'الترتيب العالمي', value: '#42', icon: Award, color: 'text-purple-400' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="glass p-4 md:p-6 rounded-2xl border border-white/5"
                  >
                    <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 ${stat.color}`} />
                    <div className="text-gray-400 text-xs md:text-sm mb-1">{stat.label}</div>
                    <div className="text-xl md:text-3xl font-bold">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex-1 glass rounded-2xl border border-white/5 p-4 md:p-6 mt-2 relative overflow-hidden min-h-[150px] md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
                <h4 className="text-lg md:text-xl font-bold mb-4">مخطط النشاط</h4>
                <div className="w-full h-full flex items-end gap-1 md:gap-2 opacity-50 pb-4 md:pb-8">
                  {chartHeights.map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
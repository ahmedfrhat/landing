import { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LayoutDashboard, BookOpen, Award, BarChart3, Users } from 'lucide-react';

export function PlatformMockup() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const chartHeights = useMemo(() => Array.from({length: 20}).map(() => Math.random() * 80 + 20), []);

  return (
    <section ref={containerRef} className="py-60 relative overflow-visible bg-[#050816] flex flex-col items-center">
      <div className="text-center mb-32 z-10 px-4" dir="rtl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter leading-none"
        >
          منصة <br/>
          <span className="text-gradient">الطالب</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          بيئة تعليمية غامرة تجمع بين الجمال الفني والقوة التقنية، مصممة لتمكين الجيل القادم.
        </motion.p>
      </div>

      <motion.div 
        style={{ rotateX, scale, opacity, y, perspective: 2000 }}
        className="w-full max-w-7xl px-6"
      >
        <div className="glass-panel rounded-[3rem] p-3 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-auto md:aspect-[16/10] flex flex-col glow-blue relative">
          {/* Header / Mac Window Bar */}
          <div className="h-14 border-b border-white/10 flex items-center px-6 gap-4 bg-white/[0.03] shrink-0">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/40"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/40"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/40"></div>
            </div>
            <div className="flex-1 text-center font-mono text-xs text-gray-500 tracking-widest uppercase hidden md:block">platform.academy.app</div>
          </div>
          
          {/* Body */}
          <div className="flex-1 flex p-8 md:p-12 gap-10 bg-[#0B1120]">
            {/* Sidebar */}
            <div className="w-64 hidden lg:flex flex-col gap-6 border-l border-white/5 pl-8 shrink-0" dir="rtl">
              {[
                { icon: LayoutDashboard, label: 'لوحة التحكم', active: true },
                { icon: BookOpen, label: 'الواجبات' },
                { icon: Award, label: 'الشهادات' },
                { icon: Users, label: 'المتصدرين' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${item.active ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  <item.icon size={22} className="shrink-0" />
                  <span className="font-semibold text-lg">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-10 w-full overflow-hidden" dir="rtl">
              <div className="flex justify-between items-end">
                <div className="space-y-3">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-5xl font-bold tracking-tight"
                  >
                    مرحباً بعودتك، أحمد
                  </motion.h3>
                  <p className="text-gray-400 text-lg md:text-xl font-light">لقد أكملت <span className="text-blue-400 font-bold">80%</span> من أساسيات البرمجة.</p>
                </div>
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 hidden md:block"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'أيام متتالية', value: '14 يوم', icon: BarChart3, color: 'text-orange-400' },
                  { label: 'مشاريع مكتملة', value: '12', icon: BookOpen, color: 'text-blue-400' },
                  { label: 'الترتيب العالمي', value: '#42', icon: Award, color: 'text-purple-400' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glass p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.08] transition-colors group"
                  >
                    <stat.icon className={`w-8 h-8 md:w-10 md:h-10 mb-6 group-hover:scale-110 transition-transform ${stat.color}`} />
                    <div className="text-gray-500 text-sm md:text-base mb-2 font-mono uppercase tracking-wider">{stat.label}</div>
                    <div className="text-2xl md:text-4xl font-black">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex-1 glass rounded-[2.5rem] border border-white/5 p-8 md:p-10 mt-2 relative overflow-hidden min-h-[200px] md:min-h-0 bg-white/[0.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
                <h4 className="text-xl md:text-2xl font-bold mb-8 tracking-tight">مخطط النشاط السنوي</h4>
                <div className="w-full h-full flex items-end gap-2 md:gap-3 opacity-40 pb-10">
                  {chartHeights.map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.8 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 bg-gradient-to-t from-blue-600/60 to-cyan-400/60 rounded-t-lg border-t border-white/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>
    </section>
  );
}
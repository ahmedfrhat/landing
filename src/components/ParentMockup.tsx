import { motion } from 'framer-motion';
import { Bell, CheckCircle2, TrendingUp } from 'lucide-react';

export function ParentMockup() {
  return (
    <section className="py-32 relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-7xl mx-auto px-4">
      <div className="flex-1 text-center md:text-right z-10" dir="rtl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">تطبيق <span className="text-gradient">ولي الأمر</span></h2>
        <p className="text-gray-400 text-lg md:text-2xl mb-8 leading-relaxed">
          تابع تقدم أبنائك لحظة بلحظة. إشعارات فورية، تقارير أداء، ومتابعة دقيقة للمهام.
        </p>
        <ul className="flex flex-col gap-4 text-base md:text-lg text-gray-300 items-center md:items-start">
          <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-400 shrink-0" /> متابعة الحضور والانصراف</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-400 shrink-0" /> تقارير أداء أسبوعية</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-400 shrink-0" /> إشعارات إتمام الواجبات</li>
        </ul>
      </div>

      <div className="flex-1 flex justify-center relative w-full">
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-[280px] md:w-[320px] h-[580px] md:h-[640px] glass-panel rounded-[2.5rem] md:rounded-[3rem] border-4 border-[#1a1a2e] shadow-2xl p-3 md:p-4 overflow-hidden shrink-0"
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-[#1a1a2e] rounded-b-xl md:rounded-b-2xl z-20"></div>
          
          <div className="h-full w-full bg-[#0B1120] rounded-[2rem] md:rounded-[2.5rem] p-4 flex flex-col gap-4 overflow-hidden relative">
            <div className="flex justify-between items-center mt-6">
              <h3 className="font-bold text-lg md:text-xl">Ahmed's Progress</h3>
              <Bell className="text-gray-400" size={18} />
            </div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass p-3 md:p-4 rounded-2xl flex items-start gap-3 md:gap-4 border-l-4 border-l-green-500 bg-green-500/10"
            >
              <CheckCircle2 className="text-green-400 mt-0.5 shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <div>
                <div className="font-bold text-sm">Homework Completed</div>
                <div className="text-xs text-gray-400">C++ Arrays Assignment</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="glass p-3 md:p-4 rounded-2xl flex items-start gap-3 md:gap-4 border-l-4 border-l-blue-500 bg-blue-500/10"
            >
              <TrendingUp className="text-blue-400 mt-0.5 shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <div>
                <div className="font-bold text-sm">Level Up!</div>
                <div className="text-xs text-gray-400">Ahmed reached Level 12</div>
              </div>
            </motion.div>

            <div className="mt-auto glass p-4 md:p-6 rounded-3xl flex flex-col items-center justify-center relative">
              <div className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">Weekly Goal</div>
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <motion.circle 
                    cx="50" cy="50" r="40" fill="none" stroke="#22D3EE" strokeWidth="8" strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * 0.15 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-2xl md:text-3xl font-bold text-gradient absolute">85%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
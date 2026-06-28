import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calculator, Gamepad2, Instagram, MessageSquare, BrainCircuit } from 'lucide-react';

const stages = [
  { id: 'code', text: 'print("Hello World")', icon: null },
  { id: 'calc', text: 'آلة حاسبة', icon: Calculator },
  { id: 'game', text: 'محرك ألعاب', icon: Gamepad2 },
  { id: 'social', text: 'شبكة اجتماعية', icon: Instagram },
  { id: 'chat', text: 'تطبيق محادثة', icon: MessageSquare },
  { id: 'ai', text: 'مساعد ذكي', icon: BrainCircuit },
];

export function MorphingCode() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px" });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  const Icon = stages[index].icon;

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center relative py-32 px-4">
      <div className="text-center mb-16 md:mb-20 z-10" dir="rtl">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">البرمجة تصنع <br className="md:hidden" /><span className="text-gradient">كل شيء</span></h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">من سطر كود بسيط إلى الأنظمة التي تدير العالم.</p>
      </div>

      <div className="relative w-full max-w-2xl h-48 md:h-64 flex items-center justify-center glass-panel rounded-3xl overflow-hidden glow-purple px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={stages[index].id}
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-6 w-full"
          >
            {Icon && (
              <Icon className="w-12 h-12 md:w-20 md:h-20 text-cyan-400" strokeWidth={1.5} />
            )}
            <div className={`font-bold text-center w-full ${stages[index].id === 'code' ? 'font-mono text-green-400 text-xl sm:text-2xl md:text-5xl' : 'text-2xl md:text-5xl text-white'}`}>
              {stages[index].text}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
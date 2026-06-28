import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  { year: '1940', title: 'ENIAC', desc: 'فجر المنطق البرمجي.' },
  { year: '1969', title: 'الإنترنت', desc: 'ربط العالم ببعضه.' },
  { year: '1991', title: 'الويب', desc: 'المعلومات متاحة للجميع.' },
  { year: '2007', title: 'الهواتف الذكية', desc: 'حواسيب فائقة في جيوبنا.' },
  { year: '2022', title: 'الذكاء الاصطناعي', desc: 'آلات تتعلم وتتطور.' },
  { year: 'اليوم', title: 'أنت', desc: 'صانع المستقبل القادم.', highlight: true },
];

export function Timeline() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: isMobile ? undefined : targetRef, 
    offset: ["start start", "end end"] 
  });
  
  // نستخدم useSpring لإضافة نعومة فائقة (Smoothness) لحركة التمرير
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  // الإصلاح الجذري لمشكلة القفز (Jumping):
  // Framer Motion لا يمكنه عمل انيميشن بين "0%" و "calc(-100% + 100vw)" لأن عدد الأرقام مختلف.
  // الحل هو توحيد صيغة النص لتكون "calc(0% + 0vw)" إلى "calc(-100% + 100vw)" لكي يتم حساب الأرقام بسلاسة تامة.
  const x = useTransform(smoothProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  if (isMobile) {
    return (
      <section className="py-20 relative bg-[#050816] px-6 overflow-hidden" dir="rtl">
        <div className="text-4xl font-bold opacity-20 mb-10 text-right">التاريخ</div>
        <div className="relative flex flex-col gap-10">
          {/* الخط الرأسي في الموبايل */}
          <div className="absolute right-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-cyan-500/20"></div>
          
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="relative pr-10 flex flex-col items-start"
            >
              {/* نقطة التايملاين */}
              <div className={`absolute right-[11px] top-2.5 w-3.5 h-3.5 rounded-full border-2 border-[#050816] z-10 ${m.highlight ? 'bg-cyan-400 glow-blue' : 'bg-gray-600'}`}></div>
              
              <div className={`glass p-6 rounded-2xl w-full border ${m.highlight ? 'border-blue-500/50 glow-blue' : 'border-white/5'}`}>
                <div className={`font-mono text-sm mb-1 ${m.highlight ? 'text-cyan-400' : 'text-gray-400'}`}>{m.year}</div>
                <h3 className={`text-xl font-bold mb-2 ${m.highlight ? 'text-gradient' : 'text-white'}`}>{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#050816]">
        <div className="absolute top-20 left-10 md:left-20 text-4xl md:text-6xl font-bold opacity-20 pointer-events-none">التاريخ</div>
        
        <motion.div style={{ x }} className="flex items-center w-[max-content] px-[10vw] md:px-[20vw] relative h-full">
          
          <div className="flex gap-20 md:gap-40 items-center relative">
            {/* الخط الخلفي الباهت الذي يربط كل المربعات */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2"></div>
            
            {/* الخط المضيء الذي يمتلئ مع التمرير */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 -translate-y-1/2 origin-left"
              style={{ scaleX: smoothProgress }}
            ></motion.div>

            {milestones.map((m, i) => (
               <motion.div 
                 key={i} 
                 className="w-[280px] md:w-[450px] flex-shrink-0 relative group z-10"
                 initial={{ opacity: 0.2, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, margin: "0px -10% 0px -10%" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* النقطة (Node) على الخط */}
                  <motion.div 
                    className={`absolute top-1/2 -left-10 md:-left-20 w-4 h-4 rounded-full border-4 border-[#050816] -translate-y-1/2 transition-colors duration-500 ${m.highlight ? 'bg-cyan-400 glow-blue' : 'bg-gray-600 group-hover:bg-blue-400'}`}
                  ></motion.div>

                  <div className={`glass p-6 md:p-12 rounded-3xl relative transition-transform duration-500 group-hover:-translate-y-2 ${m.highlight ? 'border-blue-500/50 glow-blue' : 'border-white/5'}`}>
                    <div className={`font-mono text-lg md:text-xl mb-2 md:mb-4 ${m.highlight ? 'text-cyan-400' : 'text-gray-400'}`}>{m.year}</div>
                    <h3 className={`text-3xl md:text-5xl font-bold mb-3 md:mb-4 ${m.highlight ? 'text-gradient' : 'text-white'}`}>{m.title}</h3>
                    <p className="text-gray-400 text-sm md:text-lg">{m.desc}</p>
                  </div>
               </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
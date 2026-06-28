import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const nodes = [
  "أساسيات البرمجة", "المنطق", "حل المشكلات", "الخوارزميات", 
  "الخرائط التدفقية", "C++", "المشاريع", "Git & GitHub", "الذكاء الاصطناعي"
];

export function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6" dir="rtl">رحلة <span className="text-gradient">التعلم</span></h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/0 via-purple-500/50 to-cyan-500/0 md:-translate-x-1/2"></div>
        
        <div className="flex flex-col gap-16 md:gap-24 relative">
          {nodes.map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex items-center w-full ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${i % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                <div className="glass px-6 py-4 md:px-10 md:py-6 rounded-2xl relative group hover:glow-blue transition-all duration-300 w-full md:w-auto">
                  <div className="hidden md:block absolute top-1/2 w-8 md:w-16 h-[2px] bg-white/20 group-hover:bg-blue-500/50 transition-colors" style={{ [i % 2 === 0 ? 'right' : 'left']: '-2rem' }}></div>
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050816]" style={{ [i % 2 === 0 ? 'right' : 'left']: '-2.5rem' }}></div>
                  
                  <div className="md:hidden absolute top-1/2 -left-8 w-8 h-[2px] bg-white/20 group-hover:bg-blue-500/50 transition-colors"></div>
                  <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-10 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050816]"></div>

                  <h3 className="text-xl md:text-3xl font-bold">{node}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
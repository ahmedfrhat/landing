import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px", once: true });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (!isInView) return;
    const run = async () => {
      await new Promise(r => setTimeout(r, 600)); if(mounted) setStage(1);
      await new Promise(r => setTimeout(r, 600)); if(mounted) setStage(2);
      await new Promise(r => setTimeout(r, 600)); if(mounted) setStage(3);
      await new Promise(r => setTimeout(r, 1000)); if(mounted) setStage(4);
    };
    run();
    return () => { mounted = false; };
  }, [isInView]);

  return (
    <section ref={ref} className="min-h-screen md:h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,transparent_50%)]"></div>
      
      <div className="z-10 flex flex-col items-center px-4 w-full">
        {stage < 4 ? (
          <div className="font-mono text-xl md:text-4xl text-green-400 flex flex-col gap-2 w-full max-w-xs md:max-w-md mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>while(true) {'{'}</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} className="pl-8">Learn();</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} className="pl-8">Build();</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: stage >= 3 ? 1 : 0 }} className="pl-8">Grow();</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{'}'}</motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center w-full"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-12" dir="rtl">المستقبل يبدأ <span className="text-gradient">هنا</span></h2>
            <a 
              href="https://wa.me/201010752614?text=أريد%20التسجيل%20في%20الأكاديمية" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-6 md:px-12 py-3 md:py-6 bg-black rounded-full text-lg md:text-2xl font-bold text-white flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform cursor-pointer" dir="rtl">
                ابدأ رحلتك الآن
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
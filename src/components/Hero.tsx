import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    let mounted = true;
    const interval = setInterval(() => {
      if (!mounted) return;
      setDisplayed(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 50);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [text, onComplete]);

  return <span>{displayed}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span></span>;
};

export function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 1000)); if(mounted) setStage(1);
      await new Promise(r => setTimeout(r, 1500)); if(mounted) setStage(2);
      await new Promise(r => setTimeout(r, 1500)); if(mounted) setStage(3);
      await new Promise(r => setTimeout(r, 1500)); if(mounted) setStage(4);
      await new Promise(r => setTimeout(r, 2000)); if(mounted) setStage(5);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <section className="relative min-h-[150vh] flex flex-col items-center overflow-visible">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {stage < 4 && (
            <motion.div key="terminal" className="font-mono text-cyan-400 text-sm md:text-2xl flex flex-col items-start gap-4 px-4 w-full max-w-2xl"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              {stage >= 1 && <div><Typewriter text="> Initializing Future..." /></div>}
              {stage >= 2 && <div><Typewriter text="> Loading Programmer..." /></div>}
              {stage >= 3 && <div><Typewriter text="> Preparing New Journey..." /></div>}
            </motion.div>
          )}
          
          {stage === 4 && (
            <motion.div key="welcome" className="font-mono text-white text-3xl md:text-6xl tracking-widest"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} 
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} 
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 1 }}>
              Welcome.
            </motion.div>
          )}

          {stage === 5 && (
            <motion.div key="titles" className="text-center z-10 px-4 w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }} 
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              dir="rtl"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                البرمجة ليست مجرد<br/>
                <span className="text-gradient inline-block mt-2">كتابة كود</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <p className="font-mono text-gray-400 text-lg md:text-3xl tracking-tight" dir="ltr">
                  "It is a way of thinking."
                </p>
                
                <div className="flex gap-4 mt-8">
                  <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">ابدأ رحلتك</button>
                  <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors">اكتشف المزيد</button>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 3, duration: 1 }}
                dir="ltr"
              >
                <span className="font-mono text-xs md:text-sm uppercase tracking-widest">Scroll to explore</span>
                <motion.div 
                  className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                  animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Simplified Decorative Elements for Performance */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-blue-600/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-purple-600/5 rounded-full blur-[80px]"></div>
      </div>
    </section>
  );
}
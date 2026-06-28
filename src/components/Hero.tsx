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
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
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
              className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight" 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              البرمجة ليست مجرد<br/>
              <span className="text-gradient">كتابة كود</span>
            </motion.h1>
            <motion.p 
              className="font-mono text-gray-400 text-lg md:text-3xl mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              dir="ltr"
            >
              "It is a way of thinking."
            </motion.p>
            
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 3, duration: 1 }}
              dir="ltr"
            >
              <span className="font-mono text-xs md:text-sm">Scroll to explore</span>
              <motion.div 
                className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent"
                animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
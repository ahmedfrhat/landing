import { motion } from 'framer-motion';
import { MonitorPlay, Code2, Users2, BrainCircuit, GraduationCap, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

const features = [
  { icon: MonitorPlay, title: 'فصول تفاعلية', desc: 'جلسات برمجة حية مع تقييم لحظي وتفاعل مباشر.' },
  { icon: Code2, title: 'مشاريع عملية', desc: 'ابنِ تطبيقات وألعاب حقيقية، ليس فقط مجرد نظريات.' },
  { icon: Users2, title: 'منصة حديثة', desc: 'نظام إدارة تعلم مصمم خصيصاً لتجربة طالب استثنائية.' },
  { icon: ShieldCheck, title: 'تطبيق ولي الأمر', desc: 'شفافية تامة لمتابعة التقدم، الحضور، والأداء.' },
  { icon: BrainCircuit, title: 'مساعد ذكي (AI)', desc: 'خوارزميات ذكية تتكيف مع سرعة وطريقة تعلم كل طالب.' },
  { icon: GraduationCap, title: 'منهج البكالوريا', desc: 'تدريس مخصص لعلوم الحاسب ومنهج البكالوريا لطلاب المرحلة الثانوية.' },
];

export function Features() {
  return (
    <section className="py-40 relative max-w-7xl mx-auto px-6">
      <div className="mb-24" dir="rtl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block"
        >
          الابتكار في التعليم
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          نتخطى الطرق <br/>
          <span className="text-gradient">التقليدية</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl max-w-2xl leading-relaxed"
        >
          نحن لا نعلّم البرمجة فحسب، بل نبني عقولاً مبدعة قادرة على تشكيل المستقبل باستخدام أحدث الأدوات والتقنيات.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]" dir="rtl">
        {features.map((f, i) => {
          const Icon = f.icon;
          // Apple Bento Grid logic: different sizes for cards
          const isLarge = i === 0 || i === 4;
          const isMedium = i === 1 || i === 5;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`relative
                ${isLarge ? 'md:col-span-6 lg:col-span-8' : isMedium ? 'md:col-span-3 lg:col-span-4' : 'md:col-span-3 lg:col-span-4'}
              `}
            >
              <SpotlightCard 
                className="glass p-8 rounded-3xl group hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between h-full"
                spotlightColor="rgba(37, 99, 235, 0.15)"
              >
                <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight transition-transform duration-300">{f.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-md transition-colors">{f.desc}</p>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
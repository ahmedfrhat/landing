import { motion } from 'framer-motion';
import { MonitorPlay, Code2, Users2, BrainCircuit, GraduationCap, ShieldCheck } from 'lucide-react';

const features = [
  { icon: MonitorPlay, title: 'فصول تفاعلية', desc: 'جلسات برمجة حية مع تقييم لحظي وتفاعل مباشر.' },
  { icon: Code2, title: 'مشاريع عملية', desc: 'ابنِ تطبيقات وألعاب حقيقية، ليس فقط مجرد نظريات.' },
  { icon: Users2, title: 'منصة حديثة', desc: 'نظام إدارة تعلم مصمم خصيصاً لتجربة طالب استثنائية.' },
  { icon: ShieldCheck, title: 'تطبيق ولي الأمر', desc: 'شفافية تامة لمتابعة التقدم، الحضور، والأداء.' },
  { icon: BrainCircuit, title: 'مساعد ذكي (AI)', desc: 'خوارزميات ذكية تتكيف مع سرعة وطريقة تعلم كل طالب.' },
  { icon: GraduationCap, title: 'شهادات معتمدة', desc: 'شهادات موثقة ومعترف بها عند إتمام كل مستوى.' },
];

export function Features() {
  return (
    <section className="py-32 relative max-w-7xl mx-auto px-4">
      <div className="text-center mb-20" dir="rtl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">نتخطى الطرق <span className="text-gradient">التقليدية</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 hover:glow-purple relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Icon className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
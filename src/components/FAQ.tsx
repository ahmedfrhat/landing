import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'ما هو العمر المناسب للبدء؟', a: 'نستقبل الطلاب من سن 10 سنوات فما فوق، حيث تم تصميم المناهج لتناسب الفئات العمرية المختلفة.' },
  { q: 'هل يحتاج الطالب إلى خبرة سابقة؟', a: 'لا، نبدأ من الصفر تماماً ونبني الأساسيات بشكل تدريجي وممتع.' },
  { q: 'ماذا سيتعلم الطالب في الأكاديمية؟', a: 'نركز في البداية على بناء التفكير المنطقي، حل المشكلات، وأساسيات علوم الحاسب (أو منهج البكالوريا لمن يطلبه). بعد إتقان الأساسيات، يتم توجيه الطالب للتطبيق العملي وبناء المشاريع.' },
  { q: 'كيف يمكن لولي الأمر متابعة التقدم؟', a: 'من خلال تطبيق ولي الأمر المخصص، والذي يعرض تقارير الحضور، الواجبات، ومستوى التقدم العام.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 max-w-4xl mx-auto px-4">
      <div className="text-center mb-20" dir="rtl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">الأسئلة <span className="text-gradient">الشائعة</span></h2>
      </div>

      <div className="flex flex-col gap-4" dir="rtl">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-right cursor-pointer"
            >
              <span className="text-xl font-bold">{faq.q}</span>
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                <ChevronDown className="text-cyan-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-5 text-gray-400 text-lg leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
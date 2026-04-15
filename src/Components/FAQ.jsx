import React, { useState } from 'react';
import { ChevronDown, ArrowDownCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "كم الميزانية اللي أحتاجها؟",
      a: "الميزانية تختلف حسب نوع المشروع وأهدافك، لكننا نركز دائماً على تحقيق أعلى عائد ربحي (ROI) ممكن بأقل تكلفة هدر. حياك الله، نناقش هذا في أول استشارة مجانية."
    },
    {
      q: "متى أقدر أشوف نتائج؟",
      a: "النتائج الأولية تبدأ بالظهور خلال أول 30-45 يوم من العمل المكثف، ولكن النمو الحقيقي والمستدام يتطلب خطة لا تقل عن 90 يوم كما هو موضح في ضماننا."
    },
    {
      q: "وش اللي يميزكم عن غيركم؟",
      a: "نحن لا نبيع 'خدمات' بل نبيع 'نمو'. نركز على المبيعات النهائية والربح الصافي لمشروعك، وليس فقط عدد المشاهدات أو الإعجابات."
    },
    {
      q: "وش يشمل شغلكم بالضبط؟",
      a: "شغلنا يشمل رحلة العميل كاملة: من جذب العميل عبر الإعلانات، إلى إقناعه بالمحتوى، ثم تحسين الموقع لشراء الخدمة، ومتابعة البيانات للتطوير المستمر."
    },
    {
      q: "كيف أبدأ معكم؟",
      a: "الأمر بسيط جداً، احجز استشارتك المجانية عبر الموقع، وسيقوم أحد خبرائنا بالتواصل معك لفهم احتياجاتك ووضع خطة أولية."
    }
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-24 bg-[#020617] text-white overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-white text-xl md:2xl mb-6">عندك استفسار؟</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            حنا نحب اللي <span className="text-white">يطقطق!</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-6 group-hover:opacity-80 transition-all duration-300 border-b border-white/5"
              >
                {/* Right side: Bullet & Question */}
                <div className="flex items-center gap-6">
                  {/* Blue Bullet Point */}
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 shadow-[0_0_12px_rgba(37,99,235,1)]"></div>
                  
                  <span className="text-xl md:text-2xl font-bold text-white text-right leading-tight">
                    {faq.q}
                  </span>
                </div>

                {/* Left side: Arrow icon */}
                <div className={`transition-transform duration-500 shrink-0 ml-4 ${openIndex === idx ? 'rotate-180 opacity-100' : 'opacity-40'}`}>
                   <ArrowDownCircle className="w-10 h-10 text-white" strokeWidth={1} />
                </div>
              </button>

              {/* Answer Section */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="pr-6 pl-14 text-lg text-gray-400 leading-relaxed border-r-2 border-blue-600/30">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "نصنع الفكرة",
      subtitle: "AI Creative Production",
      features: [
        "إنتاج فيديوهات إعلانية احترافية",
        "تصميم إعلانات بالذكاء الاصطناعي",
        "كتابة محتوى إعلاني مقنع",
        "صور منتجات احترافية",
        "محتوى سوشيال ميديا متخصص"
      ]
    },
    {
      title: "نبني الأساس",
      subtitle: "Branding",
      features: [
        "تطوير وتقوية الهوية البصرية",
        "تصميم شعار ومواد العلامة",
        "إنشاء دليل الهوية التجارية",
        "تصميم قوالب السوشيال ميديا",
        "بناء حضور احترافي ومميز"
      ]
    },
    {
      title: "نرفع الظهور",
      subtitle: "SEO Optimization",
      features: [
        "تحسين المنتجات لمحركات البحث",
        "تحسين صفحات الفئات والوصف",
        "بناء روابط خلفية (Off-Page)",
        "بحث الكلمات المفتاحية وتحليل المنافسين",
        "تحسين سرعة الموقع والتقنيات"
      ]
    },
    {
      title: "نحرك النمو",
      subtitle: "Growth Marketing",
      features: [
        "إدارة وتحسين الحملات الإعلانية",
        "إنشاء وإدارة صفحات الهبوط",
        "تحليل بيانات المبيعات والزوار",
        "اختبار A/B وتحسين التحويلات",
        "رفع الأداء بنفس الميزانية"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-white font-bold text-xl mb-4 block">خدماتنا</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            كل احتياجات مشروعك في مكان واحد
          </h2>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            من التحسين لمحركات البحث حتى الإنتاج الإبداعي، كل خدمة مصممة لتضاعف أرباحك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative group p-8 pb-10 rounded-[2.5rem] border border-blue-900/40 bg-[#020617]/60 backdrop-blur-md ring-1 ring-white/5 hover:ring-blue-500/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Logo text at top - Aligned Right */}
              <div className="w-full flex justify-start mb-8">
                 <span className="text-blue-500 font-bold text-sm tracking-widest opacity-80">Flow</span>
              </div>
              
              {/* Title Section */}
              <div className='w-full flex flex-col items-center md:items-start'>
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
              <p className="text-[10px] font-bold text-blue-400/50 mb-10 uppercase tracking-[0.2em]">{service.subtitle}</p>
              </div>
              
              {/* Features List - RTL order */}
              <ul className="space-y-5 mb-12 w-full">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-gray-200 flex items-center justify-start gap-3 text-sm font-medium group/item hover:text-white transition-colors">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center ring-1 ring-blue-500/20">
                      <Check className="w-3.5 h-3.5 text-blue-500" strokeWidth={3} />
                    </div>
                    <span className="text-right leading-relaxed flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Action Button - RTL order (Arrow on left) */}
              <button className="mt-auto cursor-pointer w-full py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                <span className="text-sm">أطلب خطة مشروعك الآن</span>
                <ArrowLeft className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

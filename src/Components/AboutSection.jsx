import React from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import WhyFlow from "../assets/Why-flow.webp";

export default function AboutSection() {
  return (
    <section
      id="why-flow"
      className="relative w-full min-h-175 bg-[#141414] text-white overflow-hidden flex items-center py-10"
    >
      {/* Background img */}
      <div className="Bg-img absolute w-full h-full top-0 left-0">
        <img
          src={WhyFlow}
          alt="لماذا تختار فلو للنمو الرقمي وتطوير مبيعات مشروعك"
          className="object-cover object-left  w-full h-full "
        />
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-12 items-center relative z-10">
        {/* Right Column: Arabic Text Content */}
        <div className="order-2 md:order-1 text-right" dir="rtl">
          <span className="text-gray-100 text-lg mb-6 block font-medium">
            ليش فلو؟
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 w-8/12">
            نساعد مشروعك يحقق نمو حقيقي 
            ويضاعف مبيعاته <br/>
            <span className="relative text-primary inline-block mt-2">
              بدون هدر ميزانيته
            </span>
          </h2>

          {/* Features List with Custom Checkmarks */}
          <ul className="space-y-5 mb-12">
            {[
              "بناء نظام تسويق يحول كل زيارة إلى فرصة بيع حقيقية",
              "تحسين أداء الإعلانات لزيادة الأرباح بنفس الميزانية",
              "تحليل مستمر للبيانات لاتخاذ قرارات ترفع مبيعاتك بشكل واضح",
            ].map((text, index) => (
              <li key={index} className="flex items-start justify-start gap-4">
                {/* Styled Checkmark */}
                <span className="text-primary text-xl font-bold mt-1">✓</span>
                <span className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Buttons Container */}
          <div className="flex  justify-start gap-5">
            <button className="bg-primary hover:bg-blue-700 text-white md:px-10 md:py-4 px-4 py-3 border border-white cursor-pointer font-bold transition-colors text-sm md:text-lg shadow-lg">
              احجز استشارتك المجانية الآن
            </button>
            <button className="bg-white hover:bg-gray-100 text-black md:px-10 md:py-4 px-4 py-3 cursor-pointer font-bold transition-colors text-sm md:text-lg border border-white">
              عرض الملف التعريفي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

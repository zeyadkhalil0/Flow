import React from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import WhyFlow from "../assets/Why-flow.webp";

export default function AboutSection() {
  return (
    <section
      id="why-flow"
      className="relative w-full min-h-175 bg-[#141414] text-white overflow-hidden flex items-center"
    >
      {/* Background img */}
      <div className="Bg-img absolute w-full h-full top-0 left-0">
        <img
          src={WhyFlow}
          alt="لماذا تختار فلو للنمو الرقمي وتطوير مبيعات مشروعك"
          className="object-cover object-left  w-full h-full "
        />
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Right Column: Arabic Text Content */}
        <div className="order-2 md:order-1 text-right" dir="rtl">
          <span className="text-gray-100 text-lg mb-2 block font-medium">
            ليش فلو؟
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
            نساعد مشروعك يحقق نمو حقيقي <br />
            ويضاعف مبيعاته <br />
            <span className="relative inline-block mt-2">
              بدون هدر ميزانيته
              {/* Blue underline effect from the screenshot */}
              <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-600 -z-10 opacity-80 rounded-full"></div>
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
                <span className="text-blue-500 text-xl font-bold mt-1">✓</span>
                <span className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Buttons Container */}
          <div className="flex  justify-start gap-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white md:px-10 md:py-4 px-4 py-3 rounded-lg font-bold transition-colors text-sm md:text-lg shadow-lg">
              احجز استشارتك المجانية الآن
            </button>
            <button className="bg-white hover:bg-gray-100 text-black md:px-10 md:py-4 px-4 py-3 rounded-lg font-bold transition-colors text-sm md:text-lg border border-white">
              عرض الملف التعريفي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import WhyFlow from "../assets/Why-flow.webp";
import WhyFlowMobile from "../assets/Why-flow-mobile.png";

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
          className="hidden md:block object-cover object-left  w-full h-full "
        />

        <img
          src={WhyFlowMobile}
          alt="لماذا تختار فلو للنمو الرقمي وتطوير مبيعات مشروعك"
          className="block md:hidden object-cover w-full h-full object-bottom-left"
        />
      </div>
      <div className="container md:w-full w-7/12 md:mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-1 gap-12 items-center relative z-10">
        {/* Right Column: Arabic Text Content */}
        <div className="order-2 md:order-1 text-right" dir="rtl">
          <span className="text-gray-100 text-xl mb-8 block font-medium">
            ليش فلو؟
          </span>

          <h2 className="text-md md:text-4xl lg:text-5xl font-black leading-tight mb-6 md:w-8/12">
            نساعد مشروعك يحقق نمو حقيقي ويضاعف مبيعاته <br />
            <span className="relative text-primary inline-block mt-2">
              بدون هدر ميزانيته
            </span>
          </h2>

          {/* Features List with Custom Checkmarks */}
          <ul className="space-y-2 mb-12">
            {[
              "بناء نظام تسويق يحول كل زيارة إلى فرصة بيع حقيقية",
              "تحسين أداء الإعلانات لزيادة الأرباح بنفس الميزانية",
              "تحليل مستمر للبيانات لاتخاذ قرارات ترفع مبيعاتك بشكل واضح",
            ].map((text, index) => (
              <li key={index} className="flex items-start justify-start gap-4">
                {/* Styled Checkmark */}
                <span className="text-primary text-xl font-bold mt-1">✓</span>
                <span className="text-gray-200 text-[10px] md:text-xl leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Buttons Container */}
          <div className="flex flex-col md:flex-row items-center md:items-start  text-center gap-4">
            <a
              href="https://wa.link/cbcz1x"
              target="blank"
              className="bg-primary mt-10 md:mt-0 hover:bg-blue-700 w-fit text-white md:px-10 md:py-4 px-2 py-2 border border-white cursor-pointer  transition-colors text-[10px] md:text-lg shadow-lg"
            >
              احجز استشارتك المجانية الآن
            </a>
            <a
              href="https://drive.google.com/drive/folders/1Y-cImKI3ODxiplOrXy6kVr-1cGddYgaa?usp=sharing"
              target="blank"
              className="hidden md:block bg-white hover:bg-gray-100 w-fit text-black md:px-10 md:py-4 px-2 py-2 cursor-pointer font-bold transition-colors text-[8px] md:text-lg border border-white"
            >
              عرض الملف التعريفي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

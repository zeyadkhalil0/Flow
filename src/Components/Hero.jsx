import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "مشروع في الخليج", value: "29+", sub: "موثوقين في السوق" },
    {
      label: "سنوات خبرة في الشرق الاوسط",
      value: "3+",
      sub: "في تقديم الحلول",
    },
    { label: "هدر لميزانيتك", value: "0%", sub: "خدمة عملاء فائقة" },
  ];

  return (
    <section className="hero pt-32 pb-20 overflow-hidden">
      <div className="container flex flex-col mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="flex mx-auto items-center h-20 w-full text-center space-x-4 md:w-fit text-blue-500  px-4 py-2 bg-blue-50 text- rounded-full mb-8">
          <CheckCircle2 className="w-5 h-5 text-blue-700" />
          <span className="hero-cta  text-blue-700 font-bold">
            • نبني العلامة التجارية • نحرّك النمو • نوسّع السوق
          </span>
        </div>

        {/* Headline */}
        <h1 className="zain-extralight text-4xl md:text-7xl font-black mb-8 leading-[1.2] animate-slide-up">
          أحصل{" "}
          <span className="text-blue-700 tracking-tight"> علي 5 أضعاف</span>{" "}
          مبيعات مشروعك <br />
          خلال <span className="text-blue-700">90 يوم</span> فقط!
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          وفّر <span className="text-primary font-bold">15%</span> من تكاليفك
          الشهرية مع استراتيجيات تسويقية <br className="hidden md:block" />
          مركزة على النتائج والنمو الحقيقي.
        </p>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto pt-10 border-t border-gray-100 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-5xl text-blue-700 mb-2 tracking-tighter font-light">
                {stat.value}
              </span>
              <span className="text-lg font-bold text-secondary mb-1">
                {stat.label}
              </span>
              <span className="text-sm text-gray-500">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-20 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#services" className="btn-primary bg-blue-700 text-white font-bold cursor-pointer flex items-center gap-3 px-10 py-4 text-lg rounded-xl">
            اطلب خطة مشروعك الان
            <ArrowLeft className="w-5 h-5" />
          </a>
          <button className="btn outline outline-black cursor-pointer bg-white px-10 py-4 text-lg">
            عرض الملف التعريفي
          </button>
        </div>
      </div>
    </section>
  );
}

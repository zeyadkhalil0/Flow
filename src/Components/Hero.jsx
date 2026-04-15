import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "مشروع في الخليج", value: "29+"},
    {
      label: "سنوات خبرة في الشرق الاوسط",
      value: "3+",
    },
    { label: "هدر لميزانيتك", value: "0%"},
  ];

  return (
    <section className="hero pt-32 pb-20 overflow-hidden">
      <div className="container flex flex-col mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="flex mx-auto items-center h-20 w-full text-center space-x-4 md:w-fit text-primary  px-4 py-2  rounded-full mb-8">
          <span className="hero-cta  text-primary font-bold">
            • نبني العلامة التجارية • نحرّك النمو • نوسّع السوق
          </span>
        </div>

        {/* Headline */}
        <h1 className="zain-extralight text-3xl md:text-5xl font-black mb-8 leading-[1.2] animate-slide-up">
          أحصل <span className="text-primary tracking-tight"> علي 5 أضعاف</span>{" "}
          مبيعات مشروعك <br />
          خلال <span className="text-primary">90 يوم</span> فقط!
        </h1>

        {/* Subtitle */}
        <p className="text-black text-lg">وفر 15% من تكاليفك الشهرية</p>
        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto pt-10  animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="hero-value text-4xl text-primary mb-2 ">
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
          <a
            href="#services"
            className="btn-primary bg-primary text-white font-bold cursor-pointer flex items-center gap-3 px-10 py-4 text-lg border border-black"
          >
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

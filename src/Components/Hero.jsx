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
        <p className="text-gray-800 text-lg font-medium">وفر 15% من تكاليفك الشهرية</p>
        {/* Stats Grid */}
        <div
          className="grid grid-cols-3 gap-14 max-w-5xl mx-auto pt-10  animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex  flex-col items-center">
              <span className="hero-value md:text-4xl text-primary mb-2 ">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-lg font-bold text-secondary mb-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-row items-center justify-center gap-6 mt-20 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=966565593442&text=%D8%AD%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%84%D9%87%0A%20%D9%85%D8%B9%D9%83%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D9%84%D9%88%20%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D9%86%D9%85%D9%88%20%D8%AA%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%AA%D8%B6%D8%A8%D8%B7%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD.%20%D8%B1%D8%A7%D8%B3%D9%84%D9%86%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%86%20%D9%88%D8%A3%D8%AD%D8%B5%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AF%D9%84%D9%8A%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%86%D9%8A%20%D9%84%D8%B1%D9%81%D8%B9%20%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AC%D8%B1%D9%83%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%87%D8%AF%D8%B1%20%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%A9" target="blank"
            className="btn-primary bg-primary text-white font-bold cursor-pointer flex items-center gap-3 px-2 py-2 text-[10px] md:text-lg border border-black"
          >
            اطلب خطة مشروعك الان
            <ArrowLeft className="w-5 h-5" />
          </a>
          <a href="https://drive.google.com/drive/folders/1Y-cImKI3ODxiplOrXy6kVr-1cGddYgaa?usp=sharing" target="blank" className="btn outline outline-black cursor-pointer bg-white px-2 py-2 text-[10px] md:text-lg">
            عرض الملف التعريفي
          </a>
        </div>
      </div>
    </section>
  );
}

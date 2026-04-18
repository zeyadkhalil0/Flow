import React from "react";
import ctaBg from "../assets/CTA.webp";
import CTAmobile from "../assets/CTA-mobile.png";

export default function CTASection() {
  return (
    <section
      className="relative min-h-150 flex items-center justify-center overflow-hidden py-24"
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="CTA Background"
          className="hidden md:block w-full h-full object-cover"
        />

        <img
          src={CTAmobile}
          alt="لماذا تختار فلو للنمو الرقمي وتطوير مبيعات مشروعك"
          className="block md:hidden object-cover w-full h-full object-bottom-left"
        />
      </div>

      <div className="overlay absolute inset-0 md:bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Top small text */}
        <p className="text-primary font-bold text-lg md:text-xl mb-6 tracking-wide drop-shadow-sm">
          الوقت يمشي والمنافسة تكبر
        </p>

        {/* Main Heading */}
        <h2 className="CTA-text text-3xl md:text-7xl font-black text-white leading-tight mb-8 drop-shadow-xl w-full">
          کم قاعد تخسر بدون ما تدري؟ كل مشروع ناجح يبدأ بخطوة
          <br />
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl mb-12 font-medium">
          مجاناً وبدون أي التزام
        </p>

        {/* Action Button */}
        <a
          href="https://api.whatsapp.com/send?phone=966565593442&text=%D8%AD%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%84%D9%87%0A%20%D9%85%D8%B9%D9%83%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D9%84%D9%88%20%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D9%86%D9%85%D9%88%20%D8%AA%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%AA%D8%B6%D8%A8%D8%B7%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD.%20%D8%B1%D8%A7%D8%B3%D9%84%D9%86%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%86%20%D9%88%D8%A3%D8%AD%D8%B5%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AF%D9%84%D9%8A%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%86%D9%8A%20%D9%84%D8%B1%D9%81%D8%B9%20%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AC%D8%B1%D9%83%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%87%D8%AF%D8%B1%20%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%A9"
          target="blank"
          className="bg-primary hover:bg-secondry text-white cursor-pointer font-black py-4 px-2 md:px-16 rounded-xl text-md md:text-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
        >
          احصل علي استشارة مجانية لمشروعك
        </a>
      </div>
    </section>
  );
}

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
          href="https://wa.link/cbcz1x"
          target="blank"
          className="bg-primary hover:bg-secondry text-white cursor-pointer font-black py-4 px-2 md:px-16 rounded-xl text-md md:text-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
        >
          احصل علي استشارة مجانية لمشروعك
        </a>
      </div>
    </section>
  );
}

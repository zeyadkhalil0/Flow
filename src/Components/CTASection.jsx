import React from 'react';
import ctaBg from '../assets/CTA.webp';

export default function CTASection() {
  return (
    <section className="relative min-h-150 flex items-center justify-center overflow-hidden py-24" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaBg} 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Top small text */}
        <p className="text-blue-600 font-bold text-lg md:text-xl mb-6 tracking-wide drop-shadow-sm">
          الوقت يمشي والمنافسة تكبر
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 drop-shadow-xl">
          کم قاعد تخسر بدون ما تدري؟ <br />
          كل مشروع ناجح يبدأ بخطوة
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl mb-12 font-medium">
          مجاناً وبدون أي التزام
        </p>

        {/* Action Button */}
        <button className="bg-blue-600 hover:bg-blue-500 text-white cursor-pointer font-black py-4 px-10 md:px-16 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(37,99,235,0.4)]">
          احصل على استشارة مجانية لمشروعك الآن
        </button>
      </div>
    </section>
  );
}

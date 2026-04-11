import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-20 pb-12 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-right">
          
          {/* Info & Contact Section (RIGHT) */}
          <div className="flex flex-col items-start order-1">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">FlOW</h2>
            
            <h4 className="text-2xl font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4 w-full">
              <a href="tel:+966565593442" className="flex items-center justify-start gap-3 text-gray-400 hover:text-blue-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <Phone size={18} />
                </div>
                <span dir="ltr" className="text-lg">+966 565593442</span>
              </a>
              
              <a href="mailto:flowsystem.gmb@gmail.com" className="flex items-center justify-start gap-3 text-gray-400 hover:text-blue-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   <Mail size={18} />
                </div>
                <span className="text-lg">flowsystem.gmb@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Important Links Section (CENTER) */}
          <div className="flex flex-col items-center order-2">
            <h4 className="text-2xl font-bold mb-8">روابط مهمة</h4>
            <ul className="space-y-4 text-center">
              <li><a href="#about" className="text-xl text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-xl text-gray-400 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#contact" className="text-xl text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Social Links Section (LEFT) */}
          <div className="flex flex-col items-center md:items-start order-3 md:order-3">
            <h4 className="text-2xl font-bold mb-8">روابط التواصل</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaTiktok size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaSnapchatGhost size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            2025 Flow جميع الحقوق محفوظة ©
            Made By Dev | <a href="https://codezeesocialist.vercel.app/">Zeyad Muhammad Khalil</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
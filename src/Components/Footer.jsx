import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-20 pb-12 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-right">
          
          {/* Info & Contact Section (RIGHT) */}
          <div className="flex flex-col items-center order-1">
            <h3 className="text-4xl font-bold mb-8 tracking-tighter">FlOW</h3>
            
            <h4 className="text-2xl font-bold mb-6"> <a href="https://api.whatsapp.com/send?phone=966565593442&text=%D8%AD%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%84%D9%87%0A%20%D9%85%D8%B9%D9%83%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D9%84%D9%88%20%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D9%86%D9%85%D9%88%20%D8%AA%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%AA%D8%B6%D8%A8%D8%B7%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD.%20%D8%B1%D8%A7%D8%B3%D9%84%D9%86%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%86%20%D9%88%D8%A3%D8%AD%D8%B5%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AF%D9%84%D9%8A%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%86%D9%8A%20%D9%84%D8%B1%D9%81%D8%B9%20%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AC%D8%B1%D9%83%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%87%D8%AF%D8%B1%20%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%A9" target='blank'>تواصل معنا</a></h4>
            <div className="space-y-4 w-full">
              <a href="tel:+966565593442" className="flex items-center justify-start gap-3 text-gray-400 hover:text-blue-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <Phone size={18} />
                </div>
                <a href='https://api.whatsapp.com/send?phone=966565593442&text=%D8%AD%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%84%D9%87%0A%20%D9%85%D8%B9%D9%83%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D9%84%D9%88%20%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D9%86%D9%85%D9%88%20%D8%AA%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%AA%D8%B6%D8%A8%D8%B7%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD.%20%D8%B1%D8%A7%D8%B3%D9%84%D9%86%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%86%20%D9%88%D8%A3%D8%AD%D8%B5%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AF%D9%84%D9%8A%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%86%D9%8A%20%D9%84%D8%B1%D9%81%D8%B9%20%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AC%D8%B1%D9%83%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%87%D8%AF%D8%B1%20%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%A9' target='blank' dir="ltr" className="text-lg">+966 565593442</a>
              </a>
              
              <a href="mailto:flowsystem.gmb@gmail.com" className="flex items-center justify-start gap-3 text-gray-400 hover:text-blue-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   <Mail size={18} />
                </div>
                <a href='mailto:flowsystem.gmb@gmail.com'  className="text-lg">flowsystem.gmb@gmail.com</a>
              </a>
            </div>
          </div>

          {/* Important Links Section (CENTER) */}
          <div className="flex flex-col items-center order-2">
            <h4 className="text-2xl font-bold mb-8">روابط مهمة</h4>
            <ul className="space-y-4 text-center">
              <li><a href="https://drive.google.com/drive/folders/1Y-cImKI3ODxiplOrXy6kVr-1cGddYgaa?usp=sharing" target='blank' className="text-xl text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-xl text-gray-400 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=966565593442&text=%D8%AD%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%84%D9%87%0A%20%D9%85%D8%B9%D9%83%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D9%84%D9%88%20%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D9%86%D9%85%D9%88%20%D8%AA%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%AA%D8%B6%D8%A8%D8%B7%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD.%20%D8%B1%D8%A7%D8%B3%D9%84%D9%86%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%86%20%D9%88%D8%A3%D8%AD%D8%B5%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AF%D9%84%D9%8A%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%86%D9%8A%20%D9%84%D8%B1%D9%81%D8%B9%20%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AC%D8%B1%D9%83%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%87%D8%AF%D8%B1%20%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%A9" target='blank' className="text-xl text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Social Links Section (LEFT) */}
          <div className="flex flex-col items-center md:items-start order-3 md:order-3">
            <h4 className="text-2xl font-bold mb-8">روابط التواصل</h4>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@flow.gmb" target='blank' aria-label="تيك توك" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaTiktok size={22} />
              </a>
              <a href="https://www.instagram.com/flow.gmb" target='blank' aria-label="انستغرام" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.snapchat.com/@flow.gmb" target='blank' aria-label="سناب شات" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <FaSnapchatGhost size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-100 text-sm">
            2025 Flow جميع الحقوق محفوظة ©
          </p>
          
          <p className="text-gray-100 text-sm opacity-0 ">
                        Made By Dev | <a href="https://codezeesocialist.vercel.app/" target='blank'>Zeyad Muhammad Khalil</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import logo from "../assets/logo.webp"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-lg py-4 shadow-lg border-b border-white/10' 
        : 'bg-black py-5'}`}
        dir='ltr'
        >

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all group">
            تواصل معنا
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-white">
          <li>
            <a href="#why-flow" className="hover:text-blue-400 transition">
              ليش فلو
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400 transition">
              خدماتنا
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-400 transition">
              عرض الملف التعريفي
            </a>
          </li>
          <li>
            <a href="#logo" className="text-blue-400 font-bold hover:text-blue-500 transition">
              أطلب شعار
            </a>
          </li>
        </ul>

        <div>
          <img src={logo} alt="شعار وكالة فلو للتسويق الرقمي" width={"60px"} height={"60px"} />
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute top-full left-0 right-0 py-6 px-6 shadow-xl border-t border-white/10">
          <ul className="flex flex-col gap-6 text-center text-white">
            
            <li>
              <a href="#why-flow" onClick={() => setIsMobileMenuOpen(false)}>
                ليش فلو
              </a>
            </li>

            <li>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                خدماتنا
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                عرض الملف التعريفي
              </a>
            </li>

            <li>
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg flex justify-center items-center gap-2 transition">
                تواصل معنا
                <ArrowLeft className="w-4 h-4" />
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
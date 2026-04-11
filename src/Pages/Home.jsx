import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutSection from '../Components/AboutSection';
import Services from '../Components/Services';
import FAQ from '../Components/FAQ';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen font-sans" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Hero from '../components/sections/Hero';
import WhyEdiskool from '../components/sections/WhyEdiskool';
import SocialStats from '../components/sections/SocialStats';
import OfflineExitBanner from '../components/common/OfflineExitBanner';

const OfflineCoursePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animation observer for scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible');
      });
    }, { threshold: 0.01 });
    
    // Add small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full overflow-x-hidden pt-[60px] bg-[#07100f]">
        <Hero />
        <WhyEdiskool />
        <SocialStats />
      </main>
      <Footer />
      <OfflineExitBanner />
      
      {/* Floating Bar for Mobile */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between gap-3"
        style={{
          backgroundColor: 'rgba(7, 16, 15, 0.97)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(43, 191, 176, 0.3)',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <p className="text-xs font-body flex-shrink-0" style={{ color: 'rgba(255,255,255,0.7)' }}>
          🎬 Limited seats left
        </p>
        <button
          className="font-ui font-bold text-sm py-2.5 px-6 rounded-lg cursor-pointer hover:opacity-90 transition flex-shrink-0 text-center"
          style={{ backgroundColor: '#2bbfb0', color: '#ffffff' }}
        >
          Pre-book Your Seat
        </button>
      </div>
    </>
  );
};

export default OfflineCoursePage;

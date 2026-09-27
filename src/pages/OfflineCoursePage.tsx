import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Hero from '../components/sections/Hero';
import WhyEdiskool from '../components/sections/WhyEdiskool';
import SocialStats from '../components/sections/SocialStats';
import FloatingContactBar from '../components/common/FloatingContactBar';

const OfflineCoursePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full overflow-x-hidden">
        <Hero />
        <WhyEdiskool />
        <SocialStats />
      </main>
      <div className="pb-24">
        <Footer />
      </div>
      <FloatingContactBar />
    </>
  );
};

export default OfflineCoursePage;

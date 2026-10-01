import { useEffect, useRef } from 'react';
import heroImage from '../../assets/shobhit.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-12 pb-10 px-5 flex flex-col md:justify-start md:pt-20 md:pb-2 bg-[#07100f] overflow-hidden">

      <div className="relative z-10 md:hidden max-w-md mx-auto w-full flex flex-col items-center fade-in">

        {/* Heading & Image Relative Container */}
        <div className="relative w-full h-[460px] mb-0">
          {/* Heading */}
          <div className="absolute top-0 left-0 z-10 w-full">
            <h1 className="flex flex-col font-heading text-[40px] sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white w-fit">MEET ME</span>
              <span className="text-[#2bbfb0] w-fit border-b-[3px] border-[#2bbfb0] pr-1 pb-1">OFFLINE.</span>
            </h1>
            <p className="text-white/80 text-xs sm:text-sm font-medium font-ui mt-2 max-w-[70%] ml-1">
              Learn and Master <br /> content creation
            </p>
          </div>

          {/* Image */}
          <div className="absolute bottom-0 right-0 w-full h-full pt-12">
            <img
              src={heroImage}
              alt="EdiSkool Offline"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            {/* Dark gradient overlay at the bottom to blend image into background */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07100f] to-transparent"></div>
          </div>
        </div>

        <p className="text-center text-[15px] sm:text-base font-medium font-ui px-6 leading-snug z-10 mb-3"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          EdiSkool is coming to Indore.
        </p>

        {/* CTA Button */}
        <button className="w-fit inline-block font-ui font-bold text-sm md:text-base py-3 px-8 rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-105 shadow-lg relative z-20 mt-4 mb-6" style={{ backgroundColor: '#2bbfb0', color: '#ffffff' }}>
          Pre-book Your Seat
        </button>

        {/* Info Below Button */}
        <div className="text-gray-400 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase flex justify-center items-center gap-2.5 relative z-20 mb-0">
          <span>Limited Seats</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2bbfb0]"></span>
          <span>Offline</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2bbfb0]"></span>
          <span>Indore</span>
        </div>
      </div>

      <div className="relative z-10 hidden md:flex flex-col max-w-[1000px] lg:max-w-[1100px] mx-auto w-full fade-in">

        {/* Main Box without border */}
        <div className="w-full flex rounded-[1.5rem] bg-transparent overflow-visible min-h-[500px]">
          {/* Left Col */}
          <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center relative">
            <h1 className="flex flex-col font-heading text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight mb-2 md:-ml-6 lg:-ml-10">
              <span className="text-white w-fit">MEET ME</span>
              <span className="text-[#2bbfb0] w-fit border-b-[4px] lg:border-b-[5px] border-[#2bbfb0] pr-16 lg:pr-24 pb-1 lg:pb-2 mb-2 lg:mb-4">OFFLINE.</span>
            </h1>
            <p className="text-white/80 text-sm lg:text-base font-medium font-ui mb-10 md:-ml-6 lg:-ml-10 md:-mt-2 lg:-mt-4">
              Learn and Master content creation
            </p>
            <button className="w-fit inline-block font-ui font-bold text-lg py-4 px-12 rounded-xl cursor-pointer hover:opacity-90 transition transform hover:scale-105 shadow-lg mt-2 md:-ml-6 lg:-ml-10" style={{ backgroundColor: '#2bbfb0', color: '#ffffff' }}>
              Pre-book Your Seat
            </button>

            {/* Info Below Button */}
            <div className="text-gray-400 text-[11px] lg:text-[13px] font-medium tracking-[0.25em] uppercase flex items-center gap-3 mt-6 md:-ml-6 lg:-ml-10">
              <span>Limited Seats</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2bbfb0]"></span>
              <span>Offline</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2bbfb0]"></span>
              <span>Indore</span>
            </div>


          </div>

          {/* Right Col */}
          <div className="flex-1 relative flex items-end">
            <img
              src={heroImage}
              alt="EdiSkool Offline"
              className="w-full h-auto object-contain object-bottom md:scale-[1.15] lg:scale-[1.25] origin-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

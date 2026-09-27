import heroImage from '../../assets/shobhit.png';

export default function Hero() {
  return (
    <section className="w-full pt-28 pb-10 px-5 flex flex-col justify-center min-h-[90vh] md:min-h-0 md:justify-start md:pt-32 md:pb-16">
      {/* --- MOBILE VIEW (Unchanged) --- */}
      <div className="md:hidden max-w-md mx-auto w-full flex flex-col items-center animate-fadeInUp">
        {/* Top Info */}
        <div className="w-full border-b border-gray-700/60 pb-3 mb-6">
          <div className="text-gray-400 text-[10px] font-medium tracking-[0.2em] uppercase flex justify-center items-center gap-2.5">
            <span>Limited Seats</span>
            <span className="w-1 h-1 rounded-full bg-[#2bbfb0]"></span>
            <span>Offline</span>
            <span className="w-1 h-1 rounded-full bg-[#2bbfb0]"></span>
            <span>Indore</span>
          </div>
        </div>

        {/* Heading & Image Relative Container */}
        <div className="relative w-full h-[420px] mb-8">
          {/* Heading */}
          <div className="absolute top-0 left-0 z-10">
            <h1 className="flex flex-col font-heading text-[3.7rem] leading-[0.9] tracking-tight text-[#2bbfb0]">
              <span>Meet me</span>
              <span>offline</span>
            </h1>
          </div>

          {/* Image */}
          <div className="absolute bottom-0 right-0 w-full h-full pt-10">
            <img
              src={heroImage}
              alt="EdiSkool Offline"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            {/* Dark gradient overlay at the bottom to blend image into background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07100f] to-transparent"></div>
          </div>
        </div>

        {/* Subheading */}
        <div className="mb-3 w-full text-center relative z-20">
          <p className="text-white text-[15px] font-medium font-ui opacity-95">
            Learn and Master content creation
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-fit px-10 bg-[#0a1a18] border border-[#2bbfb0]/20 text-white font-bold text-[14px] md:text-[15px] py-3 rounded-full shadow-lg hover:bg-[#112a27] transition-all relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2bbfb0]/70 to-transparent"></div>
          Join the Waitlist
        </button>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex flex-col max-w-[1000px] lg:max-w-[1100px] mx-auto w-full animate-fadeInUp">
        {/* Top Info Above Box */}
        <div className="w-full mb-4 flex justify-center">
          <div className="text-gray-500/80 text-[11px] lg:text-[13px] font-medium tracking-[0.25em] uppercase flex items-center gap-3">
            <span>Limited Seats</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            <span>Offline</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            <span>Indore</span>
          </div>
        </div>

        {/* Main Box without border */}
        <div className="w-full flex rounded-[1.5rem] bg-transparent overflow-hidden min-h-[580px]">
          {/* Left Col */}
          <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center relative">
            <h1 className="flex flex-col font-heading text-[5.5rem] lg:text-[6.5rem] leading-[0.9] tracking-tight text-[#2bbfb0] mb-5">
              <span>Meet me</span>
              <span>offline</span>
            </h1>
            <p className="text-white/90 text-lg lg:text-xl font-medium font-ui mb-10">
              Learn and Master content creation
            </p>
            <button className="w-fit px-12 bg-[#0a1a18] border border-[#2bbfb0]/20 text-white font-bold text-[18px] py-4 rounded-full shadow-lg hover:bg-[#112a27] transition-all relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2bbfb0]/70 to-transparent"></div>
              Join the Waitlist
            </button>
            
            {/* Vertical divider */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gray-700/60"></div>
          </div>

          {/* Right Col */}
          <div className="flex-1 relative flex items-end">
            <img
              src={heroImage}
              alt="EdiSkool Offline"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

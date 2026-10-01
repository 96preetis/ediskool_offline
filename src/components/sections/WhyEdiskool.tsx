import { useState, useEffect, useRef } from 'react';
import { Users, Film, TrendingUp, ChevronDown } from 'lucide-react';

const reasons = [
  {
    title: <>Mentor with <span className="text-[1.35em] font-black tracking-tighter">3M+</span> Online reach</>,
    subtext: "Learn from industry professionals who've built real audiences.",
    description: "Learn directly from industry professionals and experienced creators, understand what the industry actually demands, and build meaningful connections with creators, editors, mentors, and like-minded professionals.",
    icon: Users,
  },
  {
    title: 'Master Storytelling',
    subtext: "Great editors don't just edit — they communicate.",
    description: "Great editors don't just edit—they master storytelling to create content that connects, communicates, and leaves an impact.",
    icon: Film,
  },
  {
    title: "Ahead of trends",
    subtext: "Stay current with tools, techniques, and what's next.",
    description: "Stay ahead of trends by learning the latest tools, techniques, and workflows, and understanding what the industry needs next. we are ahead thats why we are best",
    icon: TrendingUp,
  },
];

export default function WhyEdiskool() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 px-5 md:px-12">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">

        {/* Heading */}
        <h2 className="fade-in text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-center mb-10 md:mb-16">
          <span className="text-black">WHY </span>
          <span className="text-[#2bbfb0]">EDISKOOL?</span>
        </h2>

        {/* 3-column grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`fade-in stagger-${index + 1} flex flex-col gap-2 md:gap-4 px-6 md:px-10 py-5 md:py-0 md:cursor-default cursor-pointer group`}
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#2bbfb0] flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-[24px] leading-tight font-bold font-heading text-black flex-1">
                    {item.title}
                  </h3>
                  <ChevronDown
                    size={18}
                    className="md:hidden text-gray-400 transition-transform duration-300 flex-shrink-0"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>

                {/* Subtext — always visible */}
                <p className="text-gray-500 font-ui text-[14px] md:text-[15px] font-medium leading-relaxed">
                  {item.subtext}
                </p>

                {/* Description — expandable on mobile, always visible on desktop */}
                <div
                  className="grid transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 font-ui text-[14px] md:text-[16px] font-medium leading-relaxed pt-1 border-t border-gray-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

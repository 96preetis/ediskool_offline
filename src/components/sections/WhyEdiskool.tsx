import { useState } from 'react';
import { Users, Film, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: <>Mentor with <span className="text-[1.35em] font-black tracking-tighter">3M+</span> Online reach</>,
    content: "Learn directly from industry professionals and experienced creators, understand what the industry actually demands, and build meaningful connections with creators, editors, mentors, and like-minded professionals.",
    icon: Users
  },
  {
    title: "Master Storytelling",
    content: "Great editors don’t just edit—they master storytelling to create content that connects, communicates, and leaves an impact.",
    icon: Film
  },
  {
    title: "Ahead of trends",
    content: "Stay ahead of trends by learning the latest tools, techniques, and workflows, and understanding what the industry needs next. we are ahead thats why we are best",
    icon: TrendingUp
  }
];

export default function WhyEdiskool() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Middle box is open by default

  return (
    <section className="w-full bg-white pt-6 pb-8 px-5 md:px-12">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-[3rem] md:text-[4rem] font-heading leading-none tracking-tight text-[#07100f] mb-6">
          Why Ediskool
        </h2>

        <div className="w-full flex flex-col gap-5">
          {reasons.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full border border-[#2bbfb0]/20 rounded-[2rem] p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#2bbfb0]/20 ${isOpen
                    ? 'bg-[#050b0a]' // darker when open
                    : 'bg-[#0e2421] hover:bg-[#13302c]' // lighter when closed
                  }`}
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Icon Box */}
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-[#2bbfb0] flex items-center justify-center mt-0.5">
                    <Icon className="text-[#07100f] w-7 h-7 md:w-8 md:h-8" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center min-h-[56px] md:min-h-[64px] flex-1">
                    <h3 className="text-xl md:text-[28px] leading-tight font-bold font-heading text-[#2bbfb0] pr-4">
                      {item.title}
                    </h3>

                    {/* Expandable Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-3 md:mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden pt-1">
                        <p className="text-gray-100 font-ui text-[15px] md:text-[17px] font-medium leading-relaxed tracking-wide pr-4 md:pr-8">
                          {item.content}
                        </p>
                      </div>
                    </div>
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

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Section {
  heading: string;
  points: string[];
}

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: Section[];
}

export default function PolicyModal({ isOpen, onClose, title, sections }: PolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#F8F5EF] rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F8F5EF] border-b border-gray-200 flex items-center justify-between px-6 py-4 rounded-t-xl">
          <h2
            className="text-lg md:text-xl font-bold font-ui"
            style={{ color: '#007C89' }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-5">
          {sections.map((section, i) => (
            <div key={i}>
              <h3
                className="font-semibold text-sm md:text-base font-ui mb-2"
                style={{ color: '#007C89' }}
              >
                {section.heading}
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-xs md:text-sm font-body" style={{}}>
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

            <p className="text-gray-400 text-xs pt-2 border-t border-gray-100 font-body" style={{}}>
            Last updated: March 2026 &bull; For questions, contact us at editioncourseinfo@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}


import { Mail } from 'lucide-react';

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 border-t border-[#2bbfb0]/20 bg-[#07100f] px-4 py-3 shadow-[0_-10px_30px_rgba(7,16,15,0.9)]">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
        
        {/* Left Side: Text */}
        <div className="text-left flex-1">
          <p className="font-ui text-[11px] sm:text-[14px] leading-tight text-[#F8F5EF]/80 max-w-[400px]">
            Have a query? Contact us via{' '}
            <span className="font-bold text-[#2bbfb0]">Email</span> or{' '}
            <span className="font-bold text-[#2bbfb0]">Whatsapp</span>
          </p>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <a
            href="mailto:editioncourseinfo@gmail.com"
            className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:opacity-90 transition shadow-lg"
            style={{ backgroundColor: '#007C89', color: '#F8F5EF' }}
            aria-label="Email Us"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://wa.me/9232106408?text=Hello%20Ediskool%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:opacity-90 transition shadow-lg"
            style={{ backgroundColor: '#F8F5EF', color: '#1A1A1A' }}
            aria-label="Whatsapp Us"
          >
            <svg viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.02L.261 22.505l4.63-1.213a11.97 11.97 0 0 0 7.14 2.303h.005c6.643 0 12.03-5.387 12.03-12.033 0-3.218-1.253-6.246-3.528-8.52A11.956 11.956 0 0 0 12.031 0zm0 21.583h-.005a10.02 10.02 0 0 1-5.111-1.396l-.367-.217-3.8.995.998-3.702-.238-.378a9.99 9.99 0 0 1-1.528-5.347c0-5.525 4.498-10.022 10.026-10.022 2.678 0 5.195 1.043 7.086 2.935 1.892 1.893 2.934 4.411 2.934 7.09 0 5.523-4.499 10.02-10.02 10.02zm5.498-7.509c-.302-.15-1.785-.88-2.062-.982-.276-.1-.478-.15-.678.15-.202.302-.781.983-.956 1.184-.176.202-.352.227-.654.076-1.332-.676-2.457-1.428-3.415-3.08-.242-.42.24-.4.832-1.584.1-.2.05-.376-.025-.526-.076-.15-.678-1.631-.93-2.234-.245-.589-.493-.508-.678-.518-.175-.009-.377-.01-.578-.01-.2 0-.527.075-.803.376-.276.302-1.055 1.031-1.055 2.513 0 1.482 1.08 2.915 1.23 3.115.15.2 2.124 3.243 5.143 4.545 1.942.836 2.7.92 3.69 1.045.748.1 2.378-.971 2.716-1.91.339-.938.339-1.74.238-1.91-.1-.176-.376-.277-.678-.427z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

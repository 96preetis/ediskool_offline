import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png';
import PolicyModal from '../common/PolicyModal';

const privacyPolicySections = [
  {
    heading: '1. Information We Collect',
    points: [
      'Name, email address, and phone number when you enroll in a course or contact us.',
      'Payment and billing details processed securely through our third-party payment gateway.',
      'Usage data such as pages visited, time spent on the site, and device/browser information collected via cookies.',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    points: [
      'To process course enrollments and grant access to purchased content.',
      'To communicate updates, offers, and support responses via email or WhatsApp.',
      'To improve our website, courses, and overall user experience.',
      'To comply with applicable legal obligations.',
    ],
  },
  {
    heading: '3. Data Sharing & Third Parties',
    points: [
      'We do not sell or rent your personal data to any third party.',
      'Information may be shared with trusted service providers (payment gateways, email services) solely to operate our platform.',
      'We may disclose data if required by law or to protect our legal rights.',
    ],
  },
  {
    heading: '4. Cookies',
    points: [
      'We use cookies to analyse site traffic and personalise your experience.',
      'You can disable cookies in your browser settings, though some features may not work as expected.',
    ],
  },
  {
    heading: '5. Data Security',
    points: [
      'We use industry-standard encryption and security measures to protect your data.',
      'While we strive to safeguard your information, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    heading: '6. Your Rights',
    points: [
      'You may request access to, correction of, or deletion of your personal data at any time by emailing us.',
      'You may opt out of promotional emails by clicking the unsubscribe link in any email we send.',
    ],
  },
];

const termsOfUseSections = [
  {
    heading: '1. Acceptance of Terms',
    points: [
      'By accessing or using the Ediskool website and courses, you agree to be bound by these Terms of Use.',
      'If you do not agree, please discontinue use of the platform immediately.',
    ],
  },
  {
    heading: '2. Course Access & Licence',
    points: [
      'Upon successful payment, you are granted a personal, non-transferable licence to access the purchased course for the specified duration.',
      'Course access duration varies by plan (e.g., 1 Year Access, 18 Months Access) as mentioned on the course listing.',
      'Sharing your login credentials or course materials with others is strictly prohibited.',
    ],
  },
  {
    heading: '3. Intellectual Property',
    points: [
      'All course content, videos, graphics, and materials are the intellectual property of Ediskool and its mentors.',
      'You may not reproduce, distribute, modify, or publicly display any course content without written permission.',
    ],
  },
  {
    heading: '4. User Conduct',
    points: [
      'You agree not to misuse the platform, disrupt services, or attempt unauthorised access.',
      'Any abusive, offensive, or inappropriate behaviour towards mentors or fellow students may result in account termination.',
    ],
  },
  {
    heading: '5. Payments & Refunds',
    points: [
      'All course fees are listed on the website and must be paid in full before access is granted.',
      'Refund requests are subject to our Refund Policy. Please review it separately for detailed terms.',
    ],
  },
  {
    heading: '6. Limitation of Liability',
    points: [
      'Ediskool provides courses for educational purposes only and does not guarantee specific career outcomes or income.',
      'We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform.',
    ],
  },
  {
    heading: '7. Changes to Terms',
    points: [
      'We reserve the right to update these Terms of Use at any time. Continued use of the platform after changes constitutes acceptance.',
      'Users will be notified of significant changes via email or a notice on the website.',
    ],
  },
];

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="text-white pb-20 md:pb-0" style={{ background: '#030a09', borderTop: '1px solid rgba(43,191,176,0.15)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Top Section - Logo & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left - Brand & Description */}
          <div>
            <img src={logo} alt="Ediskool" className="h-14 object-contain mb-2" />
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold mb-2 text-sm md:text-base font-ui" style={{ color: '#2bbfb0' }}>Pages</h3>
            <div className="flex flex-col gap-2">
              <a href="#courses" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Courses</a>
              <Link to="/blog" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Blogs</Link>
              <a href="#trusted-by" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Testimonial</a>
              <a href="#contact" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Contact</a>
            </div>
          </div>

          {/* Actions */}
          <div>
            <h3 className="font-bold mb-2 text-sm md:text-base font-ui" style={{ color: '#2bbfb0' }}>Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/courses" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Enroll Now</Link>
              <a href="https://learn.ediskool.com/login" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-body transition" style={{ color: 'rgba(255,255,255,0.65)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.65)'}>Login</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="font-bold mb-2 text-sm md:text-base font-ui" style={{ color: '#2bbfb0' }}>Follow Us</h3>
            <div className="flex gap-3">
              <a href="mailto:editioncourseinfo@gmail.com" className="transition" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.5)'}>
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shobhit-gour" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.5)'}>
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/_editing_edition_" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.5)'}>
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@editingeditionyoutube" target="_blank" rel="noopener noreferrer" className="transition" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.5)'}>
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="py-3 md:py-4" style={{ borderTop: '1px solid rgba(43,191,176,0.1)' }}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 font-body" style={{}}>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>© Copyright 2026 Ediskool. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <button onClick={() => setActiveModal('privacy')} className="transition font-ui cursor-pointer" style={{ color: 'rgba(255,255,255,0.4)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.4)'}>Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="transition font-ui cursor-pointer" style={{ color: 'rgba(255,255,255,0.4)' }} onMouseEnter={(e: any) => e.currentTarget.style.color='#2bbfb0'} onMouseLeave={(e: any) => e.currentTarget.style.color='rgba(255,255,255,0.4)'}>Terms of Use</button>
          </div>
        </div>
      </div>

      <PolicyModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        sections={privacyPolicySections}
      />
      <PolicyModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Use"
        sections={termsOfUseSections}
      />
    </footer>
  )
}

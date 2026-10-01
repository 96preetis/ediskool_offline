import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

// ─── Count-Up Hook ────────────────────────────────────────────────────────────
function useCountUp(target: string, duration = 1800, shouldStart = false) {
  const [display, setDisplay] = useState({ value: '0', suffix: '' });

  useEffect(() => {
    if (!shouldStart) return;
    const raw = target.replace(/[^\d.]/g, '');
    const end = parseFloat(raw) || 0;
    const suffix = target.replace(/[\d.]/g, '').trim();
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      let formatted;
      if (Number.isInteger(end)) {
        formatted = Math.round(current).toString();
      } else {
        formatted = current.toFixed(1);
      }
      setDisplay({ value: formatted, suffix });
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [shouldStart, target, duration]);

  return display;
}

// ─── Social Platform Icons ────────────────────────────────────────────────────
const YoutubeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGrad)" />
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.5" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
  </svg>
);

// ─── Stat Card ────────────────────────────────────────────────────────────────
const THEME = {
  primary: '#2bbfb0',
  primaryGlow: 'rgba(43,191,176,0.25)',
  primaryBorder: 'rgba(43,191,176,0.22)',
  cardBg: 'rgba(7, 16, 15, 0.88)',
  textMuted: 'rgba(255,255,255,0.45)',
};

interface StatCardProps {
  PlatformIcon: React.FC;
  number: string;
  label: string;
  description: string;
  link: string;
  delay?: number;
  isMobile?: boolean;
}

function StatCard({ PlatformIcon, number, label, description, link, delay = 0, isMobile }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const animatedNum = useCountUp(number, 1600, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as any}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        background: hovered
          ? `linear-gradient(145deg, rgba(43,191,176,0.1) 0%, rgba(7,16,15,0.95) 100%)`
          : THEME.cardBg,
        border: isMobile ? 'none' : `1px solid ${hovered ? THEME.primaryBorder : 'rgba(255,255,255,0.07)'}`,
        borderRadius: isMobile ? '14px' : '18px',
        padding: isMobile ? '20px 16px' : '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '10px' : '10px',
        backdropFilter: 'blur(16px)',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? 'translateY(-5px)' : 'translateY(0)') : 'translateY(28px)',
        transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 20px 50px ${THEME.primaryGlow}, 0 0 0 1px ${THEME.primaryBorder}` : 'none',
        flex: isMobile ? 'none' : '1 1 220px',
        minWidth: isMobile ? 'auto' : '200px',
        maxWidth: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top-left teal corner accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '100px', height: '100px',
        background: `radial-gradient(circle at 0% 0%, rgba(43,191,176,0.18) 0%, transparent 70%)`,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 1 : 0.6,
      }} />

      {/* Thin teal top-border accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '20px', right: '20px', height: '1px',
        background: `linear-gradient(90deg, transparent, ${THEME.primary}, transparent)`,
        opacity: hovered ? 0.7 : 0.25,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Arrow Indicator */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '12px' : '16px',
        right: isMobile ? '12px' : '16px',
        color: hovered ? THEME.primary : 'rgba(255,255,255,0.2)',
        transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
        transition: 'all 0.3s ease',
        zIndex: 2
      }}>
        <ArrowUpRight size={isMobile ? 18 : 22} />
      </div>

      {/* Icon + Number + Label row */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: isMobile ? '12px' : '10px', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PlatformIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span
              style={{
                fontSize: isMobile ? '24px' : 'clamp(24px, 2.5vw, 36px)',
                fontWeight: 900,
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
                background: `linear-gradient(135deg, #2bbfb0 0%, #7eeee7 60%, #2bbfb0 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 10px rgba(43,191,176,0.55))`,
                display: 'flex',
                alignItems: 'baseline'
              }}
            >
              {animatedNum.value}
              {animatedNum.suffix && (
                <sup style={{ 
                  fontSize: isMobile ? '16px' : '20px', 
                  marginLeft: '2px',
                  fontWeight: 800,
                  WebkitTextFillColor: THEME.primary,
                  transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease'
                }}>
                  {animatedNum.suffix}
                </sup>
              )}
            </span>
            {!isMobile && (
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: THEME.textMuted,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                opacity: 0.8
              }}>
                {label}
              </span>
            )}
          </div>
          {isMobile && (
            <span style={{
              fontSize: '9px',
              fontWeight: 700,
              color: THEME.textMuted,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              opacity: 0.8,
              marginTop: '-2px'
            }}>
              {label}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        fontSize: isMobile ? '10px' : '11.5px', 
        color: THEME.textMuted, 
        margin: isMobile ? 'auto 0 0 0' : '0', 
        paddingTop: isMobile ? '12px' : '2px',
        lineHeight: 1.65, 
        zIndex: 1,
        textAlign: isMobile ? 'center' : 'left',
        width: '100%',
        fontFamily: "'Inter', sans-serif"
      }}>
        {isMobile && description.includes(' — ') ? (
          <span style={{ display: 'block', color: '#ffffff', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
            {description.split(' — ')[0]}
          </span>
        ) : (
          description
        )}
      </p>
    </a>
  );
}

// ─── Contact Form ────────────────────────────────────────────────────────────
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScgvhuH2-R_2O9gDYGZQXVvH417yUiF26d1h0rBtbWuofRXJQ/formResponse'
const ENTRY = {
  name: 'entry.2049114130',
  phone: 'entry.900602923',
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, phone } = form
    if (!name || !phone) return

    setSubmitting(true)
    const body = new URLSearchParams({
      [ENTRY.name]: name,
      [ENTRY.phone]: phone,
    })

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
    } catch {
      // no-cors responses always throw a network error on redirect; treat as success
    }

    setSubmitted(true)
    setSubmitting(false)
    setForm({ name: '', phone: '' })
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead')
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-2 lg:mt-0 lg:max-w-none flex-1 flex">
        {/* Contact form */}
        <div className="fade-in rounded-2xl p-8 w-full flex flex-col justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="font-ui font-bold text-sm tracking-widest uppercase mb-6" style={{ color: '#F8F5EF' }}>
            LIMITED SEATS IN INDORE. JOIN THE WAITLIST
          </h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="font-ui font-bold text-lg" style={{ color: '#F8F5EF' }}>
                Waitlist Confirmed!
              </h3>
              <p className="font-ui text-sm leading-relaxed" style={{ color: 'rgba(248,245,239,0.7)' }}>
                Thanks for registering your interest for the Indore Offline batch.
              </p>
              <p className="font-ui text-sm" style={{ color: 'rgba(248,245,239,0.5)' }}>
                Our team will reach out to you soon with early-bird discounts and launch details.
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-ui mb-1" style={{ color: 'rgba(248,245,239,0.5)' }}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Rahul Sharma"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm font-ui outline-none focus:border-[#2bbfb0] transition"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#F8F5EF',
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-ui mb-1" style={{ color: 'rgba(248,245,239,0.5)' }}>Phone Number (WhatsApp)</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm font-ui outline-none focus:border-[#2bbfb0] transition"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#F8F5EF',
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || submitted}
              className="w-full py-3 mt-4 rounded-lg font-ui font-bold text-sm tracking-wide transition hover:opacity-90 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#2bbfb0', color: '#ffffff' }}
            >
              {submitted ? 'Joined ✓' : submitting ? 'Joining...' : 'Pre-book Your Seat'}
            </button>
          </form>
          )}
        </div>
    </div>
  )
}

// ─── Social Stats Grid Component ───────────────────────────────────────────────────────────
export default function SocialStats() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    {
      PlatformIcon: YoutubeIcon,
      number: '477K',
      label: 'Subscribers',
      description: 'EDITING EDITION — Learn real video editing.',
      link: 'https://youtube.com/@editingeditionyoutube?si=HtRwkFWWEpkMyeFy',
      delay: 0,
    },
    {
      PlatformIcon: InstagramIcon,
      number: '520K',
      label: 'Followers',
      description: 'HEY.EDITION — Daily tips to fuel your journey.',
      link: 'https://www.instagram.com/hey.edition_?igsh=Z2x3MXdvczFvaWlh',
      delay: 100,
    },
    {
      PlatformIcon: InstagramIcon,
      number: '1.7M',
      label: 'Followers',
      description: 'EDITING_EDITION — Global community of editors.',
      link: 'https://www.instagram.com/_editing_edition_?igsh=MjEwejB1OWhpcmQ1',
      delay: 200,
    },
    {
      PlatformIcon: YoutubeIcon,
      number: '10.8K',
      label: 'Subscribers',
      description: 'EDITION STUDIOS — Tutorials for editing mastery.',
      link: 'https://youtube.com/@editionstudiosofficial?si=BFojAUVQAb0G8Crm',
      delay: 300,
    },
  ];

  return (
    <section className="w-full bg-[#07100f] pt-8 md:pt-8 pb-8 md:pb-16 px-5 md:px-12">
      <div className="max-w-[1100px] mx-auto w-full">
        {/* Main Heading for the section */}
        <div className="fade-in w-full text-center mb-5 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#F8F5EF] leading-[1.1] tracking-tight">
            <span style={{ color: '#2bbfb0' }}>4+ Years</span> Experience in
            <span className="hidden md:inline"> Video</span>
            <span className="block mt-2 md:hidden">Video Editing</span>
            <span className="hidden md:block mt-2">Editing</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
          <div className="flex-1" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
            gap: isMobile ? '8px' : '24px',
            width: '100%',
          }}>
            {stats.map((s, i) => (
              <div key={i} className={`fade-in stagger-${i + 1}`}>
                <StatCard {...s} isMobile={isMobile} />
              </div>
            ))}
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScgvhuH2-R_2O9gDYGZQXVvH417yUiF26d1h0rBtbWuofRXJQ/formResponse'
const ENTRY = {
  name: 'entry.2049114130',
  phone: 'entry.900602923',
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.617a.75.75 0 0 0 .92.92l5.772-1.475A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.5-5.228-1.377l-.374-.217-3.883.993.993-3.883-.217-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

interface StepOneProps {
  onSubmit: () => void
  onDismiss: () => void
}

function StepOne({ onSubmit, onDismiss }: StepOneProps) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!contact.trim()) errs.contact = 'Contact number is required'
    else if (!/^[+\d\s\-()]{7,15}$/.test(contact.trim())) errs.contact = 'Enter a valid contact number'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    const body = new URLSearchParams({
      [ENTRY.name]: name.trim(),
      [ENTRY.phone]: contact.trim(),
    })
    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
    } catch {
      // no-cors always throws; treat as success
    }
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'CompleteRegistration')
    }
    setSubmitting(false)
    onSubmit()
  }

  return (
    <div
      className="relative"
      style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0F1720 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(43,191,176,0.25) 0%, transparent 60%)' }}
      />

      {/* Close button */}
      <button
        onClick={onDismiss}
        className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-ui font-semibold text-xs transition hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F8F5EF', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <X size={13} /> Close
      </button>

      <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-ui font-semibold mb-4"
          style={{ backgroundColor: 'rgba(43,191,176,0.15)', border: '1px solid rgba(43,191,176,0.4)', color: '#2bbfb0' }}
        >
          📍 Offline Class - Indore
        </div>

        <h2
          className="font-heading font-bold mb-2 leading-tight"
          style={{ fontSize: 'clamp(20px, 5vw, 26px)', color: '#F8F5EF' }}
        >
          Secure Your{' '}
          <span style={{ color: '#2bbfb0', fontStyle: 'italic' }}>Seat</span>
        </h2>
        <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(248,245,239,0.6)' }}>
          Limited seats available for our offline batch in Indore. Pre-book now to avoid missing out!
        </p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-ui font-semibold mb-1.5" style={{ color: 'rgba(248,245,239,0.7)' }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: '' })) }}
              placeholder="Your full name"
              className="w-full rounded-xl px-4 py-3 text-sm font-body outline-none transition"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.15)',
                color: '#F8F5EF',
              }}
            />
            {errors.name && <p className="text-xs mt-1 font-body" style={{ color: '#ef4444' }}>{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-ui font-semibold mb-1.5" style={{ color: 'rgba(248,245,239,0.7)' }}>
              Contact Number
            </label>
            <input
              type="tel"
              value={contact}
              onChange={(e) => { setContact(e.target.value); setErrors((p) => ({ ...p, contact: '' })) }}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl px-4 py-3 text-sm font-body outline-none transition"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: errors.contact ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.15)',
                color: '#F8F5EF',
              }}
            />
            {errors.contact && <p className="text-xs mt-1 font-body" style={{ color: '#ef4444' }}>{errors.contact}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full font-ui font-bold text-base py-3.5 px-8 rounded-xl transition hover:opacity-90 active:scale-95 mt-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            style={{ backgroundColor: '#2bbfb0', color: '#ffffff' }}
          >
            {submitting ? 'Submitting…' : 'Pre-book Your Seat'}
          </button>
        </form>

        <button
          onClick={onDismiss}
          className="block mx-auto mt-4 text-xs font-body cursor-pointer hover:opacity-80 transition"
          style={{ color: 'rgba(248,245,239,0.35)' }}
        >
          No thanks, I'll skip this
        </button>
      </div>
    </div>
  )
}

interface StepTwoProps {
  onDismiss: () => void
}

function StepTwo({ onDismiss }: StepTwoProps) {
  return (
    <div
      className="relative"
      style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0F1720 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(43,191,176,0.25) 0%, transparent 60%)' }}
      />

      {/* Close button */}
      <button
        onClick={onDismiss}
        className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-ui font-semibold text-xs transition hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F8F5EF', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <X size={13} /> Close
      </button>

      <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 text-center">
        {/* Success checkmark */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: 'rgba(43,191,176,0.15)', border: '1px solid rgba(43,191,176,0.4)' }}
        >
          <span style={{ fontSize: '28px' }}>✓</span>
        </div>

        <h2
          className="font-heading font-bold mb-2 leading-tight"
          style={{ fontSize: 'clamp(20px, 5vw, 26px)', color: '#F8F5EF' }}
        >
          You're{' '}
          <span style={{ color: '#2bbfb0', fontStyle: 'italic' }}>All Set!</span>
        </h2>
        <p className="font-body text-sm leading-relaxed mb-8 max-w-xs mx-auto" style={{ color: 'rgba(248,245,239,0.6)' }}>
          We will contact you soon. Join our communities to stay updated.
        </p>

        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/KIpyyqL801Z7S3Cf2nj3up"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition group-hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#25D366', color: '#fff', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
            >
              <WhatsAppIcon />
            </div>
            <span className="text-xs font-ui font-semibold" style={{ color: 'rgba(248,245,239,0.7)' }}>WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/ediskool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition group-hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#229ED9', color: '#fff', boxShadow: '0 4px 20px rgba(34,158,217,0.35)' }}
            >
              <TelegramIcon />
            </div>
            <span className="text-xs font-ui font-semibold" style={{ color: 'rgba(248,245,239,0.7)' }}>Telegram</span>
          </a>
        </div>

        <button
          onClick={onDismiss}
          className="block mx-auto mt-8 text-xs font-body cursor-pointer hover:opacity-80 transition"
          style={{ color: 'rgba(248,245,239,0.35)' }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default function OfflineExitBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [step, setStep] = useState(1)
  const hasShown = useRef(false)

  const dismiss = () => {
    setIsLeaving(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsLeaving(false)
      setStep(1)
    }, 300)
  }

  const handleFormSubmit = () => {
    setStep(2)
  }

  const show = () => {
    if (hasShown.current) return
    hasShown.current = true
    setIsVisible(true)
  }

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000
    const timer = setTimeout(show, randomDelay)
    const handleMouseLeave = (e: MouseEvent) => { if (e.clientY <= 10) show() }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  const content = step === 1
    ? <StepOne onSubmit={handleFormSubmit} onDismiss={dismiss} />
    : <StepTwo onDismiss={dismiss} />

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200]"
        style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        onClick={dismiss}
      />

      {/* Mobile: slides up from bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[201] md:hidden rounded-t-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(43,191,176,0.5)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(43,191,176,0.15)',
          transform: isLeaving ? 'translateY(100%)' : 'translateY(0)',
          opacity: isLeaving ? 0 : 1,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}
      >
        {content}
      </div>

      {/* Desktop: centered modal */}
      <div className="fixed inset-0 z-[201] hidden md:flex items-center justify-center p-4">
        <div
          className="w-full max-w-md rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(43,191,176,0.5)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(43,191,176,0.15)',
            transform: isLeaving ? 'scale(0.92)' : 'scale(1)',
            opacity: isLeaving ? 0 : 1,
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
        >
          {content}
        </div>
      </div>
    </>
  )
}

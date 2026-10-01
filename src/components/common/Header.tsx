import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      setIsScrolled(currentY > 10)

      if (!isMobileMenuOpen) {
        if (currentY > lastScrollY.current && currentY > 60) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Courses', href: '/courses' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Testimonials', href: '#trusted-by' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    if (location.pathname === '/') {
      const sectionId = href.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/' + href)
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '60px',
        backgroundColor: isScrolled ? 'rgba(11, 15, 20, 0.97)' : 'rgba(11, 15, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #0F1720',
        boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,0.45)' : 'none',
        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            if (location.pathname !== '/') {
              navigate('/')
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center cursor-pointer hover:opacity-90 transition flex-shrink-0"
        >
          <img src={logo} alt="Ediskool" className="h-10 md:h-12 object-contain" />
          <h1 className="sr-only">Ediskool</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-ui font-medium text-sm cursor-pointer transition-colors duration-150 flex items-center gap-1.5"
              style={{ color: '#F8F5EF' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#007C89' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#F8F5EF' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => window.open('https://learn.ediskool.com/login', '_blank')}
            className="font-ui font-bold text-sm py-2 px-4 rounded-lg border-2 transition cursor-pointer hover:opacity-90"
            style={{ borderColor: '#007C89', color: '#007C89', backgroundColor: 'transparent' }}
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/courses')}
            className="font-ui font-bold text-sm py-2 px-5 rounded-lg transition cursor-pointer hover:opacity-90"
            style={{ backgroundColor: '#007C89', color: '#F8F5EF' }}
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: '#F8F5EF' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden border-t"
          style={{ backgroundColor: 'rgba(11, 15, 20, 0.97)', borderColor: '#0F1720' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-ui font-medium text-sm py-2 cursor-pointer transition-colors duration-150 flex items-center justify-between w-full"
                style={{ color: '#F8F5EF', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#007C89' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#F8F5EF' }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <button
                onClick={() => { navigate('/courses'); setIsMobileMenuOpen(false); }}
                className="font-ui font-bold text-sm py-2.5 px-6 rounded-lg transition cursor-pointer hover:opacity-90 w-full"
                style={{ backgroundColor: '#007C89', color: '#F8F5EF' }}
              >
                Enroll Now
              </button>
              <button
                onClick={() => window.open('https://learn.ediskool.com/login', '_blank')}
                className="font-ui font-bold text-sm py-2.5 px-6 rounded-lg border-2 transition cursor-pointer hover:opacity-90 w-full"
                style={{ borderColor: '#007C89', color: '#007C89', backgroundColor: 'transparent' }}
              >
                Log In
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

import { useState, useEffect } from 'react'
import { navLinks, authorInfo } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-[#4CAF50]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group">
            <span className="text-3xl group-hover:animate-bounce-gentle">🦕</span>
            <span className={`font-fredoka text-xl transition-colors ${
              isScrolled ? 'text-[#2E7D32]' : 'text-[#2E7D32]'
            }`}>
              {authorInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-5 py-2 rounded-full text-sm font-nunito font-bold transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[#4CAF50] text-white shadow-lg'
                    : 'text-[#5D4037] hover:bg-[#E8F5E9] hover:text-[#2E7D32]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-3 px-6 py-2.5 bg-[#FF8F3D] text-white rounded-full font-bold text-sm hover:bg-[#E67A2E] transition-all shadow-lg shadow-[#FF8F3D]/30 font-nunito animate-bounce-gentle"
            >
              Get the Book! 📖
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#5D4037] hover:text-[#2E7D32] transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl mt-2 p-6 border-2 border-[#4CAF50]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-5 py-3 rounded-full font-nunito font-bold transition-colors text-center ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[#4CAF50] text-white'
                    : 'text-[#5D4037] hover:bg-[#E8F5E9]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block mt-3 px-5 py-3 bg-[#FF8F3D] text-white rounded-full text-center font-bold hover:bg-[#E67A2E] transition-colors font-nunito"
            >
              Get the Book! 📖
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
import { useState, useEffect } from 'react'
import { navLinks, authorInfo, book } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showBookModal, setShowBookModal] = useState(false)

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

  const handleGetBook = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setShowBookModal(true)
  }

  return (
    <>
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
              <button
                onClick={handleGetBook}
                className="ml-3 px-6 py-2.5 bg-[#FF8F3D] text-white rounded-full font-bold text-sm hover:bg-[#E67A2E] transition-all shadow-lg shadow-[#FF8F3D]/30 font-nunito animate-bounce-gentle"
              >
                Get the Book! 📖
              </button>
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
              <button
                onClick={handleGetBook}
                className="block mt-3 w-full px-5 py-3 bg-[#FF8F3D] text-white rounded-full text-center font-bold hover:bg-[#E67A2E] transition-colors font-nunito"
              >
                Get the Book! 📖
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Book Purchase Modal */}
      {showBookModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setShowBookModal(false)}>
          <div className="bg-white max-w-md w-full rounded-3xl shadow-2xl border-4 border-[#4CAF50] overflow-hidden animate-fade-up" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] p-6 text-center">
              <span className="text-5xl block mb-2">🦕📖🦖</span>
              <h3 className="text-2xl font-fredoka text-white">{book.fullTitle}</h3>
              <p className="text-white/80 text-sm font-nunito mt-1">{book.tagline}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Book Cover */}
              <div className="flex justify-center mb-6">
                <div className="w-40 rounded-2xl overflow-hidden shadow-lg border-2 border-[#4CAF50]/30">
                  <img 
                    src={book.coverImage} 
                    alt={book.fullTitle}
                    className="w-full h-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#5D4037] text-sm font-nunito leading-relaxed text-center mb-6">
                {book.description}
              </p>

              {/* Purchase Links */}
              <div className="space-y-3">
                <p className="text-center text-xs font-nunito font-bold text-[#2E7D32] uppercase tracking-wider">
                  Available at:
                </p>
                {book.purchaseLinks && book.purchaseLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#FF8F3D] text-white rounded-full font-nunito font-bold text-base hover:bg-[#E67A2E] transition-all shadow-lg shadow-[#FF8F3D]/20 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                    </svg>
                    Buy on {link.name}
                  </a>
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowBookModal(false)}
                className="w-full mt-4 px-6 py-3 border-2 border-[#4CAF50]/30 text-[#2E7D32] rounded-full font-nunito font-bold hover:bg-[#E8F5E9] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
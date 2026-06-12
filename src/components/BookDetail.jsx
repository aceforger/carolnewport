import { useState } from 'react'
import { book } from '../data'

export default function BookDetail() {
  const [showBack, setShowBack] = useState(false)

  return (
    <section id="book" className="py-24 bg-gradient-to-b from-[#E8F5E9] to-white relative overflow-hidden">
      {/* Floating leaves */}
      <div className="absolute top-10 left-10 text-5xl opacity-20 animate-leaf">🌿</div>
      <div className="absolute top-40 right-10 text-4xl opacity-15 animate-leaf-delayed">🍃</div>
      <div className="absolute bottom-20 left-1/4 text-6xl opacity-10 animate-leaf">🌱</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🦕📖🦖</span>
          <h2 className="text-5xl md:text-6xl font-fredoka text-[#2E7D32] mb-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
            {book.fullTitle}
          </h2>
          <p className="text-xl font-bubblegum text-[#FF8F3D]">{book.tagline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Book Cover with flip */}
          <div className="relative mx-auto max-w-sm">
            <div 
              className="relative cursor-pointer"
              onClick={() => setShowBack(!showBack)}
              onMouseEnter={() => setShowBack(true)}
              onMouseLeave={() => setShowBack(false)}
            >
              <div className={`relative transition-all duration-700 ${showBack ? 'scale-105' : ''}`}>
                <div className="bg-white rounded-3xl shadow-2xl p-3 border-4 border-[#4CAF50]">
                  <div className="aspect-[3/4] bg-[#E8F5E9] rounded-2xl overflow-hidden">
                    <img
                      src={showBack ? book.backCoverImage : book.coverImage}
                      alt={showBack ? `${book.fullTitle} - Back Cover` : book.fullTitle}
                      className="w-full h-full object-cover transition-all duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-b', 'from-[#87CEEB]', 'to-[#E8F5E9]')
                        e.target.parentElement.innerHTML = `
                          <div class="text-center p-8">
                            <div class="text-6xl mb-4">🦕</div>
                            <p class="text-2xl font-fredoka text-[#2E7D32]">${showBack ? 'Back Cover' : book.title}</p>
                          </div>
                        `
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Flip instruction */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-[#FF8F3D]">
                <span className="text-sm font-nunito font-bold text-[#FF8F3D] flex items-center gap-1">
                  Click to see {showBack ? 'front' : 'back'} cover!
                </span>
              </div>
            </div>
          </div>

          {/* Book Description & Purchase */}
          <div className="space-y-6">
            {/* Status Badge */}
            {book.status && (
              <div className="inline-flex items-center gap-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-nunito font-bold text-[#2E7D32]">{book.statusText}</span>
              </div>
            )}

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#4CAF50]/30">
              <h3 className="text-2xl font-fredoka text-[#2E7D32] mb-4 flex items-center gap-2">
                <span>📖</span> About the Story
              </h3>
              <p className="text-[#5D4037] text-lg leading-relaxed font-nunito">
                {book.description}
              </p>
            </div>

            {/* Theme Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#E8F5E9] rounded-2xl p-4 text-center border-2 border-[#4CAF50]/20">
                <span className="text-3xl block mb-2">🦕</span>
                <p className="text-sm font-nunito font-bold text-[#2E7D32]">Dinosaurs</p>
              </div>
              <div className="bg-[#FFF3E0] rounded-2xl p-4 text-center border-2 border-[#FF8F3D]/20">
                <span className="text-3xl block mb-2">❤️</span>
                <p className="text-sm font-nunito font-bold text-[#FF8F3D]">Family</p>
              </div>
              <div className="bg-[#E1F5FE] rounded-2xl p-4 text-center border-2 border-[#4FC3F7]/20">
                <span className="text-3xl block mb-2">🌟</span>
                <p className="text-sm font-nunito font-bold text-[#0288D1]">Adventure</p>
              </div>
            </div>

            {/* Purchase Links */}
            {book.purchaseLinks && book.purchaseLinks.length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-[#FF8F3D]/30">
                <h3 className="text-lg font-fredoka text-[#FF8F3D] mb-4 flex items-center gap-2">
                  <span>🛒</span> Get Your Copy
                </h3>
                <div className="flex flex-wrap gap-3">
                  {book.purchaseLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF8F3D] text-white rounded-full font-bold text-base hover:bg-[#E67A2E] transition-all shadow-lg shadow-[#FF8F3D]/30 font-nunito transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                      </svg>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
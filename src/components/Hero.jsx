import { authorInfo, book } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-[#87CEEB] via-[#B8E6F0] to-[#E8F5E9] relative overflow-hidden">
      {/* Sky clouds */}
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-leaf">☁️</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-leaf-delayed">☁️</div>
      <div className="absolute top-40 left-1/3 text-4xl opacity-25 animate-leaf">☁️</div>

      {/* Jungle leaves */}
      <div className="absolute top-0 left-0 text-7xl opacity-40 -rotate-12">🌿</div>
      <div className="absolute top-10 right-0 text-6xl opacity-30 rotate-12">🌱</div>
      <div className="absolute bottom-0 left-5 text-8xl opacity-30">🌴</div>
      <div className="absolute bottom-10 right-5 text-7xl opacity-25">🌳</div>

      {/* Walking dinosaurs */}
      <div className="absolute bottom-20 text-5xl animate-walk">🦕</div>
      <div className="absolute bottom-32 text-4xl animate-walk-delayed">🦖</div>

      {/* Footprints */}
      <div className="absolute bottom-8 left-20 text-2xl opacity-20">👣</div>
      <div className="absolute bottom-8 left-40 text-2xl opacity-15">👣</div>
      <div className="absolute bottom-8 left-60 text-2xl opacity-20">👣</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
              <span className="text-[#FF8F3D] font-nunito font-bold text-sm">🦕 New Children's Book!</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-fredoka text-[#2E7D32] mb-4 leading-tight drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
              {book.title}
            </h1>
            
            <p className="text-2xl md:text-3xl font-bubblegum text-[#FF8F3D] mb-6">
              {book.subtitle}
            </p>

            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="text-2xl">🦖</span>
              <span className="text-2xl">❤️</span>
              <span className="text-2xl">🦕</span>
            </div>

            <p className="text-lg text-[#5D4037] mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-nunito font-semibold bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#4CAF50]/30">
              {book.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-4 bg-[#4CAF50] text-white rounded-full font-bold text-lg hover:bg-[#388E3C] transition-all shadow-lg shadow-[#4CAF50]/30 font-nunito transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>🕮</span> Explore the Book
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleScroll(e, '#reviews')}
                className="px-8 py-4 bg-[#FF8F3D] text-white rounded-full font-bold text-lg hover:bg-[#E67A2E] transition-all shadow-lg shadow-[#FF8F3D]/30 font-nunito transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>⭐</span> Read Reviews
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative mx-auto max-w-sm">
            {/* Jungle frame */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-3 border-4 border-[#4CAF50] transform rotate-1 hover:rotate-0 transition-transform">
              {/* Dino decorations */}
              <div className="absolute -top-6 -left-6 text-5xl animate-bounce-gentle">🦕</div>
              <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>🦖</div>
              <div className="absolute -top-4 -right-4 text-3xl animate-leaf">🌿</div>
              
              <div className="aspect-[3/4] bg-[#E8F5E9] rounded-2xl overflow-hidden">
                <img
                  src="/images/front.jpg"
                  alt={book.fullTitle}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-b', 'from-[#87CEEB]', 'to-[#E8F5E9]')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-8xl mb-4">🦕</div>
                        <p class="text-3xl font-fredoka text-[#2E7D32]">${book.title}</p>
                        <p class="text-xl font-bubblegum text-[#FF8F3D] mt-2">${book.subtitle}</p>
                        <p class="text-sm text-[#5D4037] mt-4 font-nunito">Cover coming soon!</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grass */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full">
          <path d="M0 60L80 40L160 55L240 30L320 50L400 25L480 45L560 20L640 40L720 15L800 35L880 20L960 40L1040 25L1120 45L1200 30L1280 50L1360 35L1440 40V60H0Z" fill="#4CAF50" opacity="0.6"/>
          <path d="M0 60L100 45L200 55L300 38L400 50L500 35L600 48L700 32L800 45L900 35L1000 48L1100 38L1200 50L1300 42L1440 48V60H0Z" fill="#388E3C" opacity="0.5"/>
        </svg>
      </div>
    </section>
  )
}
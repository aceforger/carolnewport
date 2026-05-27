import { contactInfo, authorInfo, book } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#FFF8E1] to-[#E8F5E9] relative overflow-hidden">
      {/* Jungle decorations */}
      <div className="absolute top-0 left-0 text-7xl opacity-30">🌴</div>
      <div className="absolute bottom-0 right-0 text-6xl opacity-25">🌳</div>
      <div className="absolute top-20 right-10 text-4xl opacity-20 animate-leaf">🌿</div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-5xl block mb-6">📬🦕</span>
        <h2 className="text-5xl font-fredoka text-[#2E7D32] mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
          Get the Book!
        </h2>
        <p className="text-lg text-[#5D4037] mb-10 max-w-md mx-auto font-nunito">
          Contact {authorInfo.firstName} to order your copy of {book.title}! Perfect for little dinosaur lovers!
        </p>

        <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-[#FF8F3D] inline-block">
          <div className="flex justify-center gap-2 mb-6 text-4xl">
            <span className="animate-bounce-gentle">🦕</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>📖</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: '1s' }}>🦖</span>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#4CAF50] text-white rounded-full font-bold text-xl hover:bg-[#388E3C] transition-all shadow-lg shadow-[#4CAF50]/30 font-nunito transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}
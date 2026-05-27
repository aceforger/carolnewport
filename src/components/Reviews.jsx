import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-[#FFF8E1] relative overflow-hidden">
      {/* Decorative dinos */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-leaf">🦖</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-15 animate-leaf-delayed">🦕</div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">⭐📝⭐</span>
          <h2 className="text-5xl font-fredoka text-[#2E7D32] mb-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
            What Readers Say
          </h2>
          <p className="text-lg font-nunito text-[#5D4037]">Parents and kids love this book!</p>
        </div>

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#4CAF50]/20 hover:border-[#FF8F3D]/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
                <span className="ml-2 font-fredoka text-[#FF8F3D] text-lg">{review.headline}</span>
              </div>

              <p className="text-[#5D4037] text-lg leading-relaxed mb-6 font-nunito italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 border-t-2 border-[#E8F5E9] pt-4">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-fredoka text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-nunito font-bold text-[#2E7D32]">{review.name}</p>
                  <div className="flex items-center gap-2 text-xs text-[#5D4037]/60 font-nunito">
                    <span>{review.date}</span>
                    <span>·</span>
                    <span>{review.format}</span>
                    {review.verified && (
                      <>
                        <span>·</span>
                        <span className="text-green-600 font-bold">✓ Verified Purchase</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#4CAF50]/3 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8F3D]/3 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 left-10 text-5xl opacity-10 animate-leaf">🌿</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-leaf" style={{ animationDelay: '1s' }}>🍃</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-4xl block mb-4">🌸</span>
          <div className="inline-flex items-center gap-2 border-b-2 border-[#4CAF50]/30 pb-2 mb-6">
            <span className="text-xs font-nunito font-bold text-[#4CAF50] tracking-[0.2em] uppercase">The Author</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-fredoka text-[#2E7D32] mb-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
            {authorInfo.name}
          </h2>
          <p className="text-lg text-[#5D4037]/60 font-nunito max-w-xl mx-auto">
            {authorInfo.passion}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* LEFT - Profile Image */}
          <div className="md:col-span-1 animate-fade-up">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#4CAF50]/20 rounded-2xl"></div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FF8F3D]/20 rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/profile.png" 
                  alt={authorInfo.name}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('aspect-[3/4]', 'bg-gradient-to-b', 'from-[#E8F5E9]', 'to-[#FFF8E1]', 'flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-7xl">🌸</div>
                        <div class="text-3xl font-fredoka text-[#2E7D32] mt-3">CN</div>
                      </div>
                    `
                  }}
                />
              </div>

              {/* Name Card */}
              <div className="absolute -bottom-15 left-4 right-4 bg-white shadow-lg rounded-xl p-4 text-center border-2 border-[#FF8F3D]/20">
                <p className="font-fredoka text-lg text-[#2E7D32]">{authorInfo.name}</p>
                <p className="text-[10px] font-nunito font-bold text-[#FF8F3D] tracking-[0.2em] uppercase mt-1">Children's Author</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="md:col-span-2 space-y-6 animate-fade-up-delayed">
            
            {/* Bio Card 1 - Her Life */}
            <div className="bg-[#E8F5E9] rounded-2xl p-6 md:p-8 border-2 border-[#4CAF50]/10 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <span className="text-xs font-nunito font-bold text-[#4CAF50] tracking-wider uppercase">A Life Dedicated to Children</span>
              </div>
              <p className="text-[#5D4037]/60 leading-relaxed font-nunito">
                For more than 40 years, Carol Newport has dedicated her life to nurturing, teaching, and inspiring children. As a preschool and kindergarten teacher, daycare owner for over 25 years, and proud mother of seven children, she has spent decades helping young minds grow through learning, imagination, and storytelling.
              </p>
            </div>

            {/* Bio Card 2 - Her Passion */}
            <div className="bg-[#FFF3E0] rounded-2xl p-6 md:p-8 border-2 border-[#FF8F3D]/10 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF8F3D]/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📖</span>
                </div>
                <span className="text-xs font-nunito font-bold text-[#FF8F3D] tracking-wider uppercase">A Love for Storytelling</span>
              </div>
              <p className="text-[#5D4037]/60 leading-relaxed font-nunito">
                Children have always been at the heart of her life. Throughout her career, she has shared her love of reading by visiting schools, reading stories to children, and creating warm, engaging environments where young learners could thrive. Her home remains filled with children's books, reflecting a lifelong passion for literature and the joy it brings to young readers.
              </p>
            </div>

            {/* Bio Card 3 - The Story Behind the Book */}
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#FFF3E0] rounded-2xl p-6 md:p-8 border-2 border-[#4CAF50]/20 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                  <span className="text-xl">🦕</span>
                </div>
                <span className="text-xs font-nunito font-bold text-[#2E7D32] tracking-wider uppercase">The Story Behind Dylan and Dexter</span>
              </div>
              <div className="text-[#5D4037]/60 leading-relaxed font-nunito space-y-4">
                <p>
                  After her grandson's passing, she experienced a vivid dream in which he came to her and asked, "Grandma, write a storybook about me loving dinosaurs." Moved by this experience and wanting to honor his memory, she transformed that dream into a heartfelt story celebrating curiosity, imagination, and a child's wonder for the world around them.
                </p>
                <p>
                  What makes this book especially meaningful is that his twin brother, who continues to carry their shared memories in his heart, helped bring the story to life by coloring the dinosaur illustrations throughout the book. Every page is a tribute to the special bond the brothers shared and to a little boy whose love for dinosaurs brought endless joy to those around him.
                </p>
                <p className="font-nunito font-bold text-[#2E7D32] italic">
                  Through this story, his spirit lives on—preserved in imagination, remembered with love, and celebrated by the family who cherishes him every day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
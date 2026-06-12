import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#2E7D32] text-white">
      {/* Launch Portal */}
      <div className="bg-[#1B5E20] border-b border-[#4CAF50]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-fredoka text-white mb-1">Ready to Publish? 🚀</p>
              <p className="text-[#A5D6A7] text-sm font-nunito">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-[#1B5E20] font-bold text-lg rounded-full hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-400 transition-all shadow-lg overflow-hidden font-nunito"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Launch & Go-Live Portal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🦕</span>
              <p className="text-xl font-fredoka">{authorInfo.name}</p>
            </div>
            <p className="text-[#A5D6A7] text-sm font-nunito">
              Children's book author creating magical dinosaur adventures for young readers!
            </p>
          </div>

          <div>
            <p className="font-fredoka text-lg mb-4">Quick Links 🦖</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#A5D6A7] hover:text-[#FF8F3D] transition-colors text-sm font-nunito flex items-center gap-2"
                  >
                    <span>👣</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-fredoka text-lg mb-4">Contact 📧</p>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-[#A5D6A7] hover:text-[#FF8F3D] transition-colors text-sm font-nunito"
            >
              {authorInfo.email}
            </a>
            <a
              href={`tel:${authorInfo.phone}`}
              className="block mt-2 text-[#A5D6A7] hover:text-[#FF8F3D] transition-colors text-sm font-nunito"
            > 
              {authorInfo.phone}
            </a>
          </div>
        </div>

        <div className="border-t border-[#4CAF50]/30 mt-8 pt-8 text-center">
          <p className="text-[#A5D6A7] text-sm font-nunito">
            &copy; {new Date().getFullYear()} {authorInfo.name} | Dylan and Dexter Twin Dinosaurs 🦕🦖
          </p>
        </div>
      </div>
    </footer>
  )
}
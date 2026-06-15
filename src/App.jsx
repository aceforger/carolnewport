import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookDetail from './components/BookDetail'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-[#87CEEB]">
      <Navbar />
      <Hero />
      <About />
      <BookDetail />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
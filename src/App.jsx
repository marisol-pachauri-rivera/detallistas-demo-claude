import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Highlight from './components/Highlight'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface font-body text-text antialiased">
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <Products />
          <Highlight />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Ethos from './components/Ethos'
import DailyWear from './components/DailyWear'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(236,72,153,0.15),transparent_40%),_radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.15),transparent_40%),_radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.15),transparent_40%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Collections />
        <Ethos />
        <DailyWear />

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/70">© {new Date().getFullYear()} AKAZA. All rights reserved.</p>
              <div className="flex items-center gap-6 text-white/70">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

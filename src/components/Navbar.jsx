import { useState } from 'react'
import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 ring-2 ring-white/30 shadow-lg" />
              <span className="text-white font-extrabold tracking-widest text-xl">AKAZA</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#collections" className="text-white/80 hover:text-white transition">Collections</a>
              <a href="#ethos" className="text-white/80 hover:text-white transition">Our Ethos</a>
              <a href="#daily" className="text-white/80 hover:text-white transition">Daily Wear</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 transition text-white/90"><Search size={18} /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 transition text-white/90"><ShoppingBag size={18} /></button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white/90">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="flex flex-col gap-2">
                <a onClick={() => setOpen(false)} href="#collections" className="text-white/80 hover:text-white transition py-2">Collections</a>
                <a onClick={() => setOpen(false)} href="#ethos" className="text-white/80 hover:text-white transition py-2">Our Ethos</a>
                <a onClick={() => setOpen(false)} href="#daily" className="text-white/80 hover:text-white transition py-2">Daily Wear</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

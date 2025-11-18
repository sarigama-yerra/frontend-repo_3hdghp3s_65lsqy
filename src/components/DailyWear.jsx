export default function DailyWear() {
  return (
    <section id="daily" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Anime as a lifestyle</h2>
              <p className="mt-3 text-white/80">From coffee runs to con weekends—one wardrobe. Build a capsule of pieces that pair with anything and whisper your favorite stories.</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• Breathable tees that layer cleanly under blazers</li>
                <li>• Hoodies with hidden interior prints</li>
                <li>• Neutral palettes that match your rotation</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3">Start with tees</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-semibold px-5 py-3 border border-white/20">Lookbook</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" alt="Daily 1" className="h-56 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1579892239804-00e520393fb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMDJ8ZW58MHwwfHx8MTc2MzQ4NzY3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Daily 2" className="h-56 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1572088688405-2e51af237649?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMDN8ZW58MHwwfHx8MTc2MzQ4NzY3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Daily 3" className="h-56 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1579892239804-00e520393fb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMDR8ZW58MHwwfHx8MTc2MzQ4NzY3OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Daily 4" className="h-56 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

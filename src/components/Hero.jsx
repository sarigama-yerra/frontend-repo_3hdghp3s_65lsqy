import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute top-10 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-rose-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight text-white"
            >
              Anime, every day.
              <span className="block bg-gradient-to-r from-pink-400 via-rose-300 to-purple-300 bg-clip-text text-transparent">Wear your world.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-white/80 max-w-xl"
            >
              AKAZA makes anime-inspired apparel you can live in—from sunrise commutes to midnight arcs. Premium fabrics, subtle prints, everyday fits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#collections" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(255,255,255,.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,.25)] transition">Shop collections</a>
              <a href="#ethos" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-semibold px-6 py-3 border border-white/20 hover:bg-white/15 transition">Our ethos</a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-white/80">
              <div className="flex -space-x-3">
                <img alt="a" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" />
                <img alt="b" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=200" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" />
                <img alt="c" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" />
              </div>
              <p className="text-sm">Trusted by 25k+ fans. Free shipping over $75.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200"
                alt="Model wearing AKAZA tee"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white/90 text-sm">Core Tee • Breathable 240GSM</span>
                <span className="text-white font-semibold">$39</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

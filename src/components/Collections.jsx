import { motion } from 'framer-motion'

const items = [
  {
    title: 'Subtle Saga',
    desc: 'Minimal graphics, clean lines. Easter eggs only fans will catch.',
    image: 'https://images.unsplash.com/photo-1603145066679-c172b5914220?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdWJ0bGUlMjBTYWdhfGVufDB8MHx8fDE3NjM0ODc2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Street Arc',
    desc: 'Oversized fits, bold back prints, city energy.',
    image: 'https://images.unsplash.com/photo-1551357176-67341c5b414f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJlZXQlMjBBcmN8ZW58MHwwfHx8MTc2MzQ4NzY3Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Dojo Essentials',
    desc: 'Daily-ready hoodies, joggers, and tees in muted tones.',
    image: 'https://images.unsplash.com/photo-1520975922326-35a4f76d8aa3?q=80&w=1200'
  }
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Collections</h2>
          <a href="#" className="text-white/80 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img src={it.image} alt={it.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{it.title}</h3>
                <p className="text-white/80 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

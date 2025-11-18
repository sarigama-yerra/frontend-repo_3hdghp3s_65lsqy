export default function Ethos() {
  return (
    <section id="ethos" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for daily arcs</h2>
            <p className="mt-4 text-white/80 max-w-2xl">
              We believe anime shouldn’t be boxed into conventions or closets. AKAZA blends subtle storytelling with timeless streetwear silhouettes so you can rep your fandom every day—at work, on campus, and everywhere in between.
            </p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <dt className="font-semibold text-white">Premium fabrics</dt>
                <dd className="text-white/80 text-sm mt-1">Combed cotton, 240–320 GSM, pre-shrunk. Built to last arcs.</dd>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <dt className="font-semibold text-white">Subtle by design</dt>
                <dd className="text-white/80 text-sm mt-1">Tone-on-tone embroidery, minimal marks, hidden labels.</dd>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <dt className="font-semibold text-white">Ethical production</dt>
                <dd className="text-white/80 text-sm mt-1">Small-batch runs, traceable supply, fair conditions.</dd>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <dt className="font-semibold text-white">Made to move</dt>
                <dd className="text-white/80 text-sm mt-1">Relaxed fits with structure—gym, desk, and weekend ready.</dd>
              </div>
            </dl>
          </div>

          <div className="lg:pl-8">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200" alt="Fabric" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

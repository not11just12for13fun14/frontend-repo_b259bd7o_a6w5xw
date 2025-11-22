import { Flame, BadgePercent, Package2, Star } from 'lucide-react'

const products = [
  { id: 1, name: 'Booster Pack — Apex', price: 4.99, badge: 'Deal of the Day', highlight: true },
  { id: 2, name: 'Starter Deck — Tundra', price: 14.99, badge: 'Seasonal', highlight: false },
  { id: 3, name: 'Collector’s Pack — Mythic', price: 19.99, badge: 'Limited', highlight: false },
  { id: 4, name: 'Biome Bundle — Oceanic', price: 29.99, badge: 'New', highlight: false },
]

export default function Shop() {
  return (
    <section id="shop" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Shop</h2>
            <p className="text-white/70 mt-2">Streamlined tiles with seasonal badges and smart recommendations.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-yellow-300 hover:text-yellow-200">View all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className={`relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition ${p.highlight ? 'ring-2 ring-yellow-400/60' : ''}`}>
              <div className="absolute -top-2 left-4">
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-yellow-400 text-black font-semibold shadow">{p.badge}</span>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-black/40 border border-white/10 grid place-items-center text-white/60 mb-4">
                <Package2 className="w-8 h-8" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <p className="text-white/70 text-sm">Includes rare foil chance</p>
                </div>
                <div className="text-yellow-300 font-bold">${p.price.toFixed(2)}</div>
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-yellow-400 text-black font-semibold px-4 py-2 hover:brightness-95 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-transparent p-6 text-yellow-200">
          <div className="flex items-center gap-3">
            <BadgePercent className="w-5 h-5" />
            <p className="text-sm">Pro tip: Combine a Starter Deck with a Booster Pack to unlock a bonus cosmetic card back.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

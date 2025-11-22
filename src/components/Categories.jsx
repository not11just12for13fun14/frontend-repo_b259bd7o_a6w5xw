import { motion } from 'framer-motion'
import { Feather, MountainSnow, Anchor, Trees, Settings, Compass } from 'lucide-react'

const categories = [
  {
    id: 'animals',
    title: 'Animals',
    subtitle: 'Power. Speed. Rarity.',
    gradient: 'from-yellow-400/20 to-yellow-400/0',
    icon: Feather,
    textures: 'bg-[radial-gradient(circle_at_20%_10%,rgba(255,216,0,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,216,0,0.12),transparent_40%)]',
  },
  {
    id: 'biomes',
    title: 'Biomes',
    subtitle: 'Tundras to Trenches',
    gradient: 'from-cyan-400/20 to-yellow-400/0',
    icon: MountainSnow,
    textures: 'bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,216,0,0.12),transparent_40%)]',
  },
  {
    id: 'items',
    title: 'Items',
    subtitle: 'Boosts & Artifacts',
    gradient: 'from-fuchsia-400/20 to-yellow-400/0',
    icon: Settings,
    textures: 'bg-[radial-gradient(circle_at_20%_10%,rgba(232,121,249,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,216,0,0.12),transparent_40%)]',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Explore Card Types</h2>
            <p className="text-white/70 mt-2">A clean, modular grid showcasing the core pillars of the Biome universe.</p>
          </div>
          <a href="#shop" className="hidden sm:inline-flex text-yellow-300 hover:text-yellow-200">View Shop →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href={`#${cat.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.gradient} ${cat.textures} p-6`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_circle_at_var(--x,_0px)_var(--y,_0px),rgba(255,216,0,0.15),transparent_40%)]" />
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-yellow-300/90 text-sm mb-1">{cat.subtitle}</div>
                  <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
                </div>
                <cat.icon className="w-10 h-10 text-yellow-300/80" />
              </div>

              <div className="aspect-[16/10] rounded-xl bg-black/40 border border-white/10 grid place-items-center text-white/60">
                <span>Hover to preview</span>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                <span>120+ cards</span>
                <span className="text-yellow-300">See more →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

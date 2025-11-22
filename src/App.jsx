import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Shop from './components/Shop'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] selection:bg-yellow-300/40 selection:text-yellow-950">
      <Navbar />

      <main className="relative pt-16">
        <Hero />

        <section id="animals" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Categories />
              </div>
              <aside className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,216,0,0.08),rgba(255,216,0,0.02))] p-6">
                  <h3 className="text-white font-semibold mb-2">Card Reveal</h3>
                  <p className="text-white/70 text-sm">Hover to flip and reveal attributes.</p>
                  <div className="mt-4 aspect-[4/5] rounded-xl bg-black/40 border border-white/10 overflow-hidden group">
                    <div className="h-full w-full bg-gradient-to-br from-yellow-400/20 to-transparent" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold mb-2">Latest Drops</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>Mythic Shark — 1 in 500</li>
                    <li>Urban Fox — Night Variant</li>
                    <li>Glacier Titan — Limited Foil</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="biomes" className="relative py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Biomes</h2>
              <p className="text-white/70">From frozen tundras to deep-sea trenches and bustling cityscapes.</p>
            </div>
          </div>
        </section>

        <section id="items" className="relative py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Items</h2>
              <p className="text-white/70">Boosts and artifacts to power up your deck.</p>
            </div>
          </div>
        </section>

        <Shop />

        <footer className="relative py-12 border-t border-white/10 mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Biome — Built for discovery. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

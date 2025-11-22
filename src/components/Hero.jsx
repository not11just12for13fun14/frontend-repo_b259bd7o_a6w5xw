import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-yellow-300 text-xs mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
              New Season • Apex Awakened
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_2px_24px_rgba(255,216,0,0.25)]">
              Discover the world’s most powerful, fastest, and rarest animals
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Build your ultimate deck from frozen tundras to deep-sea trenches and bustling cityscapes. Trade, collect, and battle with cinematic flair.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-yellow-400 text-black font-semibold px-5 py-3 shadow-[0_8px_30px_rgba(255,216,0,0.35)] hover:shadow-[0_8px_40px_rgba(255,216,0,0.55)] transition">
                Buy Booster Packs
              </a>
              <a href="#learn" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition">
                Learn Gameplay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

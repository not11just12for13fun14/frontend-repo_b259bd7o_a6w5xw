import { Menu, ShoppingCart, User, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-yellow-400/30 rounded-full" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 grid place-items-center text-black">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          <span className="text-white font-bold tracking-wide text-lg">Biome</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#animals" className="text-white/80 hover:text-yellow-400 transition">Animals</a>
          <a href="#biomes" className="text-white/80 hover:text-yellow-400 transition">Biomes</a>
          <a href="#items" className="text-white/80 hover:text-yellow-400 transition">Items</a>
          <a href="#shop" className="text-white/80 hover:text-yellow-400 transition">Shop</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
            <User className="w-4 h-4" />
            <span>Account</span>
          </button>
          <button className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-400 text-black font-semibold hover:brightness-95 transition">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 text-xs bg-white text-black px-1.5 py-0.5 rounded">2</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}

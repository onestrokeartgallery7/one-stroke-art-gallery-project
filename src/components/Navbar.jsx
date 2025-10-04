import ThemeToggle from './ThemeToggle'

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="w-full py-4">
      <div className="app-container flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold">AS</div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-300">Art Space</div>
              <div className="app-title">ArtSpace Gallery</div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search artworks or categories..."
            className="w-full rounded-full px-4 py-2 border border-transparent bg-white dark:bg-[#0b1220] shadow-sm focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

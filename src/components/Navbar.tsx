import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md dark:bg-gray-900/95' 
          : 'bg-black/20 backdrop-blur-sm dark:bg-black/40'
      }`}></div>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/fevicon.jpg" alt="One Stroke" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className={`text-xs transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300' 
                  : 'text-white/90 dark:text-white/80'
              }`}>Welcome to</div>
              <div className={`app-title font-semibold transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white dark:text-white'
              }`}>One Stroke Art Gallery</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Gallery', 'About Us', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`nav-link-new text-sm transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-100 hover:text-[rgb(239,151,33)] dark:hover:text-[rgb(239,151,33)]'
                  : 'text-white hover:text-[rgb(239,151,33)] dark:text-white/90 dark:hover:text-[rgb(239,151,33)]'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

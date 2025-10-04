import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

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
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}></div>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-2.5 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-[rgb(239,151,33)]/20 bg-white/10 backdrop-blur-sm">
              <img src="/fevicon.jpg" alt="One Stroke" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <div className={`text-[10px] font-medium tracking-wide transition-all duration-500 ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-400' 
                  : 'text-gray-200'
              }`}>Welcome to</div>
              <div className={`app-title text-sm font-bold tracking-wide transition-all duration-500 ${
                scrolled 
                  ? 'text-gray-800 dark:text-white' 
                  : 'text-white'
              }`}>One Stroke Art Gallery</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'About Us', href: '#about-us' },
            { label: 'About Artist', href: '#about-artist' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link-new text-sm font-medium tracking-wide transition-all duration-500 ${
                scrolled
                  ? 'text-gray-800 dark:text-gray-200 hover:text-[rgb(239,151,33)] dark:hover:text-[rgb(239,151,33)]'
                  : 'text-gray-100 hover:text-[rgb(239,151,33)]'
              } relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[rgb(239,151,33)] after:transition-all after:duration-300 ${
                activeSection === item.href.replace('#', '') 
                  ? 'text-[rgb(239,151,33)] after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <div className={`transition-all duration-500 p-2 rounded-lg ${
            scrolled 
              ? 'bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-sm' 
              : 'bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm'
          }`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

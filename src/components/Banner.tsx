import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bannerImages = [
  '/banner-2.jpg',
  '/bannar.jpg',
  '/drawing-33.jpg',
  '/drawing -1.jpg',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden mb-12 pt-16">
      {/* Banner Images */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }
            }}
            exit={{ 
              opacity: 0,
              x: -300,
              transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.img 
                src={bannerImages[currentIndex]} 
                alt={`One Stroke Art Gallery Banner ${currentIndex + 1}`} 
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ 
                  scale: 1,
                  transition: {
                    duration: 1.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 0.8 }
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={previousSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 transform group-hover:scale-110 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 transform group-hover:scale-110 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[rgb(239,151,33)] w-6'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Welcome to <br className="hidden sm:block" />
            <span className="text-[rgb(239,151,33)]">One Stroke</span> Art Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-100 max-w-2xl font-medium leading-relaxed"
          >
            Discover the beauty of art through unique perspectives and creative expressions. 
            Each piece tells a story, each stroke creates a memory.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
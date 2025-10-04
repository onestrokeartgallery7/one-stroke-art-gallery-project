import React from 'react'
import { motion } from 'framer-motion'

export default function Banner() {
  return (
    <div id="home" className="relative h-[80vh] overflow-hidden mb-12 pt-16">
      {/* Banner Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img 
          src="/banner-2.jpg" 
          alt="One Stroke Art Gallery Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      </motion.div>

      {/* Banner Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative h-full flex flex-col justify-center max-w-6xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to One Stroke Art Gallery
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl">
          Discover the beauty of art through unique perspectives and creative expressions. 
          Each piece tells a story, each stroke creates a memory.
        </p>
      </motion.div>
    </div>
  )
}
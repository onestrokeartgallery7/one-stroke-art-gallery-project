import React from 'react'
import { motion } from 'framer-motion'
import type { ImageItem } from '../data/images'

type Props = {
  image: ImageItem
  onOpen: (id: number) => void
}

export default function ImageCard({ image, onOpen }: Props) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative h-full rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <button 
        onClick={() => onOpen(image.id)} 
        className="w-full h-full block bg-gray-100 dark:bg-gray-800"
      >
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <h3 className="text-white text-xl font-bold mb-2 text-shadow-sm">
              {image.title}
            </h3>
            <p className="text-gray-200 text-sm mb-3 max-w-md mx-auto leading-relaxed opacity-90">
              {image.description || 'A beautiful piece showcasing the essence of one-stroke art technique.'}
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[rgb(239,151,33)]/20 text-[rgb(239,151,33)] text-sm font-medium backdrop-blur-sm">
              {image.category}
            </div>
          </div>
        </div>
        
        {/* Bottom gradient for visual appeal */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </button>
    </motion.div>
  )
}

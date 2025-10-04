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
      whileHover={{ scale: 1.02 }}
      className="relative h-full rounded-xl overflow-hidden group"
    >
      <button 
        onClick={() => onOpen(image.id)} 
        className="w-full h-full block bg-gray-100 dark:bg-gray-800"
      >
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.6, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white font-medium mb-1">{image.title}</div>
          <div className="text-sm text-[rgb(239,151,33)]">{image.category}</div>
        </div>
      </button>
    </motion.div>
  )
}

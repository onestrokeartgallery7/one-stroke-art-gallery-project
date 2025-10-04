import React from 'react'
import { motion } from 'framer-motion'
import ImageCard from './ImageCard'
import Modal from './Modal'
import type { ImageItem } from '../data/images'

type Props = {
  images: ImageItem[]
  onOpen: (id: number) => void
  selectedId: number | null
  setSelectedId: (id: number | null) => void
}

export default function Gallery({ images, onOpen, selectedId, setSelectedId }: Props) {
  return (
    <section id="gallery" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Artworks</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of unique artworks, each piece carefully crafted to tell its own story.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        >
          {images.map((img) => (
            <div key={img.id} className="aspect-[4/3] h-full">
              <ImageCard image={img} onOpen={onOpen} />
            </div>
          ))}
        </motion.div>
      </div>

      <Modal images={images} selectedId={selectedId} setSelectedId={setSelectedId} />
    </section>
  )
}

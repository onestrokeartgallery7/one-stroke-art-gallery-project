import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ImageItem } from '../data/images'

type Props = {
  images: ImageItem[]
  selectedId: number | null
  setSelectedId: (id: number | null) => void
}

export default function Modal({ images, selectedId, setSelectedId }: Props) {
  const idx = images.findIndex((i) => i.id === selectedId)
  const current = idx >= 0 ? images[idx] : null

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!current) return
      if (e.key === 'Escape') setSelectedId(null)
      if (e.key === 'ArrowRight') {
        const next = images[(idx + 1) % images.length]
        setSelectedId(next.id)
      }
      if (e.key === 'ArrowLeft') {
        const prev = images[(idx - 1 + images.length) % images.length]
        setSelectedId(prev.id)
      }
    }
    window.addEventListener('keydown', onKey as any)
    return () => window.removeEventListener('keydown', onKey as any)
  }, [current, idx, images, setSelectedId])

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-black/60" onClick={() => setSelectedId(null)} />
          <motion.div className="relative max-w-4xl w-full bg-white dark:bg-[#0b1220] rounded-xl overflow-hidden shadow-soft" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} transition={{ duration: 0.25 }}>
            <div className="flex items-center justify-between p-4 border-b dark:border-neutral-700">
              <div>
                <div className="font-semibold">{current.title}</div>
                <div className="text-sm text-gray-500">{current.category}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setSelectedId(images[(idx - 1 + images.length) % images.length].id)} className="px-3 py-1">◀</button>
                <button onClick={() => setSelectedId(images[(idx + 1) % images.length].id)} className="px-3 py-1">▶</button>
                <button onClick={() => setSelectedId(null)} className="px-3 py-1">✕</button>
              </div>
            </div>
            <div className="p-4">
              <img src={current.src} alt={current.title} className="w-full h-[60vh] object-contain rounded" />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{current.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

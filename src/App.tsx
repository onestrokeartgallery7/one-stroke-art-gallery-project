import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.tsx'
import Banner from './components/Banner.tsx'
import Gallery from './components/Gallery.tsx'
import Contact from './components/Contact.tsx'
import imagesData from './data/images.ts'

export default function App() {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return imagesData
    return imagesData.filter((img) => img.title.toLowerCase().includes(q) || img.category.toLowerCase().includes(q))
  }, [search])

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark">
      <Navbar />
      <main className="overflow-hidden">
        <Banner />
        <Gallery images={filtered} onOpen={(id: number) => setSelectedId(id)} selectedId={selectedId} setSelectedId={setSelectedId} />
        <section id="about" className="relative bg-gray-50 dark:bg-gray-900">
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 -top-24" />
          <div className="section-container py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              {/* Gallery Info */}
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[rgb(239,151,33)] to-amber-500 bg-clip-text text-transparent">
                  About One Stroke Art Gallery
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  One Stroke Art Gallery is a curated space that celebrates the beauty of minimalist art. 
                  Our gallery showcases works that capture the essence of expression through simplified forms, 
                  where each stroke tells a story.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                  {[
                    { title: 'Curated Collection', value: '100+' },
                    { title: 'Featured Artists', value: '25+' },
                    { title: 'Years of Excellence', value: '5+' }
                  ].map(stat => (
                    <div key={stat.title} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-soft">
                      <div className="text-[rgb(239,151,33)] text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-gray-600 dark:text-gray-300">{stat.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artist Info */}
              <div className="mt-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(239,151,33)] to-amber-500 bg-clip-text text-transparent">
                      Meet the Artist
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p className="text-lg">
                        With decades of experience in art education and a lifelong dedication to artistic expression,
                        our gallery's artist brings a unique perspective to every piece created.
                      </p>
                      <p>
                        After retiring from a fulfilling career as an art teacher, they have now devoted their time
                        entirely to their true passion - creating art that speaks to the soul. Each artwork is a
                        reflection of years of experience, technique, and an unwavering love for artistic creation.
                      </p>
                      <p>
                        Their transition from education to full-time artistry has allowed them to explore new
                        dimensions in their work, bringing together classical techniques with contemporary vision.
                      </p>
                      <blockquote className="border-l-4 border-[rgb(239,151,33)] pl-4 italic my-6">
                        "Art is not just my passion; it's the language through which I communicate my deepest
                        thoughts and emotions. Every stroke is a word, every piece a story."
                      </blockquote>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="px-4 py-2 rounded-lg bg-[rgb(239,151,33)]/10 text-[rgb(239,151,33)]">
                        Art Educator
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-[rgb(239,151,33)]/10 text-[rgb(239,151,33)]">
                        Professional Artist
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-[rgb(239,151,33)]/10 text-[rgb(239,151,33)]">
                        Minimalist Style
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      {/* Artist photo will go here - for now showing a placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        Artist Photo Coming Soon
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[rgb(239,151,33)]/10 rounded-full -z-10" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[rgb(239,151,33)]/10 rounded-full -z-10" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="contact" className="relative">
          <div className="section-container py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[rgb(239,151,33)] to-amber-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Interested in our collection or want to discuss art? We'd love to hear from you.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[rgb(239,151,33)]">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Soninagar Housing Society,<br />
                      Block No.119, Vijapur Road,<br />
                      Near M.Gandhi Nationalpark,<br />
                      Solapur - 413004,<br />
                      Maharashtra, INDIA
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[rgb(239,151,33)]">Opening Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Saturday<br />
                      10:30 AM - 5:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[rgb(239,151,33)]">Contact</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Phone: +91 90968 45274<br />
                      Email: info@onestrokegallery.com
                    </p>
                  </div>
                </div>
                <form className="space-y-6 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-soft">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[rgb(239,151,33)] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[rgb(239,151,33)] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[rgb(239,151,33)] focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[rgb(239,151,33)] to-amber-500 text-white font-medium hover:from-[rgb(239,151,33)] hover:to-amber-600 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

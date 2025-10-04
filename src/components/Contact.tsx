import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-bg-light dark:bg-bg-dark"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Interested in purchasing artwork or collaborating? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            className="card p-6"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-accent-indigo hover:bg-accent-purple text-white rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            className="card p-6 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Visit the Gallery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Art Street<br />
                Creative District<br />
                City, State 12345
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 10:00 AM - 6:00 PM<br />
                Saturday: 11:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: (123) 456-7890<br />
                Email: info@onestrokegallery.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
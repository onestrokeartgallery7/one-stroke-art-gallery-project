import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Artist Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[rgb(239,151,33)]/10 rounded-2xl transform rotate-3"></div>
              <img
                src="/artist-photo.png"
                alt="Artist Portrait"
                className="relative w-full max-w-lg mx-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[rgb(239,151,33)] rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Artist Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About the Artist
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                Welcome to One Stroke Art Gallery, where creativity meets passion. With over two decades 
                of experience in art education, our gallery represents a unique blend of traditional and 
                contemporary artistic expressions.
              </p>
              <p className="text-lg">
                Based in Solapur, Maharashtra, we specialize in one-stroke techniques that bring artworks 
                to life with minimal yet powerful brushwork. Our gallery serves as both an exhibition 
                space and an educational hub where aspiring artists can learn and grow.
              </p>
              <div className="border-l-4 border-[rgb(239,151,33)] pl-4 my-8">
                <p className="text-xl italic text-gray-700 dark:text-gray-200">
                  "Art is not what you see, but what you make others see."
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Expertise</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-[rgb(239,151,33)]">●</span>
                    <span>One-Stroke Technique</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[rgb(239,151,33)]">●</span>
                    <span>Oil Painting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[rgb(239,151,33)]">●</span>
                    <span>Watercolor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[rgb(239,151,33)]">●</span>
                    <span>Art Education</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
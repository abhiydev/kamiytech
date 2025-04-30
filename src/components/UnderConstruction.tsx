"use client"

import React, { JSX } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function UnderConstruction(): JSX.Element {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 flex items-center justify-center overflow-hidden">
      {/* Floating background accents */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-200 opacity-30 rounded-full filter blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-200 opacity-30 rounded-full filter blur-2xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 z-10 max-w-4xl w-full mx-4"
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            🚧 Under Construction
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We&rsquo;re working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/kiyo.png"
            alt="Under Construction Character"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface Text3DProps {
  text: string
  className?: string
}

export default function Text3D({ text, className = '' }: Text3DProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h2>
      <motion.div
        className="absolute inset-0 text-4xl sm:text-5xl font-bold text-primary/20 -z-10"
        style={{ 
          transform: 'translateZ(-10px)',
          transformStyle: 'preserve-3d'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {text}
      </motion.div>
    </div>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              HT
            </motion.span>
          </ScrollLink>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setActiveSection(item.href)}
              >
                <motion.span
                  className={`inline-block ${
                    activeSection === item.href
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    rotateX: 10,
                    textShadow: "0 0 8px rgba(0, 112, 243, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 
import { motion } from 'framer-motion'
import type { ContactInfo } from '../../types/resume'
import ObfuscatedEmailLink from '../ObfuscatedEmailLink'

interface HeaderProps {
  name: string
  contact: ContactInfo
}

function Header({ name, contact }: HeaderProps) {
  return (
    <header className="relative overflow-hidden min-h-[100vh] flex items-center -mx-4 sm:-mx-6 lg:-mx-8 -mt-24">
      {/* Gradient background - extends full viewport width */}
      <div className="absolute inset-0 left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-terminal-green-dark/10 via-terminal-green/10 to-terminal-green-light/10 blur-[80px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full py-20 md:py-32 px-10 sm:px-12 lg:px-16"
      >
        {/* Name with gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-terminal-green-dark via-terminal-green to-terminal-green-light bg-clip-text text-transparent leading-tight">
          {name}
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-dark-text-secondary mb-8 max-w-3xl">
          Software Engineer specializing in full-stack development, real-time systems, and AI-powered solutions
        </p>

        {/* Location */}
        {contact.location && (
          <p className="text-lg text-dark-text-secondary mb-8 flex items-center gap-2">
            <span className="text-terminal-green">📍</span>
            {contact.location}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          {contact.email && (
            <ObfuscatedEmailLink
              email={contact.email}
              className="px-8 py-4 bg-gradient-to-r from-terminal-green-dark to-terminal-green hover:from-terminal-green hover:to-terminal-green-light text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/30"
            >
              Get in Touch
            </ObfuscatedEmailLink>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-dark-surface hover:bg-dark-border text-dark-text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-dark-border"
            >
              LinkedIn →
            </a>
          )}
        </div>
      </motion.div>
    </header>
  )
}

export default Header

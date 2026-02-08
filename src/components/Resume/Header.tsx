import { motion } from 'framer-motion'
import type { ContactInfo } from '../../types/resume'

interface HeaderProps {
  name: string
  contact: ContactInfo
}

function Header({ name, contact }: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 md:py-32 px-6 md:px-12"
      >
        {/* Name with gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          {name}
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-dark-text-secondary mb-8 max-w-3xl">
          Software Engineer specializing in full-stack development, real-time systems, and AI-powered solutions
        </p>

        {/* Location */}
        {contact.location && (
          <p className="text-lg text-dark-text-secondary mb-8 flex items-center gap-2">
            <span className="text-blue-400">📍</span>
            {contact.location}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Get in Touch
            </a>
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
          {contact.portfolio && (
            <a
              href={contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-dark-surface hover:bg-dark-border text-dark-text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-dark-border"
            >
              Portfolio →
            </a>
          )}
        </div>
      </motion.div>
    </header>
  )
}

export default Header

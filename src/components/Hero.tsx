import { motion } from 'framer-motion'
import { name, headline, subheadline, contact } from '../data/portfolio'

function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      {/* Layered background — spans full viewport width */}

      {/* 1. Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* 2. Radial glow — top right */}
      <div className="absolute -top-[30%] -right-[15%] w-[50rem] h-[50rem] rounded-full pointer-events-none hero-glow-1" />

      {/* 3. Radial glow — bottom left */}
      <div className="absolute -bottom-[20%] -left-[15%] w-[40rem] h-[40rem] rounded-full pointer-events-none hero-glow-2" />

      {/* 4. Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none hero-noise" />

      {/* 5. Vignette — darkens edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.7)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-gradient-hero"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-text-primary mb-6"
        >
          {headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-dark-text-secondary leading-relaxed mb-10 max-w-2xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3.5 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-[1.02]"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-dark-text-primary font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-6 text-sm text-dark-text-secondary/60"
        >
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-text-secondary transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <span className="text-dark-text-secondary/20">|</span>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-text-secondary transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <span className="text-dark-text-secondary/20">|</span>
          <span>Melbourne, FL</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

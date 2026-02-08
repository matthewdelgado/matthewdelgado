import { motion } from 'framer-motion'
import type { ExperienceItem } from '../../types/resume'

interface ExperienceProps {
  items: ExperienceItem[]
}

function Experience({ items }: ExperienceProps) {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary mb-4">
          Professional Experience
        </h2>
        <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
          Building mission-critical systems and innovative solutions across defense, AI, and full-stack development
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-dark-bg" />

              <div className="md:ml-16 group relative bg-gradient-to-br from-dark-surface to-dark-surface/50 border border-dark-border rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 print-break-inside-avoid">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text-primary mb-2">
                      {item.company}
                    </h3>
                    {item.title && (
                      <p className="text-lg text-blue-400 font-semibold">
                        {item.title}
                      </p>
                    )}
                  </div>
                </div>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="space-y-3 mt-6">
                    {item.responsibilities.map((responsibility, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-dark-text-primary leading-relaxed"
                      >
                        <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                        <span>{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

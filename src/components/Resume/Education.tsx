import { motion } from 'framer-motion'
import type { EducationItem } from '../../types/resume'

interface EducationProps {
  items: EducationItem[]
}

function Education({ items }: EducationProps) {
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
          Education
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover:border-terminal-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-terminal-green/10 print-break-inside-avoid"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-terminal-green-dark to-terminal-green-light flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <p className="text-xl font-bold text-dark-text-primary mb-2">
                  {item.degree}
                </p>
                <p className="text-lg text-dark-text-secondary">
                  {item.institution}
                </p>
                {item.year && (
                  <p className="text-dark-text-secondary mt-1">
                    {item.year}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education

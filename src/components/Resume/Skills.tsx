import { motion } from 'framer-motion'
import type { SkillCategory } from '../../types/resume'
import { TechIcon } from '../../utils/techIcons'

interface SkillsProps {
  categories: SkillCategory[]
}

function Skills({ categories }: SkillsProps) {
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
          Technical Expertise
        </h2>
        <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
          A comprehensive toolkit for building modern software solutions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gradient-to-br from-dark-surface to-dark-surface/50 border border-dark-border rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 print-break-inside-avoid"
          >
            <h3 className="text-xl font-bold text-dark-text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-dark-text-primary hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 cursor-default flex items-center gap-2"
                >
                  <TechIcon name={skill} className="w-4 h-4" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

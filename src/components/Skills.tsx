import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { TechIcon } from '../utils/techIcons'

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" aria-label="Technical skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Stack</h2>
        <p className="text-dark-text-secondary mb-12 max-w-xl">Production experience across embedded systems, full-stack web, and cloud infrastructure.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6"
          >
            <h3 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/[0.04] border border-white/[0.08] rounded-lg text-dark-text-secondary hover:bg-white/[0.08] hover:text-dark-text-primary transition-colors duration-200"
                >
                  <TechIcon name={skill} className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

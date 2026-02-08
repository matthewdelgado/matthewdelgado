import { motion } from 'framer-motion'
import type { ProjectItem } from '../../types/resume'
import { TechIcon } from '../../utils/techIcons'

interface ProjectsProps {
  items: ProjectItem[]
}

function Projects({ items }: ProjectsProps) {
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
          Featured Projects
        </h2>
        <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
          Innovative solutions built with modern technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-dark-surface border border-dark-border rounded-2xl p-6 hover:border-terminal-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-terminal-green/10 hover:-translate-y-1 print-break-inside-avoid"
          >
            <h3 className="text-xl font-bold text-dark-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-terminal-green-dark group-hover:to-terminal-green-light group-hover:bg-clip-text transition-all duration-300">
              {item.name}
            </h3>

            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-terminal-green-dark/20 to-terminal-green/20 text-terminal-green-light rounded-lg text-sm font-medium border border-terminal-green/20 flex items-center gap-1.5"
                  >
                    <TechIcon name={tech} className="w-4 h-4" />
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-dark-text-secondary text-sm leading-relaxed">
                    <span className="text-terminal-green mt-0.5 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

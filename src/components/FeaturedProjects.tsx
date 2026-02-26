import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import type { ProjectData } from '../data/portfolio'

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} — ${project.tagline}`}
        className={`block group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 ${project.accentGlow}`}
      >
        {/* Accent bar */}
        <div
          className="absolute top-0 left-8 right-8 h-px opacity-40 group-hover:opacity-80 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
        />

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <h3
                className="text-2xl sm:text-3xl font-bold transition-colors duration-300"
                style={{ color: project.accentColor }}
              >
                {project.name}
              </h3>
              <svg
                className="w-5 h-5 text-dark-text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>

            <p className="text-lg text-dark-text-secondary mb-2 font-medium">{project.tagline}</p>
            <p className="text-dark-text-secondary/80 mb-6 leading-relaxed max-w-2xl">{project.description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-dark-text-secondary">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.accentColor }} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Browser mockup — screenshot placeholder */}
          <div className="lg:w-80 shrink-0">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-dark-text-secondary/50 font-mono">{project.url.replace('https://', '')}</span>
                </div>
              </div>
              {/* Screenshot area — replace with <img> when screenshots are available */}
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ) : (
                <div className="p-6 flex flex-col items-center justify-center min-h-[140px]">
                  <div
                    className="text-3xl font-bold mb-2 opacity-20"
                    style={{ color: project.accentColor }}
                    aria-hidden="true"
                  >
                    {project.name[0]}
                  </div>
                  <div className="text-xs text-dark-text-secondary/40">{project.url.replace('https://', '')}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}22`,
                backgroundColor: `${project.accentColor}08`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </motion.article>
  )
}

function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Shipped products">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Shipped Products</h2>
        <p className="text-dark-text-secondary mb-12 max-w-xl">Live products I designed, built, and deployed. Not tutorials — production systems handling real traffic.</p>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects

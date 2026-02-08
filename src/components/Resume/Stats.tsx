import { motion } from 'framer-motion'
import type { Stats as StatsType } from '../../types/resume'

interface StatsProps {
  stats: StatsType
}

const statItems = [
  { key: 'yearsOfExperience', label: 'Years Experience', suffix: '+' },
  { key: 'companyCount', label: 'Companies', suffix: '' },
  { key: 'projectCount', label: 'Projects', suffix: '+' },
  { key: 'skillCount', label: 'Technologies', suffix: '+' },
]

function Stats({ stats }: StatsProps) {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {statItems.map((item, index) => {
          const value = stats[item.key as keyof StatsType]

          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-surface border border-dark-border rounded-2xl p-6 text-center hover:border-terminal-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-terminal-green/10"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-terminal-green-dark to-terminal-green-light bg-clip-text text-transparent mb-2">
                {value}{item.suffix}
              </div>
              <div className="text-sm md:text-base text-dark-text-secondary font-medium">
                {item.label}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats

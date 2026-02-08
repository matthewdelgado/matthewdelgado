import {
  SiReact,
  SiAngular,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiFirebase,
  SiPhp,
  SiArduino,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { IconType } from 'react-icons'

const techIconMap: Record<string, IconType> = {
  // Languages
  python: SiPython,
  'c++': SiCplusplus,
  cpp: SiCplusplus,
  java: FaJava,
  typescript: SiTypescript,
  javascript: SiJavascript,
  php: SiPhp,

  // Frameworks & Libraries
  react: SiReact,
  angular: SiAngular,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,

  // Tools
  docker: SiDocker,
  git: SiGit,

  // Databases
  mysql: SiMysql,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,

  // Platforms
  firebase: SiFirebase,
  arduino: SiArduino,
}

export function getTechIcon(techName: string): IconType | null {
  const normalized = techName.toLowerCase().trim()
  return techIconMap[normalized] || null
}

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const Icon = getTechIcon(name)

  if (!Icon) {
    return null
  }

  return <Icon className={className} />
}

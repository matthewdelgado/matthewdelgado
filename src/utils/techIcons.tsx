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
  SiCloudflare,
  SiSupabase,
  SiSqlite,
  SiVite,
  SiTailwindcss,
  SiFastapi,
  SiJenkins,
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
  sql: SiPostgresql,

  // Frameworks & Libraries
  react: SiReact,
  angular: SiAngular,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  fastapi: SiFastapi,
  vite: SiVite,
  tailwind: SiTailwindcss,

  // Tools
  docker: SiDocker,
  git: SiGit,
  jenkins: SiJenkins,

  // Databases
  mysql: SiMysql,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  sqlite: SiSqlite,

  // Cloud & Platforms
  firebase: SiFirebase,
  supabase: SiSupabase,
  'cloudflare workers': SiCloudflare,
  cloudflare: SiCloudflare,
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

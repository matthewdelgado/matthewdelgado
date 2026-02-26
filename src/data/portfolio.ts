export interface ProjectData {
  name: string
  tagline: string
  description: string
  technologies: string[]
  highlights: string[]
  url: string
  accentColor: string
  accentGlow: string
  screenshot?: string
}

export interface SkillCategoryData {
  category: string
  skills: string[]
}

export const name = 'Matthew Delgado'

export const headline = 'I build things that work.'
export const subheadline = 'Full-stack engineer. 5+ years shipping production software — embedded systems, web platforms, and SaaS products. Three live products. Zero side-project graveyards.'

export const contact = {
  email: 'matthewdelgado.swe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mattdelg/',
  github: 'https://github.com/matthewdelgado',
  portfolio: 'https://www.delgadomatthew.com',
}


export const projects: ProjectData[] = [
  {
    name: 'BeaconBot',
    tagline: 'Free uptime monitoring with beautiful status pages',
    description:
      'Multi-region uptime monitoring powered by Cloudflare Workers. Smart alerts via Discord and email, OAuth-secured dashboards, and public status pages your users can trust.',
    technologies: ['Cloudflare Workers', 'Supabase', 'React', 'TypeScript', 'OAuth'],
    highlights: [
      'Multi-region health checks from the edge',
      'Smart alerting with Discord & email notifications',
      'Beautiful public status pages',
    ],
    url: 'https://thebeaconbot.com',
    accentColor: '#22c55e',
    accentGlow: 'shadow-[0_0_80px_rgba(34,197,94,0.15)]',
  },
  {
    name: 'PromoTap',
    tagline: 'Smart NFC Redirects Made Simple',
    description:
      'NFC tag and QR code management platform. Tags redirect in under 10ms to admin-specified URLs with full tap analytics logged asynchronously.',
    technologies: ['React', 'Vite', 'Tailwind', 'SQLite', 'TypeScript'],
    highlights: [
      'Sub-10ms NFC & QR redirects',
      'Real-time tap & scan analytics',
      'Instant destination URL updates',
    ],
    url: 'https://promotap.app',
    accentColor: '#a855f7',
    accentGlow: 'shadow-[0_0_80px_rgba(168,85,247,0.15)]',
  },
  {
    name: 'ScalarTek',
    tagline: 'We amplify what makes you unique.',
    description:
      'Digital agency delivering web development, SEO, brand strategy, and AI integration. Helping businesses scale their digital presence with measurable results.',
    technologies: ['Web Development', 'SEO', 'Brand Strategy', 'AI Integration'],
    highlights: [
      '3x organic traffic growth for clients',
      '+40% conversion rate improvements',
      'End-to-end digital transformation',
    ],
    url: 'https://scalartek.com',
    accentColor: '#06b6d4',
    accentGlow: 'shadow-[0_0_80px_rgba(6,182,212,0.15)]',
  },
]


export const skills: SkillCategoryData[] = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['React', 'Angular', 'FastAPI', 'Node.js', 'Docker', 'Git', 'Jenkins', 'Vite'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Cloudflare Workers'],
  },
]

export const sections = [
  { id: 'home', title: 'Home' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'contact', title: 'Contact' },
]

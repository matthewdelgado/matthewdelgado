import { resumeData } from '../../utils/markdownParser'
import SEO from '../SEO'
import Navbar from '../Layout/Navbar'
import Header from './Header'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import ObfuscatedEmailLink from '../ObfuscatedEmailLink'

function Resume() {
  // Create a map of section titles to their IDs
  const sectionMap: Record<string, string> = {}
  resumeData.sections.forEach(section => {
    const titleUpper = section.title.toUpperCase()
    if (titleUpper === 'PROFESSIONAL EXPERIENCE') sectionMap.experience = section.id
    if (titleUpper === 'PERSONAL PROJECTS') sectionMap.projects = section.id
    if (titleUpper === 'CORE SKILLS') sectionMap.skills = section.id
    if (titleUpper === 'EDUCATION') sectionMap.education = section.id
  })

  return (
    <>
      <SEO />
      <Navbar sections={resumeData.sections} name={resumeData.name} />

      <div className="space-y-32">
        <Header name={resumeData.name} contact={resumeData.contact} />

        {sectionMap.experience && (
          <div id={sectionMap.experience}>
            <Experience items={resumeData.experience} />
          </div>
        )}

        {sectionMap.projects && (
          <div id={sectionMap.projects}>
            <Projects items={resumeData.projects} />
          </div>
        )}

        {sectionMap.skills && (
          <div id={sectionMap.skills}>
            <Skills categories={resumeData.skills} />
          </div>
        )}

        {sectionMap.education && (
          <div id={sectionMap.education}>
            <Education items={resumeData.education} />
          </div>
        )}

        {/* Footer CTA */}
        <footer className="text-center py-16 border-t border-dark-border">
          <h3 className="text-3xl font-bold text-dark-text-primary mb-4">
            Let's Build Something Great
          </h3>
          <p className="text-xl text-dark-text-secondary mb-8">
            Open to new opportunities and exciting projects
          </p>
          {resumeData.contact.email && (
            <ObfuscatedEmailLink
              email={resumeData.contact.email}
              className="inline-block px-8 py-4 bg-gradient-to-r from-terminal-green-dark to-terminal-green hover:from-terminal-green hover:to-terminal-green-light text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/30"
            >
              Get in Touch
            </ObfuscatedEmailLink>
          )}
        </footer>
      </div>
    </>
  )
}

export default Resume

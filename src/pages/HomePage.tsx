import SEO from '../components/SEO'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <>
      <SEO />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  )
}

export default HomePage

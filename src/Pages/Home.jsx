import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Skills from '../components/Myskills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30' >
      {/* theme toggle  */}
      <ThemeToggle />
      {/* bg effects */}
      < StarBackground />

      {/* nav */}
      <Navbar />
      {/* main  */}
      <main>
        <Herosection />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
      </main>
      {/* footer  */}
      <Footer />
    </div>
  )
}

export default Home
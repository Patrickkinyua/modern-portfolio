import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Myskills'
function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' >
        {/* theme toggle  */}
          <ThemeToggle></ThemeToggle>
        {/* bg effects */}
            < StarBackground> </StarBackground>

        {/* nav */}
          <Navbar></Navbar>
        {/* main  */}
            <Herosection/>
            <AboutMe/>
             <Skills/>
        {/* footer  */}
    </div>
  )
}

export default Home
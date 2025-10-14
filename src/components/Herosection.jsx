import { ArrowDown } from 'lucide-react'
import React from 'react'

function Herosection() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center px-4' id='hero'>
        <div  className='container max-w-4xl mx-auto text-center z-10'>
           <div className='space-y-6'>
              <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'>Hi am </span>
                <span className='text-primary animate-fade-in-delay-1'>Patrick </span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2 '>Kinyua😎</span>
              </h1>
               <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2 mb-4'>
                I create stellar web experiences with modern techologies.
                specializing in front end development,i build interphases that are 
                both beautiful and functional.
               </p>
           </div>
            <a className='cosmic-button ' href="#projects">
                View my work
            </a>
        </div>
        <div  className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col animate-bounce ' >
          <span className='text-sm text-muted-foreground mb-2'>scroll</span>
          <ArrowDown className='h-5 w-5 text-primary '/>
        </div>
    </section>
  )
}

export default Herosection
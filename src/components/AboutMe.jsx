import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutMe() {
  return (
   <section id='about' className='py-10 px-4 relative'>
      <div className=' container mx-auto max-w-5xl '>
          <h2 className='text-3xl md:4xl '>
            About <span className='text-primary'>Me</span>
          </h2>
          <div className='grid grid-cols-1 md:cols-2 item-center'>
            <div className='space-y-6 ' >
                <h3 className='text-2xl font-semibold'>passionate Web Developer & Designer</h3>
                <p className='text-muted-foreground'>
                   With over  2 years of practical learning in web development,  i specialise
                   in creating responsive ,accessible and perfomance web apps
                   using    MERN stack. 
                </p>
                <p className='text-muted-foreground'>
                    im passionate about creating elegant solutions to complex
                    problems ,always learning new technologies to stay in the 
                    forefront of the ever-evolving web landscape.
                </p>
                
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contact" className='cosmic-button'>Get in touch</a>
                    <a href="#" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all'>Download cv</a>

                </div>


            </div>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex flex-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='text-lg font-semibold'>web Development</h4>
                            <p className='text-muted-foreground'>creating responsive websites with modern frameworks </p>

                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                     <div className='flex flex-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <User className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='text-lg font-semibold'>work experience</h4>
                            <p className='text-muted-foreground'>creating responsive websites with modern frameworks </p>

                        </div> 
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover border hover:border-[1px] hover:border-primary'>
                     <div className='flex flex-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                           <Briefcase className='h-6 w-6 text-primary'/>
                        </div>
                         <div className='text-left'>
                            <h4 className='text-lg font-semibold'>jobs</h4>
                            <p className='text-muted-foreground'>creating responsive websites with modern frameworks </p>

                        </div>
                    </div>
                </div>
            </div>

          </div>
      </div>
   </section>
  )
}

export default AboutMe
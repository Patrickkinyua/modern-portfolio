import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

function Herosection() {
  return (
    <section className='relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden' id='hero'>
      <div className='container max-w-6xl mx-auto z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left space-y-6'
          >
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase animate-pulse-subtle">
                Available for new opportunities 🚀
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase">
                💡 Passionate Code Educator
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-black tracking-tighter leading-tight'>
              Hi, I'm <br />
              <span className='text-primary'>Patrick </span>
              <span className='bg-gradient-to-r from-primary via-indigo-400 to-indigo-600 bg-clip-text text-transparent'>Kinyua</span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto lg:mx-0'>
              Building <span className="text-foreground font-medium">stellar web experiences</span> with modern technologies.
              I specialize in crafting beautiful, functional, and user-centric digital solutions.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-6 pt-4'>
              <a className='cosmic-button text-base' href="#projects">
                Explore My Work
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/Patrickkinyua" target="_blank" className="p-2.5 rounded-full glass-card hover:bg-primary/10 transition-colors border-border">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/patrick-kinyua-119216267/" target="_blank" className="p-2.5 rounded-full glass-card hover:bg-primary/10 transition-colors border-border" title="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:patrickinyua2004@gmail.com" className="p-2.5 rounded-full glass-card hover:bg-primary/10 transition-colors border-border" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+254720061348" className="p-2.5 rounded-full glass-card hover:bg-primary/10 transition-colors border-border" title="Call Me">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Portrait Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='relative mx-auto lg:ml-auto max-w-xs md:max-w-sm'
          >
            {/* Portrait Frame Effect with Swing Animation */}
            <motion.div
              style={{ transformOrigin: "top center" }}
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                rotate: [-8, 8, -8, 8, 0],
                transition: { duration: 2, ease: "easeInOut" }
              }}
              className='relative p-3 bg-primary/10 backdrop-blur-sm shadow-2xl rounded-sm border-[12px] border-primary/20 dark:border-primary/30 transform transition-shadow duration-500 hover:shadow-primary/20'
            >
              <div className='overflow-hidden aspect-[4/5] rounded-xs'>
                <img
                  src={profileImg}
                  alt="Patrick Kinyua"
                  className='w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700'
                />
              </div>
              {/* Portrait Label */}
              <div className='pt-4 pb-1 text-center font-mono italic text-primary/60 text-sm font-medium'>
                Patrick Kinyua, 2024
              </div>
            </motion.div>

            {/* Decorative Elements (Like a hanging rope or pin) */}
            <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/40 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20' />
            <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/10 -z-10 origin-bottom' />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer'
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className='text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold'>Scroll down</span>
        <ArrowDown className='h-5 w-5 text-primary/60 animate-bounce' />
      </motion.div>
    </section>
  )
}

export default Herosection
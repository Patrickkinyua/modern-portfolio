import { Briefcase, Code, GraduationCap, Laptop, Sparkles, User } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
    return (
        <section id='about' className='py-32 px-6 relative'>
            <div className='container mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        Unveiling the <span className='text-primary italic'>Developer</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='lg:col-span-7 space-y-8'
                    >
                        <h3 className='text-3xl font-bold leading-tight'>
                            Crafting Digital Excellence Through <br />
                            <span className="text-primary">Innovation & Code</span>
                        </h3>

                        <p className='text-xl text-muted-foreground leading-relaxed'>
                            With over 2 years of dedicated exploration in the web landscape, I have perfected the art of
                            building <span className="text-foreground font-semibold">performance-driven</span>,
                            <span className="text-foreground font-semibold">accessible</span>, and
                            <span className="text-foreground font-semibold">visually stunning</span> web applications.
                        </p>

                        <p className='text-muted-foreground leading-loose'>
                            I am deeply committed to the MERN stack ecosystem, pushing the boundaries of what's possible
                            in modern web architecture. My approach combines technical precision with a designer's
                            eye, ensuring every pixel serves a purpose.
                        </p>

                        <div className='flex flex-wrap gap-4 pt-6'>
                            <a href="#contact" className='cosmic-button'>Get in Touch</a>
                            <a href="#" className='px-8 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all flex items-center gap-2'>
                                View Resume <Sparkles className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    <div className='lg:col-span-5 grid grid-cols-1 gap-6'>
                        {[
                            { icon: <Code />, title: "Web Engineering", description: "Architecting scalable front-end solutions with modern frameworks." },
                            { icon: <Laptop />, title: "Full Stack Mastery", description: "Seamlessly bridging the gap between client and server logic." },
                            { icon: <GraduationCap />, title: "Code Education & Mentorship", description: "Empowering the next generation of developers through hands-on teaching and knowledge sharing." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className='glass-card p-8 rounded-2xl card-hover flex gap-6'
                            >
                                <div className='p-4 rounded-xl bg-primary/10 h-fit'>
                                    {React.cloneElement(item.icon, { className: 'h-6 w-6 text-primary' })}
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold mb-2'>{item.title}</h4>
                                    <p className='text-muted-foreground text-sm leading-relaxed'>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe

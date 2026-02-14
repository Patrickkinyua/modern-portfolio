import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card rounded-3xl p-12 text-center border-primary/20 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden relative"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Let's Build Something <br />
                        <span className="text-primary italic">Stellar</span> Together
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto font-light">
                        I'm currently available for new opportunities and collaborations.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <a
                            href="mailto:contact@patrick.com"
                            className="cosmic-button flex items-center gap-2 text-lg px-10 py-4 group"
                        >
                            Get In Touch
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium pt-8 border-t border-border/50 w-full mt-4">
                            <span className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                contact@patrick.com
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                Nairobi, Kenya
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

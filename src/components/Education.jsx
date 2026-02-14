import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

const education = [
    {
        title: "Web Development Certificate",
        institution: "ALX Africa",
        period: "2023 - 2024",
        skills: ["Software Engineering Foundations", "Frontend Development", "Backend Systems", "Professional Soft Skills"],
        highlight: "Graduated with proficiency in full-stack development and real-world project experience."
    },
    {
        title: "Certificate in Backend Web Development",
        institution: "Specialized Training",
        period: "2024",
        skills: ["Server-side Logic", "Database Management", "API Design & Security", "System Scalability"],
        highlight: "Advanced focus on building robust, scalable backend architectures and RESTful APIs."
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 relative overflow-hidden bg-primary/5">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        <GraduationCap className="w-4 h-4" /> Learning Journey
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Education & <span className="text-primary italic">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My technical foundation and specialized training that drives my development process.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl border-white/10 flex flex-col h-full hover:border-primary/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <span className="text-sm font-mono text-primary/60">{edu.period}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{edu.title}</h3>
                            <p className="text-primary font-medium mb-4">{edu.institution}</p>

                            <p className="text-muted-foreground text-sm mb-6 flex-1">
                                {edu.highlight}
                            </p>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                                    <BookOpen className="w-3 h-3" /> Core Skills Taught
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.skills.map((skill, sIndex) => (
                                        <div
                                            key={sIndex}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-xs font-medium"
                                        >
                                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Education;

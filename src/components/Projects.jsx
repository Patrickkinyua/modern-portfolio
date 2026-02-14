import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, Server, Users } from 'lucide-react';
import finditImg from '../assets/findit.png';

const projects = [
    {
        title: "FindIt - Lost & Found",
        description: "A comprehensive platform dedicated to reconnecting lost items with their owners. Features a clean, minimalist interface for reporting items, categorized listings for easy navigation, and AI-powered matching.",
        image: finditImg,
        tech: ["React", "Node.js", "MongoDB", "Tailwind", "Gemini AI"],
        github: "https://github.com/Patrickkinyua/FindIt-Fullstack-App",
        live: "https://findit-client.vercel.app/",
        type: "UI"
    },
    {
        title: "Employee Management System",
        description: "A robust RESTful API for managing organizational data, including employee profiles, departments, and payroll logic with role-based security.",
        icon: <Users className="w-8 h-8 text-primary" />,
        tech: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
        github: "https://github.com/Patrickkinyua",
        type: "API"
    },
    {
        title: "Blog Platform API",
        description: "A comprehensive backend built with Django, featuring a robust blogging system with nested comments, category management, and automated administrative workflows.",
        icon: <Database className="w-8 h-8 text-primary" />,
        tech: ["Python", "Django", "PostgreSQL", "DRF", "Cloudinary"],
        github: "https://github.com/Patrickkinyua",
        type: "API"
    },
    {
        title: "Socii",
        description: "A vibrant social networking API tailored for the campus experience. Features real-time interactions, peer connections, and campus-specific engagement tools built on a scalable backend.",
        icon: <Users className="w-8 h-8 text-primary" />,
        tech: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
        github: "https://github.com/Patrickkinyua/twitter-clone-backend",
        type: "API"
    }
];

// Helper icons for API projects
const APIIcon = ({ type }) => {
    if (type === "Employee Management System") return <Server className="w-10 h-10 text-primary" />;
    return <Code className="w-10 h-10 text-primary" />;
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary italic">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work, ranging from full-stack applications to robust backend systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card rounded-2xl overflow-hidden flex flex-col group ${project.type === 'UI' ? 'md:col-span-2 lg:col-span-2' : ''}`}
                        >
                            {/* Image or Icon Section */}
                            <div className="relative h-64 overflow-hidden bg-muted flex items-center justify-center">
                                {project.type === 'UI' ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'; // Fallback
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5 p-8 text-center transition-colors group-hover:bg-primary/10">
                                        <APIIcon type={project.title} />
                                        <div className="mt-4 font-mono text-xs text-primary/60">RESTFUL API SYSTEM</div>
                                    </div>
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                                        title="View Code"
                                    >
                                        <Github className="w-6 h-6 text-white" />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-primary hover:bg-primary/90 rounded-full transition-colors shadow-lg"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="w-6 h-6 text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${project.type === 'UI' ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}`}>
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tag, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="px-2 py-1 text-xs font-medium bg-secondary/50 rounded-md border border-border"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default Projects;

import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-border bg-background/50 backdrop-blur-md">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-primary mb-2">Patrick.Dev</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building next-generation web experiences with passion and precision.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Patrickkinyua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/patrick-kinyua-119216267/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="mailto:patrickinyua2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="tel:+254720061348" className="text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Patrick Kinyua. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Kenya
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

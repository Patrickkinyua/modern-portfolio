import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const navItems = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll shrink + shadow logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-primary text-xl font-bold flex items-center"
        >
          <span>
            <span className="text-glow">Patrick.</span> Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Slide-In Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-background/60 backdrop-blur-2xl border-l border-primary/20 shadow-[0_0_25px_rgba(139,92,246,0.4)] z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition duration-300"
            >
              <X size={26} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center mt-10 space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={handleLinkClick}
                className="text-foreground/90 hover:text-primary text-lg transition-all duration-300 capitalize tracking-wide hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Subtle Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse-subtle"></div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300"
          ></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

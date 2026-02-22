"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "about" },
    { name: "Projetos", href: "projects" },
    { name: "Contato", href: "contact" },
  ];

  // Função para navegar e fechar o menu
  const handleNavClick = (id: string) => {
    setIsOpen(false); 
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <button 
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }}
          className="text-xl font-bold font-mono tracking-tighter cursor-pointer"
        >
          WILL<span className="text-react-blue">TECH</span>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-mono text-foreground/60 hover:text-react-blue transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button className="md:hidden text-white z-[110]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/98 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-mono text-foreground hover:text-react-blue transition-colors"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import eIcon from "@/assets/arrecife-e-icon.png";

const CinematicNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <img src={eIcon} alt="Arrecife" className="h-10 w-auto" />

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[hsl(var(--background-alt))] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              <a
                href="#inicio"
                onClick={() => setIsOpen(false)}
                className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                onClick={() => setIsOpen(false)}
                className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
              >
                Servicios
              </a>
              
              {/* Main CTA Button */}
              <a
                href="https://wa.me/52"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-12 py-4 bg-white text-[hsl(var(--background-alt))] text-2xl font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                Contacto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CinematicNavigation;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end p-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[100] hover:bg-muted transition-all hover:scale-110"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 flex items-center justify-center">
          <div className="flex flex-col space-y-8 text-center">
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-foreground hover:text-primary transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="https://wa.me/529931000420"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
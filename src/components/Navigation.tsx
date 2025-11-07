import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 hover:bg-secondary/20"
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
        <div className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-40 flex items-center justify-center animate-fade-in">
          <div className="flex flex-col space-y-8 text-center">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-primary-foreground hover:text-secondary transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-primary-foreground hover:text-secondary transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import arrecifeConsulLogo from "@/assets/arrecife-consultores-logo.png";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-background py-20 px-6 overflow-hidden"
    >
      {/* Decorative teal element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Text Block */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-light text-foreground leading-relaxed"
          >
            Cuidamos a nuestros clientes como un arrecife: con equilibrio, conocimiento y respeto por su ritmo de crecimiento.
          </motion.p>

          {/* CTA Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-primary"
          >
            Quiero escalar mi negocio.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          >
            <a href="https://wa.me/529931000420" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="rounded-full px-12 py-6 text-lg font-medium hover:scale-110 transition-all duration-300 bg-primary hover:bg-[hsl(185_80%_20%)]"
              >
                + INFO
              </Button>
            </a>
          </motion.div>

          {/* Arrecife Consultores Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
            className="pt-8"
          >
            <img 
              src={arrecifeConsulLogo} 
              alt="Arrecife Consultores" 
              className="w-64 h-auto opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
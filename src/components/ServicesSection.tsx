import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Storytelling",
  "Estrategia",
  "Producción Audiovisual",
  "Branding",
  "Consultoría",
  "Soluciones con IA",
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-alt))] py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 tracking-widest uppercase text-center">
          NUESTROS SERVICIOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: isLeftColumn ? -100 : 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.1 
                }}
                className="group p-8 bg-background rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors">
                  {service}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
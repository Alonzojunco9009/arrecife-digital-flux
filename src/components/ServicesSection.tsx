import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  "Storytelling",
  "Estrategia",
  "Producción Audiovisual",
  "Branding",
  "Consultoría",
  "Soluciones con IA",
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"]
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] flex flex-col items-center justify-start bg-[hsl(var(--background-alt))] py-32 px-6 overflow-hidden"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-widest uppercase text-center sticky top-24"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
        }}
      >
        NUESTROS SERVICIOS
      </motion.h2>
      
      <div className="relative w-full max-w-7xl mx-auto">
        {services.map((service, index) => {
          const start = index / services.length;
          const end = (index + 1) / services.length;
          
          const y = useTransform(
            scrollYProgress,
            [start, end],
            [50, -50]
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [start - 0.15, start, end, end + 0.15],
            [0, 1, 1, 0]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [start - 0.1, start, end, end + 0.1],
            [0.8, 1, 1, 0.8]
          );
          
          const blur = useTransform(
            scrollYProgress,
            [start - 0.15, start, end, end + 0.15],
            [10, 0, 0, 10]
          );

          return (
            <motion.div
              key={service}
              className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen"
              style={{
                y,
                opacity,
                scale,
                filter: useTransform(blur, (value) => `blur(${value}px)`),
              }}
            >
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground text-center leading-tight tracking-wide">
                {service}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  "Storytelling",
  "Estrategia",
  "Producción Audiovisual",
  "Branding",
  "Consultoría",
];

const CinematicServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="relative min-h-screen bg-[hsl(var(--background-alt))] py-32 px-6 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-light text-white text-center mb-32 tracking-widest uppercase"
      >
        Nuestros Servicios
      </motion.h2>

      {/* Services List with Center Focus */}
      <div className="space-y-32">
        {services.map((service, index) => (
          <ServiceItem key={service} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = ({ service, index }: { service: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate scale and opacity based on how centered the item is
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.9, 1.2, 0.9]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.5, 1, 0.5]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex items-center justify-center min-h-[30vh]"
    >
      <h3
        className="text-4xl md:text-6xl lg:text-8xl font-light text-white text-center leading-tight tracking-wider transition-all duration-300"
        style={{
          textShadow: '2px 2px 20px rgba(0,0,0,0.3)',
        }}
      >
        {service}
      </h3>
    </motion.div>
  );
};

export default CinematicServices;

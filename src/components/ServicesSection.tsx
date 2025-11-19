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
    offset: ["start end", "end start"]
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Sticky Header */}
      <motion.div
        className="sticky top-0 pt-24 pb-12 z-10 bg-gradient-to-b from-blue-50/80 to-transparent backdrop-blur-sm"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 0.3, 0])
        }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-widest uppercase text-center">
          NUESTROS SERVICIOS
        </h2>
      </motion.div>

      {/* Parallax Service Words */}
      <div className="relative w-full h-full">
        {services.map((service, index) => {
          // Each service gets a scroll window
          const totalServices = services.length;
          const windowSize = 1 / (totalServices - 1); // Overlapping windows
          const start = index * windowSize * 0.7; // 0.7 for overlap
          const peak = start + windowSize * 0.5;
          const end = start + windowSize * 1.3;

          // Parallax transforms
          const y = useTransform(
            scrollYProgress,
            [start, peak, end],
            [150, 0, -150]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, peak, end - 0.1, end],
            [0, 1, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, peak, end],
            [0.7, 1.1, 0.7]
          );

          // Alternate text color
          const isEven = index % 2 === 0;
          const textColor = isEven ? "text-gray-900" : "text-[#2DD4BF]";

          return (
            <motion.div
              key={service}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
              style={{
                y,
                opacity,
                scale,
              }}
            >
              <h3
                className={`text-5xl md:text-7xl lg:text-9xl font-light ${textColor} text-center leading-tight tracking-wide px-6`}
                style={{
                  textShadow: isEven 
                    ? '2px 2px 20px rgba(0,0,0,0.1)' 
                    : '2px 2px 20px rgba(45,212,191,0.3)'
                }}
              >
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
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
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden sand-texture">
      {/* Section Header - 60% slower */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.25 }}
        className="text-center mb-16 md:mb-24 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-widest uppercase">
          NUESTROS SERVICIOS
        </h2>
      </motion.div>

      {/* Services List - 60% slower, all black text */}
      <div className="container mx-auto max-w-4xl px-6 space-y-12 md:space-y-20">
        {services.map((service, index) => {
          return (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.46,
                delay: index * 0.21,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-default"
            >
              <h3
                className="text-4xl md:text-6xl lg:text-8xl font-light text-gray-900 text-center leading-tight tracking-wide transition-all duration-300"
                style={{
                  textShadow: '2px 2px 20px rgba(0,0,0,0.1)'
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

import { motion } from "framer-motion";

const services = [
  { title: "Storytelling", description: "Narrativas que conectan con tu audiencia" },
  { title: "Estrategia", description: "Planes de acción orientados a resultados" },
  { title: "Producción Audiovisual", description: "Contenido visual de alto impacto" },
  { title: "Branding", description: "Identidad de marca memorable" },
  { title: "Consultoría", description: "Asesoría experta para tu negocio" },
  { title: "Soluciones con IA", description: "Tecnología aplicada al marketing" },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden sand-texture" style={{ backgroundColor: '#272640' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 md:mb-20 px-6"
      >
        <h2 
          className="text-3xl md:text-4xl text-white tracking-widest uppercase font-medium"
          style={{ letterSpacing: '0.15em' }}
        >
          NUESTROS SERVICIOS
        </h2>
      </motion.div>

      {/* 2-Column Grid - Dark Glass Cards */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group cursor-default"
            >
              <div 
                className="rounded-lg p-8 md:p-10 h-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#006466';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <h3 
                  className="text-2xl md:text-3xl font-semibold text-white mb-3 transition-colors duration-300"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="font-light text-base md:text-lg"
                  style={{ color: '#E5E7EB' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

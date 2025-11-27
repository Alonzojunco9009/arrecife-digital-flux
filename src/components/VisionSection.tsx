import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative py-24 px-6 sand-texture overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-teal-50/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight"
            style={{
              textShadow: '0 4px 40px rgba(0,100,102,0.15), 0 2px 20px rgba(0,0,0,0.1)',
            }}
          >
            Convertimos tu visión en estructura y la estrategia en resultados.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

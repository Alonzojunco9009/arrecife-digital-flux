import { motion } from "framer-motion";

const TransitionSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl md:text-5xl lg:text-6xl font-light text-[hsl(var(--background-alt))] text-center max-w-5xl leading-tight"
      >
        Convertimos tu visión en estructura y la estrategia en resultados.
      </motion.p>
    </section>
  );
};

export default TransitionSection;

import { motion } from "framer-motion";
import fullLogo from "@/assets/arrecife-full-logo.png";

const CinematicFooter = () => {
  return (
    <footer className="relative bg-white py-20 px-6">
      <div className="container mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={fullLogo}
          alt="Arrecife"
          className="h-16 md:h-20 w-auto"
        />

        {/* Credits */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-[hsl(var(--background-alt))]/60 text-center"
        >
          Desarrollado por Arrecife IT
        </motion.p>
      </div>
    </footer>
  );
};

export default CinematicFooter;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/arrecife-logo.png";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background py-20 px-6">
      {/* Logo at top */}
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="absolute top-8 left-8 md:top-12 md:left-12 z-40">
        <img src={logo} alt="Arrecife" className="h-12 md:h-16 w-auto" />
      </motion.div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Text slides from LEFT */}
        <motion.div initial={{
        opacity: 0,
        x: -100
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 1,
        ease: "easeOut"
      }} className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            Convertimos tu visión en estructura y la estrategia en resultados.
          </h1>
        </motion.div>

        {/* Graphic block slides from RIGHT */}
        <motion.div initial={{
        opacity: 0,
        x: 100
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }} className="relative h-64 md:h-96">
          
          
          
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;
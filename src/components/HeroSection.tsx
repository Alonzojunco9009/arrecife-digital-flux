import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/arrecife-logo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden sand-texture py-20 px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-teal-50/30 animate-[gradient_8s_ease-in-out_infinite]" 
           style={{ backgroundSize: '400% 400%' }} />
      
      {/* Logo at top with bounce */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.96,
          type: "spring",
          bounce: 0.4
        }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-40"
      >
        <img src={logo} alt="Arrecife" className="h-12 md:h-16 w-auto" />
      </motion.div>

      <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center gap-8 relative z-10">
        {/* Text with enhanced blur-up, scale, and glow */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(15px)", scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight"
              style={{ 
                textShadow: '0 4px 40px rgba(0,100,102,0.15), 0 2px 20px rgba(0,0,0,0.1)' 
              }}>
            Convertimos tu visión en estructura y la estrategia en resultados.
          </h1>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Descubre Más
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
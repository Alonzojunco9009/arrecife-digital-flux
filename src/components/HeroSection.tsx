import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coralLogo from "@/assets/arrecife-coral-logo.png";

const HeroSection = () => {
  const [splashPhase, setSplashPhase] = useState<'initial' | 'contracted' | 'expanding' | 'complete'>('initial');
  const [showLogo, setShowLogo] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 400);

    const completeTimer = setTimeout(() => {
      setSplashPhase('complete');
      setShowHeadline(true);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden sand-texture py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-teal-50/30" style={{ backgroundSize: '400% 400%' }} />

      {/* Splash Overlay con tiempos acelerados */}
      <motion.div 
        className="fixed inset-0 z-50 pointer-events-none" 
        animate={{ opacity: splashPhase === 'complete' ? 0 : 1 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0" 
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", backgroundColor: "#292929" }} 
          animate={{ 
            clipPath: ["polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)"],
            opacity: [1, 1, 0]
          }} 
          transition={{ 
            clipPath: { duration: 0.6, ease: "easeOut" }, 
            opacity: { duration: 0.3, delay: 0.7 } 
          }} 
        />
        <motion.div 
          className="absolute inset-0" 
          initial={{ clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)", backgroundColor: "#f5d300" }} 
          animate={{ 
            clipPath: ["polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"],
            backgroundColor: ["#f5d300", "#292929", "#f5d300"]
          }} 
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }} 
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={showLogo ? { opacity: 1, scale: 1 } : {}} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="w-32 md:w-40 lg:w-48" 
          style={{ filter: showLogo ? 'brightness(1)' : 'brightness(0)', transition: 'filter 0.8s ease-out' }}
        >
          <img src={coralLogo} alt="Arrecife Marketing Group" className="w-full h-auto" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} 
          animate={showHeadline ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} 
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} 
          className="md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-center leading-tight max-w-5xl text-4xl"
        >
          Convertimos tu visión en estructura y la estrategia en resultados.
        </motion.h1>
      </div>
    </section>
  );
};

// ESTA ES LA LÍNEA QUE FALTABA
export default HeroSection;
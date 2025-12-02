import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coralLogo from "@/assets/arrecife-coral-logo.png";
const HeroSection = () => {
  const [splashPhase, setSplashPhase] = useState<'initial' | 'contracted' | 'expanding' | 'complete'>('initial');
  const [showLogo, setShowLogo] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  useEffect(() => {
    // Show logo at 1s
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    // Complete and show headline at 3.5s
    const completeTimer = setTimeout(() => {
      setSplashPhase('complete');
      setShowHeadline(true);
    }, 3500);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);
  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden sand-texture py-20 px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-teal-50/30" style={{
      backgroundSize: '400% 400%'
    }} />

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(200, 210, 230, 0.5) 0%, transparent 70%)',
        top: '10%',
        left: '20%',
        animation: 'blob-float 20s ease-in-out infinite'
      }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(0, 100, 102, 0.15) 0%, transparent 70%)',
        top: '40%',
        right: '15%',
        animation: 'blob-float 25s ease-in-out infinite reverse'
      }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(180, 200, 220, 0.4) 0%, transparent 70%)',
        bottom: '10%',
        left: '40%',
        animation: 'blob-float 18s ease-in-out infinite 2s'
      }} />
      </div>

      {/* Splash Overlay - Two Layer Approach with Framer Motion */}
      <motion.div className="fixed inset-0 z-50 pointer-events-none" animate={{
      opacity: splashPhase === 'complete' ? 0 : 1
    }} transition={{
      duration: splashPhase === 'complete' ? 0.5 : 0,
      ease: "easeOut"
    }}>
        {/* Layer 1: Contracting BLACK layer */}
        <motion.div className="absolute inset-0" initial={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        backgroundColor: "#292929"
      }} animate={{
        clipPath: ["polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)"],
        opacity: [1, 1, 0]
      }} transition={{
        clipPath: {
          duration: 1,
          ease: "easeOut",
          times: [0, 1]
        },
        opacity: {
          duration: 0.5,
          delay: 1.5,
          ease: "easeOut"
        }
      }} />

        {/* Layer 2: Expanding YELLOW/BLACK geometric layer */}
        <motion.div className="absolute inset-0" initial={{
        clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
        backgroundColor: "#f5d300"
      }} animate={{
        clipPath: ["polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)", "polygon(0% 0%, 55% 40%, 55% 60%, 45% 60%)", "polygon(0% 0%, 100% 0%, 55% 60%, 45% 60%)", "polygon(0% 0%, 100% 0%, 55% 60%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"],
        backgroundColor: ["#f5d300", "#292929", "#f5d300", "#292929", "#f5d300"]
      }} transition={{
        clipPath: {
          duration: 2,
          delay: 1.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        },
        backgroundColor: {
          duration: 2,
          delay: 1.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }
      }} />
      </motion.div>

      <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center gap-8 relative z-10">
      {/* Coral Logo - appears during contracted phase */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={showLogo ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1]
      }} className="w-32 md:w-40 lg:w-48" style={{
        filter: showLogo ? 'brightness(1)' : 'brightness(0)',
        transition: 'filter 1.8s ease-out'
      }}>
          <img src={coralLogo} alt="Arrecife Marketing Group" className="w-full h-auto" />
        </motion.div>


        {/* Main Headline - MASSIVE, Bold, Tight Tracking, Centered */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30,
        filter: "blur(12px)"
      }} animate={showHeadline ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      } : {}} transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }} style={{
        letterSpacing: '-0.02em',
        textShadow: '0 4px 40px rgba(0,100,102,0.15), 0 2px 20px rgba(0,0,0,0.1)'
      }} className="md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-center leading-tight max-w-5xl text-4xl">
          Convertimos tu visión en estructura y la estrategia en resultados.
        </motion.h1>
      </div>
    </section>;
};
export default HeroSection;
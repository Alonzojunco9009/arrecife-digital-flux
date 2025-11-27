import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";
import coralLogo from "@/assets/arrecife-coral-logo.png";

const HeroSection = () => {
  const [splashPhase, setSplashPhase] = useState<'initial' | 'contracted' | 'expanding' | 'complete'>('initial');
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show logo at 1s
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    // Complete and show text at 3.5s
    const completeTimer = setTimeout(() => {
      setSplashPhase('complete');
      setShowText(true);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden sand-texture py-20 px-6">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-teal-50/30"
        style={{
          backgroundSize: '400% 400%',
        }}
      />

      {/* Splash Overlay - Two Layer Approach */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          opacity: splashPhase === 'complete' ? 0 : 1,
          transition: splashPhase === 'complete' ? 'opacity 0.5s ease-out' : 'none',
        }}
      >
        {/* Layer 1: Contracting layer - starts fullscreen BLACK */}
        <div className="splash-layer-minimize absolute inset-0">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>

        {/* Layer 2: Expanding layer - triangular transitions BLACK/YELLOW */}
        <div className="splash-layer-expand absolute inset-0">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center gap-12 relative z-10">
        {/* Coral Logo - appears during contracted phase */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={showLogo ? {
            opacity: 1,
            scale: 1,
          } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="w-48 md:w-64 lg:w-80"
          style={{
            filter: showLogo ? 'brightness(1)' : 'brightness(0)',
            transition: 'filter 0.5s ease-out',
          }}
        >
          <img 
            src={coralLogo} 
            alt="Arrecife Marketing Group" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Arrecife Marketing Group - appears after splash completes */}
        {showText && (
          <div className="text-center">
            <TextEffect
              per="word"
              preset="blur"
              delay={0}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wider"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.156,
                    }
                  }
                },
                item: {
                  hidden: { 
                    opacity: 0, 
                    filter: 'blur(20px)',
                    scale: 0.8,
                    y: 30
                  },
                  visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)',
                    scale: 1,
                    y: 0,
                    transition: { 
                      duration: 1.248,
                      ease: "easeOut"
                    }
                  }
                }
              }}
            >
              Arrecife Marketing Group
            </TextEffect>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

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

      {/* Splash Overlay - Two Layer Approach with Framer Motion */}
      <motion.div 
        className="fixed inset-0 z-50 pointer-events-none"
        animate={{
          opacity: splashPhase === 'complete' ? 0 : 1,
        }}
        transition={{
          duration: splashPhase === 'complete' ? 0.5 : 0,
          ease: "easeOut",
        }}
      >
        {/* Layer 1: Contracting BLACK layer */}
        <motion.div
          className="absolute inset-0"
          initial={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#292929",
          }}
          animate={{
            clipPath: [
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
            ],
            opacity: [1, 1, 0],
          }}
          transition={{
            clipPath: {
              duration: 1,
              ease: "easeOut",
              times: [0, 1],
            },
            opacity: {
              duration: 0.5,
              delay: 1.5,
              ease: "easeOut",
            },
          }}
        />

        {/* Layer 2: Expanding YELLOW/BLACK geometric layer */}
        <motion.div
          className="absolute inset-0"
          initial={{
            clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
            backgroundColor: "#f5d300",
          }}
          animate={{
            clipPath: [
              "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
              "polygon(0% 0%, 55% 40%, 55% 60%, 45% 60%)",
              "polygon(0% 0%, 100% 0%, 55% 60%, 45% 60%)",
              "polygon(0% 0%, 100% 0%, 55% 60%, 0% 100%)",
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ],
            backgroundColor: ["#f5d300", "#292929", "#f5d300", "#292929", "#f5d300"],
          }}
          transition={{
            clipPath: {
              duration: 2,
              delay: 1.5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            },
            backgroundColor: {
              duration: 2,
              delay: 1.5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            },
          }}
        />
      </motion.div>

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

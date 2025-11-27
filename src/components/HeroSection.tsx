import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";
import coralLogo from "@/assets/arrecife-coral-logo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden sand-texture py-20 px-6">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-teal-50/30 animate-[gradient_8s_ease-in-out_infinite]"
        style={{
          backgroundSize: '400% 400%',
        }}
      />

      <div className="container mx-auto max-w-7xl flex flex-col justify-center items-center gap-12 relative z-10">
        {/* Coral Logo with fade-in */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={isVisible ? {
            opacity: 1,
            scale: 1,
          } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-48 md:w-64 lg:w-80"
        >
          <img 
            src={coralLogo} 
            alt="Arrecife Marketing Group" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Arrecife Marketing Group - Word by word animation */}
        {isVisible && (
          <div className="text-center">
            <TextEffect
              per="word"
              preset="blur"
              delay={0.8}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wider"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.065,
                    }
                  }
                },
                item: {
                  hidden: { opacity: 0, filter: 'blur(12px)' },
                  visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)',
                    transition: { duration: 0.52 }
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

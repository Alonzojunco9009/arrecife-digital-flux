import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const SplitScreenAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section ref={sectionRef} className="bg-background sand-texture relative z-5 mt-[-2px]">
      {/* Top gradient blend from dark ParallaxBreak to white */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10" style={{
      background: 'linear-gradient(to bottom, rgba(0, 100, 102, 0.15), transparent)'
    }} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-12 lg:py-16 order-2 lg:order-1">
          <div className="max-w-[60ch] space-y-6">
            {/* Main Headline */}
            <motion.h2 initial={{
            opacity: 0,
            x: -60,
            filter: "blur(8px)"
          }} animate={isVisible ? {
            opacity: 1,
            x: 0,
            filter: "blur(0px)"
          } : {}} transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" style={{
            letterSpacing: '-0.02em'
          }}>
              No, no somos una agencia.
            </motion.h2>

            {/* Body Text - Lighter weight, distinct from headline */}
            

            {/* Secondary Text - Clear separation */}
            <motion.div initial={{
            opacity: 0,
            x: -60,
            filter: "blur(8px)"
          }} animate={isVisible ? {
            opacity: 1,
            x: 0,
            filter: "blur(0px)"
          } : {}} transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4
          }} className="space-y-4 pt-4 border-t border-border/30">
              <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
                Acompañamos a emprendedores y marcas con visión{" "}
                <span className="font-semibold">estratégica.</span>
              </p>
              <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
                Y creamos entornos donde sus ideas puedan{" "}
                <span className="font-semibold">evolucionar.</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Abstract Image */}
        
      </div>
    </section>;
};
export default SplitScreenAbout;
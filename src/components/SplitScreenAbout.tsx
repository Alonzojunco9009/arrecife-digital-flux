import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SplitScreenAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-background sand-texture"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-[60ch] space-y-12">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              No, no somos una agencia.
            </motion.h2>

            {/* Body Text - Lighter weight, distinct from headline */}
            <motion.p
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
            >
              Combinamos la visión de tu negocio con una estrategia hecha a la medida para lograr tus objetivos desde el enfoque de marketing.
            </motion.p>

            {/* Secondary Text - Clear separation */}
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="space-y-6 pt-6 border-t border-border/30"
            >
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
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2 overflow-hidden"
        >
          {/* Abstract architectural/reef texture background */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                linear-gradient(160deg, #006466 0%, #1a1a2e 40%, #272640 100%)
              `,
            }}
          />
          
          {/* Geometric architectural patterns */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 40px,
                  rgba(255,255,255,0.02) 40px,
                  rgba(255,255,255,0.02) 80px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 40px,
                  rgba(0,100,102,0.1) 40px,
                  rgba(0,100,102,0.1) 80px
                )
              `,
            }}
          />

          {/* Organic reef-like shapes */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 80%, rgba(0, 100, 102, 0.5) 0%, transparent 40%),
                radial-gradient(ellipse at 80% 20%, rgba(0, 100, 102, 0.4) 0%, transparent 35%),
                radial-gradient(ellipse at 60% 60%, rgba(39, 38, 64, 0.6) 0%, transparent 45%),
                radial-gradient(ellipse at 30% 30%, rgba(0, 100, 102, 0.3) 0%, transparent 40%)
              `,
            }}
          />

          {/* Light refraction effect */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                conic-gradient(from 180deg at 50% 50%, 
                  transparent 0deg, 
                  rgba(0, 100, 102, 0.2) 60deg, 
                  transparent 120deg,
                  rgba(255,255,255,0.05) 180deg,
                  transparent 240deg,
                  rgba(0, 100, 102, 0.15) 300deg,
                  transparent 360deg
                )
              `,
            }}
          />

          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SplitScreenAbout;

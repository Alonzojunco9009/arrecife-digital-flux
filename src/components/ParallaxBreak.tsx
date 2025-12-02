import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBreak = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Multi-layer parallax - different speeds create depth
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yPatterns = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  
  const marqueeText = "ESTRATEGIA • ESTRUCTURA • RESULTADOS • CRECIMIENTO • ";

  return (
    <section 
      ref={sectionRef}
      className="relative h-[400px] md:h-[50vh] overflow-hidden z-10"
      style={{ 
        marginTop: '-2px', 
        marginBottom: '-2px',
        background: '#006466', // Solid fallback to prevent any white
      }}
    >
      {/* Layer 1: Background gradient - moves fastest */}
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{ y: yBackground }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(0, 100, 102, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(39, 38, 64, 0.7) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 100, 102, 0.5) 0%, transparent 70%),
              linear-gradient(135deg, #006466 0%, #1a1a2e 50%, #272640 100%)
            `,
          }}
        />
      </motion.div>

      {/* Layer 2: Geometric patterns - moves medium speed */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: yPatterns }}
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 40%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 60%, transparent 60%),
              linear-gradient(150deg, transparent 40%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 60%, transparent 60%)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Organic reef-like shapes */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(0, 100, 102, 0.8) 0%, transparent 25%),
              radial-gradient(circle at 90% 80%, rgba(0, 100, 102, 0.7) 0%, transparent 30%),
              radial-gradient(circle at 30% 70%, rgba(39, 38, 64, 0.5) 0%, transparent 25%),
              radial-gradient(circle at 70% 30%, rgba(0, 100, 102, 0.6) 0%, transparent 35%)
            `,
          }}
        />
      </motion.div>

      {/* Dark teal branded overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 100, 102, 0.25)',
          opacity,
        }}
      />

      {/* Layer 3: Text Marquee - moves slowest for depth perception */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{ y: yText }}
      >
        <div className="flex whitespace-nowrap animate-marquee items-center py-12">
          {[...Array(6)].map((_, i) => (
            <span 
              key={i}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mx-4"
              style={{ 
                opacity: 0.25,
                letterSpacing: '0.05em',
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top edge blend - gradients to blend with section above */}
      <div 
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(26, 26, 46, 0.5), transparent)',
        }}
      />

      {/* Bottom edge blend - gradient to blend with section below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 100, 102, 0.8), transparent)',
        }}
      />
    </section>
  );
};

export default ParallaxBreak;

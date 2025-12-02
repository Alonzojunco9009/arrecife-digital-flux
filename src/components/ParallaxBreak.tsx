import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBreak = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const marqueeText = "ESTRATEGIA • ESTRUCTURA • RESULTADOS • CRECIMIENTO • ";

  return (
    <section 
      ref={sectionRef}
      className="relative h-[400px] md:h-[50vh] overflow-hidden z-10"
      style={{ marginTop: '-2px', marginBottom: '-2px' }}
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y }}
      >
        {/* Abstract geometric/ocean texture background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(0, 100, 102, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(39, 38, 64, 0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 100, 102, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #006466 0%, #1a1a2e 50%, #272640 100%)
            `,
          }}
        />
        
        {/* Geometric patterns overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 40%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.03) 60%, transparent 60%),
              linear-gradient(150deg, transparent 40%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.03) 60%, transparent 60%)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Organic reef-like texture */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(0, 100, 102, 0.6) 0%, transparent 20%),
              radial-gradient(circle at 90% 80%, rgba(0, 100, 102, 0.5) 0%, transparent 25%),
              radial-gradient(circle at 30% 70%, rgba(39, 38, 64, 0.4) 0%, transparent 20%),
              radial-gradient(circle at 70% 30%, rgba(0, 100, 102, 0.4) 0%, transparent 30%)
            `,
          }}
        />
      </motion.div>

      {/* Dark teal branded overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 100, 102, 0.3)',
        }}
      />

      {/* Infinite Text Marquee - Vertically Centered with Padding */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none py-12">
        <div className="flex whitespace-nowrap animate-marquee items-center">
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
      </div>

      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default ParallaxBreak;

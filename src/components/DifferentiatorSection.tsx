import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DifferentiatorSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      className="min-h-screen flex items-center justify-center bg-background py-20 px-6 sand-texture"
    >
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* THE SOLUTION - Headline from LEFT - 20% slower */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground"
        >
          No, no somos una agencia.
        </motion.h2>
        
        {/* Body from RIGHT - 20% slower */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.36 }}
          className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
        >
          Combinamos la visión de tu negocio con una estrategia hecha a la medida para lograr tus objetivos desde el enfoque de marketing.
        </motion.p>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
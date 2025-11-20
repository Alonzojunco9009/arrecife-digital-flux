import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SolutionSection = () => {
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
      className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-alt))] py-20 px-6 sand-texture"
    >
      <div className="container mx-auto max-w-5xl">
        {/* THE PROBLEM - Slides from RIGHT - 20% slower */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight"
        >
          Porque en un entorno saturado de speechs de venta,{" "}
          <span className="font-medium">
            tener un gran producto ya no es suficiente.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
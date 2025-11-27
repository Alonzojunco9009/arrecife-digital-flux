import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
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
  return <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-background py-20 px-6 sand-texture">
      <div className="container mx-auto max-w-5xl space-y-8">
        <motion.p initial={{
        opacity: 0,
        x: 100
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 1.8,
        ease: "easeOut"
      }} className="md:text-2xl text-foreground font-light leading-relaxed my-0 py-[80px] text-right text-2xl">
          Acompañamos a emprendedores y marcas con visión{" "}
          <span className="font-medium">estratégica.</span>
        </motion.p>
        
        <motion.p initial={{
        opacity: 0,
        x: 100
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 1.8,
        ease: "easeOut",
        delay: 0.3
      }} className="md:text-2xl text-foreground font-light leading-relaxed text-2xl">
          Y creamos entornos donde sus ideas puedan{" "}
          <span className="font-medium">evolucionar.</span>
        </motion.p>
      </div>
    </section>;
};
export default AboutSection;
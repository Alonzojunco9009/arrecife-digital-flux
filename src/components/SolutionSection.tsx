import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Transform scroll progress to highlight intensity (0 to 1)
  const highlightProgress = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
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
  return <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-alt))] py-20 px-6 sand-texture relative z-20 -mb-[2px]">
      <div className="container mx-auto max-w-5xl">
        {/* THE PROBLEM - With Scroll-Triggered Highlight */}
        <motion.p ref={textRef} initial={{
        opacity: 0,
        x: 100
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 1.8,
        ease: "easeOut"
      }} className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight" style={{
        color: 'rgba(255, 255, 255, 0.5)'
      }}>
          Porque en un entorno saturado de{" "}
          <motion.span style={{
          color: useTransform(highlightProgress, [0, 1], ['rgba(255, 255, 255, 0.5)', '#ffffff'])
        }} className="transition-colors duration-500 font-medium">
            speechs de venta
          </motion.span>
          ,{" "}tener un{" "}
          <motion.span className="font-medium transition-colors duration-500" style={{
          color: useTransform(highlightProgress, [0, 1], ['rgba(255, 255, 255, 0.5)', '#ffffff'])
        }}>
            gran producto
          </motion.span>
          {" "}ya{" "}
          <motion.span className="font-semibold transition-colors duration-500" style={{
          color: useTransform(highlightProgress, [0, 1], ['rgba(255, 255, 255, 0.5)', '#006466'])
        }}>
            no es suficiente.
          </motion.span>
        </motion.p>
      </div>
    </section>;
};
export default SolutionSection;
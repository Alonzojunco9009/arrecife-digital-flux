import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollytellingBlockA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to control text visibility
  const text1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky Video Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-underwater-view-of-the-sea-4553-large.mp4" type="video/mp4" />
        </video>

        {/* Text Content */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          {/* Text 1 */}
          <motion.p
            style={{ opacity: text1Opacity }}
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight px-6"
          >
            Tener un gran producto ya no es suficiente.
          </motion.p>

          {/* Text 2 */}
          <motion.p
            style={{ opacity: text2Opacity }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight"
          >
            Combinamos la visión de tu negocio con una estrategia hecha a la medida.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ScrollytellingBlockA;

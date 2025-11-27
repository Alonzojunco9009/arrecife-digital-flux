import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollytellingBlockB = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beach-with-crystal-clear-water-50051-large.mp4" type="video/mp4" />
        </video>

        {/* Text Content */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          {/* Text 1 */}
          <motion.p
            style={{ opacity: text1Opacity }}
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight px-6"
          >
            Acompañamos a emprendedores y marcas con <span className="font-semibold">visión estratégica</span>.
          </motion.p>

          {/* Text 2 */}
          <motion.p
            style={{ opacity: text2Opacity }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight"
          >
            Y creamos entornos donde sus ideas puedan <span className="font-semibold">evolucionar</span>.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ScrollytellingBlockB;

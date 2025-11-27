import { motion } from "framer-motion";
import fullLogo from "@/assets/arrecife-full-logo.png";

const CinematicHero = () => {
  const title = "ARRECIFE MARKETING GROUP";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        {/* Top Center Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-24 md:top-32"
        >
          <img src={fullLogo} alt="Arrecife" className="h-16 md:h-20 w-auto" />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
          className="text-4xl md:text-6xl lg:text-8xl font-light text-white text-center leading-tight tracking-wider"
          style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default CinematicHero;

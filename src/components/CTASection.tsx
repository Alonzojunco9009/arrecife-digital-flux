import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  // Generate random characters for background animation
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomChars = Array.from({ length: 20 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-[hsl(var(--dark-bg-alt))] py-20 px-6"
    >
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link to="/contacto">
            <Button
              size="lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative overflow-hidden text-lg px-12 py-6 rounded-full bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
            >
              {/* Animated character background */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center opacity-20 overflow-hidden">
                  {randomChars.map((char, i) => (
                    <span
                      key={i}
                      className="char-rain absolute text-xs font-mono"
                      style={{
                        left: `${(i / randomChars.length) * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              )}
              
              <span className="relative z-10">
                Quiero escalar mi negocio. + INFO
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
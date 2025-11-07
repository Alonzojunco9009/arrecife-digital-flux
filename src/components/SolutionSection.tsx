import { useEffect, useRef, useState } from "react";

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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-background py-20 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-5xl font-light text-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Porque en un entorno saturado de discursos de venta,{" "}
          <span className="font-medium">
            tener un gran producto o una buena idea ya no es suficiente.
          </span>
        </h2>
        
        <p
          className={`text-xl md:text-2xl text-muted-foreground font-light transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          En Arrecife no solo damos forma a lo que haces, te acompañamos a
          escalarlo desde el enfoque de marketing.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
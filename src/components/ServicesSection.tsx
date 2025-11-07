import { useEffect, useRef, useState } from "react";

const services = [
  "Storytelling",
  "Estrategia",
  "Produccion Audiovisual",
  "Branding",
  "Consultoria",
  "iA",
];

const ServicesSection = () => {
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
      className="min-h-screen flex items-center justify-center bg-[hsl(var(--dark-bg))] py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service}
              className={`group p-8 border border-primary-foreground/20 hover:border-secondary transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,100,102,0.3)] cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl md:text-3xl font-light text-primary-foreground group-hover:text-secondary transition-colors">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
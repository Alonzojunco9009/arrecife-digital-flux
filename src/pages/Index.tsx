import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <SolutionSection />
        <DifferentiatorSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
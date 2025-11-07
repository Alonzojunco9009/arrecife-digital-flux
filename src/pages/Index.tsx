import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <SolutionSection />
        <DifferentiatorSection />
        <ServicesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
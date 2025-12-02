import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import ParallaxBreak from "@/components/ParallaxBreak";
import SplitScreenAbout from "@/components/SplitScreenAbout";
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
        <ParallaxBreak />
        <section id="about">
          <SplitScreenAbout />
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

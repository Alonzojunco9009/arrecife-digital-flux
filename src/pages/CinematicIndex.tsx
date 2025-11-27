import CinematicNavigation from "@/components/CinematicNavigation";
import CinematicHero from "@/components/CinematicHero";
import TransitionSection from "@/components/TransitionSection";
import ScrollytellingBlockA from "@/components/ScrollytellingBlockA";
import ScrollytellingBlockB from "@/components/ScrollytellingBlockB";
import CinematicServices from "@/components/CinematicServices";
import CinematicFooter from "@/components/CinematicFooter";

const CinematicIndex = () => {
  return (
    <div className="min-h-screen">
      <CinematicNavigation />
      
      <main>
        <CinematicHero />
        <TransitionSection />
        <ScrollytellingBlockA />
        <ScrollytellingBlockB />
        <CinematicServices />
      </main>

      <CinematicFooter />
    </div>
  );
};

export default CinematicIndex;

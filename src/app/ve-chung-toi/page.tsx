import LeaderModal from "@/components/LeaderModal";
import MobileMenu from "@/components/MobileMenu";
import AboutHero from "@/sections/about/AboutHero";
import BusinessPhilosophy from "@/sections/about/BusinessPhilosophy";
import CoreValues from "@/sections/about/CoreValues";
import Ecosystem from "@/sections/about/Ecosystem";
import FinraPeople from "@/sections/about/FinraPeople";
import LeaderMessage from "@/sections/about/LeaderMessage";
import Leadership from "@/sections/about/Leadership";
import Partners from "@/sections/about/Partners";
import VisionMission from "@/sections/about/VisionMission";

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <LeaderMessage />
        <VisionMission />
        <CoreValues />
        <BusinessPhilosophy />
        <FinraPeople />
        <Leadership />
        <Ecosystem />
        <Partners />
        {/* <LeaderModal /> */}
        {/* <MobileMenu /> */}
      </main>
    </>
  );
}

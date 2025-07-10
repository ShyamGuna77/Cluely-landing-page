
import ScrollAwareNavbar from "@/components/pages/navbar";
import Hero from "@/components/pages/hero";
// import BentoFeatures from "@/components/pages/feautures";
import UndetectableSection from "@/components/pages/companies";
import MeetingFeatures from "@/components/pages/meeting";
import StickyScrollRevealDemo from "@/components/pages/stickycontent";
import TurningPoint from "@/components/pages/TurningPoint";
import Footer from "@/components/pages/footer";
import Wave from "@/components/pages/wave";
export default function Home() {
  return (
    <>
      <ScrollAwareNavbar />
      <Hero />
      
      <UndetectableSection />
      <MeetingFeatures />
      <StickyScrollRevealDemo />
      <TurningPoint />
      <Footer />
      <Wave/>

    </>
  );
}

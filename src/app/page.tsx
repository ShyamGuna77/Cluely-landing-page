
import ScrollAwareNavbar from "@/components/pages/navbar";
import Hero from "@/components/pages/hero";
import BentoFeatures from "@/components/pages/feautures";
import UndetectableSection from "@/components/pages/companies";
import MeetingFeatures from "@/components/pages/meeting";
import StickyScrollRevealDemo from "@/components/pages/stickycontent";
export default function Home() {
  return (
    <>
      <ScrollAwareNavbar />
      <Hero />
      <BentoFeatures />
      <UndetectableSection />
      <MeetingFeatures />
      <StickyScrollRevealDemo />
    
    </>
  );
}

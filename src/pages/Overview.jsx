import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Services from "../components/Services";
import Process from "../components/Process";
import Industries from '../components/Industries';
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useState } from "react";
import DemoModal from "../components/DemoModal";

function Overview({ openDemo }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <>
      <Hero openDemo={openDemo} />
      <WhoWeAre />
      <Services />
      <Process />
      <Industries />
      <WhyUs />
      <CTA onOpenDemo={() => setIsDemoOpen(true)} />
        <DemoModal
  isOpen={isDemoOpen}
  onClose={() => setIsDemoOpen(false)}
/>
      <Footer />
    </>
  );
}

export default Overview;
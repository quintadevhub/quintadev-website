import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DemoModal from "./components/DemoModal";
import Overview from "./pages/Overview";
import Solutions from "./pages/Solutions";
import Integrations from "./pages/Integrations";
import Docs from "./pages/Docs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import OurStory from "./pages/OurStory";
import Team from "./pages/Team";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">

      <ScrollToTop />

      <Navbar openDemo={() => setIsDemoOpen(true)} />

      <Routes>
        <Route path="/" element={<Overview openDemo={() => setIsDemoOpen(true)} />} />
       <Route 
  path="/solutions" 
  element={<Solutions openDemo={() => setIsDemoOpen(true)} />} 
/>
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

export default App;
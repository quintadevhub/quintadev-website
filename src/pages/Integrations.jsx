import { motion } from "framer-motion";
import Footer from "../components/Footer";

import {
  SiHubspot,
  SiZapier,
  SiStripe,
  SiSlack,
  SiShopify,
  SiOpenai,
  SiGooglesheets,
  SiWhatsapp,
} from "react-icons/si";

function Integrations() {
  return (
    <>
      <div className="bg-black text-white pt-32 overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative max-w-6xl mx-auto px-6 text-center pb-32">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_60%)]"></div>

          <p className="relative text-sm text-lime-400 uppercase tracking-widest">
            Integrations
          </p>

          <h1 className="relative mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            Everything connected.
            <br />
            Nothing fragmented.
          </h1>

          <p className="relative mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We connect your CRM, payments, marketing tools, AI systems,
            dashboards, and internal software into one intelligent ecosystem.
          </p>
        </section>
        {/* ================= INTEGRATION CATEGORIES ================= */}
<section className="border-t border-white/10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <p className="text-sm text-lime-400 uppercase tracking-widest">
        Integration Categories
      </p>

      <h2 className="text-4xl font-semibold mt-6">
        We integrate across your entire business stack
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        From marketing to operations to finance — every system
        works together instead of operating in isolation.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-lime-400/40 transition">
        <h3 className="text-xl font-semibold mb-4">Marketing Systems</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          CRM platforms, email automation tools, ad platforms,
          lead capture systems, and AI chatbots.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-lime-400/40 transition">
        <h3 className="text-xl font-semibold mb-4">Operations & Delivery</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Internal dashboards, workflow engines, team collaboration
          tools, reporting systems, and automation triggers.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-lime-400/40 transition">
        <h3 className="text-xl font-semibold mb-4">Payments & Finance</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Stripe, payment gateways, subscription systems,
          invoice automation, and financial reporting integrations.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= INTEGRATION PROCESS ================= */}
<section className="border-t border-white/10 py-32">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-20">
      <p className="text-sm text-lime-400 uppercase tracking-widest">
        Our Approach
      </p>

      <h2 className="text-4xl font-semibold mt-6">
        How we build reliable integrations
      </h2>
    </div>

    <div className="space-y-16">

      <div className="grid md:grid-cols-3 gap-10 items-start">

        <div className="text-lime-400 text-5xl font-semibold">01</div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">
            System Audit
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We analyze your current tools, identify bottlenecks,
            and map data flow between systems to understand
            where automation can eliminate friction.
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-10 items-start">

        <div className="text-lime-400 text-5xl font-semibold">02</div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">
            Architecture Design
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We design a clean integration layer using APIs,
            automation engines, and secure data pipelines
            to ensure scalability and reliability.
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-10 items-start">

        <div className="text-lime-400 text-5xl font-semibold">03</div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">
            Deployment & Monitoring
          </h3>
          <p className="text-gray-400 leading-relaxed">
            After deployment, we test data accuracy, monitor
            automation triggers, and ensure your systems
            stay stable under real business conditions.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>



        {/* ================= FLOATING ICON CLOUD ================= */}
        <section className="border-t border-white/10 py-28 relative">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-semibold">
              Tools we integrate seamlessly
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">

              <FloatingIcon icon={<SiHubspot />} name="HubSpot" />
              <FloatingIcon icon={<SiStripe />} name="Stripe" />
              <FloatingIcon icon={<SiZapier />} name="Zapier" />
              <FloatingIcon icon={<SiSlack />} name="Slack" />
              <FloatingIcon icon={<SiShopify />} name="Shopify" />
              <FloatingIcon icon={<SiOpenai />} name="OpenAI" />
              <FloatingIcon icon={<SiGooglesheets />} name="Google Sheets" />
              <FloatingIcon icon={<SiWhatsapp />} name="WhatsApp" />

            </div>
          </div>
        </section>

        {/* ================= INTEGRATION FLOW VISUAL ================= */}
        <section className="border-t border-white/10 py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-lime-400 text-sm uppercase tracking-widest">
                Unified Architecture
              </p>

              <h2 className="text-4xl font-semibold mt-6">
                We design structured
                <br />
                integration layers
              </h2>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Most businesses operate with disconnected tools.
                We architect connected systems where data flows automatically,
                decisions are triggered instantly, and reporting is centralized.
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li>• CRM sync & lead automation</li>
                <li>• Payment → Dashboard reporting</li>
                <li>• AI response → CRM updates</li>
                <li>• WhatsApp & Email automation</li>
              </ul>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

              <div className="space-y-6 text-gray-300 text-sm">
                <div>Lead Form → CRM</div>
                <div>CRM → Automation Engine</div>
                <div>Automation → Slack / Email</div>
                <div>Payments → Database → Dashboard</div>
                <div>AI Agent → Customer → CRM Update</div>
              </div>

              {/* subtle animated glow */}
              <div className="absolute inset-0 rounded-3xl border border-lime-400/20 animate-pulse pointer-events-none"></div>

            </div>

          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              What proper integrations unlock
            </h2>

            <div className="grid md:grid-cols-4 gap-12 mt-16 text-gray-300">

              <div>
                <div className="text-5xl text-lime-400 font-semibold">0</div>
                <p className="mt-3 text-gray-400">Manual data transfers</p>
              </div>

              <div>
                <div className="text-5xl text-lime-400 font-semibold">Real-Time</div>
                <p className="mt-3 text-gray-400">System synchronization</p>
              </div>

              <div>
                <div className="text-5xl text-lime-400 font-semibold">360°</div>
                <p className="mt-3 text-gray-400">Business visibility</p>
              </div>

              <div>
                <div className="text-5xl text-lime-400 font-semibold">Scalable</div>
                <p className="mt-3 text-gray-400">Operational structure</p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="border-t border-white/10 py-32 text-center relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1),transparent_60%)]"></div>

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Need a custom integration?
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              If it has an API — we can connect it.
            </p>

            <a
  href="https://wa.me/918810766671?text=Hi%20QuintaDev%20Team%2C%0AI%E2%80%99d%20like%20to%20discuss%20a%20custom%20integration%20setup%20for%20my%20business.%0APlease%20share%20available%20slots."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block px-10 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition"
>
  Discuss integration
</a>
          </div>
        </section>

      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

function FloatingIcon({ icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col items-center gap-4 group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-lime-400/40 transition"
    >
      <div className="text-5xl text-gray-400 group-hover:text-lime-400 transition">
        {icon}
      </div>
      <span className="text-gray-400 group-hover:text-white transition text-sm">
        {name}
      </span>
    </motion.div>
  );
}

export default Integrations;

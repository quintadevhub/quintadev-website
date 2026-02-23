import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Docs() {
  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-24 relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_60%)]"></div>

          <h1 className="relative text-5xl font-semibold">
            Documentation
          </h1>

          <p className="relative mt-6 text-gray-400 text-lg">
            Explore how QuintaDev systems, automation engines,
            integrations, and digital infrastructure work.
          </p>

          <div className="relative mt-10">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
            />
          </div>

        </section>

        {/* ================= DOC CATEGORIES ================= */}
        <section className="border-t border-white/10 py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

            <DocCard
              title="AI & Automation"
              desc="Agents, workflows, CRM automation, triggers, and AI systems."
            />

            <DocCard
              title="Web & Software Systems"
              desc="Application architecture, SaaS builds, dashboards, and backend logic."
            />

            <DocCard
              title="Integrations"
              desc="API connections, CRM sync, payment flows, and automation layers."
            />

            <DocCard
              title="Dashboards & Reporting"
              desc="Data visibility, analytics structure, and reporting pipelines."
            />

            <DocCard
              title="System Architecture"
              desc="How QuintaDev builds scalable and connected ecosystems."
            />

            <DocCard
              title="Security & Infrastructure"
              desc="Deployment, security layers, data protection & reliability."
            />

          </div>
        </section>

        {/* ================= QUICK START ================= */}
        <section className="border-t border-white/10 py-24">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-3xl font-semibold">
              Getting Started
            </h2>

            <ul className="mt-8 space-y-4 text-gray-400">
              <li>• Understanding QuintaDev system architecture</li>
              <li>• Connecting your CRM & payment systems</li>
              <li>• Setting up AI automation triggers</li>
              <li>• Dashboard structure overview</li>
              <li>• Deployment & scaling guidelines</li>
            </ul>

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
<section className="border-t border-white/10 py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-center">
      How QuintaDev Systems Work
    </h2>

    <div className="grid md:grid-cols-4 gap-10 mt-16 text-center">

      <div>
        <div className="text-lime-400 text-lg font-semibold">01</div>
        <p className="mt-4 text-gray-400">
          Data Capture Layer
        </p>
      </div>

      <div>
        <div className="text-lime-400 text-lg font-semibold">02</div>
        <p className="mt-4 text-gray-400">
          Automation Engine
        </p>
      </div>

      <div>
        <div className="text-lime-400 text-lg font-semibold">03</div>
        <p className="mt-4 text-gray-400">
          Integration Layer
        </p>
      </div>

      <div>
        <div className="text-lime-400 text-lg font-semibold">04</div>
        <p className="mt-4 text-gray-400">
          Dashboard & Reporting
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= ARCHITECTURE PREVIEW ================= */}
<section className="border-t border-white/10 py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-semibold">
      System Architecture Example
    </h2>

    <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-gray-400">

      Lead Capture → CRM → Automation Engine → Database → Dashboard  
      <br /><br />
      Payment Gateway → Backend → Reporting Layer  
      <br /><br />
      Frontend → API Layer → Internal Admin System

    </div>

  </div>
</section>

      </div>

      <Footer />
    </>
  );
}

function DocCard({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-lime-400/40 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
      {/* <Link
        to="#"
        className="inline-block mt-6 text-sm text-lime-400 hover:underline"
      >
        Explore →
      </Link> */}
    </div>
  );
}

export default Docs;
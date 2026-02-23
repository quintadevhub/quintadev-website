import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_60%)]"></div>

          <h1 className="relative text-5xl md:text-6xl font-semibold leading-tight">
            Engineering scalable growth
            <br />
            through intelligent systems.
          </h1>

          <p className="relative mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            QuintaDev is a systems-first technology company focused on
            automation architecture, scalable software infrastructure,
            and intelligent integration ecosystems.
          </p>

          <p className="relative mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We help modern businesses transition from fragmented tools
            and manual coordination to structured, connected,
            and self-optimizing digital systems.
          </p>
        </section>

        {/* ================= THE PROBLEM ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-4xl font-semibold">
                The Hidden Cost of Operational Chaos
              </h2>

              <p className="mt-8 text-gray-400 leading-relaxed">
                As businesses scale, operational complexity increases.
                Multiple tools, scattered data sources, manual handoffs,
                delayed reporting, and repetitive tasks begin to slow growth.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Without structured architecture, teams spend more time
                coordinating than executing. Decision-making becomes reactive,
                and scalability becomes fragile.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                We solve this by replacing fragmented operations
                with engineered systems that scale predictably.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-gray-400 leading-relaxed">
              <p>
                Growth without structure creates instability.
              </p>
              <br />
              <p>
                Structure creates clarity.
              </p>
              <br />
              <p>
                Systems create scalable growth.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              Our Mission
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              Our mission is to engineer structured, automation-driven
              digital ecosystems that support sustainable business expansion.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              We aim to eliminate manual inefficiencies, unify disconnected
              tools, and empower organizations with real-time operational visibility.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Every system we design is built with scalability,
              reliability, and long-term evolution in mind.
            </p>

          </div>
        </section>

        {/* ================= WHAT MAKES US DIFFERENT ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-semibold">
              What Makes QuintaDev Different
            </h2>

            <p className="mt-8 text-gray-400 max-w-3xl mx-auto">
              We don’t deliver isolated features. We engineer complete
              operational frameworks that integrate automation,
              software, data, and infrastructure into one unified architecture.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mt-16">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <h4 className="text-lime-400 font-semibold">
                  Systems-First Thinking
                </h4>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  Every solution begins with architecture design —
                  not tool selection. Structure comes before implementation.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <h4 className="text-lime-400 font-semibold">
                  Growth-Aligned Engineering
                </h4>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  Our development decisions are aligned with business KPIs,
                  revenue operations, and long-term scalability.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <h4 className="text-lime-400 font-semibold">
                  Long-Term Infrastructure
                </h4>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  We build resilient systems designed to evolve with
                  expanding teams, increasing data volume,
                  and operational complexity.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= CORE CAPABILITIES ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-semibold text-center">
              Our Core Capabilities
            </h2>

            <p className="mt-8 text-gray-400 text-center max-w-3xl mx-auto">
              We operate at the intersection of automation,
              software engineering, and business infrastructure design.
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">

              <div>
                <strong className="text-white">AI & Automation Systems</strong>
                <br /><br />
                Intelligent workflows, conversational agents,
                CRM automation engines, and operational triggers.
                <br /><br />
                Designed to reduce repetitive workload
                and increase execution speed.
              </div>

              <div>
                <strong className="text-white">Web & Infrastructure Systems</strong>
                <br /><br />
                Scalable web applications, SaaS platforms,
                admin dashboards, and backend architecture.
                <br /><br />
                Engineered for performance, security, and extensibility.
              </div>

            </div>

          </div>
        </section>

        {/* ================= OUR PROCESS ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              Our Structured Process
            </h2>

            <p className="mt-8 text-gray-400 max-w-3xl mx-auto">
              Every project follows a systematic, architecture-led methodology
              ensuring reliability and clarity from start to deployment.
            </p>

            <div className="grid md:grid-cols-4 gap-10 mt-16 text-gray-400">

              <div>
                <div className="text-lime-400 font-semibold">01</div>
                Business & System Audit
              </div>

              <div>
                <div className="text-lime-400 font-semibold">02</div>
                Architecture & Integration Design
              </div>

              <div>
                <div className="text-lime-400 font-semibold">03</div>
                Development & Automation Implementation
              </div>

              <div>
                <div className="text-lime-400 font-semibold">04</div>
                Deployment, Testing & Optimization
              </div>

            </div>

          </div>
        </section>

        {/* ================= VISION ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              Our Vision
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              We envision a business landscape where operational
              efficiency is driven by intelligent systems rather than manual effort.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Where data moves seamlessly, automation responds instantly,
              and infrastructure scales without friction.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              QuintaDev aims to be the backbone of that transformation.
            </p>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;
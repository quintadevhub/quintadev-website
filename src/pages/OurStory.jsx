import Footer from "../components/Footer";

function OurStory() {
  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-28">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            The story behind QuintaDev.
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            QuintaDev was not built to be another development agency.
            It was built to solve a deeper problem —
            the operational chaos growing businesses face.
          </p>
        </section>

        {/* ================= REALIZATION ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-400 leading-relaxed">

            <h2 className="text-4xl font-semibold text-white">
              The Realization
            </h2>

            <p>
              While working closely with businesses, one pattern kept appearing.
              Teams were using multiple tools, spreadsheets,
              disconnected software, and manual processes.
            </p>

            <p>
              Growth was happening — but operations were breaking.
              Leads were slipping. Follow-ups were delayed.
              Data was scattered across platforms.
            </p>

            <p>
              The issue wasn’t lack of effort.
              It was lack of structured systems.
            </p>

          </div>
        </section>

        {/* ================= TURNING POINT ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              The Turning Point
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              Instead of building isolated websites or one-off tools,
              we began designing complete operational systems.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Automation pipelines. CRM engines.
              Backend integrations. Reporting dashboards.
              Connected ecosystems.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Businesses didn’t just need development.
              They needed infrastructure.
            </p>

          </div>
        </section>

        {/* ================= EARLY DAYS ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-4xl font-semibold">
                The Early Days
              </h2>

              <p className="mt-8 text-gray-400 leading-relaxed">
                QuintaDev started small.
                Focused. Intentional.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Each project became an experiment in structured architecture.
                Instead of chasing volume, we focused on depth.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                We refined processes.
                Improved automation logic.
                Built repeatable system frameworks.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-gray-400">
              Build fewer.
              <br /><br />
              Build better.
              <br /><br />
              Build scalable.
            </div>

          </div>
        </section>

        {/* ================= LESSONS ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              What We Learned
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-12 text-gray-400">

              <div>
                <strong className="text-white">Systems Beat Hacks</strong>
                <p className="mt-4">
                  Quick solutions break under scale.
                  Structured systems evolve.
                </p>
              </div>

              <div>
                <strong className="text-white">Automation Multiplies Time</strong>
                <p className="mt-4">
                  Removing manual work unlocks strategic focus.
                </p>
              </div>

              <div>
                <strong className="text-white">Clarity Drives Growth</strong>
                <p className="mt-4">
                  Clear architecture improves execution speed.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= PRESENT ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-4xl mx-auto px-6 text-gray-400 leading-relaxed">

            <h2 className="text-4xl font-semibold text-white text-center">
              Where We Are Today
            </h2>

            <p className="mt-8">
              Today, QuintaDev operates as a systems-first
              technology partner.
            </p>

            <p className="mt-6">
              We design automation frameworks,
              scalable web applications,
              backend ecosystems,
              and connected infrastructures
              that support sustainable business growth.
            </p>

            <p className="mt-6">
              We are no longer just building software.
              We are engineering operational clarity.
            </p>

          </div>
        </section>

        {/* ================= FUTURE ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              Where We’re Going
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              The future belongs to intelligent systems.
              Businesses that operate on connected,
              automation-driven ecosystems will outpace
              those relying on manual coordination.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              QuintaDev is building toward that future —
              one structured system at a time.
            </p>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold">
              Let’s build your next chapter.
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Partner with QuintaDev to create intelligent,
              scalable infrastructure.
            </p>

            <div className="mt-10">
              <button className="px-10 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition">
                Start a Conversation
              </button>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default OurStory;
import Footer from "../components/Footer";
import CareersApplyModal from "../components/CareersApplyModal";
import { useState } from "react";

function Careers() {

  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-28">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Build systems that power modern businesses.
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            At QuintaDev, we design intelligent systems, automation engines,
            and scalable infrastructure that drive measurable growth.
          </p>
        </section>

        {/* ================= WHY JOIN ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lime-400 font-semibold text-lg">
                Real Impact
              </h3>
              <p className="mt-4 text-gray-400">
                Work on automation and infrastructure systems
                that directly influence business performance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lime-400 font-semibold text-lg">
                Architecture-First Thinking
              </h3>
              <p className="mt-4 text-gray-400">
                Structured engineering, long-term scalability,
                and thoughtful design.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lime-400 font-semibold text-lg">
                Growth Environment
              </h3>
              <p className="mt-4 text-gray-400">
                Continuous learning and high-performance standards.
              </p>
            </div>

          </div>
        </section>

        {/* ================= OPEN ROLES ================= */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-semibold text-center">
              Open Positions
            </h2>

            <div className="mt-16 space-y-8">

              {/* Frontend Intern */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold">
                    Frontend Intern (React)
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Build scalable UI systems and SaaS dashboards.
                  </p>
                </div>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  Apply
                </button>
              </div>

              {/* Backend Intern */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold">
                    Backend Intern (Node / API)
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Architect automation engines and integration layers.
                  </p>
                </div>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  Apply
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ================= HIRING PROCESS ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              Our Hiring Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-16 text-gray-400">

              <div>
                <div className="text-lime-400 font-semibold">01</div>
                Application Review
              </div>

              <div>
                <div className="text-lime-400 font-semibold">02</div>
                Technical Discussion
              </div>

              <div>
                <div className="text-lime-400 font-semibold">03</div>
                Architecture Challenge
              </div>

              <div>
                <div className="text-lime-400 font-semibold">04</div>
                Final Interview
              </div>

            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold">
              Ready to build intelligent systems?
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Join QuintaDev and help shape the future of automation.
            </p>

            <div className="mt-10">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-10 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition"
              >
                Apply Now
              </button>
            </div>

          </div>
        </section>

      </div>

      <Footer />

      {/* Modal */}
      <CareersApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}

export default Careers;
import Footer from "../components/Footer";

function Team() {
  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 text-center pb-32">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            The People Behind QuintaDev
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Automation. Business Strategy. Data Intelligence.
            Our leadership team combines deep technical architecture
            with real-world business execution.
          </p>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            We don't just build software — we design systems that scale,
            structure that sustains growth, and automation that replaces chaos.
          </p>
        </section>


        {/* ================= SHIVAM ================= */}
       {/* ================= LEADERSHIP TEAM ================= */}
<section className="border-t border-white/10 py-28">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-center mb-20">
      Leadership Team
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* ================= CARD 1 ================= */}
      <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)]">

        <div className="flex flex-col items-center text-center">

          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-lime-400 mb-6 transition duration-500 group-hover:scale-105">
            <img
              src="/Shivam chandra.png"
              alt="Shivam Chandra"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h3 className="text-xl font-semibold">
            Shivam Chandra
          </h3>

          <p className="text-lime-400 text-sm mt-2">
            Founder & Systems Architect
          </p>

          {/* Expand Content */}
          <div className="mt-6 text-gray-400 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[400px]">

            Shivam founded QuintaDev with a systems-first mindset —
            replacing fragmented operations with structured,
            automation-driven infrastructure.

            <br /><br />

            With strong expertise in automation architecture,
            scalable development, and integration frameworks,
            he ensures every system built is technically sound,
            commercially aligned, and future-ready.

            <br /><br />

            Beyond development, he deeply understands business growth —
            ensuring technology directly supports revenue,
            clarity, and long-term scalability.

          </div>

        </div>
      </div>


      {/* ================= CARD 2 ================= */}
      <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)]">

        <div className="flex flex-col items-center text-center">

          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-lime-400 mb-6 transition duration-500 group-hover:scale-105">
            <img
              src="/poorva.jpg"
              alt="Poorva Gaur"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h3 className="text-xl font-semibold">
            Poorva Gaur
          </h3>

          <p className="text-lime-400 text-sm mt-2">
           Co-Founder + (CEO)
          </p>

          {/* Expand Content */}
          <div className="mt-6 text-gray-400 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[400px]">

            Poorva leads QuintaDev with a focus on AI automation
            and structured business expansion.

            <br /><br />

            She aligns automation with growth strategy —
            ensuring every system improves efficiency,
            decision-making, and profitability.

            <br /><br />

            Her leadership ensures QuintaDev builds not just
            technical systems — but scalable growth engines.

          </div>

        </div>
      </div>


      {/* ================= CARD 3 ================= */}
      <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)]">

        <div className="flex flex-col items-center text-center">

          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-lime-400 mb-6 transition duration-500 group-hover:scale-105">
            <img
              src="/ronak.jpg"
              alt="Ronak Deep"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h3 className="text-xl font-semibold">
            Ronak Deep
          </h3>

          <p className="text-lime-400 text-sm mt-2">
            Co-Founder & Data Strategist
          </p>

          {/* Expand Content */}
          <div className="mt-6 text-gray-400 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[400px]">

            Ronak specializes in data intelligence,
            analytics architecture, and structured data management.

            <br /><br />

            He transforms raw business data into meaningful
            insights that drive strategic decisions.

            <br /><br />

            His expertise ensures every QuintaDev system
            is measurable, optimized, and scalable.

          </div>

        </div>
      </div>

    </div>
  </div>
</section>


        {/* ================= QUINTA TEAM ================= */}
        <section className="border-t border-white/10 py-28 text-center">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-semibold">
              The Quintadev Team
            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed">
              Behind our leadership is a focused engineering team
              working across frontend systems, backend infrastructure,
              AI automation, integration layers, and data engineering.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Our developers, automation architects, and system engineers
              operate with precision and structure —
              ensuring every build is scalable, secure, and performance-driven.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              While we prioritize execution over spotlight,
              their expertise forms the backbone of QuintaDev’s systems.
            </p>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Team;
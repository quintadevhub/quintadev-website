import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <section className="relative bg-black text-white py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Who we are
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            We build automation systems that work
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
              The problem
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              What’s holding you back
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              Most growing businesses run on manual processes. Leads slip
              through. Follow-ups get forgotten. Data lives in spreadsheets.
              Your team spends time on repetitive work instead of growth.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                Leads fall through the cracks
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                Workflows break under pressure
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                Manual work slows everything down
              </li>
            </ul>
          </div>

          {/* RIGHT CODE MESSAGE BOX */}
          <div className="relative w-full">

            <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6 sm:p-8 text-sm sm:text-base font-mono text-gray-300 leading-relaxed shadow-[0_0_40px_rgba(132,204,22,0.08)]">

              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <pre className="whitespace-pre-wrap">
{`// QuintaDev Identity

const QuintaDev = {
  mission: "Engineer scalable automation systems",

  build: [
    "AI Automation Engines",
    "CRM & Workflow Integrations",
    "Custom Web Applications",
    "Internal Dashboards",
    "Analytics Infrastructure",
    "AI Chatbot Systems"
  ],

  philosophy: "Replace manual work with intelligent systems",

  outcome: "Growth powered by automation"
};

export default QuintaDev;`}
              </pre>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Deep Workflow Audit",
    desc: "We analyze how your team operates today — from lead capture to follow-ups — and identify inefficiencies, delays, and automation opportunities.",
  },
  {
    number: "02",
    title: "Automation Architecture",
    desc: "We design a structured system blueprint that connects your tools, workflows, dashboards, and AI agents into one unified framework.",
  },
  {
    number: "03",
    title: "System Development",
    desc: "We build automation pipelines, AI chatbots, dashboards, and backend systems that eliminate repetitive work and increase clarity.",
  },
  {
    number: "04",
    title: "Validation & Optimization",
    desc: "Before launch, we test workflows, refine logic, and optimize system performance to ensure reliability and scale-readiness.",
  },
  {
    number: "05",
    title: "Deployment & Scaling",
    desc: "Your system goes live with onboarding support, documentation, and continuous iteration for long-term growth.",
  },
];

function Process() {
  return (
    <section className="relative bg-black py-40 overflow-hidden text-white">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-28">
          <p className="uppercase tracking-widest text-gray-400 text-sm">
            Framework
          </p>
          <h2 className="text-5xl font-semibold mt-4 leading-tight">
            How QuintaDev builds intelligent systems
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A structured approach designed to remove chaos, automate operations,
            and create scalable digital infrastructure.
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10"></div>

          <div className="grid md:grid-cols-5 gap-10 relative">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative text-center ${
                  index % 2 === 0 ? "md:-mt-16" : "md:mt-16"
                }`}
              >
                {/* Ghost Number */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-bold text-white/5 -z-10">
                  {step.number}
                </div>

                {/* Glass Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-lime-400/40 transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;

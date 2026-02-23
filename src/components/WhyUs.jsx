import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">

      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(132,204,22,0.1),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE – Animated Visual */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>

  {/* Glow Effect */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-lime-400/15 rounded-full blur-3xl"></div>

  {/* Bigger Terminal */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="relative bg-[#0b0f0d] border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl w-full max-w-2xl"
  >

    {/* Terminal Header */}
    <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/10">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      <span className="ml-4 text-sm text-gray-400 font-mono">
        automation-system.js
      </span>
    </div>

    {/* Code Content */}
    <div className="p-8 font-mono text-sm md:text-base leading-7 space-y-2">

      <p>
        <span className="text-purple-400">import</span>{" "}
        <span className="text-lime-400">AIEngine</span>{" "}
        <span className="text-purple-400">from</span>{" "}
        <span className="text-yellow-400">'@quintadev/ai'</span>;
      </p>

      <p>
        <span className="text-purple-400">import</span>{" "}
        <span className="text-lime-400">CRM</span>{" "}
        <span className="text-purple-400">from</span>{" "}
        <span className="text-yellow-400">'@quintadev/crm'</span>;
      </p>

      <p className="mt-4">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">automation</span> ={" "}
        <span className="text-purple-400">async</span> () {"=>"} {"{"}
      </p>

      <p className="pl-6">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">leads</span> ={" "}
        <span className="text-purple-400">await</span>{" "}
        <span className="text-lime-400">CRM</span>.<span className="text-blue-400">getNewLeads</span>();
      </p>

      <p className="pl-6">
        <span className="text-purple-400">await</span>{" "}
        <span className="text-lime-400">AIEngine</span>.
        <span className="text-blue-400">qualify</span>(leads);
      </p>

      <p className="pl-6">
        <span className="text-purple-400">await</span>{" "}
        <span className="text-lime-400">AIEngine</span>.
        <span className="text-blue-400">triggerWorkflow</span>();
      </p>

      <p>{"}"}</p>

      <p className="mt-4">
        <span className="text-lime-400">automation()</span>;
      </p>

      {/* Blinking Cursor */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-lime-400">$</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-5 bg-lime-400"
        />
      </div>

    </div>
  </motion.div>
</motion.div>


        {/* RIGHT SIDE – Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-lime-400 uppercase tracking-widest mb-6">
            Why QuintaDev
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            We build systems
            <br />
            that actually scale.
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            Anyone can ship software. We engineer operational clarity —
            combining automation, product thinking, and real business logic.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-lime-400 rounded-full mt-3"></div>
              <p className="text-gray-300">
                We understand your business, not just your tech stack.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-lime-400 rounded-full mt-3"></div>
              <p className="text-gray-300">
                We focus on outcomes and growth, not complexity.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-lime-400 rounded-full mt-3"></div>
              <p className="text-gray-300">
                We stay with you post-launch to refine and optimize.
              </p>
            </div>

          </div>

          {/* <div className="mt-12">
            <button className="px-12 py-5 bg-lime-400 text-black font-semibold rounded-full text-lg hover:scale-105 transition">
              Learn More
            </button>
          </div> */}

        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Industries() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(132,204,22,0.08),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE - BIG STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-lime-400 uppercase tracking-widest mb-6">
            Who we build for
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            You’ve outgrown
            <br />
            manual operations.
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-md">
            If your business is generating leads but your systems can't keep up,
            you don't need more staff — you need infrastructure.
          </p>

          {/* CLICKABLE LINK */}
          <button
            onClick={() => navigate("/solutions")}
            className="mt-10 text-lime-400 font-medium cursor-pointer hover:translate-x-2 transition duration-300"
          >
            See how we help →
          </button>
        </motion.div>

        {/* RIGHT SIDE - STACKED BLOCKS */}
        <div className="space-y-12">

          {[
            {
              title: "High-ticket service brands",
              desc: "Coaches, consultants, and agencies scaling beyond founder-led operations and needing automation for clarity.",
            },
            {
              title: "Growing digital businesses",
              desc: "Web apps, SaaS tools, and ecommerce brands that require structured backend systems and analytics dashboards.",
            },
            {
              title: "Operationally overloaded teams",
              desc: "Companies stuck in spreadsheets, manual follow-ups, and disconnected tools that need centralized automation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group border-l-2 border-white/20 pl-6 hover:border-lime-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-lime-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;
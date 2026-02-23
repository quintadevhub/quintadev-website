import { motion } from "framer-motion";

const services = [
  {
    title: "AI & Automation Systems",
    desc: "We design intelligent automation systems that eliminate repetitive work and accelerate growth.",
    points: [
      "AI chatbots & conversational systems",
      "Custom AI agents & workflow automation",
      "Lead handling & CRM automation",
      "Sales & operations pipelines",
    ],
  },
  {
    title: "Web & Software Development",
    desc: "We build scalable digital infrastructure for modern businesses.",
    points: [
      "Custom web applications & SaaS platforms",
      "Admin dashboards & internal systems",
      "E-commerce (Shopify / WooCommerce)",
      "API integrations & backend systems",
    ],
  },
  {
    title: "UX, Product & Growth Design",
    desc: "We create high-converting digital experiences aligned with business goals.",
    points: [
      "UI/UX design & product interfaces",
      "Conversion-focused landing pages",
      "Analytics dashboards & data visuals",
      "Brand visuals & marketing creatives",
    ],
  },
];

function Services() {
  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.08),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-28">
          <p className="text-sm text-lime-400 uppercase tracking-widest">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Three pillars powering your business growth
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            From automation to scalable platforms and high-converting design,
            we build systems that help businesses operate smarter and grow faster.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-lime-400/40 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-lime-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 text-gray-300 text-sm">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 bg-lime-400 rounded-full"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow Layer */}
              <div className="absolute inset-0 rounded-3xl bg-lime-400/0 group-hover:bg-lime-400/5 transition duration-500 pointer-events-none"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;

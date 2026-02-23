import { motion } from "framer-motion";

function CTA({ onOpenDemo }) {

  const whatsappMessage = encodeURIComponent(
    "Hi QuintaDev Team,\nI’d like to discuss automation for my business.\nPlease share available slots."
  );

  const whatsappNumber = "918810766671"; // without +
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.12),transparent_60%)]"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#84cc16_1px,transparent_1px),linear-gradient(to_bottom,#84cc16_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          Ready to automate
          <span className="text-lime-400"> your business?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Book a free strategy call and discover how automation,
          AI systems, and structured workflows can unlock your next level of growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center gap-6 flex-wrap"
        >

          {/* BOOK FREE CONSULTATION */}
          <button
            onClick={onOpenDemo}
            className="px-12 py-5 bg-lime-400 text-black font-semibold rounded-full text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition duration-300"
          >
            Book Free Consultation
          </button>

          {/* WHATSAPP CONTACT */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border border-white/20 rounded-full text-lg hover:bg-white/10 transition duration-300"
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;
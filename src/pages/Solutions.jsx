import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import {
  FaReact,
  FaNodeJs,
  FaStripe,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiZapier,
  SiOpenai,
  SiWoocommerce,
} from "react-icons/si";

function Solutions({ openDemo }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black text-white pt-32">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 text-center pb-32">
          <p className="text-sm text-lime-400 uppercase tracking-widest">
            Solutions
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            Automation. Software. Systems.
            <br />
            Built for business growth.
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We design and build intelligent systems that eliminate manual work,
            improve decision-making, and help modern businesses scale without
            increasing operational complexity.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            {/* <button className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition">
              Explore solutions
            </button> */}

           <button
  onClick={openDemo}
  className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition"
>
  Book strategy call
</button>
          </div>
        </section>

        {/* ================= CORE PILLARS ================= */}
        <section className="border-t border-white/10 py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-32">

            {/* AI & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="text-lime-400 text-sm uppercase tracking-widest">
                  01 — AI & Automation Systems
                </p>

                <h2 className="text-4xl font-semibold mt-6">
                  Intelligent automation that replaces repetitive work
                </h2>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  We build AI-powered systems that capture leads, qualify
                  prospects, automate follow-ups, and streamline internal
                  workflows — so your team focuses on growth, not busywork.
                </p>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li>• AI chatbots & conversational agents</li>
                <li>• Lead capture & CRM automation</li>
                <li>• Email & WhatsApp automation</li>
                <li>• API & tool integrations</li>
                <li>• Custom AI agents</li>
              </ul>
            </motion.div>

            {/* Web & Software */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="text-lime-400 text-sm uppercase tracking-widest">
                  02 — Web & Software Systems
                </p>

                <h2 className="text-4xl font-semibold mt-6">
                  Custom-built digital infrastructure
                </h2>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  From scalable web applications to complete internal dashboards,
                  we develop systems that organize operations, centralize data,
                  and support revenue growth.
                </p>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li>• Custom web applications</li>
                <li>• SaaS platforms</li>
                <li>• Admin dashboards</li>
                <li>• Data systems</li>
                <li>• Ecommerce systems</li>
              </ul>
            </motion.div>

            {/* UX & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="text-lime-400 text-sm uppercase tracking-widest">
                  03 — UX & Experience Systems
                </p>

                <h2 className="text-4xl font-semibold mt-6">
                  Design that converts, not just looks good
                </h2>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  We create high-performance interfaces that improve clarity,
                  increase conversions, and align your digital experience with
                  your growth goals.
                </p>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li>• UI/UX design</li>
                <li>• Conversion landing pages</li>
                <li>• Dashboard UX systems</li>
                <li>• Product interface design</li>
                <li>• Design systems</li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* ================= OUTCOMES ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold">
              What our systems actually solve
            </h2>

            <div className="grid md:grid-cols-3 gap-12 mt-16 text-gray-300">
              <div>Reduce manual admin work by 40–70%</div>
              <div>Eliminate lead leakage</div>
              <div>Centralize scattered tools</div>
              <div>Replace spreadsheets with structured systems</div>
              <div>Improve conversion rates</div>
              <div>Enable scalable operations</div>
            </div>
          </div>
        </section>

        {/* ================= SYSTEM ARCHITECTURE ================= */}
        <section className="border-t border-white/10 py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-lime-400 text-sm uppercase tracking-widest">
                System Architecture
              </p>

              <h2 className="text-4xl font-semibold mt-6">
                We design connected systems — not isolated tools
              </h2>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Most businesses operate with disconnected tools and manual processes.
                We architect unified ecosystems where automation, data, communication,
                and reporting work together seamlessly.
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li>• Centralized data systems</li>
                <li>• Automated decision workflows</li>
                <li>• Scalable backend architecture</li>
                <li>• Integrated reporting layers</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
              <p className="text-gray-400 text-sm mb-6">Example Architecture</p>
              <div className="space-y-4 text-gray-300">
                <div>Lead Capture → CRM → Automation → Dashboard</div>
                <div>Payments → Database → Reporting</div>
                <div>Frontend → API Layer → Internal Tools</div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= INDUSTRY FIT ================= */}
        <section className="border-t border-white/10 py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold">
              Built for growth-focused companies
            </h2>

            <div className="grid md:grid-cols-3 gap-12 mt-16 text-gray-300">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                Education & Coaching Brands
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                High-Ticket Service Businesses
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                Operationally Complex Companies
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold">
              Technologies we build with
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
              <div className="flex flex-col items-center gap-4 group">
                <FaReact className="text-5xl text-gray-400 group-hover:text-[#61DBFB] transition" />
                <span className="text-gray-400 group-hover:text-white transition">React</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <FaNodeJs className="text-5xl text-gray-400 group-hover:text-[#3C873A] transition" />
                <span className="text-gray-400 group-hover:text-white transition">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <SiNextdotjs className="text-5xl text-gray-400 group-hover:text-white transition" />
                <span className="text-gray-400 group-hover:text-white transition">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <SiMongodb className="text-5xl text-gray-400 group-hover:text-[#47A248] transition" />
                <span className="text-gray-400 group-hover:text-white transition">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <FaStripe className="text-5xl text-gray-400 group-hover:text-[#635BFF] transition" />
                <span className="text-gray-400 group-hover:text-white transition">Stripe</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <SiZapier className="text-5xl text-gray-400 group-hover:text-[#FF4A00] transition" />
                <span className="text-gray-400 group-hover:text-white transition">Zapier</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <SiOpenai className="text-5xl text-gray-400 group-hover:text-white transition" />
                <span className="text-gray-400 group-hover:text-white transition">OpenAI</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <SiWoocommerce className="text-5xl text-gray-400 group-hover:text-[#96588A] transition" />
                <span className="text-gray-400 group-hover:text-white transition">WooCommerce</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="border-t border-white/10 py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Ready to build your growth system?
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Let’s design a system tailored to your business model.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <button
  onClick={openDemo}
  className="px-10 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition"
>
  Book strategy call
</button>
             <button
  onClick={() => navigate("/integrations")}
  className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
>
  Explore integrations
</button>
            </div>
          </div>
        </section>

      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default Solutions;

import { useState } from "react";
import Footer from "../components/Footer";

function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxS0rfd7G-pxZWe0V-YoACqlOTTERiTZOD1JahUp3ffFQ08NXbMAIlEwEyKceMco5I/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...formData,
    source: "Contact Page",
  }),
});

    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="bg-black text-white pt-32 min-h-screen">

        {/* HERO SECTION SAME */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-24">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Let’s build your growth system.
          </h1>
          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to automate operations, build scalable software,
            or architect intelligent infrastructure — we're ready to design
            a structured solution tailored to your business.
          </p>
        </section>

        {/* CONTACT FORM */}
        <section className="border-t border-white/10 py-28">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-semibold text-center">
              Tell us about your project
            </h2>

            <form onSubmit={handleSubmit} className="mt-16 space-y-8">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-400"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, current challenges, and goals..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-400"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-4 bg-lime-400 text-black font-semibold rounded-full hover:scale-105 transition"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </div>

              {success && (
                <p className="text-center text-lime-400 mt-4">
                  Inquiry submitted successfully.
                </p>
              )}

            </form>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Contact;
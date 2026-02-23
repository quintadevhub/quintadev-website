import { useState } from "react";

function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbxS0rfd7G-pxZWe0V-YoACqlOTTERiTZOD1JahUp3ffFQ08NXbMAIlEwEyKceMco5I/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.name,
        email: formData.email,
        company: formData.company,
        message: "Demo Request",
        source: "Navbar Demo",
      }),
    });

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      onClose();
      setSuccess(false);
      setFormData({ name: "", email: "", company: "" });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 w-full max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-white">
          Book a Demo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime-400 outline-none"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:scale-[1.02] transition"
          >
            {loading ? "Submitting..." : "Request Demo"}
          </button>

          {success && (
            <p className="text-lime-400 text-center text-sm">
              Demo request submitted!
            </p>
          )}

        </form>

      </div>
    </div>
  );
}

export default DemoModal;
import { useState } from "react";

function CareersApplyModal({ isOpen, onClose }) {

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    graduation: "",
    position: "",
    experience: "",
    address: "",
    about: "",
    resume: null
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    const reader = new FileReader();

    reader.onload = async () => {
      const base64Resume = reader.result.split(",")[1];

      try {
        await fetch("https://script.google.com/macros/s/AKfycby9WpxkQ77hY5pp8cgrXzibpVAhs1y6o8eLz8LoC70yrRQC-AjD4VBEfC-Q5WUsL5aIqg/exec", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            resume: base64Resume
          })
        });

        setSuccess(true);

        setFormData({
          name: "",
          number: "",
          email: "",
          graduation: "",
          position: "",
          experience: "",
          address: "",
          about: "",
          resume: null
        });

      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    reader.readAsDataURL(formData.resume);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-black border border-white/10 rounded-2xl w-full max-w-2xl p-8 relative overflow-y-auto max-h-[90vh]">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-white">
          Apply for Internship
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">

          <input type="text" name="name" value={formData.name} required onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <input type="tel" name="number" value={formData.number} required onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <input type="email" name="email" value={formData.email} required onChange={handleChange}
            placeholder="Email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <input type="text" name="graduation" value={formData.graduation}
            onChange={handleChange}
            placeholder="Graduation"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <select name="position" value={formData.position} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white">
            <option value="">Select Position</option>
            <option value="Frontend Intern">Frontend Intern</option>
            <option value="Backend Intern">Backend Intern</option>
          </select>

          <input type="text" name="experience" value={formData.experience}
            onChange={handleChange}
            placeholder="Experience (if any)"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <textarea name="address" value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          <textarea name="about" value={formData.about}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" />

          {/* Resume Upload */}
          <input
            type="file"
            name="resume"
            accept=".pdf"
            required
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-lime-400 file:text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {success && (
            <p className="text-lime-400 text-center mt-3 font-medium">
              Application submitted successfully 🚀
            </p>
          )}

        </form>
      </div>
    </div>
  );
}

export default CareersApplyModal;
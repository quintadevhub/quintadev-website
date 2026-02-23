import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-20 gap-y-14">

          {/* ================= LEFT BLOCK ================= */}
          <div className="space-y-6">

            {/* LOGO + NAME */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Quintadev logo.png"
                alt="QuintaDev Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-semibold tracking-tight">
                QuintaDev
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Get automation insights and system strategies delivered directly to your inbox.
            </p>

            {/* NEWSLETTER */}
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-5 py-3 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="bg-lime-400 text-black px-6 py-3 text-sm font-semibold rounded-r-full hover:brightness-110 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500">
              No spam. Only practical automation insights.
            </p>

            {/* CONTACT SECTION */}
            <div className="pt-6 flex flex-col sm:flex-row gap-10 text-sm">

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href="mailto:hr.info@quintadev.in"
                  className="text-gray-300 hover:text-lime-400 transition"
                >
                  hr.info@quintadev.in
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Contact Us
                </p>
                <a
                  href="tel:+918810766671"
                  className="text-gray-300 hover:text-lime-400 transition whitespace-nowrap"
                >
                  +91 88107 66671
                </a>
              </div>

            </div>

          </div>

          {/* ================= SOLUTIONS ================= */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Solutions
            </h4>

            <ul className="space-y-4 text-gray-300 whitespace-nowrap">
              <li><Link to="/solutions" className="hover:text-lime-400 transition">AI Automation</Link></li>
              <li><Link to="/integrations" className="hover:text-lime-400 transition">Integrations</Link></li>
              <li><Link to="/docs" className="hover:text-lime-400 transition">Documentation</Link></li>
              <li><Link to="/contact" className="hover:text-lime-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* ================= ABOUT ================= */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              About Us
            </h4>

            <ul className="space-y-4 text-gray-300 whitespace-nowrap">
              <li><Link to="/our-story" className="hover:text-lime-400 transition">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-lime-400 transition">Team</Link></li>
              <li><Link to="/careers" className="hover:text-lime-400 transition">Careers</Link></li>
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Social Media
            </h4>

            <ul className="space-y-5 text-gray-300 whitespace-nowrap">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61588267576580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <FaFacebookF className="group-hover:text-[#1877F2] transition" />
                  <span className="group-hover:text-[#1877F2] transition">Facebook</span>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/quinta_dev_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <FaInstagram className="group-hover:text-[#E4405F] transition" />
                  <span className="group-hover:text-[#E4405F] transition">Instagram</span>
                </a>
              </li>

             <li>
  <a
    href="https://www.linkedin.com/in/quinta-dev-5387103b2/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group"
  >
    <FaLinkedinIn className="transition group-hover:text-[#0A66C2]" />
    <span className="transition group-hover:text-[#0A66C2]">
      LinkedIn
    </span>
  </a>
</li>

              <li>
                <a href="https://x.com/quintadev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <FaXTwitter className="group-hover:text-white transition" />
                  <span className="group-hover:text-white transition">X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-500 text-center lg:text-left">

          <span>
            © {new Date().getFullYear()} QuintaDev. Built for growth.
          </span>

          <div className="flex flex-wrap justify-center lg:justify-end gap-6">
            <Link to="/privacy-policy" className="hover:text-lime-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-lime-400 transition">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-lime-400 transition">
              Cookies Settings
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
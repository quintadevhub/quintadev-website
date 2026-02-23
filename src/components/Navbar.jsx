import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import DemoModal from "../components/DemoModal";

function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResources, setMobileResources] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const wrapperRef = useRef(null);

  const linkClass = "hover:text-black transition";
  const activeClass = "text-black font-semibold";

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDesktopOpen(false);
        setMobileOpen(false);
        setMobileResources(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={wrapperRef}
      className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
       <Link to="/" className="flex items-center">
  <img
    src="/Quintadev logo.png"
    alt="QuintaDev Logo"
    className="h-14 md:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]"
  />
</Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] text-gray-600 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }>
              Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/solutions" className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }>
              Solutions
            </NavLink>
          </li>

          <li>
            <NavLink to="/integrations" className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }>
              Integrations
            </NavLink>
          </li>

          <li>
            <button
              onClick={() => setDesktopOpen(!desktopOpen)}
              className="hover:text-black transition"
            >
              Resources ▾
            </button>
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Link
            to="/contact"
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Contact
          </Link> */}

        <button
  onClick={() => setIsDemoOpen(true)}
  className="px-4 py-2 text-sm bg-black text-white rounded-md hover:opacity-90 transition"
>
  Book Demo
</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* DESKTOP DROPDOWN */}
      <AnimatePresence>
        {desktopOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block absolute left-0 w-full bg-gray-50 border-t border-gray-200 shadow-lg"
          >
            <div className="max-w-[1200px] mx-auto py-12 grid grid-cols-4 gap-12">

              <Link to="/docs" className="space-y-2 hover:opacity-70 transition">
                <h4 className="font-semibold text-lg">Docs</h4>
                <p className="text-sm text-gray-500">
                  Browse guides & documentation
                </p>
              </Link>

              <Link to="/about" className="space-y-2 hover:opacity-70 transition">
                <h4 className="font-semibold text-lg">About</h4>
                <p className="text-sm text-gray-500">
                  Learn about QuintaDev
                </p>
              </Link>

              <Link to="/contact" className="space-y-2 hover:opacity-70 transition">
                <h4 className="font-semibold text-lg">Contact</h4>
                <p className="text-sm text-gray-500">
                  Get in touch with our team
                </p>
              </Link>

              <Link to="/careers" className="space-y-2 hover:opacity-70 transition">
                <h4 className="font-semibold text-lg">Careers</h4>
                <p className="text-sm text-gray-500">
                  Join our growing company
                </p>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-5 text-lg font-medium">

              <NavLink to="/" onClick={() => setMobileOpen(false)}>
                Overview
              </NavLink>

              <NavLink to="/solutions" onClick={() => setMobileOpen(false)}>
                Solutions
              </NavLink>

              <NavLink to="/integrations" onClick={() => setMobileOpen(false)}>
                Integrations
              </NavLink>

              <div>
                <button
                  onClick={() => setMobileResources(!mobileResources)}
                  className="w-full text-left"
                >
                  Resources ▾
                </button>

                {mobileResources && (
                  <div className="mt-4 ml-4 flex flex-col space-y-4 text-base text-gray-600">
                    <Link to="/docs" onClick={() => setMobileOpen(false)}>Docs</Link>
                    <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                    <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
                  </div>
                )}
              </div>
            </nav>

            <div className="border-t border-gray-200 pt-5 space-y-4">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <button
  onClick={() => {
    setMobileOpen(false);
    setIsDemoOpen(true);
  }}
  className="block bg-black text-white text-center py-3 rounded-md w-full"
>
  Book Demo
</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<DemoModal
  isOpen={isDemoOpen}
  onClose={() => setIsDemoOpen(false)}
/>


    </header>
  );
}

export default Navbar;
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If we are on Home page, handle scroll transparency.
      // On other pages (Contact/Gallery), you might want it solid always.
      setScrolled(window.scrollY > 50 || location.pathname !== "/");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-6 ${
        scrolled || menuOpen
          ? "bg-violet-950 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-8xl mx-auto  flex justify-between items-center relative z-[1100]">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            className="w-12 h-12 "
            src="/Images/cat-logo.png"
            alt="Cat-logo"
          ></img>
          {/*<h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            SHRI ARYAN <span className="text-yellow-400">CATERERS</span>
          </h1>*/}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-xs hover:bg-white transition-all shadow-lg shadow-yellow-400/20"
          >
            BOOK NOW
          </Link>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay - FIXED FULL SCREEN */}
      <div
        className={`fixed inset-0 bg-violet-950 z-[1050] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-4xl font-black tracking-tighter ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-xl shadow-2xl active:scale-95 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

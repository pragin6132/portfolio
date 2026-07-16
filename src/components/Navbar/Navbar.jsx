import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "../../constants/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to highlight active link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-12 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/75 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* Brand logo */}
      <a 
        href="#hero" 
        onClick={(e) => handleLinkClick(e, "hero")}
        className="font-display font-black text-xl md:text-2xl tracking-wider select-none cursor-pointer flex items-center gap-1 group"
      >
        <span className="text-white group-hover:text-secondary transition-colors duration-300">
          PRAGIN BARATH M
        </span>
        <span className="text-primary group-hover:text-accent transition-colors duration-300">
          
        </span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-8 list-none">
        {links.map((link) => (
          <li key={link.id} className="relative">
            <a
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-sans text-[14px] font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer ${
                activeSection === link.id
                  ? "text-secondary font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </a>
            {/* Animated active underline */}
            {activeSection === link.id && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>

      {/* Resume CTA */}
      <div className="hidden lg:block">
        <a
          href={"/Pragin_Barath_Resume2026.pdf"}
          className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-primary rounded-full shadow-md group cursor-pointer"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-primary to-accent group-hover:translate-x-0 ease">
            Download Resume
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Resume
          </span>
          <span className="relative opacity-0">Resume</span>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white hover:text-secondary focus:outline-none z-50 cursor-pointer p-1"
        aria-label="Toggle Menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-[280px] h-screen bg-[#050816]/95 border-l border-white/5 backdrop-blur-xl z-40 flex flex-col justify-between p-8 pt-24 shadow-[0_0_50px_rgba(0,0,0,0.8)] lg:hidden"
          >
            <ul className="flex flex-col gap-6 list-none">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`block font-display text-lg font-semibold tracking-wide uppercase p-1.5 cursor-pointer transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-secondary border-l-2 border-secondary pl-3"
                        : "text-white/60 hover:text-white pl-3 hover:border-l-2 hover:border-white/20"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <a
                href={"/Pragin_Barath_Resume2026.pdf"}
                className="w-full text-center py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(145,94,255,0.4)] transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

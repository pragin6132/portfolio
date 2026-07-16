import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PERSONAL_INFO } from "../../constants/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#050816] py-10 px-6 md:px-12 lg:px-20 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
     <div className="flex flex-col items-center md:items-start gap-2">
  <a
    href="#hero"
    onClick={handleBackToTop}
    className="font-display font-black text-2xl tracking-wide text-white hover:text-secondary transition-colors duration-300"
  >
    PRAGIN BARATH M <span className="text-primary"> </span>
  </a>

  <p className="text-sm text-white/60">
    AI Engineer • Full Stack Developer
  </p>
</div>

        {/* Links and Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a
              href="#projects"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>

          <span className="hidden sm:inline text-white/10">|</span>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary/20 transition-all duration-300 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary/20 transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            
             
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../../constants/data";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const stats = [
    { value: "3+", label: "Projects", sectionId: "projects" },
    { value: "15+", label: "Technologies", sectionId: "skills" },
    { value: "4+", label: "Certifications", sectionId: "certifications" },
    { value: "1", label: "Internship", sectionId: "experience" },
  ];

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();

    const target = document.getElementById("projects");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-28 lg:pt-0 overflow-hidden"
    >
      <div className="z-10 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-mono text-sm md:text-base tracking-[0.2em] text-secondary uppercase mb-3">
            Hello World, I'm
          </h3>

          <h1 className="font-display font-black text-4xl sm:text-4xl sm:text-5xl md:text-7xl leading-tight mb-4">
            <span className="text-white">Pragin </span>
            <span className="text-gradient-primary">
              Barath
            </span>
          </h1>

          <div className="h-10 mb-6">
            <p className="text-lg sm:text-lg sm:text-xl md:text-3xl font-bold text-white">
              <Typewriter
                words={[
                  "AI Engineer",
                  "Full Stack Developer",
                  "Generative AI Enthusiast",
                  "LLM & RAG Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                cursorColor="#2563EB"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/60 leading-7 md:leading-7 sm:leading-8 max-w-xl mb-8">
            {PERSONAL_INFO.tagline} Specializing in deep neural
            networks, large language models, retrieval
            pipelines and responsive React dashboards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-6"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-bold text-center"
          >
            View Projects
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Pragin_Barath_Resume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/5 rounded-xl text-white font-bold text-center"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              onClick={() => handleScrollToSection(stat.sectionId)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleScrollToSection(stat.sectionId);
                }
              }}
              role="button"
              tabIndex={0}
              className="px-2.5 py-2 rounded-xl border border-white/10 bg-white/5 text-center hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
            >
              <p className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 justify-center sm:justify-start"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white/60 hover:text-secondary"
          >
            <FaGithub />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white/60 hover:text-secondary"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();

              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="text-2xl text-white/60 hover:text-secondary"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();

            document
              .getElementById("about")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="text-white/40 hover:text-white flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest mb-1">
            Scroll Down
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaChevronDown />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
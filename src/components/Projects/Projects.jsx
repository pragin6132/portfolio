import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../constants/data";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Relative coordinates from card center (-0.5 to 0.5)
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Calculate tilt rotations (max 8 degrees)
  const rotateX = coords.y * -16;
  const rotateY = coords.x * 16;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "none" : "transform 0.5s ease"
      }}
      className="glow-card flex flex-col h-full overflow-hidden select-none group"
    >
      {/* visual overlay representing project screenshot placeholder */}
      <div
  className="w-full h-36 md:h-40 overflow-hidden"
  style={{ transform: "translateZ(20px)" }}
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

      {/* Body content */}
      <div 
        className="p-4 md:p-5 flex flex-col flex-1 justify-between gap-3"
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-extrabold text-lg text-white group-hover:text-secondary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-sans text-sm text-white/60 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech tags and Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-bold text-primary bg-white border border-primary px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="border-white/5 w-full" />

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-white/80 hover:text-white cursor-pointer transition-colors duration-300"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            
            {project.liveUrl && project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary rounded-lg text-xs font-semibold text-white cursor-pointer transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-semibold text-white/30 cursor-not-allowed select-none"
                title="Staging deployment coming soon"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span>Private</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {visibleProjects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} index={idx} />
        ))}
      </div>

      {!showAll && PROJECTS.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            id="view-all-projects-btn"
            onClick={() => setShowAll(true)}
            className="font-sans text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-300"
          >
            View All Projects →
          </button>
        </div>
      )}
    </section>
  );
}

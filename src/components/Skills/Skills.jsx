import { motion } from "framer-motion";
import { SKILLS } from "../../constants/data";

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Skills & <span className="text-gradient-primary">Expertise</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      {/* Grid containing categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILLS.map((cat, index) => (
          <motion.div
            key={cat.category}
            variants={cardVariants}
            className="glow-card p-6 rounded-2xl flex flex-col justify-start w-full group"
          >
            <h3 className="font-display font-bold text-lg text-white mb-6 border-b border-white/5 pb-3 flex items-center justify-between">
              <span>{cat.category}</span>
              <span className="text-[10px] uppercase tracking-wider text-secondary bg-secondary/5 px-2 py-0.5 border border-secondary/15 rounded-md font-mono">
                {cat.items.length} Techs
              </span>
            </h3>

            {/* List of sub-skills */}
            <div className="flex flex-col gap-4">
              {cat.items.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="flex flex-col gap-1.5 group/item">
                    <div className="flex items-center">
                      {/* Icon + Label */}
                      <div className="flex items-center gap-2.5">
                        <IconComponent 
                          className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-125"
                          style={{ color: skill.color }}
                        />
                        <span className="font-sans text-sm font-medium text-white/80 group-hover/item:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      
                      
                    </div>

                    
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

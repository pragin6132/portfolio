import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";
import { PERSONAL_INFO } from "../../constants/data";

export default function About() {
  const { about } = PERSONAL_INFO;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          About <span className="text-gradient-primary">Me</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 p-6 md:p-8 glow-card rounded-2xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 border border-secondary/20 rounded-full">
              {about.status}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white">
            Hello, I am {about.name}
          </h3>

          <p className="font-sans text-sm md:text-base text-white/75 leading-relaxed">
            {about.bio}
          </p>

          <hr className="border-white/5 my-2" />

          {/* Education Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
              <FaGraduationCap className="text-primary w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-semibold text-white/90">Degree</h4>
                <p className="font-sans text-xs text-white/60">{about.degree}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
              <FaAward className="text-primary w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-semibold text-white/90">University</h4>
                <p className="font-sans text-xs text-white/60">{about.institution}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300 md:col-span-2">
              <FaCalendarAlt className="text-primary w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-semibold text-white/90">Duration</h4>
                <p className="font-sans text-xs text-white/60">{about.duration}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Focus Areas */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <h4 className="font-display font-bold text-xl text-white select-none">
            Core Focus Areas
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.focusAreas.map((focus, index) => (
              <motion.div
                key={focus}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group"
              >
                <span className="font-sans text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors">
                  {focus}
                </span>
                
                {/* Visual bullet dot indicator */}
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

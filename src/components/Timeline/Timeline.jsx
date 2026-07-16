import { motion } from "framer-motion";

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Glowing node point on left border */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#050816] border-[3px] border-primary group-hover:border-secondary shadow-[0_0_10px_rgba(145,94,255,0.4)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300 z-10" />

          {/* Card Layout */}
          <div className="glow-card p-6 rounded-2xl relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display font-extrabold text-lg md:text-xl text-white group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/60">{item.subtitle}</p>
              </div>
              <span className="shrink-0 text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
                {item.duration}
              </span>
            </div>

            {item.description && (
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
                {item.description}
              </p>
            )}
            {item.specialization && (
  <div className="mb-4">
    <p className="text-sm text-secondary font-semibold">
      Specialization
    </p>

    <p className="text-sm text-white/70">
      {item.specialization}
    </p>
  </div>
)}

{item.affiliation && (
  <div className="mb-4">
    <p className="text-sm text-secondary font-semibold">
      University
    </p>

    <p className="text-sm text-white/70">
      {item.affiliation}
    </p>
  </div>
)}

{item.coursework && (
  <div className="flex flex-wrap gap-2">
    {item.coursework.map((course) => (
      <span
        key={course}
        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs"
      >
        {course}
      </span>
    ))}
  </div>
)}

            {item.points && (
              <ul className="list-disc pl-4 space-y-2 text-sm text-white/60 font-sans">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="hover:text-white transition-colors duration-200">
                    {pt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

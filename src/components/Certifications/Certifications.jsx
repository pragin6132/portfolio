import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { CERTIFICATIONS } from "../../constants/data";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Licenses & <span className="text-gradient-secondary">Certifications</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl glass-panel flex flex-col justify-between gap-5 relative group cursor-pointer hover:border-secondary/40 hover:shadow-[0_10px_35px_-10px_rgba(0,229,255,0.2)] transition-all duration-300"
            onClick={() => setSelectedCert(cert)}
          >
            <img
  src={cert.image}
  alt={cert.title}
  className="w-full h-44 object-cover rounded-xl border border-white/10 mb-4 group-hover:scale-105 transition-all duration-300"
/>
            {/* Top row icon & date */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                <FaAward className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-white/40">{cert.date}</span>
            </div>

            {/* Content info */}
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-sm md:text-base text-white/95 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="font-sans text-xs text-white/60">{cert.issuer}</p>
            </div>

            <hr className="border-white/5" />

            {/* Action button */}
            <button 
              className="text-left font-sans text-xs font-semibold text-secondary group-hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(cert);
              }}
            >
              <span>Preview Badge</span>
              <FaExternalLinkAlt className="w-2.5 h-2.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Custom Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl p-8 rounded-3xl bg-[#0c0f20] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Award badge */}
              <div className="flex justify-center mt-4">
                <div className="w-16 h-16 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary animate-[pulse_2s_infinite]">
                  <FaAward className="w-8 h-8" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-secondary uppercase font-semibold">
                  Verified Achievement
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight leading-tight px-4">
                  {selectedCert.title}
                </h3>
                <p className="font-sans text-sm text-white/70">
                  Issued by <span className="font-bold text-white">{selectedCert.issuer}</span>
                </p>
              </div>

              {/* Verification Info / Mock Design */}
              {/* Certificate Details */}
<div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/80 text-left space-y-3">

  <div className="flex justify-between">
    <span className="text-white/50">Recipient</span>
    <span className="font-semibold text-white">
      Pragin Barath
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-white/50">Issued By</span>
    <span className="font-semibold text-white">
      {selectedCert.issuer}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-white/50">Completed</span>
    <span className="font-semibold text-white">
      {selectedCert.date}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-white/50">Status</span>
    <span className="font-semibold text-green-400">
      ✅ Verified
    </span>
  </div>

</div>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 py-3 border border-white/10 hover:border-white/20 bg-white/5 rounded-xl font-bold text-sm text-white cursor-pointer transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.link}
                    target="_blank"
                   rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold text-sm rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(145,94,255,0.4)] text-center flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

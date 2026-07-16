import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
  "Initializing neural nodes...",
  "Loading vector indexing...",
  "Configuring GenAI pipelines...",
  "Optimizing interface layouts...",
  "Ready."
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(LOADING_STEPS[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const stepIncrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500); // Wait for fade out
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepIdx = Math.min(
      Math.floor((progress / 100) * LOADING_STEPS.length),
      LOADING_STEPS.length - 1
    );
    setLoadingText(LOADING_STEPS[stepIdx]);
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Glowing Orb Animation */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 bg-primary/20 blur-2xl rounded-full"
            />
            <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-secondary animate-spin" />
          </div>

          {/* Progress Percent */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-display font-extrabold tracking-widest text-gradient-primary mb-3"
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Loading status bar */}
          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Text transitions */}
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs tracking-widest uppercase font-mono text-white/70"
          >
            {loadingText}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

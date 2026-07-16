import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 400,
    damping: 30,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 400,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [isMobile, mouseX, mouseY]);

  // Hide custom cursor on mobile/tablet
  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[999999] bg-[#111827] shadow-[0_1px_4px_rgba(17,24,39,0.4)]"
    />
  );
}
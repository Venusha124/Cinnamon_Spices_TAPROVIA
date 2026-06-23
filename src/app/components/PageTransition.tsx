"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} style={{ display: "contents" }}>
        
        {/* The Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>

        {/* The "Enter" Curtain (Sweeps away when page loads) */}
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: "-100vh" }}
          exit={{ top: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#030303",
            zIndex: 99998,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0
          }}>
            TAPRO<span className="italic">VIA</span>
          </h1>
        </motion.div>

        {/* The "Exit" Curtain (Sweeps in when user clicks a link) */}
        <motion.div
          initial={{ top: "100vh" }}
          animate={{ top: "100vh" }}
          exit={{ top: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#030303",
            zIndex: 99998,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0
          }}>
            TAPRO<span className="italic">VIA</span>
          </h1>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}

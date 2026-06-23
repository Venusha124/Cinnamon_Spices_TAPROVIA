"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedManifesto.module.css";

const manifestoText = "For over a century, our family has stood as the guardians of the world's finest spice. We believe that true luxury is born from uncompromising purity, profound respect for the earth, and an obsession with perfection. This is not just cinnamon; this is our legacy.";

export default function AnimatedManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate coordinates relative to the text container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.manifestoWrapper}>
          <motion.div 
            className={styles.labelContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.line}></span>
            <span className={styles.label}>The Taprovia Ethos</span>
            <span className={styles.line}></span>
          </motion.div>
          
          <div 
            ref={containerRef}
            className={styles.spotlightContainer}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* The hidden text acting as the structure */}
            <h2 className={styles.manifestoTextGhost}>
              {manifestoText}
            </h2>

            {/* The glowing text that appears under the cursor */}
            <motion.h2 
              className={styles.manifestoTextGlow}
              animate={{
                background: isHovering 
                  ? `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(210, 180, 140, 1) 0%, rgba(210, 180, 140, 0) 100%)`
                  : `radial-gradient(circle 0px at ${mousePosition.x}px ${mousePosition.y}px, rgba(210, 180, 140, 1) 0%, rgba(210, 180, 140, 0) 100%)`
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            >
              {manifestoText}
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}

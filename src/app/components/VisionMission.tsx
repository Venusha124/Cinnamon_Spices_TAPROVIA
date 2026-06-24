"use client";

import { motion } from "framer-motion";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      
      {/* Vision Panel */}
      <div className={`${styles.panel} ${styles.visionPanel}`}>
        <span className={styles.watermark}>V</span>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className={styles.label}>Our Vision</span>
          <h2 className={styles.title}>The <span>Gold</span> Standard.</h2>
          <p className={styles.description}>
            To be the world's most revered purveyor of authentic Ceylon cinnamon, preserving centuries of agrarian heritage while setting the ultimate benchmark for global spice luxury.
          </p>
        </motion.div>
      </div>

      {/* Mission Panel */}
      <div className={`${styles.panel} ${styles.missionPanel}`}>
        <span className={styles.watermark}>M</span>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className={styles.label}>Our Mission</span>
          <h2 className={styles.title}>Unbroken <span>Purity</span>.</h2>
          <p className={styles.description}>
            To ethically steward the fertile highlands of Ceylon, forging an unbroken bond of purity from soil to table through sustainable practices, artisanal mastery, and uncompromising dedication to quality.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

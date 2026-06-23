"use client";

import { motion } from "framer-motion";
import styles from "./FounderQuote.module.css";

export default function FounderQuote() {
  return (
    <section className={styles.section}>
      <div className={styles.parallaxBg}></div>
      <div className={styles.overlay}></div>
      
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <h2 className={styles.quoteText}>
            We do not just grow cinnamon; we steward a centuries-old legacy. Our promise is an unbroken bond of purity from our soil to your table.
          </h2>
          
          <div className={styles.signatureBlock}>
            <span className={styles.signatureName}>Shamalka Edirisinghe</span>
            <span className={styles.signatureTitle}>Co-Founder, 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

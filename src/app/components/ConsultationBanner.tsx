"use client";

import { motion } from "framer-motion";
import styles from "./ConsultationBanner.module.css";
import Link from "next/link";

export default function ConsultationBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.parallaxBg}></div>
      <div className={styles.overlay}></div>
      
      <div className="container relative z-10">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className={styles.label}>Exclusive Service</span>
          <h2 className={styles.title}>Book a Virtual Consultation</h2>
          <p className={styles.description}>
            Connect directly with our sourcing directors to discuss bespoke private labeling, reserve grade allocations, and bulk export logistics tailored to your luxury brand.
          </p>
          
          <Link href="mailto:wholesale@taprovia.com" className={styles.ctaBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.calendarIcon}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

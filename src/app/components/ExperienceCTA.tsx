"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./ExperienceCTA.module.css";

export default function ExperienceCTA() {
  return (
    <section className={styles.section}>
      <Image 
        src="/images/cinnamon_artisan.png" 
        alt="Taprovia Cinnamon Artisan" 
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>
      
      {/* Decorative Marquee */}
      <div className={styles.marqueeContainer}>
        <motion.div 
          className={styles.marqueeText}
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          LEGACY TAPROVIA LEGACY TAPROVIA
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.glassBox}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.label}>The Journey Culminates</span>
        
        <h2 className={styles.title}>
          Taste the <br/><span>Legacy.</span>
        </h2>
        
        <p className={styles.description}>
          From the mist-draped highlands of Ceylon directly to your table. Experience the unparalleled purity, warmth, and aroma of the world's finest cinnamon.
        </p>
        
        <div className={styles.buttonContainer}>
          <Link href="/products" className={styles.circleButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <span className={styles.buttonText}>Explore Collection</span>
        </div>
      </motion.div>
    </section>
  );
}

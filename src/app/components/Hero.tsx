"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.css';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgContainer}>
        <Image
          src="/hero-bg.png"
          alt="Premium Cinnamon Background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <motion.div 
        className={`container ${styles.content}`}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={textRevealVariant} className={styles.subtitle}>
          <span className={styles.line}></span>
          Direct from Ceylon
          <span className={styles.line}></span>
        </motion.div>
        
        <motion.h1 variants={textRevealVariant} className={styles.title}>
          Pure Origins. <br />
          <span className="italic text-muted">Extraordinary</span> Taste.
        </motion.h1>
        
        <motion.p variants={textRevealVariant} className={styles.description}>
          Experience the world&apos;s most guarded artisanal secret, sustainably harvested from the sovereign highlands of Sri Lanka.
        </motion.p>
        
        <motion.div variants={textRevealVariant} className={styles.actions}>
          <button className={styles.primaryButton}>
            <span>Explore the Showroom</span>
          </button>
          
          <Link href="/about" className={styles.secondaryAction}>
            <span className={styles.secondaryText}>Our Legacy</span>
            <div className={styles.playIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </motion.div>
      
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Descend</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

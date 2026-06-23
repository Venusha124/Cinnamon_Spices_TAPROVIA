"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import styles from "../stories/Stories.module.css";

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

interface AnimatedPageHeaderProps {
  label: string;
  titlePrefix?: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  bgImage: string;
  bgAlt: string;
}

export default function AnimatedPageHeader({
  label,
  titlePrefix = "",
  titleHighlight,
  titleSuffix = "",
  description,
  bgImage,
  bgAlt,
}: AnimatedPageHeaderProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <motion.div
        className={styles.heroContent}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={textRevealVariant}
          className={styles.heroLabel}
          style={{ color: '#d2b48c', textShadow: '0 2px 10px rgba(0,0,0,1)', fontWeight: 800 }}
        >
          {label}
        </motion.span>
        <motion.h1 variants={textRevealVariant} className={styles.heroTitle}>
          {titlePrefix} <span className="italic text-muted">{titleHighlight}</span> {titleSuffix}
        </motion.h1>
        <motion.p variants={textRevealVariant} className={styles.heroDescription}>
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

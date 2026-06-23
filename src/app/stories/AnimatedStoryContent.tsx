"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import styles from "./Stories.module.css";
import AnimatedPageHeader from "../components/AnimatedPageHeader";

// Animation Variants
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

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AnimatedHero() {
  return (
    <AnimatedPageHeader 
      label="The Taprovia Legacy"
      titlePrefix="A Century of"
      titleHighlight="Mastery."
      description="Under the stewardship of the 4th Generation, Taprovia continues to preserve the sacred, ancient art of True Ceylon Cinnamon cultivation in the misty highlands of Sri Lanka."
      bgImage="/images/stories_hero_estates.png"
      bgAlt="Misty Ceylon Estates"
    />
  );
}

export function AnimatedNarrative() {
  return (
    <section className={styles.narrativeSection}>
      <div className={styles.narrativeGrid}>
        <motion.div
          className={styles.narrativeText}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={fadeUpVariant} className={styles.narrativeTitle}>
            The 4th Generation <span className="italic text-muted">Conducting the Craft.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className={styles.narrativeParagraph}>
            For over a hundred years, our family has walked these estates. Today, the 4th generation is conducting the entire symphony of cultivation. We refuse to automate what must be felt by hand.
          </motion.p>
          <motion.p variants={fadeUpVariant} className={styles.narrativeParagraph}>
            The traditional 45-degree cut, the delicate peeling of the inner bark, and the sun-curing process are all orchestrated by masters whose skills were passed down from their great-grandparents. This unbroken lineage is the secret to the unmatched sweetness and zero-coumarin purity of our Alba quills.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.narrativeImageWrapper}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src="/images/stories_4th_gen_artisan.png"
            alt="4th Generation Master Artisan"
            fill
            className={styles.narrativeImage}
          />
        </motion.div>
      </div>
    </section>
  );
}

export function AnimatedChapter() {
  return (
    <section className={styles.chapterSection}>
      <div className={styles.chapterBackground}>
        <Image
          src="/images/stories_alchemy.png"
          alt="Cinnamon Oil Distillation"
          fill
          className={styles.chapterImage}
        />
        <div className={styles.chapterOverlay}></div>
      </div>

      <motion.div
        className={styles.chapterContent}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.span variants={fadeUpVariant} className={styles.chapterNumber}>
          CHAPTER 01
        </motion.span>
        <motion.h2 variants={fadeUpVariant} className={styles.chapterTitle}>
          The Alchemy of Extraction
        </motion.h2>
        <motion.p variants={fadeUpVariant} className={styles.chapterText}>
          Beyond the bark lies the essence. Using ancient copper distillation techniques refined over four generations, we gently coax the therapeutic, pure oils from the cinnamon leaves and bark. It is a slow, methodical process that yields an intensely potent extract, capturing the true soul of the spice.
        </motion.p>
      </motion.div>
    </section>
  );
}

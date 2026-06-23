"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSlider.module.css";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className={styles.sliderSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Transformation</span>
          <h2 className={styles.title}>
            From Bark to <span className="italic text-muted">Gold.</span>
          </h2>
          <p className={styles.description}>
            Drag the slider to reveal the delicate transformation of raw cinnamon bark into our ultra-premium Alba quills.
          </p>
        </div>

        <motion.div 
          className={styles.sliderContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {/* Background Image (After - Alba Quills) */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/alba_quills_premium.png"
              alt="Golden Alba Quills"
              fill
              className={styles.image}
            />
            <div className={styles.imageLabelRight}>The Final Quill</div>
          </div>

          {/* Foreground Image (Before - Raw Bark) with Clip Path */}
          <div 
            className={styles.imageWrapperForeground}
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="/images/cinnamon_artisan.png"
              alt="Raw Cinnamon Bark Peeling"
              fill
              className={styles.image}
            />
            <div className={styles.imageLabelLeft}>The Raw Craft</div>
          </div>

          {/* Custom Slider Handle */}
          <div 
            className={styles.sliderHandle}
            style={{ left: `${sliderPosition}%` }}
          >
            <div className={styles.sliderLine}></div>
            <div className={styles.sliderButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          {/* Hidden HTML Range Input for accessibility and simple touch/mouse handling */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleDrag}
            className={styles.sliderInput}
          />
        </motion.div>
      </div>
    </section>
  );
}

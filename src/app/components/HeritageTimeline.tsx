"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./HeritageTimeline.module.css";

const timelineData = [
  {
    year: "1924",
    title: "The Founding Roots",
    description: "Our great-grandfather planted the first true Ceylon Cinnamon tree in the misty Balapitiya highlands, establishing a commitment to purity that defines Taprovia.",
    image: "/images/stories_hero_estates.png",
  },
  {
    year: "1950",
    title: "Perfecting the Craft",
    description: "The 2nd generation introduced meticulous hand-peeling techniques, ensuring only the finest, most delicate inner bark is harvested for our Alba quills.",
    image: "/images/cinnamon_artisan.png",
  },
  {
    year: "1990",
    title: "Sustainable Alchemy",
    description: "We pioneered organic farming methods and established our copper distillation process, gently extracting the potent, therapeutic oils from cinnamon leaves.",
    image: "/images/stories_alchemy.png",
  },
  {
    year: "Today",
    title: "The Sovereign Benchmark",
    description: "Now guided by the 4th generation, Taprovia remains the world's standard for ultra-premium, zero-coumarin True Ceylon Cinnamon.",
    image: "/images/alba_quills_premium.png",
  },
];

export default function HeritageTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.timelineSection} ref={containerRef}>
      <div className="container relative">
        <div className={styles.header}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Legacy
          </motion.span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Century of <span className="italic text-muted">Heritage.</span>
          </motion.h2>
        </div>

        <div className={styles.timelineWrapper}>
          {/* Scroll-linked progress line */}
          <div className={styles.lineBackground}>
            <motion.div 
              className={styles.lineFill} 
              style={{ height: lineHeight }} 
            />
          </div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={item.year} className={`${styles.timelineItem} ${isEven ? styles.itemEven : styles.itemOdd}`}>
                
                {/* Massive Watermark Year */}
                <div className={styles.watermarkYear}>
                  {item.year}
                </div>

                <div className={styles.contentNode}>
                  {/* Glowing Node on the line */}
                  <motion.div 
                    className={styles.nodePoint}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                  />

                  <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className={styles.image}
                      />
                      <div className={styles.yearBadge}>{item.year}</div>
                    </div>
                    <div className={styles.textContent}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

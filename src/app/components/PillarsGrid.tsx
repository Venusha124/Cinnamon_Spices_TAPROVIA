"use client";

import { motion } from "framer-motion";
import styles from "./PillarsGrid.module.css";
import Image from "next/image";

const pillars = [
  {
    title: "Uncompromising Purity",
    description: "Every quill is guaranteed zero-coumarin, harvested only from true Cinnamomum verum.",
    image: "/images/alba_cinnamon_grade.png",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Sustainable Harvest",
    description: "Our forests are cultivated using ancestral organic practices, honoring the earth.",
    image: "/images/cinnamon_estate.png",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    title: "4th Gen Heritage",
    description: "A century of guarded secrets and meticulous hand-crafting passed down.",
    image: "/images/stories_4th_gen_artisan.png",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    title: "Global Sovereign",
    description: "From our misty highlands directly to the finest kitchens in the world.",
    image: "/images/hero-bg.png",
    colSpan: 2,
    rowSpan: 1,
  }
];

export default function PillarsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Taprovia Standard</span>
          <h2 className={styles.title}>
            Our Four <span className="italic text-muted">Pillars.</span>
          </h2>
        </div>

        <div className={styles.bentoGrid}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`${styles.bentoCard} ${pillar.colSpan === 2 ? styles.colSpan2 : ''} ${pillar.rowSpan === 2 ? styles.rowSpan2 : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

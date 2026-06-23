"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ProcessShowcase.module.css";

const processSteps = [
  {
    id: "cultivation",
    title: "Cultivation",
    description: "Nurtured in the rich, mineral-dense soils of the Balapitiya highlands. Our trees are grown naturally, free from synthetic chemicals.",
    image: "/images/plantation.png",
  },
  {
    id: "harvesting",
    title: "Harvesting",
    description: "Only the finest branches are selected at dawn, ensuring the bark retains its optimal moisture and volatile oil content.",
    image: "/images/stories_hero_estates.png",
  },
  {
    id: "peeling",
    title: "The Art of Peeling",
    description: "A highly skilled, dying art. Our master artisans delicately strip the outer bark to extract the sweet, ultra-thin inner bark.",
    image: "/images/cinnamon_artisan.png",
  },
  {
    id: "curing",
    title: "Curing & Quills",
    description: "The delicate layers are rolled into perfect 'Alba' quills and naturally air-dried under the warm Sri Lankan sun.",
    image: "/images/alba_quills_premium.png",
  },
  {
    id: "distillation",
    title: "Alchemy",
    description: "Using traditional copper stills, we gently extract the potent, therapeutic essential oils from the cinnamon leaves and bark.",
    image: "/images/stories_alchemy.png",
  }
];

export default function ProcessShowcase() {
  const [activeStep, setActiveStep] = useState(processSteps[0].id);

  const activeData = processSteps.find(step => step.id === activeStep) || processSteps[0];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Taprovia Process</span>
          <h2 className={styles.title}>
            Mastery in Every <span className="italic text-muted">Step.</span>
          </h2>
        </div>

        <div className={styles.showcaseWrapper}>
          {/* Left Column: Interactive List */}
          <div className={styles.listColumn}>
            {processSteps.map((step) => (
              <div 
                key={step.id}
                className={`${styles.listItem} ${activeStep === step.id ? styles.listItemSelected : ""}`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <h3 className={styles.stepTitle}>{step.title}</h3>
                
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.stepDescriptionWrapper}
                    >
                      <p className={styles.stepDescription}>{step.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Image Reveal */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={styles.imageInner}
                >
                  <Image
                    src={activeData.image}
                    alt={activeData.title}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

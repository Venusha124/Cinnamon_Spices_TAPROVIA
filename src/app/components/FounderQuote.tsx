"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FounderQuote.module.css";

const quotes = [
  {
    id: 1,
    text: "We do not just grow cinnamon; we steward a centuries-old legacy. Our promise is an unbroken bond of purity from our soil to your table.",
    name: "Shamalka Edirisinghe",
    title: "Co-Founder, 2026"
  },
  {
    id: 2,
    text: "We don't simply trade in spices; we share a piece of our heritage. It is a dedication to sustainable perfection, echoing the vibrant pulse of our terroir in every harvest.",
    name: "Wilhelm Yohan Randy",
    title: "Co-Founder, 2026"
  },
  {
    id: 3,
    text: "Innovation is the vessel through which our heritage travels. We fuse the timeless artistry of our highlands with modern vision, bringing the authentic essence of TAPROVIA to the world.",
    name: "Venusha Weerasinghe",
    title: "Marketing & IT Operations"
  }
];

export default function FounderQuote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.parallaxBg}></div>
      <div className={styles.overlay}></div>
      
      <div className="container">
        <div className={styles.quotesContainer}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className={styles.content}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <h2 className={styles.quoteText}>
                "{quotes[currentIndex].text}"
              </h2>
              
              <div className={styles.signatureBlock}>
                <span className={styles.signatureName}>{quotes[currentIndex].name}</span>
                <span className={styles.signatureTitle}>{quotes[currentIndex].title}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Animate counter from 0 to 100 over 2 seconds
    const duration = 2000;
    const interval = 20; // ms per frame
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      
      // Use easeOut-like curve for the numbers
      const easeProgress = 1 - Math.pow(1 - progress / 100, 3);
      setCounter(Math.floor(easeProgress * 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Wait a tiny bit after hitting 100 before sliding up
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.preloader}
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className={styles.logoContainer}>
            <motion.h1 
              className={styles.logo}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              TAPRO<span className="italic">VIA</span>
            </motion.h1>
          </div>
          
          <motion.div 
            className={styles.counterContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className={styles.counter}>{counter}</span>
            <span className={styles.percent}>%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

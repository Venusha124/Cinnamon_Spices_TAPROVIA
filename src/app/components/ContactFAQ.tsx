"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactFAQ.module.css";

const faqData = [
  {
    question: "What is the minimum order quantity for wholesale export?",
    answer: "Our minimum export order for True Ceylon Alba and C-grade quills is 50kg. For essential oils and extracts, the minimum is 5 Liters. This ensures the integrity and freshness of the supply chain."
  },
  {
    question: "Are your estates certified organic?",
    answer: "Yes. Taprovia holds EU Organic and USDA Organic certifications. We strictly adhere to ancestral, chemical-free farming methods to guarantee zero-coumarin, pristine cinnamon."
  },
  {
    question: "How is the cinnamon packaged for international shipping?",
    answer: "Our quills are vacuum-sealed in moisture-barrier, food-grade packaging immediately after curing to lock in volatile oils. They are then shipped in protective corrugated export cartons."
  },
  {
    question: "Do you offer private label services?",
    answer: "We offer bespoke private labeling for premium retailers and luxury hospitality brands, including custom cuts and specialized artisan packaging."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Inquiries</span>
          <h2 className={styles.title}>Frequently Asked <span className="italic text-muted">Questions.</span></h2>
        </motion.div>

        <div className={styles.accordionContainer}>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.openItem : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.questionRow}>
                  <h3 className={styles.questionText}>{faq.question}</h3>
                  <div className={`${styles.iconWrapper} ${isOpen ? styles.iconOpen : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answerText}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

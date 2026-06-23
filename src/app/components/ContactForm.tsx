"use client";

import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <motion.div 
      className={styles.formContainer}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.header}>
        <span className={styles.label}>Get in Touch</span>
        <h2 className={styles.title}>Let&apos;s Talk.</h2>
      </div>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" id="name" className={styles.input} required placeholder=" " />
          <label htmlFor="name" className={styles.floatingLabel}>Full Name</label>
        </div>
        
        <div className={styles.inputGroup}>
          <input type="email" id="email" className={styles.input} required placeholder=" " />
          <label htmlFor="email" className={styles.floatingLabel}>Email Address</label>
        </div>

        <div className={styles.inputGroup}>
          <select id="subject" className={styles.select} required defaultValue="">
            <option value="" disabled hidden>What&apos;s on your mind?</option>
            <option value="wholesale">Wholesale & Export</option>
            <option value="press">Press & Media</option>
            <option value="general">General Question</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <textarea id="message" className={styles.textarea} rows={5} required placeholder=" "></textarea>
          <label htmlFor="message" className={styles.floatingLabel}>Tell us more about your needs...</label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          <span>Send Message</span>
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </motion.div>
  );
}

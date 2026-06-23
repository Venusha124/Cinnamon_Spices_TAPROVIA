"use client";

import { motion } from "framer-motion";
import styles from "./ContactInfoCards.module.css";

const infoData = [
  {
    title: "Global Headquarters",
    content: "124 Cinnamon Estate Road,<br/>TAPROVIA Highlands,<br/>Sri Lanka",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: "Direct Comm",
    content: "info@taprovia.com<br/>wholesale@taprovia.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    title: "Global Dispatch",
    content: "+94 11 234 5678<br/>Mon-Fri, 9am - 6pm (IST)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
];

export default function ContactInfoCards() {
  return (
    <div className={styles.container}>
      {infoData.map((info, index) => (
        <motion.div 
          key={index}
          className={styles.infoCard}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className={styles.iconWrapper}>
            {info.icon}
          </div>
          <div className={styles.contentWrapper}>
            <h3 className={styles.title}>{info.title}</h3>
            <p className={styles.content} dangerouslySetInnerHTML={{ __html: info.content }}></p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

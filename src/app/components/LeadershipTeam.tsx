"use client";

import { motion } from "framer-motion";
import styles from "./LeadershipTeam.module.css";

const teamMembers = [
  {
    name: "Shamalka Edirisinghe",
    title: "Co-Founder",
    description: "Driving the visionary direction and global expansion of Taprovia, ensuring the brand's legacy of uncompromising purity.",
  },
  {
    name: "Wilhelm Yohan Randy",
    title: "Co-Founder",
    description: "Overseeing sustainable cultivation and the meticulous craftsmanship that defines the world's finest True Ceylon Cinnamon.",
  },
  {
    name: "Venusha Weerasinghe",
    title: "Marketing & IT Operations",
    description: "Bridging the gap between our ancient heritage and the modern world through cutting-edge digital experiences and brand strategy.",
  }
];

export default function LeadershipTeam() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Visionaries</span>
          <h2 className={styles.title}>
            Our <span className="italic text-muted">Leadership.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberTitle}>{member.title}</span>
                <div className={styles.divider}></div>
                <p className={styles.memberDesc}>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

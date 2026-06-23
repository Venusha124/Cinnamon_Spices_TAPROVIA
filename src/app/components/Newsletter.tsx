"use client";

import styles from './Newsletter.module.css';
import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/images/cinnamon_estate.png" 
          alt="Cinnamon plantation" 
          fill
          style={{ objectFit: 'cover' }}
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className="container relative">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Join the <span className="italic text-accent">Taprovia</span> Family
          </h2>
          <p className={styles.desc}>
            Subscribe to our newsletter to receive exclusive offers, recipes, and insights into the world of True Cinnamon. Enjoy <strong>10% off</strong> your first order of Alba grade cinnamon.
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

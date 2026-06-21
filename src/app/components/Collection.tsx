import Image from 'next/image';
import Link from 'next/link';
import styles from './Collection.module.css';

export default function Collection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            The Sovereign <br />
            <span className="italic text-muted">Collection.</span>
          </h2>
          <Link href="/products" className={styles.link}>
            <span className={styles.linkText}>Observe All Grades</span>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </div>
          </Link>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              src="/quills.png"
              alt="Rare Quills"
              fill
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span className={styles.label}>Alba Peak</span>
              <h3 className={styles.cardTitle}>Rare Quills</h3>
              <div className={styles.line}></div>
            </div>
          </div>
          
          <div className={styles.card}>
            <Image
              src="/alchemy.png"
              alt="Liquid Gold"
              fill
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span className={styles.label}>Pure Bark Oil</span>
              <h3 className={styles.cardTitle}>Liquid Gold</h3>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

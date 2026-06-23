import Image from 'next/image';
import Link from 'next/link';
import styles from './Narrative.module.css';

export default function Narrative() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.label}>The Narrative</span>
            <h2 className={styles.title}>
              Behind the <br />
              <span className="italic text-muted">Inner Bark.</span>
            </h2>
          </div>
          <p className={styles.description}>
            Every quill tells a story of geological perfection and generational intuition. Step into the heartland where alchemy meets nature.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.largeCard}>
            <Image
              src="/images/cinnamon_estate_real.png"
              alt="The TAPROVIA Highlands"
              fill
              className={styles.image}
            />
            <div className={styles.cardOverlay}>
              <h3 className={styles.cardTitle}>The TAPROVIA Highlands</h3>
              <Link href="/products" className={styles.link}>
                <span className={styles.linkText}>Start Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className={styles.smallCard}>
            <Image
              src="/artisan.png"
              alt="Artisanal Mastery"
              fill
              className={styles.image}
            />
            <div className={styles.cardOverlay}>
              <span className={styles.cardLabel}>Artisanal Mastery</span>
              <h3 className={styles.smallCardTitle}>
                The 45° <br />
                <span className="italic text-muted">Peel.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

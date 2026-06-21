import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgContainer}>
        <Image
          src="/hero-bg.png"
          alt="Premium Cinnamon Background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.subtitle}>
          <span className={styles.line}></span>
          Direct from Ceylon
          <span className={styles.line}></span>
        </div>
        
        <h1 className={styles.title}>
          The Pure <br />
          <span className="italic text-muted">Primal</span> Spice.
        </h1>
        
        <p className={styles.description}>
          Experience the world&apos;s most guarded artisanal secret, sustainably harvested from the sovereign highlands of Sri Lanka.
        </p>
        
        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            <span>Explore the Showroom</span>
          </button>
          
          <Link href="/about" className={styles.secondaryAction}>
            <span className={styles.secondaryText}>Our Legacy</span>
            <div className={styles.playIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Descend</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

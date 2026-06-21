import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.section}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <span className={styles.label}>The TAPROVIA Delta</span>
        <h2 className={styles.title}>
          Why We Are <span className="italic text-muted">Singular.</span>
        </h2>
      </div>
      
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Sustainably Sourced</h3>
            <p className={styles.cardDesc}>
              Direct partnerships with small-holder farms ensuring fair trade and eco-friendly harvesting.
            </p>
            <div className={styles.hoverLine}></div>
          </div>
          
          <div className={`${styles.card} ${styles.cardOffset}`}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Certified Purity</h3>
            <p className={styles.cardDesc}>
              Exceeding ISO 22000 and FDA standards for absolute safety and chemical-free assurance.
            </p>
            <div className={styles.hoverLine}></div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>The Alba Peak</h3>
            <p className={styles.cardDesc}>
              Exclusively dealing in the ultra-fine Alba grade, the absolute pinnacle of True Cinnamon.
            </p>
            <div className={styles.hoverLine}></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

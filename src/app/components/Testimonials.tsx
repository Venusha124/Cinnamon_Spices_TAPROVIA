import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Verdict</span>
          <h2 className={styles.title}>
            Voices of <span className="italic text-muted">Authority.</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.quoteIcon}>
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className={styles.quote}>
              &quot;The definitive source for Alba grade. Their consistency is unmatched in the global market.&quot;
            </p>
            <div>
              <h4 className={styles.authorName}>Elena R.</h4>
              <span className={styles.authorTitle}>Head Buyer, Le Jardin Épicé, Paris</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.quoteIcon}>
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className={styles.quote}>
              &quot;Taprovia has restored the lost art of true cinnamon. An essential partner for our seasonal menu.&quot;
            </p>
            <div>
              <h4 className={styles.authorName}>Chef Marco D.</h4>
              <span className={styles.authorTitle}>Executive Chef, The Obsidian Table</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.quoteIcon}>
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className={styles.quote}>
              &quot;A masterclass in logistics and purity. The aroma tells you everything before you even taste it.&quot;
            </p>
            <div>
              <h4 className={styles.authorName}>Sarah J.</h4>
              <span className={styles.authorTitle}>Sourcing Director, Organic Origins UK</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

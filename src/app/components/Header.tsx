import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.marqueeBar}>
        <div className="container" style={{ display: 'flex' }}>
          <div className="animate-marquee tracking-wide" style={{ whiteSpace: 'nowrap', fontSize: '9px', fontWeight: 'bold' }}>
            <span style={{ margin: '0 32px' }}>EST. 1924 | THE BENCHMARK OF CEYLON</span>
            <span style={{ margin: '0 32px' }}>•</span>
            <span style={{ margin: '0 32px' }}>GLOBAL LOGISTICS OPTIMIZED</span>
            <span style={{ margin: '0 32px' }}>•</span>
            <span style={{ margin: '0 32px' }}>SOVEREIGN PURITY GUARANTEED</span>
            <span style={{ margin: '0 32px' }}>•</span>
            <span style={{ margin: '0 32px' }}>CURATED ARCHIVE OF RARE GRADES</span>
            <span style={{ margin: '0 32px' }}>•</span>
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              TAPRO<span className="italic text-accent">VIA</span>
            </Link>
            <span className={styles.logoSubtitle}>Sovereign Collection</span>
          </div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/products" className={styles.navLink}>Our Products</Link>
            <Link href="/explore" className={styles.navLink}>Explore Products</Link>
            <Link href="/stories" className={styles.navLink}>Stories</Link>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

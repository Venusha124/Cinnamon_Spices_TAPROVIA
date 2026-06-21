import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topGradient}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.colLeft}>
            <Link href="/" className={styles.logo}>
              TAPRO<span className="italic text-accent">VIA</span>
            </Link>
            <p className={styles.description}>
              &quot;Cultivating the benchmark of Ceylon excellence since 1924. A legacy of purity, delivered globally.&quot;
            </p>
            <div className={styles.socials}>
              {['instagram', 'twitter', 'facebook', 'linkedin'].map((social) => (
                <a key={social} href="#" className={styles.socialLink}>
                  <div className={styles.socialIcon}></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.colCenter}>
            <div>
              <h4 className={styles.navTitle}>Our Products</h4>
              <ul className={styles.navList}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/products" className={styles.navLink}>Our Products</Link></li>
                <li><Link href="/explore" className={styles.navLink}>Explore Products</Link></li>
                <li><Link href="/stories" className={styles.navLink}>Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.navTitle}>About Us</h4>
              <ul className={styles.navList}>
                <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
                <li><Link href="/shipping" className={styles.navLink}>Logistics</Link></li>
                <li><Link href="/faq" className={styles.navLink}>Inquiries</Link></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.colRight}>
            <h4 className={styles.navTitle}>Subscribe to our newsletter</h4>
            <p className={styles.subscribeText}>
              Join our registry for exclusive access to reserve grades and seasonal field reports.
            </p>
            <form className={styles.form}>
              <input type="email" placeholder="Email Address" required className={styles.input} />
              <button type="submit" className={styles.submitBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </button>
            </form>
          </div>
          
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2026 TAPROVIA EXPORT CO.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
            <Link href="/compliance" className={styles.legalLink}>Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

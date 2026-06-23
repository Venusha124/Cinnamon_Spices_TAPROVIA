import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const socials = [
    { name: 'Instagram', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: 'Facebook', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: 'LinkedIn', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.mainGrid}>
          
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              TAPRO<span className="italic text-accent">VIA</span>
            </Link>
            <p className={styles.description}>
              Cultivating the benchmark of Ceylon excellence since 1924. A legacy of purity, delivered globally.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a key={social.name} href="#" className={styles.socialLink} aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className={styles.navCol}>
            <h4 className={styles.navTitle}>Menu</h4>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/products" className={styles.navLink}>Products</Link></li>
              <li><Link href="/stories" className={styles.navLink}>Stories</Link></li>
              <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className={styles.navCol}>
            <h4 className={styles.navTitle}>Company</h4>
            <ul className={styles.navList}>
              <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
              <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
              <li><Link href="/shipping" className={styles.navLink}>Logistics</Link></li>
              <li><Link href="/faq" className={styles.navLink}>Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.navTitle}>Newsletter</h4>
            <p className={styles.subscribeText}>
              Join our registry for exclusive access to reserve grades and seasonal field reports.
            </p>
            <form className={styles.form}>
              <input type="email" placeholder="Email Address" required className={styles.input} />
              <button type="submit" className={styles.submitBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar: Legal */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2026 TAPROVIA EXPORT CO.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>

      </div>

      {/* Massive Typographic Anchor - Opacity Increased so it's actually visible */}
      <div className={styles.massiveLogoContainer}>
        <h1 className={styles.massiveLogo}>TAPRO<span className="italic">VIA</span></h1>
      </div>
    </footer>
  );
}

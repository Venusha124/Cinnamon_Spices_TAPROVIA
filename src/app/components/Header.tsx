"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={`${styles.headerWrapper} ${isScrolled ? styles.wrapperScrolled : ''}`}>
      <div className={`${styles.marqueeBar} ${isScrolled ? styles.marqueeHidden : ''}`}>
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
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.headerContainer}`}>
          
          <div className={styles.leftCol}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo} onClick={closeMenu}>
                TAPRO<span className="italic text-accent">VIA</span>
              </Link>
              <span className={styles.logoSubtitle}>Sovereign Collection</span>
            </div>
          </div>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/products" className={styles.navLink}>Products</Link>
            <Link href="/stories" className={styles.navLink}>Stories</Link>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </nav>

          <div className={styles.rightCol}>
            {/* Hamburger Icon */}
            <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Toggle Menu">
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen1 : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen2 : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <nav className={styles.mobileNav}>
              <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
              <Link href="/products" className={styles.mobileNavLink} onClick={closeMenu}>Products</Link>
              <Link href="/stories" className={styles.mobileNavLink} onClick={closeMenu}>Stories</Link>
              <Link href="/gallery" className={styles.mobileNavLink} onClick={closeMenu}>Gallery</Link>
              <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About Us</Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';

import Cinnamon3DViewer from '../components/Cinnamon3DViewer';

export default function ProductsPage() {
  const stickGrades = [
    { name: "C4/C5", available: true },
    { name: "ALBA", available: false }, // Reserve grade
    { name: "C5 Special", available: true },
    { name: "C5 Extra", available: true },
    { name: "M", available: false },
    { name: "H1", available: true },
    { name: "H2", available: true }
  ];
  const oils = [
    { name: "Leaf Oil", available: true },
    { name: "Bark Oil", available: false }
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="snap-section">
          <AnimatedPageHeader 
            label="Our Collection"
            titlePrefix="The"
            titleHighlight="Products."
            description="Explore our curated selection of premium Ceylon cinnamon. From the ultra-fine Alba quills to our potent, cold-pressed extracts."
            bgImage="/images/stories_hero_estates.png"
            bgAlt="Cinnamon Estates"
          />
        </div>

        <div className="snap-section" style={{ backgroundColor: '#020202' }}>
          <section className={styles.categorySection} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4rem' }}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>The Alba Quill in 3D</h2>
              <p className={styles.categoryDesc}>Our finest, most tightly rolled reserve grade.</p>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Cinnamon3DViewer />
            </div>
          </section>
        </div>

        <div className="container">

          <div className="snap-section">
            <section className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Cinnamon Quills / Sticks</h2>
                <p className={styles.categoryDesc}>Hand-rolled and cured to perfection.</p>
              </div>
              <div className={styles.grid}>
                {stickGrades.map((grade) => (
                  <div key={grade.name} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image src="/quills.png" alt={`${grade.name} Cinnamon Quills`} fill className={styles.image} />
                      
                      {/* Availability Badge */}
                      <div className={`${styles.availabilityBadge} ${grade.available ? styles.available : styles.unavailable}`}>
                        <span className={styles.statusDot}></span>
                        {grade.available ? "Available" : "Waitlist"}
                      </div>

                      <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                          <Link href="/contact" className={styles.quoteBtn}>
                            {grade.available ? "Add to Quote" : "Join Waitlist"}
                          </Link>
                          <h3 className={styles.productName}>{grade.name}</h3>
                          <p className={styles.productType}>Premium Stick Grade</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="snap-section">
            <section className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Cinnamon Extracts</h2>
                <p className={styles.categoryDesc}>Pure Leaf and Bark Oils.</p>
              </div>
              <div className={styles.grid}>
                {oils.map((oil) => (
                  <div key={oil.name} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image src="/alchemy.png" alt={`${oil.name} Cinnamon Oil`} fill className={styles.image} />
                      
                      {/* Availability Badge */}
                      <div className={`${styles.availabilityBadge} ${oil.available ? styles.available : styles.unavailable}`}>
                        <span className={styles.statusDot}></span>
                        {oil.available ? "Available" : "Waitlist"}
                      </div>

                      <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                          <Link href="/contact" className={styles.quoteBtn}>
                            {oil.available ? "Add to Quote" : "Join Waitlist"}
                          </Link>
                          <h3 className={styles.productName}>{oil.name}</h3>
                          <p className={styles.productType}>Essential Extract</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <div className="snap-footer"><Footer /></div>
    </>
  );
}

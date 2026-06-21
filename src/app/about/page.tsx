import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.hero}>
            <span className={styles.label}>Our Legacy</span>
            <h1 className={styles.title}>The <span className="italic text-muted">Heritage.</span></h1>
            <p className={styles.description}>
              Since 1924, Taprovia has stood as the guardian of authentic Ceylon cinnamon. Rooted in the rich soils of Sri Lanka, our commitment to purity remains uncompromising.
            </p>
          </div>

          <section className={styles.contentSection}>
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>A Century of Excellence</h2>
                <p className={styles.paragraph}>
                  True Ceylon cinnamon (Cinnamomum verum) is native only to the island of Sri Lanka. For four generations, our family has cultivated these ancient lands, preserving traditional harvesting methods that respect both the environment and the craft.
                </p>
                <p className={styles.paragraph}>
                  Unlike cassia, true cinnamon is delicate, sweet, and boasts a myriad of health benefits. We export only the finest grades, meticulously hand-peeled to ensure that the delicate inner bark is preserved perfectly.
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image src="/plantation.png" alt="Our Plantation" fill className={styles.image} />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

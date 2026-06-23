import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Products.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';

export default function ProductsPage() {
  const stickGrades = ["C4/C5", "ALBA", "C5 Special", "C5 Extra", "M", "H1", "H2"];
  const oils = ["Leaf Oil", "Bark Oil"];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AnimatedPageHeader 
          label="Our Collection"
          titlePrefix="The"
          titleHighlight="Products."
          description="Explore our curated selection of premium Ceylon cinnamon. From the ultra-fine Alba quills to our potent, cold-pressed extracts."
          bgImage="/images/stories_hero_estates.png"
          bgAlt="Cinnamon Estates"
        />
        <div className="container">

          <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>Cinnamon Quills / Sticks</h2>
              <p className={styles.categoryDesc}>Hand-rolled and cured to perfection.</p>
            </div>
            <div className={styles.grid}>
              {stickGrades.map((grade) => (
                <div key={grade} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src="/quills.png" alt={`${grade} Cinnamon Quills`} fill className={styles.image} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.productName}>{grade}</h3>
                    <p className={styles.productType}>Premium Stick Grade</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>Cinnamon Extracts</h2>
              <p className={styles.categoryDesc}>Pure Leaf and Bark Oils.</p>
            </div>
            <div className={styles.grid}>
              {oils.map((oil) => (
                <div key={oil} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src="/alchemy.png" alt={`${oil} Cinnamon Oil`} fill className={styles.image} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.productName}>{oil}</h3>
                    <p className={styles.productType}>Essential Extract</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

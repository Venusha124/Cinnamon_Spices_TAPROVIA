import styles from './CuratedCollection.module.css';

const products = [
  {
    id: 1,
    name: 'Alba Quills',
    badge: 'The Crown Jewel',
    notes: 'Aroma: Delicate, Sweet, Citrusy',
    image: '/images/alba_quills_premium.png',
    link: '#',
    isFeatured: true
  },
  {
    id: 2,
    name: 'Cinnamon Powder',
    badge: 'Culinary Essential',
    notes: 'Aroma: Warm, Woody, Intense',
    image: '/images/cinnamon_powder_premium.png',
    link: '#',
    isFeatured: false
  },
  {
    id: 3,
    name: 'Cinnamon Oil',
    badge: 'Pure Extract',
    notes: 'Aroma: Potent, Spicy, Pure',
    image: '/images/cinnamon_oil_premium.png',
    link: '#',
    isFeatured: false
  }
];

export default function CuratedCollection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>Curated Selection</span>
        <h2 className={styles.title}>
          Our <span className="italic text-muted">Masterpieces.</span>
        </h2>

        <div className={styles.bentoGrid}>
          {products.map((product) => (
            <a 
              href={product.link} 
              key={product.id} 
              className={product.isFeatured ? styles.featureCard : styles.secondaryCard}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} className={styles.cardImage} loading="lazy" />
              <div className={styles.cardOverlay}></div>
              
              <div className={styles.cardContent}>
                <span className={styles.productBadge}>{product.badge}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productNotes}>{product.notes}</p>
                
                <span className={styles.exploreButton}>
                  Explore Product
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

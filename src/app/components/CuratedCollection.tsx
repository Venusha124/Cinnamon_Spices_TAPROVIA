import styles from './CuratedCollection.module.css';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Cinnamon Quills',
    badge: 'The Crown Jewel',
    reviewer: 'Chef Michel Roux',
    quote: '"The absolute pinnacle. It transforms my pastries entirely."',
    image: '/images/alba_quills_premium.png',
    link: '/products',
    isFeatured: true
  },
  {
    id: 3,
    name: 'Cinnamon Oil',
    badge: 'Pure Extract',
    reviewer: 'Dr. A. Sterling',
    quote: '"Unmatched potency and purity. A true botanical treasure."',
    image: '/images/cinnamon_oil_premium.png',
    link: '/products',
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
            <Link 
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
                
                <div className={styles.reviewContainer}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <p className={styles.quote}>{product.quote}</p>
                  <span className={styles.reviewer}>— {product.reviewer}</span>
                </div>
                
                <span className={styles.exploreButton}>
                  Explore Product
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

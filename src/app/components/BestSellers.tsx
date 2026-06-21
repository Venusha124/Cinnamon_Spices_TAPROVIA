import styles from './BestSellers.module.css';

const products = [
  {
    id: 1,
    name: 'Alba Quills',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Cinnamon Powder',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1610484736343-7f2e1a3df3f4?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Cinnamon Oil',
    price: '$32.00',
    image: 'https://images.unsplash.com/photo-1506540608779-11ba18e77ceb?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  }
];

export default function BestSellers() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>Curated Selection</span>
        <h2 className={styles.title}>
          Our <span className="italic text-muted">Best Sellers.</span>
        </h2>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />
              </div>
              
              <div className={styles.stars}>
                {[...Array(product.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>

              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              
              <div className={styles.buttonContainer}>
                <button className={styles.addButton}>
                  <span style={{ position: 'relative', zIndex: 1 }}>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

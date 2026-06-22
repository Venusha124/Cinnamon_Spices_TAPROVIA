import styles from './Journey.module.css';

const steps = [
  {
    id: '01',
    title: 'Rooted in Heritage',
    desc: 'Born in the sun-drenched estates of Ceylon, our cinnamon thrives in nutrient-dense soils, kissed by tropical monsoons to create the perfect flavor profile.',
    image: '/images/cinnamon_estate.png',
  },
  {
    id: '02',
    title: 'The Master\'s Touch',
    desc: 'Generations of skilled artisans gently peel the inner bark by hand. This intricate tradition is an art form that machinery can never truly replicate.',
    image: '/images/cinnamon_artisan.png',
  },
  {
    id: '03',
    title: 'Sun-Kissed Alchemy',
    desc: 'Bathed in golden sunlight, the quills curl naturally into delicate layers, locking in the exquisite aroma, sweet woody flavor, and unmatched health benefits.',
    image: '/images/cinnamon_sun_dried.png',
  },
  {
    id: '04',
    title: 'The Crown Jewel',
    desc: 'Thinner than a pencil and packed with essential oils, our Alba grade is the rarest and most luxurious form of True Cinnamon on Earth, delivered fresh to you.',
    image: '/images/alba_cinnamon_grade.png',
  }
];

export default function Journey() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>The Taprovia Legacy</span>
        <h2 className={styles.title}>
          Crafting the World\'s <span className="italic text-muted">Finest.</span>
        </h2>

        <div className={styles.cardContainer}>
          {steps.map((step, index) => (
            <div 
              className={styles.card} 
              key={step.id}
              style={{ top: `calc(10vh + ${index * 30}px)` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardNumber}>{step.id}</div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
              
              <div className={styles.cardImageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote: "The definitive source for Alba grade. Their consistency is unmatched in the global market. A true luxury product.",
    author: "Elena R.",
    title: "Head Buyer, Le Jardin Épicé, Paris"
  },
  {
    id: 2,
    quote: "Taprovia has restored the lost art of true cinnamon. An essential partner for our seasonal menu.",
    author: "Chef Marco D.",
    title: "Executive Chef, The Obsidian Table"
  },
  {
    id: 3,
    quote: "A masterclass in logistics and purity. The aroma tells you everything before you even taste it. Highly recommended for any serious culinary endeavor.",
    author: "Sarah J.",
    title: "Sourcing Director, Organic Origins UK"
  },
  {
    id: 4,
    quote: "I've visited their estates in Ceylon. The level of care and heritage infused into every step of the process is genuinely inspiring.",
    author: "David Chen",
    title: "Food Critic & Journalist"
  },
  {
    id: 5,
    quote: "As a pastry chef, the sweetness and woody notes of this Alba cinnamon completely transform my desserts without overpowering them.",
    author: "Amelie V.",
    title: "Pastry Chef, Maison de Sucre"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Verdict</span>
          <h2 className={styles.title}>
            Voices of <span className="italic text-muted">Authority.</span>
          </h2>
        </div>
        
        <div className={styles.masonry}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.quoteIcon}>
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              </svg>
              <p className={styles.quote}>
                &quot;{testimonial.quote}&quot;
              </p>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{testimonial.author}</h4>
                <span className={styles.authorTitle}>{testimonial.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Journey.module.css';

const steps = [
  {
    id: '01',
    title: 'Sustainably Grown',
    desc: 'Cultivated in the rich, volcanic soils of southern Sri Lanka, our True Cinnamon is grown on small, eco-conscious farms that prioritize biodiversity and soil health without synthetic chemicals.',
    image: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Artisanal Harvesting',
    desc: 'Expert peelers delicately strip the inner bark at dawn. This ancient, labor-intensive craft ensures only the finest layers are selected, preserving the sweet essential oils.',
    image: 'https://images.unsplash.com/photo-1610484736343-7f2e1a3df3f4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Natural Curing',
    desc: 'The delicate quills are hand-rolled and sun-dried to perfection. This slow curing process naturally enhances the warm, delicate aroma and signature golden-brown hue.',
    image: 'https://images.unsplash.com/photo-1506540608779-11ba18e77ceb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'The Alba Grade',
    desc: 'Only a fraction of the harvest qualifies as Alba. We strictly select these ultra-thin, flawless quills to bring you the pinnacle of True Cinnamon, shipped directly to your door.',
    image: 'https://images.unsplash.com/photo-1588661601614-74ea02047d1b?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Journey() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>From Soil to Soul</span>
        <h2 className={styles.title}>
          The Journey of <span className="italic text-muted">Alba.</span>
        </h2>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div className={styles.step} key={step.id}>
              <div className={styles.stepIcon}>{step.id}</div>
              
              <div className={styles.stepImageContainer}>
                {/* Using standard img to avoid next.config.js domain issues */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className={styles.stepImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

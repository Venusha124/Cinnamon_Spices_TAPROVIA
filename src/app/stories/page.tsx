import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Stories.module.css';

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "The Monsoon Harvest",
      excerpt: "Discover how the seasonal monsoons shape the unique flavor profile of our finest Alba grade.",
      image: "/plantation.png",
      date: "May 2026"
    },
    {
      id: 2,
      title: "Generations of Craft",
      excerpt: "Meet the master peelers who have passed down the 45-degree cut technique for over a century.",
      image: "/artisan.png",
      date: "April 2026"
    },
    {
      id: 3,
      title: "From Bark to Bottle",
      excerpt: "The intricate alchemy of extracting pure, potent cinnamon oil without compromising its therapeutic properties.",
      image: "/alchemy.png",
      date: "March 2026"
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.hero}>
            <span className={styles.label}>Journal</span>
            <h1 className={styles.title}>Our <span className="italic text-muted">Stories.</span></h1>
            <p className={styles.description}>
              Chronicles from the highlands. Dive deeper into the art, science, and heritage of True Ceylon Cinnamon.
            </p>
          </div>

          <div className={styles.grid}>
            {stories.map((story) => (
              <article key={story.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={story.image} alt={story.title} fill className={styles.image} />
                </div>
                <div className={styles.content}>
                  <span className={styles.date}>{story.date}</span>
                  <h2 className={styles.storyTitle}>{story.title}</h2>
                  <p className={styles.excerpt}>{story.excerpt}</p>
                  <button className={styles.readMore}>
                    Read Article <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

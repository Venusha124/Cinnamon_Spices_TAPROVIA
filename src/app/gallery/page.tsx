import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Gallery.module.css';

export default function GalleryPage() {
  const images = [
    { src: '/plantation.png', alt: 'Highland Plantation', span: 'col-span-2 row-span-2' },
    { src: '/quills.png', alt: 'Alba Quills', span: 'col-span-1 row-span-1' },
    { src: '/artisan.png', alt: 'Artisan Peeling', span: 'col-span-1 row-span-1' },
    { src: '/alchemy.png', alt: 'Cinnamon Extract', span: 'col-span-2 row-span-1' },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.hero}>
            <span className={styles.label}>Visual Archive</span>
            <h1 className={styles.title}>The <span className="italic text-muted">Gallery.</span></h1>
            <p className={styles.description}>
              A curated visual journey through our estates, highlighting the meticulous craft behind every quill.
            </p>
          </div>

          <div className={styles.grid}>
            {images.map((img, index) => (
              <div key={index} className={`${styles.imageWrapper} ${styles[img.span.replace(' ', '_')]}`}>
                <Image src={img.src} alt={img.alt} fill className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.imageAlt}>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

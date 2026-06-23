import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Gallery.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';

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
        <AnimatedPageHeader 
          label="Visual Archive"
          titlePrefix="The"
          titleHighlight="Gallery."
          description="A curated visual journey through our estates, highlighting the meticulous craft behind every quill."
          bgImage="/images/stories_hero_estates.png"
          bgAlt="Gallery Background"
        />
        <div className="container">

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

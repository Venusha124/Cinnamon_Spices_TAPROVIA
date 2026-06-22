import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Stories.module.css';

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Cinematic Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/stories_hero_estates.png" 
              alt="Misty Ceylon Estates" 
              fill 
              priority
              className={styles.heroImage} 
            />
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>The Taprovia Legacy</span>
            <h1 className={styles.heroTitle}>
              A Century of <span className="italic text-muted">Mastery.</span>
            </h1>
            <p className={styles.heroDescription}>
              Under the stewardship of the 4th Generation, Taprovia continues to preserve the sacred, ancient art of True Ceylon Cinnamon cultivation in the misty highlands of Sri Lanka.
            </p>
          </div>
        </section>

        {/* Asymmetrical 4th Gen Narrative */}
        <section className={styles.narrativeSection}>
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeText}>
              <h2 className={styles.narrativeTitle}>
                The 4th Generation <span className="italic text-muted">Conducting the Craft.</span>
              </h2>
              <p className={styles.narrativeParagraph}>
                For over a hundred years, our family has walked these estates. Today, the 4th generation is conducting the entire symphony of cultivation. We refuse to automate what must be felt by hand. 
              </p>
              <p className={styles.narrativeParagraph}>
                The traditional 45-degree cut, the delicate peeling of the inner bark, and the sun-curing process are all orchestrated by masters whose skills were passed down from their great-grandparents. This unbroken lineage is the secret to the unmatched sweetness and zero-coumarin purity of our Alba quills.
              </p>
            </div>
            
            <div className={styles.narrativeImageWrapper}>
              <Image 
                src="/images/stories_4th_gen_artisan.png" 
                alt="4th Generation Master Artisan" 
                fill 
                className={styles.narrativeImage} 
              />
            </div>
          </div>
        </section>

        {/* Parallax Chapter: The Alchemy */}
        <section className={styles.chapterSection}>
          <div className={styles.chapterBackground}>
            <Image 
              src="/images/stories_alchemy.png" 
              alt="Cinnamon Oil Distillation" 
              fill 
              className={styles.chapterImage} 
            />
            <div className={styles.chapterOverlay}></div>
          </div>
          
          <div className={styles.chapterContent}>
            <span className={styles.chapterNumber}>CHAPTER 01</span>
            <h2 className={styles.chapterTitle}>The Alchemy of Extraction</h2>
            <p className={styles.chapterText}>
              Beyond the bark lies the essence. Using ancient copper distillation techniques refined over four generations, we gently coax the therapeutic, pure oils from the cinnamon leaves and bark. It is a slow, methodical process that yields an intensely potent extract, capturing the true soul of the spice.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

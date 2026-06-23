import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AnimatedPageHeader 
          label="Reach Out"
          titlePrefix="Contact"
          titleHighlight="Us."
          description="For wholesale inquiries, reserve grade requests, or to learn more about our sustainable practices, please get in touch."
          bgImage="/images/stories_hero_estates.png"
          bgAlt="Contact Background"
        />
        <div className="container">

          <div className={styles.grid}>
            <div className={styles.formContainer}>
              <h2 className={styles.sectionTitle}>Send a Message</h2>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.labelInput}>Name</label>
                  <input type="text" className={styles.input} placeholder="Your Name" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.labelInput}>Email</label>
                  <input type="email" className={styles.input} placeholder="Your Email" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.labelInput}>Message</label>
                  <textarea className={styles.textarea} rows={6} placeholder="How can we assist you?"></textarea>
                </div>
                <button type="button" className={styles.submitBtn}>Submit Protocol</button>
              </form>
            </div>

            <div className={styles.infoContainer}>
              <h2 className={styles.sectionTitle}>Our Headquarters</h2>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Address</h3>
                <p className={styles.infoText}>
                  124 Cinnamon Estate Road,<br />
                  Matara Highlands,<br />
                  Sri Lanka
                </p>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>info@taprovia.com<br />wholesale@taprovia.com</p>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <p className={styles.infoText}>+94 11 234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

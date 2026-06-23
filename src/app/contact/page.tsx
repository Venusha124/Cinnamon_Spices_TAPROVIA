import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';
import ContactForm from '../components/ContactForm';
import ContactInfoCards from '../components/ContactInfoCards';
import ContactFAQ from '../components/ContactFAQ';
import ConsultationBanner from '../components/ConsultationBanner';
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="snap-section">
          <AnimatedPageHeader 
            label="Reach Out"
            titlePrefix="Contact"
            titleHighlight="Us."
            description="For wholesale inquiries, reserve grade requests, or to learn more about our sustainable practices, please get in touch."
            bgImage="/images/stories_hero_estates.png"
            bgAlt="Contact Background"
          />
        </div>
        <div className="snap-section">
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.formSection}>
                <ContactForm />
              </div>

              <div className={styles.infoSection}>
                <ContactInfoCards />
              </div>
            </div>
          </div>
        </div>
        
        <div className="snap-section"><ContactFAQ /></div>
        <div className="snap-section"><ConsultationBanner /></div>
      </main>
      <div className="snap-footer"><Footer /></div>
    </>
  );
}

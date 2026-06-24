import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './About.module.css';
import AnimatedPageHeader from '../components/AnimatedPageHeader';
import ProcessShowcase from '../components/ProcessShowcase';
import PillarsGrid from '../components/PillarsGrid';
import LeadershipTeam from '../components/LeadershipTeam';
import FounderQuote from '../components/FounderQuote';
import VisionMission from '../components/VisionMission';
import ExperienceCTA from '../components/ExperienceCTA';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="snap-section">
          <AnimatedPageHeader 
            label="Our Legacy"
            titlePrefix="The"
            titleHighlight="Heritage."
            description="Since 1924, Taprovia has stood as the guardian of authentic Ceylon cinnamon. Rooted in the rich soils of Sri Lanka, our commitment to purity remains uncompromising."
            bgImage="/images/stories_hero_estates.png"
            bgAlt="Heritage Background"
          />
        </div>
        
        <div className="snap-section"><VisionMission /></div>
        
        <div className="snap-section"><ProcessShowcase /></div>
        <div className="snap-section"><PillarsGrid /></div>
        <div className="snap-section"><LeadershipTeam /></div>
        <div className="snap-section"><FounderQuote /></div>
        <div className="snap-section"><ExperienceCTA /></div>

      </main>
      <div className="snap-footer"><Footer /></div>
    </>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Stories.module.css';
import { AnimatedHero, AnimatedNarrative, AnimatedChapter } from './AnimatedStoryContent';
import HeritageTimeline from '../components/HeritageTimeline';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import InteractiveMap from '../components/InteractiveMap';

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="snap-section"><AnimatedHero /></div>
        <div className="snap-section"><HeritageTimeline /></div>
        <div className="snap-section"><AnimatedNarrative /></div>
        <div className="snap-section"><BeforeAfterSlider /></div>
        <div className="snap-section"><InteractiveMap /></div>
        <div className="snap-section"><AnimatedChapter /></div>
      </main>
      <div className="snap-footer"><Footer /></div>
    </>
  );
}

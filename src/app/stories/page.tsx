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
        <AnimatedHero />
        <HeritageTimeline />
        <AnimatedNarrative />
        <BeforeAfterSlider />
        <InteractiveMap />
        <AnimatedChapter />
      </main>
      <Footer />
    </>
  );
}

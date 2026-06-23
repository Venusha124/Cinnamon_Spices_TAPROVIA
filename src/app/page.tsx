import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Narrative from './components/Narrative';
import CuratedCollection from './components/CuratedCollection';
import Collection from './components/Collection';
import InteractiveMap from './components/InteractiveMap';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <main>
        <div className="snap-section"><Hero /></div>
        <div className="snap-section"><TrustBar /></div>
        <div className="snap-section"><Narrative /></div>
        <div className="snap-section"><CuratedCollection /></div>
        <div className="snap-section"><Collection /></div>
        <div className="snap-section"><InteractiveMap /></div>
        <div className="snap-section"><Journey /></div>
        <div className="snap-section"><Testimonials /></div>
        <div className="snap-section"><Newsletter /></div>
      </main>
      <div className="snap-footer"><Footer /></div>
    </main>
  );
}

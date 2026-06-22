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
      <Hero />
      <TrustBar />
      <Narrative />
      <CuratedCollection />
      <Collection />
      <InteractiveMap />
      <Journey />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

import Header from './components/Header';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Journey from './components/Journey';
import BestSellers from './components/BestSellers';
import Collection from './components/Collection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Narrative />
        <Journey />
        <BestSellers />
        <Collection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

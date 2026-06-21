import Header from './components/Header';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Features from './components/Features';
import Collection from './components/Collection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Narrative />
        <Features />
        <Collection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

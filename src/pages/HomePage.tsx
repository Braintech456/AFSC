import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import AffiliationStrip from '../components/AffiliationStrip';

export default function HomePage() {
  return (
    <div>
      <AffiliationStrip />
      <Hero />
      <About />
      <Benefits />
    </div>
  );
}

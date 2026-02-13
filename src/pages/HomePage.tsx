import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import AffiliationStrip from '../components/AffiliationStrip';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <AffiliationStrip />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Benefits />
      </section>
    </main>
  );
}

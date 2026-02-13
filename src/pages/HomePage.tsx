import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import AffiliationStrip from '../components/AffiliationStrip';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Affiliation strip */}
      <section>
        <AffiliationStrip />
      </section>

      {/* Hero section */}
      <section>
        <Hero />
      </section>

      {/* About section */}
      <section>
        <About />
      </section>

      {/* Benefits section */}
      <section>
        <Benefits />
      </section>
    </main>
  );
}

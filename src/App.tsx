import Header from './components/Header';
import AffiliationStrip from './components/AffiliationStrip';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Courses';
import Benefits from './components/Benefits';
import AuthorizedCenters from './components/AuthorizedCenters';
import Verify from './components/Verify';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AffiliationStrip />
      <Hero />
      <Verify />
      <About />
      <Certifications />
      <Benefits />
      <AuthorizedCenters />
      <Footer />
    </div>
  );
}

export default App;

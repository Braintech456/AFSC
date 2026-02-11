import Header from './components/Header';
import AffiliationStrip from './components/AffiliationStrip';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import Chapters from './components/Chapters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AffiliationStrip />
      <Hero />
      <About />
      <Courses />
      <Benefits />
      <Chapters />
      <Footer />
    </div>
  );
}

export default App;

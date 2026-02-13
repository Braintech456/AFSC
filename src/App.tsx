import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VerifyPage from './pages/VerifyPage';
import CertificationsPage from './pages/CertificationsPage';
import AuthorizedCentersPage from './pages/AuthorizedCentersPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/authorized-centers" element={<AuthorizedCentersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

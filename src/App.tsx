import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CertificationsPage from './pages/CertificationsPage';
import CertificationDetailsPage from './pages/CertificationDetailsPage';
import AuthorizedCentersPage from './pages/AuthorizedCentersPage';
import VerifyPage from './pages/VerifyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Certifications */}
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route
          path="/certifications/:id"
          element={<CertificationDetailsPage />}
        />

        <Route path="/authorized-centers" element={<AuthorizedCentersPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import CertificationsPage from './pages/CertificationsPage';
import VerifyPage from './pages/VerifyPage';
import AuthorizedCentersPage from './pages/AuthorizedCentersPage';

export default function App() {
return (
<BrowserRouter>
<Header />

<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/certifications" element={<CertificationsPage />} />
<Route path="/verify" element={<VerifyPage />} />
<Route path="/authorized-centers" element={<AuthorizedCentersPage />} />
</Routes>
</BrowserRouter>
);
}
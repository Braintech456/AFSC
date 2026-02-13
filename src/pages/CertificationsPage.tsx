import Courses from '../components/Courses';
import AffiliationStrip from '../components/AffiliationStrip';

import PageHeader from '../components/PageHeader';

<PageHeader
  title="AFSC Certifications"
  subtitle="Government-recognized certification programs"
/>

export default function CertificationsPage() {
  return (
    <div className="min-h-screen text-black p-4">

    <main className="bg-slate-50 min-h-screen">
      <AffiliationStrip />
      <Courses />
    </div>
  );
}

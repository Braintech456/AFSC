import Courses from '../components/Courses';
import AffiliationStrip from '../components/AffiliationStrip';
import PageHeader from '../components/PageHeader';

export default function CertificationsPage() {
  return (
    <>
     

      <main className="bg-slate-50 min-h-screen">
        <AffiliationStrip />
        <Courses />
      </main>
    </>
  );
}

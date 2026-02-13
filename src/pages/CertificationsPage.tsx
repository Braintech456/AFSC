import Courses from '../components/Courses';
import AffiliationStrip from '../components/AffiliationStrip';


export default function CertificationsPage() {
  return (
    <div className="min-h-screen text-black p-4">
      <h1 className="text-2xl font-bold">CERTIFICATIONS PAGE</h1>

      <AffiliationStrip />
      <Courses />
    </div>
  );
}

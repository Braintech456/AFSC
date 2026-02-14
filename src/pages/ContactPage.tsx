import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact AFSC"
        subtitle="Get in touch with Accounting & Finance Skill Council"
      />

      <main className="bg-slate-50 min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> afsc.nashik@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 93243 52753
            </p>
            <p>
              <strong>Head Office:</strong> Gurugram, Haryana
            </p>
            <p>
              <strong>Regional Office:</strong> Nashik, Maharashtra
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

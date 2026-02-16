import { Award, Building2 } from 'lucide-react';
import AffiliationStrip from '../components/AffiliationStrip';

export default function VerifyPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <AffiliationStrip />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Verification System
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Verify the authenticity of AFSC certifications and authorized training centers
            through our official registry.
          </p>
        </section>

        {/* Verification Cards */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* Verify Individual Certification */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
            <Award className="text-blue-600 mb-6" size={36} />

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Individual Certification
            </h3>

            <p className="text-gray-700 mb-6">
              Search our certification database to verify individual credentials
              and certification validity issued by AFSC.
            </p>

            <input
              type="text"
              placeholder="Certification ID"
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Candidate Name"
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Verify Certificate
            </button>
          </div>

          {/* Verify Authorized Center */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
            <Building2 className="text-blue-600 mb-6" size={36} />

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Authorized Center
            </h3>

            <p className="text-gray-700 mb-6">
              Check if a training center is officially authorized by AFSC
              to deliver certification programs.
            </p>

            <input
              type="text"
              placeholder="Center Name"
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Authorization Number"
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Verify Center
            </button>
          </div>

        </section>
      </div>
    </main>
  );
}

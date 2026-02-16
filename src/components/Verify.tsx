import Award from 'lucide-react/dist/esm/icons/award';
import Building2 from 'lucide-react/dist/esm/icons/building-2';

export default function Verify() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verification System
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verify the authenticity of AFSC certifications and authorized training
            centers through our official registry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Verify Individual Certification */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Individual Certification
            </h2>

            <p className="text-gray-600 mb-6">
              Verify individual credentials issued by AFSC using the certificate
              ID and the registered candidate email address.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Certification ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Registered Candidate Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Verify Certificate
              </button>
            </form>
          </div>

          {/* Verify Authorized Center */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Authorized Center
            </h2>

            <p className="text-gray-600 mb-6">
              Confirm whether a training center is officially authorized by AFSC
              using the registered center email address.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Center Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Official Center Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Verify Center
              </button>
            </form>
          </div>

        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            About AFSC Verification
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p className="mb-4">
                The AFSC Verification System is the official registry maintained
                by the Accounting & Finance Skill Council to authenticate
                certifications and authorized training centers.
              </p>
              <p>
                Email-based verification helps reduce misuse and ensures greater
                accuracy while validating official AFSC records.
              </p>
            </div>
            <div>
              <p className="mb-4">
                For any verification discrepancies or suspected misuse, please
                report to:
              </p>
              <p className="font-semibold text-gray-900 mb-2">
                afsc.india@zohomail.in
              </p>
              <p className="text-sm text-gray-600">
                Response time: 24–48 hours for all verification inquiries
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

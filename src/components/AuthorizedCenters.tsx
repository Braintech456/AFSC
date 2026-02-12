import { Building2, MapPin, Shield, Zap } from 'lucide-react';

export default function AuthorizedCenters() {
  return (
    <section id="authorized-centers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AFSC <span className="text-blue-600">Authorized Centers</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Authorized Centers are vetted training institutions recognized by AFSC to deliver standardized certification programs with consistent quality and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">National Coverage</h3>
                <p className="text-gray-600">Operating across major regions</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <span>150+ authorized training centers across India</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <span>All centers comply with AFSC quality standards and regulatory requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <span>Regularly audited and monitored for certification validity</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Authorized Center Requirements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Certified trainers with relevant industry credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Standardized learning infrastructure and facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Compliance with AFSC curriculum and assessment standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Transparent candidate registration and reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Regular performance evaluations and audits</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Authorized Center Status</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Active Authorized Centers</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">28</div>
              <p className="text-gray-600">States & Union Territories</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">45K+</div>
              <p className="text-gray-600">Certified Professionals</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Become an Authorized Center</h3>
          <p className="text-gray-700 mb-6">
            AFSC invites qualified training institutions to apply for authorization. Partner with us to deliver standardized certification programs and contribute to India's accounting and finance skill development mission.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Application Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Registered training organization with valid credentials</li>
                <li>Qualified faculty with industry experience</li>
                <li>Adequate infrastructure and facilities</li>
                <li>Quality assurance systems in place</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Benefits of Authorization</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Deliver government-recognized certifications</li>
                <li>Access to AFSC support and resources</li>
                <li>Marketing and brand recognition</li>
                <li>Regular training for faculty</li>
              </ul>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
            Apply to Become an Authorized Center
          </button>
        </div>
      </div>
    </section>
  );
}

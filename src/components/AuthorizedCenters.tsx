import { Link } from 'react-router-dom';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Zap from 'lucide-react/dist/esm/icons/zap';

export default function AuthorizedCenters() {
  return (
    <section id="authorized-centers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            AFSC <span className="text-blue-600">Authorized Centers</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Authorized training institutions delivering AFSC certifications
            with standardized quality and compliance.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border rounded-xl p-8">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">National Coverage</h3>
                <p className="text-gray-600">Across India</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="flex gap-2"><MapPin className="text-blue-600" />150+ centers</p>
              <p className="flex gap-2"><Shield className="text-blue-600" />Quality compliance</p>
              <p className="flex gap-2"><Zap className="text-blue-600" />Regular audits</p>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Authorized Center Requirements
            </h3>
            <ul className="space-y-3">
              <li>• Certified trainers</li>
              <li>• Standard infrastructure</li>
              <li>• Curriculum compliance</li>
              <li>• Transparent reporting</li>
              <li>• Regular evaluations</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Become an Authorized Center
          </h3>
          <p className="mb-6">
            Partner with AFSC to strengthen India’s accounting & finance skill ecosystem.
          </p>

          <Link to="/contact#message">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
              Apply to Become an Authorized Center
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

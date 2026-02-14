import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Award, ArrowLeft } from 'lucide-react';
import { certifications } from '../data/certifications'; // Adjust path if needed

export default function CertificationDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id || isNaN(Number(id))) {
    return <div className="text-center py-20">Loading or invalid certification...</div>;
  }

  const cert = certifications[Number(id)];

  if (!cert) {
    return <div className="text-center py-20">Certification not found.</div>;
  }

  const Icon = cert.icon;

  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/certifications')} // Adjust to your certifications page route
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Certifications
        </button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{cert.title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">{cert.description}</p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Duration</p>
                  <p className="text-gray-700">{cert.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Level</p>
                  <p className="text-gray-700">{cert.level}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Modules</h3>
            <ul className="space-y-3">
              {cert.topics.map((topic, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-300">
            Apply for This Certification
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Contact an authorized AFSC training center to enroll.
          </p>
        </div>
      </div>
    </main>
  );
}
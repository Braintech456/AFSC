import PageHeader from '../components/PageHeader';
import { Eye, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About AFSC"
        subtitle="Accounting & Finance Skill Council of India"
      />

      <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              About <span className="text-blue-600">AFSC</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Accounting & Finance Skill Council is the apex authority for
              standardizing, regulating, and certifying accounting and finance
              professionals across India. We bridge the gap between education and industry needs.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Vision Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-8">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be India's premier skill development organization in accounting
                and finance, recognized globally for excellence in training and certification.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-8">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver industry-relevant training through standardized curriculum
                and certified training centers across India, empowering professionals for a dynamic economy.
              </p>
            </div>

            {/* Core Objectives Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-8">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Objectives</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Standardized curriculum and assessments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Regulation of authorized centers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Government-recognized certifications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Quality and credibility assurance
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Section (Optional) */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AFSC?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AFSC is committed to fostering a skilled workforce in accounting and finance, ensuring that professionals are equipped with the latest knowledge and skills to thrive in an ever-evolving industry.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
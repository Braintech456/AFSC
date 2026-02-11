import { Eye, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Our Organization</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to transforming India's accounting and finance sector through skill development,
            standardized training, and industry-aligned certification programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India's premier skill development organization in accounting and finance,
              recognized for excellence in training, certification, and creating employment-ready
              professionals who contribute to the nation's economic growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-8 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class, industry-relevant training in accounting and finance through
              standardized curriculum, cutting-edge technology, and a network of certified training
              centers across India, ensuring skill development reaches every corner of the nation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Objectives</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Develop industry-ready professionals through standardized training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Establish district-level chapters for widespread accessibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Ensure government-recognized certification for all graduates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Bridge the skill gap in accounting and finance sectors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

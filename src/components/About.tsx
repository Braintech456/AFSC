import Eye from 'lucide-react/dist/esm/icons/eye';
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">AFSC</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Accounting & Finance Skill Council is the apex authority for
            standardizing, regulating, and certifying accounting and finance
            professionals across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To establish AFSC as the premier authority for standardized
              certification in accounting and finance, ensuring uniformity,
              quality, and recognition across all authorized centers nationwide.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To develop and maintain standardized certification programs in
              accounting and finance, regulate authorized training centers, and
              ensure government-recognized credentials for professionals across
              India.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Core Objectives
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Maintain standardized curriculum and assessment standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Regulate and audit authorized training centers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Issue and verify government-recognized certifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Ensure quality and credibility across the ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Eye, Target, Lightbulb, ShieldCheck, Users, Settings } from 'lucide-react';
import AffiliationStrip from '../components/AffiliationStrip';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Affiliation Strip */}
      <AffiliationStrip />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-blue-600">AFSC</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Accounting & Finance Skill Council (AFSC) is a sector-focused
            organization working towards strengthening India’s accounting and
            finance skill ecosystem. Operating under the Skill India Mission,
            AFSC develops standardized frameworks for training, assessment, and
            certification to ensure industry relevance and national consistency.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To build a credible and skilled accounting and finance workforce
              that supports India’s economic growth and aligns with global
              professional standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To implement transparent, industry-aligned certification and
              training systems through authorized institutions, ensuring quality,
              consistency, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* Role & Mandate */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Role & Mandate
          </h3>
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                Define occupational standards for accounting and finance roles
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                Develop structured curricula aligned with industry needs
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                Establish assessment and certification frameworks
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                Ensure nationwide uniformity in skill standards
              </li>
            </ul>
          </div>
        </section>

        {/* How AFSC Works */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            How AFSC Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Settings className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Standardization</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                AFSC designs standardized frameworks for training and assessment,
                ensuring consistency across regions and institutions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Quality Assurance</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Authorized centers are monitored and evaluated regularly to
                maintain quality, credibility, and compliance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Users className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Ecosystem Support</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                AFSC collaborates with institutions, trainers, and employers to
                bridge the gap between education and employment.
              </p>
            </div>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Core Objectives
            </h3>
          </div>

          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              Standardize curriculum and assessments nationwide
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              Regulate and audit authorized training centers
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              Issue verifiable, government-recognized certifications
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              Promote transparency and trust across the skill ecosystem
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
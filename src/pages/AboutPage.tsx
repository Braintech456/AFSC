import { Eye, Target, Lightbulb, ShieldCheck, Users, Settings } from 'lucide-react';
import AffiliationStrip from '../components/AffiliationStrip';

export default function AboutPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Affiliation Strip (same as Home) */}
      <AffiliationStrip />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro Section */}
        <section className="mb-16">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The Accounting & Finance Skill Council (AFSC) is a sector-focused
            organization working towards strengthening India’s accounting and
            finance skill ecosystem. Operating under the Skill India Mission,
            AFSC develops standardized frameworks for training, assessment, and
            certification to ensure industry relevance and national consistency.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-600" size={22} />
              <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To build a credible and skilled accounting and finance workforce
              that supports India’s economic growth and aligns with global
              professional standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-600" size={22} />
              <h3 className="text-lg font-semibold text-gray-900">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To implement transparent, industry-aligned certification and
              training systems through authorized institutions, ensuring quality,
              consistency, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* Role & Mandate */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Role & Mandate
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>— Define occupational standards for accounting and finance roles</li>
            <li>— Develop structured curricula aligned with industry needs</li>
            <li>— Establish assessment and certification frameworks</li>
            <li>— Ensure nationwide uniformity in skill standards</li>
          </ul>
        </section>

        {/* How AFSC Works */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-blue-600" size={22} />
              <h4 className="font-semibold text-gray-900">Standardization</h4>
            </div>
            <p className="text-gray-700">
              AFSC designs standardized frameworks for training and assessment,
              ensuring consistency across regions and institutions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-blue-600" size={22} />
              <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
            </div>
            <p className="text-gray-700">
              Authorized centers are monitored and evaluated regularly to
              maintain quality, credibility, and compliance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-600" size={22} />
              <h4 className="font-semibold text-gray-900">Ecosystem Support</h4>
            </div>
            <p className="text-gray-700">
              AFSC collaborates with institutions, trainers, and employers to
              bridge the gap between education and employment.
            </p>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="bg-white border border-gray-200 rounded-xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-blue-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">
              Core Objectives
            </h3>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li>— Standardize curriculum and assessments nationwide</li>
            <li>— Regulate and audit authorized training centers</li>
            <li>— Issue verifiable, government-recognized certifications</li>
            <li>— Promote transparency and trust across the skill ecosystem</li>
          </ul>
        </section>

      </div>
    </main>
  );
}

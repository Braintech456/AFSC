import PageHeader from '../components/PageHeader';
import { Eye, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About AFSC"
        subtitle="Accounting & Finance Skill Council of India"
      />

      <main className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Intro – simple, readable */}
          <section className="mb-14">
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              The Accounting & Finance Skill Council (AFSC) works to strengthen
              India’s accounting and finance ecosystem by setting consistent
              standards for training, assessment, and certification. Operating
              under the Skill India Mission, AFSC focuses on aligning education
              with real industry requirements.
            </p>
          </section>

          {/* Vision & Mission – asymmetrical, modern */}
          <section className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-blue-600" size={22} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To develop a skilled and credible workforce in accounting and
                finance, capable of supporting India’s growing economy and
                meeting global professional standards.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-600" size={22} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide structured, transparent, and industry-aligned
                certification frameworks through authorized training centers,
                ensuring consistent quality and measurable outcomes.
              </p>
            </div>
          </section>

          {/* Core Objectives – simple list, not flashy cards */}
          <section className="bg-white rounded-xl border border-gray-200 p-10">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-blue-600" size={22} />
              <h3 className="text-xl font-semibold text-gray-900">
                Core Objectives
              </h3>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">—</span>
                Establish standardized curriculum and assessment models
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">—</span>
                Monitor and regulate authorized training centers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">—</span>
                Issue and maintain verifiable, government-recognized certifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">—</span>
                Promote transparency, quality, and trust across the ecosystem
              </li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}

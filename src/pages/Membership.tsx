import { CheckCircle, Users, GraduationCap, Building2, FileText } from "lucide-react";
import AffiliationStrip from "../components/AffiliationStrip";

const Membership = (): JSX.Element => {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">

      {/* Affiliation Strip */}
      <AffiliationStrip />

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            AFSC <span className="text-blue-600">Membership</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto my-8 rounded-full"></div>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
            Become a member of the Accounting & Finance Skill Council and be part of
            India’s standardized skill development ecosystem under Skill India Mission.
          </p>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Membership Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Institutional Membership */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Building2 className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-4">
              Institutional Membership
            </h3>
            <p className="text-gray-700 mb-6">
              For colleges, universities, and educational institutions aiming to
              enhance employability and industry relevance.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Industry-aligned certifications
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Guest lectures & expert sessions
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Faculty Development Programs (FDPs)
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Placement & industry networking support
              </li>
            </ul>
          </div>

          {/* Individual Membership */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <GraduationCap className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-4">
              Individual Membership
            </h3>
            <p className="text-gray-700 mb-6">
              For students, fresh graduates, and professionals seeking career
              growth in accounting, finance, and auditing.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Practical, hands-on training
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Industry-recognized certifications
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Membership certificate & designation
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Job & placement assistance
              </li>
            </ul>
          </div>

          {/* Industry Membership */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Users className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-4">
              Industry / Employer Membership
            </h3>
            <p className="text-gray-700 mb-6">
              For corporates, accounting firms, and employers seeking skilled,
              job-ready finance professionals.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Access to industry-ready talent
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Reduced training & onboarding costs
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Improved productivity & efficiency
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Collaboration in training & curriculum
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Membership Process */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Membership Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Submit Application",
              "Document Verification",
              "AFSC Review & Approval",
              "Membership Certificate Issuance",
            ].map((step: string, index: number) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <FileText className="mx-auto text-blue-600 mb-4" size={32} />
                <p className="font-medium text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Become an AFSC Member?
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join us in strengthening India’s accounting and finance skill ecosystem.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Apply for Membership
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Membership;

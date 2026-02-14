import {
  Clock,
  Award,
  Calculator,
  FileText,
  BarChart3,
  Shield,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

const certifications = [
  {
    icon: Calculator,
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description:
      'Master Tally Prime with GST, TDS, and advanced accounting features. Industry-recognized certification included.',
    topics: ['GST Compliance', 'Inventory Management', 'Payroll Processing', 'Financial Reports'],
  },
  {
    icon: FileText,
    title: 'GST Practitioner Course',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Comprehensive GST training covering filing, compliance, and advisory services for businesses.',
    topics: ['GST Filing', 'Return Processing', 'Audit Preparation', 'Compliance Management'],
  },
  {
    icon: BarChart3,
    title: 'Financial Accounting',
    duration: '4 Months',
    level: 'Foundation to Advanced',
    description:
      'Complete accounting fundamentals to advanced financial management and reporting standards.',
    topics: ['Balance Sheet', 'P&L Statements', 'Cash Flow', 'Financial Analysis'],
  },
  {
    icon: TrendingUp,
    title: 'Taxation & Tax Planning',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'In-depth training on Income Tax, TDS, and strategic tax planning for individuals and businesses.',
    topics: ['Income Tax Returns', 'TDS Filing', 'Tax Planning', 'Assessment Procedures'],
  },
  {
    icon: Shield,
    title: 'Audit & Assurance',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Professional training in auditing standards, procedures, and assurance services.',
    topics: ['Internal Audit', 'Statutory Audit', 'Risk Assessment', 'Compliance Checking'],
  },
  {
    icon: BookOpen,
    title: 'Corporate Accounting',
    duration: '4 Months',
    level: 'Advanced',
    description:
      'Specialized training in corporate financial management, mergers, and acquisitions.',
    topics: ['Share Capital', 'Debentures', 'Company Accounts', 'Amalgamation'],
  },
];

export default function Courses() {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AFSC <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Standardized certification programs recognized by the Government of India,
            offered exclusively through authorized AFSC training centers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-blue-600" />
                    {cert.level}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-5">
                  {cert.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Key Modules
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors"
                >
                  View Certification Details
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

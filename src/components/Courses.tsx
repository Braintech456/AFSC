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
    icon: BookOpen,
    title: 'Certified Financial Literacy',
    duration: '1 Month',
    level: 'Beginner',
    description:
      'Build a strong foundation in personal finance, banking, insurance, digital payments, and financial planning.',
    topics: [
      'Banking Basics',
      'Digital Payments',
      'Insurance & Risk',
      'Financial Planning',
    ],
  },
  {
    icon: Calculator,
    title: 'Certified Professional Accountant (With Tally)',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    description:
      'Covers accounting fundamentals with hands-on training in Tally Prime, invoicing, inventory, and GST basics.',
    topics: [
      'Journal & Ledger',
      'Final Accounts',
      'Tally Prime',
      'GST Basics',
    ],
  },
  {
    icon: Shield,
    title: 'Certified Financial Accounting & Audit Professional (With Tally)',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    description:
      'Advanced training in financial accounting, auditing practices, and real-world audit execution with Tally.',
    topics: [
      'Financial Accounting',
      'Audit Procedures',
      'Tally Advanced',
      'Compliance & Reporting',
    ],
  },
  {
    icon: FileText,
    title: 'Certified GST Practitioner',
    duration: '1 Month',
    level: 'Intermediate',
    description:
      'Practical GST training including registrations, return filing, refunds, and compliance assistance.',
    topics: [
      'GST Registration',
      'Return Filing',
      'Refunds',
      'GST Compliance',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Certified Income Tax & TDS Compliance Professional',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Covers Income Tax provisions, return filing, deductions, slabs, and practical TDS/TCS compliance.',
    topics: [
      'Income Tax Act',
      'IT Returns',
      'TDS & TCS',
      'Compliance Filing',
    ],
  },
  {
    icon: BarChart3,
    title: 'Certified Financial Modelling & Business Analytics Professional',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Learn financial modelling, data analysis, forecasting, and analytics-driven business decision making.',
    topics: [
      'Financial Modelling',
      'Data Analytics',
      'Forecasting',
      'Business Insights',
    ],
  },
];

export default function Courses(): JSX.Element {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AFSC <span className="text-blue-600">Certification Programs</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Skill development training programs designed as per industry and government
            standards, delivered through authorized AFSC training centers.
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

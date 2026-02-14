import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is installed
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
  const navigate = useNavigate();

  const handleViewDetails = (index) => {
    navigate(`/certification-details/${index}`); // Navigate to details page with ID
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AFSC <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"></div>
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
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-blue-600" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-blue-600" />
                    <span>{cert.level}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    Key Modules:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleViewDetails(index)}
                  className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
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
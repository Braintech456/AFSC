import { Clock, Award, Calculator, FileText, BarChart3, Shield, ListChecks, DollarSign } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    icon: Calculator,
    title: "Tally Prime Professional",
    duration: "3 Months",
    level: "Beginner to Advanced",
    description: "Master Tally Prime with GST, TDS, and advanced accounting features. Industry-recognized certification included.",
    topics: ["GST Compliance", "Inventory Management", "Payroll Processing", "Financial Reports"]
  },
  {
    icon: FileText,
    title: "GST Practitioner Course",
    duration: "2 Months",
    level: "Intermediate",
    description: "Comprehensive GST training covering filing, compliance, and advisory services for businesses.",
    topics: ["GST Filing", "Return Processing", "Audit Preparation", "Compliance Management"]
  },
  {
    icon: BarChart3,
    title: "Financial Accounting",
    duration: "4 Months",
    level: "Foundation to Advanced",
    description: "Complete accounting fundamentals to advanced financial management and reporting standards.",
    topics: ["Balance Sheet", "P&L Statements", "Cash Flow", "Financial Analysis"]
  },
  {
    icon: TrendingUp,
    title: "Taxation & Tax Planning",
    duration: "3 Months",
    level: "Advanced",
    description: "In-depth training on Income Tax, TDS, and strategic tax planning for individuals and businesses.",
    topics: ["Income Tax Returns", "TDS Filing", "Tax Planning", "Assessment Procedures"]
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    duration: "3 Months",
    level: "Advanced",
    description: "Professional training in auditing standards, procedures, and assurance services.",
    topics: ["Internal Audit", "Statutory Audit", "Risk Assessment", "Compliance Checking"]
  },
  {
    icon: BookOpen,
    title: "Corporate Accounting",
    duration: "4 Months",
    level: "Advanced",
    description: "Specialized training in corporate financial management, mergers, and acquisitions.",
    topics: ["Share Capital", "Debentures", "Company Accounts", "Amalgamation"]
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AFSC <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Standardized certification programs recognized by Government of India. Offered exclusively through authorized AFSC training centers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-blue-600" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={16} className="text-blue-600" />
                    <span>{cert.level}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Modules:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(index)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  View Certification Details
                </button>
              </div>
            );
          })}
        </div>

        {selectedCert !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{certifications[selectedCert].title}</h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-6">{certifications[selectedCert].description}</p>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Apply for Certification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { BookOpen, Clock, Award, TrendingUp, Calculator, FileText, BarChart3, Shield } from 'lucide-react';

const courses = [
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

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Training Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-aligned courses designed by experts and recognized by government authorities.
            Get certified and become job-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={16} className="text-teal-500" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useParams, Link } from 'react-router-dom';
import { Clock, Award, Map, Briefcase } from 'lucide-react';

type Course = {
  slug: string;
  title: string;
  duration: string;
  level: string;
  overview: string;
  roadmap: string[];
  careers: string[];
};

const courses: Course[] = [
  {
    slug: 'certified-financial-literacy',
    title: 'Certified Financial Literacy',
    duration: '1 Month',
    level: 'Beginner',
    overview:
      'This program builds a strong foundation in personal finance, banking systems, insurance, digital payments, and financial planning.',
    roadmap: [
      'Introduction to Financial Literacy',
      'Banking & Digital Payments',
      'Insurance & Risk Management',
      'Personal Financial Planning',
    ],
    careers: [
      'Banking Assistant',
      'Finance Executive',
      'Accounts Trainee',
    ],
  },
  {
    slug: 'certified-professional-accountant-with-tally',
    title: 'Certified Professional Accountant (With Tally)',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    overview:
      'Hands-on accounting training with Tally Prime covering journal entries, final accounts, and GST basics.',
    roadmap: [
      'Accounting Fundamentals',
      'Journal, Ledger & Final Accounts',
      'Tally Prime Practical Training',
      'GST Basics & Compliance',
    ],
    careers: [
      'Junior Accountant',
      'Accounts Executive',
      'Tally Operator',
    ],
  },
  {
    slug: 'certified-financial-accounting-audit-with-tally',
    title: 'Certified Financial Accounting & Audit Professional (With Tally)',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    overview:
      'Advanced accounting and auditing program with practical exposure using Tally and audit methodologies.',
    roadmap: [
      'Advanced Financial Accounting',
      'Audit Standards & Procedures',
      'Advanced Tally Applications',
      'Compliance & Reporting',
    ],
    careers: [
      'Audit Executive',
      'Senior Accountant',
      'Finance Analyst',
    ],
  },
  {
    slug: 'certified-gst-practitioner',
    title: 'Certified GST Practitioner',
    duration: '1 Month',
    level: 'Intermediate',
    overview:
      'Practical GST training focused on registration, return filing, refunds, and compliance support.',
    roadmap: [
      'GST Framework & Registration',
      'GST Returns Filing',
      'Refunds & Notices',
      'GST Compliance Practices',
    ],
    careers: [
      'GST Executive',
      'Tax Assistant',
      'Compliance Officer',
    ],
  },
  {
    slug: 'certified-income-tax-tds-compliance',
    title: 'Certified Income Tax & TDS Compliance Professional',
    duration: '2 Months',
    level: 'Intermediate',
    overview:
      'Comprehensive training in Income Tax provisions, return filing, and TDS/TCS compliance.',
    roadmap: [
      'Income Tax Fundamentals',
      'Computation of Income',
      'Return Filing Procedures',
      'TDS & TCS Compliance',
    ],
    careers: [
      'Tax Executive',
      'Income Tax Assistant',
      'Accounts Officer',
    ],
  },
  {
    slug: 'certified-chartered-tax-practitioner',
    title: 'Certified Chartered Tax Practitioner',
    duration: '3 Months',
    level: 'Advanced',
    overview:
      'Professional tax consultancy training covering direct and indirect tax compliance for MSMEs.',
    roadmap: [
      'Direct Tax Consultancy',
      'Indirect Tax Advisory',
      'MSME Compliance',
      'Advanced Tax Planning',
    ],
    careers: [
      'Tax Consultant',
      'Independent Practitioner',
      'Compliance Advisor',
    ],
  },
  {
    slug: 'certified-public-accountant',
    title: 'Certified Public Accountant',
    duration: '6 Months',
    level: 'Advanced',
    overview:
      'A comprehensive professional program covering accounting, auditing, taxation, and strategic financial management.',
    roadmap: [
      'Advanced Accounting & Reporting',
      'Auditing & Assurance',
      'Taxation & Compliance',
      'Strategic Financial Management',
    ],
    careers: [
      'Public Accountant',
      'Senior Finance Manager',
      'Audit Manager',
    ],
  },
  {
    slug: 'financial-modelling-business-analytics',
    title: 'Certified Financial Modelling & Business Analytics Professional',
    duration: '6 Months',
    level: 'Advanced',
    overview:
      'Learn financial modelling, forecasting, analytics, and data-driven business decision-making.',
    roadmap: [
      'Financial Modelling Basics',
      'Advanced Excel & Analytics',
      'Forecasting & Simulation',
      'Business Decision Analytics',
    ],
    careers: [
      'Financial Analyst',
      'Business Analyst',
      'Data Analyst (Finance)',
    ],
  },
  {
    slug: 'tally-prime-professional',
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    overview:
      'Dedicated Tally Prime training covering accounting, GST, payroll, inventory, and reporting.',
    roadmap: [
      'Tally Prime Basics',
      'Accounting & Inventory',
      'GST & Payroll',
      'Advanced Reporting',
    ],
    careers: [
      'Tally Operator',
      'Accounts Executive',
      'Billing & GST Executive',
    ],
  },
];

export default function CourseDetails(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Course not found
        </h2>
        <Link to="/certifications" className="text-blue-600 underline">
          Back to Certifications
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-blue-600" />
              {course.level}
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="bg-white rounded-xl border p-8 mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Course Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {course.overview}
          </p>
        </section>

        {/* Roadmap */}
        <section className="bg-white rounded-xl border p-8 mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Map size={20} className="text-blue-600" />
            Learning Roadmap
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {course.roadmap.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>

        {/* Career Paths */}
        <section className="bg-white rounded-xl border p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase size={20} className="text-blue-600" />
            Career Opportunities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {course.careers.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}

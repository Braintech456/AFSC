import { useParams, Link } from 'react-router-dom';
import { Clock, Award, Map, Briefcase } from 'lucide-react';

/**
 * Temporary static data.
 * Later this can come from API or shared config file.
 */
const courses = [
  {
    slug: 'certified-financial-literacy',
    title: 'Certified Financial Literacy',
    duration: '1 Month',
    level: 'Beginner',
    overview:
      'This course builds a strong foundation in personal finance, banking systems, digital payments, and financial planning.',
    roadmap: [
      'Introduction to Financial Literacy',
      'Banking & Digital Payments',
      'Insurance & Risk Management',
      'Personal Financial Planning',
    ],
    careers: ['Banking Assistant', 'Finance Executive', 'Accounts Trainee'],
  },
  {
    slug: 'certified-professional-accountant-with-tally',
    title: 'Certified Professional Accountant (With Tally)',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    overview:
      'Hands-on accounting training with Tally Prime, GST basics, invoicing, and compliance.',
    roadmap: [
      'Accounting Fundamentals',
      'Journal, Ledger & Final Accounts',
      'Tally Prime Practical Training',
      'GST Basics & Returns',
    ],
    careers: ['Junior Accountant', 'Accounts Executive', 'Tally Operator'],
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
          <h2 className="text-xl font-semibold mb-3">Course Overview</h2>
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

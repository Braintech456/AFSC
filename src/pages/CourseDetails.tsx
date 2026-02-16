import { useParams, Link } from 'react-router-dom';
import { Clock, Award, Map, Briefcase } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CourseDetails(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug);

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
      <div className="max-w-5xl mx-auto px-4 py-16">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {course.title}
        </h1>

        <div className="flex gap-6 mb-8 text-gray-700">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-blue-600" />
            {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <Award size={18} className="text-blue-600" />
            {course.level}
          </div>
        </div>

        <section className="bg-white border rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-3">Course Overview</h2>
          <p className="text-gray-700">{course.overview}</p>
        </section>

        <section className="bg-white border rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Map size={20} className="text-blue-600" />
            Learning Roadmap
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {course.roadmap.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase size={20} className="text-blue-600" />
            Career Opportunities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {course.careers.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}

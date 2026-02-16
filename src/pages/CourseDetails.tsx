import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Award,
  Map,
  Briefcase,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';
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

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6"
          >
            <ArrowLeft size={18} />
            Back to Certifications
          </Link>

          <h1 className="text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="max-w-3xl text-blue-100 text-lg">
            {course.description}
          </p>

          {/* Meta cards */}
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <Clock />
              <div>
                <p className="text-sm text-blue-100">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <Award />
              <div>
                <p className="text-sm text-blue-100">Level</p>
                <p className="font-semibold">{course.level}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle />
              <div>
                <p className="text-sm text-blue-100">Certification</p>
                <p className="font-semibold">AFSC Authorized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-14">

        {/* Overview */}
        <div className="bg-white rounded-2xl border shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Course Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {course.overview}
          </p>
        </div>

        {/* Roadmap */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Map className="text-blue-600" />
            Learning Roadmap
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {course.roadmap.map((step, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600" />
            Career Opportunities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {course.careers.map((role) => (
              <div
                key={role}
                className="bg-white border rounded-xl p-6 shadow-sm hover:border-blue-600 transition-all"
              >
                <p className="font-semibold text-gray-900">
                  {role}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Eligible after successful certification
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

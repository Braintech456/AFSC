import Award from 'lucide-react/dist/esm/icons/award';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Users from 'lucide-react/dist/esm/icons/users';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Headphones from 'lucide-react/dist/esm/icons/headphones';
import Gift from 'lucide-react/dist/esm/icons/gift';

const benefits = [
  {
    icon: Award,
    title: 'Government-Recognized Certification',
    description:
      'Receive certifications recognized by NCVET, MSDE, and Skill India — valid across India and accepted by employers nationwide.',
  },
  {
    icon: Briefcase,
    title: '100% Placement Assistance',
    description:
      'Dedicated placement cell connecting you with top accounting firms, corporates, and financial institutions across the country.',
  },
  {
    icon: BookOpen,
    title: 'Industry-Aligned Curriculum',
    description:
      'Learn from updated course content designed by industry experts and aligned with current market requirements.',
  },
  {
    icon: Users,
    title: 'Expert Faculty & Mentorship',
    description:
      'Gain insights from experienced professionals and certified trainers with real-world industry experience.',
  },
  {
    icon: TrendingUp,
    title: 'Skill Enhancement Programs',
    description:
      'Access to continuous upskilling workshops, webinars, and advanced training modules to stay ahead in your career.',
  },
  {
    icon: Shield,
    title: 'Lifetime Membership Benefits',
    description:
      'Enjoy lifelong access to resources, alumni network, job updates, and career guidance support.',
  },
  {
    icon: Headphones,
    title: '24/7 Learning Support',
    description:
      'Get round-the-clock assistance through our dedicated support team and online learning platform.',
  },
  {
    icon: Gift,
    title: 'Exclusive Member Perks',
    description:
      'Access to exclusive events, networking opportunities, industry conferences, and professional development programs.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">AFSC Certification</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AFSC certifications are government-recognized, standardized, and trusted across India’s
            accounting and finance sector.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Earn Your AFSC Certification</h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Get certified from an AFSC-authorized training center. Your credential will be verified,
            recognized, and valid nationwide.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            View Certifications
          </button>
        </div>
      </div>
    </section>
  );
}

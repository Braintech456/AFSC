import { Award, Briefcase, BookOpen, Users, TrendingUp, Shield, Headphones, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Government-Recognized Certification",
    description: "Receive certifications recognized by NCVET, MSDE, and Skill India - valid across India and accepted by employers nationwide."
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell connecting you with top accounting firms, corporates, and financial institutions across the country."
  },
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description: "Learn from updated course content designed by industry experts and aligned with current market requirements."
  },
  {
    icon: Users,
    title: "Expert Faculty & Mentorship",
    description: "Gain insights from experienced professionals and certified trainers with real-world industry experience."
  },
  {
    icon: TrendingUp,
    title: "Skill Enhancement Programs",
    description: "Access to continuous upskilling workshops, webinars, and advanced training modules to stay ahead in your career."
  },
  {
    icon: Shield,
    title: "Lifetime Membership Benefits",
    description: "Enjoy lifelong access to resources, alumni network, job updates, and career guidance support."
  },
  {
    icon: Headphones,
    title: "24/7 Learning Support",
    description: "Get round-the-clock assistance through our dedicated support team and online learning platform."
  },
  {
    icon: Gift,
    title: "Exclusive Member Perks",
    description: "Access to exclusive events, networking opportunities, industry conferences, and professional development programs."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Membership <span className="text-blue-600">Benefits</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of certified professionals who have transformed their careers through our comprehensive training and support ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of successful accounting and finance professionals. Start your journey towards a certified and rewarding career today.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl">
            Become a Member Today
          </button>
        </div>
      </div>
    </section>
  );
}

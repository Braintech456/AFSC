import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Empowering India's Accounting Professionals</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Building Excellence in
              <span className="block text-teal-200">Accounting & Finance</span>
            </h1>

            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              A Government-recognized initiative under Skill India Mission, dedicated to developing world-class accounting and finance professionals through standardized training and certification programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="bg-blue-700/50 backdrop-blur-sm hover:bg-blue-700/70 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 transition-colors">
                View Courses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Award className="text-teal-200 mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">15,000+</h3>
              <p className="text-blue-100">Certified Professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Users className="text-teal-200 mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-blue-100">Training Centers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 col-span-2">
              <TrendingUp className="text-teal-200 mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Employment Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

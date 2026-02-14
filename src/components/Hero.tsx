import Award from 'lucide-react/dist/esm/icons/award';
import Users from 'lucide-react/dist/esm/icons/users';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';

export default function Hero() {
  return (
    <section className="relative bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="text-sm font-semibold text-blue-100 mb-3 uppercase tracking-wide">
              Skill India Mission
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
               Accounting & Finance Skill Council
            </h1>

            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              AFSC is the official skill certification authority for accounting
              and finance professionals in India, operating under the Skill
              India Mission with standardized, government-recognized
              certification programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Verify Credentials
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold border border-blue-500 transition-colors">
                View Certifications
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-700 border border-blue-500 rounded-xl p-6">
              <Award className="text-white mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">45K+</h3>
              <p className="text-blue-100">Certified Professionals</p>
            </div>

            <div className="bg-blue-700 border border-blue-500 rounded-xl p-6">
              <Users className="text-white mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-blue-100">Authorized Centers</p>
            </div>

            <div className="bg-blue-700 border border-blue-500 rounded-xl p-6 col-span-2">
              <TrendingUp className="text-white mb-4" size={40} />
              <h3 className="text-3xl font-bold mb-2">6</h3>
              <p className="text-blue-100">Standardized Certifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

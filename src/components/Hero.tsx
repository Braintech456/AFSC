import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import BookOpenCheck from 'lucide-react/dist/esm/icons/book-open-check';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function Hero() {
  return (
    <section className="relative bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left content */}
          <div>
            <div className="text-sm font-semibold text-blue-100 mb-3 uppercase tracking-wide">
              Skill India Mission
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Accounting & Finance Skill Council
            </h1>

            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              AFSC is the national skill certification authority for accounting
              and finance professionals in India, operating under the Skill India
              Mission with standardized, government-recognized certification programs.
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

          {/* Professional Value Panel (Replaces Stats) */}
          <div className="bg-blue-700/40 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Our Institutional Framework
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="flex gap-4">
                <ShieldCheck size={36} className="text-white" />
                <div>
                  <p className="font-semibold">Government Recognition</p>
                  <p className="text-blue-100 text-sm">
                    Programs aligned with national skill development standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BookOpenCheck size={36} className="text-white" />
                <div>
                  <p className="font-semibold">Standardized Curriculum</p>
                  <p className="text-blue-100 text-sm">
                    Uniform certification framework across all authorized centers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase size={36} className="text-white" />
                <div>
                  <p className="font-semibold">Industry Alignment</p>
                  <p className="text-blue-100 text-sm">
                    Courses designed to meet current accounting & finance demands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe size={36} className="text-white" />
                <div>
                  <p className="font-semibold">Nationwide Network</p>
                  <p className="text-blue-100 text-sm">
                    Authorized training centers across multiple states in India.
                  </p>
                </div>
              </div>

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
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

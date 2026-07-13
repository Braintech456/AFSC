import {
  ArrowRight,
  Download,
  Award,
  Trophy,
  ShieldCheck,
  FileBadge,
} from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Government Recognition",
      description: "Aligned with national skill development standards.",
    },
    {
      icon: Trophy,
      title: "National Ranking",
      description: "Compete with students across the country.",
    },
    {
      icon: FileBadge,
      title: "Digital Certificate",
      description: "Secure and instantly verifiable certificates.",
    },
    {
      icon: Award,
      title: "Merit Awards",
      description: "Medals and certificates for outstanding performers.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.2em] text-blue-100 font-semibold mb-4">
              National Level Commerce Competition
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              AFSC Commerce
              <br />
              Olympiad 2026
            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8 max-w-xl">
              Test your knowledge in Accounting, Business Studies,
              Economics and Financial Literacy through India's
              premier Commerce Olympiad.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition">
                Register Now
                <ArrowRight size={18} />
              </button>

              <button className="border border-white px-7 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-700 transition">
                <Download size={18} />
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/20 p-8">
            <h2 className="text-3xl font-bold mb-8">
              Olympiad Highlights
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <Icon size={28} />
                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

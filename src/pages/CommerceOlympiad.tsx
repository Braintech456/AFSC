import {
  ArrowRight,
  Download,
  Trophy,
  Award,
  ShieldCheck,
  FileCheck,
  GraduationCap,
  Brain,
  TrendingUp,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommerceOlympiad() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in the AFSC Commerce Olympiad?",
      answer:
        "The Olympiad is open to eligible school students as notified by AFSC through its official guidelines.",
    },
    {
      question: "How can I register?",
      answer:
        "Students may register through their school or by following the registration process announced on the official AFSC website.",
    },
    {
      question: "Will every participant receive a certificate?",
      answer:
        "Eligible participants will receive an official digital participation certificate issued by AFSC.",
    },
    {
      question: "How will the examination be conducted?",
      answer:
        "The examination may be conducted online or offline depending on the official notification issued for that edition.",
    },
    {
      question: "Where will results be published?",
      answer:
        "Results will be announced on the official AFSC website and communicated through registered schools wherever applicable.",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block bg-white/15 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                NATIONAL LEVEL COMMERCE OLYMPIAD
              </span>

              <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
                AFSC Commerce
                <br />
                Olympiad 2026
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100 max-w-xl">
                India's premier Commerce Olympiad designed to assess
                students in Accounting, Economics, Business Studies,
                Entrepreneurship and Financial Literacy through a
                standardized national examination.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button
  onClick={() =>
    document
      .getElementById("about-olympiad")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl transition"
>
  Learn More
  <ArrowDown size={18} />
</button>

                

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-8">
                Olympiad Highlights
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">

                <div className="flex gap-4">
                  <ShieldCheck size={34} />
                  <div>
                    <h3 className="font-semibold">
                      National Level
                    </h3>
                    <p className="text-sm text-blue-100 mt-1">
                      Standardized examination across India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Trophy size={34} />
                  <div>
                    <h3 className="font-semibold">
                      Merit Awards
                    </h3>
                    <p className="text-sm text-blue-100 mt-1">
                      Medals and recognition for top performers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileCheck size={34} />
                  <div>
                    <h3 className="font-semibold">
                      Digital Certificate
                    </h3>
                    <p className="text-sm text-blue-100 mt-1">
                      Secure and verifiable certificates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award size={34} />
                  <div>
                    <h3 className="font-semibold">
                      School Recognition
                    </h3>
                    <p className="text-sm text-blue-100 mt-1">
                      Rankings and appreciation for institutions.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    

{/* ================= ABOUT OLYMPIAD ================= */}

<section id="about-olympiad" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        About the Olympiad
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Empowering Future Commerce Leaders
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
        The AFSC Commerce Olympiad is a national-level academic competition
        designed to encourage students to strengthen their understanding of
        Accounting, Economics, Business Studies, Entrepreneurship and
        Financial Literacy through a standardized assessment framework.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left */}

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">

        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Why Participate?
        </h3>

        <ul className="space-y-4 text-gray-700">

          <li>✔ Develop analytical and problem-solving skills.</li>

          <li>✔ Gain exposure to real-world commerce concepts.</li>

          <li>✔ Benchmark your performance at the national level.</li>

          <li>✔ Receive certificates and merit recognition.</li>

          <li>✔ Build confidence for future academic and professional success.</li>

        </ul>

      </div>

      {/* Right */}

      <div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-8 mb-6">
          AFSC aims to cultivate financial awareness and commerce excellence
          among school students by providing an engaging platform that
          promotes conceptual learning, critical thinking and ethical
          decision-making.
        </p>

        <p className="text-gray-600 leading-8">
          Through this Olympiad, we aspire to inspire the next generation of
          accountants, finance professionals, entrepreneurs and business
          leaders who will contribute to India's growing economy.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* ================= OLYMPIAD HIGHLIGHTS ================= */}

<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Olympiad Highlights
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Why Choose AFSC Commerce Olympiad?
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        Designed to encourage conceptual learning, financial awareness and
        academic excellence through a professionally conducted national-level
        competition.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <Trophy className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          National Level Competition
        </h3>

        <p className="text-gray-600 leading-7">
          Compete with students from schools across India through a
          standardized examination.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <BadgeCheck className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Digital Certificates
        </h3>

        <p className="text-gray-600 leading-7">
          Receive digitally verifiable participation and merit certificates.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <Award className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Merit Recognition
        </h3>

        <p className="text-gray-600 leading-7">
          Outstanding performers receive medals, certificates and national
          recognition.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <BookOpen className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Commerce Focused
        </h3>

        <p className="text-gray-600 leading-7">
          Questions are designed around Accounting, Economics, Business Studies
          and Financial Literacy.
        </p>
      </div>

      {/* Card 5 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <Brain className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Skill Development
        </h3>

        <p className="text-gray-600 leading-7">
          Encourages analytical thinking, decision-making and practical
          financial knowledge.
        </p>
      </div>

      {/* Card 6 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          <Rocket className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Future Ready
        </h3>

        <p className="text-gray-600 leading-7">
          Inspires students to pursue careers in accounting, finance,
          business and entrepreneurship.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= EXAM DETAILS ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Examination Details
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Everything You Need to Know
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        The AFSC Commerce Olympiad follows a transparent and standardized
        examination process to ensure fairness and academic excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Eligibility
        </h3>

        <p className="text-gray-600 leading-7">
          Open to eligible students as notified
by AFSC for the respective Olympiad edition.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Mode of Examination
        </h3>

        <p className="text-gray-600 leading-7">
          Online and Offline (School / Authorized Centre).
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Duration
        </h3>

        <p className="text-gray-600 leading-7">
          60 Minutes
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Question Type
        </h3>

        <p className="text-gray-600 leading-7">
          Multiple Choice Questions (MCQs)
        </p>
      </div>

    

      <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Certification
        </h3>

        <p className="text-gray-600 leading-7">
          Digital participation and merit certificates issued by AFSC.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= OBJECTIVES ================= */}

<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Our Objectives
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Inspiring Excellence in Commerce Education
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        The AFSC Commerce Olympiad aims to nurture academic excellence,
        financial awareness and analytical thinking among students through
        a fair and standardized national-level assessment.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Academic Excellence
        </h3>

        <p className="text-gray-600 leading-7">
          Encourage students to strengthen their academic foundation in
          commerce-related disciplines.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Conceptual Learning
        </h3>

        <p className="text-gray-600 leading-7">
          Promote conceptual understanding and application of knowledge
          rather than rote memorization.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Critical Thinking
        </h3>

        <p className="text-gray-600 leading-7">
          Develop logical reasoning, analytical ability and sound
          decision-making skills among learners.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          National Recognition
        </h3>

        <p className="text-gray-600 leading-7">
          Identify and recognize talented students while encouraging
          healthy academic competition across schools.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= PARTICIPATION ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Participation
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Who Can Participate?
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        The AFSC Commerce Olympiad is open to students who wish to
        demonstrate their academic excellence and strengthen their
        conceptual understanding of commerce.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          School Students
        </h3>

        <p className="text-gray-600 leading-7">
          Open to eligible students studying in recognized schools across India.
        </p>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Individual & School Registration
        </h3>

        <p className="text-gray-600 leading-7">
          Students may participate through their schools or as individual
          applicants wherever applicable.
        </p>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Flexible Examination Mode
        </h3>

        <p className="text-gray-600 leading-7">
          The examination may be conducted online or offline as notified by AFSC.
        </p>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Fair Assessment
        </h3>

        <p className="text-gray-600 leading-7">
          A transparent evaluation process ensures equal opportunity and
          recognition for every participant.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= AWARDS & RECOGNITION ================= */}

<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Awards & Recognition
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Celebrating Academic Excellence
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        Outstanding performers will be recognized for their academic
        excellence, while every participant receives appreciation for
        their commitment towards learning and excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          National Excellence Awards
        </h3>

        <p className="text-gray-600 leading-7">
          Top-performing students may receive medals, trophies or special
          recognition based on their overall performance.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Merit Certificates
        </h3>

        <p className="text-gray-600 leading-7">
          Students demonstrating exceptional academic performance may be
          awarded merit certificates.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Participation Certificate
        </h3>

        <p className="text-gray-600 leading-7">
          Every eligible participant receives an official digital
          participation certificate issued by AFSC.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          School Recognition
        </h3>

        <p className="text-gray-600 leading-7">
          Participating schools may receive appreciation and recognition
          for promoting commerce education among students.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= IMPORTANT DATES ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Important Dates
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Stay Updated
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
        The official schedule for the AFSC Commerce Olympiad will be announced
        through the website. Students and schools are advised to regularly
        check for updates.
      </p>
    </div>

    <div className="space-y-5">

      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-5">
        <span className="font-semibold text-gray-800">
          Registration Opens
        </span>

        <span className="text-blue-600 font-medium">
          To Be Announced
        </span>
      </div>

      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-5">
        <span className="font-semibold text-gray-800">
          Registration Closes
        </span>

        <span className="text-blue-600 font-medium">
          To Be Announced
        </span>
      </div>

      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-5">
        <span className="font-semibold text-gray-800">
          Examination Date
        </span>

        <span className="text-blue-600 font-medium">
          To Be Announced
        </span>
      </div>

      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-5">
        <span className="font-semibold text-gray-800">
          Result Declaration
        </span>

        <span className="text-blue-600 font-medium">
          To Be Announced
        </span>
      </div>

      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-5">
        <span className="font-semibold text-gray-800">
          Certificate Distribution
        </span>

        <span className="text-blue-600 font-medium">
          To Be Announced
        </span>
      </div>

    </div>

  </div>
</section>

      {/* ================= FAQ ================= */}

<section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Frequently Asked Questions
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Have Questions?
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        Find answers to some of the most common questions regarding the
        AFSC Commerce Olympiad.
      </p>
    </div>

    <div className="space-y-4">

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() =>
              setOpenFAQ(openFAQ === index ? null : index)
            }
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <span className="font-semibold text-gray-900">
              {faq.question}
            </span>

            {openFAQ === index ? (
              <ChevronUp className="text-blue-600" />
            ) : (
              <ChevronDown className="text-blue-600" />
            )}
          </button>

          {openFAQ === index && (
            <div className="px-6 pb-6 text-gray-600 leading-7">
              {faq.answer}
            </div>
          )}
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ================= FINAL CTA ================= */}

<section className="py-20 bg-blue-600 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-widest font-semibold text-blue-100">
      Join the Journey
    </span>

    <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
      Ready to Participate in the
      <br />
      AFSC Commerce Olympiad?
    </h2>

    <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
      Take the first step towards showcasing your academic excellence,
      strengthening your commerce knowledge, and becoming a part of
      India's emerging national-level Commerce Olympiad.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <button
        onClick={() => navigate("/contact")}
        className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Register Now
      </button>

      <button
        onClick={() => navigate("/contact")}
        className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
      >
        Contact Us
      </button>

    </div>

  </div>
</section>
      </>
  );
}

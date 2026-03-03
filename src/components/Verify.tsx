import { useState } from "react";
import Award from "lucide-react/dist/esm/icons/award";
import Building2 from "lucide-react/dist/esm/icons/building-2";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxqb-cPdq7skBVjOHpc7rsgekMlV8hSbvG571HwyGp6G9e4XhAnfFrJrPIc4NPC1lye/exec";

export default function Verify() {
  // Candidate states
  const [certId, setCertId] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [certResult, setCertResult] = useState<any>(null);
  const [certError, setCertError] = useState("");
  const [certLoading, setCertLoading] = useState(false);

  // Institute states
  const [centerName, setCenterName] = useState("");
  const [centerEmail, setCenterEmail] = useState("");
  const [centerResult, setCenterResult] = useState<any>(null);
  const [centerError, setCenterError] = useState("");
  const [centerLoading, setCenterLoading] = useState(false);

  // ================= CERTIFICATE VERIFICATION =================
  const verifyCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCertResult(null);
    setCertError("");
    setCertLoading(true);

    const url =
      `${SCRIPT_URL}?type=certificate` +
      `&certId=${encodeURIComponent(certId.trim())}` +
      `&email=${encodeURIComponent(candidateEmail.trim().toLowerCase())}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.verified) {
        setCertError(data.message || "Certificate not found.");
      } else {
        setCertResult(data.data);
      }
    } catch {
      setCertError("Verification service unavailable.");
    } finally {
      setCertLoading(false);
    }
  };

  // ================= CENTER VERIFICATION =================
  const verifyCenter = async (e: React.FormEvent) => {
    e.preventDefault();
    setCenterResult(null);
    setCenterError("");
    setCenterLoading(true);

    const url =
      `${SCRIPT_URL}?type=center` +
      `&email=${encodeURIComponent(centerEmail.trim().toLowerCase())}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.verified) {
        setCenterError(data.message || "Institute not authorized.");
      } else {
        setCenterResult(data.data);
      }
    } catch {
      setCenterError("Verification service unavailable.");
    } finally {
      setCenterLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verification System
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verify the authenticity of AFSC certifications and authorized training
            centers through our official registry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* ================= CERTIFICATE ================= */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Individual Certification
            </h2>

            <form className="space-y-4" onSubmit={verifyCertificate}>
              <input
                type="text"
                placeholder="Certification ID"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Registered Candidate Email"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <button
                disabled={certLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors disabled:opacity-70"
              >
                {certLoading ? "Checking..." : "Verify Certificate"}
              </button>
            </form>

            {certLoading && (
              <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                Verifying certificate, please wait...
              </div>
            )}

            {certError && (
              <p className="mt-4 text-red-600 font-medium">{certError}</p>
            )}

            {certResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                <p><b>Name:</b> {certResult.name}</p>
                <p><b>Course:</b> {certResult.course}</p>
                <p><b>Result:</b> {certResult.result}</p>
                <p><b>Date of Issuance:</b> {certResult.date}</p>
                <p><b>Institute:</b> {certResult.institute}</p>
              </div>
            )}
          </div>

          {/* ================= CENTER ================= */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Authorized Center
            </h2>

            <form className="space-y-4" onSubmit={verifyCenter}>
              <input
                type="text"
                placeholder="Center Name (optional)"
                value={centerName}
                onChange={(e) => setCenterName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Official Center Email"
                value={centerEmail}
                onChange={(e) => setCenterEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />

              <button
                disabled={centerLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors disabled:opacity-70"
              >
                {centerLoading ? "Checking..." : "Verify Center"}
              </button>
            </form>

            {centerLoading && (
              <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                Verifying center, please wait...
              </div>
            )}

            {centerError && (
              <p className="mt-4 text-red-600 font-medium">{centerError}</p>
            )}

            {centerResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                <p><b>Status:</b> Authorized</p>
                <p><b>ATC No:</b> {centerResult.atc}</p>
                <p><b>Institute:</b> {centerResult.name}</p>
                <p><b>Valid Till:</b> {centerResult.valid}</p>
                <p><b>District:</b> {centerResult.district}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
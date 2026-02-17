import { useState } from "react";
import Award from "lucide-react/dist/esm/icons/award";
import Building2 from "lucide-react/dist/esm/icons/building-2";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqb-cPdq7skBVjOHpc7rsgekMlV8hSbvG571HwyGp6G9e4XhAnfFrJrPIc4NPC1lye/exec";

export default function Verify() {
  // Candidate states
  const [certId, setCertId] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [certResult, setCertResult] = useState<any>(null);
  const [certError, setCertError] = useState("");

  // Institute states
  const [centerName, setCenterName] = useState("");
  const [centerEmail, setCenterEmail] = useState("");
  const [centerResult, setCenterResult] = useState<any>(null);
  const [centerError, setCenterError] = useState("");

  // Certificate verification
  const verifyCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCertResult(null);
    setCertError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "certificate",
          certificateId: certId.trim(),
          email: candidateEmail.trim().toLowerCase(),
        }),
      });

      const data = await res.json();

      if (!data.verified) {
        setCertError(data.message || "Certificate not found.");
      } else {
        setCertResult(data.data);
      }
    } catch {
      setCertError("Verification service unavailable.");
    }
  };

  // Institute verification
  const verifyCenter = async (e: React.FormEvent) => {
    e.preventDefault();
    setCenterResult(null);
    setCenterError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "center",
          email: centerEmail.trim().toLowerCase(),
        }),
      });

      const data = await res.json();

      if (!data.verified) {
        setCenterError(data.message || "Institute not authorized.");
      } else {
        setCenterResult(data.data);
      }
    } catch {
      setCenterError("Verification service unavailable.");
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Verify Individual Certification */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Individual Certification
            </h2>

            <p className="text-gray-600 mb-6">
              Verify individual credentials issued by AFSC using the certificate
              ID and the registered candidate email address.
            </p>

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

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Verify Certificate
              </button>
            </form>

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

          {/* Verify Authorized Center */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-white" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verify Authorized Center
            </h2>

            <p className="text-gray-600 mb-6">
              Confirm whether a training center is officially authorized by AFSC
              using the registered center email address.
            </p>

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

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Verify Center
              </button>
            </form>

            {centerError && (
              <p className="mt-4 text-red-600 font-medium">{centerError}</p>
            )}

            {centerResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                <p><b>Status:</b> Authorized</p>
                <p><b>ATC No:</b> {centerResult.atc}</p>
                <p><b>Institute:</b> {centerResult.instituteName}</p>
                <p><b>Valid Till:</b> {centerResult.validTill}</p>
                <p><b>District:</b> {centerResult.district}</p>
              </div>
            )}
          </div>

        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            About AFSC Verification
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p className="mb-4">
                The AFSC Verification System is the official registry maintained
                by the Accounting & Finance Skill Council to authenticate
                certifications and authorized training centers.
              </p>
              <p>
                Email-based verification helps reduce misuse and ensures greater
                accuracy while validating official AFSC records.
              </p>
            </div>
            <div>
              <p className="mb-4">
                For any verification discrepancies or suspected misuse, please
                report to:
              </p>
              <p className="font-semibold text-gray-900 mb-2">
                afsc.india@zohomail.in
              </p>
              <p className="text-sm text-gray-600">
                Response time: 24–48 hours for all verification inquiries
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

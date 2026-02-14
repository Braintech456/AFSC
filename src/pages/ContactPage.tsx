import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import AffiliationStrip from '../components/AffiliationStrip';

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Affiliation Strip */}
      <AffiliationStrip />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            For queries related to certifications, authorized training centers,
            verification of credentials, or institutional partnerships, you may
            contact the Accounting & Finance Skill Council using the details
            provided below.
          </p>
        </section>

        {/* Contact Info Grid */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">

          {/* Contact Details */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-semibold text-gray-900">Office Locations</p>
                <p className="text-gray-700">
                  Head Office: Gurugram, Haryana<br />
                  Regional Office: Nashik, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-700">+91 93243 52753</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-700">afsc.nashik@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-semibold text-gray-900">Office Hours</p>
                <p className="text-gray-700">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Purpose / Guidance */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How We Can Help
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>— Verification of certificates and credentials</li>
              <li>— Information on AFSC certification programs</li>
              <li>— Authorized training center inquiries</li>
              <li>— Institutional partnerships and affiliations</li>
              <li>— General support and guidance</li>
            </ul>

            <p className="text-gray-600 mt-6 text-sm">
              For faster resolution, please include relevant details such as
              certificate number, institute name, or course title in your
              communication.
            </p>
          </div>
        </section>

        {/* Note */}
        <section className="text-sm text-gray-600 max-w-4xl">
          <p>
            AFSC does not charge any fee for basic verification or general
            inquiries. Candidates and institutions are advised to communicate
            only through official contact details published on this website.
          </p>
        </section>

      </div>
    </main>
  );
}

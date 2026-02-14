import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react';
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
            verification of credentials, or institutional partnerships, please
            contact the Accounting & Finance Skill Council using the information
            below.
          </p>
        </section>

        {/* Contact Info + Support */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">

          {/* Contact Details */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-medium text-gray-900">Office Locations</p>
                <p className="text-gray-700">
                  Head Office: Gurugram, Haryana<br />
                  Regional Office: Nashik, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-700">+91 93243 52753</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-700">afsc.nashik@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="font-medium text-gray-900">Office Hours</p>
                <p className="text-gray-700">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Support */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Support
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>— Certificate verification & validation</li>
              <li>— AFSC certification program details</li>
              <li>— Authorized training center inquiries</li>
              <li>— Institutional affiliation requests</li>
              <li>— General guidance & support</li>
            </ul>

            <p className="text-sm text-gray-600 mt-6">
              Please include relevant details such as certificate number,
              institute name, or course title to help us assist you faster.
            </p>
          </div>
        </section>

        {/* Who Should Contact */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Who Can Reach Out to AFSC?
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            <p>
              <strong>Students & Professionals:</strong>  
              Certification details, verification, career guidance.
            </p>
            <p>
              <strong>Training Institutes:</strong>  
              Authorization process, compliance, audits, and affiliation.
            </p>
            <p>
              <strong>Employers:</strong>  
              Candidate verification and certification validation.
            </p>
            <p>
              <strong>Partners:</strong>  
              Institutional collaborations and skill development initiatives.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-100 rounded-xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-blue-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-medium text-gray-900">
                How can I verify an AFSC certificate?
              </p>
              <p className="mt-1">
                You can verify certificates using the “Verify” section on the
                website by entering the certificate details provided.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Does AFSC charge any fee for verification?
              </p>
              <p className="mt-1">
                No. AFSC does not charge any fee for basic certificate
                verification or general inquiries.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                How can an institute become an authorized center?
              </p>
              <p className="mt-1">
                Institutes may apply through the Authorized Centers section and
                will be guided through evaluation and compliance procedures.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                What certifications are offered by AFSC?
              </p>
              <p className="mt-1">
                AFSC offers standardized certifications in accounting, taxation,
                GST, and finance-related domains through authorized centers.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

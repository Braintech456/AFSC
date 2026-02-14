import { Mail, Phone, MapPin, Clock, HelpCircle, Send } from 'lucide-react';
import AffiliationStrip from '../components/AffiliationStrip';

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Affiliation Strip */}
      <AffiliationStrip />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            For queries related to certifications, authorized training centers,
            verification of credentials, or institutional partnerships, please
            contact AFSC using the information below.
          </p>
        </section>

        {/* Contact Info + Support */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Details */}
          <div className="bg-white border rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Office Locations</p>
                  <p>
                    Head Office: Gurugram, Haryana<br />
                    Regional Office: Nashik, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 93243 52753</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>afsc.nashik@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p>
                    Mon–Fri: 9:00 AM – 6:00 PM<br />
                    Sat: 9:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Support */}
          <div className="bg-blue-50 border rounded-xl p-10">
            <h3 className="text-2xl font-bold mb-6">Quick Support</h3>
            <ul className="space-y-3">
              <li>• Certificate verification</li>
              <li>• AFSC certification details</li>
              <li>• Authorized center applications</li>
              <li>• Institutional affiliations</li>
              <li>• General guidance</li>
            </ul>
          </div>
        </section>

        {/* MESSAGE SECTION (ANCHOR TARGET) */}
        <section
          id="message"
          className="bg-white border rounded-xl p-10 mb-16 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </section>

        {/* FAQs */}
        <section className="bg-slate-100 rounded-xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-blue-600" />
            <h3 className="text-2xl font-bold">FAQs</h3>
          </div>

          <div className="space-y-4">
            <p><strong>How can I verify a certificate?</strong> Use the Verify section.</p>
            <p><strong>Is verification free?</strong> Yes.</p>
            <p><strong>How to become an authorized center?</strong> Apply using this form.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

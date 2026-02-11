import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export default function Chapters() {
  return (
    <section id="chapters" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            District-Level <span className="text-blue-600">Chapters</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expanding across India to bring quality accounting and finance education to every district. Find a training center near you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">200+ Training Centers</h3>
                <p className="text-gray-600">Operational across 28 states and 8 union territories</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                <span>Every district headquarters has a certified training facility</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600 flex-shrink-0" size={20} />
                <span>Dedicated helpline for each regional chapter</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <span>Local coordinators for personalized support</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-teal-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Your Nearest Chapter</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your State</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Choose State</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Delhi</option>
                  <option>Uttar Pradesh</option>
                  <option>Gujarat</option>
                  <option>West Bengal</option>
                  <option>Rajasthan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your District</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Choose District</option>
                </select>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Find Training Center
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in Starting a Chapter?</h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to establish a training center in your district. Join our mission to make skill development accessible to all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Franchise Partner
            </button>
            <button className="bg-blue-700/50 backdrop-blur-sm hover:bg-blue-700/70 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 transition-colors">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

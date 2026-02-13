import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AFSC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AFSC</h3>
                <p className="text-xs text-blue-200">Under Skill India Mission</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Empowering India’s youth with world-class accounting and finance
              skills, recognized by the Government of India.
            </p>
            <div className="flex gap-3">
              <a className="w-9 h-9 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a className="w-9 h-9 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a className="w-9 h-9 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center">
                <Linkedin size={18} />
              </a>
              <a className="w-9 h-9 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
              <li><a href="#benefits" className="hover:text-white">Membership</a></li>
              <li><a href="#chapters" className="hover:text-white">Training Centers</a></li>
              <li><a href="#verify" className="hover:text-white">Verify Certificate</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white">Student Portal</a></li>
              <li><a href="#" className="hover:text-white">Download Syllabus</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Head Office: Gurugram, Haryana<br />
                  Regional Office: Nashik, Maharashtra
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">+91 93243 52753</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">afsc.nashik@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-blue-100 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-blue-100 text-sm">Sat: 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2024 Accounting & Finance Skill Council.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <a className="hover:text-white">Privacy Policy</a>
              <a className="hover:text-white">Terms of Service</a>
              <a className="hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/BV54hDTb/afsc-logo.png"
                alt="AFSC Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Accounting & Finance Skill Council
                </h3>
                <p className="text-sm text-slate-400">
                  Supporting Skill India Mission
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AFSC is a sector-focused skill council working towards standardizing
              accounting and finance education, assessment, and certification
              across India.
            </p>

            <div className="flex gap-4 mt-5">
              <a className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a className="hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About AFSC</Link></li>
              <li><Link to="/certifications" className="hover:text-white">Certifications</Link></li>
              <li><Link to="/authorized-centers" className="hover:text-white">Authorized Centers</Link></li>
              <li><Link to="/verify" className="hover:text-white">Verify Certificate</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>FAQs</li>
              <li>Certification Guidelines</li>
              <li>Authorized Center Process</li>
              <li>Student Information</li>
              <li>Grievance & Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Information
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-1" />
                <span>
                  Head Office: Kaushal, 1st Floor, Near Gauri Shankar Mandir, Sector 9A, Gurugram - 122 001<br />
Regional Office: 3rd Floor, Indira Heights, Old Gangapur Naka, Gangapur Road, Nashik - 422 005
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={16} className="mt-1" />
                <span>+91 93243 52753</span>
              </li>

              <li className="flex gap-3">
                <Mail size={16} className="mt-1" />
                <span>afsc.india@zohomail.in</span>
              </li>
            </ul>

            <div className="mt-5 text-sm text-slate-400">
              <p className="font-medium text-slate-300 mb-1">Office Hours</p>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Accounting & Finance Skill Council. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

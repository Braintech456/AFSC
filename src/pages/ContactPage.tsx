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
<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
<p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
For queries related to certifications, authorized training centers,
verification of credentials, or institutional partnerships, please
contact the Accounting & Finance Skill Council using the information
below. We're here to help!
</p>
</section>

{/* Contact Info + Support */}
<section className="grid md:grid-cols-2 gap-10 mb-16">
{/* Contact Details */}
<div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
<h3 className="text-2xl font-bold text-gray-900 mb-6">
Contact Information
</h3>

<div className="space-y-6">
<div className="flex items-start gap-4">
<MapPin className="text-blue-600 mt-1" size={24} />
<div>
<p className="font-semibold text-gray-900">Office Locations</p>
<p className="text-gray-700">
Head Office: Gurugram, Haryana<br />
Regional Office: Nashik, Maharashtra
</p>
</div>
</div>

<div className="flex items-start gap-4">
<Phone className="text-blue-600 mt-1" size={24} />
<div>
<p className="font-semibold text-gray-900">Phone</p>
<p className="text-gray-700">+91 93243 52753</p>
</div>
</div>

<div className="flex items-start gap-4">
<Mail className="text-blue-600 mt-1" size={24} />
<div>
<p className="font-semibold text-gray-900">Email</p>
<p className="text-gray-700">afsc.nashik@gmail.com</p>
</div>
</div>

<div className="flex items-start gap-4">
<Clock className="text-blue-600 mt-1" size={24} />
<div>
<p className="font-semibold text-gray-900">Office Hours</p>
<p className="text-gray-700">
Monday – Friday: 9:00 AM – 6:00 PM<br />
Saturday: 9:00 AM – 2:00 PM
</p>
</div>
</div>
</div>
</div>

{/* Quick Support */}
<div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
<h3 className="text-2xl font-bold text-gray-900 mb-6">
Quick Support
</h3>

<ul className="space-y-3 text-gray-700 text-lg">
<li className="flex items-start">
<span className="text-blue-600 mr-3">•</span>
Certificate verification & validation
</li>
<li className="flex items-start">
<span className="text-blue-600 mr-3">•</span>
AFSC certification program details
</li>
<li className="flex items-start">
<span className="text-blue-600 mr-3">•</span>
Authorized training center inquiries
</li>
<li className="flex items-start">
<span className="text-blue-600 mr-3">•</span>
Institutional affiliation requests
</li>
<li className="flex items-start">
<span className="text-blue-600 mr-3">•</span>
General guidance & support
</li>
</ul>

<p className="text-sm text-gray-600 mt-6">
Please include relevant details such as certificate number,
institute name, or course title to help us assist you faster.
</p>
</div>
</section>

{/* Contact Form */}
<section className="bg-white border border-gray-200 rounded-2xl p-10 mb-16 shadow-lg">
<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
Send Us a Message
</h3>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Full Name
</label>
<input
type="text"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
placeholder="Your Name"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Email Address
</label>
<input
type="email"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
placeholder="your.email@example.com"
/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Subject
</label>
<input
type="text"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
placeholder="Subject of your inquiry"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Message
</label>
<textarea
rows="5"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
placeholder="Your message here..."
></textarea>
</div>
<button
type="submit"
className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 flex items-center justify-center gap-2"
>
<Send size={20} />
Send Message
</button>
</form>
</section>

{/* Who Should Contact */}
<section className="bg-white border border-gray-200 rounded-2xl p-10 mb-16 shadow-lg hover:shadow-xl transition-shadow duration-300">
<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
Who Can Reach Out to AFSC?
</h3>

<div className="grid sm:grid-cols-2 gap-6 text-gray-700">
<div className="bg-gray-50 p-4 rounded-lg">
<p className="font-semibold text-gray-900">Students & Professionals:</p>
<p>Certification details, verification, career guidance.</p>
</div>
<div className="bg-gray-50 p-4 rounded-lg">
<p className="font-semibold text-gray-900">Training Institutes:</p>
<p>Authorization process, compliance, audits, and affiliation.</p>
</div>
<div className="bg-gray-50 p-4 rounded-lg">
<p className="font-semibold text-gray-900">Employers:</p>
<p>Candidate verification and certification validation.</p>
</div>
<div className="bg-gray-50 p-4 rounded-lg">
<p className="font-semibold text-gray-900">Partners:</p>
<p>Institutional collaborations and skill development initiatives.</p>
</div>
</div>
</section>

{/* FAQs */}
<section className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-10 shadow-lg">
<div className="flex items-center gap-3 mb-8">
<HelpCircle className="text-blue-600" size={24} />
<h3 className="text-2xl font-bold text-gray-900">
Frequently Asked Questions
</h3>
</div>

<div className="space-y-6 text-gray-700">
<div className="bg-white p-6 rounded-lg shadow-sm">
<p className="font-semibold text-gray-900">
How can I verify an AFSC certificate?
</p>
<p className="mt-2">
You can verify certificates using the “Verify” section on the
website by entering the certificate details provided.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<p className="font-semibold text-gray-900">
Does AFSC charge any fee for verification?
</p>
<p className="mt-2">
No. AFSC does not charge any fee for basic certificate
verification or general inquiries.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<p className="font-semibold text-gray-900">
How can an institute become an authorized center?
</p>
<p className="mt-2">
Institutes may apply through the Authorized Centers section and
will be guided through evaluation and compliance procedures.
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<p className="font-semibold text-gray-900">
What certifications are offered by AFSC?
</p>
<p className="mt-2">
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
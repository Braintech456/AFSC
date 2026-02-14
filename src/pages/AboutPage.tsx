import PageHeader from '../components/PageHeader';
import { Eye, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
return (
<>
{/* Page Header */}
<PageHeader
title="About AFSC"
subtitle="Accounting & Finance Skill Council of India"
/>

{/* Page Content */}
<main className="bg-slate-50 min-h-screen py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

{/* Intro */}
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-gray-900 mb-4">
About <span className="text-blue-600">AFSC</span>
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
The Accounting & Finance Skill Council is the apex authority for
standardizing, regulating, and certifying accounting and finance
professionals across India.
</p>
</div>

{/* Cards */}
<div className="grid md:grid-cols-3 gap-8">

{/* Vision */}
<div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Eye className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
Vision
</h3>
<p className="text-gray-700 leading-relaxed">
To be India's premier skill development organization in accounting
and finance, recognized for excellence in training, certification,
and creating employment-ready professionals who contribute to the
nation's economic growth.
</p>
</div>

{/* Mission */}
<div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Target className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
Mission
</h3>
<p className="text-gray-700 leading-relaxed">
To deliver world-class, industry-relevant training in accounting
and finance through standardized curriculum, cutting-edge
technology, and a nationwide network of certified training centers,
ensuring skill development reaches every corner of India.
</p>
</div>

{/* Core Objectives */}
<div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Lightbulb className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
Core Objectives
</h3>
<ul className="space-y-3 text-gray-700">
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold mt-1">•</span>
<span>Maintain standardized curriculum and assessment standards</span>
</li>
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold mt-1">•</span>
<span>Regulate and audit authorized training centers</span>
</li>
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold mt-1">•</span>
<span>Issue and verify government-recognized certifications</span>
</li>
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold mt-1">•</span>
<span>Ensure quality, transparency, and credibility</span>
</li>
</ul>
</div>

</div>
</div>
</main>
</>
);
}
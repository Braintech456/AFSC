import PageHeader from '../components/PageHeader';
import { Eye, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
return (
<>
<PageHeader
title="About AFSC"
subtitle="Accounting & Finance Skill Council of India"
/>

<main className="bg-slate-50 min-h-screen py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-gray-300 rounded-xl p-8">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Eye className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
<p className="text-gray-700">
To be India's premier skill development organization in accounting
and finance, recognized for excellence in training and certification.
</p>
</div>

<div className="bg-white border border-gray-300 rounded-xl p-8">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Target className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
<p className="text-gray-700">
To deliver industry-relevant training through standardized curriculum
and certified training centers across India.
</p>
</div>

<div className="bg-white border border-gray-300 rounded-xl p-8">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<Lightbulb className="text-white" size={32} />
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
Core Objectives
</h3>
<ul className="space-y-2 text-gray-700">
<li>• Standardized curriculum and assessments</li>
<li>• Regulation of authorized centers</li>
<li>• Government-recognized certifications</li>
<li>• Quality and credibility assurance</li>
</ul>
</div>

</div>
</div>
</main>
</>
);
}
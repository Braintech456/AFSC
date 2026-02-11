import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AFSC</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-900">ACCOUNTING & FINANCE SKILL COUNCIL</h1>
                  <p className="text-xs text-gray-600">Under Skill India Mission</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Courses</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
            <a href="#chapters" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Chapters</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium">Benefits</a>
              <a href="#chapters" className="text-gray-700 hover:text-blue-600 font-medium">Chapters</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full">
                Apply Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

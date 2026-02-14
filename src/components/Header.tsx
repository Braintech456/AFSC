import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? 'text-blue-600' : 'text-gray-700';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
  src="https://i.ibb.co/BV54hDTb/afsc-logo.png"
  alt="AFSC Logo"
  className="h-12 w-auto rounded-md"
/>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">
                ACCOUNTING & FINANCE SKILL COUNCIL
              </h1>
              <p className="text-xs text-gray-600">
                Skill India Mission
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${isActive('/')} hover:text-blue-700 font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/certifications"
              className={`${isActive('/certifications')} hover:text-blue-700 font-medium transition-colors`}
            >
              Certifications
            </Link>
            <Link
              to="/authorized-centers"
              className={`${isActive('/authorized-centers')} hover:text-blue-700 font-medium transition-colors`}
            >
              Authorized Centers
            </Link>
          </nav>

          {/* Verify Button */}
          <div className="hidden md:block">
            <Link to="/verify">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Verify
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`${isActive('/')} font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/certifications"
                className={`${isActive('/certifications')} font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link
                to="/authorized-centers"
                className={`${isActive('/authorized-centers')} font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Authorized Centers
              </Link>
              <Link to="/verify" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full">
                  Verify
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

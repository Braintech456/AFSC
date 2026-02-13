import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AFSC</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-900">ACCOUNTING & FINANCE SKILL COUNCIL</h1>
                  <p className="text-xs text-gray-600">Under Skill India Mission</p>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} hover:text-blue-700 font-medium transition-colors`}>Home</Link>
            <Link to="/certifications" className={`${isActive('/certifications')} hover:text-blue-600 font-medium transition-colors`}>Certifications</Link>
            <Link to="/authorized-centers" className={`${isActive('/authorized-centers')} hover:text-blue-600 font-medium transition-colors`}>Authorized Centers</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/verify">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Verify
              </button>
            </Link>
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
              <Link to="/" className={`${isActive('/')} font-medium`}>Home</Link>
              <Link to="/certifications" className={`${isActive('/certifications')} hover:text-blue-600 font-medium`}>Certifications</Link>
              <Link to="/authorized-centers" className={`${isActive('/authorized-centers')} hover:text-blue-600 font-medium`}>Authorized Centers</Link>
              <Link to="/verify" className="w-full">
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

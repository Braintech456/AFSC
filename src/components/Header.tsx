import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string): string =>
    location.pathname === path
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg shadow-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/BV54hDTb/afsc-logo.png"
              alt="AFSC Logo"
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
<h1 className="text-lg lg:text-xl font-extrabold tracking-tight text-gray-900 leading-tight">
  ACCOUNTING & FINANCE SKILL COUNCIL
              </h1>
              <p className="text-[11px] text-gray-500">
                Supporting Skill India Mission
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link to="/" className={`${isActive('/')} hover:text-blue-700`}>
  Home
</Link>

<Link
  to="/commerce-olympiad"
  className={`${isActive('/commerce-olympiad')} hover:text-blue-700`}
>
  Olympiad
</Link>
            <Link
              to="/certifications"
              className={`${isActive('/certifications')} hover:text-blue-700`}
            >
              Certifications
            </Link>
            <Link
              to="/authorized-centers"
              className={`${isActive('/authorized-centers')} hover:text-blue-700`}
            >
              Authorized Centers
            </Link>
            <Link
              to="/membership"
              className={`${isActive('/membership')} hover:text-blue-700`}
            >
              Membership
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about')} hover:text-blue-700`}
            >
              About AFSC
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact')} hover:text-blue-700`}
            >
              Contact
            </Link>
          </nav>

          {/* Verify Button */}
          <div className="hidden md:block">
            <Link to="/verify">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
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
                className={isActive('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
  to="/commerce-olympiad"
  className={isActive('/commerce-olympiad')}
  onClick={() => setIsMenuOpen(false)}
>
  Commerce Olympiad
</Link>
              
              <Link
                to="/certifications"
                className={isActive('/certifications')}
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link
                to="/authorized-centers"
                className={isActive('/authorized-centers')}
                onClick={() => setIsMenuOpen(false)}
              >
                Authorized Centers
              </Link>
              <Link
                to="/membership"
                className={isActive('/membership')}
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
              <Link
                to="/about"
                className={isActive('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About AFSC
              </Link>
              <Link
                to="/contact"
                className={isActive('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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

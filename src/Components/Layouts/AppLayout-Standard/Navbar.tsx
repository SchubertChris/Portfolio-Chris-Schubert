// ===========================
// NAVBAR COMPONENT
// ===========================

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '@/Components/Ui/ThemeToggle-Button';
import { createStickyNavObserver } from '@/Components/Utils/ScrollObserver';
import './Navbar.scss';
import Logo from '@/Assets/Images/Logo/CandleScopeLogo.png'; // Import your logo image

interface NavLink {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Über mich', path: '/about' },
    { label: 'Projekte', path: '/projects' },
    { label: 'Kontakt', path: '/contact' },
  ];

  useEffect(() => {
    // Sticky Navigation Observer
    const stickyObserver = createStickyNavObserver(setIsSticky);

    // Schließe Mobile Menu bei Route-Änderung
    setIsOpen(false);

    return () => {
      stickyObserver.destroy();
    };
  }, [location]);

  // Verhindere Scrollen wenn Mobile Menu offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'navbar--sticky' : ''}`}>
        <div className="navbar__container container">
          <Link to="/" className="navbar__logo">
            <img src={Logo} alt="CandleScope Logo" className="navbar__logo-image" />
            <span className="navbar__logo-subtext">Chrris Schubert</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__desktop">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__link ${
                      location.pathname === link.path ? 'navbar__link--active' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-links">
            {navLinks.map((link, index) => (
              <li 
                key={link.path}
                style={{
                  animationDelay: isOpen ? `${100 + index * 50}ms` : '0ms'
                }}
              >
                <Link
                  to={link.path}
                  className={`navbar__mobile-link ${
                    location.pathname === link.path ? 'navbar__mobile-link--active' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle in Mobile Menu */}
          <div className="navbar__mobile-footer">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>

      {/* Overlay für Mobile Menu */}
      {isOpen && (
        <div 
          className="navbar__overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail
} from 'react-icons/fi';
import Logo from '@/Assets/Images/Logo/CandleScopeLogo.png';
import '@/Components/Layouts/AppLayout-Standard/Style/Navbar.scss';

interface NavbarProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Navbar: React.FC<NavbarProps> = ({
  className = '',
  onNavigate
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Navigation Items Configuration mit React Icons
  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
      icon: FiHome
    },
    {
      id: 'about',
      label: 'About',
      href: '#about',
      icon: FiUser
    },
    {
      id: 'work',
      label: 'Work',
      href: '#work',
      icon: FiBriefcase
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      icon: FiMail
    }
  ];

  // Scroll Detection für erweiterte Glasmorphismus-Effekte
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock für Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Escape Key Handler für Mobile Menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Navigation Handler
  const handleNavigation = (section: string): void => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(section);
    }

    // Smooth Scroll Implementation
    const element = document.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Mobile Menu Toggle
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Mobile Menu Backdrop Click Handler
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  // Dynamic CSS Classes
  const navbarClasses = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
    className
  ].filter(Boolean).join(' ');

  const toggleClasses = [
    'navbar-toggle',
    isMobileMenuOpen ? 'active' : ''
  ].filter(Boolean).join(' ');

  const mobileMenuClasses = [
    'navbar-mobile',
    isMobileMenuOpen ? 'active' : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          {/* Logo Section */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('home');
            }}
            aria-label="CandleScope Home"
          >
            <img
              src={Logo}
              alt="CandleScope Logo"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar-links" role="menubar">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} role="none">
                  <a
                    href={item.href}
                    className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                    }}
                    role="menuitem"
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <IconComponent className="navbar-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className={toggleClasses}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            type="button"
          >
            <span className="hamburger" aria-hidden="true">
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={mobileMenuClasses}
        id="mobile-navigation"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          className="navbar-mobile__content"
          role="navigation"
          aria-label="Mobile menu"
        >
          <ul className="navbar-mobile__links" role="menubar">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={`mobile-${item.id}`} role="none">
                  <a
                    href={item.href}
                    className={`navbar-mobile__link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                    }}
                    role="menuitem"
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <IconComponent className="navbar-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
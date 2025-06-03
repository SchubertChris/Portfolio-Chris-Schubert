// ===========================
// THEME TOGGLE BUTTON COMPONENT
// ===========================

import React, { useState, useEffect } from 'react';
import { themeService, type Theme } from '@/Services/ThemeToggle-Service';
import './ThemeToggle-Button.scss';

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(themeService.getTheme());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Subscribe to theme changes
    const unsubscribe = themeService.subscribe((newTheme) => {
      setTheme(newTheme);
    });

    return unsubscribe;
  }, []);

  const handleToggle = () => {
    setIsAnimating(true);
    themeService.toggleTheme();
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      className={`theme-toggle ${isAnimating ? 'theme-toggle--animating' : ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle__wrapper">
        {/* Sun Icon */}
        <svg
          className={`theme-toggle__icon theme-toggle__icon--sun ${
            theme === 'light' ? 'theme-toggle__icon--active' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
          <path
            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`theme-toggle__icon theme-toggle__icon--moon ${
            theme === 'dark' ? 'theme-toggle__icon--active' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggleButton;
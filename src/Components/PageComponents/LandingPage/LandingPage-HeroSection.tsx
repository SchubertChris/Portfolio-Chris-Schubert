// ===========================
// HERO SECTION COMPONENT
// ===========================

import React from 'react';
import './LandingPage-HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <section className="hero section">
      <div className="hero__container container">
        <div className="hero__content">
          {/* Greeting */}
          <p className="hero__greeting animate-fadeInDown">
            Hallo, ich bin
          </p>

          {/* Name */}
          <h1 className="hero__title animate-fadeInUp animation-delay-200">
            Chris Schubert
          </h1>

          {/* Role */}
          <h2 className="hero__subtitle animate-fadeInUp animation-delay-400">
            Full-Stack Developer & <span className="hero__highlight">Creative Mind</span>
          </h2>

          {/* Description */}
          <p className="hero__description animate-fadeInUp animation-delay-600">
            Ich erschaffe digitale Erlebnisse, die begeistern. Mit modernsten Technologien 
            und einem Auge für Design entwickle ich Lösungen, die nicht nur funktionieren, 
            sondern inspirieren.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions animate-fadeInUp animation-delay-800">
            <a href="#work" className="btn btn-primary btn-lg">
              Meine Projekte
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual animate-scaleIn animation-delay-1000">
          {/* Code Window Mock */}
          <div className="hero__code-window">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red"></span>
              <span className="hero__code-dot hero__code-dot--yellow"></span>
              <span className="hero__code-dot hero__code-dot--green"></span>
            </div>
            <div className="hero__code-content">
              <pre>
                <code>
{`const developer = {
  name: 'Chris Schubert',
  skills: ['React', 'TypeScript', 'Node.js'],
  passion: 'Creating amazing experiences',
  available: true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
// Call to Action für gemeinsame Coding Projekte oder Jobangebote und Koorperationen oder auch für Arbeitsaufträge -->

// ===========================
// CTA SECTION COMPONENT
// ===========================

import React from 'react';
import './Style/LandingPage-ContactSection.scss';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta__content reveal">
          <h2 className="cta__title">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="cta__subtitle">
            Lassen Sie uns gemeinsam etwas Großartiges erschaffen.
            Ob Webentwicklung, App-Design oder kreative Lösungen – ich bin bereit!
          </p>

          <div className="cta__actions">
            <a href="mailto:contact@example.com" className="btn btn-primary btn-lg cta__btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              E-Mail schreiben
            </a>
            <a href="#" className="btn btn-secondary btn-lg cta__btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Anrufen
            </a>
          </div>

          <div className="cta__availability">
            <span className="cta__status cta__status--available"></span>
            <p className="cta__status-text">
              Aktuell verfügbar für neue Projekte
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="cta__decoration">
          <div className="cta__circle cta__circle--1"></div>
          <div className="cta__circle cta__circle--2"></div>
          <div className="cta__circle cta__circle--3"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
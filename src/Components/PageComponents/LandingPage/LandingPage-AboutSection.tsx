// Hier wird Kurz über mich erzählt in 3 Cards Privat, Berufliches und Hobbys -->

// ===========================
// ABOUT SECTION COMPONENT
// ===========================

import React from 'react';
import './LandingPage-AboutSection.scss';

interface AboutCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const aboutCards: AboutCard[] = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Beruflich',
      description: 'Als Full-Stack Developer arbeite ich mit modernen Technologien wie React, TypeScript und Node.js. Mein Fokus liegt auf sauberer Code-Architektur und außergewöhnlichen User Experiences.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Privat',
      description: 'Abseits des Codes bin ich ein kreativer Geist, der gerne neue Technologien erkundet, an Open-Source-Projekten arbeitet und sein Wissen mit der Community teilt.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Hobbys',
      description: 'In meiner Freizeit experimentiere ich mit neuen Frameworks, treibe Sport, reise gerne und bin immer auf der Suche nach der perfekten Tasse Kaffee.',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__header reveal">
          <h2 className="about__title">Über mich</h2>
          <p className="about__subtitle">
            Ein kurzer Einblick in meine Welt
          </p>
        </div>

        <div className="about__grid">
          {aboutCards.map((card, index) => (
            <div 
              key={card.title} 
              className="about__card card reveal"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="about__card-icon">
                {card.icon}
              </div>
              <h3 className="about__card-title">{card.title}</h3>
              <p className="about__card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="about__stats reveal">
          <div className="about__stat">
            <span className="about__stat-number">5+</span>
            <span className="about__stat-label">Jahre Erfahrung</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">50+</span>
            <span className="about__stat-label">Projekte abgeschlossen</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">∞</span>
            <span className="about__stat-label">Tassen Kaffee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
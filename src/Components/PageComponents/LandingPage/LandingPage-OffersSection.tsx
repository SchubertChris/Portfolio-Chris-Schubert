// Hier kommen Kundenrezensionen und Erfahrungsberichte rein -->

// ===========================
// OFFERS SECTION COMPONENT (TESTIMONIALS)
// ===========================

import React, { useState } from 'react';
import './Style/LandingPage-OffersSection.scss';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const OffersSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart GmbH',
      content: 'Chris hat unsere Vision perfekt umgesetzt. Die neue Plattform übertrifft alle Erwartungen und unsere Kunden sind begeistert.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateCo',
      content: 'Außergewöhnliche Arbeit! Chris versteht nicht nur die technischen Anforderungen, sondern denkt auch aus Nutzerperspektive.',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa Mueller',
      role: 'Marketing Director',
      company: 'Digital Solutions',
      content: 'Die Zusammenarbeit war hervorragend. Termine wurden eingehalten, die Kommunikation war klar und das Ergebnis spricht für sich.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="offers section">
      <div className="container">
        <div className="offers__header reveal">
          <h2 className="offers__title">Was Kunden sagen</h2>
          <p className="offers__subtitle">
            Erfahrungsberichte von zufriedenen Partnern
          </p>
        </div>

        <div className="offers__testimonials reveal">
          <button
            className="offers__nav offers__nav--prev"
            onClick={handlePrev}
            aria-label="Vorheriges Testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="offers__testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`offers__testimonial ${index === activeTestimonial ? 'offers__testimonial--active' : ''
                  }`}
              >
                <div className="offers__quote">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>

                <p className="offers__content">{testimonial.content}</p>

                <div className="offers__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <div className="offers__author">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="offers__author-avatar"
                  />
                  <div className="offers__author-info">
                    <h4 className="offers__author-name">{testimonial.name}</h4>
                    <p className="offers__author-role">
                      {testimonial.role} bei {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="offers__nav offers__nav--next"
            onClick={handleNext}
            aria-label="Nächstes Testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="offers__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`offers__indicator ${index === activeTestimonial ? 'offers__indicator--active' : ''
                }`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`Gehe zu Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
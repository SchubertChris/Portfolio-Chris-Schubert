// ===========================
// LANDING PAGE INDEX
// ===========================

import React, { useEffect } from 'react';
import HeroSection from '@/Components/PageComponents/LandingPage/LandingPage-HeroSection';
import AboutSection from '@/Components/PageComponents/LandingPage/LandingPage-AboutSection';
import WorkSection from '@/Components/PageComponents/LandingPage/LandingPage-WorkSection';
import OffersSection from '@/Components/PageComponents/LandingPage/LandingPage-OffersSection';
import CTASection from '@/Components/PageComponents/LandingPage/LandingPage-CTASection';
import { createFadeInObserver } from '@/Components/Utils/ScrollObserver';

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = createFadeInObserver();
    
    // Observe all reveal elements
    observer.observeAll('.reveal');

    return () => {
      observer.destroy();
    };
  }, []);

  return (
    <div className="landing-page">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <OffersSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
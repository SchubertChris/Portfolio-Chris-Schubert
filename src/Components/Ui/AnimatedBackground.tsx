// ===========================
// ANIMATED BACKGROUND COMPONENT
// ===========================

import React from 'react';
import './AnimatedBackground.scss';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      <div className="animated-background__orb animated-background__orb--1"></div>
      <div className="animated-background__orb animated-background__orb--2"></div>
      <div className="animated-background__orb animated-background__orb--3"></div>
      <div className="animated-background__orb animated-background__orb--4"></div>
      <div className="animated-background__orb animated-background__orb--5"></div>
    </div>
  );
};

export default AnimatedBackground;
// src/Components/Ui/AnimatedBackground.tsx
import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.scss';

interface OrbConfig {
  element: HTMLDivElement | null;
  baseX: number;
  baseY: number;
  moveFactorX: number;
  moveFactorY: number;
  rotationFactor: number;
}

const AnimatedBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<OrbConfig[]>([]);
  const scrollPositionRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialisiere Orb-Konfigurationen
    const initializeOrbs = () => {
      if (!backgroundRef.current) return;

      const orbs = backgroundRef.current.querySelectorAll('.animated-background__orb');
      orbsRef.current = Array.from(orbs).map((orb, index) => {
        const element = orb as HTMLDivElement;
        const rect = element.getBoundingClientRect();
        
        return {
          element,
          baseX: rect.left,
          baseY: rect.top,
          // Verschiedene Bewegungsfaktoren für jeden Orb
          moveFactorX: (index + 1) * 0.1,
          moveFactorY: (index + 1) * 0.15,
          rotationFactor: (index + 1) * 0.5
        };
      });
    };

    // Smooth Scroll Animation
    const updateOrbPositions = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      orbsRef.current.forEach((orb, index) => {
        if (!orb.element) return;

        // Parallax-Effekt
        const moveX = scrollProgress * 200 * orb.moveFactorX * (index % 2 === 0 ? 1 : -1);
        const moveY = scrollProgress * 150 * orb.moveFactorY;
        const rotate = scrollProgress * 360 * orb.rotationFactor;

        // Sanfte Bewegung mit transform
        orb.element.style.transform = `
          translate(${moveX}px, ${moveY}px) 
          rotate(${rotate}deg)
          scale(${1 + scrollProgress * 0.2})
        `;

        // Opacity-Änderung basierend auf Scroll
        const opacity = 0.3 + (Math.sin(scrollProgress * Math.PI) * 0.4);
        orb.element.style.opacity = opacity.toString();
      });
    };

    // Optimierter Scroll-Handler mit RAF
    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(updateOrbPositions);
    };

    // Maus-Parallax-Effekt (optional)
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      orbsRef.current.forEach((orb, index) => {
        if (!orb.element) return;

        const additionalX = (mouseX - 0.5) * 50 * (index % 2 === 0 ? 1 : -1);
        const additionalY = (mouseY - 0.5) * 50;

        orb.element.style.setProperty('--mouse-x', `${additionalX}px`);
        orb.element.style.setProperty('--mouse-y', `${additionalY}px`);
      });
    };

    // Event Listeners
    initializeOrbs();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', initializeOrbs);

    // Initial Update
    updateOrbPositions();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initializeOrbs);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-background" ref={backgroundRef}>
      <div className="animated-background__wrapper">
        <div className="animated-background__orb animated-background__orb--1" />
        <div className="animated-background__orb animated-background__orb--2" />
        <div className="animated-background__orb animated-background__orb--3" />
        <div className="animated-background__orb animated-background__orb--4" />
        <div className="animated-background__orb animated-background__orb--5" />
        <div className="animated-background__orb animated-background__orb--6" />
        <div className="animated-background__orb animated-background__orb--7" />
        <div className="animated-background__orb animated-background__orb--8" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
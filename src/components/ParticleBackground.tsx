import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2px and 8px
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 8}s`;
      
      // Random animation duration
      particle.style.animationDuration = `${8 + Math.random() * 4}s`;
      
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};

export default ParticleBackground;
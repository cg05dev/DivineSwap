import React, { useEffect, useRef } from 'react';

export function RainEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRainDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.opacity = `${Math.random() * 0.3 + 0.2}`; // Increased opacity
      drop.style.animationDuration = `${Math.random() * 2 + 4}s`; // Slower animation
      container.appendChild(drop);

      // Remove the drop after animation completes
      setTimeout(() => {
        drop.remove();
      }, 6000);
    };

    // Create raindrops at a moderate interval
    const rainInterval = setInterval(() => {
      if (container.childNodes.length < 100) { // Increased maximum drops
        for (let i = 0; i < 4; i++) { // Create more drops per interval
          createRainDrop();
        }
      }
    }, 200); // Slightly faster interval for more consistent rain

    return () => {
      clearInterval(rainInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    />
  );
}
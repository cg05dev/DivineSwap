import React, { useEffect, useState } from 'react';

export function LightningEffect() {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      if (Math.random() < 0.15) { // Increased probability
        setIsFlashing(true);
        // Create multiple flashes
        setTimeout(() => setIsFlashing(false), 100);
        setTimeout(() => setIsFlashing(true), 150);
        setTimeout(() => setIsFlashing(false), 200);
        setTimeout(() => setIsFlashing(true), 250);
        setTimeout(() => setIsFlashing(false), 300);
      }
    };

    const intervalId = setInterval(triggerLightning, 3000); // More frequent lightning
    return () => clearInterval(intervalId);
  }, []);

  if (!isFlashing) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent animate-flash" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent animate-flash-delayed" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/30 via-transparent to-transparent animate-flash" />
    </div>
  );
}
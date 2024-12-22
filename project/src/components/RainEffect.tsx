import React from 'react';

export function RainEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 opacity-10">
      <div className="absolute inset-0 rain-effect" />
    </div>
  );
}
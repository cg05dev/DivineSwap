import React from 'react';

export function LightningEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-20">
      <div className="absolute inset-0 bg-[url('/lightning.svg')] bg-center animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-lightning" />
    </div>
  );
}
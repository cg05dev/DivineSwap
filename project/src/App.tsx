import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import HotPairsTicker from './components/HotPairsTicker';
import SwapView from './components/swap/SwapView';
import PortfolioDashboard from './components/portfolio/PortfolioDashboard';
import TokenList from './components/TokenList';
import TokenListFull from './components/TokenListFull';
import { Navbar } from './components/Navbar';
import { RainEffect } from './components/effects/RainEffect';
import { LightningEffect } from './components/effects/LightningEffect';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen zeus-gradient relative">
        {/* Effects Layer */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <RainEffect />
          <LightningEffect />
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent animate-pulse-slow" />
        </div>
        
        <Navbar />
        
        <main className="pt-20 relative z-10">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Navigate to="/swap" replace />} />
              <Route
                path="/swap"
                element={
                  <>
                    <div className="space-y-6">
                      <SearchBar />
                      <HotPairsTicker />
                      <SwapView />
                    </div>
                  </>
                }
              />
              <Route path="/portfolio" element={<PortfolioDashboard />} />
              <Route
                path="/tokens"
                element={
                  <>
                    <div className="space-y-6">
                      <SearchBar />
                      <HotPairsTicker />
                      <TokenList />
                    </div>
                  </>
                }
              />
              <Route path="/tokens/:category" element={<TokenListFull />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
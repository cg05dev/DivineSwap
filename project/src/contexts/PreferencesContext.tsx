import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'zeus' | 'storm' | 'cosmic' | 'shadow';
type Layout = 'default' | 'compact' | 'advanced';

interface Preferences {
  theme: Theme;
  layout: Layout;
  watchlist: string[];
  chartPreferences: {
    indicators: string[];
    timeframe: string;
    showVolume: boolean;
  };
}

interface PreferencesContextType {
  preferences: Preferences;
  setTheme: (theme: Theme) => void;
  setLayout: (layout: Layout) => void;
  addToWatchlist: (token: string) => void;
  removeFromWatchlist: (token: string) => void;
  updateChartPreferences: (prefs: Partial<Preferences['chartPreferences']>) => void;
}

const defaultPreferences: Preferences = {
  theme: 'zeus',
  layout: 'default',
  watchlist: [],
  chartPreferences: {
    indicators: ['MA', 'RSI'],
    timeframe: '1H',
    showVolume: true,
  },
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const saved = localStorage.getItem('zeus-preferences');
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem('zeus-preferences', JSON.stringify(preferences));
  }, [preferences]);

  const setTheme = (theme: Theme) => {
    setPreferences(prev => ({ ...prev, theme }));
    document.documentElement.setAttribute('data-theme', theme);
  };

  const setLayout = (layout: Layout) => {
    setPreferences(prev => ({ ...prev, layout }));
  };

  const addToWatchlist = (token: string) => {
    setPreferences(prev => ({
      ...prev,
      watchlist: [...new Set([...prev.watchlist, token])],
    }));
  };

  const removeFromWatchlist = (token: string) => {
    setPreferences(prev => ({
      ...prev,
      watchlist: prev.watchlist.filter(t => t !== token),
    }));
  };

  const updateChartPreferences = (prefs: Partial<Preferences['chartPreferences']>) => {
    setPreferences(prev => ({
      ...prev,
      chartPreferences: { ...prev.chartPreferences, ...prefs },
    }));
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setTheme,
        setLayout,
        addToWatchlist,
        removeFromWatchlist,
        updateChartPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
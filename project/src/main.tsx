import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WalletContextProvider } from './contexts/WalletContext';
import { PreferencesProvider } from './contexts/PreferencesContext';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <WalletContextProvider>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </WalletContextProvider>
  </StrictMode>
);
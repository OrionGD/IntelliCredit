import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AlertProvider } from './contexts/AlertContext';
import { FeatureProvider } from './contexts/FeatureContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <FeatureProvider>
        <App />
      </FeatureProvider>
    </AlertProvider>
  </StrictMode>,
);

import '@stihl-design-system/components/styles/fonts';
import './global.scss';
import {
  DSAriaLiveRegions,
  DSSkipToContent,
  DSToastProvider,
} from '@stihl-design-system/components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DSAriaLiveRegions />
    <DSSkipToContent />
    <DSToastProvider>
      <App />
    </DSToastProvider>
  </StrictMode>
);

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
import { ReviewerProvider } from './lib/reviewer.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DSAriaLiveRegions />
    <DSSkipToContent />
    <DSToastProvider>
      <ReviewerProvider>
        <App />
      </ReviewerProvider>
    </DSToastProvider>
  </StrictMode>
);

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import initSentry from './config/sentry'
import { initAnalytics } from './config/analytics'
import SentryErrorBoundary from './components/ErrorBoundary'

// Inicializa Sentry (usa VITE_SENTRY_DSN si está configurado)
initSentry()
// Inicializa Google Analytics (usa VITE_FIREBASE_MEASUREMENT_ID si está configurado)
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <SentryErrorBoundary>
    <App />
  </SentryErrorBoundary>
)

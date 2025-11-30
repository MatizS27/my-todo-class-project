import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import initSentry from './config/sentry'
import SentryErrorBoundary from './components/ErrorBoundary'

// Inicializa Sentry (usa VITE_SENTRY_DSN si está configurado)
initSentry()

createRoot(document.getElementById('root')!).render(
  <SentryErrorBoundary>
    <App />
  </SentryErrorBoundary>
)

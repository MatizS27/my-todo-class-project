import * as Sentry from '@sentry/react'

export function initSentry(): void {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined
  if (!dsn) return

  Sentry.init({
    dsn,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Adjust this in production to an appropriate sampling rate
    tracesSampleRate: 1.0, // Capture 100% of the transactions for testing
    // Session Replay
    replaysSessionSampleRate: 0.1, 
    replaysOnErrorSampleRate: 1.0, 
    environment: import.meta.env.MODE,
  })


  // Capture unhandled promise rejections explicitly
  window.addEventListener('unhandledrejection', (event) => {
    // `reason` may be undefined in some browsers
    // @ts-ignore
    const err = event?.reason ?? event
    Sentry.captureException(err)
  })
}

export default initSentry

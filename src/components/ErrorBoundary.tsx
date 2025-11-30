import React from 'react'
import { ErrorBoundary } from '@sentry/react'

type Props = {
  children: React.ReactNode
}

export default function SentryErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundary fallback={<div>Ha ocurrido un error. Estamos trabajando en ello.</div>}>
      {children}
    </ErrorBoundary>
  )
}

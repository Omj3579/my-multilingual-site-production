import React, { useCallback, useEffect, useState } from 'react'

interface AnalyticsHook {
  trackEvent: (eventType: EventType, formType: FormType, metadata?: Record<string, unknown>) => Promise<void>
  sessionId: string
}

export type EventType = 'form_view' | 'form_start' | 'form_submit' | 'form_success' | 'form_error'
export type FormType = 'contact' | 'quote' | 'newsletter'

interface TrackingPayload {
  event_type: EventType
  form_type: FormType
  session_id: string
  language?: string
  metadata?: Record<string, unknown>
}

// Generate a simple session ID
const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Get user language
const getUserLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/hu') ? 'hu' : 'en'
  }
  return 'en'
}

export const useAnalytics = (): AnalyticsHook => {
  const [sessionId, setSessionId] = useState<string>('')

  useEffect(() => {
    // Initialize session ID on client side
    let storedSessionId = ''
    if (typeof window !== 'undefined') {
      storedSessionId = sessionStorage.getItem('analytics_session_id') || ''
      if (!storedSessionId) {
        storedSessionId = generateSessionId()
        sessionStorage.setItem('analytics_session_id', storedSessionId)
      }
    }
    setSessionId(storedSessionId)
  }, [])

  const trackEvent = useCallback(async (
    eventType: EventType, 
    formType: FormType, 
    metadata?: Record<string, unknown>
  ): Promise<void> => {
    try {
      if (!sessionId) return // Wait for session ID to be initialized

      const payload: TrackingPayload = {
        event_type: eventType,
        form_type: formType,
        session_id: sessionId,
        language: getUserLanguage(),
        metadata
      }

      const response = await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        console.warn('Analytics tracking failed:', response.statusText)
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error)
      // Don't throw - analytics should be non-blocking
    }
  }, [sessionId])

  return { trackEvent, sessionId }
}

// Higher-order component for automatic form view tracking
export function withFormAnalytics<T extends object>(
  Component: React.ComponentType<T>,
  formType: FormType
): React.ComponentType<T> {
  const WrappedComponent = (props: T) => {
    const { trackEvent } = useAnalytics()

    useEffect(() => {
      // Track form view when component mounts
      trackEvent('form_view', formType)
    }, [trackEvent]) // formType is from closure and doesn't need to be in dependencies

    return React.createElement(Component, props)
  }
  
  WrappedComponent.displayName = `withFormAnalytics(${Component.displayName || Component.name})`
  return WrappedComponent
}

// Hook for form-specific analytics
export const useFormAnalytics = (formType: FormType) => {
  const { trackEvent, sessionId } = useAnalytics()

  const trackFormStart = useCallback(() => {
    trackEvent('form_start', formType)
  }, [trackEvent, formType])

  const trackFormSubmit = useCallback((metadata?: Record<string, unknown>) => {
    trackEvent('form_submit', formType, metadata)
  }, [trackEvent, formType])

  const trackFormSuccess = useCallback((metadata?: Record<string, unknown>) => {
    trackEvent('form_success', formType, metadata)
  }, [trackEvent, formType])

  const trackFormError = useCallback((error: string, metadata?: Record<string, unknown>) => {
    trackEvent('form_error', formType, { ...metadata, error })
  }, [trackEvent, formType])

  return {
    sessionId,
    trackFormStart,
    trackFormSubmit,
    trackFormSuccess,
    trackFormError
  }
}
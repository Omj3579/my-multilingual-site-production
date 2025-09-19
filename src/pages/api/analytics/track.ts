import { NextApiRequest, NextApiResponse } from 'next'
import { analyticsService, FormEvent } from '@/lib/analytics'

interface TrackingRequest {
  event_type: 'form_view' | 'form_start' | 'form_submit' | 'form_success' | 'form_error'
  form_type: 'contact' | 'quote' | 'newsletter'
  session_id?: string
  language?: string
  metadata?: Record<string, unknown>
}

interface ApiResponse {
  success: boolean
  message: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'This endpoint accepts POST requests only'
    })
  }

  try {
    const trackingData: TrackingRequest = req.body

    if (!trackingData.event_type || !trackingData.form_type) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'event_type and form_type are required'
      })
    }

    // Extract additional data from request
    const userAgent = req.headers['user-agent'] || ''
    const referrerHeader = req.headers.referer || req.headers.referrer || ''
    const referrer = Array.isArray(referrerHeader) ? referrerHeader[0] : referrerHeader
    const forwardedFor = req.headers['x-forwarded-for']
    const ipAddress = Array.isArray(forwardedFor) 
      ? forwardedFor[0] 
      : forwardedFor?.split(',')[0] || req.socket.remoteAddress || ''

    // Create form event
    const formEvent: FormEvent = {
      event_type: trackingData.event_type,
      form_type: trackingData.form_type,
      session_id: trackingData.session_id,
      user_agent: userAgent,
      ip_address: ipAddress,
      referrer: referrer,
      page_url: referrer,
      language: trackingData.language,
      device_type: analyticsService.detectDeviceType(userAgent),
      browser: analyticsService.detectBrowser(userAgent),
      os: analyticsService.detectOS(userAgent),
      metadata: trackingData.metadata
    }

    await analyticsService.trackFormEvent(formEvent)

    return res.status(200).json({
      success: true,
      message: 'Event tracked successfully'
    })

  } catch (error) {
    console.error('Analytics tracking API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to track event'
    })
  }
}
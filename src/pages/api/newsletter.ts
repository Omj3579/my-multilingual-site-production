import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseAdmin } from '@/integrations/supabase/server'
import { NewsletterFormData, ApiResponse, FormSubmissionResponse } from '@/types/database'
import { emailService } from '@/lib/email'

// Email validation regex
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

// Rate limiting storage
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(req: NextApiRequest): string {
  return req.headers['x-forwarded-for']?.toString().split(',')[0] || 
         req.connection.remoteAddress || 
         'unknown'
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 3 // Max 3 newsletter subscriptions per hour
  
  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }
  
  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }
  
  current.count++
  rateLimitStore.set(key, current)
  
  return { allowed: true, remaining: maxRequests - current.count }
}

function validateNewsletterForm(data: unknown): { isValid: boolean; errors: string[]; formData?: NewsletterFormData } {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    errors.push('Invalid form data')
    return { isValid: false, errors }
  }
  
  const form = data as Record<string, unknown>
  
  // Required fields validation
  if (!form.email || typeof form.email !== 'string' || !EMAIL_REGEX.test(form.email)) {
    errors.push('Valid email is required')
  }
  
  // Optional fields validation
  if (form.language && !['en', 'hu', 'de'].includes(form.language as string)) {
    errors.push('Language must be en, hu, or de')
  }
  
  if (form.source && (typeof form.source !== 'string' || form.source.length > 50)) {
    errors.push('Source must be a string (max 50 characters)')
  }
  
  // Validate preferences if provided
  if (form.preferences) {
    if (typeof form.preferences !== 'object') {
      errors.push('Preferences must be an object')
    } else {
      const prefs = form.preferences as Record<string, unknown>
      if (prefs.frequency && !['daily', 'weekly', 'monthly'].includes(prefs.frequency as string)) {
        errors.push('Frequency must be daily, weekly, or monthly')
      }
    }
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors }
  }
  
  // Clean and prepare form data
  const formData: NewsletterFormData = {
    email: (form.email as string).toLowerCase().trim(),
    language: (form.language as 'en' | 'hu' | 'de') || 'en',
    source: (form.source as string) || 'website',
    preferences: form.preferences as Record<string, unknown> || {}
  }
  
  return { isValid: true, errors: [], formData }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FormSubmissionResponse>>
) {
  // Handle both POST (subscribe) and DELETE (unsubscribe) methods
  if (!['POST', 'DELETE'].includes(req.method || '')) {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'This endpoint accepts POST (subscribe) and DELETE (unsubscribe) requests'
    })
  }

  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(req)
    const rateLimit = checkRateLimit(rateLimitKey)
    
    if (!rateLimit.allowed) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests',
        message: 'Too many subscription requests. Please try again in 1 hour.'
      })
    }
    
    res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString())
    
    if (req.method === 'DELETE') {
      // Handle unsubscribe
      const { email } = req.body
      
      if (!email || !EMAIL_REGEX.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          message: 'Valid email is required for unsubscription'
        })
      }
      
      const { error } = await supabaseAdmin
        .from('newsletter_subscriptions')
        .update({ 
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', email.toLowerCase().trim())
        .eq('status', 'active')
      
      if (error) {
        console.error('Supabase unsubscribe error:', error)
        return res.status(500).json({
          success: false,
          error: 'Database error',
          message: 'Failed to unsubscribe. Please try again.'
        })
      }
      
      return res.status(200).json({
        success: true,
        data: {
          id: '',
          success: true,
          message: 'You have been successfully unsubscribed from our newsletter.'
        },
        message: 'Successfully unsubscribed'
      })
    }
    
    // Handle subscribe (POST)
    const validation = validateNewsletterForm(req.body)
    if (!validation.isValid || !validation.formData) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: validation.errors.join(', ')
      })
    }
    
    const formData = validation.formData
    
    // Check if email already exists
    const { data: existing } = await supabaseAdmin
      .from('newsletter_subscriptions')
      .select('id, status')
      .eq('email', formData.email)
      .single()
    
    if (existing) {
      if (existing.status === 'active') {
        return res.status(400).json({
          success: false,
          error: 'Already subscribed',
          message: 'This email is already subscribed to our newsletter.'
        })
      } else {
        // Reactivate subscription
        const { data, error } = await supabaseAdmin
          .from('newsletter_subscriptions')
          .update({
            status: 'active',
            language: formData.language,
            preferences: formData.preferences,
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null
          })
          .eq('id', existing.id)
          .select('id')
          .single()
        
        if (error) {
          console.error('Supabase reactivate error:', error)
          return res.status(500).json({
            success: false,
            error: 'Database error',
            message: 'Failed to reactivate subscription. Please try again.'
          })
        }
        
        return res.status(200).json({
          success: true,
          data: {
            id: data.id,
            success: true,
            message: 'Welcome back! Your newsletter subscription has been reactivated.'
          },
          message: 'Subscription reactivated'
        })
      }
    }
    
    // Create new subscription
    const dbData = {
      email: formData.email,
      language: formData.language || 'en',
      preferences: formData.preferences || {},
      source: formData.source || 'website',
      status: 'active' as const
    }
    
    const { data, error } = await supabaseAdmin
      .from('newsletter_subscriptions')
      .insert(dbData)
      .select('id')
      .single()
    
    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: 'Failed to subscribe to newsletter. Please try again.'
      })
    }

    // Send email notification (don't fail the request if email fails)
    try {
      await emailService.sendNewsletterNotification(formData)
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
      // Continue with success response even if email fails
    }
    
    const response: FormSubmissionResponse = {
      id: data.id,
      success: true,
      message: 'Thank you for subscribing! You will receive our latest updates and insights.'
    }
    
    return res.status(200).json({
      success: true,
      data: response,
      message: response.message
    })
    
  } catch (error) {
    console.error('Newsletter API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred. Please try again.'
    })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
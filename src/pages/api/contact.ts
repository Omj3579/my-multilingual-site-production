import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseAdmin } from '@/integrations/supabase/server'
import { ContactFormData, ApiResponse, FormSubmissionResponse } from '@/types/database'
import { emailService } from '@/lib/email'

// Email validation regex
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(req: NextApiRequest): string {
  // In production, use proper IP detection
  return req.headers['x-forwarded-for']?.toString().split(',')[0] || 
         req.connection.remoteAddress || 
         'unknown'
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 submissions per 15 minutes
  
  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    // Reset window
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }
  
  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }
  
  // Increment count
  current.count++
  rateLimitStore.set(key, current)
  
  return { allowed: true, remaining: maxRequests - current.count }
}

function validateContactForm(data: unknown): { isValid: boolean; errors: string[]; formData?: ContactFormData } {
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
  
  if (!form.company || typeof form.company !== 'string' || form.company.trim().length < 2) {
    errors.push('Company name is required (minimum 2 characters)')
  }
  
  if (!form.country || typeof form.country !== 'string' || form.country.trim().length < 2) {
    errors.push('Country is required')
  }
  
  if (!form.message || typeof form.message !== 'string' || form.message.trim().length < 10) {
    errors.push('Message is required (minimum 10 characters)')
  }
  
  // Optional fields validation
  if (form.firstName && (typeof form.firstName !== 'string' || form.firstName.length > 100)) {
    errors.push('First name must be a string (max 100 characters)')
  }
  
  if (form.lastName && (typeof form.lastName !== 'string' || form.lastName.length > 100)) {
    errors.push('Last name must be a string (max 100 characters)')
  }
  
  if (form.language && !['en', 'hu', 'de'].includes(form.language as string)) {
    errors.push('Language must be en, hu, or de')
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors }
  }
  
  // Clean and prepare form data
  const formData: ContactFormData = {
    email: (form.email as string).toLowerCase().trim(),
    company: (form.company as string).trim(),
    country: (form.country as string).trim(),
    message: (form.message as string).trim(),
    language: (form.language as 'en' | 'hu' | 'de') || 'en',
    firstName: form.firstName ? (form.firstName as string).trim() : undefined,
    lastName: form.lastName ? (form.lastName as string).trim() : undefined,
  }
  
  return { isValid: true, errors: [], formData }
}

async function detectSpam(formData: ContactFormData): Promise<boolean> {
  // Basic spam detection
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'free money']
  const content = `${formData.message} ${formData.company} ${formData.firstName} ${formData.lastName}`.toLowerCase()
  
  // Check for spam keywords
  if (spamKeywords.some(keyword => content.includes(keyword))) {
    return true
  }
  
  // Check for excessive links
  const linkCount = (formData.message.match(/https?:\/\//g) || []).length
  if (linkCount > 2) {
    return true
  }
  
  // Check for repeated characters (like "aaaaa")
  if (/(.)\1{10,}/.test(formData.message)) {
    return true
  }
  
  return false
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FormSubmissionResponse>>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests'
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
        message: 'Too many form submissions. Please try again in 15 minutes.'
      })
    }
    
    // Set rate limit headers
    res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString())
    
    // Validate form data
    const validation = validateContactForm(req.body)
    if (!validation.isValid || !validation.formData) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: validation.errors.join(', ')
      })
    }
    
    const formData = validation.formData
    
    // Spam detection
    const isSpam = await detectSpam(formData)
    
    // Prepare data for database
    const dbData = {
      first_name: formData.firstName || null,
      last_name: formData.lastName || null,
      email: formData.email,
      company: formData.company,
      country: formData.country,
      message: formData.message,
      language: formData.language || 'en',
      status: isSpam ? 'spam' as const : 'new' as const,
      priority: 'medium' as const
    }
    
    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert(dbData)
      .select('id')
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: 'Failed to save your message. Please try again.'
      })
    }

    // Send email notification (don't fail the request if email fails)
    try {
      await emailService.sendContactNotification(formData)
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
      // Continue with success response even if email fails
    }
    
    // Success response
    const response: FormSubmissionResponse = {
      id: data.id,
      success: true,
      message: isSpam 
        ? 'Your message has been received and is under review.'
        : 'Thank you for your message! Our team will contact you shortly.'
    }
    
    return res.status(200).json({
      success: true,
      data: response,
      message: response.message
    })
    
  } catch (error) {
    console.error('Contact form API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred. Please try again.'
    })
  }
}

// Export API route config
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
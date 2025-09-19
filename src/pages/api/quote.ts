import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseAdmin } from '@/integrations/supabase/server'
import { QuoteFormData, ApiResponse, FormSubmissionResponse, CartItem } from '@/types/database'
import { emailService } from '@/lib/email'

// Email validation regex
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(req: NextApiRequest): string {
  return req.headers['x-forwarded-for']?.toString().split(',')[0] || 
         req.connection.remoteAddress || 
         'unknown'
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3 // Max 3 quote requests per 15 minutes (more restrictive)
  
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

function validateCartItems(items: unknown): { isValid: boolean; errors: string[]; cartItems?: CartItem[] } {
  const errors: string[] = []
  
  if (!Array.isArray(items) || items.length === 0) {
    errors.push('At least one cart item is required')
    return { isValid: false, errors }
  }
  
  if (items.length > 50) {
    errors.push('Too many items in cart (maximum 50)')
    return { isValid: false, errors }
  }
  
  const cartItems: CartItem[] = []
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    
    if (!item || typeof item !== 'object') {
      errors.push(`Item ${i + 1}: Invalid item data`)
      continue
    }
    
    const cartItem = item as Record<string, unknown>
    
    // Validate required fields
    if (!cartItem.id || typeof cartItem.id !== 'string') {
      errors.push(`Item ${i + 1}: Valid ID is required`)
    }
    
    if (!cartItem.name) {
      errors.push(`Item ${i + 1}: Name is required`)
    }
    
    if (!cartItem.quantity || typeof cartItem.quantity !== 'number' || cartItem.quantity < 1) {
      errors.push(`Item ${i + 1}: Valid quantity is required (minimum 1)`)
    }
    
    if (typeof cartItem.quantity === 'number' && cartItem.quantity > 1000000) {
      errors.push(`Item ${i + 1}: Quantity too large (maximum 1,000,000)`)
    }
    
    if (errors.length === 0) {
      cartItems.push({
        id: cartItem.id as string,
        name: cartItem.name as string | Record<string, string>,
        code: cartItem.code as string | undefined,
        quantity: cartItem.quantity as number,
        image: cartItem.image as string | undefined,
        specifications: cartItem.specifications as Record<string, unknown> | undefined
      })
    }
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors }
  }
  
  return { isValid: true, errors: [], cartItems }
}

function validateQuoteForm(data: unknown): { isValid: boolean; errors: string[]; formData?: QuoteFormData } {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    errors.push('Invalid form data')
    return { isValid: false, errors }
  }
  
  const form = data as Record<string, unknown>
  
  // Required fields validation
  if (!form.fullName || typeof form.fullName !== 'string' || form.fullName.trim().length < 2) {
    errors.push('Full name is required (minimum 2 characters)')
  }
  
  if (!form.email || typeof form.email !== 'string' || !EMAIL_REGEX.test(form.email)) {
    errors.push('Valid email is required')
  }
  
  if (!form.company || typeof form.company !== 'string' || form.company.trim().length < 2) {
    errors.push('Company name is required (minimum 2 characters)')
  }
  
  // Optional fields validation
  if (form.phone && (typeof form.phone !== 'string' || form.phone.length > 50)) {
    errors.push('Phone number must be a string (max 50 characters)')
  }
  
  if (form.message && (typeof form.message !== 'string' || form.message.length > 2000)) {
    errors.push('Message must be a string (max 2000 characters)')
  }
  
  if (form.language && !['en', 'hu', 'de'].includes(form.language as string)) {
    errors.push('Language must be en, hu, or de')
  }
  
  // Validate cart items
  const cartValidation = validateCartItems(form.cartItems)
  if (!cartValidation.isValid || !cartValidation.cartItems) {
    errors.push(...cartValidation.errors)
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors }
  }
  
  // Clean and prepare form data
  const formData: QuoteFormData = {
    fullName: (form.fullName as string).trim(),
    email: (form.email as string).toLowerCase().trim(),
    company: (form.company as string).trim(),
    cartItems: cartValidation.cartItems!,
    language: (form.language as 'en' | 'hu' | 'de') || 'en',
    phone: form.phone ? (form.phone as string).trim() : undefined,
    message: form.message ? (form.message as string).trim() : undefined,
  }
  
  return { isValid: true, errors: [], formData }
}

function calculateEstimatedValue(cartItems: CartItem[]): number {
  // Simple estimation based on quantity
  // In production, you'd use actual product pricing
  let total = 0
  
  for (const item of cartItems) {
    // Base price estimation (this should come from your product database)
    let basePrice = 10 // Default $10 per unit
    
    // Adjust based on quantity (volume discounts)
    if (item.quantity > 1000) basePrice *= 0.8 // 20% discount
    else if (item.quantity > 100) basePrice *= 0.9 // 10% discount
    
    total += basePrice * item.quantity
  }
  
  return Math.round(total * 100) / 100 // Round to 2 decimal places
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FormSubmissionResponse>>
) {
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
        message: 'Too many quote requests. Please try again in 15 minutes.'
      })
    }
    
    res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString())
    
    // Validate form data
    const validation = validateQuoteForm(req.body)
    if (!validation.isValid || !validation.formData) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: validation.errors.join(', ')
      })
    }
    
    const formData = validation.formData
    
    // Calculate estimated quote value for internal use
    const estimatedValue = calculateEstimatedValue(formData.cartItems)
    
    // Prepare data for database
    const dbData = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company,
      message: formData.message || null,
      cart_items: formData.cartItems,
      language: formData.language || 'en',
      status: 'pending' as const,
      quote_value: estimatedValue > 0 ? estimatedValue : null
    }
    
    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('quote_requests')
      .insert(dbData)
      .select('id')
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: 'Failed to save your quote request. Please try again.'
      })
    }

    // Send email notification (don't fail the request if email fails)
    try {
      await emailService.sendQuoteNotification(formData)
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
      // Continue with success response even if email fails
    }
    
    // Success response
    const response: FormSubmissionResponse = {
      id: data.id,
      success: true,
      message: 'Thank you for your quote request! Our team will review your requirements and contact you with pricing information within 24 hours.'
    }
    
    return res.status(200).json({
      success: true,
      data: response,
      message: response.message
    })
    
  } catch (error) {
    console.error('Quote request API error:', error)
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
      sizeLimit: '2mb', // Larger limit for cart data
    },
  },
}
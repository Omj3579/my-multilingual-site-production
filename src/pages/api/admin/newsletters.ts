import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseAdmin } from '@/integrations/supabase/server'

interface ApiResponse {
  success: boolean
  message: string
  error?: string
  data?: Record<string, unknown>[]
  debug?: any
}

function validateAdminAuth(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false
  }

  const token = authHeader.substring(7)
  try {
    // Simple token validation (decode base64)
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [username] = decoded.split(':')
    return username === (process.env.ADMIN_USERNAME || 'admin')
  } catch {
    return false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'This endpoint accepts GET requests only'
    })
  }

  // Validate admin authentication
  if (!validateAdminAuth(req)) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Valid admin authentication required'
    })
  }

  try {
    console.log('Admin newsletters API - Starting query...')
    
    // Debug info to see what environment we're using
    console.log('Environment debug info:')
    console.log('- Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('- Service Key exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
    console.log('- Service Key prefix:', process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 30) || 'MISSING')
    
    // First, try to get just one record to see what columns exist
    const { data: sampleData, error: sampleError } = await supabaseAdmin
      .from('newsletter_subscriptions')
      .select('*')
      .limit(1)

    console.log('Sample data:', sampleData)
    console.log('Sample error:', sampleError)

    if (sampleError) {
      console.error('Sample query error:', sampleError)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: `Failed to fetch newsletter subscriptions: ${sampleError.message}`,
        debug: {
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
          serviceKeyExists: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          serviceKeyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 30),
          errorCode: sampleError.code,
          errorDetails: sampleError.details
        }
      })
    }

    // If sample worked, get all data without ordering for now
    const { data, error } = await supabaseAdmin
      .from('newsletter_subscriptions')
      .select('*')

    console.log('Admin newsletters API - Query result:', { 
      dataCount: data?.length || 0, 
      error: error?.message || 'No error',
      errorCode: error?.code,
      errorDetails: error?.details 
    })

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: `Failed to fetch newsletter subscriptions: ${error.message}`
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Newsletter subscriptions fetched successfully',
      data: data || []
    })

  } catch (error) {
    console.error('Admin newsletters API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    })
  }
}
import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseAdmin } from '@/integrations/supabase/server'

interface ApiResponse {
  success: boolean
  message: string
  error?: string
  data?: Record<string, unknown>[]
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
    const { data, error } = await supabaseAdmin
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        success: false,
        error: 'Database error',
        message: 'Failed to fetch quote requests'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Quote requests fetched successfully',
      data: data || []
    })

  } catch (error) {
    console.error('Admin quotes API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    })
  }
}
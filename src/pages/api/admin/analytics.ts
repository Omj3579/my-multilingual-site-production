import { NextApiRequest, NextApiResponse } from 'next'
import { analyticsService } from '@/lib/analytics'

interface ApiResponse {
  success: boolean
  message: string
  error?: string
  data?: unknown
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
    const { days } = req.query
    const daysNumber = days ? parseInt(days as string) : 30

    if (isNaN(daysNumber) || daysNumber <= 0 || daysNumber > 365) {
      return res.status(400).json({
        success: false,
        error: 'Invalid parameter',
        message: 'Days must be a number between 1 and 365'
      })
    }

    const analyticsData = await analyticsService.getAnalyticsData(daysNumber)

    return res.status(200).json({
      success: true,
      message: 'Analytics data retrieved successfully',
      data: analyticsData
    })

  } catch (error) {
    console.error('Admin analytics API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    })
  }
}
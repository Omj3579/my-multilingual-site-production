import { NextApiRequest, NextApiResponse } from 'next'

interface LoginRequest {
  username: string
  password: string
}

interface ApiResponse {
  success: boolean
  message: string
  error?: string
  token?: string
}

// Simple admin credentials - in production, use proper authentication
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123!',
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
    const { username, password }: LoginRequest = req.body

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Missing credentials',
        message: 'Username and password are required'
      })
    }

    // Validate credentials
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
        message: 'Invalid username or password'
      })
    }

    // Create session token (simple JWT-like token for demo)
    const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64')

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: sessionToken
    })

  } catch (error) {
    console.error('Admin login error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    })
  }
}
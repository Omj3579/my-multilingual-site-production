import { NextApiRequest, NextApiResponse } from 'next'

// Simple test endpoint to debug form data
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    console.log('=== FORM TEST DEBUG ===')
    console.log('Request body:', req.body)
    console.log('Headers:', req.headers)
    
    const data = req.body
    
    // Basic validation
    if (!data.message || data.message.length < 10) {
      console.log('Message validation failed:', {
        message: data.message,
        length: data.message?.length || 0
      })
      return res.status(400).json({ 
        success: false, 
        error: 'Message is required (minimum 10 characters)',
        debug: {
          receivedMessage: data.message,
          messageLength: data.message?.length || 0
        }
      })
    }

    console.log('Form validation passed!')
    console.log('Received data:', data)
    
    return res.status(200).json({ 
      success: true, 
      message: 'Test successful! Your form data was received.',
      receivedData: data
    })

  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
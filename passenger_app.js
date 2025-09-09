// Passenger-compatible Next.js server for cPanel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Production configuration for cPanel/Passenger
const dev = false
const app = next({ 
  dev, 
  dir: __dirname,
  conf: {
    distDir: '.next'
  }
})

const handle = app.getRequestHandler()

// Export for Passenger
module.exports = app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Add CORS headers for cross-origin requests
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      
      // Handle preflight requests
      if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return
      }

      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  
  return server
}).catch(ex => {
  console.error('Error preparing Next.js app:', ex.stack)
  process.exit(1)
})

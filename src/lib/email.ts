import { Resend } from 'resend'
import { ContactFormData, QuoteFormData, NewsletterFormData } from '@/types/database'

// Initialize Resend client safely
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY not found - email notifications will be disabled')
    return null
  }
  return new Resend(apiKey)
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@yourdomain.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@yourdomain.com'

export interface EmailNotificationService {
  sendContactNotification: (data: ContactFormData) => Promise<void>
  sendQuoteNotification: (data: QuoteFormData) => Promise<void>
  sendNewsletterNotification: (data: NewsletterFormData) => Promise<void>
}

class ResendEmailService implements EmailNotificationService {
  async sendContactNotification(data: ContactFormData): Promise<void> {
    try {
      const resend = getResendClient()
      if (!resend) {
        console.warn('Contact notification skipped - Resend API key not configured')
        return
      }

      const subject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .field strong { display: inline-block; width: 120px; color: #555; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 15px; border-radius: 4px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 New Contact Form Submission</h1>
                <p>Someone has submitted a contact form on your website</p>
              </div>
              <div class="content">
                <div class="field">
                  <strong>Name:</strong> ${data.firstName} ${data.lastName}
                </div>
                <div class="field">
                  <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
                </div>
                <div class="field">
                  <strong>Company:</strong> ${data.company || 'Not provided'}
                </div>
                <div class="field">
                  <strong>Country:</strong> ${data.country || 'Not provided'}
                </div>
                <div class="field">
                  <strong>Language:</strong> ${data.language?.toUpperCase()}
                </div>
                <div class="field">
                  <strong>Submitted:</strong> ${new Date().toLocaleString()}
                </div>
                ${data.message ? `
                  <div class="message-box">
                    <strong>Message:</strong><br>
                    ${data.message.replace(/\n/g, '<br>')}
                  </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This notification was sent from your multilingual website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject,
        html: htmlContent,
      })
    } catch (error) {
      console.error('Failed to send contact notification email:', error)
      throw error
    }
  }

  async sendQuoteNotification(data: QuoteFormData): Promise<void> {
    try {
      const resend = getResendClient()
      if (!resend) {
        console.warn('Quote notification skipped - Resend API key not configured')
        return
      }

      const subject = `New Quote Request from ${data.fullName}`
      const cartItemsHtml = data.cartItems?.map(item => `
        <li>
          <strong>${typeof item.name === 'string' ? item.name : item.name.en || 'Product'}</strong><br>
          ${item.code ? `Code: ${item.code}<br>` : ''}
          Quantity: ${item.quantity}<br>
          ${item.specifications ? `Specifications: ${JSON.stringify(item.specifications)}<br>` : ''}
        </li>
      `).join('') || '<li>No items in cart</li>'

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Quote Request</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .field strong { display: inline-block; width: 120px; color: #555; }
              .cart-items { background: white; padding: 15px; border-left: 4px solid #f093fb; margin-top: 15px; border-radius: 4px; }
              .cart-items ul { margin: 10px 0; }
              .cart-items li { margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💼 New Quote Request</h1>
                <p>A customer has requested a quote for products</p>
              </div>
              <div class="content">
                <div class="field">
                  <strong>Name:</strong> ${data.fullName}
                </div>
                <div class="field">
                  <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
                </div>
                <div class="field">
                  <strong>Phone:</strong> ${data.phone || 'Not provided'}
                </div>
                <div class="field">
                  <strong>Company:</strong> ${data.company}
                </div>
                <div class="field">
                  <strong>Language:</strong> ${data.language?.toUpperCase()}
                </div>
                <div class="field">
                  <strong>Submitted:</strong> ${new Date().toLocaleString()}
                </div>
                ${data.message ? `
                  <div class="field">
                    <strong>Message:</strong><br>
                    ${data.message.replace(/\n/g, '<br>')}
                  </div>
                ` : ''}
                <div class="cart-items">
                  <strong>Requested Products:</strong>
                  <ul>
                    ${cartItemsHtml}
                  </ul>
                </div>
              </div>
              <div class="footer">
                <p>This notification was sent from your website quote request system.</p>
              </div>
            </div>
          </body>
        </html>
      `

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject,
        html: htmlContent,
      })
    } catch (error) {
      console.error('Failed to send quote notification email:', error)
      throw error
    }
  }

  async sendNewsletterNotification(data: NewsletterFormData): Promise<void> {
    try {
      const resend = getResendClient()
      if (!resend) {
        console.warn('Newsletter notification skipped - Resend API key not configured')
        return
      }

      const subject = `New Newsletter Subscription: ${data.email}`
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Newsletter Subscription</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .field strong { display: inline-block; width: 120px; color: #555; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Newsletter Subscription</h1>
                <p>Someone has subscribed to your newsletter</p>
              </div>
              <div class="content">
                <div class="field">
                  <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
                </div>
                <div class="field">
                  <strong>Language:</strong> ${data.language?.toUpperCase()}
                </div>
                <div class="field">
                  <strong>Source:</strong> ${data.source || 'Website'}
                </div>
                <div class="field">
                  <strong>Subscribed:</strong> ${new Date().toLocaleString()}
                </div>
              </div>
              <div class="footer">
                <p>This notification was sent from your website newsletter signup.</p>
              </div>
            </div>
          </body>
        </html>
      `

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject,
        html: htmlContent,
      })
    } catch (error) {
      console.error('Failed to send newsletter notification email:', error)
      throw error
    }
  }
}

export const emailService = new ResendEmailService()
import { supabaseAdmin } from '@/integrations/supabase/server'

export interface FormEvent {
  event_type: 'form_view' | 'form_start' | 'form_submit' | 'form_success' | 'form_error'
  form_type: 'contact' | 'quote' | 'newsletter'
  session_id?: string
  user_agent?: string
  ip_address?: string
  referrer?: string
  page_url?: string
  language?: string
  country?: string
  device_type?: 'desktop' | 'mobile' | 'tablet'
  browser?: string
  os?: string
  metadata?: Record<string, unknown>
}

export interface AnalyticsData {
  totalViews: number
  totalSubmissions: number
  totalSuccesses: number
  conversionRate: number
  completionRate: number
  dailyStats: {
    date: string
    views: number
    submissions: number
    successes: number
    rate: number
  }[]
  formBreakdown: {
    formType: string
    count: number
    percentage: number
  }[]
  languageBreakdown: {
    language: string
    count: number
    percentage: number
  }[]
  deviceBreakdown: {
    device: string
    count: number
    percentage: number
  }[]
}

class AnalyticsService {
  async trackFormEvent(event: FormEvent): Promise<void> {
    try {
      await supabaseAdmin
        .from('form_events')
        .insert({
          event_type: event.event_type,
          form_type: event.form_type,
          session_id: event.session_id,
          user_agent: event.user_agent,
          ip_address: event.ip_address,
          referrer: event.referrer,
          page_url: event.page_url,
          language: event.language,
          country: event.country,
          device_type: event.device_type,
          browser: event.browser,
          os: event.os,
          metadata: event.metadata
        })
    } catch (error) {
      console.error('Failed to track form event:', error)
      // Don't throw error to avoid breaking user experience
    }
  }

  async getAnalyticsData(days: number = 30): Promise<AnalyticsData> {
    try {
      // Get daily metrics for the last N days
      const { data: dailyMetrics } = await supabaseAdmin
        .from('daily_metrics')
        .select('*')
        .gte('date', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        .order('date', { ascending: false })

      // Get form events for additional breakdowns
      const { data: formEvents } = await supabaseAdmin
        .from('form_events')
        .select('form_type, language, device_type, created_at')
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())

      // Calculate totals
      const totalViews = dailyMetrics?.reduce((sum, day) => sum + (day.total_views || 0), 0) || 0
      const totalSubmissions = dailyMetrics?.reduce((sum, day) => sum + (day.total_submissions || 0), 0) || 0
      const totalSuccesses = dailyMetrics?.reduce((sum, day) => sum + (day.total_successes || 0), 0) || 0

      // Calculate rates
      const conversionRate = totalViews > 0 ? (totalSuccesses / totalViews) * 100 : 0
      const completionRate = totalSubmissions > 0 ? (totalSuccesses / totalSubmissions) * 100 : 0

      // Prepare daily stats for charts
      const dailyStats = (dailyMetrics || []).map(day => ({
        date: day.date,
        views: day.total_views || 0,
        submissions: day.total_submissions || 0,
        successes: day.total_successes || 0,
        rate: day.conversion_rate || 0
      }))

      // Form type breakdown
      const formTypeCounts: Record<string, number> = {}
      formEvents?.forEach(event => {
        formTypeCounts[event.form_type] = (formTypeCounts[event.form_type] || 0) + 1
      })
      
      const totalEvents = formEvents?.length || 0
      const formBreakdown = Object.entries(formTypeCounts).map(([formType, count]) => ({
        formType,
        count,
        percentage: totalEvents > 0 ? (count / totalEvents) * 100 : 0
      }))

      // Language breakdown
      const languageCounts: Record<string, number> = {}
      formEvents?.forEach(event => {
        if (event.language) {
          languageCounts[event.language] = (languageCounts[event.language] || 0) + 1
        }
      })
      
      const languageBreakdown = Object.entries(languageCounts).map(([language, count]) => ({
        language: language.toUpperCase(),
        count,
        percentage: totalEvents > 0 ? (count / totalEvents) * 100 : 0
      }))

      // Device breakdown
      const deviceCounts: Record<string, number> = {}
      formEvents?.forEach(event => {
        if (event.device_type) {
          deviceCounts[event.device_type] = (deviceCounts[event.device_type] || 0) + 1
        }
      })
      
      const deviceBreakdown = Object.entries(deviceCounts).map(([device, count]) => ({
        device: device.charAt(0).toUpperCase() + device.slice(1),
        count,
        percentage: totalEvents > 0 ? (count / totalEvents) * 100 : 0
      }))

      return {
        totalViews,
        totalSubmissions,
        totalSuccesses,
        conversionRate: parseFloat(conversionRate.toFixed(2)),
        completionRate: parseFloat(completionRate.toFixed(2)),
        dailyStats,
        formBreakdown,
        languageBreakdown,
        deviceBreakdown
      }

    } catch (error) {
      console.error('Failed to get analytics data:', error)
      // Return empty analytics data on error
      return {
        totalViews: 0,
        totalSubmissions: 0,
        totalSuccesses: 0,
        conversionRate: 0,
        completionRate: 0,
        dailyStats: [],
        formBreakdown: [],
        languageBreakdown: [],
        deviceBreakdown: []
      }
    }
  }

  // Helper function to detect device type from user agent
  detectDeviceType(userAgent: string): 'desktop' | 'mobile' | 'tablet' {
    const ua = userAgent.toLowerCase()
    
    if (ua.includes('tablet') || ua.includes('ipad')) {
      return 'tablet'
    }
    
    if (ua.includes('mobile') || ua.includes('phone') || ua.includes('android')) {
      return 'mobile'
    }
    
    return 'desktop'
  }

  // Helper function to detect browser from user agent
  detectBrowser(userAgent: string): string {
    const ua = userAgent.toLowerCase()
    
    if (ua.includes('chrome')) return 'Chrome'
    if (ua.includes('firefox')) return 'Firefox'
    if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari'
    if (ua.includes('edge')) return 'Edge'
    if (ua.includes('opera')) return 'Opera'
    
    return 'Other'
  }

  // Helper function to detect OS from user agent
  detectOS(userAgent: string): string {
    const ua = userAgent.toLowerCase()
    
    if (ua.includes('windows')) return 'Windows'
    if (ua.includes('mac')) return 'macOS'
    if (ua.includes('linux')) return 'Linux'
    if (ua.includes('android')) return 'Android'
    if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) return 'iOS'
    
    return 'Other'
  }
}

export const analyticsService = new AnalyticsService()
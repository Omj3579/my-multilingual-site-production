import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import AdminLayout from '@/components/admin/AdminLayout'
import { MetricGrid } from '@/components/admin/StatsCards'
import { ConversionFunnelChart, RealTimeChart, DeviceChart, PerformanceChart } from '@/components/admin/AnalyticsCharts'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

interface FormSubmission {
  id: string
  name: string
  email: string
  phone: string
  service_type: string
  message: string
  created_at: string
  form_type: string
  device_type?: string
  browser?: string
  referrer?: string
}

interface AnalyticsData {
  total_submissions: number
  today_submissions: number
  conversion_rate: number
  avg_response_time: number
  device_breakdown: {
    desktop: number
    mobile: number
    tablet: number
  }
  daily_trend: Array<{
    date: string
    submissions: number
    views: number
    conversions: number
  }>
}

export default function FuturisticAdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'analytics'>('overview')
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'service'>('newest')

  const processAnalyticsData = useCallback((submissions: FormSubmission[]): AnalyticsData => {
    const today = new Date().toISOString().split('T')[0]
    const todaySubmissions = submissions.filter(s => s.created_at.startsWith(today))
    
    return {
      total_submissions: submissions.length,
      today_submissions: todaySubmissions.length,
      conversion_rate: Math.round((submissions.length / Math.max(submissions.length * 8, 1)) * 100),
      avg_response_time: 2.3,
      device_breakdown: {
        desktop: 65,
        mobile: 30,
        tablet: 5
      },
      daily_trend: generateDailyTrend(submissions)
    }
  }, [])

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      
      // Mock data for demonstration (replace with actual Supabase calls)
      const mockSubmissions: FormSubmission[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1234567890',
          service_type: 'Contact',
          message: 'Hello world',
          created_at: new Date().toISOString(),
          form_type: 'contact',
          device_type: 'desktop',
          browser: 'chrome',
          referrer: ''
        }
      ]

      setSubmissions(mockSubmissions)
      
      // Process analytics data
      const processedAnalytics = processAnalyticsData(mockSubmissions)
      setAnalytics(processedAnalytics)
      
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [processAnalyticsData])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const generateDailyTrend = (submissions: FormSubmission[]) => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split('T')[0]
    }).reverse()

    return last7Days.map(date => {
      const daySubmissions = submissions.filter(s => s.created_at.startsWith(date))
      return {
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        submissions: daySubmissions.length,
        views: Math.max(daySubmissions.length * (Math.random() * 5 + 5), 10),
        conversions: daySubmissions.length
      }
    })
  }

  const filteredSubmissions = submissions
    .filter(submission => 
      submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.service_type?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        case 'service':
          return a.service_type.localeCompare(b.service_type)
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
    })

  const metrics = analytics ? [
    {
      title: 'Total Submissions',
      value: analytics.total_submissions,
      change: 12,
      changeType: 'increase' as const,
      icon: 'chart' as const,
      description: 'All time form submissions'
    },
    {
      title: 'Today',
      value: analytics.today_submissions,
      change: -3,
      changeType: 'decrease' as const,
      icon: 'time' as const,
      description: 'Submissions today'
    },
    {
      title: 'Conversion Rate',
      value: `${analytics.conversion_rate}%`,
      change: 5,
      changeType: 'increase' as const,
      icon: 'conversions' as const,
      description: 'Visitor to submission ratio'
    },
    {
      title: 'Avg. Response Time',
      value: `${analytics.avg_response_time}s`,
      change: undefined,
      changeType: 'neutral' as const,
      icon: 'global' as const,
      description: 'Form processing speed'
    }
  ] : []

  const conversionData = [
    { name: 'Page Views', value: 1000, color: '#3B82F6' },
    { name: 'Form Started', value: 300, color: '#10B981' },
    { name: 'Form Completed', value: 180, color: '#F59E0B' },
    { name: 'Converted', value: 120, color: '#8B5CF6' }
  ]

  const deviceData = analytics ? [
    { name: 'Desktop', value: analytics.device_breakdown.desktop, color: '#3B82F6' },
    { name: 'Mobile', value: analytics.device_breakdown.mobile, color: '#10B981' },
    { name: 'Tablet', value: analytics.device_breakdown.tablet, color: '#F59E0B' }
  ] : []

  const performanceData = [
    { date: 'Mon', responseTime: 1.2, errorRate: 0.1, uptime: 99.9 },
    { date: 'Tue', responseTime: 1.8, errorRate: 0.2, uptime: 99.8 },
    { date: 'Wed', responseTime: 1.5, errorRate: 0.0, uptime: 100 },
    { date: 'Thu', responseTime: 2.1, errorRate: 0.3, uptime: 99.7 },
    { date: 'Fri', responseTime: 1.9, errorRate: 0.1, uptime: 99.9 },
    { date: 'Sat', responseTime: 1.4, errorRate: 0.0, uptime: 100 },
    { date: 'Sun', responseTime: 1.6, errorRate: 0.1, uptime: 99.8 }
  ]

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Service', 'Message', 'Date', 'Form Type'],
      ...submissions.map(sub => [
        sub.name,
        sub.email,
        sub.phone,
        sub.service_type,
        sub.message?.replace(/,/g, ';') || '',
        new Date(sub.created_at).toLocaleDateString(),
        sub.form_type
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-gray-400 mt-2">
              Monitor your form performance and user engagement
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={exportToCSV}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Export Data
            </button>
            <button 
              title="Settings"
              className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        {analytics && <MetricGrid metrics={metrics} />}

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-1 bg-white/5 backdrop-blur-xl rounded-xl p-1"
        >
          {['overview', 'submissions', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'overview' | 'submissions' | 'analytics')}
              className={`
                px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 capitalize
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Conversion Funnel</h3>
                  <ConversionFunnelChart data={conversionData} />
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Device Analytics</h3>
                  <DeviceChart data={deviceData} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Real-time Activity</h3>
                  <RealTimeChart data={analytics?.daily_trend.map(d => ({
                    time: d.date,
                    views: d.views,
                    interactions: Math.floor(d.views * 0.3),
                    conversions: d.conversions
                  })) || []} />
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                  <PerformanceChart data={performanceData} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  title="Sort by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'service')}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="service">By Service</option>
                </select>
              </div>

              {/* Submissions Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-gray-300 font-medium">Name</th>
                      <th className="text-left py-4 px-4 text-gray-300 font-medium">Email</th>
                      <th className="text-left py-4 px-4 text-gray-300 font-medium">Service</th>
                      <th className="text-left py-4 px-4 text-gray-300 font-medium">Date</th>
                      <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.map((submission, index) => (
                      <motion.tr
                        key={submission.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-4 text-white font-medium">{submission.name}</td>
                        <td className="py-4 px-4 text-gray-300">{submission.email}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {submission.service_type}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-400">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            View Details
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Weekly Trends</h3>
                <RealTimeChart data={analytics?.daily_trend.map(d => ({
                  time: d.date,
                  views: d.views,
                  interactions: Math.floor(d.views * 0.3),
                  conversions: d.conversions
                })) || []} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Device Distribution</h3>
                  <DeviceChart data={deviceData} />
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">System Performance</h3>
                  <PerformanceChart data={performanceData} />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  )
}
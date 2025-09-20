import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AdminLayout from '@/components/admin/AdminLayout'
import { MetricGrid } from '@/components/admin/StatsCards'
import { ChartBarIcon, GlobeAltIcon, CalendarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

interface AnalyticsData {
  id: string
  user_id: string
  event_type: string
  page_path: string
  properties: Record<string, unknown>
  created_at: string
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      
      const token = localStorage.getItem('admin-token')
      if (!token) {
        console.error('No admin token found')
        return
      }

      const response = await fetch('/api/admin/analytics', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.success) {
        setAnalytics(result.data || [])
      } else {
        console.error('API returned error:', result.error)
      }
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  // Process data for charts
  const getPageViews = () => {
    const pageViews = analytics
      .filter(event => event.event_type === 'page_view')
      .reduce((acc: { [key: string]: number }, event) => {
        const page = event.page_path || 'Unknown'
        acc[page] = (acc[page] || 0) + 1
        return acc
      }, {})

    return Object.entries(pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10)
  }

  const getEventsByDay = () => {
    const eventsByDay = analytics.reduce((acc: { [key: string]: number }, event) => {
      const date = new Date(event.created_at).toLocaleDateString()
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})

    return Object.entries(eventsByDay)
      .map(([date, events]) => ({ date, events }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-7) // Last 7 days
  }

  const getEventTypes = () => {
    const eventTypes = analytics.reduce((acc: { [key: string]: number }, event) => {
      acc[event.event_type] = (acc[event.event_type] || 0) + 1
      return acc
    }, {})

    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']
    
    return Object.entries(eventTypes).map(([name, value], index) => ({
      name,
      value,
      color: colors[index % colors.length]
    }))
  }

  const totalEvents = analytics.length
  const uniqueUsers = new Set(analytics.map(a => a.user_id)).size
  const pageViews = analytics.filter(a => a.event_type === 'page_view').length
  const formSubmissions = analytics.filter(a => a.event_type === 'form_submit').length
  
  const conversionRate = pageViews > 0 ? ((formSubmissions / pageViews) * 100).toFixed(1) : '0'

  const metrics = [
    {
      title: 'Total Events',
      value: totalEvents,
      change: 24,
      changeType: 'increase' as const,
      icon: 'chart' as const,
      description: 'All tracked events'
    },
    {
      title: 'Unique Users',
      value: uniqueUsers,
      change: 15,
      changeType: 'increase' as const,
      icon: 'global' as const,
      description: 'Unique visitors'
    },
    {
      title: 'Page Views',
      value: pageViews,
      change: 32,
      changeType: 'increase' as const,
      icon: 'time' as const,
      description: 'Total page views'
    },
    {
      title: 'Conversion Rate',
      value: `${conversionRate}%`,
      change: 8,
      changeType: 'increase' as const,
      icon: 'conversions' as const,
      description: 'Form conversion rate'
    }
  ]

  const pageViewsData = getPageViews()
  const eventsByDay = getEventsByDay()
  const eventTypes = getEventTypes()

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
              Track user behavior and site performance
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <MetricGrid metrics={metrics} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Events Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <ArrowTrendingUpIcon className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Events Over Time</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={eventsByDay}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line type="monotone" dataKey="events" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Event Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <ChartBarIcon className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Event Types</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={eventTypes}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {eventTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <GlobeAltIcon className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Top Pages</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pageViewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="page" 
                    stroke="#9CA3AF" 
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Bar dataKey="views" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <CalendarIcon className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">Recent Events</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Event</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Page</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">User</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {analytics.slice(0, 10).map((event, index) => (
                  <motion.tr
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        event.event_type === 'page_view' ? 'bg-blue-500/20 text-blue-300' :
                        event.event_type === 'form_submit' ? 'bg-green-500/20 text-green-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {event.event_type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {event.page_path || 'Unknown'}
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {event.user_id?.substring(0, 8) || 'Anonymous'}...
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(event.created_at).toLocaleString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  )
}
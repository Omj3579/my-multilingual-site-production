import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AdminLayout from '@/components/admin/AdminLayout'
import { MetricGrid } from '@/components/admin/StatsCards'
import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline'

interface QuoteRequest {
  id: string
  first_name: string
  last_name: string
  email: string
  company: string
  country: string
  estimated_volume: string
  cart_items: Record<string, unknown> | null
  language: string
  created_at: string
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      setLoading(true)
      
      const token = localStorage.getItem('admin-token')
      if (!token) {
        console.error('No admin token found')
        return
      }

      const response = await fetch('/api/admin/quotes', {
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
        setQuotes(result.data || [])
      } else {
        console.error('API returned error:', result.error)
      }
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredQuotes = quotes.filter(quote =>
    quote.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const metrics = [
    {
      title: 'Total Quotes',
      value: quotes.length,
      change: 15,
      changeType: 'increase' as const,
      icon: 'chart' as const,
      description: 'Total quote requests'
    },
    {
      title: 'This Week',
      value: quotes.filter(q => {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return new Date(q.created_at) > weekAgo
      }).length,
      change: 22,
      changeType: 'increase' as const,
      icon: 'time' as const,
      description: 'Quotes this week'
    },
    {
      title: 'Conversion Rate',
      value: '67%',
      change: 5,
      changeType: 'increase' as const,
      icon: 'conversions' as const,
      description: 'Quote to order rate'
    },
    {
      title: 'Avg. Quote Value',
      value: '$12.5k',
      change: 8,
      changeType: 'increase' as const,
      icon: 'global' as const,
      description: 'Average quote value'
    }
  ]

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
              Quote Requests
            </h1>
            <p className="text-gray-400 mt-2">
              Manage customer quote requests and proposals
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <MetricGrid metrics={metrics} />

        {/* Quotes Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
        >
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search quotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Name</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Email</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Company</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Volume</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuotes.map((quote, index) => (
                  <motion.tr
                    key={quote.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 text-white font-medium">
                      {quote.first_name} {quote.last_name}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{quote.email}</td>
                    <td className="py-4 px-4 text-gray-300">{quote.company || 'N/A'}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {quote.estimated_volume || 'N/A'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(quote.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No quotes found</p>
            </div>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  )
}
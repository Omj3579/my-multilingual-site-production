import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AdminLayout from '@/components/admin/AdminLayout'
import { MetricGrid } from '@/components/admin/StatsCards'
import { MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/outline'

interface NewsletterSubscription {
  id: string
  email: string
  language: string
  created_at: string
  is_active?: boolean
}

export default function NewslettersPage() {
  const [newsletters, setNewsletters] = useState<NewsletterSubscription[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchNewsletters()
  }, [])

  const fetchNewsletters = async () => {
    try {
      setLoading(true)
      
      const token = localStorage.getItem('admin-token')
      if (!token) {
        console.error('No admin token found')
        return
      }

      const response = await fetch('/api/admin/newsletters', {
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
        setNewsletters(result.data || [])
      } else {
        console.error('API returned error:', result.error)
      }
    } catch (error) {
      console.error('Error fetching newsletters:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredNewsletters = newsletters.filter(newsletter =>
    newsletter.email?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeSubscriptions = newsletters.filter(n => n.is_active !== false).length

  const metrics = [
    {
      title: 'Total Subscribers',
      value: newsletters.length,
      change: 25,
      changeType: 'increase' as const,
      icon: 'chart' as const,
      description: 'Total newsletter subscribers'
    },
    {
      title: 'Active Subscribers',
      value: activeSubscriptions,
      change: 12,
      changeType: 'increase' as const,
      icon: 'conversions' as const,
      description: 'Active subscriptions'
    },
    {
      title: 'This Week',
      value: newsletters.filter(n => {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return new Date(n.created_at) > weekAgo
      }).length,
      change: 18,
      changeType: 'increase' as const,
      icon: 'time' as const,
      description: 'New subscribers this week'
    },
    {
      title: 'Growth Rate',
      value: '15.7%',
      change: 3,
      changeType: 'increase' as const,
      icon: 'global' as const,
      description: 'Monthly growth rate'
    }
  ]

  const handleUnsubscribe = async (id: string, email: string) => {
    if (confirm(`Are you sure you want to remove ${email} from the newsletter?`)) {
      try {
        const { error } = await supabase
          .from('newsletter_subscriptions')
          .delete()
          .eq('id', id)

        if (error) throw error
        
        setNewsletters(prev => prev.filter(n => n.id !== id))
      } catch (error) {
        console.error('Error removing subscriber:', error)
        alert('Failed to remove subscriber')
      }
    }
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
              Newsletter Subscribers
            </h1>
            <p className="text-gray-400 mt-2">
              Manage your newsletter subscriber list
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <MetricGrid metrics={metrics} />

        {/* Newsletter Table */}
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
                placeholder="Search subscribers..."
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
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Email</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Language</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Status</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Subscribed</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNewsletters.map((newsletter, index) => (
                  <motion.tr
                    key={newsletter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 text-white font-medium">
                      {newsletter.email}
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm uppercase">
                        {newsletter.language}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        newsletter.is_active !== false 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-red-500/20 text-red-300'
                      }`}>
                        {newsletter.is_active !== false ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(newsletter.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleUnsubscribe(newsletter.id, newsletter.email)}
                        className="text-red-400 hover:text-red-300 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <TrashIcon className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredNewsletters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No subscribers found</p>
            </div>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  )
}
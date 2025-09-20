import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AdminLayout from '@/components/admin/AdminLayout'
import { MetricGrid } from '@/components/admin/StatsCards'
import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline'

interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  company: string
  country: string
  message: string
  language: string
  created_at: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      console.log('Fetching contacts via API...')
      
      const token = localStorage.getItem('admin-token')
      if (!token) {
        console.error('No admin token found')
        return
      }

      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const result = await response.json()
      console.log('API response:', result)
      
      if (result.success) {
        console.log('Setting contacts data:', result.data)
        setContacts(result.data || [])
      } else {
        console.error('API returned error:', result.error)
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredContacts = contacts.filter(contact =>
    contact.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const metrics = [
    {
      title: 'Total Contacts',
      value: contacts.length,
      change: 8,
      changeType: 'increase' as const,
      icon: 'chart' as const,
      description: 'Total contact submissions'
    },
    {
      title: 'This Week',
      value: contacts.filter(c => {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return new Date(c.created_at) > weekAgo
      }).length,
      change: 12,
      changeType: 'increase' as const,
      icon: 'time' as const,
      description: 'Contacts this week'
    },
    {
      title: 'Response Rate',
      value: '94%',
      change: 2,
      changeType: 'increase' as const,
      icon: 'conversions' as const,
      description: 'Contact response rate'
    },
    {
      title: 'Avg. Response Time',
      value: '4.2h',
      change: undefined,
      changeType: 'neutral' as const,
      icon: 'global' as const,
      description: 'Average response time'
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
              Contact Submissions
            </h1>
            <p className="text-gray-400 mt-2">
              Manage and respond to customer inquiries
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <MetricGrid metrics={metrics} />

        {/* Contacts Table */}
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
                placeholder="Search contacts..."
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
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Country</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, index) => (
                  <motion.tr
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 text-white font-medium">
                      {contact.first_name} {contact.last_name}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{contact.email}</td>
                    <td className="py-4 px-4 text-gray-300">{contact.company || 'N/A'}</td>
                    <td className="py-4 px-4 text-gray-300">{contact.country || 'N/A'}</td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(contact.created_at).toLocaleDateString()}
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

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No contacts found</p>
            </div>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  )
}
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { 
  Users, 
  MessageSquare, 
  Mail, 
  TrendingUp,
  LogOut,
  RefreshCw,
  Download,
  Activity,
  BarChart3,
  Target
} from "lucide-react"
import { motion } from "framer-motion"

interface ContactSubmission {
  id: string
  first_name: string | null
  last_name: string | null
  email: string
  company: string | null
  country: string | null
  message: string | null
  language: string
  created_at: string
}

interface QuoteRequest {
  id: string
  first_name: string | null
  last_name: string | null
  email: string
  company: string | null
  country: string | null
  estimated_volume: string | null
  cart_items: Record<string, unknown> | null
  language: string
  created_at: string
}

interface NewsletterSubscription {
  id: string
  email: string
  language: string
  status: string
  source: string
  created_at: string
}

interface AnalyticsData {
  totalEvents: number
  conversionRates: {
    contact: number
    quote: number
    newsletter: number
  }
  dailyMetrics: Array<{
    date: string
    views: number
    starts: number
    submits: number
    successes: number
    errors: number
  }>
  deviceBreakdown: Record<string, number>
  browserBreakdown: Record<string, number>
  languageBreakdown: Record<string, number>
}

const AdminDashboard = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [newsletters, setNewsletters] = useState<NewsletterSubscription[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalQuotes: 0,
    totalNewsletters: 0,
    todaySubmissions: 0
  })

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('admin-token')
      if (!token) {
        router.push('/admin/login')
        return
      }
    }

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const token = localStorage.getItem('admin-token')
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }

        // Fetch all data in parallel
        const [contactsRes, quotesRes, newslettersRes, analyticsRes] = await Promise.all([
          fetch('/api/admin/contacts', { headers }),
          fetch('/api/admin/quotes', { headers }),
          fetch('/api/admin/newsletters', { headers }),
          fetch('/api/admin/analytics', { headers })
        ])

        let newContacts: ContactSubmission[] = []
        let newQuotes: QuoteRequest[] = []
        let newNewsletters: NewsletterSubscription[] = []

        if (contactsRes.ok) {
          const contactsData = await contactsRes.json()
          newContacts = contactsData.data || []
          setContacts(newContacts)
        }

        if (quotesRes.ok) {
          const quotesData = await quotesRes.json()
          newQuotes = quotesData.data || []
          setQuotes(newQuotes)
        }

        if (newslettersRes.ok) {
          const newslettersData = await newslettersRes.json()
          newNewsletters = newslettersData.data || []
          setNewsletters(newNewsletters)
        }

        if (analyticsRes.ok) {
          const analyticsData = await analyticsRes.json()
          setAnalytics(analyticsData.data || null)
        }

        // Calculate stats
        const today = new Date().toISOString().split('T')[0]
        const todaySubmissions = [
          ...newContacts.filter(c => c.created_at.startsWith(today)),
          ...newQuotes.filter(q => q.created_at.startsWith(today)),
          ...newNewsletters.filter(n => n.created_at.startsWith(today))
        ].length

        setStats({
          totalContacts: newContacts.length,
          totalQuotes: newQuotes.length,
          totalNewsletters: newNewsletters.filter(n => n.status === 'active').length,
          todaySubmissions
        })

      } catch (error) {
        console.error('Failed to fetch admin data:', error)
        toast({
          title: 'Error',
          description: 'Failed to load dashboard data',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    const initializeAdmin = async () => {
      checkAuth()
      await fetchData()
    }
    initializeAdmin()
  }, [router, toast])

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out',
    })
    router.push('/admin/login')
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem('admin-token')
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }

      // Fetch all data in parallel
      const [contactsRes, quotesRes, newslettersRes, analyticsRes] = await Promise.all([
        fetch('/api/admin/contacts', { headers }),
        fetch('/api/admin/quotes', { headers }),
        fetch('/api/admin/newsletters', { headers }),
        fetch('/api/admin/analytics', { headers })
      ])

      let newContacts: ContactSubmission[] = []
      let newQuotes: QuoteRequest[] = []
      let newNewsletters: NewsletterSubscription[] = []

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json()
        newContacts = contactsData.data || []
        setContacts(newContacts)
      }

      if (quotesRes.ok) {
        const quotesData = await quotesRes.json()
        newQuotes = quotesData.data || []
        setQuotes(newQuotes)
      }

      if (newslettersRes.ok) {
        const newslettersData = await newslettersRes.json()
        newNewsletters = newslettersData.data || []
        setNewsletters(newNewsletters)
      }

      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json()
        setAnalytics(analyticsData.data || null)
      }

      // Calculate stats with fresh data
      const today = new Date().toISOString().split('T')[0]
      const todaySubmissions = [
        ...newContacts.filter(c => c.created_at.startsWith(today)),
        ...newQuotes.filter(q => q.created_at.startsWith(today)),
        ...newNewsletters.filter(n => n.created_at.startsWith(today))
      ].length

      setStats({
        totalContacts: newContacts.length,
        totalQuotes: newQuotes.length,
        totalNewsletters: newNewsletters.filter(n => n.status === 'active').length,
        todaySubmissions
      })

    } catch (error) {
      console.error('Failed to fetch admin data:', error)
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const exportData = (type: string) => {
    // Simple CSV export functionality
    let csvContent = ''
    let filename = ''

    switch (type) {
      case 'contacts':
        filename = 'contact-submissions.csv'
        csvContent = [
          'ID,First Name,Last Name,Email,Company,Country,Language,Message,Created At',
          ...contacts.map(c => 
            `"${c.id}","${c.first_name || ''}","${c.last_name || ''}","${c.email}","${c.company || ''}","${c.country || ''}","${c.language}","${c.message || ''}","${c.created_at}"`
          )
        ].join('\n')
        break
      case 'quotes':
        filename = 'quote-requests.csv'
        csvContent = [
          'ID,First Name,Last Name,Email,Company,Country,Language,Volume,Cart Items,Created At',
          ...quotes.map(q => 
            `"${q.id}","${q.first_name || ''}","${q.last_name || ''}","${q.email}","${q.company || ''}","${q.country || ''}","${q.language}","${q.estimated_volume || ''}","${JSON.stringify(q.cart_items)}","${q.created_at}"`
          )
        ].join('\n')
        break
      case 'newsletters':
        filename = 'newsletter-subscriptions.csv'
        csvContent = [
          'ID,Email,Language,Status,Source,Created At',
          ...newsletters.map(n => 
            `"${n.id}","${n.email}","${n.language}","${n.status}","${n.source}","${n.created_at}"`
          )
        ].join('\n')
        break
    }

    if (!csvContent) return

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(url)

    toast({
      title: 'Export successful',
      description: `${filename} has been downloaded`,
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-lg">Loading dashboard...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage form submissions and analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={fetchData} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Contact Forms</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalContacts}</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Quote Requests</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalQuotes}</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Subscribers</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalNewsletters}</p>
                  </div>
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.todaySubmissions}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contacts">Contact Forms ({contacts.length})</TabsTrigger>
            <TabsTrigger value="quotes">Quote Requests ({quotes.length})</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletter ({newsletters.length})</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Contact Form Submissions</CardTitle>
                    <CardDescription>All contact form submissions from your website</CardDescription>
                  </div>
                  <Button onClick={() => exportData('contacts')} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No contact submissions yet</p>
                  ) : (
                    contacts.map((contact, index) => (
                      <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {contact.first_name} {contact.last_name}
                            </h3>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            <p className="text-sm text-gray-600">{contact.company} • {contact.country}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{contact.language.toUpperCase()}</Badge>
                            <span className="text-xs text-gray-500">{formatDate(contact.created_at)}</span>
                          </div>
                        </div>
                        {contact.message && (
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm">{contact.message}</p>
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Quote Requests</CardTitle>
                    <CardDescription>All quote requests with product details</CardDescription>
                  </div>
                  <Button onClick={() => exportData('quotes')} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quotes.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No quote requests yet</p>
                  ) : (
                    quotes.map((quote, index) => (
                      <motion.div
                        key={quote.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {quote.first_name} {quote.last_name}
                            </h3>
                            <p className="text-sm text-gray-600">{quote.email}</p>
                            <p className="text-sm text-gray-600">{quote.company} • {quote.country}</p>
                            {quote.estimated_volume && (
                              <p className="text-sm text-blue-600 font-medium">Volume: {quote.estimated_volume}</p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{quote.language.toUpperCase()}</Badge>
                            <span className="text-xs text-gray-500">{formatDate(quote.created_at)}</span>
                          </div>
                        </div>
                        {quote.cart_items && (
                          <div className="bg-gray-50 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2">Cart Items:</h4>
                            <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                              {JSON.stringify(quote.cart_items, null, 2)}
                            </pre>
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletters" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Newsletter Subscriptions</CardTitle>
                    <CardDescription>All newsletter subscriber data</CardDescription>
                  </div>
                  <Button onClick={() => exportData('newsletters')} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsletters.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No newsletter subscriptions yet</p>
                  ) : (
                    newsletters.map((newsletter, index) => (
                      <motion.div
                        key={newsletter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{newsletter.email}</h3>
                            <p className="text-sm text-gray-600">Source: {newsletter.source}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={newsletter.status === 'active' ? 'default' : 'secondary'}
                            >
                              {newsletter.status}
                            </Badge>
                            <Badge variant="outline">{newsletter.language.toUpperCase()}</Badge>
                            <span className="text-xs text-gray-500">{formatDate(newsletter.created_at)}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Form Analytics & Conversion Metrics
                </CardTitle>
                <CardDescription>
                  Track form performance, user behavior, and conversion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analytics ? (
                  <div className="space-y-6">
                    {/* Conversion Rates Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Contact Conversion</CardTitle>
                          <Target className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-blue-600">
                            {analytics?.conversionRates?.contact?.toFixed(1) || '0.0'}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Views to submissions
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Quote Conversion</CardTitle>
                          <Target className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">
                            {analytics?.conversionRates?.quote?.toFixed(1) || '0.0'}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Views to requests
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Newsletter Conversion</CardTitle>
                          <Target className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-purple-600">
                            {analytics?.conversionRates?.newsletter?.toFixed(1) || '0.0'}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Views to subscriptions
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Device & Browser Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Device Breakdown */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Device Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {Object.entries(analytics?.deviceBreakdown || {}).map(([device, count]) => (
                              <div key={device} className="flex justify-between items-center">
                                <span className="capitalize text-sm">{device}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-20 bg-gray-200 rounded-full h-2 relative overflow-hidden">
                                    <div 
                                      className="bg-blue-600 h-2 rounded-full absolute left-0 top-0 transition-all duration-300"
                                      style={{ width: `${Math.min(100, Math.round((count / (analytics?.totalEvents || 1)) * 100))}%` }}
                                    />
                                  </div>
                                  <span className="text-sm text-gray-600 min-w-[40px]">{count}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Browser Breakdown */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Browsers</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {Object.entries(analytics?.browserBreakdown || {}).map(([browser, count]) => (
                              <div key={browser} className="flex justify-between items-center">
                                <span className="capitalize text-sm">{browser}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-20 bg-gray-200 rounded-full h-2 relative overflow-hidden">
                                    <div 
                                      className="bg-green-600 h-2 rounded-full absolute left-0 top-0 transition-all duration-300"
                                      style={{ width: `${Math.min(100, Math.round((count / (analytics?.totalEvents || 1)) * 100))}%` }}
                                    />
                                  </div>
                                  <span className="text-sm text-gray-600 min-w-[40px]">{count}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Language Breakdown */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Language Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(analytics?.languageBreakdown || {}).map(([language, count]) => (
                            <div key={language} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-sm">
                                {language === 'en' ? '🇺🇸 English' : '🇭🇺 Hungarian'}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">{count}</span>
                                <span className="text-sm text-gray-500">
                                  ({((count / (analytics?.totalEvents || 1)) * 100).toFixed(1)}%)
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Recent Daily Metrics */}
                    {analytics?.dailyMetrics && analytics.dailyMetrics.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Recent Daily Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {analytics.dailyMetrics.slice(-7).map((day) => (
                              <div key={day.date} className="flex justify-between items-center p-3 border rounded-lg">
                                <div className="flex items-center gap-3">
                                  <Activity className="w-4 h-4 text-gray-500" />
                                  <span className="font-medium">{new Date(day.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="text-blue-600">
                                    <span className="font-medium">{day.views}</span> views
                                  </div>
                                  <div className="text-orange-600">
                                    <span className="font-medium">{day.starts}</span> starts
                                  </div>
                                  <div className="text-green-600">
                                    <span className="font-medium">{day.successes}</span> success
                                  </div>
                                  {day.errors > 0 && (
                                    <div className="text-red-600">
                                      <span className="font-medium">{day.errors}</span> errors
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No analytics data available yet.</p>
                    <p className="text-sm mt-2">Data will appear once forms start receiving interactions.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default AdminDashboard
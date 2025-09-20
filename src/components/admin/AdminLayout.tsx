import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChartBarIcon, 
  UsersIcon, 
  DocumentTextIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

interface AdminLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  title = "Admin Dashboard",
  subtitle = "Manage your website and analytics"
}) => {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notifications] = useState(3)

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    toast.success('Logged out successfully')
    router.push('/admin/login')
  }

  const navigation = [
    { 
      name: 'Dashboard', 
      href: '/admin/dashboard', 
      icon: ChartBarIcon, 
      current: router.pathname === '/admin/dashboard',
      badge: null
    },
    { 
      name: 'Analytics', 
      href: '/admin/analytics', 
      icon: ChartBarIcon, 
      current: router.pathname === '/admin/analytics',
      badge: 'New'
    },
    { 
      name: 'Contacts', 
      href: '/admin/contacts', 
      icon: UsersIcon, 
      current: router.pathname === '/admin/contacts',
      badge: null
    },
    { 
      name: 'Quotes', 
      href: '/admin/quotes', 
      icon: DocumentTextIcon, 
      current: router.pathname === '/admin/quotes',
      badge: null
    },
    { 
      name: 'Newsletter', 
      href: '/admin/newsletters', 
      icon: EnvelopeIcon, 
      current: router.pathname === '/admin/newsletters',
      badge: null
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.div 
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -280 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed inset-y-0 left-0 z-50 w-72 bg-black/40 backdrop-blur-xl border-r border-white/10"
        >
          <div className="flex flex-col h-full">
            {/* Logo Section */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ChartBarIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  FlairAdmin
                </span>
              </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => router.push(item.href)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                      item.current
                        ? 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`mr-3 w-5 h-5 ${item.current ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                    {item.name}
                    {item.badge && (
                      <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white font-medium">
                        {item.badge}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-gray-400">admin@flairplastic.com</p>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <ArrowRightOnRectangleIcon className="mr-3 w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        {/* Top Bar */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="h-16 bg-black/20 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {sidebarOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
            
            <div>
              <h1 className="text-xl font-semibold text-white">{title}</h1>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
              <BellIcon className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-medium">
                  {notifications}
                </span>
              )}
            </button>

            {/* Settings */}
            <button 
              title="Settings"
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Cog6ToothIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default AdminLayout
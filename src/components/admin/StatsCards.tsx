import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ChartBarSquareIcon
} from '@heroicons/react/24/outline'

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  changeType?: 'increase' | 'decrease' | 'neutral'
  icon?: 'views' | 'interactions' | 'conversions' | 'time' | 'mobile' | 'desktop' | 'global' | 'chart'
  description?: string
  className?: string
}

const iconMap = {
  views: EyeIcon,
  interactions: CursorArrowRaysIcon,
  conversions: CheckCircleIcon,
  time: ClockIcon,
  mobile: DevicePhoneMobileIcon,
  desktop: ComputerDesktopIcon,
  global: GlobeAltIcon,
  chart: ChartBarSquareIcon
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon = 'chart',
  description,
  className = ''
}) => {
  const IconComponent = iconMap[icon]

  const getChangeColor = (type: string) => {
    switch (type) {
      case 'increase':
        return 'text-emerald-400'
      case 'decrease':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'increase':
        return <ArrowUpIcon className="w-4 h-4" />
      case 'decrease':
        return <ArrowDownIcon className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
        backdrop-blur-xl border border-white/20 p-6 group cursor-pointer
        hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300
        ${className}
      `}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
            <IconComponent className="w-6 h-6 text-blue-400" />
          </div>
          
          {change !== undefined && (
            <div className={`flex items-center space-x-1 ${getChangeColor(changeType)}`}>
              {getChangeIcon(changeType)}
              <span className="text-sm font-medium">
                {change > 0 ? '+' : ''}{change}%
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            {title}
          </h3>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
          </div>

          {description && (
            <p className="text-sm text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
    </motion.div>
  )
}

interface MetricGridProps {
  metrics: Array<{
    title: string
    value: string | number
    change?: number
    changeType?: 'increase' | 'decrease' | 'neutral'
    icon?: 'views' | 'interactions' | 'conversions' | 'time' | 'mobile' | 'desktop' | 'global' | 'chart'
    description?: string
  }>
}

export const MetricGrid: React.FC<MetricGridProps> = ({ metrics }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {metrics.map((metric, index) => (
        <StatsCard
          key={index}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          changeType={metric.changeType}
          icon={metric.icon}
          description={metric.description}
        />
      ))}
    </motion.div>
  )
}

// Animated Number Component for counters
interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  className = 'text-3xl font-bold text-white'
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    let startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime
        startValue = displayValue
      }

      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutProgress)
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration, displayValue])

  return (
    <span className={className}>
      {displayValue.toLocaleString()}
    </span>
  )
}
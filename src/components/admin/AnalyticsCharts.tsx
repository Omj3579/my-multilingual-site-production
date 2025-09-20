import React from 'react'
import { motion } from 'framer-motion'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Custom Tooltip Component
interface TooltipPayload {
  color: string
  dataKey: string
  value: number | string
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg p-3 shadow-xl">
        <p className="text-white font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-blue-400">
            {entry.dataKey}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Conversion Funnel Chart
interface ConversionFunnelProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
}

export const ConversionFunnelChart: React.FC<ConversionFunnelProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            type="number" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <YAxis 
            type="category" 
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill="url(#colorGradient)" radius={[0, 8, 8, 0]} />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Real-time Analytics Chart
interface RealTimeChartProps {
  data: Array<{
    time: string
    views: number
    interactions: number
    conversions: number
  }>
}

export const RealTimeChart: React.FC<RealTimeChartProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#3B82F6"
            fillOpacity={1}
            fill="url(#colorViews)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="interactions"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorInteractions)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="conversions"
            stroke="#F59E0B"
            fillOpacity={1}
            fill="url(#colorConversions)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Device Analytics Pie Chart
interface DeviceChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
}

export const DeviceChart: React.FC<DeviceChartProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full bg-blue-500"
            />
            <span className="text-sm text-gray-300">{entry.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Performance Metrics Line Chart
interface PerformanceChartProps {
  data: Array<{
    date: string
    responseTime: number
    errorRate: number
    uptime: number
  }>
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="responseTime" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="errorRate" 
            stroke="#EF4444" 
            strokeWidth={3}
            dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#EF4444', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="uptime" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
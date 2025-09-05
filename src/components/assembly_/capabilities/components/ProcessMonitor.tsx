import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, CheckCircle2, Activity } from 'lucide-react';

interface ProcessStep {
  title: string;
  duration: number;
  status: 'completed' | 'active' | 'pending';
}

interface ProcessMonitorProps {
  processSteps: ProcessStep[];
  isProcessRunning: boolean;
  setIsProcessRunning: (running: boolean) => void;
  language: string;
}

const ProcessMonitor: React.FC<ProcessMonitorProps> = ({
  processSteps,
  isProcessRunning,
  setIsProcessRunning,
  language
}) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
        {/* Control Panel */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold">
            {language === 'en' ? 'Assembly Process Monitor' : 'Összeszerelési Folyamat Monitor'}
          </h4>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsProcessRunning(!isProcessRunning)}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              {isProcessRunning ? <Pause size={16} /> : <Play size={16} />}
            </button>            <button 
              className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              title={language === 'en' ? 'Reset Process' : 'Folyamat Visszaállítása'}
            >
              <RotateCcw size={16} />
            </button>
            <button 
              className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              title={language === 'en' ? 'Settings' : 'Beállítások'}
            >
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                step.status === 'completed' ? 'bg-green-600' :
                step.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'
              }`}>
                {step.status === 'completed' ? (
                  <CheckCircle2 size={16} />
                ) : step.status === 'active' ? (
                  <Activity size={16} className="animate-pulse" />
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{step.title}</span>
                  <span className="text-sm text-gray-400">{step.duration}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      step.status === 'completed' ? 'bg-green-600' :
                      step.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: step.status === 'completed' ? '100%' : 
                             step.status === 'active' ? '60%' : '0%'
                    }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center justify-between p-4 bg-blue-900/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-medium">
              {language === 'en' ? 'System Operational' : 'Rendszer Működik'}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">
              {language === 'en' ? 'Efficiency' : 'Hatékonyság'}
            </div>
            <div className="text-lg font-bold text-green-400">98.7%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMonitor;

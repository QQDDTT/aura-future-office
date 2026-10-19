import React from 'react';
import { WidgetCard } from './WidgetCard';
import { BarChart3, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export const DashboardWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const bars = [40, 70, 45, 90, 65, 80];

  return (
    <WidgetCard delay={delay} glowColor="rgba(59, 130, 246, 0.15)" className="w-80">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white/90 text-sm font-medium flex items-center">
          <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
          System Metrics
        </h3>
        <Activity className="w-4 h-4 text-blue-400/50" />
      </div>
      
      <div className="flex items-end space-x-2 h-24 mb-4">
        {bars.map((height, i) => (
          <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group overflow-hidden">
            <motion.div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600/80 to-cyan-400/80 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: delay + 0.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-white/50">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider mb-1">Efficiency</span>
          <span className="text-white/90 font-mono text-sm">98.4%</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[10px] uppercase tracking-wider mb-1">Load</span>
          <span className="text-cyan-300 font-mono text-sm">Optimal</span>
        </div>
      </div>
    </WidgetCard>
  );
};

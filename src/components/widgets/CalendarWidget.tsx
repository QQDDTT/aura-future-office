import React from 'react';
import { WidgetCard } from './WidgetCard';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CalendarWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dates = Array.from({ length: 28 }, (_, i) => i + 1);
  const activeDates = [12, 14, 15, 22];

  return (
    <WidgetCard delay={delay} glowColor="rgba(167, 139, 250, 0.15)" className="w-64">
      <div className="flex justify-between items-center mb-4 text-white/90">
        <h3 className="text-sm font-medium flex items-center">
          <CalendarIcon className="w-4 h-4 mr-2 text-purple-400" />
          Calendar
        </h3>
        <div className="flex space-x-2">
          <ChevronLeft className="w-4 h-4 text-white/50 cursor-pointer hover:text-white transition-colors" />
          <ChevronRight className="w-4 h-4 text-white/50 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day, i) => (
          <div key={i} className="text-center text-[10px] font-medium text-white/40 pb-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, i) => {
          const isActive = activeDates.includes(date);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.2 + (i * 0.01) }}
              className={`
                flex items-center justify-center h-7 text-xs rounded-full cursor-pointer
                ${isActive ? 'bg-purple-500/30 text-purple-200 border border-purple-400/50' : 'text-white/60 hover:bg-white/10'}
              `}
            >
              {date}
            </motion.div>
          );
        })}
      </div>
    </WidgetCard>
  );
};

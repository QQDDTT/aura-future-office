import React from 'react';
import { WidgetCard } from './WidgetCard';
import { Bell, CheckSquare, Square } from 'lucide-react';
import { motion } from 'framer-motion';

export const TaskWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const tasks = [
    { id: 1, text: 'Review Q3 metrics', done: true },
    { id: 2, text: 'Deploy to staging', done: false },
    { id: 3, text: 'Sync with design team', done: false },
  ];

  return (
    <WidgetCard delay={delay} glowColor="rgba(249, 115, 22, 0.15)" className="w-72">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
        <h3 className="text-white/90 text-sm font-medium flex items-center">
          <CheckSquare className="w-4 h-4 mr-2 text-orange-400" />
          タスク
        </h3>
        <div className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-full">
          <Bell className="w-3 h-3 text-white/70" />
          <span className="text-[10px] text-white/70">通知</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 + (i * 0.1) }}
            className="flex items-start space-x-3 group cursor-pointer"
          >
            <div className="mt-0.5">
              {task.done ? (
                <CheckSquare className="w-4 h-4 text-orange-400" />
              ) : (
                <Square className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
              )}
            </div>
            <span className={`text-sm ${task.done ? 'text-white/40 line-through' : 'text-white/80'}`}>
              {task.text}
            </span>
          </motion.div>
        ))}
      </div>
    </WidgetCard>
  );
};

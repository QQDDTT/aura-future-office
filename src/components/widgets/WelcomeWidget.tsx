import React from 'react';
import { WidgetCard } from './WidgetCard';
import { User, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const WelcomeWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  return (
    <WidgetCard delay={delay} glowColor="rgba(56, 189, 248, 0.2)" className="w-64">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
          <User className="w-5 h-5 text-cyan-300" />
        </div>
        <div>
          <h3 className="text-white/90 text-sm font-medium">ようこそ</h3>
          <p className="text-white/50 text-xs">Aura System</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyan-400" 
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: delay + 0.5, duration: 1 }}
          />
        </div>
        
        <div className="flex justify-between items-center text-xs text-white/60">
          <div className="flex items-center space-x-1">
            <Mail className="w-3 h-3" />
            <span>3 Unread</span>
          </div>
          <div className="flex items-center space-x-1 text-cyan-300">
            <Sparkles className="w-3 h-3" />
            <span>Optimized</span>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
};

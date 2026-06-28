import React from 'react';
import { WidgetCard } from './WidgetCard';
import { MessageSquare, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const messages = [
    { id: 1, text: "Can you review the latest PR?", isMe: false },
    { id: 2, text: "Sure, looking at it now.", isMe: true },
    { id: 3, text: "Looks good, approving!", isMe: true },
  ];

  return (
    <WidgetCard delay={delay} glowColor="rgba(34, 211, 238, 0.15)" className="w-72">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
            <MessageSquare className="w-3 h-3 text-cyan-300" />
          </div>
          <span className="text-white/90 text-sm font-medium">Team Sync</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-white/50" />
      </div>
      
      <div className="space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 + (i * 0.15), type: "spring", stiffness: 200, damping: 20 }}
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[85%] px-3 py-2 rounded-2xl text-xs
              ${msg.isMe 
                ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/20 rounded-tr-sm' 
                : 'bg-white/10 text-white/80 border border-white/5 rounded-tl-sm'}
            `}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-2">
        <div className="h-7 flex-1 bg-white/5 rounded-full border border-white/10 flex items-center px-3">
          <span className="text-[10px] text-white/30">Type a message...</span>
        </div>
      </div>
    </WidgetCard>
  );
};

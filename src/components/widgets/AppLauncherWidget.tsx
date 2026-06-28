import React from 'react';
import { WidgetCard } from './WidgetCard';
import { LayoutGrid, Mail, Mic, Globe, Briefcase, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const AppLauncherWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const apps = [
    { icon: LayoutGrid, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { icon: Mail, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { icon: Mic, color: 'text-pink-400', bg: 'bg-pink-500/20' },
    { icon: Globe, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
    { icon: Briefcase, color: 'text-orange-400', bg: 'bg-orange-500/20' },
    { icon: Camera, color: 'text-green-400', bg: 'bg-green-500/20' },
  ];

  return (
    <WidgetCard delay={delay} glowColor="rgba(168, 85, 247, 0.15)" className="w-64">
      <div className="grid grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.1 + (i * 0.05), type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center justify-center space-y-2 cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-2xl ${app.bg} flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all shadow-lg`}>
              <app.icon className={`w-5 h-5 ${app.color}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </WidgetCard>
  );
};

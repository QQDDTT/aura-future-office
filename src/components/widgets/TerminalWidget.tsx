import React from 'react';
import { WidgetCard } from './WidgetCard';
import { Terminal, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const TerminalWidget: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const lines = [
    "[INFO] Initializing quantum core...",
    "[INFO] Connecting to memory tensor: OK",
    "[WARN] Entropy level rising.",
    "[AURA] Adjusting parameters to stabilize.",
    "[SUCCESS] System ready."
  ];

  return (
    <WidgetCard delay={delay} glowColor="rgba(16, 185, 129, 0.15)" className="w-80 font-mono">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-emerald-400 text-xs font-semibold flex items-center">
          <Terminal className="w-3 h-3 mr-2" />
          Ready to Help!
        </h3>
        <ShieldCheck className="w-3 h-3 text-emerald-500/50" />
      </div>
      
      <div className="space-y-1.5 bg-black/20 p-3 rounded-lg border border-white/5">
        {lines.map((line, i) => {
          const isSuccess = line.includes('[SUCCESS]');
          const isWarn = line.includes('[WARN]');
          const isAura = line.includes('[AURA]');
          
          let color = 'text-white/60';
          if (isSuccess) color = 'text-emerald-400';
          if (isWarn) color = 'text-yellow-400';
          if (isAura) color = 'text-cyan-400';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4 + (i * 0.3) }}
              className={`text-[10px] leading-relaxed ${color}`}
            >
              {line}
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: delay + 2 }}
          className="w-2 h-3 bg-emerald-400 inline-block mt-1"
        />
      </div>
    </WidgetCard>
  );
};
